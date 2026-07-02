import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Shield, Lock, Users, FileCheck, AlertTriangle, ChevronRight, 
  Menu, X, Download, Calculator, BookOpen, Search, Mail, Phone, MapPin, 
  CheckCircle, ArrowRight, Globe, Award, Clock, Zap, Database, Calendar, Tag, ArrowLeft
} from 'lucide-react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import jsPDF from 'jspdf';
import ContactPage from './pages/ContactPage';
import ThreatGlossary from './pages/ThreatGlossary';
import HyperspaceIntro from './components/HyperspaceIntro';
import RoiCalculator from './components/RoiCalculator';

// MyITGuard Logo Component - Official Logo (PNG File + Text)
function MyITGuardLogo() {
  return (
    <div className="flex items-center gap-1.5 md:gap-1.0">
      {/* Helmet Icon - Optimized sizing */}
      <div className="flex items-center justify-center" style={{ width: '48px', height: '48px' }}>
        <img 
          src="/images/myitguard-logo.png" 
          alt="MyITGuard" 
          className="w-full h-full object-contain"
          style={{ transform: 'scale(1.2)' }}
        />
      </div>
      
      {/* Company Name - Saira Stencil One */}
      <div style={{ 
        fontFamily: '"Saira Stencil One", cursive', 
        fontSize: '38px', 
        lineHeight: '1',
        letterSpacing: '1.5px',
        whiteSpace: 'nowrap'
      }}>
        <span style={{ color: 'white' }}>MyITGuard</span>
      </div>
    </div>
  );
}

// Word Cloud Animation Component - Between Hero and Services
// WordCloudAnimation removed

// Animated Digital Shield Component - Security Icons Assembly
function AnimatedDigitalShield({ scrollProgress }: { scrollProgress: number }) {
  const securityIcons = [
    { id: 'firewall', name: 'Firewall', position: { x: 50, y: 25 }, enterAt: 0.05, startPos: { x: -150, y: -100 } },
    { id: 'network', name: 'Network', position: { x: 30, y: 40 }, enterAt: 0.15, startPos: { x: 200, y: -150 } },
    { id: 'laptop', name: 'Laptop', position: { x: 70, y: 40 }, enterAt: 0.25, startPos: { x: -200, y: 150 } },
    { id: 'router', name: 'Router', position: { x: 25, y: 60 }, enterAt: 0.35, startPos: { x: 250, y: 200 } },
    { id: 'cloud', name: 'Cloud', position: { x: 75, y: 60 }, enterAt: 0.45, startPos: { x: -250, y: 0 } },
    { id: 'server', name: 'Server', position: { x: 40, y: 75 }, enterAt: 0.55, startPos: { x: 250, y: -50 } },
    { id: 'security', name: 'Security', position: { x: 60, y: 75 }, enterAt: 0.65, startPos: { x: 0, y: -250 } },
  ];

  const isShieldComplete = scrollProgress > 0.95;
  const shieldColor = isShieldComplete ? '#00ff88' : '#ef4444';
  const shieldGlow = isShieldComplete ? 'rgba(0, 255, 136, 0.5)' : 'rgba(239, 68, 68, 0.5)';

  return (
    <div className="relative w-80 h-80 md:w-96 md:h-96">
      <motion.div
        className="absolute inset-0 rounded-full blur-3xl"
        style={{ 
          background: isShieldComplete 
            ? 'radial-gradient(circle, rgba(0, 255, 136, 0.5) 0%, rgba(0, 212, 255, 0.3) 50%, transparent 70%)'
            : 'radial-gradient(circle, rgba(239, 68, 68, 0.5) 0%, rgba(239, 68, 68, 0.2) 50%, transparent 70%)'
        }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <svg viewBox="0 0 100 100" className="w-full h-full relative z-10">
        <defs>
          <linearGradient id="shieldGradientComplete" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00ff88" />
            <stop offset="50%" stopColor="#00d4ff" />
            <stop offset="100%" stopColor="#00ff88" />
          </linearGradient>
          <linearGradient id="shieldGradientIncomplete" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="50%" stopColor="#dc2626" />
            <stop offset="100%" stopColor="#ef4444" />
          </linearGradient>
          <filter id="shieldGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <motion.path
          d="M50 5 L85 20 L85 50 C85 75 50 95 50 95 C50 95 15 75 15 50 V20 L50 5Z"
          fill={isShieldComplete ? 'rgba(0, 255, 136, 0.1)' : 'rgba(239, 68, 68, 0.1)'}
          stroke={isShieldComplete ? 'url(#shieldGradientComplete)' : 'url(#shieldGradientIncomplete)'}
          strokeWidth="2.5"
          filter="url(#shieldGlow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1,
            opacity: 1,
            fill: isShieldComplete ? 'rgba(0, 255, 136, 0.15)' : 'rgba(239, 68, 68, 0.1)'
          }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        {securityIcons.map((icon) => {
          const iconVisible = scrollProgress > icon.enterAt;
          
          return (
            <g key={icon.id}>
              <motion.g
                initial={{ 
                  opacity: 0,
                  x: icon.startPos.x,
                  y: icon.startPos.y,
                  scale: 0.5
                }}
                animate={{ 
                  opacity: iconVisible ? 1 : 0,
                  x: iconVisible ? 0 : icon.startPos.x,
                  y: iconVisible ? 0 : icon.startPos.y,
                  scale: iconVisible ? 1 : 0.5
                }}
                transition={{ 
                  duration: 1.2, 
                  delay: icon.enterAt * 0.3,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              >
                <g transform={`translate(${icon.position.x - 6}, ${icon.position.y - 6}) scale(0.1)`}>
                  {icon.id === 'firewall' && (
                    <g stroke={shieldColor} strokeWidth="6" fill="none" filter="url(#shieldGlow)">
                      <rect x="20" y="30" width="60" height="50" fill="none" />
                      <line x1="20" y1="40" x2="80" y2="40" />
                      <line x1="20" y1="50" x2="80" y2="50" />
                      <line x1="20" y1="60" x2="80" y2="60" />
                      <line x1="20" y1="70" x2="80" y2="70" />
                      <line x1="50" y1="30" x2="50" y2="40" />
                      <line x1="35" y1="40" x2="35" y2="50" />
                      <line x1="65" y1="40" x2="65" y2="50" />
                      <line x1="50" y1="50" x2="50" y2="60" />
                      <line x1="35" y1="60" x2="35" y2="70" />
                      <line x1="65" y1="60" x2="65" y2="70" />
                      <path d="M70 75 Q80 65 75 55 Q85 65 80 75" fill={shieldColor} stroke="none" />
                    </g>
                  )}
                  {icon.id === 'server' && (
                    <g stroke={shieldColor} strokeWidth="6" fill="none" filter="url(#shieldGlow)">
                      <ellipse cx="50" cy="35" rx="30" ry="10" />
                      <line x1="20" y1="35" x2="20" y2="75" />
                      <line x1="80" y1="35" x2="80" y2="75" />
                      <path d="M20 75 Q50 85 80 75" />
                      <line x1="35" y1="50" x2="65" y2="50" stroke={shieldColor} strokeWidth="4" />
                      <line x1="35" y1="60" x2="65" y2="60" stroke={shieldColor} strokeWidth="4" />
                      <line x1="35" y1="70" x2="65" y2="70" stroke={shieldColor} strokeWidth="4" />
                    </g>
                  )}
                  {icon.id === 'laptop' && (
                    <g stroke={shieldColor} strokeWidth="6" fill="none" filter="url(#shieldGlow)">
                      <rect x="25" y="25" width="50" height="35" rx="3" />
                      <circle cx="50" cy="42" r="10" />
                      <line x1="40" y1="42" x2="60" y2="42" />
                      <line x1="50" y1="32" x2="50" y2="52" />
                      <line x1="20" y1="65" x2="80" y2="65" />
                      <line x1="25" y1="65" x2="20" y2="70" />
                      <line x1="75" y1="65" x2="80" y2="70" />
                    </g>
                  )}
                  {icon.id === 'router' && (
                    <g stroke={shieldColor} strokeWidth="6" fill="none" filter="url(#shieldGlow)">
                      <rect x="25" y="40" width="50" height="25" rx="3" />
                      <line x1="35" y1="40" x2="30" y2="25" />
                      <line x1="65" y1="40" x2="70" y2="25" />
                      <path d="M30 20 Q50 10 70 20" />
                      <path d="M35 15 Q50 5 65 15" />
                      <circle cx="50" cy="12" r="3" fill={shieldColor} stroke="none" />
                      <circle cx="35" cy="50" r="2" fill={shieldColor} stroke="none" />
                      <circle cx="45" cy="50" r="2" fill={shieldColor} stroke="none" />
                      <circle cx="55" cy="50" r="2" fill={shieldColor} stroke="none" />
                      <circle cx="65" cy="50" r="2" fill={shieldColor} stroke="none" />
                    </g>
                  )}
                  {icon.id === 'cloud' && (
                    <g stroke={shieldColor} strokeWidth="6" fill="none" filter="url(#shieldGlow)">
                      <path d="M25 55 Q25 40 40 40 Q40 25 55 25 Q70 25 75 40 Q90 40 90 55 Q90 70 75 70 L40 70 Q25 70 25 55" />
                      <line x1="40" y1="70" x2="40" y2="80" />
                      <line x1="55" y1="70" x2="55" y2="80" />
                      <line x1="70" y1="70" x2="70" y2="80" />
                      <circle cx="40" cy="82" r="3" fill={shieldColor} stroke="none" />
                      <circle cx="55" cy="82" r="3" fill={shieldColor} stroke="none" />
                      <circle cx="70" cy="82" r="3" fill={shieldColor} stroke="none" />
                    </g>
                  )}
                  {icon.id === 'network' && (
                    <g stroke={shieldColor} strokeWidth="6" fill="none" filter="url(#shieldGlow)">
                      <circle cx="50" cy="45" r="20" />
                      <line x1="30" y1="45" x2="70" y2="45" />
                      <line x1="50" y1="25" x2="50" y2="65" />
                      <path d="M35 35 Q50 45 65 35" />
                      <path d="M35 55 Q50 45 65 55" />
                      <circle cx="30" cy="70" r="4" fill={shieldColor} stroke="none" />
                      <circle cx="50" cy="75" r="4" fill={shieldColor} stroke="none" />
                      <circle cx="70" cy="70" r="4" fill={shieldColor} stroke="none" />
                      <line x1="30" y1="70" x2="50" y2="75" />
                      <line x1="50" y1="75" x2="70" y2="70" />
                    </g>
                  )}
                  {icon.id === 'security' && (
                    <g stroke={shieldColor} strokeWidth="6" fill="none" filter="url(#shieldGlow)">
                      <path d="M50 20 L70 30 L70 50 Q70 70 50 80 Q30 70 30 50 L30 30 L50 20" />
                      <path d="M40 50 L50 60 L65 40" strokeWidth="8" />
                      <path d="M45 35 Q50 30 55 35" strokeWidth="4" />
                      <path d="M42 40 Q50 33 58 40" strokeWidth="4" />
                      <circle cx="50" cy="45" r="3" fill={shieldColor} stroke="none" />
                    </g>
                  )}
                </g>
              </motion.g>
            </g>
          );
        })}

        <motion.g
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ 
            opacity: isShieldComplete ? 1 : 0,
            scale: isShieldComplete ? 1 : 0,
            rotate: isShieldComplete ? 0 : -180
          }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <g transform="translate(35, 35) scale(0.3)">
            <rect x="10" y="40" width="80" height="60" rx="8" 
              fill={shieldColor} stroke="none" filter="url(#shieldGlow)" />
            <path d="M30 40 L30 25 C30 10 70 10 70 25 L70 40" 
              stroke={shieldColor} strokeWidth="12" fill="none" filter="url(#shieldGlow)" />
            <circle cx="50" cy="65" r="8" fill="#0a1628" stroke="none" />
            <path d="M50 73 L50 90 L45 90 L45 95 L55 95 L55 90 L50 90" fill="#0a1628" />
          </g>
        </motion.g>

        <motion.text
          x="50"
          y="98"
          textAnchor="middle"
          fontSize="8"
          fontWeight="bold"
          fill={shieldColor}
          filter="url(#shieldGlow)"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: scrollProgress > 0.9 ? 1 : 0,
            y: scrollProgress > 0.9 ? 98 : 102
          }}
          transition={{ duration: 0.4 }}
        >
          {isShieldComplete ? '✓ PROTECTED' : 'SECURING...'}
        </motion.text>
      </svg>

      <motion.div
        className="absolute inset-0 border-2 border-dashed rounded-full"
        style={{ 
          borderColor: shieldGlow, 
          boxShadow: `0 0 30px ${shieldGlow}` 
        }}
        initial={{ rotate: 0, scale: 0.95 }}
        animate={{ 
          rotate: 360,
          scale: isShieldComplete ? [0.98, 1.02, 0.98] : 0.95
        }}
        transition={{ 
          rotate: { duration: 40, repeat: Infinity, ease: "linear" },
          scale: { duration: 2, repeat: Infinity }
        }}
      />
      
      {isShieldComplete && (
        <motion.div
          className="absolute inset-0 rounded-full border-2"
          style={{ 
            borderColor: 'rgba(0, 255, 136, 0.6)',
            boxShadow: '0 0 60px rgba(0, 255, 136, 0.6), inset 0 0 60px rgba(0, 255, 136, 0.3)'
          }}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ 
            scale: [0.9, 1.1, 0.9],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}
    </div>
  );
}

