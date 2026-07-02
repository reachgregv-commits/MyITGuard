import { useEffect, useRef, useState } from 'react';

interface HyperspaceIntroProps {
  onComplete: () => void;
}

export default function HyperspaceIntro({ onComplete }: HyperspaceIntroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [showLoading, setShowLoading] = useState(false);
  const [showBrand, setShowBrand] = useState(false);
  const [fillProgress, setFillProgress] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);
    let animationFrameId: number;

    const handleResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Settings
    const COLORS = ['#39FF14', '#00FFFF']; // Neon Green & Cyan
    const GLOBE_RADIUS = 160;
    const FOV = 400;
    let phase: 'converge' | 'hold' | 'dissolve' = 'converge';
    let globeRotationY = 0;
    let globeRotationX = 0.2;

    // Generate 3D Globe Coordinates
    const targets3D: { x: number; y: number; z: number }[] = [];
    const lats = 14;
    const lons = 28;

    for (let i = 0; i <= lats; i++) {
      const phi = (Math.PI * i) / lats;
      for (let j = 0; j < lons; j++) {
        const theta = (2 * Math.PI * j) / lons;
        targets3D.push({
          x: GLOBE_RADIUS * Math.sin(phi) * Math.cos(theta),
          y: GLOBE_RADIUS * Math.cos(phi),
          z: GLOBE_RADIUS * Math.sin(phi) * Math.sin(theta),
        });
      }
    }
    for (let i = 0; i < 150; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      targets3D.push({
        x: GLOBE_RADIUS * Math.sin(phi) * Math.cos(theta),
        y: GLOBE_RADIUS * Math.cos(phi),
        z: GLOBE_RADIUS * Math.sin(phi) * Math.sin(theta),
      });
    }

    const PARTICLE_COUNT = targets3D.length;

    class Particle {
      index: number;
      char: string;
      color: string;
      x: number;
      y: number;
      vx: number;
      vy: number;
      projX: number;
      projY: number;
      scale: number;
      rotatedZ: number;
      alpha: number;

      constructor(index: number) {
        this.index = index;
        this.char = Math.random() > 0.5 ? '1' : '0';
        this.color = COLORS[Math.floor(Math.random() * COLORS.length)];

        const angle = Math.random() * Math.PI * 2;
        const distance = Math.max(W, H) + Math.random() * 1000;
        this.x = W / 2 + Math.cos(angle) * distance;
        this.y = H / 2 + Math.sin(angle) * distance;

        this.vx = 0;
        this.vy = 0;

        this.projX = 0;
        this.projY = 0;
        this.scale = 1;
        this.rotatedZ = 0;
        this.alpha = 1;
      }

      calculate3D() {
        const target = targets3D[this.index];

        let rx = target.x * Math.cos(globeRotationY) - target.z * Math.sin(globeRotationY);
        let rz = target.x * Math.sin(globeRotationY) + target.z * Math.cos(globeRotationY);

        let ry = target.y * Math.cos(globeRotationX) - rz * Math.sin(globeRotationX);
        let finalZ = target.y * Math.sin(globeRotationX) + rz * Math.cos(globeRotationX);

        this.rotatedZ = finalZ;

        this.scale = FOV / (FOV + finalZ);
        this.projX = W / 2 + rx * this.scale;
        this.projY = H / 2 - 40 + ry * this.scale;

        this.alpha = Math.max(0.1, Math.min(1, this.scale * 1.5 - 0.5));
      }

      update() {
        if (phase === 'converge' || phase === 'hold') {
          this.x += (this.projX - this.x) * 0.06;
          this.y += (this.projY - this.y) * 0.06;
        } else if (phase === 'dissolve') {
          this.x += this.vx;
          this.y += this.vy;
          this.alpha *= 0.92;
        }
      }

      draw() {
        if (this.alpha <= 0.05 || !ctx) return;

        const fontSize = Math.max(1, 14 * this.scale);

        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.font = `bold ${fontSize}px monospace`;

        if (this.rotatedZ < 0) {
          ctx.shadowBlur = 8;
          ctx.shadowColor = this.color;
        } else {
          ctx.shadowBlur = 0;
        }

        ctx.fillText(this.char, this.x, this.y);
      }
    }

    const particles: Particle[] = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new Particle(i));
    }

    const animate = () => {
      if (!ctx) return;
      
      const trailAlpha = phase === 'converge' ? 0.6 : 0.9;
      ctx.fillStyle = `rgba(0, 0, 0, ${trailAlpha})`;
      ctx.fillRect(0, 0, W, H);

      globeRotationY += 0.012;

      particles.forEach((p) => p.calculate3D());
      particles.sort((a, b) => b.rotatedZ - a.rotatedZ);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Timeline Control
    const timer1 = setTimeout(() => {
      setShowLoading(true);
      setTimeout(() => {
        setFillProgress(100);
      }, 100);
    }, 3000);

    const timer2 = setTimeout(() => {
      phase = 'dissolve';
      setShowLoading(false);

      particles.forEach((p) => {
        const speed = 15 + Math.random() * 20;
        const angle = Math.random() * Math.PI * 2;
        p.vx = Math.cos(angle) * speed;
        p.vy = Math.sin(angle) * speed;
      });

      setTimeout(() => {
        setShowBrand(true);
        setTimeout(onComplete, 2000);
      }, 400);
    }, 7000);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#000',
        zIndex: 9999,
        fontFamily: '"Saira Stencil One", sans-serif',
      }}
    >
      {/* Neon Center Line */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: 0,
          width: '100%',
          height: '2px',
          background: '#39FF14',
          boxShadow: '0 0 15px #39FF14, 0 0 30px #39FF14',
          transformOrigin: 'center',
          animation: 'pulseLine 3s ease-in-out forwards',
        }}
      />

      <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }} />

      {/* Loading UI */}
      <div
        style={{
          position: 'absolute',
          bottom: '12%',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          zIndex: 2,
          opacity: showLoading ? 1 : 0,
          transition: 'opacity 1s',
        }}
      >
        <div
          style={{
            color: '#39FF14',
            fontFamily: '"VT323", monospace',
            fontSize: '1.8rem',
            letterSpacing: '3px',
            marginBottom: '12px',
            textShadow: '0 0 8px #39FF14',
            whiteSpace: 'nowrap',
          }}
        >
          Securing Connection.
        </div>
        <div
          style={{
            width: '450px',
            height: '8px',
            border: '1px solid #00FFFF',
            boxShadow: '0 0 6px #00FFFF',
            position: 'relative',
            boxSizing: 'border-box',
          }}
        >
          <div
            style={{
              height: '100%',
              width: `${fillProgress}%`,
              background: '#00FFFF',
              boxShadow: '0 0 12px #00FFFF',
              transition: 'width 2.5s linear',
            }}
          />
        </div>
      </div>

      {/* Final Brand Reveal - Centered */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: showBrand ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(0.8)',
          zIndex: 3,
          display: 'flex',
          alignItems: 'center',
          gap: '24px',
          opacity: showBrand ? 1 : 0,
          transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
      >
        {/* MyITGuard Logo */}
        <div className="flex items-center gap-3">
          <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 100 100" fill="none">
            <path d="M10 15 L50 5 L50 95 L10 85 Z" fill="#E8D5A3" />
            <path d="M90 15 L50 5 L50 95 L90 85 Z" fill="#8B7355" />
            <path d="M30 35 Q35 50 30 65" stroke="white" strokeWidth="5" strokeLinecap="round" />
            <path d="M70 35 Q65 50 70 65" stroke="white" strokeWidth="5" strokeLinecap="round" />
            <line x1="50" y1="45" x2="50" y2="70" stroke="white" strokeWidth="5" strokeLinecap="round" />
          </svg>
          <div style={{ fontFamily: '"Saira Stencil One", cursive' }}>
            <span style={{ fontSize: '48px', fontWeight: '700', color: 'white' }}>MyIT</span>
            <span style={{ fontSize: '48px', fontWeight: '700', color: '#E8D5A3' }}>Guard</span>
          </div>
        </div>
      </div>

      {/* Add CSS animations */}
      <style>{`
        @keyframes pulseLine {
          0% { opacity: 0; transform: scaleX(0); }
          50% { opacity: 1; }
          100% { opacity: 0.7; transform: scaleX(1); }
        }
      `}</style>
    </div>
  );
}
