import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, FileCheck, AlertTriangle, Lock, Database, ChevronRight, ArrowLeft } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const services = [
  {
    icon: <Users className="w-12 h-12" />,
    title: 'Virtual CISO (vCISO)',
    shortDesc: 'Executive-level cybersecurity leadership without the full-time cost.',
    fullDesc: 'Our Virtual CISO service provides executive-level cybersecurity leadership without the cost of a full-time hire. You get strategic guidance, policy development, and board-level reporting from experienced security professionals.',
    features: [
      'Security Strategy & Roadmap',
      'Risk Management Programs',
      'Policy & Procedure Development',
      'Board-Level Reporting',
      'Compliance Oversight',
      'Vendor Risk Management',
      'Security Budget Planning',
      'Incident Response Planning',
    ],
    benefits: [
      'Cost-effective alternative to full-time CISO ($200K-$400K/year)',
      'Access to team of security experts',
      'Flexible engagement models',
      'Strategic security roadmap',
      'Compliance guidance',
    ],
    color: '#00ff88',
  },
  {
    icon: <FileCheck className="w-12 h-12" />,
    title: 'Compliance Solutions',
    shortDesc: 'Achieve compliance with HIPAA, SOC 2, CMMC frameworks.',
    fullDesc: 'Navigate complex compliance requirements with expert guidance. We help you achieve and maintain compliance with HIPAA, SOC 2, CMMC, and other regulatory frameworks.',
    features: [
      'HIPAA Compliance',
      'SOC 2 Type I & II Preparation',
      'CMMC Certification',
      'Continuous Compliance Monitoring',
      'Policy Templates',
      'Audit Support',
      'Gap Assessments',
      'Remediation Planning',
    ],
    benefits: [
      'Expert compliance guidance',
      'Reduced audit preparation time',
      'Continuous compliance monitoring',
      'Gap assessment and remediation',
      'Documentation support',
    ],
    color: '#00d4ff',
  },
  {
    icon: <AlertTriangle className="w-12 h-12" />,
    title: 'Cyber Risk Assessment',
    shortDesc: 'Comprehensive security audits and vulnerability assessments.',
    fullDesc: 'Identify vulnerabilities before attackers do. Our comprehensive risk assessments include vulnerability scanning, penetration testing, and detailed remediation planning.',
    features: [
      'Vulnerability Scanning',
      'Penetration Testing',
      'Risk Analysis & Scoring',
      'Remediation Roadmap',
      'Executive Reporting',
      'Threat Modeling',
      'Security Architecture Review',
      'Third-Party Risk Assessment',
    ],
    benefits: [
      'Identify security weaknesses',
      'Prioritize remediation efforts',
      'Meet compliance requirements',
      'Reduce breach risk',
      'Executive reporting',
    ],
    color: '#a78bfa',
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: 'Security Awareness Training',
    shortDesc: 'Transform employees into a human firewall.',
    fullDesc: 'Transform your employees into a human firewall with engaging, effective security awareness training. Our programs include interactive modules, phishing simulations, and progress tracking.',
    features: [
      'Interactive Training Modules',
      'Phishing Simulations',
      'Custom Content Creation',
      'Progress Tracking & Reporting',
      'Role-Based Training',
      'Compliance Training',
      'Security Culture Programs',
      'Gamification & Rewards',
    ],
    benefits: [
      'Reduce phishing susceptibility',
      'Build security culture',
      'Meet compliance training requirements',
      'Track employee progress',
      'Custom content available',
    ],
    color: '#f472b6',
  },
  {
    icon: <Lock className="w-12 h-12" />,
    title: 'Managed Security Services',
    shortDesc: '24/7 security monitoring and incident response.',
    fullDesc: '24/7 security monitoring and incident response to protect your organization around the clock. Our SOC team watches for threats and responds immediately to incidents.',
    features: [
      '24/7 Threat Monitoring',
      'Incident Response',
      'Threat Hunting',
      'SIEM Management',
      'Security Alerts',
      'Forensic Analysis',
      'Malware Analysis',
      'Security Tool Management',
    ],
    benefits: [
      '24/7 threat monitoring',
      'Rapid incident response',
      'Expert security analysts',
      'Advanced threat detection',
      'Reduced security overhead',
    ],
    color: '#00ff88',
  },
  {
    icon: <Database className="w-12 h-12" />,
    title: 'Data Protection',
    shortDesc: 'Advanced encryption and data loss prevention.',
    fullDesc: 'Protect your most valuable asset - your data. Our data protection services include encryption, backup solutions, and data loss prevention to ensure your data stays secure.',
    features: [
      'Data Encryption',
      'Backup & Recovery Solutions',
      'Data Loss Prevention (DLP)',
      'Data Classification',
      'Privacy Compliance',
      'Cloud Data Security',
      'Database Security',
      'Data Governance',
    ],
    benefits: [
      'Prevent data breaches',
      'Ensure data availability',
      'Meet data protection regulations',
      'Reduce data loss risk',
      'Secure data lifecycle',
    ],
    color: '#00d4ff',
  },
];

function ServiceDetail({ service, onBack }: { service: typeof services[0], onBack: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-5xl mx-auto px-6 py-12"
    >
      <button
        onClick={onBack}
        className="flex items-center gap-2 mb-8 text-slate-400 hover:text-cyber-green transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        Back to Services
      </button>

      <div className="glass-card p-8 md:p-12">
        <div className="flex items-center gap-4 mb-6">
          <div style={{ color: service.color }}>{service.icon}</div>
          <h1 className="text-4xl md:text-5xl font-bold">{service.title}</h1>
        </div>

        <p className="text-xl text-slate-300 mb-8">{service.fullDesc}</p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: service.color }}>Features</h2>
            <ul className="space-y-3">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: service.color }} />
                  <span className="text-slate-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: service.color }}>Benefits</h2>
            <ul className="space-y-3">
              {service.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: service.color }} />
                  <span className="text-slate-300">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => {
              window.location.hash = '#contact';
            }}
            className="btn-primary text-lg px-8 py-4"
          >
            Get Started with {service.title}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesPage() {
  const location = useLocation();
  const selectedService = new URLSearchParams(window.location.search).get('service');
  const service = services.find(s => s.title.toLowerCase().replace(/\s+/g, '-') === selectedService);

  useEffect(() => {
    if (location.hash === '#services-hero') {
      const el = document.getElementById('services-hero');
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  if (service) {
    return <ServiceDetail service={service} onBack={() => { window.location.hash = '#services'; }} />;
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          id="services-hero"
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 badge-blue mb-4">
            <Users className="w-4 h-4" />
            <span>Our Services</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Comprehensive <span className="gradient-text-blue">Security Solutions</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            From strategic leadership to technical implementation, we provide end-to-end cybersecurity services tailored to your business needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="glass-card p-8 service-card cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => {
                window.location.hash = '#services';
              }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyber-green/20 to-cyber-blue/20 flex items-center justify-center mb-6" style={{ color: service.color }}>
                {service.icon}
              </div>

              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-slate-300 mb-6">{service.shortDesc}</p>

              <ul className="space-y-2 mb-6">
                {service.features.slice(0, 4).map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-400">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: service.color }} />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="flex items-center gap-2 font-medium hover:gap-3 transition-all" style={{ color: service.color }}>
                Learn More <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