// Blog Article Type
interface BlogArticle {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  seoKeywords: string;
}

// Blog Data - 25 SEO-Optimized Articles
const blogArticles: BlogArticle[] = [
  { id: 1, title: 'HIPAA Compliance Checklist 2026: Complete Guide', excerpt: 'Everything you need to know about HIPAA compliance in 2026.', category: 'Compliance', date: 'Jan 15, 2026', readTime: '12 min', seoKeywords: 'HIPAA compliance, healthcare security' },
  { id: 2, title: 'SOC 2 Type II vs Type I Certification Guide', excerpt: 'Learn the key differences between SOC 2 Type I and Type II.', category: 'Compliance', date: 'Jan 12, 2026', readTime: '10 min', seoKeywords: 'SOC 2 certification, security audit' },
  { id: 3, title: 'CMMC 2.0 Requirements for Defense Contractors', excerpt: 'CMMC 2.0 is here. Learn the new requirements and compliance levels.', category: 'Compliance', date: 'Jan 10, 2026', readTime: '15 min', seoKeywords: 'CMMC 2.0, defense contractor, NIST 800-171' },
  { id: 4, title: 'Virtual CISO vs Full-Time CISO Cost Analysis', excerpt: 'Should you hire a full-time CISO or go virtual?', category: 'Virtual CISO', date: 'Jan 8, 2026', readTime: '11 min', seoKeywords: 'Virtual CISO cost, vCISO, security budget' },
  { id: 5, title: 'How to Build a Human Firewall', excerpt: 'Your employees are your first line of defense.', category: 'Security Training', date: 'Jan 5, 2026', readTime: '13 min', seoKeywords: 'human firewall, security training, phishing' },
  { id: 6, title: '2026 Cybersecurity Threat Landscape: Top 10', excerpt: 'Stay ahead of cybercriminals with these threat insights.', category: 'Threat Intelligence', date: 'Jan 3, 2026', readTime: '14 min', seoKeywords: 'cybersecurity threats 2026, ransomware' },
  { id: 7, title: 'Zero Trust Architecture Implementation Guide', excerpt: 'Zero Trust is no longer optional for enterprises.', category: 'Security Best Practices', date: 'Dec 28, 2025', readTime: '16 min', seoKeywords: 'Zero Trust, network security' },
  { id: 8, title: 'Incident Response Planning Step-by-Step', excerpt: 'When a security incident occurs, your plan matters.', category: 'Security Best Practices', date: 'Dec 25, 2025', readTime: '12 min', seoKeywords: 'incident response, IR plan, breach' },
  { id: 9, title: 'Multi-Factor Authentication Best Practices 2026', excerpt: 'MFA is essential but implementation matters.', category: 'Security Best Practices', date: 'Dec 22, 2025', readTime: '9 min', seoKeywords: 'MFA, multi-factor authentication, FIDO2' },
  { id: 10, title: 'Cloud Security Checklist for AWS Azure GCP', excerpt: 'Moving to the cloud? Secure it properly.', category: 'Cloud Security', date: 'Dec 20, 2025', readTime: '14 min', seoKeywords: 'cloud security, AWS, Azure, GCP' },
  { id: 11, title: 'Ransomware Protection Prevention and Recovery', excerpt: 'Ransomware attacks are increasing rapidly.', category: 'Threat Intelligence', date: 'Dec 18, 2025', readTime: '13 min', seoKeywords: 'ransomware protection, backup strategy' },
  { id: 12, title: 'Penetration Testing 101 What to Expect', excerpt: 'Planning a penetration test? Here is what to know.', category: 'Security Assessment', date: 'Dec 15, 2025', readTime: '11 min', seoKeywords: 'penetration testing, pen test' },
  { id: 13, title: 'GDPR Compliance for US Businesses', excerpt: 'US businesses must comply with GDPR for EU customers.', category: 'Compliance', date: 'Dec 12, 2025', readTime: '12 min', seoKeywords: 'GDPR compliance, EU data protection' },
  { id: 14, title: 'Security Awareness Training Building Culture', excerpt: 'Technology alone will not protect you.', category: 'Security Training', date: 'Dec 10, 2025', readTime: '10 min', seoKeywords: 'security awareness, security culture' },
  { id: 15, title: 'Data Breach Response Legal Requirements', excerpt: 'Data breaches require swift compliant response.', category: 'Incident Response', date: 'Dec 8, 2025', readTime: '14 min', seoKeywords: 'data breach, breach notification' },
  { id: 16, title: 'Password Management Best Practices', excerpt: 'Passwords remain critical for security.', category: 'Security Best Practices', date: 'Dec 5, 2025', readTime: '9 min', seoKeywords: 'password management, credential security' },
  { id: 17, title: 'Vendor Risk Management Supply Chain Security', excerpt: 'Your vendors can be your weakest link.', category: 'Risk Management', date: 'Dec 3, 2025', readTime: '11 min', seoKeywords: 'vendor risk, third-party risk' },
  { id: 18, title: 'Network Segmentation Design and Implementation', excerpt: 'Network segmentation limits breach impact.', category: 'Network Security', date: 'Dec 1, 2025', readTime: '13 min', seoKeywords: 'network segmentation, micro-segmentation' },
  { id: 19, title: 'Email Security Protecting Against Phishing', excerpt: 'Email remains the number one attack vector.', category: 'Email Security', date: 'Nov 28, 2025', readTime: '10 min', seoKeywords: 'email security, phishing, BEC' },
  { id: 20, title: 'Compliance Automation Tools and Strategies', excerpt: 'Manual compliance is unsustainable.', category: 'Compliance', date: 'Nov 25, 2025', readTime: '12 min', seoKeywords: 'compliance automation, SOC 2' },
  { id: 21, title: 'Security Metrics That Matter KPIs for CISOs', excerpt: 'Measure what matters for security programs.', category: 'Security Management', date: 'Nov 22, 2025', readTime: '11 min', seoKeywords: 'security metrics, security KPIs' },
  { id: 22, title: 'Remote Work Security Best Practices', excerpt: 'Remote work is here to stay.', category: 'Remote Security', date: 'Nov 20, 2025', readTime: '10 min', seoKeywords: 'remote work security, endpoint' },
  { id: 23, title: 'Cybersecurity Insurance 2026 Guide', excerpt: 'Cyber insurance requirements are tightening.', category: 'Risk Management', date: 'Nov 18, 2025', readTime: '12 min', seoKeywords: 'cyber insurance, cyber liability' },
  { id: 24, title: 'API Security Protecting Digital Interfaces', excerpt: 'APIs are under attack.', category: 'Application Security', date: 'Nov 15, 2025', readTime: '11 min', seoKeywords: 'API security, API vulnerabilities' },
  { id: 25, title: 'Security Operations Center Building Your SOC', excerpt: 'Learn what it takes to establish a SOC.', category: 'Security Operations', date: 'Nov 12, 2025', readTime: '14 min', seoKeywords: 'SOC, Security Operations Center, SIEM' },
  { id: 26, title: 'What is a Zero-Day Exploit? Complete Guide', excerpt: 'Learn what zero-day exploits are and how to protect against these unknown vulnerabilities.', category: 'Threat Intelligence', date: 'Nov 10, 2025', readTime: '8 min', seoKeywords: 'zero-day exploit, what is zero-day, vulnerability' },
  { id: 27, title: 'What is Ransomware? Definition and Protection', excerpt: 'Understanding ransomware attacks and how to protect your organization from this growing threat.', category: 'Threat Intelligence', date: 'Nov 8, 2025', readTime: '9 min', seoKeywords: 'what is ransomware, ransomware definition, malware' },
  { id: 28, title: 'What is Phishing? How to Recognize and Avoid', excerpt: 'Phishing is the most common cyber attack. Learn to identify and avoid phishing attempts.', category: 'Security Training', date: 'Nov 6, 2025', readTime: '7 min', seoKeywords: 'what is phishing, phishing attack, email security' },
  { id: 29, title: 'What is Spear Phishing? Targeted Attack Guide', excerpt: 'Spear phishing targets specific individuals. Learn how these personalized attacks work.', category: 'Threat Intelligence', date: 'Nov 4, 2025', readTime: '8 min', seoKeywords: 'what is spear phishing, targeted phishing, social engineering' },
  { id: 30, title: 'What is Malware? Types and Prevention', excerpt: 'Malware comes in many forms. Learn about viruses, trojans, worms, and how to prevent infection.', category: 'Threat Intelligence', date: 'Nov 2, 2025', readTime: '10 min', seoKeywords: 'what is malware, malware types, virus protection' },
  { id: 31, title: 'What is a Firewall? Network Security Basics', excerpt: 'Firewalls are fundamental to network security. Learn how they work and why you need one.', category: 'Network Security', date: 'Oct 30, 2025', readTime: '7 min', seoKeywords: 'what is firewall, network security, firewall types' },
  { id: 32, title: 'What is Encryption? Data Protection Explained', excerpt: 'Encryption protects your data. Learn about symmetric, asymmetric, and end-to-end encryption.', category: 'Security Best Practices', date: 'Oct 28, 2025', readTime: '9 min', seoKeywords: 'what is encryption, data encryption, encryption types' },
  { id: 33, title: 'What is Two-Factor Authentication? 2FA Guide', excerpt: 'Two-factor authentication adds critical security. Learn how 2FA works and how to use it.', category: 'Security Best Practices', date: 'Oct 26, 2025', readTime: '6 min', seoKeywords: 'what is 2FA, two-factor authentication, account security' },
  { id: 34, title: 'What is a DDoS Attack? Prevention Strategies', excerpt: 'Distributed Denial of Service attacks can take down your services. Learn how to prevent them.', category: 'Threat Intelligence', date: 'Oct 24, 2025', readTime: '8 min', seoKeywords: 'what is DDoS, DDoS attack, denial of service' },
  { id: 35, title: 'What is Social Engineering? Human Hacking', excerpt: 'Social engineering manipulates people, not systems. Learn to recognize these psychological attacks.', category: 'Security Training', date: 'Oct 22, 2025', readTime: '8 min', seoKeywords: 'what is social engineering, human hacking, manipulation' },
  { id: 36, title: 'What is a Botnet? Understanding Zombie Networks', excerpt: 'Botnets power many cyber attacks. Learn how these networks of infected devices operate.', category: 'Threat Intelligence', date: 'Oct 20, 2025', readTime: '7 min', seoKeywords: 'what is botnet, zombie network, infected devices' },
  { id: 37, title: 'What is a VPN? Virtual Private Network Guide', excerpt: 'VPNs secure your internet connection. Learn how they work and when to use one.', category: 'Security Best Practices', date: 'Oct 18, 2025', readTime: '7 min', seoKeywords: 'what is VPN, virtual private network, secure connection' },
  { id: 38, title: 'What is SQL Injection? Database Attack Prevention', excerpt: 'SQL injection attacks target databases. Learn how these attacks work and how to prevent them.', category: 'Application Security', date: 'Oct 16, 2025', readTime: '9 min', seoKeywords: 'what is SQL injection, database attack, web security' },
  { id: 39, title: 'What is a Man-in-the-Middle Attack? MITM Explained', excerpt: 'MITM attacks intercept communications. Learn how they work and how to protect yourself.', category: 'Threat Intelligence', date: 'Oct 14, 2025', readTime: '8 min', seoKeywords: 'what is MITM attack, man-in-the-middle, interception' },
  { id: 40, title: 'What is a Trojan Horse? Malware Disguised as Legitimate', excerpt: 'Trojans hide malicious code in seemingly harmless programs. Learn to identify and avoid them.', category: 'Threat Intelligence', date: 'Oct 12, 2025', readTime: '7 min', seoKeywords: 'what is trojan, trojan horse, malicious software' },
  { id: 41, title: 'What is Spyware? Hidden Surveillance Software', excerpt: 'Spyware secretly monitors your activities. Learn how to detect and remove spyware.', category: 'Threat Intelligence', date: 'Oct 10, 2025', readTime: '6 min', seoKeywords: 'what is spyware, surveillance software, privacy protection' },
  { id: 42, title: 'What is Adware? Understanding Ad-Supported Malware', excerpt: 'Adware displays unwanted advertisements and can compromise security. Learn to identify it.', category: 'Threat Intelligence', date: 'Oct 8, 2025', readTime: '6 min', seoKeywords: 'what is adware, ad-supported malware, unwanted ads' },
  { id: 43, title: 'What is a Rootkit? Deep System Infection', excerpt: 'Rootkits hide deep in your system. Learn about these stealthy threats and detection methods.', category: 'Threat Intelligence', date: 'Oct 6, 2025', readTime: '8 min', seoKeywords: 'what is rootkit, system infection, stealth malware' },
  { id: 44, title: 'What is Whaling? Executive Targeted Phishing', excerpt: 'Whaling attacks target high-level executives. Learn about these sophisticated phishing attempts.', category: 'Threat Intelligence', date: 'Oct 4, 2025', readTime: '7 min', seoKeywords: 'what is whaling, executive phishing, CEO fraud' },
  { id: 45, title: 'What is Cryptojacking? Hidden Cryptocurrency Mining', excerpt: 'Cryptojacking uses your resources to mine cryptocurrency. Learn to detect and prevent it.', category: 'Threat Intelligence', date: 'Oct 2, 2025', readTime: '7 min', seoKeywords: 'what is cryptojacking, cryptocurrency mining, resource theft' },
];

// Navigation Component
function Navigation({ activeSection, setActiveSection }: { activeSection: string, setActiveSection: (section: string) => void }) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollTimeout, setScrollTimeout] = useState<NodeJS.Timeout | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(true);
      if (scrollTimeout) clearTimeout(scrollTimeout);
      const timeout = setTimeout(() => {
        if (currentScrollY > 100) setIsVisible(false);
      }, 5000);
      setScrollTimeout(timeout);
      setLastScrollY(currentScrollY);
      if (currentScrollY < lastScrollY || currentScrollY < 100) setIsVisible(true);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [lastScrollY, scrollTimeout]);
 
  const navItems = [
    { id: 'home', label: 'Home', path: '#home' },
    { id: 'services', label: 'Services', path: '#services' },
    { id: 'resources', label: 'Resources', path: '#resources' },
    { id: 'plans', label: 'Plans', path: '#plans' },
    { id: 'blog', label: 'Blog', path: '#blog' },
    { id: 'about', label: 'About', path: '#about' },
    { id: 'contact', label: 'Contact', path: '#contact' },
  ];

  const handleNavClick = (item: typeof navItems[0]) => {
    const targetId = item.path.startsWith('#') ? item.path.replace('#', '') : null;
    if (targetId) {
      if (location.pathname !== '/') {
        window.location.href = `/#${targetId}`;
      } else {
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      window.location.href = item.path;
    }
    setActiveSection(item.id);
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isVisible ? 'translate-y-0' : '-translate-y-full'} ${window.scrollY > 50 ? 'glass-card mx-4 mt-4 rounded-2xl' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavClick(navItems[0])} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <MyITGuardLogo />
          </motion.div>
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => handleNavClick(item)} className={`nav-link text-sm font-medium ${activeSection === item.id ? 'text-cyber-green' : ''}`}>{item.label}</button>
            ))}
            <button className="btn-primary text-sm" onClick={() => handleNavClick(navItems[6])}>Get Free Consultation</button>
          </div>
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden mt-4 pb-4 space-y-4">
              {navItems.map((item) => (
                <button key={item.id} onClick={() => handleNavClick(item)} className="block w-full text-left py-2 text-white hover:text-cyber-green transition-colors">{item.label}</button>
              ))}
              <button className="btn-primary w-full text-sm" onClick={() => handleNavClick(navItems[6])}>Get Free Consultation</button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

// Hero Section
function HeroSection({ onNavigate }: { onNavigate: (section: string) => void }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 180]);
  const opacity = useTransform(scrollY, [0, 450], [1, 0]);

  return (
    <section id="home" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid" />
      <motion.div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(0, 255, 136, 0.1)' }} animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 4, repeat: Infinity }} />
      <motion.div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(0, 212, 255, 0.1)' }} animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 5, repeat: Infinity }} />
      <motion.div className="relative z-10 max-w-7xl mx-auto px-6 text-center" style={{ y, opacity }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="flex items-center justify-center gap-2 mb-6">
            <Shield className="w-4 h-4" style={{ color: '#00ff88' }} />
            <span style={{ fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: '#00ff88', fontSize: '13px' }}>Guarding Every Byte</span>
          </div>
        </motion.div>
        <motion.h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
          Protect Your Business with <span className="gradient-text">Cutting-Edge</span><br />Cybersecurity Solutions
        </motion.h1>
        <motion.p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
          Virtual CISO services, compliance management (HIPAA, SOC 2, CMMC), and security awareness training to safeguard your digital assets.
        </motion.p>
        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
          <button className="btn-primary flex items-center justify-center gap-2" onClick={() => onNavigate('contact')}><Shield className="w-5 h-5" />Start Free Consultation<ArrowRight className="w-5 h-5" /></button>
          <button className="btn-secondary flex items-center justify-center gap-2" onClick={() => onNavigate('roi')}><Calculator className="w-5 h-5" />Calculate ROI</button>
        </motion.div>
      </motion.div>
      
      {/* Stats Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mt-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            { value: '500+', label: 'Clients secured', color: '#00ff88', icon: <Shield className="w-5 h-5" /> },
            { value: '99.9%', label: 'Threat detection', color: '#00d4ff', icon: <Zap className="w-5 h-5" /> },
            { value: '250K+', label: 'Endpoints protected', color: '#00ff88', icon: <Database className="w-5 h-5" /> },
            { value: '10K+', label: 'Active learners', color: '#a78bfa', icon: <Users className="w-5 h-5" /> },
            { value: '24/7', label: 'Monitoring & IR', color: '#f472b6', icon: <Clock className="w-5 h-5" /> },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, ease: 'easeOut', delay: index * 0.08 }}
              className="glass-card p-4 flex items-center gap-3 border border-white/5"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${stat.color}22`, color: stat.color, boxShadow: `0 0 18px ${stat.color}40` }}
              >
                {stat.icon}
              </div>
              <div>
                <div className="text-xl font-extrabold leading-tight" style={{ color: stat.color }}>
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-[0.18em] text-slate-300">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Service Details Data
const serviceDetails: Record<string, { fullDescription: string; benefits: string[]; deliverables: string[]; cta: string }> = {
  'Virtual CISO (vCISO)': {
    fullDescription: 'Our Virtual CISO service provides executive-level cybersecurity leadership without the cost of a full-time hire. You get strategic guidance, policy development, and board-level reporting from experienced security professionals.',
    benefits: ['Cost-effective alternative to full-time CISO', 'Access to team of security experts', 'Flexible engagement models', 'Strategic security roadmap', 'Compliance guidance'],
    deliverables: ['Security strategy document', 'Risk assessment reports', 'Policy and procedure development', 'Board presentation materials', 'Quarterly business reviews'],
    cta: 'Schedule vCISO Consultation'
  },
  'Compliance Solutions': {
    fullDescription: 'Navigate complex compliance requirements with expert guidance. We help you achieve and maintain compliance with HIPAA, SOC 2, CMMC, and other regulatory frameworks.',
    benefits: ['Expert compliance guidance', 'Reduced audit preparation time', 'Continuous compliance monitoring', 'Gap assessment and remediation', 'Documentation support'],
    deliverables: ['Compliance gap assessment', 'Policy templates', 'Audit preparation support', 'Continuous monitoring reports', 'Certification support'],
    cta: 'Get Compliance Assessment'
  },
  'Cyber Risk Assessment': {
    fullDescription: 'Identify vulnerabilities before attackers do. Our comprehensive risk assessments include vulnerability scanning, penetration testing, and detailed remediation planning.',
    benefits: ['Identify security weaknesses', 'Prioritize remediation efforts', 'Meet compliance requirements', 'Reduce breach risk', 'Executive reporting'],
    deliverables: ['Vulnerability scan results', 'Penetration test report', 'Risk assessment matrix', 'Remediation roadmap', 'Executive summary'],
    cta: 'Request Risk Assessment'
  },
  'Security Awareness Training': {
    fullDescription: 'Transform your employees into a human firewall with engaging, effective security awareness training. Our programs include interactive modules, phishing simulations, and progress tracking.',
    benefits: ['Reduce phishing susceptibility', 'Build security culture', 'Meet compliance training requirements', 'Track employee progress', 'Custom content available'],
    deliverables: ['Training platform access', 'Phishing simulation campaigns', 'Progress reports', 'Custom training content', 'Certificate of completion'],
    cta: 'Start Security Training'
  },
  'Managed Security Services': {
    fullDescription: '24/7 security monitoring and incident response to protect your organization around the clock. Our SOC team watches for threats and responds immediately to incidents.',
    benefits: ['24/7 threat monitoring', 'Rapid incident response', 'Expert security analysts', 'Advanced threat detection', 'Reduced security overhead'],
    deliverables: ['SIEM management', 'Threat alerts', 'Incident response', 'Monthly security reports', 'Quarterly reviews'],
    cta: 'Get 24/7 Protection'
  },
  'Data Protection': {
    fullDescription: 'Protect your most valuable asset - your data. Our data protection services include encryption, backup solutions, and data loss prevention to ensure your data stays secure.',
    benefits: ['Prevent data breaches', 'Ensure data availability', 'Meet data protection regulations', 'Reduce data loss risk', 'Secure data lifecycle'],
    deliverables: ['Data classification', 'Encryption implementation', 'Backup strategy', 'DLP solution deployment', 'Data protection policies'],
    cta: 'Protect Your Data'
  }
};

// Services Section
function ServicesSection({ onServiceSelect }: { onServiceSelect: (service: string) => void }) {
  const [shieldProgress, setShieldProgress] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        const rect = servicesSection.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const scrollProgress = Math.max(0, Math.min(1, (viewportHeight - rect.top) / (viewportHeight * 0.8)));
        setShieldProgress(scrollProgress);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { icon: <Users className="w-8 h-8" />, title: 'Virtual CISO (vCISO)', description: 'Executive-level cybersecurity leadership without the full-time cost.', features: ['Security Strategy', 'Risk Management', 'Policy Development', 'Board Reporting'], badge: 'Most Popular' },
    { icon: <FileCheck className="w-8 h-8" />, title: 'Compliance Solutions', description: 'Achieve compliance with HIPAA, SOC 2, CMMC frameworks.', features: ['HIPAA Compliance', 'SOC 2 Preparation', 'CMMC Certification', 'Continuous Monitoring'], badge: 'Certified Experts' },
    { icon: <AlertTriangle className="w-8 h-8" />, title: 'Cyber Risk Assessment', description: 'Comprehensive security audits and vulnerability assessments.', features: ['Vulnerability Scanning', 'Penetration Testing', 'Risk Analysis', 'Remediation Planning'], badge: null },
    { icon: <Users className="w-8 h-8" />, title: 'Security Awareness Training', description: 'Transform employees into a human firewall.', features: ['Interactive Training', 'Phishing Simulations', 'Custom Content', 'Progress Tracking'], badge: 'Proven Results' },
    { icon: <Lock className="w-8 h-8" />, title: 'Managed Security Services', description: '24/7 security monitoring and incident response.', features: ['24/7 Monitoring', 'Incident Response', 'Threat Hunting', 'SIEM Management'], badge: null },
    { icon: <Database className="w-8 h-8" />, title: 'Data Protection', description: 'Advanced encryption and data loss prevention.', features: ['Encryption', 'Backup & Recovery', 'DLP Solutions', 'Data Classification'], badge: null },
  ];
  return (
    <section id="services" className="py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center gap-2 badge-blue mb-4"><Zap className="w-4 h-4" /><span>Our Services</span></div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Comprehensive <span className="gradient-text-blue">Security Solutions</span></h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">From strategic leadership to technical implementation, we provide end-to-end cybersecurity services.</p>
        </motion.div>
        
        {/* Animated Shield with Featured Services */}
        <motion.div 
          className="grid lg:grid-cols-3 gap-12 items-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-card p-6 border-l-4" style={{ borderColor: '#00ff88' }}>
              <div className="flex items-center gap-3 mb-3">
                <FileCheck className="w-8 h-8" style={{ color: '#00ff88' }} />
                <h3 className="text-xl font-bold">Compliance Solutions</h3>
              </div>
              <p className="text-slate-300">Navigate complex regulations with confidence. HIPAA, SOC 2, CMMC - we've got you covered.</p>
            </div>
            <div className="glass-card p-6 border-l-4" style={{ borderColor: '#00d4ff' }}>
              <div className="flex items-center gap-3 mb-3">
                <AlertTriangle className="w-8 h-8" style={{ color: '#00d4ff' }} />
                <h3 className="text-xl font-bold">Cyber Risk Assessment</h3>
              </div>
              <p className="text-slate-300">Identify vulnerabilities before attackers do. Comprehensive security audits and penetration testing.</p>
            </div>
          </div>
          
          {/* Animated Shield Display */}
          <div className="flex justify-center">
            <AnimatedDigitalShield scrollProgress={shieldProgress} />
          </div>
        </motion.div>
        
        {/* All Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div key={index} className="glass-card p-8 service-card relative overflow-hidden" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }}>
              {service.badge && <div className="absolute top-4 right-4 badge-cyber text-xs">{service.badge}</div>}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyber-green/20 to-cyber-blue/20 flex items-center justify-center mb-6" style={{ color: '#00ff88' }}>{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-slate-300 mb-6">{service.description}</p>
              <ul className="space-y-2 mb-6">{service.features.map((feature, i) => (<li key={i} className="flex items-center gap-2 text-sm text-slate-400"><CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: '#00ff88' }} />{feature}</li>))}</ul>
              <button onClick={() => onServiceSelect(service.title)} className="flex items-center gap-2 font-medium hover:gap-3 transition-all" style={{ color: '#00ff88' }}>Learn More <ChevronRight className="w-4 h-4" /></button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Resources Section
type ResourceKey = 'checklist' | 'calculator' | 'playbook' | 'glossary';

function ResourcesSection() {
  const location = useLocation();
  const initial = location.hash === '#roi-calculator' ? 'calculator' : 'checklist';
  const [activeResource, setActiveResource] = useState<ResourceKey>(initial);

  const playbookMdFallback = `# Human Firewall Playbook
Practical, low-friction actions to reduce human risk in 60 days. Use this as a lightweight runbook for awareness, behavior change, and measurable outcomes.
`;

  useEffect(() => {
    if (location.hash === '#roi-calculator') {
      setActiveResource('calculator');
      const el = document.getElementById('roi-calculator');
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
    }
  }, [location.hash]);

  const handlePlaybookDownload = async () => {
    try {
      const res = await fetch('/playbooks/human-firewall-playbook.md');
      if (!res.ok) throw new Error('fetch-failed');
      const text = await res.text();
      triggerPdfDownload(text);
    } catch (err) {
      triggerPdfDownload(playbookMdFallback);
    }
  };

  const triggerPdfDownload = (text: string) => {
    const doc = new jsPDF({ unit: 'pt', format: 'letter' });
    const brandGreen = [0, 255, 136];
    const brandCyan = [0, 212, 255];
    const brandPurple = [139, 92, 246];
    const body = [226, 232, 240];
    const margin = 42;
    const maxWidth = 530;
    let y = margin;
    const addLine = (content: string, opts: { size?: number; color?: number[]; bold?: boolean; bullet?: boolean } = {}) => {
      const size = opts.size ?? 11;
      const color = opts.color ?? body;
      const bold = opts.bold ?? false;
      doc.setFont('helvetica', bold ? 'bold' : 'normal');
      doc.setFontSize(size);
      doc.setTextColor(color[0], color[1], color[2]);
      const textLines = doc.splitTextToSize(opts.bullet ? `• ${content}` : content, maxWidth);
      const needed = textLines.length * (size + 4);
      if (y + needed > doc.internal.pageSize.getHeight() - margin) {
        doc.addPage();
        y = margin;
      }
      doc.text(textLines, margin, y);
      y += needed;
    };
    addLine('Human Firewall Playbook', { size: 18, color: brandGreen, bold: true });
    y += 6;
    text.split('\n').forEach((raw) => {
      const line = raw.trim();
      if (!line) {
        y += 6;
        return;
      }
      if (line.startsWith('# ')) addLine(line.replace('# ', ''), { size: 15, color: brandGreen, bold: true }), y += 4;
      else if (line.startsWith('## ')) addLine(line.replace('## ', ''), { size: 12, color: brandCyan, bold: true });
      else if (/^[\d]+\.\s/.test(line)) addLine(line, { size: 10, color: body });
      else if (line.startsWith('- ')) addLine(line.replace('- ', ''), { size: 10, color: body, bullet: true });
      else addLine(line, { size: 10, color: body });
    });
    y += 12;
    addLine('MyITGuard • Guarding Every Byte', { size: 9, color: brandPurple, bold: true });
    doc.save('human-firewall-playbook.pdf');
  };

  return (
    <section id="resources" className="py-24 relative bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center gap-2 badge-cyber mb-4"><BookOpen className="w-4 h-4" /><span>Resource Center</span></div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Expert <span className="gradient-text">Resources</span> for Security Leaders</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">Access our library of compliance guides, calculators, training materials, and industry definitions.</p>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[{ id: 'checklist', icon: <FileCheck className="w-6 h-6" />, title: 'Compliance Checklists' }, { id: 'calculator', icon: <Calculator className="w-6 h-6" />, title: 'vCISO ROI Calculator' }, { id: 'playbook', icon: <BookOpen className="w-6 h-6" />, title: 'Human Firewall Playbook' }, { id: 'glossary', icon: <Search className="w-6 h-6" />, title: 'Threat Glossary' }].map((resource) => (
            <button
              key={resource.id}
              onMouseEnter={() => setActiveResource(resource.id as ResourceKey)}
              onClick={() => setActiveResource(resource.id as ResourceKey)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all ${
                activeResource === resource.id
                  ? 'bg-gradient-to-r from-cyber-green/20 to-cyber-blue/20 border border-cyber-green/30 text-white'
                  : 'glass-card text-slate-400 hover:text-white'
              }`}
            >
              {resource.icon}<span className="font-medium">{resource.title}</span>
            </button>
          ))}
        </div>
        <div id="roi-calculator" className="h-0 w-px" aria-hidden />
        <AnimatePresence mode="wait">
          {activeResource === 'checklist' && (
            <motion.div
              key="checklist"
              className="glass-card p-4 md:p-5 max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-5">
                <FileCheck className="w-11 h-11 mx-auto mb-2.5" style={{ color: '#00ff88' }} />
                <h3 className="text-lg font-bold mb-1">Compliance Checklists</h3>
                <p className="text-slate-300 text-sm">Quick-hit controls for HIPAA, FedRAMP, SOC 2, NIST 800-171, PCI DSS, CIS, GDPR, and CCPA/CPRA.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  { title: 'HIPAA', color: '#00ff88', items: ['Risk analysis & management', 'Access controls (unique IDs/MFA)', 'Audit logs & monitoring', 'Business Associate Agreements', 'Encryption for ePHI at rest/in transit', 'Contingency/backup plans'] },
                  { title: 'FedRAMP (Moderate)', color: '#00d4ff', items: ['System security plan (SSP)', 'FIPS-validated encryption', 'Vulnerability scanning (weekly/monthly)', 'Continuous monitoring (SIEM/alerts)', 'POA&M tracking & remediation', 'Incident response plan & testing'] },
                  { title: 'SOC 2 Type II', color: '#a78bfa', items: ['Policies & approvals (AUP, IR, DR)', 'Change management & CAB evidence', 'Access reviews (quarterly)', 'Vendor risk assessments', 'Logging, alerting, retention', 'Backup/restore & DR testing evidence'] },
                  { title: 'NIST 800-171', color: '#f472b6', items: ['CUI inventory & marking', 'Multi-factor authentication', 'Least privilege & role-based access', 'Config baselines & hardening', 'Audit log protection & review', 'Incident response tabletop'] },
                  { title: 'PCI DSS 4.0', color: '#facc15', items: ['Cardholder data flow & segmentation', 'Network firewall rules review', 'Strong cryptography for PAN', 'Quarterly ASV scans & annual pen test', 'Change control & code review', 'Logging & file integrity monitoring'] },
                  { title: 'CIS Controls v8', color: '#38bdf8', items: ['Asset inventory (HW/SW)', 'Secure configuration baselines', 'Vulnerability mgmt & patch SLAs', 'Admin privileges: limit & monitor', 'Logging & SIEM coverage', 'Email/web protections & backups'] },
                  { title: 'GDPR', color: '#ec4899', items: ['Record of processing activities (RoPA)', 'Lawful basis & consent management', 'DPIAs for high-risk processing', 'Data subject rights (DSAR) process', 'DPA + SCCs with processors', 'Breach notification playbook (72h)'] },
                  { title: 'CCPA/CPRA', color: '#fb7185', items: ['Data inventory & “sale/share” classification', 'Privacy notices with Do Not Sell/Share links', 'Sensitive data handling & opt-out signals (GPC)', 'Consumer rights: access/delete/correct/limit use', 'Vendor contracts with CPRA clauses', 'Incident & breach response aligned to CA timelines'] },
                ].map((check) => (
                  <div key={check.title} className="p-3 rounded-xl bg-slate-900/50 border border-white/5 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-semibold text-white">{check.title}</h4>
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold" style={{ backgroundColor: `${check.color}22`, color: check.color }}>
                        {check.items.length} steps
                      </span>
                    </div>
                    <ul className="space-y-1.5 text-sm text-slate-300">
                      {check.items.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-[6px] h-1.5 w-1.5 rounded-full" style={{ backgroundColor: check.color }} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
          {activeResource === 'calculator' && (
            <motion.div
              key="calculator"
              className="glass-card p-4 md:p-5 max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
            >
              <RoiCalculator />
            </motion.div>
          )}
          {activeResource === 'playbook' && (
            <motion.div
              key="playbook"
              className="glass-card p-4 md:p-5 max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
            >
              <div className="flex flex-col lg:flex-row gap-6 lg:items-start">
                <div className="lg:w-1/2 space-y-3">
                  <div className="inline-flex items-center gap-2 badge-cyber">
                    <BookOpen className="w-4 h-4" />
                    <span>Downloadable playbook</span>
                  </div>
                  <h3 className="text-2xl font-bold">Human Firewall Playbook</h3>
                  <p className="text-slate-300">
                    8-week rollout with phishing drills, AI-safety guidance, incident response steps, and manager coaching. Ready to share with teams.
                  </p>
                  <div className="grid grid-cols-2 gap-3 text-sm text-slate-200">
                    <Pill text="Phishing & BEC" color="#00ff88" />
                    <Pill text="AI & deepfakes" color="#00d4ff" />
                    <Pill text="Data handling" color="#a78bfa" />
                    <Pill text="Remote work hygiene" color="#f472b6" />
                  </div>
                  <button
                    onClick={handlePlaybookDownload}
                    className="btn-secondary inline-flex items-center gap-2 w-fit"
                  >
                    <Download className="w-5 h-5" /> Download Playbook (markdown)
                  </button>
                  <p className="text-xs text-slate-400">Sized for quick wins: goals, cadence, drills, metrics, and comms snippets.</p>
                </div>

                <div className="lg:w-1/2 grid gap-3">
                  {[`Phish click rate under 5% and report <15m`,
                    `MFA + password manager as mandatory first step`,
                    `Report-a-phish drills and quarterly table-tops`,
                    `AI/Deepfake callback rule: verify on trusted channel`,
                    `DLP-friendly guidance: no public links by default`,
                    `Travel & remote: VPN, no open Wi-Fi, lock screens`].map((item) => (
                    <div key={item} className="p-3 rounded-xl bg-slate-900/60 border border-white/5 flex gap-3 items-start">
                      <span className="mt-1 h-2 w-2 rounded-full" style={{ backgroundColor: '#00ff88' }} />
                      <p className="text-sm text-slate-200">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
          {activeResource === 'glossary' && (
            <motion.div key="glossary" className="glass-card p-4 md:p-5 max-w-5xl mx-auto" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.35 }}>
              <div className="text-center py-12">
                <Search className="w-16 h-16 mx-auto mb-4" style={{ color: '#f472b6' }} />
                <h3 className="text-2xl font-bold mb-4">Threat Intelligence Glossary</h3>
                <p className="text-slate-300 mb-6">Comprehensive cybersecurity terms and definitions.</p>
                <button
                  className="btn-secondary flex items-center gap-2 mx-auto"
                  onClick={() => {
                    setActiveResource('glossary');
                    window.location.hash = '#/glossary';
                  }}
                >
                  <BookOpen className="w-5 h-5" />Browse Glossary
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

// Blog Section
function BlogSection({ onArticleSelect }: { onArticleSelect: (article: BlogArticle) => void }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', ...Array.from(new Set(blogArticles.map(a => a.category)))];
  const filteredArticles = selectedCategory === 'All' ? blogArticles : blogArticles.filter(a => a.category === selectedCategory);
  return (
    <section id="blog" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center gap-2 badge-cyber mb-4"><BookOpen className="w-4 h-4" /><span>Blog & Insights</span></div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Cybersecurity <span className="gradient-text">Knowledge Hub</span></h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">Expert insights, compliance guides, and industry analysis to keep you informed and protected.</p>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button key={category} onClick={() => setSelectedCategory(category)} className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${selectedCategory === category ? 'bg-gradient-to-r from-cyber-green/20 to-cyber-blue/20 border border-cyber-green/30 text-white' : 'glass-card text-slate-400 hover:text-white'}`}>{category}</button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => (
            <motion.article key={article.id} className="glass-card overflow-hidden service-card cursor-pointer" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.05 }} onClick={() => onArticleSelect(article)}>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4"><span className="badge-blue text-xs">{article.category}</span><span className="text-xs text-slate-500">{article.readTime}</span></div>
                <h3 className="text-xl font-bold mb-3 line-clamp-2 hover:text-cyber-green transition-colors">{article.title}</h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                <div className="flex items-center justify-between"><div className="flex items-center gap-2 text-xs text-slate-500"><Calendar className="w-3.5 h-3.5" />{article.date}</div><button className="flex items-center gap-1 text-sm font-medium" style={{ color: '#00ff88' }}>Read More <ArrowRight className="w-4 h-4" /></button></div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

// Service Modal Popup
function Pill({ text, color }: { text: string; color: string }) {
  return (
    <span
      className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border border-white/10"
      style={{ color, backgroundColor: `${color}18` }}
    >
      <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: color }} />
      {text}
    </span>
  );
}

function ServiceModal({ serviceName, onClose }: { serviceName: string, onClose: () => void }) {
  const details = serviceDetails[serviceName];
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  if (!details) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="absolute inset-0 bg-slate-900/80 backdrop-blur-lg"
          initial={{ backdropFilter: 'blur(0px)' }}
          animate={{ backdropFilter: 'blur(10px)' }}
          exit={{ backdropFilter: 'blur(0px)' }}
          onClick={onClose}
        />
        
        <motion.div
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-card"
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 50 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          style={{
            background: 'rgba(15, 23, 42, 0.95)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(0, 212, 255, 0.2)',
          }}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-slate-800/80 hover:bg-cyber-blue/20 flex items-center justify-center transition-all group"
            style={{ color: '#00d4ff' }}
          >
            <X className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>

          <div className="p-8 md:p-12">
            <span className="badge-blue mb-4 inline-block">Service Offering</span>
            <h1 className="text-3xl md:text-4xl font-bold mb-6 gradient-text-blue">{serviceName}</h1>
            <p className="text-xl text-slate-300 mb-8">{details.fullDescription}</p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h2 style={{ color: '#00d4ff' }} className="text-xl font-bold mb-4">Key Benefits</h2>
                <ul className="space-y-3">
                  {details.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#00d4ff' }} />
                      <span className="text-slate-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 style={{ color: '#a78bfa' }} className="text-xl font-bold mb-4">Deliverables</h2>
                <ul className="space-y-3">
                  {details.deliverables.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#a78bfa' }} />
                      <span className="text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-slate-700">
              <div className="flex justify-between items-center flex-wrap gap-4">
                <button onClick={onClose} className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition-all text-slate-300 hover:text-white">
                  <ArrowLeft className="w-5 h-5" />Back to Services
                </button>
                <button
                  className="btn-secondary flex items-center gap-2"
                  onClick={() => {
                    onClose();
                    setTimeout(() => {
                      window.location.hash = '#contact';
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 20);
                  }}
                >
                  <Mail className="w-5 h-5" />{details.cta}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// Article Modal Popup
function ArticleModal({ article, onClose }: { article: BlogArticle, onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Backdrop with blur */}
        <motion.div
          className="absolute inset-0 bg-slate-900/80 backdrop-blur-lg"
          initial={{ backdropFilter: 'blur(0px)' }}
          animate={{ backdropFilter: 'blur(10px)' }}
          exit={{ backdropFilter: 'blur(0px)' }}
          onClick={onClose}
        />
        
        {/* Modal Content */}
        <motion.div
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-card"
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 50 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          style={{
            background: 'rgba(15, 23, 42, 0.95)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(0, 255, 136, 0.2)',
          }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-slate-800/80 hover:bg-cyber-green/20 flex items-center justify-center transition-all group"
            style={{ color: '#00ff88' }}
          >
            <X className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>

          <div className="p-8 md:p-12">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="badge-blue">{article.category}</span>
              <span className="text-slate-500 text-sm">{article.date}</span>
              <span className="text-slate-500 text-sm">•</span>
              <span className="text-slate-500 text-sm">{article.readTime}</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">{article.title}</h1>
            <p className="text-xl text-slate-300 mb-8">{article.excerpt}</p>
            
            <div className="prose prose-invert prose-lg max-w-none text-slate-300">
              <p>This article provides comprehensive guidance on {article.title.toLowerCase()}. Our cybersecurity experts have compiled the latest best practices, regulatory requirements, and implementation strategies to help your organization stay protected.</p>
              
              <h2 style={{ color: '#00ff88' }}>Key Takeaways</h2>
              <ul>
                <li>Understanding the fundamentals is critical for effective implementation</li>
                <li>Regular assessment and updates ensure ongoing compliance</li>
                <li>Employee training and awareness are essential components</li>
                <li>Technology solutions should align with business objectives</li>
              </ul>
              
              <h2 style={{ color: '#00d4ff' }}>Getting Started</h2>
              <p>Contact MyITGuard today for a consultation on implementing these security best practices in your organization. Our team of certified experts is ready to help you achieve your security goals.</p>
              
              <h2 style={{ color: '#a78bfa' }}>Why This Matters</h2>
              <p>In today's threat landscape, understanding {article.title.toLowerCase()} is essential for protecting your organization. Stay informed and take proactive steps to secure your digital assets.</p>
            </div>
            
            <div className="mt-12 pt-8 border-t border-slate-700">
              <div className="flex items-center gap-2 text-slate-500 text-sm">
                <Tag className="w-4 h-4" />
                <span className="font-medium">SEO Keywords:</span>
                <span style={{ color: '#00ff88' }}>{article.seoKeywords}</span>
              </div>
            </div>
            
            <div className="mt-8 flex justify-between items-center flex-wrap gap-4">
              <button onClick={onClose} className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition-all text-slate-300 hover:text-white">
                <ArrowLeft className="w-5 h-5" />Back to Articles
              </button>
              <div className="flex gap-3">
                <button className="px-6 py-3 rounded-xl border border-cyber-green/30 hover:bg-cyber-green/10 transition-all" style={{ color: '#00ff88' }}>
                  Share Article
                </button>
                <button className="btn-primary flex items-center gap-2">
                  <Mail className="w-5 h-5" />Subscribe for More
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// Plans Section
function PlansSection() {
  const plans = [
    {
      name: 'Infantry',
      description: 'Essential cybersecurity foundation for small businesses getting started with security',
      features: [
        'Fractional CISO Services',
        'Security Policy Development',
        'Basic Risk Assessment',
        'Monthly Security Check-ins',
        'Email Support',
        'Security Questionnaire Support',
        'Compliance Roadmap',
      ],
      cta: 'Get Started',
      popular: false,
      color: '#00d4ff',
    },
    {
      name: 'Premium Infantry',
      description: 'Comprehensive security program for growing businesses with expanded needs',
      features: [
        'Everything in Infantry, plus:',
        'Enhanced vCISO Support Hours',
        'Complete Policy Suite',
        'Quarterly Risk Assessments',
        'Bi-weekly Security Meetings',
        'Priority Email + Phone Support',
        'Compliance Management (Multiple Frameworks)',
        '3rd Party Vendor Security Assessments',
        'Security Awareness Training',
        'Cyber Incident Support',
        'Audit Facilitation',
        'IT Security Gap Assessment',
        'Monthly Security Report',
      ],
      cta: 'Get Started',
      popular: true,
      color: '#00ff88',
    },
    {
      name: 'Enterprise',
      description: 'Full security leadership for established organizations with complex requirements',
      features: [
        'Everything in Premium Infantry, plus:',
        'Executive Security Leadership',
        'vCISO Strategy Sessions (Quarterly)',
        'Weekly Security Meetings',
        '24/7 Priority Support',
        'Board Reporting & Presentations',
        'Multi-Framework Compliance',
        'Vendor Risk Management Program',
        'Custom Security Training',
        'Incident Response + Tabletop Exercises',
        'M&A Security Diligence',
        'Security Program Metrics & KPIs',
        'Regulatory Exam Preparation',
        'Dedicated Security Team',
      ],
      cta: 'Contact Sales',
      popular: false,
      color: '#a78bfa',
    },
  ];

  const alaCarteServices = [
    {
      category: 'Assessment & Consulting',
      services: [
        { name: 'Cyber Risk Assessment', description: 'Comprehensive evaluations to identify vulnerabilities and enhance your cybersecurity posture' },
        { name: 'IT Security Gap Assessment', description: 'Identify gaps between current security state and desired compliance requirements' },
        { name: 'Risk Assessment & Consulting', description: 'Expert guidance on identifying, evaluating, and mitigating security risks' },
        { name: 'Vulnerability Assessment', description: 'Systematic review of security weaknesses in your systems and networks' },
      ],
    },
    {
      category: 'Compliance Solutions',
      services: [
        { name: 'HIPAA Compliance', description: 'Full HIPAA compliance implementation and documentation for healthcare organizations' },
        { name: 'SOC 2 Readiness', description: 'Gap analysis, control implementation, and auditor coordination for SOC 2 certification' },
        { name: 'CMMC Certification Prep', description: 'NIST 800-171 alignment and CMMC assessment preparation for defense contractors' },
        { name: 'Compliance Readiness & Support', description: 'Ongoing compliance management and support for multiple frameworks' },
        { name: 'Audit Facilitation', description: 'Expert support throughout the audit process to ensure successful certification' },
      ],
    },
    {
      category: 'Security Leadership',
      services: [
        { name: 'Virtual CISO (vCISO)', description: 'Expert cybersecurity leadership to safeguard and enhance your security posture' },
        { name: 'Fractional CISO Services', description: 'Part-time executive security leadership without full-time cost' },
        { name: 'vCISO Strategy Sessions', description: 'Quarterly strategic planning sessions with security executives' },
        { name: 'Board Reporting', description: 'Executive-level security reports and presentations for board members' },
        { name: 'Security Policy Development', description: 'Complete security policy suite tailored to your organization' },
      ],
    },
    {
      category: 'Network Security',
      services: [
        { name: 'Network Security', description: 'Advanced security protocols and monitoring to protect your network from breaches' },
        { name: 'Firewall & Network Security Monitoring', description: 'Continuous monitoring and management of firewall and network security' },
        { name: 'Virtual Private Network (VPN)', description: 'Secure VPN services ensuring privacy and safe internet access' },
        { name: 'Endpoint Security Management', description: 'Comprehensive protection for all devices connecting to your network' },
      ],
    },
    {
      category: 'Training & Awareness',
      services: [
        { name: 'Cybersecurity Awareness Training', description: 'Educate your team on security best practices to create a human firewall' },
        { name: 'Phishing Simulations', description: 'Realistic phishing tests to train employees on recognizing threats' },
        { name: 'Custom Security Training', description: 'Tailored training programs specific to your organization needs' },
      ],
    },
    {
      category: 'Incident Response',
      services: [
        { name: 'Cyber Incident Support', description: 'Expert assistance during and after security incidents' },
        { name: 'Incident Response Planning', description: 'Develop comprehensive IR playbooks and communication templates' },
        { name: 'Tabletop Exercises', description: 'Simulated incident scenarios to test and improve response capabilities' },
        { name: '24/7 Incident Response', description: 'Round-the-clock incident response support for critical situations' },
      ],
    },
    {
      category: 'Vendor & Third-Party',
      services: [
        { name: '3rd Party Vendor Security Assessments', description: 'Evaluate and manage security risks from third-party vendors' },
        { name: 'Vendor Risk Management Program', description: 'Comprehensive program for ongoing vendor security monitoring' },
        { name: 'Security Questionnaire Support', description: 'Assistance completing customer and partner security questionnaires' },
      ],
    },
    {
      category: 'Reporting & Analytics',
      services: [
        { name: 'Monthly Security Report', description: 'Regular reports on security posture, incidents, and improvements' },
        { name: 'Security Program Metrics & KPIs', description: 'Track and measure security program effectiveness' },
        { name: 'Risk Assessment Reports', description: 'Detailed documentation of identified risks and remediation plans' },
      ],
    },
  ];

  return (
    <section id="plans" className="py-24 relative bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center gap-2 badge-cyber mb-4"><Award className="w-4 h-4" /><span>Security Plans</span></div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Choose Your <span className="gradient-text">Armor</span></h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">Select the right level of security protection for your organization. All plans include expert vCISO services and can be customized to your needs.</p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`glass-card p-8 relative ${plan.popular ? 'border-cyber-green/50 scale-105' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 badge-cyber px-6 py-2">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2" style={{ color: plan.color }}>{plan.name}</h3>
                <p className="text-slate-400 text-sm mb-6">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: plan.color }} />
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-semibold transition-all ${plan.popular ? 'btn-primary' : 'bg-slate-800 hover:bg-slate-700 text-white'}`}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* A La Carte Services */}
        <motion.div
          className="glass-card p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">À La Carte Services</h3>
            <p className="text-slate-300">Comprehensive cybersecurity services available individually or as add-ons to any plan</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {alaCarteServices.map((category, index) => (
              <motion.div
                key={category.category}
                className="p-6 rounded-xl bg-slate-800/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h4 className="text-xl font-bold mb-4 pb-2 border-b border-slate-700" style={{ color: '#00d4ff' }}>{category.category}</h4>
                <ul className="space-y-4">
                  {category.services.map((service, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#00ff88' }} />
                      <div>
                        <span className="font-semibold text-white">{service.name}</span>
                        <p className="text-slate-400 text-sm mt-1">{service.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* All Services Summary */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="glass-card p-8 md:p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">Complete Service Catalog</h3>
              <p className="text-slate-300">All MyITGuard services at a glance</p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                'Cyber Risk Assessment',
                'Compliance Solutions',
                'Network Security',
                'Virtual Private Network (VPN)',
                'Security Awareness Training',
                'Virtual CISO (vCISO)',
                'Fractional CISO Services',
                'HIPAA Compliance',
                'SOC 2 Readiness',
                'CMMC Certification Prep',
                'IT Security Gap Assessment',
                'Risk Assessment & Consulting',
                'Security Policy Development',
                'Firewall & Network Monitoring',
                'Endpoint Security Management',
                'Cyber Incident Support',
                'Incident Response Planning',
                '3rd Party Vendor Assessments',
                'Vendor Risk Management',
                'Audit Facilitation',
                'Monthly Security Reports',
                'Security Program Metrics',
                'Board Reporting',
                'vCISO Strategy Sessions',
                'Tabletop Exercises',
                '24/7 Incident Response',
                'Phishing Simulations',
                'Custom Security Training',
                'Security Questionnaire Support',
                'Compliance Readiness & Support',
              ].map((service, index) => (
                <motion.div
                  key={service}
                  className="p-4 rounded-lg bg-slate-800/30 hover:bg-slate-800/50 transition-all flex items-center gap-3"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.02 }}
                >
                  <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: '#00ff88' }} />
                  <span className="text-slate-300 text-sm">{service}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="glass-card p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Need a Custom Solution?</h3>
            <p className="text-slate-300 mb-8">Every organization has unique security needs. Our experts can create a customized plan that fits your specific requirements and budget.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary flex items-center justify-center gap-2">
                <Mail className="w-5 h-5" />Schedule Consultation
              </button>
              <button className="btn-secondary flex items-center justify-center gap-2">
                <Calculator className="w-5 h-5" />ROI Calculator
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Testimonials Data
const testimonials = [
  {
    name: 'Sarah Mitchell',
    title: 'Chief Technology Officer',
    company: 'HealthTech Solutions',
    industry: 'Healthcare',
    content: 'MyITGuard transformed our security posture. Their vCISO service helped us achieve HIPAA compliance in just 3 months, and their team feels like an extension of our own. We finally have peace of mind knowing our patient data is protected.',
    rating: 5,
    image: 'SM',
    color: '#00ff88',
  },
  {
    name: 'Michael Chen',
    title: 'CEO & Founder',
    company: 'CloudScale Inc',
    industry: 'Technology',
    content: 'As a startup, we needed enterprise-level security without the enterprise budget. MyITGuard Premium Infantry plan gave us everything we needed to close our Series B round. Our investors were impressed with our security maturity.',
    rating: 5,
    image: 'MC',
    color: '#00d4ff',
  },
  {
    name: 'Jennifer Rodriguez',
    title: 'Compliance Director',
    company: 'FinServe Partners',
    industry: 'Financial Services',
    content: 'The SOC 2 readiness program was worth every penny. MyITGuard guided us through every step, and we passed our audit with zero findings. Their expertise in compliance frameworks is unmatched.',
    rating: 5,
    image: 'JR',
    color: '#a78bfa',
  },
  {
    name: 'David Thompson',
    title: 'IT Director',
    company: 'Manufacturing Corp',
    industry: 'Manufacturing',
    content: 'We experienced a ransomware attempt last year. MyITGuard incident response team was on the scene within hours and contained the threat before any damage occurred. They saved our business.',
    rating: 5,
    image: 'DT',
    color: '#f472b6',
  },
  {
    name: 'Lisa Park',
    title: 'VP of Operations',
    company: 'Retail Dynamics',
    industry: 'Retail',
    content: 'The security awareness training program reduced our phishing click rate from 35% to under 5% in just 6 months. Our employees are now our first line of defense, not our weakest link.',
    rating: 5,
    image: 'LP',
    color: '#00ff88',
  },
  {
    name: 'Robert Williams',
    title: 'Chief Information Officer',
    company: 'Defense Systems LLC',
    industry: 'Defense Contracting',
    content: 'CMMC certification seemed impossible until we partnered with MyITGuard. Their team understood the requirements perfectly and got us certified ahead of schedule. Now we can bid on DoD contracts with confidence.',
    rating: 5,
    image: 'RW',
    color: '#00d4ff',
  },
];

// Testimonials Section
function TestimonialsSection() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center gap-2 badge-cyber mb-4"><Award className="w-4 h-4" /><span>Client Success Stories</span></div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Trusted by <span className="gradient-text">Industry Leaders</span></h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">See what our clients say about partnering with MyITGuard to protect their organizations.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="glass-card p-8 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill={testimonial.color} viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Content */}
              <p className="text-slate-300 mb-6 italic">"{testimonial.content}"</p>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: testimonial.color }}>
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-slate-400">{testimonial.title}</div>
                  <div className="text-xs" style={{ color: testimonial.color }}>{testimonial.company} • {testimonial.industry}</div>
                </div>
              </div>

              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-6xl text-slate-700 opacity-30 font-serif">"</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// About Section
function AboutSection() {
  const features = [{ icon: <Award className="w-6 h-6" />, title: 'Certified Experts', description: 'CISSP, CISM, CEH certified' }, { icon: <Clock className="w-6 h-6" />, title: '24/7 Support', description: 'Round-the-clock monitoring' }, { icon: <Globe className="w-6 h-6" />, title: 'Global Threat Intel', description: 'Real-time intelligence feeds' }, { icon: <Shield className="w-6 h-6" />, title: 'Proven Track Record', description: '500+ clients protected' }];
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 badge-blue mb-4"><Award className="w-4 h-4" /><span>About MyITGuard</span></div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Your Trusted Partner in <span className="gradient-text-blue">Cybersecurity</span></h2>
            <p className="text-xl text-slate-300 mb-6">MyITGuard delivers enterprise-grade cybersecurity solutions tailored for businesses of all sizes. Our team combines strategic leadership with technical excellence.</p>
            <p className="text-slate-400 mb-8">From Virtual CISO services to compliance management and security training, we provide comprehensive protection.</p>
            <div className="grid grid-cols-2 gap-4">{features.map((feature, index) => (<motion.div key={index} className="glass-card p-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}><div className="mb-2" style={{ color: '#00d4ff' }}>{feature.icon}</div><h4 className="font-semibold mb-1">{feature.title}</h4><p className="text-sm text-slate-400">{feature.description}</p></motion.div>))}</div>
          </motion.div>
          <motion.div className="relative" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="w-80 h-80 mx-auto relative">
              <motion.div className="absolute inset-0 flex items-center justify-center" initial={{ scale: 0.8 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}><Shield className="w-40 h-40" style={{ color: '#00ff88' }} /></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); setTimeout(() => { setSubmitted(false); setFormData({ name: '', email: '', company: '', service: '', message: '' }); }, 3000); };
  return (
    <section id="contact" className="py-24 relative bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center gap-2 badge-cyber mb-4"><Mail className="w-4 h-4" /><span>Get In Touch</span></div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Start Your <span className="gradient-text">Security Journey</span></h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">Ready to strengthen your cybersecurity posture? Contact us for a free consultation and risk assessment.</p>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6">Schedule Your Consultation</h3>
              {!submitted ? (<form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4"><input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Full Name" className="input-dark w-full" required /><input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="Work Email" className="input-dark w-full" required /></div>
                <div className="grid md:grid-cols-2 gap-4"><input type="text" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} placeholder="Company Name" className="input-dark w-full" required /><select value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} className="input-dark w-full" required><option value="">Select Service</option><option value="vciso">Virtual CISO</option><option value="compliance">Compliance Solutions</option><option value="assessment">Cyber Risk Assessment</option><option value="training">Security Awareness Training</option><option value="managed">Managed Security Services</option><option value="dataprotection">Data Protection</option><option value="other">Other</option></select></div>
                <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Tell us about your security needs..." className="input-dark w-full h-32 resize-none" required />
                <button type="submit" className="btn-primary w-full">Submit Request</button>
                <p className="text-xs text-slate-400 text-center">We'll respond within 24 business hours</p>
              </form>) : (<motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12"><CheckCircle className="w-20 h-20 mx-auto mb-4" style={{ color: '#00ff88' }} /><h4 className="text-2xl font-bold mb-2">Thank You!</h4><p className="text-slate-400">Your request has been submitted.</p></motion.div>)}
            </div>
          </motion.div>
          <motion.div className="space-y-6" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="glass-card p-6"><div className="flex items-start gap-4"><div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(0, 255, 136, 0.2)' }}><Phone className="w-6 h-6" style={{ color: '#00ff88' }} /></div><div><h4 className="font-semibold mb-1">Phone</h4><p className="text-slate-400">+1 (555) 123-4567</p></div></div></div>
            <div className="glass-card p-6"><div className="flex items-start gap-4"><div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(0, 212, 255, 0.2)' }}><Mail className="w-6 h-6" style={{ color: '#00d4ff' }} /></div><div><h4 className="font-semibold mb-1">Email</h4><p className="text-slate-400">security@myitguard.com</p></div></div></div>
            <div className="glass-card p-6"><div className="flex items-start gap-4"><div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(139, 92, 246, 0.2)' }}><MapPin className="w-6 h-6" style={{ color: '#a78bfa' }} /></div><div><h4 className="font-semibold mb-1">Headquarters</h4><p className="text-slate-400">123 Security Boulevard, Cyber City, TC 12345</p></div></div></div>
            <div className="glass-card p-6"><h4 className="font-semibold mb-4">Emergency Response</h4><p className="text-slate-400 mb-4">Experiencing a security incident? Our rapid response team is available 24/7.</p><button className="btn-secondary w-full flex items-center justify-center gap-2"><AlertTriangle className="w-5 h-5" />Report Incident</button></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer({ onNavigate }: { onNavigate: (section: string) => void }) {
  return (
    <footer className="py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div><div className="flex items-center gap-3 mb-4 cursor-pointer" onClick={() => onNavigate('home')}><MyITGuardLogo /></div><p className="text-slate-400 mb-4">Enterprise cybersecurity solutions for the modern business.</p><div className="flex gap-4">{['twitter', 'linkedin', 'github'].map((social) => (<a key={social} href="#" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-cyber-green/20 transition-all" style={{ color: '#00ff88' }}><Globe className="w-5 h-5" /></a>))}</div></div>
          <div><h4 className="font-semibold mb-4">Services</h4><ul className="space-y-2 text-slate-400"><li><a href="#services" className="hover:text-cyber-green transition-colors">Virtual CISO</a></li><li><a href="#services" className="hover:text-cyber-green transition-colors">Compliance Solutions</a></li><li><a href="#services" className="hover:text-cyber-green transition-colors">Risk Assessment</a></li><li><a href="#services" className="hover:text-cyber-green transition-colors">Security Training</a></li></ul></div>
          <div><h4 className="font-semibold mb-4">Resources</h4><ul className="space-y-2 text-slate-400"><li><a href="#resources" className="hover:text-cyber-green transition-colors">Compliance Checklists</a></li><li><a href="#resources" className="hover:text-cyber-green transition-colors">ROI Calculator</a></li><li><a href="#resources" className="hover:text-cyber-green transition-colors">Human Firewall Playbook</a></li><li><a href="#blog" className="hover:text-cyber-green transition-colors">Blog</a></li></ul></div>
          <div><h4 className="font-semibold mb-4">Company</h4><ul className="space-y-2 text-slate-400"><li><a href="#about" className="hover:text-cyber-green transition-colors">About Us</a></li><li><a href="#contact" className="hover:text-cyber-green transition-colors">Contact</a></li><li><a href="#" className="hover:text-cyber-green transition-colors">Careers</a></li><li><a href="#" className="hover:text-cyber-green transition-colors">Privacy Policy</a></li></ul></div>
        </div>
        <div className="section-divider mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4"><p className="text-slate-500 text-sm">© 2026 MyITGuard. All rights reserved.</p><div className="flex gap-6 text-sm text-slate-500"><a href="#" className="hover:text-cyber-green transition-colors">Privacy Policy</a><a href="#" className="hover:text-cyber-green transition-colors">Terms of Service</a><a href="#" className="hover:text-cyber-green transition-colors">Cookie Policy</a></div></div>
      </div>
    </footer>
  );
}

// Main App Component with Routing
function AppContent() {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('home');
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  
  // Check localStorage synchronously
  const hasSeenIntro = typeof window !== 'undefined' ? localStorage.getItem('myitguard_intro_seen') : null;
  const [showIntro, setShowIntro] = useState(!hasSeenIntro);

  useEffect(() => {
    const hash = location.hash || '';
    if (hash === '#/glossary') return;
    const targetId = hash.replace('#', '').replace('/', '');
    if (targetId) {
      setActiveSection(targetId);
      setTimeout(() => {
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
      }, 80);
    }
  }, [location.hash]);

  // Do not re-trigger intro on route/hash changes; intro only first load
  const handleIntroComplete = () => {
    setShowIntro(false);
    localStorage.setItem('myitguard_intro_seen', 'true');
  };

  const handleNavigate = (section: string) => {
    const scrollToId = (id: string) => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    if (section === 'contact') {
      scrollToId('contact');
    } else if (section === 'services') {
      scrollToId('services');
    } else if (section === 'roi') {
      window.location.hash = '#roi-calculator';
    } else if (section === 'about') {
      scrollToId('about');
    } else if (section === 'blog') {
      scrollToId('blog');
    } else if (section === 'plans') {
      scrollToId('plans');
    } else if (section === 'resources') {
      scrollToId('resources');
    } else if (section === 'home') {
      scrollToId('home');
      setActiveSection('home');
    } else {
      setActiveSection(section);
    }
  };

  const handleArticleSelect = (article: BlogArticle) => {
    setSelectedArticle(article);
  };

  const handleServiceSelect = (service: string) => {
    setSelectedService(service);
  };

  const handleCloseArticle = () => {
    setSelectedArticle(null);
  };

  const handleCloseService = () => {
    setSelectedService(null);
  };

  // Show full page for routes, homepage for root
  if (location.pathname === '/contact' || location.hash.startsWith('#/contact')) {
    return (
      <>
        {showIntro && <HyperspaceIntro onComplete={handleIntroComplete} />}
        <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
        <div style={{ opacity: showIntro ? 0 : 1, transition: 'opacity 1s ease' }}>
          <ContactPage />
        </div>
        <Footer onNavigate={handleNavigate} />
      </>
    );
  }

  if (location.hash === '#/glossary' || location.pathname === '/glossary') {
    return (
      <>
        {showIntro && <HyperspaceIntro onComplete={handleIntroComplete} />}
        <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
        <div style={{ opacity: showIntro ? 0 : 1, transition: 'opacity 1s ease' }}>
          <ContactPage />
        </div>
        <Footer onNavigate={handleNavigate} />
      </>
    );
  }

  if (location.hash === '#/glossary' || location.pathname === '/glossary') {
    return (
      <>
        {showIntro && <HyperspaceIntro onComplete={handleIntroComplete} />}
        <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
        <div style={{ opacity: showIntro ? 0 : 1, transition: 'opacity 1s ease' }}>
          <ThreatGlossary />
        </div>
        <Footer onNavigate={handleNavigate} />
      </>
    );
  }

  // Homepage with all sections
  return (
    <>
      {showIntro && <HyperspaceIntro onComplete={handleIntroComplete} />}
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <main style={{ opacity: showIntro ? 0 : 1, transition: 'opacity 1s ease' }}>
        <HeroSection onNavigate={handleNavigate} />
        <ServicesSection onServiceSelect={handleServiceSelect} />
        <ResourcesSection />
        <PlansSection />
        <TestimonialsSection />
        <BlogSection onArticleSelect={handleArticleSelect} />
        <AboutSection />
        <ContactSection />
      </main>
      {selectedArticle && <ArticleModal article={selectedArticle} onClose={handleCloseArticle} />}
      {selectedService && <ServiceModal serviceName={selectedService} onClose={handleCloseService} />}
      <Footer onNavigate={handleNavigate} />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <HelmetProvider>
        <div className="min-h-screen bg-navy-900">
          <Helmet><title>MyITGuard - Enterprise Cybersecurity Solutions | Virtual CISO & Compliance</title><meta name="description" content="MyITGuard provides Virtual CISO services, HIPAA/SOC 2/CMMC compliance, cyber risk assessments, and security awareness training." /></Helmet>
          <AppContent />
        </div>
      </HelmetProvider>
    </Router>
  );
}
