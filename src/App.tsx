import React, { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  Shield,
  Lock,
  Users,
  FileCheck,
  AlertTriangle,
  ChevronRight,
  Menu,
  X,
  Download,
  Calculator,
  BookOpen,
  Search,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  ArrowRight,
  Globe,
  Award,
  Clock,
  Zap,
  Database,
  Calendar,
  Tag,
  ArrowLeft,
  Share2,
} from "lucide-react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import {
  HashRouter as Router,
  useLocation,
  useNavigate,
} from "react-router-dom";
import jsPDF from "jspdf";
import ContactPage from "./pages/ContactPage";
import ThreatGlossary from "./pages/ThreatGlossary";
import HyperspaceIntro from "./components/HyperspaceIntro";
import RoiCalculator from "./components/RoiCalculator";
import emailjs from "@emailjs/browser";

// MyITGuard Logo Component - Official Logo (PNG File + Text)
function MyITGuardLogo() {
  return (
    <div className="flex items-center gap-1.5 md:gap-1.0">
      {/* Helmet Icon - Optimized sizing */}
      <div
        className="flex items-center justify-center"
        style={{ width: "48px", height: "48px" }}
      >
        <img
          src="./images/myitguard-logo.png"
          alt="MyITGuard"
          className="w-full h-full object-contain"
          style={{ transform: "scale(1.2)" }}
        />
      </div>

      {/* Company Name - Saira Stencil One */}
      <div
        style={{
          fontFamily: '"Saira Stencil One", cursive',
          fontSize: "38px",
          lineHeight: "1",
          letterSpacing: "1.5px",
          whiteSpace: "nowrap",
        }}
      >
        <span style={{ color: "white" }}>MyITGuard</span>
      </div>
    </div>
  );
}

// Word Cloud Animation Component - Between Hero and Services
// WordCloudAnimation removed

// Animated Digital Shield Component - Security Icons Assembly
function AnimatedDigitalShield({ scrollProgress }: { scrollProgress: number }) {
  const securityIcons = [
    {
      id: "firewall",
      name: "Firewall",
      position: { x: 50, y: 25 },
      enterAt: 0.05,
      startPos: { x: -150, y: -100 },
    },
    {
      id: "network",
      name: "Network",
      position: { x: 30, y: 40 },
      enterAt: 0.15,
      startPos: { x: 200, y: -150 },
    },
    {
      id: "laptop",
      name: "Laptop",
      position: { x: 70, y: 40 },
      enterAt: 0.25,
      startPos: { x: -200, y: 150 },
    },
    {
      id: "router",
      name: "Router",
      position: { x: 25, y: 60 },
      enterAt: 0.35,
      startPos: { x: 250, y: 200 },
    },
    {
      id: "cloud",
      name: "Cloud",
      position: { x: 75, y: 60 },
      enterAt: 0.45,
      startPos: { x: -250, y: 0 },
    },
    {
      id: "server",
      name: "Server",
      position: { x: 40, y: 75 },
      enterAt: 0.55,
      startPos: { x: 250, y: -50 },
    },
    {
      id: "security",
      name: "Security",
      position: { x: 60, y: 75 },
      enterAt: 0.65,
      startPos: { x: 0, y: -250 },
    },
  ];

  const isShieldComplete = scrollProgress > 0.95;
  const shieldColor = isShieldComplete ? "#00ff88" : "#ef4444";
  const shieldGlow = isShieldComplete
    ? "rgba(0, 255, 136, 0.5)"
    : "rgba(239, 68, 68, 0.5)";

  return (
    <div className="relative w-80 h-80 md:w-96 md:h-96">
      <motion.div
        className="absolute inset-0 rounded-full blur-3xl"
        style={{
          background: isShieldComplete
            ? "radial-gradient(circle, rgba(0, 255, 136, 0.5) 0%, rgba(0, 212, 255, 0.3) 50%, transparent 70%)"
            : "radial-gradient(circle, rgba(239, 68, 68, 0.5) 0%, rgba(239, 68, 68, 0.2) 50%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <svg viewBox="0 0 100 100" className="w-full h-full relative z-10">
        <defs>
          <linearGradient
            id="shieldGradientComplete"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#00ff88" />
            <stop offset="50%" stopColor="#00d4ff" />
            <stop offset="100%" stopColor="#00ff88" />
          </linearGradient>
          <linearGradient
            id="shieldGradientIncomplete"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
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
          fill={
            isShieldComplete
              ? "rgba(0, 255, 136, 0.1)"
              : "rgba(239, 68, 68, 0.1)"
          }
          stroke={
            isShieldComplete
              ? "url(#shieldGradientComplete)"
              : "url(#shieldGradientIncomplete)"
          }
          strokeWidth="2.5"
          filter="url(#shieldGlow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            fill: isShieldComplete
              ? "rgba(0, 255, 136, 0.15)"
              : "rgba(239, 68, 68, 0.1)",
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
                  scale: 0.5,
                }}
                animate={{
                  opacity: iconVisible ? 1 : 0,
                  x: iconVisible ? 0 : icon.startPos.x,
                  y: iconVisible ? 0 : icon.startPos.y,
                  scale: iconVisible ? 1 : 0.5,
                }}
                transition={{
                  duration: 1.2,
                  delay: icon.enterAt * 0.3,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <g
                  transform={`translate(${icon.position.x - 6}, ${icon.position.y - 6}) scale(0.1)`}
                >
                  {icon.id === "firewall" && (
                    <g
                      stroke={shieldColor}
                      strokeWidth="6"
                      fill="none"
                      filter="url(#shieldGlow)"
                    >
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
                      <path
                        d="M70 75 Q80 65 75 55 Q85 65 80 75"
                        fill={shieldColor}
                        stroke="none"
                      />
                    </g>
                  )}
                  {icon.id === "server" && (
                    <g
                      stroke={shieldColor}
                      strokeWidth="6"
                      fill="none"
                      filter="url(#shieldGlow)"
                    >
                      <ellipse cx="50" cy="35" rx="30" ry="10" />
                      <line x1="20" y1="35" x2="20" y2="75" />
                      <line x1="80" y1="35" x2="80" y2="75" />
                      <path d="M20 75 Q50 85 80 75" />
                      <line
                        x1="35"
                        y1="50"
                        x2="65"
                        y2="50"
                        stroke={shieldColor}
                        strokeWidth="4"
                      />
                      <line
                        x1="35"
                        y1="60"
                        x2="65"
                        y2="60"
                        stroke={shieldColor}
                        strokeWidth="4"
                      />
                      <line
                        x1="35"
                        y1="70"
                        x2="65"
                        y2="70"
                        stroke={shieldColor}
                        strokeWidth="4"
                      />
                    </g>
                  )}
                  {icon.id === "laptop" && (
                    <g
                      stroke={shieldColor}
                      strokeWidth="6"
                      fill="none"
                      filter="url(#shieldGlow)"
                    >
                      <rect x="25" y="25" width="50" height="35" rx="3" />
                      <circle cx="50" cy="42" r="10" />
                      <line x1="40" y1="42" x2="60" y2="42" />
                      <line x1="50" y1="32" x2="50" y2="52" />
                      <line x1="20" y1="65" x2="80" y2="65" />
                      <line x1="25" y1="65" x2="20" y2="70" />
                      <line x1="75" y1="65" x2="80" y2="70" />
                    </g>
                  )}
                  {icon.id === "router" && (
                    <g
                      stroke={shieldColor}
                      strokeWidth="6"
                      fill="none"
                      filter="url(#shieldGlow)"
                    >
                      <rect x="25" y="40" width="50" height="25" rx="3" />
                      <line x1="35" y1="40" x2="30" y2="25" />
                      <line x1="65" y1="40" x2="70" y2="25" />
                      <path d="M30 20 Q50 10 70 20" />
                      <path d="M35 15 Q50 5 65 15" />
                      <circle
                        cx="50"
                        cy="12"
                        r="3"
                        fill={shieldColor}
                        stroke="none"
                      />
                      <circle
                        cx="35"
                        cy="50"
                        r="2"
                        fill={shieldColor}
                        stroke="none"
                      />
                      <circle
                        cx="45"
                        cy="50"
                        r="2"
                        fill={shieldColor}
                        stroke="none"
                      />
                      <circle
                        cx="55"
                        cy="50"
                        r="2"
                        fill={shieldColor}
                        stroke="none"
                      />
                      <circle
                        cx="65"
                        cy="50"
                        r="2"
                        fill={shieldColor}
                        stroke="none"
                      />
                    </g>
                  )}
                  {icon.id === "cloud" && (
                    <g
                      stroke={shieldColor}
                      strokeWidth="6"
                      fill="none"
                      filter="url(#shieldGlow)"
                    >
                      <path d="M25 55 Q25 40 40 40 Q40 25 55 25 Q70 25 75 40 Q90 40 90 55 Q90 70 75 70 L40 70 Q25 70 25 55" />
                      <line x1="40" y1="70" x2="40" y2="80" />
                      <line x1="55" y1="70" x2="55" y2="80" />
                      <line x1="70" y1="70" x2="70" y2="80" />
                      <circle
                        cx="40"
                        cy="82"
                        r="3"
                        fill={shieldColor}
                        stroke="none"
                      />
                      <circle
                        cx="55"
                        cy="82"
                        r="3"
                        fill={shieldColor}
                        stroke="none"
                      />
                      <circle
                        cx="70"
                        cy="82"
                        r="3"
                        fill={shieldColor}
                        stroke="none"
                      />
                    </g>
                  )}
                  {icon.id === "network" && (
                    <g
                      stroke={shieldColor}
                      strokeWidth="6"
                      fill="none"
                      filter="url(#shieldGlow)"
                    >
                      <circle cx="50" cy="45" r="20" />
                      <line x1="30" y1="45" x2="70" y2="45" />
                      <line x1="50" y1="25" x2="50" y2="65" />
                      <path d="M35 35 Q50 45 65 35" />
                      <path d="M35 55 Q50 45 65 55" />
                      <circle
                        cx="30"
                        cy="70"
                        r="4"
                        fill={shieldColor}
                        stroke="none"
                      />
                      <circle
                        cx="50"
                        cy="75"
                        r="4"
                        fill={shieldColor}
                        stroke="none"
                      />
                      <circle
                        cx="70"
                        cy="70"
                        r="4"
                        fill={shieldColor}
                        stroke="none"
                      />
                      <line x1="30" y1="70" x2="50" y2="75" />
                      <line x1="50" y1="75" x2="70" y2="70" />
                    </g>
                  )}
                  {icon.id === "security" && (
                    <g
                      stroke={shieldColor}
                      strokeWidth="6"
                      fill="none"
                      filter="url(#shieldGlow)"
                    >
                      <path d="M50 20 L70 30 L70 50 Q70 70 50 80 Q30 70 30 50 L30 30 L50 20" />
                      <path d="M40 50 L50 60 L65 40" strokeWidth="8" />
                      <path d="M45 35 Q50 30 55 35" strokeWidth="4" />
                      <path d="M42 40 Q50 33 58 40" strokeWidth="4" />
                      <circle
                        cx="50"
                        cy="45"
                        r="3"
                        fill={shieldColor}
                        stroke="none"
                      />
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
            rotate: isShieldComplete ? 0 : -180,
          }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <g transform="translate(35, 35) scale(0.3)">
            <rect
              x="10"
              y="40"
              width="80"
              height="60"
              rx="8"
              fill={shieldColor}
              stroke="none"
              filter="url(#shieldGlow)"
            />
            <path
              d="M30 40 L30 25 C30 10 70 10 70 25 L70 40"
              stroke={shieldColor}
              strokeWidth="12"
              fill="none"
              filter="url(#shieldGlow)"
            />
            <circle cx="50" cy="65" r="8" fill="#0a1628" stroke="none" />
            <path
              d="M50 73 L50 90 L45 90 L45 95 L55 95 L55 90 L50 90"
              fill="#0a1628"
            />
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
            y: scrollProgress > 0.9 ? 98 : 102,
          }}
          transition={{ duration: 0.4 }}
        >
          {isShieldComplete ? "✓ PROTECTED" : "SECURING..."}
        </motion.text>
      </svg>

      <motion.div
        className="absolute inset-0 border-2 border-dashed rounded-full"
        style={{
          borderColor: shieldGlow,
          boxShadow: `0 0 30px ${shieldGlow}`,
        }}
        initial={{ rotate: 0, scale: 0.95 }}
        animate={{
          rotate: 360,
          scale: isShieldComplete ? [0.98, 1.02, 0.98] : 0.95,
        }}
        transition={{
          rotate: { duration: 40, repeat: Infinity, ease: "linear" },
          scale: { duration: 2, repeat: Infinity },
        }}
      />

      {isShieldComplete && (
        <motion.div
          className="absolute inset-0 rounded-full border-2"
          style={{
            borderColor: "rgba(0, 255, 136, 0.6)",
            boxShadow:
              "0 0 60px rgba(0, 255, 136, 0.6), inset 0 0 60px rgba(0, 255, 136, 0.3)",
          }}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{
            scale: [0.9, 1.1, 0.9],
            opacity: [0.5, 1, 0.5],
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
  intro: string;
  keyTakeaways: string[];
  sections: { heading: string; body: string }[];
  conclusion: string;
}

// Blog Data - 45 SEO-Optimized Articles with Full Content
const blogArticles: BlogArticle[] = [
  {
    id: 1,
    title: "HIPAA Compliance Checklist 2026: Complete Guide",
    excerpt:
      "The HIPAA Security Rule is undergoing its biggest overhaul since 2003. Here is everything healthcare organizations need to know and do right now.",
    category: "Compliance",
    date: "Jan 15, 2026",
    readTime: "12 min",
    seoKeywords:
      "HIPAA compliance 2026, healthcare security, HIPAA Security Rule update",
    intro:
      "If your organization handles electronic protected health information, 2026 is the year you cannot afford to take HIPAA lightly. The Department of Health and Human Services is finalizing the most sweeping update to the HIPAA Security Rule since its original adoption. MFA, encryption, and annual risk assessments are moving from optional addressable standards to hard requirements. Every covered entity and business associate must gear up for these changes now.",
    keyTakeaways: [
      "Encryption of ePHI at rest and in transit is becoming mandatory, not optional.",
      "Multi-factor authentication is now required for all system access, including on-site.",
      "Annual security risk assessments must be documented and completed every year.",
      "Business associates must report security incidents within 24 hours.",
      "Penalties range up to $2.19 million per calendar year for willful neglect.",
      "Access must be revoked within one hour of employee termination.",
    ],
    sections: [
      {
        heading: "What Changed and Why It Matters",
        body: "For years, the HIPAA Security Rule allowed organizations to decide for themselves whether to implement certain controls, a framework known as addressable standards. HHS has signaled the end of that flexibility. The updated rule eliminates the addressable versus required distinction, meaning organizations of all sizes must implement the same baseline controls. This shift was driven by the dramatic rise in healthcare ransomware attacks, data breaches, and billions in annual cybersecurity failure costs. Regulators made clear that policy documents without technical enforcement will no longer pass audits.",
      },
      {
        heading: "Your 2026 HIPAA Compliance Checklist",
        body: "Start by designating a HIPAA Security Officer in writing. Conduct and document a comprehensive security risk assessment annually. Implement MFA for every user accessing ePHI systems, both remote and on-site. Encrypt all ePHI at rest and in transit using NIST-level standards. Inventory every vendor with ePHI access and ensure signed Business Associate Agreements are in place. Establish a vulnerability scanning cadence, patch critical issues within 72 hours, and conduct quarterly rescans. Train every staff member with ePHI access and keep completion records with names, dates, and content covered.",
      },
      {
        heading: "Penalties and Enforcement to Expect",
        body: "OCR confirmed in early 2025 that it launched the third phase of HIPAA compliance audits, covering 50 covered entities and business associates initially. Penalties following the January 2026 inflation adjustments have increased. Willful neglect that is not corrected can reach $2.19 million per calendar year. Organizations that show good-faith documented remediation plans receive more favorable treatment than those caught unprepared. The lesson is simple: start now, document everything, and treat compliance as an ongoing operational discipline.",
      },
    ],
    conclusion:
      "HIPAA compliance in 2026 is not a project with a finish line. It is an ongoing security program. MyITGuard specializes in helping healthcare organizations and their business associates build sustainable compliance frameworks that satisfy OCR auditors, protect patient data, and reduce breach risk. Contact us for a HIPAA gap assessment.",
  },
  {
    id: 2,
    title: "SOC 2 Type II vs Type I Certification Guide",
    excerpt:
      "Choosing between SOC 2 Type I and Type II can make or break your enterprise sales cycle. Here is a clear, practical breakdown of both.",
    category: "Compliance",
    date: "Jan 12, 2026",
    readTime: "10 min",
    seoKeywords:
      "SOC 2 certification, SOC 2 Type I vs Type II, security audit, SaaS compliance",
    intro:
      "Prospects, enterprise customers, and investors increasingly expect a SOC 2 report before signing a contract. But not all SOC 2 reports are created equal. A Type I report and a Type II report answer fundamentally different questions, and knowing which one you need can save your team months of wasted effort and thousands of dollars in audit fees.",
    keyTakeaways: [
      "SOC 2 Type I evaluates whether controls are suitably designed at a single point in time.",
      "SOC 2 Type II evaluates whether those controls operated effectively over 6 to 12 months.",
      "Type II is almost always required by enterprise customers and carries significantly more credibility.",
      "The Trust Services Criteria cover Security, Availability, Confidentiality, Processing Integrity, and Privacy.",
      "Most organizations need 3 to 6 months of control operation before a Type II audit can begin.",
      "A vCISO can accelerate readiness and dramatically reduce audit prep costs.",
    ],
    sections: [
      {
        heading: "SOC 2 Type I: The Snapshot",
        body: "A Type I report answers one question: as of this date, did the organization have controls in place that were suitably designed to meet the relevant Trust Services Criteria? It is useful if you need to show prospects something quickly or are just starting your compliance journey. However, Type I does not prove that those controls actually worked over time. Many sophisticated customers, especially in enterprise software, fintech, and healthcare, will ask for a Type II before proceeding with a contract.",
      },
      {
        heading: "SOC 2 Type II: The Track Record",
        body: "A Type II report covers a defined observation period, typically 6 to 12 months, during which an independent auditor tests whether your controls operated effectively throughout that period. This is the gold standard. It demonstrates not just design intent but real operational discipline. Enterprise security teams reviewing your report will look at exception rates, how quickly you resolved findings, and whether your monitoring and response processes held up under normal business conditions.",
      },
      {
        heading: "Choosing the Right Path for Your Business",
        body: "If you are early-stage and trying to close your first enterprise deal quickly, a Type I can serve as a bridge while you build toward Type II. If you are a growth-stage SaaS company with recurring enterprise sales cycles, invest directly in the Type II process. The Trust Services Criteria you scope into your audit also matter. Security is mandatory. Adding Availability makes sense for cloud infrastructure providers. Confidentiality matters for companies handling sensitive client data. Work with a compliance advisor to scope your audit properly.",
      },
    ],
    conclusion:
      "Achieving SOC 2 certification is a significant milestone, but only if you do it the right way. MyITGuard helps technology companies scope, prepare for, and maintain SOC 2 compliance efficiently. Whether you need a Type I this quarter or a Type II audit ready for enterprise sales next year, our experts can get you there.",
  },
  {
    id: 3,
    title: "CMMC 2.0 Requirements for Defense Contractors",
    excerpt:
      "CMMC 2.0 has reshaped how defense contractors must approach cybersecurity. Here is what the new framework actually requires and how to get compliant.",
    category: "Compliance",
    date: "Jan 10, 2026",
    readTime: "15 min",
    seoKeywords:
      "CMMC 2.0, defense contractor cybersecurity, NIST 800-171, DoD compliance",
    intro:
      "The Cybersecurity Maturity Model Certification 2.0 is the Department of Defense framework for ensuring that defense contractors protect sensitive federal information. For any company in the defense industrial base, whether you handle Controlled Unclassified Information or Federal Contract Information, CMMC compliance is now a contract requirement. Understanding which level applies to you and what you need to do is essential before your next DoD contract renewal.",
    keyTakeaways: [
      "CMMC 2.0 has three levels: Foundational, Advanced, and Expert.",
      "Level 2 aligns with all 110 practices in NIST SP 800-171 and requires third-party assessment for most contracts.",
      "Self-assessments are permitted for Level 1 and some Level 2 contracts but must be formally documented.",
      "Plans of Action and Milestones are allowed but must show a credible remediation path.",
      "Failure to accurately self-assess can expose contractors to False Claims Act liability.",
      "Subcontractors who handle CUI must also meet the appropriate CMMC level.",
    ],
    sections: [
      {
        heading: "The Three CMMC 2.0 Levels Explained",
        body: "Level 1 applies to contractors handling Federal Contract Information and requires meeting 17 basic cybersecurity practices from FAR 52.204-21. Annual self-assessment is permitted. Level 2 applies to the vast majority of DoD prime contractors and subcontractors handling CUI. It requires full compliance with all 110 NIST SP 800-171 practices and most contracts require a third-party assessment by a Certified Third-Party Assessment Organization. Level 3 is reserved for contractors working on programs with the highest risk of advanced persistent threat activity and requires government-led assessments.",
      },
      {
        heading: "Closing the Gap: Common NIST 800-171 Deficiencies",
        body: "Most defense contractors discover significant gaps when they honestly assess themselves against NIST 800-171. The most common deficiencies involve multi-factor authentication, system and communications protection, audit logging and monitoring, media protection, and configuration management. Many contractors also lack a formal System Security Plan, a document that describes how each of the 110 practices is implemented in their environment. The SSP is not optional. C3PAO assessors will use it as the foundation for their audit, and gaps between the SSP and actual implementation are a leading cause of failed assessments.",
      },
      {
        heading: "How to Approach Your CMMC Readiness Assessment",
        body: "Start with a gap assessment against all 110 NIST 800-171 practices. Prioritize remediating any practice that is completely unimplemented. Document your current state honestly in your SSP and create a credible POA&M for anything not yet fully implemented. Engage a Registered Practitioner Organization to guide your remediation before engaging a C3PAO for formal assessment. Ensure your subcontractor contracts include CMMC flow-down requirements. Begin this process well before your contract renewal date. Most organizations need 6 to 12 months to close the gaps identified in a thorough readiness assessment.",
      },
    ],
    conclusion:
      "CMMC 2.0 compliance is one of the most complex challenges facing defense contractors today. MyITGuard team includes certified CMMC professionals who can assess your current posture, guide remediation, help you build a compliant SSP, and prepare you for a successful third-party assessment. Contact us today to start your CMMC readiness journey.",
  },
  {
    id: 4,
    title: "Virtual CISO vs Full-Time CISO: Cost Analysis",
    excerpt:
      "For most small and mid-sized businesses, a virtual CISO delivers more security value per dollar than a full-time hire. Here is the math.",
    category: "Virtual CISO",
    date: "Jan 8, 2026",
    readTime: "11 min",
    seoKeywords:
      "Virtual CISO cost, vCISO vs CISO, fractional CISO, security leadership budget",
    intro:
      "Security leadership is no longer optional for businesses of any size. But a qualified full-time Chief Information Security Officer commands total compensation that can easily exceed $300,000 to $500,000 annually. For small and mid-sized businesses, that number is simply not in the budget. A virtual CISO offers a compelling alternative: expert-level security leadership delivered on a fractional or retainer basis at a fraction of the cost.",
    keyTakeaways: [
      "Full-time CISOs cost $250,000 to $500,000 or more annually in total compensation in most major markets.",
      "vCISO engagements typically run $5,000 to $20,000 per month depending on scope and hours.",
      "A vCISO brings a team of specialists, not just one individual expertise.",
      "vCISO engagements can scale up or down as your security needs evolve.",
      "Most SMBs get more from a vCISO in year one than they would from a full-time hire.",
      "vCISOs can fulfill compliance requirements for HIPAA, SOC 2, CMMC, and more.",
    ],
    sections: [
      {
        heading: "The True Cost of a Full-Time CISO",
        body: "Beyond base salary, a full-time CISO requires benefits, paid time off, retirement contributions, professional development, and conference attendance. Add recruiting fees, onboarding time, and the reality that an experienced CISO will need to build a team to actually execute the security program. Realistically, the first year of a full-time CISO engagement for an organization without a mature security program costs $400,000 to $700,000 when all factors are considered.",
      },
      {
        heading: "What a vCISO Actually Delivers",
        body: "A good vCISO engagement provides executive-level security strategy, risk assessment and prioritization, security policy development and review, vendor security oversight, board and leadership reporting, and compliance guidance across frameworks like HIPAA, SOC 2, and CMMC. Critically, a vCISO brings the collective knowledge of an entire security firm. If your vCISO needs a penetration test specialist or a cloud security architect, they can draw on colleagues with that expertise. A single full-time hire cannot replicate that bench of knowledge.",
      },
      {
        heading: "When a Full-Time CISO Makes More Sense",
        body: "Organizations with more than 500 employees and complex, regulated environments will eventually need a full-time CISO to handle the organizational complexity and internal political weight that the role requires. The right model is often a vCISO to build the foundation and then transition to a full-time hire once the program is mature enough to justify the investment.",
      },
    ],
    conclusion:
      "MyITGuard vCISO program gives you senior security leadership without the full-time overhead. Our engagements include security strategy, risk management, policy development, compliance guidance, and board-level reporting at a cost structure that actually fits your budget. Schedule a consultation to learn how we can build your security program.",
  },
  {
    id: 5,
    title: "How to Build a Human Firewall",
    excerpt:
      "Technology is only half the equation. Your employees are either your greatest security risk or your strongest defense, and training determines which.",
    category: "Security Training",
    date: "Jan 5, 2026",
    readTime: "13 min",
    seoKeywords:
      "human firewall, security awareness training, phishing prevention, employee cybersecurity",
    intro:
      "Every sophisticated security stack in the world can be bypassed by a single employee clicking a phishing link. IBM X-Force research consistently finds that over 90% of successful cyberattacks begin with a human action. Building a human firewall means transforming your workforce from your biggest vulnerability into your most resilient layer of defense.",
    keyTakeaways: [
      "Over 90% of successful breaches involve a human element. Training directly reduces this risk.",
      "Phishing simulations reduce click rates from industry averages of 30% or more down to under 5% with consistent training.",
      "Security culture is built through repetition, relevance, and leadership modeling, not annual lectures.",
      "Role-based training is more effective than one-size-fits-all content.",
      "Employees should know how to report suspicious activity quickly and without fear of blame.",
      "Gamification and micro-learning improve retention compared to traditional training modules.",
    ],
    sections: [
      {
        heading: "The Foundation: Phishing Simulations",
        body: "The most effective way to train employees to recognize phishing is to show them what it looks like in a safe, controlled setting. Regular phishing simulations, not once a year but monthly or quarterly, keep employees alert and provide measurable data on vulnerability. The goal is not to shame employees who click. It is to immediately redirect them into a brief, relevant training moment. Organizations that run consistent simulation programs see phishing click rates drop dramatically within 6 to 12 months of sustained effort.",
      },
      {
        heading: "Building Security Culture, Not Compliance Theater",
        body: "Annual security awareness training checkboxes do not change behavior. What changes behavior is making security personally relevant, consistently reinforced, and visibly supported by leadership. That means executives participate in training. Security topics come up in team meetings, not just IT announcements. Employees feel safe reporting mistakes instead of hiding them, because a hidden incident is a much bigger problem than a reported one.",
      },
      {
        heading: "Key Topics Every Employee Must Understand",
        body: "Every member of your organization should be able to recognize phishing emails, understand the dangers of password reuse, know how to use multi-factor authentication, and know the procedure for reporting a suspected incident. Finance, HR, and executive staff need additional training on business email compromise, wire transfer fraud, and deepfake voice or video calls. IT and developer teams need specialized training on secure coding, cloud configuration, and privileged access management.",
      },
    ],
    conclusion:
      "MyITGuard Security Awareness Training program includes interactive learning modules, realistic phishing simulations, progress tracking, and custom content for your industry and risk profile. We help you build a security culture that actually changes employee behavior. Contact us to set up a free training needs assessment.",
  },
  {
    id: 6,
    title: "2026 Cybersecurity Threat Landscape: Top 10 Threats",
    excerpt:
      "AI-powered ransomware, deepfake social engineering, and supply chain attacks are reshaping the threat landscape in 2026. Here is what every business needs to know.",
    category: "Threat Intelligence",
    date: "Jan 3, 2026",
    readTime: "14 min",
    seoKeywords:
      "cybersecurity threats 2026, ransomware trends, AI cyber attacks, threat landscape",
    intro:
      "The 2026 cybersecurity threat landscape is defined by a brutal truth: attackers are moving faster than defenders. The IBM X-Force 2026 Threat Intelligence Index found a 44% increase in attacks exploiting public-facing applications and a 49% rise in active ransomware groups. The World Economic Forum Global Cybersecurity Outlook 2026 found that 87% of security leaders identified AI-related vulnerabilities as the fastest-growing cyber risk of the past year. Cybercrime now costs the global economy over $10 trillion annually.",
    keyTakeaways: [
      "AI-powered attacks are enabling threat actors to automate reconnaissance, phishing, and exploitation at unprecedented scale.",
      "Triple extortion ransomware now combines encryption, data theft, and DDoS pressure simultaneously.",
      "Supply chain and third-party compromises have nearly quadrupled since 2020.",
      "Mean time to exploit vulnerabilities has gone negative. Attacks arrive before patches do.",
      "Deepfake voice and video fraud is now a mainstream business threat, not a theoretical risk.",
      "87% of security leaders rate AI vulnerabilities as the fastest-growing cyber risk in 2026.",
    ],
    sections: [
      {
        heading: "AI-Powered Attacks: The Game Changer",
        body: "Artificial intelligence has given attackers capabilities previously available only to well-funded nation-states. AI tools now enable automated vulnerability scanning at 36,000 probes per second, hyper-personalized spear-phishing emails generated from scraped social media data, and AI-assisted malware that adapts to evade detection in real time. Agentic AI systems can autonomously conduct reconnaissance, generate payloads, move laterally, and exfiltrate data, performing what previously required a team of skilled operators. Organizations must respond by deploying AI-driven defensive tools that can match attacker speed and volume.",
      },
      {
        heading: "Ransomware Evolution: Triple Extortion Is the Norm",
        body: "Modern ransomware attacks rarely involve just encryption. The triple extortion model layers three simultaneous pressures: encrypting victim files, threatening to publish or sell stolen data, and launching DDoS attacks against the victim external infrastructure. Mandiant M-Trends 2026 found that 77% of ransomware intrusions now involve data exfiltration alongside encryption. The average ransomware recovery cost has reached $2.73 million, with healthcare breaches averaging $7.42 million. Ransomware-as-a-Service platforms have democratized these attacks, enabling less sophisticated actors to deploy enterprise-grade ransomware with minimal technical knowledge.",
      },
      {
        heading: "Supply Chain and Third-Party Risk",
        body: "Attackers increasingly target the software supply chain because compromising a single vendor can provide simultaneous access to hundreds or thousands of downstream customers. IBM X-Force identified a nearly fourfold increase in large supply chain compromises since 2020. Three in five organizations experienced a material third-party security incident in 2025. Defending against this requires vendor risk management programs that include contractual security requirements, continuous monitoring of third-party access, and rapid detection of anomalous behavior from trusted partners.",
      },
    ],
    conclusion:
      "Staying ahead of the 2026 threat landscape requires more than good technology. It requires continuous intelligence, proactive risk management, and a security posture that can adapt as fast as attackers evolve. MyITGuard provides threat intelligence briefings, managed security services, and strategic advisory support. Reach out for a complimentary threat briefing.",
  },
  {
    id: 7,
    title: "Zero Trust Architecture Implementation Guide",
    excerpt:
      "Zero Trust is no longer a buzzword. It is a regulatory expectation and a practical necessity. Here is how to actually implement it.",
    category: "Security Best Practices",
    date: "Dec 28, 2025",
    readTime: "16 min",
    seoKeywords:
      "Zero Trust architecture, Zero Trust implementation, network security, identity security",
    intro:
      "The traditional security model trusting everything inside the network perimeter is dead. In an era of cloud workloads, remote employees, and supply chain attacks, the perimeter simply does not exist anymore. Zero Trust replaces it with a simple principle: never trust, always verify. Every user, every device, every application must earn access based on verified identity and context, every single time.",
    keyTakeaways: [
      "Zero Trust assumes breach. Every request is treated as potentially hostile until verified.",
      "Identity is the new perimeter. Strong authentication is the foundation of Zero Trust.",
      "Least-privilege access limits the blast radius when accounts are compromised.",
      "Micro-segmentation prevents lateral movement even after an attacker gains initial access.",
      "Continuous monitoring and behavioral analytics are required to sustain Zero Trust.",
      "Zero Trust is a journey, not a product. Implementation happens in phases over time.",
    ],
    sections: [
      {
        heading: "The Five Pillars of Zero Trust",
        body: "Zero Trust architecture is built on five interconnected pillars. Identity: every user must be authenticated and authorized before accessing any resource. Devices: only managed, compliant devices should access sensitive systems. Networks: traffic is encrypted and segmented, with no implicit internal trust. Applications: access is granted on a per-session, context-aware basis. Data: data is classified and protected at the source, with access controls following the data wherever it goes. Weakness in any one pillar creates exploitable gaps.",
      },
      {
        heading: "Where to Start Your Zero Trust Journey",
        body: "Most organizations cannot implement Zero Trust across all five pillars simultaneously. Start with identity. Implement multi-factor authentication for all users, all applications, all the time. Then focus on privileged access management, ensuring administrative accounts have the tightest controls. Next, implement application-level access controls that grant users access only to what they need for their specific role, replacing broad VPN access. Then layer in device trust verification. Each phase builds on the previous one.",
      },
      {
        heading: "Zero Trust and Regulatory Compliance",
        body: "Zero Trust principles align directly with multiple regulatory frameworks. CMMC 2.0 Level 2 requirements for access control and system communications protection are well-served by Zero Trust architecture. The proposed HIPAA Security Rule updates requiring MFA and network segmentation are core Zero Trust concepts. NIST SP 800-207 provides the federal government detailed guidance on Zero Trust architecture. Organizations pursuing multiple compliance frameworks simultaneously benefit from designing security controls around Zero Trust principles from the start.",
      },
    ],
    conclusion:
      "Implementing Zero Trust is one of the most impactful long-term investments your organization can make in its security posture. MyITGuard helps organizations assess their current state, design a phased Zero Trust roadmap, and implement the identity, access, and monitoring controls that make it real. Contact us to start your Zero Trust readiness assessment.",
  },
  {
    id: 8,
    title: "Incident Response Planning Step-by-Step",
    excerpt:
      "When a security incident hits, organizations without a tested response plan lose 35% more money on average. Here is how to build a plan that actually works.",
    category: "Security Best Practices",
    date: "Dec 25, 2025",
    readTime: "12 min",
    seoKeywords:
      "incident response plan, IR planning, cybersecurity incident, data breach response",
    intro:
      "No organization wants to think about being breached. But organizations that plan for it before it happens respond dramatically better, contain damage more effectively, and recover faster. IBM research found that organizations with tested incident response plans save an average of $1.49 million compared to those without one. A good incident response plan is not a document that sits in a binder. It is a living playbook that your team has actually practiced.",
    keyTakeaways: [
      "A tested IR plan reduces breach costs by an average of $1.49 million.",
      "The six phases of IR are Preparation, Identification, Containment, Eradication, Recovery, and Lessons Learned.",
      "Roles and responsibilities must be defined and communicated before an incident occurs.",
      "Legal counsel, PR, and HR are part of the IR team, not just IT.",
      "Tabletop exercises should be conducted at least annually for all relevant stakeholders.",
      "Breach notification timelines vary by regulation. Some require action within 24 to 72 hours.",
    ],
    sections: [
      {
        heading: "Building Your Incident Response Plan",
        body: "An effective IR plan starts with defining what constitutes an incident in your environment. Not everything is a crisis, and triage criteria help your team respond proportionately. Establish a core IR team with clearly defined roles: incident commander, technical lead, communications lead, legal counsel, and an executive sponsor. Document your communication protocols. Prepare external notification templates for customers, regulators, and law enforcement. The last thing you want to write from scratch during a live incident is a breach notification email.",
      },
      {
        heading: "Detection and Containment: The Critical Hours",
        body: "The most expensive mistakes in incident response happen in the first hours, when organizations either over-react by taking systems offline unnecessarily or under-react by failing to contain a spreading attack. Modern attackers move fast. Mandiant M-Trends 2026 found that full encryption events can complete within 24 hours of initial access. Your detection tools must have alerting thresholds and escalation paths that get the right people notified quickly. Containment strategies should be pre-planned: know in advance how you will isolate an affected system or disable a compromised account.",
      },
      {
        heading: "Tabletop Exercises: Practice Before the Real Thing",
        body: "A plan that has never been tested is a plan with unknown failure modes. Conduct tabletop exercises at least annually. Walk your leadership team through realistic breach scenarios and test your decision-making under pressure. Good tabletop scenarios include ransomware attacks, business email compromise resulting in wire transfer fraud, supply chain software compromise, and insider threat data exfiltration. After each exercise, document what worked, what failed, and what needs to change in your plan.",
      },
    ],
    conclusion:
      "MyITGuard offers incident response planning, tabletop exercise facilitation, and 24/7 incident response support for organizations of all sizes. We can help you build a plan, test it, and be on call when you need us most. Contact us to schedule your first tabletop exercise.",
  },
  {
    id: 9,
    title: "Multi-Factor Authentication Best Practices 2026",
    excerpt:
      "MFA is essential, but not all MFA is equal. Attackers have learned to bypass the weak forms. Here is how to implement MFA that actually holds up.",
    category: "Security Best Practices",
    date: "Dec 22, 2025",
    readTime: "9 min",
    seoKeywords:
      "MFA best practices 2026, multi-factor authentication, FIDO2, phishing-resistant MFA",
    intro:
      "Multi-factor authentication is one of the single highest-impact security controls you can implement. Microsoft security data consistently shows that MFA blocks over 99% of password-based account takeover attacks. But in 2026, attackers have developed effective techniques to bypass weaker forms of MFA. Understanding which MFA methods are strong, which are weak, and how to deploy MFA broadly is essential for every organization.",
    keyTakeaways: [
      "MFA blocks over 99% of automated password-based account takeover attacks.",
      "SMS-based one-time passwords are the weakest form of MFA and should be replaced where possible.",
      "Phishing-resistant MFA using FIDO2 and passkeys is the strongest available authentication method.",
      "Authenticator apps are significantly stronger than SMS and widely supported.",
      "MFA fatigue attacks are real. Push notification apps should require number matching.",
      "All privileged accounts should use hardware security keys with no exceptions.",
    ],
    sections: [
      {
        heading: "Understanding MFA Strength: A Practical Hierarchy",
        body: "Not all MFA is created equal. At the weakest end is SMS one-time passwords, which are vulnerable to SIM swapping and real-time phishing proxies. Time-based one-time passwords from authenticator apps like Microsoft Authenticator are meaningfully stronger. Push notifications are convenient but have been exploited through MFA fatigue attacks. The strongest available method is FIDO2 and passkeys, hardware-bound credentials that are phishing-resistant by design because they bind authentication to the legitimate website origin. Hardware security keys like YubiKey are the implementation of choice for privileged accounts.",
      },
      {
        heading: "Deploying MFA Across Your Organization",
        body: "Start with the highest-risk accounts: administrators, executives, finance teams, and HR. Then extend MFA to all remote access, VPN, remote desktop, and cloud applications. Then work toward MFA everywhere, including internal systems. Use conditional access policies to require stronger MFA factors for high-risk actions like wire transfers or bulk data exports. Document MFA exceptions carefully. Every exception is a potential attack path.",
      },
      {
        heading: "Preparing for Passkeys and the Passwordless Future",
        body: "The technology industry is actively moving toward a passwordless future built on FIDO2 passkeys. Major platforms including Microsoft, Google, Apple, and most enterprise SaaS providers now support passkey authentication. Passkeys eliminate the password as a phishable credential entirely. The private key never leaves the device, and authentication is bound to the specific website, making real-time phishing proxy attacks impossible. Organizations should begin piloting passkeys for user populations where they are technically feasible.",
      },
    ],
    conclusion:
      "Getting MFA right is one of the highest-ROI security investments your organization can make. MyITGuard can assess your current authentication posture, recommend the right MFA approach for each user population, and help you deploy it in a way that improves security without creating friction. Contact us for an authentication review.",
  },
  {
    id: 10,
    title: "Cloud Security Checklist for AWS, Azure, and GCP",
    excerpt:
      "Cloud providers secure the infrastructure. But you are responsible for everything you build on top of it. Here is what organizations consistently get wrong.",
    category: "Cloud Security",
    date: "Dec 20, 2025",
    readTime: "14 min",
    seoKeywords:
      "cloud security checklist, AWS security, Azure security, GCP security, cloud misconfiguration",
    intro:
      "Cloud computing has transformed how organizations build and run technology, but it has also introduced a new category of security failures driven by misconfiguration, excessive permissions, and a fundamental misunderstanding of shared responsibility. The shared responsibility model means your cloud provider secures the underlying infrastructure, but you are fully responsible for the security of your data, identities, applications, and configurations.",
    keyTakeaways: [
      "Most cloud breaches are caused by misconfiguration, not provider vulnerabilities.",
      "The shared responsibility model means you own the security of your data and configurations.",
      "Storage buckets and databases are the most commonly misconfigured public cloud resources.",
      "IAM over-permissioning is a critical and pervasive risk across all cloud platforms.",
      "Cloud Security Posture Management tools provide continuous misconfiguration detection.",
      "Enable cloud-native logging services like CloudTrail, Azure Monitor, and GCP Audit Logs everywhere.",
    ],
    sections: [
      {
        heading: "Identity and Access Management: Start Here",
        body: "Excessive IAM permissions are the root cause of the majority of serious cloud security incidents. Every cloud user, service account, and application should operate under least-privilege principles, with only the specific permissions needed for their specific function. Audit your IAM roles regularly and eliminate roles with wildcard permissions unless absolutely necessary. Enable MFA for all human IAM users, especially the root account in AWS, which should never be used for day-to-day operations.",
      },
      {
        heading: "Storage Security: Closing the Most Common Breach Door",
        body: "Public S3 buckets, Azure Blob containers, and GCP Cloud Storage buckets are responsible for some of the largest data exposures in cloud history. Enable default encryption for all storage resources. Audit every bucket public access setting and block all public access at the account level unless there is a specific, documented business reason. Enable versioning and object lock for sensitive data to protect against ransomware. Set up alerts for any configuration change that makes a bucket public. Even temporary public access can be exploited within minutes by automated scanners.",
      },
      {
        heading: "Continuous Monitoring and Security Posture",
        body: "Cloud environments change constantly. Manual audits cannot keep pace with the rate of change in a modern cloud environment. Enable cloud-native security services: AWS Security Hub, Azure Defender for Cloud, and GCP Security Command Center provide continuous assessment of your configuration against security benchmarks. Supplement with a Cloud Security Posture Management tool if your organization uses multiple cloud providers. Set up real-time alerting for critical configuration changes and review security findings at least weekly.",
      },
    ],
    conclusion:
      "Securing your cloud environment requires ongoing vigilance, not a one-time configuration. MyITGuard offers cloud security assessments, CSPM implementation, and ongoing managed cloud security services for AWS, Azure, and GCP environments. Contact us for a cloud security review.",
  },
  {
    id: 11,
    title: "Ransomware Protection, Prevention, and Recovery",
    excerpt:
      "Ransomware has evolved into triple extortion combining encryption, data theft, and DDoS attacks simultaneously. Here is how to protect yourself and recover if hit.",
    category: "Threat Intelligence",
    date: "Dec 18, 2025",
    readTime: "13 min",
    seoKeywords:
      "ransomware protection, ransomware prevention, ransomware recovery, backup strategy, triple extortion",
    intro:
      "Ransomware is no longer a simple extortion scheme. In 2026, modern ransomware operations execute triple extortion: they encrypt your files, exfiltrate your sensitive data and threaten to publish it, and simultaneously launch DDoS attacks against your web presence to pressure you into paying. The average recovery cost has reached $2.73 million. Prevention is far cheaper than recovery.",
    keyTakeaways: [
      "Triple extortion ransomware combines file encryption, data theft, and DDoS attacks.",
      "77% of ransomware incidents in 2025 involved data exfiltration alongside encryption.",
      "The average ransomware recovery cost is $2.73 million. Healthcare averages $7.42 million.",
      "Immutable, air-gapped backups are your most important ransomware defense.",
      "Endpoint Detection and Response with behavioral analysis can catch ransomware before encryption completes.",
      "CIRCIA now requires organizations to report ransomware payments to the government.",
    ],
    sections: [
      {
        heading: "Prevention: Cutting Off the Attack Paths",
        body: "Ransomware operators overwhelmingly gain initial access through three vectors: phishing emails, exploitation of unpatched vulnerabilities, and compromised credentials. Address all three simultaneously. Deploy multi-layer email security with anti-phishing, sandboxing, and link rewriting. Maintain a rigorous patch management program. Mandiant found that mean time to exploit has effectively gone negative, meaning attackers exploit vulnerabilities before organizations apply patches. Enable MFA everywhere to make stolen credentials far less useful to attackers.",
      },
      {
        heading: "Detection: Catching Ransomware Before It Completes",
        body: "Behavioral endpoint detection is critical because signature-based tools cannot catch novel ransomware variants. EDR solutions that monitor for ransomware-like behavior such as rapid file modification and shadow copy deletion can trigger automated containment responses before encryption spreads across the network. Deploy a SIEM to correlate events across your environment and alert on the behavioral indicators that precede ransomware deployment. Modern AI-powered ransomware moves fast. Your detection and response needs to be automated, not waiting for a human to notice a dashboard alert.",
      },
      {
        heading: "Recovery: When Prevention and Detection Are Not Enough",
        body: "The absolute foundation of ransomware recovery is tested, immutable, air-gapped backups. Immutable means attackers cannot encrypt or delete them. Air-gapped means they are not reachable through your main network. Test your backups regularly. A backup that has never been tested is not a backup you can count on. If you experience a ransomware attack, engage legal counsel before taking any action. Breach notification obligations may be triggered, and paying a ransom may have legal implications under CIRCIA and OFAC regulations.",
      },
    ],
    conclusion:
      "Ransomware readiness is one of the most critical investments your organization can make. MyITGuard provides ransomware risk assessments, tabletop exercises, backup strategy reviews, and managed detection and response services. Contact us today for a ransomware readiness assessment.",
  },
  {
    id: 12,
    title: "Penetration Testing 101: What to Expect",
    excerpt:
      "A penetration test is one of the most valuable investments in your security program, if you do it right. Here is what to know before you start.",
    category: "Security Assessment",
    date: "Dec 15, 2025",
    readTime: "11 min",
    seoKeywords:
      "penetration testing, pen test, ethical hacking, vulnerability assessment, security audit",
    intro:
      "A penetration test is a controlled, authorized simulation of how a real attacker might try to compromise your organization. Unlike vulnerability scanning, which identifies potential weaknesses, a penetration test actively exploits those weaknesses to demonstrate real-world impact. The goal is to find your vulnerabilities before attackers do, understand how far an attacker could get into your environment, and build a prioritized remediation roadmap based on actual exploit paths.",
    keyTakeaways: [
      "A pen test actively exploits vulnerabilities. A vulnerability scan only identifies them.",
      "Define scope carefully. Network, application, cloud, physical, and social engineering tests differ significantly.",
      "Black box, white box, and gray box tests offer different levels of realism and efficiency.",
      "A quality pen test report includes an executive summary, technical findings, and a prioritized remediation roadmap.",
      "Remediation verification testing ensures fixes actually work and did not introduce new issues.",
      "Many compliance frameworks require annual penetration testing including SOC 2, PCI DSS, HIPAA, and CMMC.",
    ],
    sections: [
      {
        heading: "Types of Penetration Tests",
        body: "Network penetration testing targets your external and internal network infrastructure, firewalls, routers, servers, and services. Web application penetration testing targets web apps and APIs, looking for injection flaws, broken authentication, and logic errors. Cloud penetration testing focuses on your cloud configuration, IAM permissions, and cloud-specific attack paths. Social engineering tests assess whether employees can be manipulated into revealing credentials or granting access. Red team engagements simulate advanced persistent threat actors and test your detection and response capabilities.",
      },
      {
        heading: "Understanding Black Box, White Box, and Gray Box",
        body: "In a black box test, the pen tester starts with no knowledge of your internal environment, simulating an external attacker. This is the most realistic simulation of an opportunistic attacker. In a white box test, the tester has full documentation, credentials, and architecture diagrams, maximizing efficiency and comprehensiveness. In a gray box test, the tester has partial information such as user-level credentials, simulating an insider threat or an attacker who has already gained some foothold. Most organizations benefit from gray box testing for initial assessments.",
      },
      {
        heading: "Getting Value from Your Pen Test Report",
        body: "A quality pen test report should include an executive summary that translates findings into business risk language, detailed technical findings with evidence of exploitation, a severity rating for each finding, and a prioritized remediation roadmap. Do not treat the report as a one-time compliance artifact. Use it to drive actual remediation. Then schedule a remediation verification test to confirm that fixes worked correctly and did not introduce new vulnerabilities. The most common mistake is completing the test, archiving the report, and never systematically addressing the findings.",
      },
    ],
    conclusion:
      "MyITGuard partners with certified penetration testing firms to deliver comprehensive assessments tailored to your environment and compliance requirements. We also manage the findings through to remediation, ensuring you get real security improvement, not just a report. Contact us to scope your next penetration test.",
  },
  {
    id: 13,
    title: "GDPR Compliance for US Businesses: What You Need to Know",
    excerpt:
      "If your business has European Union customers, GDPR applies to you regardless of where you are located. Here is what US companies need to do.",
    category: "Compliance",
    date: "Dec 12, 2025",
    readTime: "12 min",
    seoKeywords:
      "GDPR compliance US businesses, EU data protection, GDPR requirements, data privacy law",
    intro:
      "The EU General Data Protection Regulation has been in force since 2018, and its reach extends to any organization worldwide that processes the personal data of EU residents. If you have European customers, European employees, or your website collects data from EU visitors, GDPR applies to your business. Fines for serious violations can reach 4% of annual global turnover or 20 million euros, whichever is higher.",
    keyTakeaways: [
      "GDPR applies to any organization processing EU residents personal data, regardless of location.",
      "A lawful basis for processing must exist: consent, contract, legal obligation, vital interests, public task, or legitimate interests.",
      "Data subjects have rights including access, rectification, erasure, portability, and objection.",
      "Data breach notification to supervisory authorities is required within 72 hours of discovery.",
      "Data Processing Agreements are required with all third-party processors.",
      "Fines for serious violations reach 4% of global annual turnover or 20 million euros.",
    ],
    sections: [
      {
        heading: "Does GDPR Apply to Your Business?",
        body: "GDPR applies if you offer goods or services to EU residents, monitor their behavior within the EU including website analytics, or process their personal data in any context. Personal data under GDPR is broadly defined, including names, email addresses, IP addresses, cookie identifiers, location data, and any other information that can identify an individual. If your website uses Google Analytics, runs targeted advertising to EU users, or allows EU residents to create accounts, you are almost certainly processing EU personal data and GDPR applies.",
      },
      {
        heading: "Key Compliance Requirements",
        body: "You must have a lawful basis for every type of processing you perform. Consent must be freely given, specific, informed, and unambiguous. You must provide a clear, transparent Privacy Notice explaining what data you collect, why, how long you keep it, and who you share it with. You must respond to data subject access requests within one month. You must maintain records of processing activities. And you must have Data Processing Agreements with every third-party vendor that processes EU personal data on your behalf.",
      },
      {
        heading: "Data Transfers and the US-EU Framework",
        body: "Transferring EU personal data to US-based systems is heavily regulated under GDPR. The EU-US Data Privacy Framework provides a mechanism for US organizations to self-certify compliance and receive personal data from EU organizations legally. Standard Contractual Clauses are another commonly used mechanism for legitimizing EU-to-US data transfers. Ensure that any transfer mechanism you rely on is current and properly implemented. This area of GDPR compliance is actively enforced by European data protection authorities.",
      },
    ],
    conclusion:
      "Navigating GDPR compliance as a US business requires both legal expertise and operational security controls. MyITGuard helps organizations assess their GDPR compliance posture, implement the required technical and organizational measures, and build sustainable data governance practices. Contact us for a GDPR compliance assessment.",
  },
  {
    id: 14,
    title: "Security Awareness Training: Building a Security Culture",
    excerpt:
      "Annual training videos do not change behavior. Here is how to build a security culture that makes your entire organization more resilient.",
    category: "Security Training",
    date: "Dec 10, 2025",
    readTime: "10 min",
    seoKeywords:
      "security awareness training, security culture, employee security training, behavior change",
    intro:
      "Security culture is the set of values, attitudes, and behaviors that shape how people in your organization think about and act on security every day. Organizations with strong security cultures have employees who report suspicious emails, question unusual requests, and treat cybersecurity as their personal responsibility, not just the IT department problem. Building that culture takes deliberate effort, consistent reinforcement, and leadership modeling.",
    keyTakeaways: [
      "Culture change requires repetition, relevance, and leadership engagement, not annual compliance videos.",
      "Role-based training content is significantly more effective than one-size-fits-all modules.",
      "Employees must feel psychologically safe to report mistakes without fear of punishment.",
      "Micro-learning with short, frequent lessons outperforms long annual training sessions in retention.",
      "Security champions embedded in each department create peer-to-peer culture reinforcement.",
      "Measure culture with phishing simulation click rates, reporting rates, and security survey results.",
    ],
    sections: [
      {
        heading: "Why Annual Training Fails",
        body: "The traditional security awareness model, putting everyone through a 45-minute compliance video once a year and collecting completion certificates, has been proven ineffective at actually changing behavior. Human memory does not retain information delivered in a single session. Threat tactics evolve faster than annual training cycles. And when training is delivered as a compliance burden rather than a relevant skill, employees mentally check out while going through the motions.",
      },
      {
        heading: "Building a Training Program That Actually Changes Behavior",
        body: "Effective security awareness programs deliver training in short, frequent modules of 3 to 5 minutes rather than 45-minute marathons. They make content role-specific: finance teams get training on wire transfer fraud, developers get training on secure coding, executives get training on whaling. They use simulations including phishing simulations and vishing simulations as phone-based fraud becomes more convincing with deepfake audio. They create immediate learning moments when employees fail simulations, redirecting them to relevant content rather than shaming them.",
      },
      {
        heading: "The Security Champion Model",
        body: "One of the most effective ways to scale security culture is to identify and develop security champions within each department, trusted colleagues who are passionate about security and can serve as the on-the-ground resource for their peers. Security champions do not need to be technical experts. They need to be enthusiastic, approachable, and willing to help their colleagues navigate security questions. They bridge the gap between the security team and the broader organization.",
      },
    ],
    conclusion:
      "Building a genuine security culture is one of the highest-leverage investments any organization can make. MyITGuard Security Awareness Training program combines interactive modules, phishing simulations, security champion development, and ongoing measurement to create lasting behavior change. Contact us to learn about our training programs.",
  },
  {
    id: 15,
    title: "Data Breach Response: Legal Requirements and Best Practices",
    excerpt:
      "A data breach triggers a complex web of legal obligations. Here is what you must do and when to stay compliant and minimize liability.",
    category: "Incident Response",
    date: "Dec 8, 2025",
    readTime: "14 min",
    seoKeywords:
      "data breach response, breach notification requirements, incident response legal, data breach law",
    intro:
      "A data breach is not just a technical event. It is a legal, regulatory, financial, and reputational crisis that unfolds simultaneously across multiple fronts. The minutes and hours immediately following discovery of a breach are the most consequential. Organizations that respond effectively contain the damage, meet their legal notification obligations, and preserve their credibility. Organizations that respond poorly face compounding regulatory penalties, litigation, and irreparable reputational harm.",
    keyTakeaways: [
      "Breach notification requirements vary by state, federal regulation, and industry framework.",
      "GDPR requires notification to supervisory authorities within 72 hours of discovery.",
      "HIPAA requires notification to affected individuals within 60 days of discovery.",
      "Most US states have breach notification laws requiring timely notification to affected residents.",
      "CIRCIA requires critical infrastructure entities to report cyber incidents within 72 hours and ransom payments within 24 hours.",
      "Engage legal counsel before making any public statements or regulatory notifications.",
    ],
    sections: [
      {
        heading: "The First 24 Hours: Contain and Assess",
        body: "The first priority in a breach response is containment, preventing additional data from being exposed or additional systems from being compromised. Isolate affected systems, revoke compromised credentials, and block attacker access while preserving forensic evidence. Simultaneously, activate your incident response team and begin a preliminary assessment: What data was involved? How many individuals are affected? What categories of sensitive information were exposed? These assessments will drive your legal notification obligations. Document every action taken.",
      },
      {
        heading: "Navigating Breach Notification Obligations",
        body: "Breach notification law is a patchwork. At the federal level, HIPAA requires covered entities to notify affected individuals within 60 days and HHS within 60 days. GDPR requires supervisory authority notification within 72 hours and individual notification without undue delay when the breach is high-risk. CIRCIA regulations require critical infrastructure operators to report significant cyber incidents within 72 hours and ransomware payments within 24 hours. At the state level, all 50 US states have breach notification laws with varying definitions, timelines, and covered entities.",
      },
      {
        heading: "Post-Breach Recovery and Lessons Learned",
        body: "After containment and notification, the work of recovery begins. Restore affected systems from clean backups. Implement additional controls to address the vulnerability that enabled the breach. Conduct a thorough post-incident review to understand root cause, identify systemic security gaps, and improve your defenses. Update your incident response plan based on what you learned. Engage with any regulatory investigations transparently and cooperatively. Regulators treat good-faith cooperation materially better than defensiveness.",
      },
    ],
    conclusion:
      "Data breach response requires a coordinated team with legal, technical, communications, and executive involvement. MyITGuard provides breach response planning, tabletop exercises, forensic investigation coordination, and 24/7 incident response support. Contact us to build your breach response capability before you need it.",
  },
  {
    id: 16,
    title: "Password Management Best Practices for Organizations",
    excerpt:
      "Credential theft is the leading cause of data breaches. Here is how to eliminate weak passwords across your entire organization.",
    category: "Security Best Practices",
    date: "Dec 5, 2025",
    readTime: "9 min",
    seoKeywords:
      "password management, credential security, password manager, password policy, enterprise passwords",
    intro:
      "Stolen and weak credentials are involved in over 80% of web application breaches. Despite decades of security advice, password reuse, weak passwords, and poor credential hygiene remain pervasive problems. Enterprise password management solutions make it practical to eliminate these risks at scale, and pairing them with multi-factor authentication creates a credential security posture that is dramatically harder for attackers to compromise.",
    keyTakeaways: [
      "Password reuse across accounts is among the highest-risk credential behaviors.",
      "Enterprise password managers enable strong, unique passwords for every account without cognitive burden.",
      "Minimum password length of 12 or more characters with complexity is a baseline requirement in 2026.",
      "Privileged account credentials should be stored in a separate Privileged Access Management solution.",
      "Password managers should be combined with MFA. Passwords alone are insufficient for high-value accounts.",
      "Shared passwords should be eliminated. Every user and service account should have unique credentials.",
    ],
    sections: [
      {
        heading: "Why Password Policies Alone Do Not Work",
        body: "Many organizations have password policies requiring length and complexity, and still have terrible credential security. The reason is simple: if you require people to create and remember 50 unique complex passwords, they will not. They will reuse passwords across accounts, write them on sticky notes, use predictable patterns that meet technical requirements while being easily guessable, or find other workarounds. Password policies without the tooling to enforce them effectively create compliance theater without genuine security improvement.",
      },
      {
        heading: "Enterprise Password Managers: The Practical Solution",
        body: "Enterprise password managers solve the fundamental human problem of credential management by generating and storing strong, unique passwords for every account. Users only need to remember one strong master password. Platforms like 1Password, Bitwarden, and Dashlane for Business provide administrative controls, audit logs, policy enforcement, and team-level sharing for accounts that must be shared. Provisioning and deprovisioning workflows ensure that when an employee leaves, their access to all shared credentials is revoked centrally.",
      },
      {
        heading: "Privileged Account Credential Management",
        body: "Standard password managers are appropriate for user-level credentials, but privileged accounts require specialized controls. Privileged Access Management solutions like CyberArk, BeyondTrust, or HashiCorp Vault store privileged credentials in encrypted vaults, provide session recording for audit purposes, and can rotate credentials automatically. The goal is to eliminate standing privileged access and replace it with just-in-time access that is granted only when needed and automatically revoked afterward.",
      },
    ],
    conclusion:
      "MyITGuard helps organizations implement enterprise password management and privileged access management solutions that dramatically reduce credential-related risk. We also provide training to ensure employees understand how to use these tools effectively. Contact us to assess your current credential security posture.",
  },
  {
    id: 17,
    title: "Vendor Risk Management and Supply Chain Security",
    excerpt:
      "Your vendors have access to your data and systems, and their security posture directly affects yours. Here is how to manage third-party risk effectively.",
    category: "Risk Management",
    date: "Dec 3, 2025",
    readTime: "11 min",
    seoKeywords:
      "vendor risk management, third-party risk, supply chain security, vendor security assessment",
    intro:
      "The 2024 Change Healthcare ransomware attack demonstrated in devastating terms what happens when a widely trusted vendor is compromised. Thousands of healthcare organizations lost the ability to process claims for weeks, resulting in billions of dollars in disruption. IBM X-Force has documented a nearly fourfold increase in large supply chain and third-party compromises since 2020. Your organization security posture is only as strong as the weakest link in your vendor chain.",
    keyTakeaways: [
      "Third-party compromises have nearly quadrupled since 2020 per IBM X-Force.",
      "Vendors with access to your data or systems extend your attack surface to their security posture.",
      "A vendor risk management program requires inventory, assessment, contractual requirements, and ongoing monitoring.",
      "Business Associate Agreements are legally required under HIPAA for any vendor handling PHI.",
      "SOC 2 reports and security questionnaires are baseline requirements, not sufficient substitutes for thorough assessment.",
      "71% of organizations experienced a material third-party security incident in 2025.",
    ],
    sections: [
      {
        heading: "Building Your Vendor Inventory",
        body: "You cannot manage risk you have not identified. Start by inventorying every third-party vendor, partner, and service provider that has access to your systems, data, or network. Categorize them by the type of access they have and the sensitivity of the data they touch. Vendors with access to customer PII, financial data, or regulated information like PHI require the highest scrutiny. This inventory should be maintained as a living document and reviewed whenever new vendors are onboarded.",
      },
      {
        heading: "Assessing and Tiering Your Vendors",
        body: "Not every vendor warrants the same level of scrutiny. Tier your vendors based on risk. Tier 1 high-risk vendors get comprehensive security assessments, contractual security requirements, and regular reviews. Tier 2 vendors complete standardized security questionnaires and provide evidence of controls such as SOC 2 reports. Tier 3 vendors receive minimal review. For high-risk vendors, go beyond self-assessment. Review their SOC 2 Type II reports carefully, conduct your own assessment questions, and check their public breach history.",
      },
      {
        heading: "Contractual Protections and Ongoing Monitoring",
        body: "Contracts with high-risk vendors should include security requirements such as baseline security standards the vendor must maintain, incident notification obligations requiring them to notify you within 24 to 48 hours of a breach, right-to-audit clauses, and data deletion requirements at contract end. Monitor your critical vendors continuously. Review their security advisories, watch for breach notifications, and reassess formally at least annually. When a major vendor discloses a breach or vulnerability, act quickly. The window between vendor disclosure and attacker exploitation is often measured in hours.",
      },
    ],
    conclusion:
      "Effective vendor risk management is a program, not a questionnaire. MyITGuard helps organizations build comprehensive third-party risk management programs that scale with their vendor ecosystem, from initial vendor risk tiering through ongoing monitoring and incident response coordination. Contact us to assess your current vendor risk posture.",
  },
  {
    id: 18,
    title: "Network Segmentation: Design and Implementation",
    excerpt:
      "Network segmentation is one of the most effective controls for limiting breach impact. Here is how to design and implement it without breaking your operations.",
    category: "Network Security",
    date: "Dec 1, 2025",
    readTime: "13 min",
    seoKeywords:
      "network segmentation, micro-segmentation, VLAN security, network security design, lateral movement prevention",
    intro:
      "When attackers gain initial access to a network, what happens next depends almost entirely on what they can reach from there. In a flat, unsegmented network, a compromised endpoint is a gateway to everything else, file servers, databases, backup systems, and critical infrastructure. Network segmentation divides your network into isolated zones, ensuring that a breach in one zone cannot automatically spread to others. It is one of the most recommended controls in NIST, CIS, and HIPAA frameworks.",
    keyTakeaways: [
      "Network segmentation limits lateral movement, containing breaches to the initially compromised zone.",
      "VLANs provide basic segmentation. Micro-segmentation provides granular application-level isolation.",
      "Critical systems such as backup servers, payment systems, and PHI databases should be in separate, restricted segments.",
      "Firewall rules between segments should follow least-privilege. Only necessary traffic is permitted.",
      "The updated HIPAA Security Rule proposes mandatory network segmentation for systems handling ePHI.",
      "Proper implementation requires careful testing to avoid disrupting legitimate business traffic.",
    ],
    sections: [
      {
        heading: "Why Network Segmentation Matters",
        body: "The value of network segmentation becomes clear in the context of real ransomware attacks. Organizations with proper segmentation have been able to limit ransomware encryption to a single network zone while keeping other systems operational, dramatically reducing recovery time and cost. Organizations without segmentation have watched ransomware spread from a single compromised laptop to every server, workstation, and backup in the environment within hours. Beyond ransomware, segmentation limits the impact of insider threats, vendor credential compromise, and any attack involving lateral movement.",
      },
      {
        heading: "Designing Your Segmentation Architecture",
        body: "Start by identifying the crown jewels of your network, the assets that would cause the greatest harm if compromised: customer databases, financial systems, backup servers, and critical operational technology. Place these in dedicated, restricted network segments with tightly controlled inbound and outbound access. Separate your corporate user network from your server network. Isolate Internet of Things devices from your main corporate network. Create a dedicated segment for third-party vendors with remote access. For organizations subject to PCI DSS, isolate cardholder data environment systems in a dedicated segment.",
      },
      {
        heading: "Micro-Segmentation: The Next Level",
        body: "Traditional VLAN-based segmentation operates at the network level where all traffic within a VLAN is trusted. Micro-segmentation operates at the workload level, applying policies that control which specific applications and services can communicate with which other applications and services, regardless of network segment. This is particularly powerful in cloud and virtualized environments where traditional network perimeters do not exist. Zero Trust architecture incorporates micro-segmentation as a core component, ensuring that even within a trusted network zone, communications follow strict least-privilege principles.",
      },
    ],
    conclusion:
      "Designing and implementing network segmentation requires a thorough understanding of your existing traffic flows and business requirements. Done poorly, segmentation breaks legitimate operations. Done well, it dramatically improves your resilience against attack. MyITGuard provides network security design services and can help you implement segmentation aligned with your architecture and compliance requirements.",
  },
  {
    id: 19,
    title: "Email Security: Protecting Against Phishing and BEC",
    excerpt:
      "Email is the most exploited attack vector in cybersecurity. Here is how to build layered email defenses that block threats before they reach your users.",
    category: "Email Security",
    date: "Nov 28, 2025",
    readTime: "10 min",
    seoKeywords:
      "email security, phishing protection, business email compromise, BEC, email gateway, DMARC",
    intro:
      "Email is the entry point for over 90% of cyberattacks. Phishing emails deliver malware, steal credentials, and enable ransomware. Business email compromise, in which attackers impersonate executives or vendors to redirect wire transfers, has caused billions in losses globally. The FBI reports that BEC losses continue to exceed ransomware losses in total dollar terms. Effective email security requires multiple overlapping layers.",
    keyTakeaways: [
      "Email is the entry point for over 90% of cyberattacks.",
      "BEC losses consistently exceed ransomware losses in total dollar terms per FBI IC3 data.",
      "DMARC, DKIM, and SPF records must be properly configured to prevent domain spoofing.",
      "Email sandboxing and link rewriting protect against malicious attachments and URLs.",
      "AI-powered email security tools detect BEC by analyzing communication patterns and behavioral anomalies.",
      "Employee training remains essential. No technical control catches 100% of attacks.",
    ],
    sections: [
      {
        heading: "Foundational Email Authentication: SPF, DKIM, and DMARC",
        body: "Before worrying about advanced email security tools, ensure your foundational email authentication standards are properly configured. SPF specifies which mail servers are authorized to send email from your domain. DKIM adds a cryptographic signature to outbound emails, allowing recipients to verify authenticity. DMARC ties SPF and DKIM together and specifies what happens when a message fails authentication. Set DMARC to a policy of reject once you have validated your legitimate email flows. Without DMARC enforcement, attackers can spoof your domain to deceive your customers and partners.",
      },
      {
        heading: "Advanced Email Security Controls",
        body: "Beyond authentication standards, deploy an email security gateway that scans inbound and outbound messages for malicious content. Link rewriting replaces URLs in emails with proxied versions scanned at click time, catching malicious links that were safe at delivery time but became dangerous later. Attachment sandboxing detonates suspicious files in an isolated environment before delivery. AI-powered anti-phishing tools analyze sender reputation, communication patterns, and email content to detect spear-phishing and BEC attacks that evade signature-based filters.",
      },
      {
        heading: "Protecting Against Business Email Compromise",
        body: "BEC is uniquely difficult to detect technically because the attack often involves no malware, no malicious links, and no suspicious attachments, just a convincing impersonation email requesting a wire transfer. Technical controls that help include banner warnings on external emails, display name spoofing detection, and AI tools that analyze whether an email thread is consistent with known communication patterns. Process controls are equally important. Require verbal confirmation for any wire transfer request received via email, regardless of how legitimate the email appears.",
      },
    ],
    conclusion:
      "Email security requires both technology and training working together. MyITGuard helps organizations configure email authentication standards, deploy advanced email security gateways, and train employees to recognize and report phishing and BEC attempts. Contact us for an email security assessment.",
  },
  {
    id: 20,
    title: "Compliance Automation: Tools and Strategies",
    excerpt:
      "Manual compliance processes do not scale. Here is how compliance automation reduces cost, improves accuracy, and keeps you continuously audit-ready.",
    category: "Compliance",
    date: "Nov 25, 2025",
    readTime: "12 min",
    seoKeywords:
      "compliance automation, GRC tools, automated compliance, SOC 2 automation, continuous compliance",
    intro:
      "Managing compliance manually with spreadsheets, email threads, periodic document reviews, and last-minute audit scrambles is expensive, error-prone, and completely unsustainable as your organization and your compliance obligations grow. Compliance automation platforms address this by continuously monitoring your control environment, collecting evidence automatically, and maintaining audit-ready documentation throughout the year. Organizations that automate compliance reduce audit preparation time by up to 80%.",
    keyTakeaways: [
      "Compliance automation reduces audit preparation time by up to 80%.",
      "Continuous control monitoring replaces periodic reviews with real-time compliance visibility.",
      "Leading platforms integrate with your tech stack to collect evidence automatically.",
      "Automation works best when paired with clear control ownership and defined processes.",
      "GRC platforms help manage multiple frameworks from a single interface.",
      "Automation reduces audit cost by eliminating the scramble to gather evidence at audit time.",
    ],
    sections: [
      {
        heading: "What Compliance Automation Actually Does",
        body: "Modern compliance automation platforms such as Vanta, Drata, Secureframe, and Tugboat Logic integrate with your existing technology stack and continuously collect evidence of control effectiveness. Instead of manually gathering screenshots of your MFA settings at audit time, the platform monitors and records your MFA configuration continuously. Instead of chasing down vendors for their SOC 2 reports annually, the platform tracks vendor compliance status and sends automated reminders. Instead of manually reviewing access control lists quarterly, the platform generates access review workflows and tracks completion.",
      },
      {
        heading: "Choosing the Right Platform for Your Needs",
        body: "When evaluating compliance automation platforms, assess which compliance frameworks they support, which integrations are native versus requiring custom configuration, how they handle evidence collection for controls that cannot be automated, and how their pricing scales with your organization size and complexity. Most platforms offer a free trial or pilot period. Take advantage of it to evaluate the actual automation depth rather than relying on marketing claims.",
      },
      {
        heading: "Compliance Automation Is a Tool, Not a Strategy",
        body: "Compliance automation platforms are powerful enablers, but they do not replace security judgment or good control design. A platform will dutifully collect evidence that your MFA requirement is configured, but if you have exemptions that are not tracked or controls that exist on paper but not in practice, the automation just makes it easier to generate misleading documentation. Automation works best when implemented on top of a well-designed control framework with clear ownership, documented procedures, and genuine operational discipline.",
      },
    ],
    conclusion:
      "MyITGuard helps organizations implement compliance automation programs that match their specific framework requirements, technology stack, and operational context. We can help you select and configure the right platform, design the underlying control framework, and maintain continuous compliance readiness year-round. Contact us to learn how we can streamline your compliance program.",
  },
  {
    id: 21,
    title: "Security Metrics That Matter: KPIs for CISOs",
    excerpt:
      "What you measure shapes what you improve. Here are the security metrics that give you real insight into your program effectiveness.",
    category: "Security Management",
    date: "Nov 22, 2025",
    readTime: "11 min",
    seoKeywords:
      "security metrics, security KPIs, CISO metrics, cybersecurity measurement, security program effectiveness",
    intro:
      "Most security programs generate enormous amounts of data but relatively few turn that data into insights that drive meaningful improvement or resonate with business leadership. The best security metrics tell a story: Are we getting better or worse? Where are our highest-risk exposure points? Are our investments paying off? Choosing the right metrics and presenting them in terms that resonate with your board and executive team is a critical skill for security leaders.",
    keyTakeaways: [
      "Metrics should inform decisions, not just report activity. Focus on outcomes, not outputs.",
      "Mean time to detect and mean time to respond are critical operational effectiveness measures.",
      "Patch coverage and vulnerability age show how quickly you reduce your attack surface.",
      "Phishing simulation click rates and reporting rates measure your human firewall effectiveness.",
      "Board-level reporting should translate security metrics into business risk language.",
      "Trend data over time is more valuable than point-in-time snapshots.",
    ],
    sections: [
      {
        heading: "Operational Security Metrics",
        body: "Mean time to detect measures how long it takes your security operations to identify an active threat in your environment. Mean time to respond measures how long it takes to contain and resolve that threat. Both should be trending downward as your detection and response capabilities mature. Vulnerability age tracks how long known vulnerabilities remain unpatched in your environment, a direct measure of your attack surface. Patch compliance rate shows the percentage of systems meeting your patch currency requirements.",
      },
      {
        heading: "Risk and Compliance Metrics",
        body: "Tracking your open risk register items by severity and age shows whether risks are being managed or just documented. Compliance coverage rates across your applicable frameworks provide a snapshot of your current compliance posture. Number and severity of audit findings over time shows whether your compliance program is maturing. Third-party risk coverage shows the percentage of high-risk vendors assessed within the required review cycle. Security awareness training completion rates and phishing simulation results measure your human layer effectiveness.",
      },
      {
        heading: "Presenting Metrics to the Board",
        body: "Board members are business decision-makers who need to understand security risk in terms of business impact, not technical jargon. Translate security metrics into business language. Instead of stating your mean time to detect is 4 hours, say that on average you identify active security threats within 4 hours, compared to an industry average of 24 hours. Use trend charts that show improvement over time. Boards respond well to demonstrated progress and want to know whether investments are paying off.",
      },
    ],
    conclusion:
      "Defining and reporting the right security metrics is a discipline that takes time to develop but pays dividends in board engagement, resource allocation decisions, and program improvement. MyITGuard helps organizations build security metrics frameworks, executive dashboards, and board reporting packages that effectively communicate security program performance. Contact us to improve your security reporting.",
  },
  {
    id: 22,
    title: "Remote Work Security Best Practices",
    excerpt:
      "Remote work permanently expanded the attack surface of most organizations. Here is how to secure distributed workforces without destroying productivity.",
    category: "Remote Security",
    date: "Nov 20, 2025",
    readTime: "10 min",
    seoKeywords:
      "remote work security, work from home cybersecurity, endpoint security, remote access security",
    intro:
      "Remote work has fundamentally changed enterprise security. When employees work from home, coffee shops, airports, and hotel rooms, the traditional network perimeter becomes meaningless. Corporate data flows across home networks, personal devices, and unsecured public Wi-Fi connections. Attackers have adapted by targeting remote access infrastructure with increasing sophistication. Organizations must adapt their security architecture to treat remote work as the normal operating mode, not an exception.",
    keyTakeaways: [
      "Remote access infrastructure is a primary target for ransomware operators.",
      "Unmanaged personal devices used for work are a significant security risk.",
      "MFA is non-negotiable for all remote access to corporate systems.",
      "Home network security varies widely and cannot be assumed to be safe.",
      "Zero Trust Network Access provides stronger, more granular security than traditional VPN.",
      "Employees should be trained on the specific risks of remote work environments.",
    ],
    sections: [
      {
        heading: "Securing Remote Access Infrastructure",
        body: "Your remote access gateway, whether a traditional VPN or a newer Zero Trust Network Access solution, is a critical control point. Require MFA for all remote access without exception. Keep VPN software and remote access infrastructure fully patched. Many major ransomware campaigns in recent years exploited unpatched VPN vulnerabilities. Consider migrating from traditional VPN to ZTNA, which provides access to specific applications rather than broad network access, dramatically reducing the attack surface if remote user credentials are compromised.",
      },
      {
        heading: "Endpoint Security for Remote Workers",
        body: "Every device connecting to your corporate resources from outside the office is an endpoint that needs protection. Deploy EDR on all managed devices. This provides behavioral threat detection that goes far beyond traditional antivirus. Implement a mobile device management or unified endpoint management solution to enforce security policies on corporate devices: encryption requirements, screen lock, application controls, and remote wipe capability. Establish a Bring Your Own Device policy that either prohibits personal devices from accessing sensitive corporate data or requires them to enroll in MDM.",
      },
      {
        heading: "Training Remote Workers on Environment-Specific Risks",
        body: "Remote workers face threats that do not exist in office environments. Public Wi-Fi is a potential vector for network interception. Home routers are frequently unpatched and vulnerable. Video conferencing security matters. Employees should understand the risks of screen sharing sensitive information. Physical security is also relevant, since working on a laptop screen visible to others in a public space can expose sensitive business information. These environment-specific risks should be covered explicitly in remote work security training.",
      },
    ],
    conclusion:
      "Securing a distributed workforce requires a combination of technology controls, clear policies, and employee training tailored to the remote work context. MyITGuard helps organizations design and implement remote work security programs that protect distributed employees without creating barriers to productivity. Contact us to assess your remote work security posture.",
  },
  {
    id: 23,
    title: "Cybersecurity Insurance 2026: What You Need to Know",
    excerpt:
      "Cyber insurance requirements have tightened dramatically. Many organizations are denied coverage or facing premium increases. Here is how to get and keep good coverage.",
    category: "Risk Management",
    date: "Nov 18, 2025",
    readTime: "12 min",
    seoKeywords:
      "cyber insurance 2026, cybersecurity insurance requirements, cyber liability insurance, insurance underwriting",
    intro:
      "Cyber insurance has transformed from a nice-to-have into an operational necessity, and the market has responded to rising claims by dramatically tightening underwriting requirements. Insurers now require proof of specific security controls before binding coverage, and organizations that cannot demonstrate a mature security posture are facing coverage denials, exclusions on ransomware claims, and premium increases of 25 to 100 percent or more.",
    keyTakeaways: [
      "Cyber insurance underwriters require proof of MFA, EDR, backups, and tested IR plans.",
      "Ransomware-specific sub-limits and exclusions are increasingly standard in policies.",
      "Premium increases of 25 to 100 percent or more are common for organizations with weak security postures.",
      "Accurate representation on insurance applications is critical. Misrepresentation can void coverage.",
      "CIRCIA reporting requirements for ransomware payments have legal implications for insurance.",
      "Coverage denials are rising. Organizations with poor controls may be uninsurable at reasonable rates.",
    ],
    sections: [
      {
        heading: "What Underwriters Are Requiring in 2026",
        body: "Insurance underwriters have developed detailed security questionnaires that probe the maturity of your security program. The baseline requirements that virtually all underwriters now expect include multi-factor authentication for all administrative accounts and remote access, endpoint detection and response deployed on all endpoints, offline or immutable backups that are regularly tested, a documented and tested incident response plan, and privileged access management controls. Absence of any of these controls will either result in coverage denial, dramatically higher premiums, or exclusions that severely limit coverage when you actually need it.",
      },
      {
        heading: "Understanding Policy Terms and Coverage Gaps",
        body: "Not all cyber insurance policies cover the same risks. Read your policy carefully with attention to ransomware sub-limits, war exclusions, and notification cost coverage. Understand exactly what constitutes a covered loss under your policy. Business interruption calculations, data recovery costs, extortion payments, regulatory fines, and legal defense costs may or may not be covered depending on your policy language. Work with an insurance broker who specializes in cyber risk and can help you compare coverage terms, not just premium cost.",
      },
      {
        heading: "Improving Your Security Posture for Better Coverage",
        body: "The best way to improve your cyber insurance position is to genuinely improve your security posture. The same controls that underwriters require are also the controls that most reduce your actual breach risk. Prioritize implementing MFA, EDR, and tested backups if you have not already. Document your security program formally. Underwriters respond favorably to evidence of a structured security program with executive oversight, regular risk assessments, and documented policies. Conduct a tabletop exercise and document it. This directly demonstrates incident response preparedness.",
      },
    ],
    conclusion:
      "Cyber insurance is an important component of your overall risk management strategy, but it is not a substitute for good security practices. MyITGuard helps organizations build the security programs that both underwriters and regulators expect, and document them in ways that improve coverage terms and reduce premiums. Contact us to prepare for your next cyber insurance renewal.",
  },
  {
    id: 24,
    title: "API Security: Protecting Your Digital Interfaces",
    excerpt:
      "APIs have become the most targeted attack surface in modern application security. Here is how to secure them before attackers find the gaps.",
    category: "Application Security",
    date: "Nov 15, 2025",
    readTime: "11 min",
    seoKeywords:
      "API security, API vulnerabilities, OWASP API security, REST API security, application security",
    intro:
      "APIs are now the primary attack surface for web application attacks. The OWASP API Security Top 10 documents the most critical API vulnerabilities, and attackers exploit them constantly to steal data, bypass authentication, and manipulate application logic. Every modern application exposes APIs, and many organizations have far more APIs than they realize, including legacy, undocumented, and abandoned APIs that represent significant unmanaged risk.",
    keyTakeaways: [
      "APIs are the most common target for web application attacks in 2026.",
      "Broken Object Level Authorization is the most common and damaging API vulnerability.",
      "Many organizations have undiscovered or undocumented APIs that represent unmanaged risk.",
      "Authentication, rate limiting, and input validation are foundational API security controls.",
      "API gateway deployment centralizes security policy enforcement across all APIs.",
      "Continuous API security testing should be integrated into your development pipeline.",
    ],
    sections: [
      {
        heading: "The OWASP API Security Top 10",
        body: "The OWASP API Security Top 10 defines the most critical API vulnerabilities. Broken Object Level Authorization, also called IDOR, occurs when an API does not properly check whether the requesting user has permission to access the specific object they are requesting. This allows attackers to access other users data by simply modifying an ID in an API request. Broken Authentication allows attackers to gain unauthorized access by exploiting weaknesses in how APIs handle credentials and session tokens. Excessive Data Exposure occurs when APIs return more data than the client needs, exposing sensitive fields that the UI does not display.",
      },
      {
        heading: "Foundational API Security Controls",
        body: "Every API endpoint should require authentication. There should be no unauthenticated endpoints that return sensitive data. Use OAuth 2.0 and OpenID Connect for API authentication, with short-lived tokens that limit the window of exposure if stolen. Implement rate limiting on all endpoints to prevent brute force and enumeration attacks. Validate all input server-side, since client-side validation is easily bypassed. Return only the data the client specifically needs. Enable HTTPS for all API traffic without exception.",
      },
      {
        heading: "API Discovery and Continuous Testing",
        body: "One of the most persistent API security problems is the existence of undiscovered or undocumented APIs, endpoints created for development or testing purposes that were never properly decommissioned, or legacy APIs from old application versions that are still reachable. Conduct a thorough API inventory to identify every endpoint in your environment. Integrate API security testing into your CI/CD pipeline so that new APIs are automatically scanned for common vulnerabilities before reaching production. Consider deploying an API gateway that centralizes authentication, authorization, rate limiting, and security policy enforcement across all your APIs.",
      },
    ],
    conclusion:
      "API security requires both secure development practices and ongoing testing and monitoring. MyITGuard helps organizations assess their API security posture, implement foundational controls, integrate security testing into development workflows, and deploy API gateway solutions. Contact us for an application security assessment.",
  },
  {
    id: 25,
    title: "Building Your Security Operations Center (SOC)",
    excerpt:
      "A well-designed SOC is the nerve center of your security program. Here is what it takes to build one, and whether a managed SOC is a better fit.",
    category: "Security Operations",
    date: "Nov 12, 2025",
    readTime: "14 min",
    seoKeywords:
      "SOC, Security Operations Center, SIEM, managed SOC, threat detection, incident response",
    intro:
      "A Security Operations Center is a centralized function that monitors, detects, analyzes, and responds to cybersecurity events across an organization environment. Whether you build an internal SOC, contract with a managed SOC provider, or build a hybrid model, the goal is the same: continuous visibility into your security posture and the capability to respond to threats quickly. For most organizations below 1,000 employees, a managed SOC or MDR service delivers more effective security coverage at far lower cost than an in-house operation.",
    keyTakeaways: [
      "A SOC provides 24/7 monitoring, threat detection, analysis, and incident response.",
      "The core technology components are SIEM, EDR, SOAR, and threat intelligence feeds.",
      "Staffing an in-house SOC requires significant investment in people, technology, and processes.",
      "Managed SOC and MDR services provide 24/7 coverage at a fraction of the in-house cost.",
      "Mean time to detect and mean time to respond are the primary SOC effectiveness metrics.",
      "AI-powered SOC tools dramatically reduce alert fatigue by automating initial triage.",
    ],
    sections: [
      {
        heading: "The SOC Technology Stack",
        body: "The foundational technology of a SOC is the Security Information and Event Management platform, which aggregates log data from across the environment, correlates events against detection rules, and generates alerts for analyst review. EDR platforms provide endpoint-level visibility and behavioral detection. SOAR platforms automate repetitive analyst tasks including alert enrichment, initial triage, and standard response playbooks. Threat intelligence feeds provide context about known malicious IP addresses, domains, and file hashes. Network Detection and Response tools monitor network traffic for anomalous behavior.",
      },
      {
        heading: "Building vs. Buying: The In-House vs. Managed SOC Decision",
        body: "An in-house SOC that provides genuine 24/7 coverage requires a minimum of 6 to 8 analysts to cover shifts, vacations, and training, a SOC manager, significant technology investment, and ongoing threat intelligence subscriptions. The all-in annual cost typically exceeds $1.5 to $2 million for a small operation. A managed SOC or MDR service typically costs $100,000 to $400,000 annually for organizations with 500 or fewer employees and provides 24/7 coverage, expert analysis, and incident response support. For most SMBs, the math heavily favors managed services.",
      },
      {
        heading: "Alert Fatigue and AI-Powered SOC Enhancement",
        body: "Alert fatigue is one of the most significant challenges in security operations. High-quality SIEM tuning, asset contextualization, and alert prioritization are critical for managing it. AI-powered SOC tools are increasingly effective at automatically triaging alerts, suppressing false positives, correlating related events into incidents, and recommending response actions. Organizations deploying AI-assisted SOC tools report significant reductions in analyst workload and improvements in both alert quality and response speed.",
      },
    ],
    conclusion:
      "Whether you are building your first security monitoring capability or enhancing an existing SOC, MyITGuard can help. We offer managed detection and response services, SIEM implementation and tuning, SOC consulting, and incident response support. Contact us to learn which model is the right fit for your organization.",
  },
  {
    id: 26,
    title: "What Is a Zero-Day Exploit? Complete Guide",
    excerpt:
      "Zero-day exploits target vulnerabilities that no one has had time to fix yet. Here is what you need to know to defend against the unknown.",
    category: "Threat Intelligence",
    date: "Nov 10, 2025",
    readTime: "8 min",
    seoKeywords:
      "zero-day exploit, what is zero-day vulnerability, zero-day attack, patch management",
    intro:
      "A zero-day exploit is a cyberattack that targets a software vulnerability that is unknown to the software vendor, meaning there are zero days during which a patch or fix has been available. Zero-days are among the most dangerous threats in cybersecurity precisely because defenders have no warning and no patch to apply. When a zero-day is actively being exploited, organizations must rely on compensating controls like behavioral detection, network segmentation, and rapid incident response to minimize damage.",
    keyTakeaways: [
      "A zero-day targets a vulnerability unknown to the vendor. No patch exists yet.",
      "Mandiant found that time-to-exploit has gone negative. Attacks arrive before patches in 28% of cases.",
      "Zero-days are bought and sold through commercial exploit brokers for hundreds of thousands of dollars.",
      "Patch management is critical. The vast majority of exploited vulnerabilities had available patches.",
      "Behavioral detection can identify zero-day exploitation activity even without a known signature.",
      "Network segmentation limits the blast radius when a zero-day is successfully exploited.",
    ],
    sections: [
      {
        heading: "How Zero-Day Exploits Work",
        body: "When a security researcher or attacker discovers a previously unknown vulnerability in software, they have a window of opportunity before the vendor is aware and can release a fix. Nation-state actors and sophisticated cybercriminal groups invest significant resources in discovering, purchasing, and weaponizing zero-day vulnerabilities, particularly in widely used software like operating systems, browsers, VPN appliances, and enterprise applications. A commercial market for zero-day exploits has developed, with some vulnerabilities selling for millions of dollars to government agencies and criminal organizations.",
      },
      {
        heading: "Zero-Days vs. N-Day Vulnerabilities",
        body: "While zero-days get the headlines, the vast majority of successful cyberattacks exploit known vulnerabilities for which patches have been available for weeks, months, or even years. These are called N-day vulnerabilities. Mandiant 2026 research found that mean time to exploit across all vulnerabilities has dropped to approximately 7 days or less, meaning that once a vulnerability is publicly disclosed, attackers are attempting exploitation within days. Organizations that patch within 72 hours of a critical vulnerability disclosure are significantly less likely to be successfully exploited.",
      },
      {
        heading: "Protecting Against Zero-Day Attacks",
        body: "Since by definition you cannot patch against a zero-day, your defenses must rely on controls that do not depend on signature-based detection. Deploy EDR solutions with behavioral detection capabilities that can identify exploitation patterns even for unknown vulnerabilities. Implement network segmentation to contain damage if an exploitation succeeds. Apply the principle of least privilege across your environment. Enable enhanced monitoring and logging for internet-facing systems. Subscribe to threat intelligence feeds that provide rapid notification when new zero-days are disclosed.",
      },
    ],
    conclusion:
      "Zero-day threats underscore why a layered security posture rather than dependence on any single control is essential. MyITGuard provides threat intelligence services, managed detection and response, and security architecture guidance that helps organizations defend against both known and unknown threats. Contact us to assess your zero-day readiness.",
  },
  {
    id: 27,
    title: "What Is Ransomware? Definition, Types, and Protection",
    excerpt:
      "Ransomware has become the most damaging form of cybercrime. Here is a clear explanation of how it works and what you can do to protect your organization.",
    category: "Threat Intelligence",
    date: "Nov 8, 2025",
    readTime: "9 min",
    seoKeywords:
      "what is ransomware, ransomware definition, ransomware types, ransomware protection, malware",
    intro:
      "Ransomware is malicious software that encrypts a victim files and demands payment, typically in cryptocurrency, in exchange for the decryption key. Modern ransomware attacks have evolved far beyond simple file encryption. Today attackers combine data theft with encryption and additional extortion tactics to maximize pressure on victims. The average ransomware recovery cost has reached $2.73 million, and healthcare organizations face average costs of $7.42 million per incident.",
    keyTakeaways: [
      "Ransomware encrypts files and demands payment for the decryption key.",
      "Modern ransomware also steals data and threatens public release, called double extortion.",
      "Ransomware-as-a-Service allows criminals without technical skills to deploy ransomware.",
      "The most common entry points are phishing emails, unpatched vulnerabilities, and stolen credentials.",
      "Immutable backups are the most important recovery control against ransomware.",
      "Paying the ransom does not guarantee data recovery and may violate OFAC regulations.",
    ],
    sections: [
      {
        heading: "How Ransomware Attacks Work",
        body: "A typical ransomware attack follows a recognizable pattern. The attacker gains initial access, usually through a phishing email, exploitation of an unpatched vulnerability, or use of stolen credentials. Next, they establish persistence and move laterally through the network, seeking additional credentials, backup systems, and high-value data. Then they exfiltrate sensitive data for leverage. Finally, they deploy the ransomware payload, which rapidly encrypts files across the network, often targeting backup systems first to prevent recovery. The entire process from initial access to full encryption can complete in under 24 hours.",
      },
      {
        heading: "Ransomware-as-a-Service: The Criminal Business Model",
        body: "Ransomware-as-a-Service has transformed ransomware from an activity requiring significant technical expertise into an accessible criminal franchise. RaaS developers build and maintain the ransomware code, infrastructure, and victim negotiation services. Affiliates who need minimal technical knowledge use these tools to conduct attacks and split the ransom payments with the developers. This model has dramatically expanded the number of active ransomware operators and increased the frequency of attacks globally.",
      },
      {
        heading: "Recovery: What Happens After an Attack",
        body: "If you experience a ransomware attack, your first call should be to legal counsel, not to the ransomware operators. Engage a qualified incident response firm to assess the extent of the compromise and preserve forensic evidence. Notify your cyber insurance provider. Determine your notification obligations under applicable breach notification laws. If you have clean, tested backups, begin the recovery process from those. Paying the ransom should be considered only as a last resort after consulting with legal counsel, since payments to certain ransomware groups may violate OFAC sanctions.",
      },
    ],
    conclusion:
      "Ransomware is one of the most serious threats facing organizations today, but it is also highly preventable with the right combination of technical controls, user training, and incident response planning. MyITGuard helps organizations build the layered defenses needed to prevent, detect, and recover from ransomware attacks. Contact us for a ransomware readiness assessment.",
  },
  {
    id: 28,
    title: "What Is Phishing? How to Recognize and Avoid Attacks",
    excerpt:
      "Phishing is the most common entry point for cyberattacks. Here is a plain-English guide to recognizing phishing attempts before they cause harm.",
    category: "Security Training",
    date: "Nov 6, 2025",
    readTime: "7 min",
    seoKeywords:
      "what is phishing, phishing attack, how to recognize phishing, email security, phishing examples",
    intro:
      "Phishing is a type of cyberattack in which an attacker impersonates a trusted person or organization to trick victims into revealing sensitive information, clicking malicious links, or installing malware. Phishing attacks arrive most commonly via email, but also occur through text messages, phone calls, and social media. Despite decades of awareness, phishing remains the most common entry point for cyberattacks because it exploits fundamental human psychology rather than technical vulnerabilities.",
    keyTakeaways: [
      "Phishing exploits human psychology including urgency, fear, and authority, not just technical tricks.",
      "Always verify unexpected requests through a separate, trusted channel, not by replying to the email.",
      "Look for mismatched sender addresses, generic greetings, and unusual urgency as warning signs.",
      "Hover over links before clicking to see the actual destination URL.",
      "Legitimate organizations never ask for passwords or sensitive information via email.",
      "Report suspected phishing to your security team immediately. Speed matters.",
    ],
    sections: [
      {
        heading: "How to Recognize a Phishing Email",
        body: "Phishing emails are increasingly convincing, but there are common warning signs. Check the sender address carefully. The display name may say Microsoft Support but the actual email address may be a random domain. Look for generic greetings like Dear Customer instead of your name. Be suspicious of urgent language such as account suspension threats or immediate action required notices. Check links by hovering over them before clicking. The destination URL should match the organization legitimate domain. Unexpected attachments, especially executable files or password-protected archives, are high-risk.",
      },
      {
        heading: "Common Phishing Scenarios",
        body: "Credential phishing attempts to steal your username and password by directing you to a fake login page that looks identical to a legitimate service like Microsoft 365, Google, or your bank. Malware delivery phishing convinces you to open an attachment or click a link that installs malware on your device. Business email compromise impersonates an executive or vendor to request an urgent wire transfer or change to banking details. Package delivery phishing sends fake shipping notifications with malicious links. Tax-themed phishing impersonates the IRS or state tax agencies, especially prevalent during tax season.",
      },
      {
        heading: "What to Do If You Suspect Phishing",
        body: "Do not click any links or open any attachments if you suspect a phishing email. Do not reply to the email. If the email appears to be from a vendor, colleague, or service you actually use, contact them through a known, trusted channel, not by replying to the suspicious email. Report the suspicious email to your IT or security team using your organization reporting mechanism. If you clicked a link or opened an attachment before realizing it was suspicious, notify your security team immediately. Early notification dramatically improves response effectiveness.",
      },
    ],
    conclusion:
      "Phishing awareness training is one of the most cost-effective security investments available. MyITGuard Security Awareness Training programs include realistic phishing simulations and targeted training that dramatically reduce employee susceptibility over time. Contact us to build your human firewall.",
  },
  {
    id: 29,
    title: "What Is Spear Phishing? Targeted Attack Guide",
    excerpt:
      "Spear phishing is highly personalized and dramatically more dangerous than generic phishing. Here is how to recognize and defend against targeted attacks.",
    category: "Threat Intelligence",
    date: "Nov 4, 2025",
    readTime: "8 min",
    seoKeywords:
      "what is spear phishing, targeted phishing, social engineering, spear phishing examples, executive phishing",
    intro:
      "While standard phishing casts a wide net hoping to catch any victim, spear phishing is a precision attack targeted at a specific individual or organization. Spear phishers research their targets in advance, reviewing LinkedIn profiles, company websites, press releases, and social media, to craft emails that are convincingly personalized. A spear phishing email might reference your actual name, job title, current projects, and colleagues. This personalization makes it dramatically more convincing than generic phishing.",
    keyTakeaways: [
      "Spear phishing uses personal information to create highly convincing targeted attacks.",
      "Attackers research targets on LinkedIn, company websites, and social media.",
      "Executives, finance teams, and IT administrators are the most commonly targeted individuals.",
      "Even experienced security professionals can be deceived by well-crafted spear phishing.",
      "Verify unexpected requests through a separate, trusted communication channel.",
      "Limiting publicly available information about employees reduces spear phishing effectiveness.",
    ],
    sections: [
      {
        heading: "How Spear Phishing Attacks Are Crafted",
        body: "Before launching a spear phishing attack, adversaries gather intelligence on their target using open source intelligence techniques. They discover organizational structure from LinkedIn, identify key personnel from company websites, find email formats and naming conventions from contact pages, and learn about ongoing projects from press releases and news articles. With this information, an attacker can craft an email that appears to come from the target manager, references a real project, and requests a specific action like clicking a link to review a document or wiring funds for an urgent deal.",
      },
      {
        heading: "High-Risk Targets Within Your Organization",
        body: "Certain roles are disproportionately targeted by spear phishing. Finance personnel with authority to initiate wire transfers are targeted for business email compromise. Executives are targeted with whaling attacks that impersonate board members, attorneys, or government regulators. IT administrators are targeted because their credentials provide the highest-value network access. HR personnel are targeted because they have access to employee personal information and W-2 data valuable for tax fraud. These high-risk roles warrant more frequent and more sophisticated training and simulation exercises.",
      },
      {
        heading: "Organizational Defenses Against Spear Phishing",
        body: "No technical control catches 100% of well-crafted spear phishing. Layered defenses are essential. Deploy AI-powered email security tools that analyze behavioral patterns and flag emails that deviate from established communication norms. Train employees specifically on how spear phishing differs from generic phishing. Implement process controls requiring verbal verification for high-risk actions like wire transfers or credential changes, regardless of how legitimate the requesting email appears. Conduct regular spear phishing simulations targeting your highest-risk employees.",
      },
    ],
    conclusion:
      "Spear phishing is among the most sophisticated and difficult-to-defend threats organizations face today. MyITGuard provides targeted security awareness training and phishing simulation programs that include spear-phishing scenarios tailored to your industry and risk profile. Contact us to strengthen your defenses against targeted attacks.",
  },
  {
    id: 30,
    title: "What Is Malware? Types, Examples, and Prevention",
    excerpt:
      "Malware is an umbrella term for dozens of types of malicious software. Here is a clear guide to the major categories and how to defend against them.",
    category: "Threat Intelligence",
    date: "Nov 2, 2025",
    readTime: "10 min",
    seoKeywords:
      "what is malware, malware types, virus vs malware, malware prevention, endpoint security",
    intro:
      "Malware, short for malicious software, is any software intentionally designed to disrupt, damage, or gain unauthorized access to a computer system. It is an umbrella term encompassing many distinct categories of malicious code, each with different delivery methods, behaviors, and objectives. Understanding the major malware categories helps organizations make better decisions about which security controls to prioritize.",
    keyTakeaways: [
      "Malware encompasses viruses, worms, trojans, ransomware, spyware, adware, rootkits, and more.",
      "Most malware arrives through phishing emails, malicious downloads, or compromised websites.",
      "Endpoint Detection and Response provides behavioral detection that catches novel malware.",
      "Keeping software patched and users trained are the most effective prevention measures.",
      "Air-gapped backups provide recovery capability if malware destroys or encrypts your data.",
      "Malware increasingly uses legitimate system tools to evade detection through living-off-the-land techniques.",
    ],
    sections: [
      {
        heading: "Major Malware Categories",
        body: "Viruses attach themselves to legitimate files and spread when those files are executed. Worms spread automatically across networks without requiring user interaction. Trojans disguise themselves as legitimate software to trick users into installing them. Ransomware encrypts files and demands payment for decryption. Spyware secretly monitors user activity and transmits data to attackers. Adware displays unwanted advertisements and often serves as a gateway to more serious malware. Rootkits burrow deep into the operating system to hide their presence and maintain persistent access. Fileless malware operates entirely in memory using legitimate system tools to avoid leaving files that antivirus can detect.",
      },
      {
        heading: "How Malware Gets Into Systems",
        body: "Phishing emails are the most common malware delivery mechanism. Malicious attachments or links download and execute malware when opened or clicked. Drive-by downloads infect devices that simply visit a compromised website, exploiting browser or plugin vulnerabilities. Malicious USB drives take advantage of auto-run features or user curiosity. Supply chain attacks compromise legitimate software update mechanisms to distribute malware to all customers of a trusted vendor. Watering hole attacks compromise websites frequently visited by a target audience and infect visitors.",
      },
      {
        heading: "Modern Malware Defense Strategies",
        body: "Traditional antivirus relying on signature databases of known malware is insufficient against modern threats. Many malware families are polymorphic, changing their signatures to evade detection, or fileless, never creating the files that antivirus scans. Endpoint Detection and Response solutions use behavioral analysis to identify malicious activity patterns regardless of whether the specific malware has been seen before. Application whitelisting allows only approved software to execute. Network monitoring can detect malicious command-and-control communications. Email sandboxing automatically detonates suspicious attachments in isolated environments before delivery.",
      },
    ],
    conclusion:
      "Defending against the full spectrum of malware threats requires a layered security approach combining endpoint protection, email security, network monitoring, and user training. MyITGuard provides endpoint security assessments, managed security services, and security awareness training. Contact us for an endpoint security review.",
  },
  {
    id: 31,
    title: "What Is a Firewall? Network Security Explained",
    excerpt:
      "Firewalls are foundational to network security, but not all firewalls are equal. Here is a clear guide to how they work and which type you need.",
    category: "Network Security",
    date: "Oct 30, 2025",
    readTime: "7 min",
    seoKeywords:
      "what is firewall, how does a firewall work, firewall types, next-gen firewall, network security",
    intro:
      "A firewall is a network security device that monitors and controls incoming and outgoing network traffic based on defined security rules. Think of it as a security checkpoint at the entry points of your network, examining every connection request and allowing or blocking it based on your security policy. Firewalls are foundational to network security and have evolved from simple packet-filtering devices to today next-generation firewalls that inspect encrypted traffic and identify applications.",
    keyTakeaways: [
      "Firewalls monitor and filter network traffic based on security rules you define.",
      "Next-generation firewalls inspect encrypted traffic and identify applications, far more powerful than traditional firewalls.",
      "Web application firewalls protect web applications from SQL injection, XSS, and other attacks.",
      "Firewalls must be properly configured. Default configurations are often insecure.",
      "Firewalls are necessary but not sufficient. They must be part of a layered security strategy.",
      "Cloud firewalls and security groups protect cloud workloads from network-based attacks.",
    ],
    sections: [
      {
        heading: "How Firewalls Work",
        body: "Traditional packet-filtering firewalls examine individual network packets and compare their characteristics such as source IP, destination IP, port, and protocol against a ruleset. Stateful firewalls improve on this by tracking the state of network connections, allowing smarter decisions about whether incoming packets are part of legitimate established connections. Next-generation firewalls add deep packet inspection, application identification, intrusion detection and prevention, SSL/TLS decryption, and threat intelligence integration, effectively making security decisions based on what is in the traffic, not just where it came from.",
      },
      {
        heading: "Types of Firewalls and When to Use Each",
        body: "Network firewalls protect the perimeter between your internal network and the internet. Host-based firewalls run on individual computers and control traffic to and from that specific device. Web Application Firewalls sit in front of web applications and specifically protect against application-layer attacks like SQL injection, cross-site scripting, and request flooding. Cloud security groups and network access control lists function as firewalls for cloud resources, controlling which traffic can reach cloud instances, databases, and services. Most organizations need multiple types of firewalls operating at different layers.",
      },
      {
        heading: "Common Firewall Misconfigurations",
        body: "A firewall is only as effective as its configuration. Common mistakes include allowing overly broad rules that effectively negate the firewall protective function, leaving management interfaces exposed to the internet, failing to review and prune outdated rules, not enabling logging, and neglecting to update firmware. Firewalls have vulnerabilities just like any other software. Conduct regular firewall rule audits to identify overly permissive rules, remove rules that are no longer needed, and verify that the firewall configuration matches your intended security policy.",
      },
    ],
    conclusion:
      "Firewalls are a foundational security control, but proper configuration and ongoing management are essential to their effectiveness. MyITGuard provides network security assessments that include firewall rule review, configuration analysis, and architecture recommendations. Contact us to ensure your firewall is actually protecting your network.",
  },
  {
    id: 32,
    title: "What Is Encryption? Data Protection Explained",
    excerpt:
      "Encryption is the most fundamental tool for protecting data privacy and security. Here is a clear, practical guide to how encryption works and when to use it.",
    category: "Security Best Practices",
    date: "Oct 28, 2025",
    readTime: "9 min",
    seoKeywords:
      "what is encryption, data encryption, how encryption works, encryption types, end-to-end encryption",
    intro:
      "Encryption is the process of converting readable data into an unreadable format using a mathematical algorithm and a key, so that only authorized parties with the correct key can read it. It is the foundational technology that protects the privacy and security of data across virtually every digital system. As regulatory requirements increasingly mandate encryption, understanding how it works and where to apply it is essential for any organization handling sensitive data.",
    keyTakeaways: [
      "Encryption makes data unreadable without the correct decryption key.",
      "Symmetric encryption uses the same key for encryption and decryption. It is fast but requires secure key exchange.",
      "Asymmetric encryption uses a public and private key pair. It is slower but solves the key exchange problem.",
      "End-to-end encryption ensures even the service provider cannot access content.",
      "HIPAA, GDPR, PCI DSS, and other regulations increasingly require encryption of sensitive data.",
      "Encryption at rest protects stored data. Encryption in transit protects data moving across networks.",
    ],
    sections: [
      {
        heading: "Symmetric vs. Asymmetric Encryption",
        body: "Symmetric encryption uses a single key to both encrypt and decrypt data. It is computationally fast and suitable for encrypting large amounts of data. AES, the Advanced Encryption Standard, is the dominant symmetric algorithm used in everything from disk encryption to VPNs. The challenge with symmetric encryption is securely sharing the key between sender and recipient. Asymmetric encryption solves this with a key pair: a public key that anyone can use to encrypt data, and a private key that only the recipient holds for decryption. In practice, most modern cryptographic systems combine both approaches.",
      },
      {
        heading: "Encryption at Rest vs. Encryption in Transit",
        body: "Encryption at rest protects data stored on disk, including hard drives, databases, backup tapes, and cloud storage. If an attacker steals a physical server or gains access to raw storage, encrypted data is unreadable without the decryption key. Full disk encryption such as FileVault on Mac and BitLocker on Windows protects laptops and workstations. Encryption in transit protects data moving across networks. TLS, the Transport Layer Security protocol, is the standard for encrypting internet traffic, and the padlock icon in your browser confirms it is active.",
      },
      {
        heading: "Encryption in Regulatory Compliance",
        body: "Encryption requirements appear across most major regulatory frameworks. The updated HIPAA Security Rule makes encryption of ePHI at rest and in transit mandatory. GDPR encourages encryption as a primary technical safeguard and specifically mentions it as a control that can reduce breach notification obligations. PCI DSS requires strong encryption of cardholder data both in storage and transmission. CMMC 2.0 requires encryption for systems storing or transmitting CUI. Implementing comprehensive encryption is not just good security practice. It is increasingly a legal requirement.",
      },
    ],
    conclusion:
      "Encryption is a foundational control that protects data confidentiality regardless of what other security measures fail. MyITGuard helps organizations implement encryption programs that cover data at rest, data in transit, and key management, ensuring your data is protected and your compliance obligations are met. Contact us for a data protection assessment.",
  },
  {
    id: 33,
    title: "What Is Two-Factor Authentication (2FA)? Complete Guide",
    excerpt:
      "2FA is one of the simplest and most effective security controls available. Here is how it works, why it matters, and how to implement it across your organization.",
    category: "Security Best Practices",
    date: "Oct 26, 2025",
    readTime: "6 min",
    seoKeywords:
      "what is 2FA, two-factor authentication, multi-factor authentication, account security, MFA guide",
    intro:
      "Two-factor authentication requires users to provide two distinct types of evidence to prove their identity before gaining access to an account or system. The classic example is an ATM: you need both the physical card and the PIN. 2FA dramatically increases account security because even if an attacker steals your password, they cannot log in without the second factor. Microsoft security data shows that enabling 2FA blocks over 99% of automated account takeover attacks.",
    keyTakeaways: [
      "2FA requires two distinct forms of evidence: something you know, have, or are.",
      "Enabling 2FA blocks over 99% of automated account takeover attacks.",
      "Authenticator apps are stronger than SMS-based 2FA for most use cases.",
      "Hardware security keys implementing FIDO2 are the strongest form of 2FA and are phishing-resistant.",
      "Every employee email account, especially those with access to sensitive data, should use 2FA.",
      "2FA is a subset of MFA. Multi-factor authentication can require two or more factors.",
    ],
    sections: [
      {
        heading: "The Three Types of Authentication Factors",
        body: "Authentication factors fall into three categories. Something you know includes passwords, PINs, and security questions. Something you have includes physical devices like smartphones for receiving codes, hardware security keys, and smart cards. Something you are includes biometrics such as fingerprints, facial recognition, and voice patterns. Two-factor authentication combines any two of these categories. The security benefit comes from the combination. An attacker who steals your password still cannot access your account without your phone or your fingerprint.",
      },
      {
        heading: "Choosing the Right 2FA Method",
        body: "SMS-based 2FA sends a one-time code to your phone via text message. It is better than no 2FA but is vulnerable to SIM swapping attacks. Authenticator app codes from apps like Microsoft Authenticator, Google Authenticator, or Authy are generated locally on your device and are significantly stronger than SMS. Push notifications ask you to approve a login attempt on your phone, but require number matching to prevent MFA fatigue attacks. Hardware security keys implement the FIDO2 and WebAuthn standard and are phishing-resistant by design, making them the strongest available 2FA method.",
      },
      {
        heading: "Implementing 2FA in Your Organization",
        body: "Start by enabling 2FA on your most critical accounts: administrator accounts, email, VPN, cloud provider consoles, and any system containing sensitive data. Use your identity provider such as Microsoft Entra, Okta, or Google Workspace to enforce 2FA at the identity layer so the requirement applies automatically across all connected applications. Establish a clear exception process and track exceptions carefully. Every 2FA exception is a potential attack path. Train users on how to use 2FA and how to respond to unexpected 2FA prompts, which may indicate an active account takeover attempt.",
      },
    ],
    conclusion:
      "2FA is one of the highest-impact, lowest-cost security controls available, and there is no justification for not implementing it across your organization. MyITGuard helps organizations deploy MFA solutions, configure identity providers, and build the training programs that ensure employees use these tools correctly. Contact us to implement 2FA across your environment.",
  },
  {
    id: 34,
    title: "What Is a DDoS Attack? Prevention and Mitigation",
    excerpt:
      "DDoS attacks are surging in 2026 with attackers setting new records for attack size. Here is how they work and how to protect your services.",
    category: "Threat Intelligence",
    date: "Oct 24, 2025",
    readTime: "8 min",
    seoKeywords:
      "what is DDoS attack, DDoS prevention, distributed denial of service, DDoS mitigation",
    intro:
      "A Distributed Denial of Service attack overwhelms a target with a massive flood of traffic from thousands or millions of sources simultaneously, making the service unavailable to legitimate users. DDoS attacks are experiencing a resurgence in 2026. Security researchers have warned of record-setting volumetric attacks with traffic volumes 50% larger than anything previously recorded. As ransomware has become harder to execute, attackers are incorporating DDoS as an additional extortion lever.",
    keyTakeaways: [
      "DDoS attacks overwhelm targets with massive traffic volumes from distributed sources.",
      "DDoS is increasingly used as part of triple extortion alongside ransomware.",
      "Volumetric attacks have set new records in 2026 with attacks 50% larger than prior records.",
      "DDoS-as-a-Service platforms let anyone launch attacks for as little as a few dollars per hour.",
      "Cloud-based DDoS scrubbing services absorb attack traffic before it reaches your infrastructure.",
      "Anycast network diffusion, rate limiting, and traffic analysis are foundational defense techniques.",
    ],
    sections: [
      {
        heading: "How DDoS Attacks Work",
        body: "DDoS attacks exploit the fundamental limitation of any networked system: it can only handle a finite amount of traffic. Volumetric attacks flood the target with raw traffic volume, often measured in terabits per second, overwhelming network capacity. Protocol attacks exploit weaknesses in network protocols. A SYN flood, for example, exploits the TCP handshake process, exhausting server resources with incomplete connection requests. Application layer attacks target specific application functions with seemingly legitimate requests. Each individual request looks valid, but the volume collectively overwhelms the application.",
      },
      {
        heading: "Botnets: The Infrastructure Behind DDoS",
        body: "Most large DDoS attacks are launched from botnets, vast networks of compromised computers, servers, and Internet of Things devices that attackers control remotely without their owners knowledge. Mirai and its variants demonstrated the scale achievable by compromising poorly secured IoT devices. A modern botnet may comprise millions of devices globally, capable of generating traffic volumes that can overwhelm even major internet infrastructure. DDoS-as-a-Service platforms allow anyone to rent botnet capacity for a few dollars per hour, dramatically lowering the barrier to launching attacks.",
      },
      {
        heading: "DDoS Protection Strategies",
        body: "Cloud-based DDoS scrubbing services from providers like Cloudflare, Akamai, AWS Shield Advanced, and Azure DDoS Protection route your traffic through scrubbing centers that identify and absorb attack traffic before forwarding legitimate traffic to your origin infrastructure. These services can absorb terabit-scale attacks. Anycast network diffusion distributes attack traffic across a global network, making it manageable at each point. Rate limiting and traffic shaping control the rate of requests from individual sources. For critical services, work with your ISP to enable upstream traffic filtering.",
      },
    ],
    conclusion:
      "DDoS protection is essential for any organization that depends on internet-connected services for business operations. MyITGuard helps organizations assess their DDoS risk, implement cloud-based protection solutions, and develop response plans for DDoS incidents. Contact us for a DDoS protection review.",
  },
  {
    id: 35,
    title: "What Is Social Engineering? Human Hacking Explained",
    excerpt:
      "Social engineering attacks manipulate people rather than exploiting technology. Here is how these psychological attacks work and how to defend against them.",
    category: "Security Training",
    date: "Oct 22, 2025",
    readTime: "8 min",
    seoKeywords:
      "what is social engineering, social engineering attacks, human hacking, manipulation tactics, pretexting",
    intro:
      "Social engineering is the art of manipulating people into performing actions or divulging information that they should not. Unlike technical attacks that exploit software vulnerabilities, social engineering exploits human psychology, our tendency to be helpful, to trust authority figures, to feel urgency, and to want to avoid conflict. Social engineering is responsible for the majority of successful cyberattacks because it is far easier to convince a person to share their credentials than to crack modern cryptography.",
    keyTakeaways: [
      "Social engineering exploits psychology, not technology. Technical controls alone are insufficient.",
      "Common attack types include phishing, vishing, pretexting, baiting, and tailgating.",
      "Urgency, authority, scarcity, and liking are the psychological principles most commonly exploited.",
      "Verify all unexpected requests through a trusted, separate communication channel.",
      "A culture of it is okay to say no and verify is the most powerful organizational defense.",
      "Deepfake audio and video are making phone and video call-based social engineering more dangerous.",
    ],
    sections: [
      {
        heading: "How Social Engineers Think",
        body: "Effective social engineers exploit well-documented psychological principles. Authority causes people to comply with those they perceive as having legitimate power. Urgency prevents careful thinking by applying time pressure. Scarcity creates fear of missing out, driving hasty decisions. Reciprocity makes people feel obligated to return favors. Social proof causes people to follow what others seem to do. Liking makes people more willing to help those they feel connected to. A skilled social engineer combines multiple principles in a single interaction to maximize effectiveness.",
      },
      {
        heading: "Common Social Engineering Attack Types",
        body: "Phishing and spear phishing use email to deliver social engineering at scale. Vishing uses phone calls to impersonate IT support, vendors, government agencies, or executives to extract information or manipulate actions. Pretexting involves fabricating a convincing scenario to gain trust and information. Baiting leaves physical USB drives loaded with malware in places where curious targets will find and insert them. Tailgating involves physically following authorized personnel through secured doors. Quid pro quo offers something of value such as technical help in exchange for credentials or access.",
      },
      {
        heading: "Building Organizational Resistance to Social Engineering",
        body: "Technical controls like email security and caller ID cannot stop all social engineering. The most powerful defense is organizational culture. Every employee should feel empowered and responsible to slow down, question unusual requests, and verify before acting, regardless of how legitimate the requester seems or how urgent the request appears. Establish clear procedures for common social engineering targets. Wire transfer requests always require verbal confirmation. Access to systems requires a formal request process. Sensitive information is never shared without verification.",
      },
    ],
    conclusion:
      "Social engineering resistance requires training, culture, and process, not just technology. MyITGuard provides comprehensive security awareness training that includes social engineering simulations, training on psychological manipulation tactics, and process design for high-risk scenarios. Contact us to strengthen your human defenses.",
  },
  {
    id: 36,
    title: "What Is a Botnet? Understanding Zombie Networks",
    excerpt:
      "Botnets power many of the most damaging cyberattacks. Here is how these networks of compromised devices work and what you can do to stay protected.",
    category: "Threat Intelligence",
    date: "Oct 20, 2025",
    readTime: "7 min",
    seoKeywords:
      "what is botnet, botnet attack, zombie network, compromised devices, botnet prevention",
    intro:
      "A botnet, short for robot network, is a collection of internet-connected devices that have been compromised by malware and are controlled remotely by an attacker without the knowledge of their owners. Each infected device, called a bot or zombie, can be directed to participate in coordinated attacks including flooding websites with traffic in DDoS attacks, sending millions of spam or phishing emails, mining cryptocurrency, or conducting credential stuffing attacks.",
    keyTakeaways: [
      "Botnets are networks of compromised devices controlled by attackers without owner knowledge.",
      "IoT devices are prime botnet targets due to weak default security settings.",
      "Botnets are used for DDoS attacks, spam, credential stuffing, and cryptocurrency mining.",
      "Botnet membership causes device slowdown, unusual network traffic, and high CPU and power usage.",
      "Keep all devices patched and change default credentials to reduce botnet infection risk.",
      "Your organization devices could be participating in attacks against others without your knowledge.",
    ],
    sections: [
      {
        heading: "How Botnets Are Built and Operated",
        body: "Botnet operators build their networks by infecting large numbers of devices with malware through phishing campaigns, exploitation of software vulnerabilities, or compromised download sites. Once infected, each bot connects to the attacker command-and-control infrastructure and waits for instructions. Modern botnets use sophisticated techniques including peer-to-peer communication and domain generation algorithms to make them resilient against takedown attempts. The operator can then rent out the botnet capacity to other criminals, monetizing the compromised devices for DDoS attacks, spam campaigns, or credential stuffing operations.",
      },
      {
        heading: "IoT Devices: The Botnet Epidemic",
        body: "Internet of Things devices are particularly attractive botnet targets. They often run embedded Linux with known vulnerabilities that are rarely patched, ship with default credentials that owners never change, and are deployed in large numbers with always-on internet connections. The Mirai botnet demonstrated the scale possible by compromising poorly secured IoT devices, creating a botnet capable of launching record-breaking DDoS attacks. Any organization deploying IoT devices must treat them as security risks. Change default credentials immediately, apply firmware updates regularly, and segment them from critical network resources.",
      },
      {
        heading: "How to Detect and Prevent Botnet Infections",
        body: "Signs that a device may be part of a botnet include unusual slowness, unexpected network traffic, high CPU usage when idle, and unusual connections to unfamiliar servers. Endpoint security software can detect many botnet malware variants. Network monitoring tools can identify suspicious outbound communications to known command-and-control infrastructure. At the organizational level, network security tools that monitor for beaconing behavior, regular timed outbound connections characteristic of C2 communication, can identify botnet infections that evade endpoint controls.",
      },
    ],
    conclusion:
      "Botnet infections represent a serious security and reputational risk. Your organization devices could be weaponized against others without your knowledge. MyITGuard provides network security monitoring, endpoint protection, and IoT security services that detect and prevent botnet infections. Contact us for a network security assessment.",
  },
  {
    id: 37,
    title: "What Is a VPN? Virtual Private Network Guide",
    excerpt:
      "VPNs are widely used but often misunderstood. Here is what a VPN actually does, when you need one, and when enterprise alternatives make more sense.",
    category: "Security Best Practices",
    date: "Oct 18, 2025",
    readTime: "7 min",
    seoKeywords:
      "what is VPN, virtual private network, how VPN works, enterprise VPN, VPN security",
    intro:
      "A Virtual Private Network creates an encrypted tunnel between your device and a VPN server, routing your internet traffic through that server and hiding your traffic from anyone monitoring the connection. VPNs are widely used by remote workers to access corporate resources securely over the internet. In enterprise environments, VPNs have been the standard remote access technology for decades, though newer Zero Trust Network Access solutions are increasingly replacing them for better security and scalability.",
    keyTakeaways: [
      "A VPN encrypts your internet traffic and routes it through a server in a location of your choosing.",
      "Enterprise VPNs provide secure access to corporate resources for remote workers.",
      "VPN software vulnerabilities are a major ransomware attack vector. Keep VPNs fully patched.",
      "VPNs grant broad network access. ZTNA provides more granular, application-level access control.",
      "Public VPN services do not provide anonymity. The VPN provider can see your traffic.",
      "Split tunneling must be configured carefully to avoid bypassing corporate security controls.",
    ],
    sections: [
      {
        heading: "How a VPN Works",
        body: "When you connect to a VPN, your device establishes an encrypted tunnel to a VPN server. All traffic from your device is sent through this tunnel to the VPN server, which then forwards your requests to the internet on your behalf. From the perspective of websites and services you visit, your traffic appears to originate from the VPN server IP address, not your actual device IP address. From the perspective of anyone monitoring your local network, they can see that you are connected to a VPN server but cannot read the content of your traffic.",
      },
      {
        heading: "Enterprise VPN vs. Consumer VPN",
        body: "Enterprise VPNs connect remote employees to the corporate network, allowing them to access internal resources as if they were sitting in the office. They are configured and managed by your IT team and use corporate certificates and identity systems for authentication. Consumer VPNs are subscription services that help individuals protect privacy and bypass geographic content restrictions. They do not connect you to a corporate network. The security properties and use cases are fundamentally different. For enterprise remote access, use the corporate VPN provided by your IT team.",
      },
      {
        heading: "VPN Security Risks and ZTNA as an Alternative",
        body: "Enterprise VPNs have a significant security weakness. Once authenticated, a user has access to a broad segment of the corporate network, not just the specific resources they need. If remote user credentials are stolen, an attacker gains that same broad network access. VPN appliances themselves are frequently targeted. Major ransomware campaigns have exploited unpatched VPN vulnerabilities to gain initial access to corporate networks. Zero Trust Network Access addresses these weaknesses by granting access to specific applications rather than broad network segments and requiring continuous authentication and authorization.",
      },
    ],
    conclusion:
      "VPNs remain an important security tool, but their limitations are well-understood and modern alternatives are available. MyITGuard helps organizations assess their remote access architecture, ensure VPN infrastructure is properly secured and patched, and plan migrations to Zero Trust Network Access where appropriate. Contact us for a remote access security assessment.",
  },
  {
    id: 38,
    title: "What Is SQL Injection? Database Attack Prevention",
    excerpt:
      "SQL injection has been a top web security risk for decades. Here is how these attacks work and how developers and security teams can prevent them.",
    category: "Application Security",
    date: "Oct 16, 2025",
    readTime: "9 min",
    seoKeywords:
      "what is SQL injection, SQL injection attack, database security, web application security, OWASP",
    intro:
      "SQL injection is one of the most common and damaging web application vulnerabilities, appearing consistently on the OWASP Top 10 Web Application Security Risks list for over two decades. It occurs when an attacker is able to insert malicious SQL code into a database query through application input fields, manipulating the query to return unauthorized data, modify database records, or in severe cases execute operating system commands on the database server.",
    keyTakeaways: [
      "SQL injection allows attackers to manipulate database queries through application input fields.",
      "Successful SQL injection can expose entire databases, modify or delete records, or escalate to system access.",
      "Parameterized queries and prepared statements are the primary prevention technique.",
      "Input validation and Web Application Firewalls provide additional defense-in-depth.",
      "SQL injection vulnerabilities can be detected through both automated scanning and manual testing.",
      "Object-Relational Mappers reduce but do not eliminate SQL injection risk when used correctly.",
    ],
    sections: [
      {
        heading: "How SQL Injection Works",
        body: "Web applications often construct database queries dynamically using user-supplied input. If the application does not properly validate and sanitize user input, an attacker can submit malicious input that changes the structure of the query. The classic example involves submitting a username that transforms a login query into one that returns all users without requiring a valid password. More sophisticated attacks can extract database contents, determine the database schema, or on certain database configurations write files to the server or execute system commands.",
      },
      {
        heading: "Preventing SQL Injection: Secure Coding Practices",
        body: "The primary defense against SQL injection is parameterized queries, also called prepared statements. Instead of inserting user input directly into a query string, the query template is defined first with placeholders, and user input is passed separately as parameters. The database engine treats the parameters as data, never as executable SQL code. Object-Relational Mappers like SQLAlchemy, Hibernate, or Entity Framework use parameterized queries by default. However, developers must still avoid using raw query strings with ORM frameworks. Never construct SQL queries by concatenating strings that include user input.",
      },
      {
        heading: "Detection and Defense-in-Depth",
        body: "Beyond secure coding, implement defense-in-depth. Web Application Firewalls can detect and block many SQL injection attempts based on pattern matching and behavioral analysis. Apply least-privilege principles to database accounts used by web applications. The application database account should only have the specific permissions it needs and should not have administrative privileges. Enable database query logging to detect suspicious query patterns. Conduct regular application penetration testing and include SQL injection testing in your automated security scanning pipeline.",
      },
    ],
    conclusion:
      "SQL injection prevention is a fundamental application security practice that every development team should master. MyITGuard provides application security assessments, web application penetration testing, and secure development training that help organizations identify and eliminate SQL injection vulnerabilities. Contact us for an application security review.",
  },
  {
    id: 39,
    title: "What Is a Man-in-the-Middle Attack? MITM Explained",
    excerpt:
      "Man-in-the-middle attacks intercept communications between two parties. Here is how they work and how encryption and authentication protect against them.",
    category: "Threat Intelligence",
    date: "Oct 14, 2025",
    readTime: "8 min",
    seoKeywords:
      "what is MITM attack, man-in-the-middle attack, network interception, SSL stripping, ARP spoofing",
    intro:
      "A man-in-the-middle attack occurs when an attacker secretly positions themselves between two communicating parties, intercepting and potentially modifying the communications without either party being aware. Classic examples include a malicious Wi-Fi hotspot that intercepts traffic between a user and the internet, or ARP spoofing on a local network. MITM attacks can be used to steal credentials, session tokens, and sensitive data, or to inject malicious content into communications.",
    keyTakeaways: [
      "MITM attacks intercept communications between two parties without their knowledge.",
      "Public Wi-Fi is the most common environment for opportunistic MITM attacks.",
      "HTTPS and TLS encryption prevent passive eavesdropping but not all MITM attack types.",
      "Certificate pinning and HSTS protect web applications against SSL stripping attacks.",
      "ARP spoofing is the primary MITM technique on local networks.",
      "Using a VPN on public networks provides strong protection against Wi-Fi-based MITM.",
    ],
    sections: [
      {
        heading: "How MITM Attacks Are Executed",
        body: "On public Wi-Fi networks, an attacker can set up a rogue access point with a name similar to the legitimate network, connecting users to the attacker controlled network instead of the legitimate one. All unencrypted traffic is immediately readable. On local wired or wireless networks, ARP spoofing sends fake ARP messages that associate the attacker MAC address with a legitimate device IP address, redirecting traffic through the attacker machine. SSL stripping attacks downgrade HTTPS connections to HTTP, allowing interception of traffic that the user believes is encrypted.",
      },
      {
        heading: "How Encryption Protects Against MITM",
        body: "TLS, the protocol behind HTTPS, protects against passive MITM eavesdropping by encrypting the communication channel. Additionally, TLS uses certificates to authenticate the server identity. The browser verifies that the certificate was issued by a trusted Certificate Authority for the correct domain. This makes it difficult for an attacker to intercept an HTTPS connection without the browser raising a certificate error warning. HTTP Strict Transport Security prevents SSL stripping by instructing browsers to always use HTTPS for a domain. Certificate pinning ensures applications only accept specific certificates.",
      },
      {
        heading: "Protecting Your Organization Against MITM",
        body: "Train employees to always use the corporate VPN when connecting over public or untrusted networks. Ensure all internal and external web applications use HTTPS with valid certificates and enable HSTS. Implement network monitoring that detects ARP spoofing activity on your internal network. Monitor your public domain for fraudulent certificates using Certificate Transparency logs. For mobile applications that handle sensitive data, implement certificate pinning to prevent interception even if a device trusted certificate store is compromised.",
      },
    ],
    conclusion:
      "MITM attacks are particularly insidious because they can be invisible to victims. MyITGuard helps organizations implement the encryption, authentication, and monitoring controls that protect against MITM attacks across all communication channels. Contact us for a network and application security assessment.",
  },
  {
    id: 40,
    title: "What Is a Trojan Horse? Malware Disguised as Legitimate Software",
    excerpt:
      "Trojans disguise malicious code inside legitimate-seeming software. Here is how they work and how to protect your organization from this enduring threat.",
    category: "Threat Intelligence",
    date: "Oct 12, 2025",
    readTime: "7 min",
    seoKeywords:
      "what is trojan horse, trojan malware, remote access trojan, trojan virus, malware disguised",
    intro:
      "Like the legendary wooden horse of Greek mythology, a Trojan horse in cybersecurity is malicious software that disguises itself as something legitimate or beneficial to trick users into installing it. Unlike viruses or worms, Trojans cannot replicate themselves or spread automatically. They rely entirely on human action to be installed. Once installed, they can open backdoors, download additional malware, steal data, record keystrokes, or give attackers remote control of the infected device.",
    keyTakeaways: [
      "Trojans disguise themselves as legitimate software to trick users into installation.",
      "Remote Access Trojans give attackers full remote control of infected devices.",
      "Trojans cannot spread automatically. They rely on users choosing to install them.",
      "Common delivery methods include software cracks, fake utilities, phishing attachments, and trojanized legitimate software.",
      "Never download software from unofficial sources. Only use vendor-authorized channels.",
      "EDR solutions with behavioral analysis detect Trojan activity even without known signatures.",
    ],
    sections: [
      {
        heading: "Types of Trojans",
        body: "Remote Access Trojans are the most serious category. They give attackers full remote control over the infected machine, allowing them to access files, capture keystrokes, activate the webcam, and execute commands. Banking Trojans specifically target financial credentials, injecting into browser sessions to steal login information and manipulate transactions. Downloader Trojans serve as a foothold for downloading additional malware, often used as the initial access mechanism in multi-stage attacks. Backdoor Trojans create persistent access channels for future use, often surviving reboots and security scans through sophisticated persistence mechanisms.",
      },
      {
        heading: "How Trojans Are Delivered",
        body: "Phishing emails with malicious attachments remain the most common Trojan delivery method. The attachment appears to be a legitimate document or invoice but executes malicious code when opened. Fake software downloads including pirated software, keygens, cheat codes, and fake system utilities package Trojans inside seemingly functional programs. Malicious advertising on legitimate websites can redirect users to pages that attempt drive-by Trojan downloads. Trojanized legitimate software, in which attackers compromise official software distribution channels to insert malicious code, represents one of the most dangerous delivery methods.",
      },
      {
        heading: "Detection and Prevention",
        body: "Modern endpoint detection and response tools use behavioral analysis to detect Trojan activity, identifying suspicious process behaviors, network communications to command-and-control servers, and attempts to access sensitive files or system resources, even for previously unseen Trojans. Application control policies that whitelist approved software can prevent unauthorized software installation. User education about the risks of downloading software from unofficial sources is critical. Web filtering tools can block access to known malware distribution sites. Email security gateways with attachment sandboxing can detonate suspicious attachments in isolated environments before delivery.",
      },
    ],
    conclusion:
      "Trojans represent a persistent threat that requires both technical controls and user education to defend against effectively. MyITGuard provides endpoint security assessments, EDR deployment, and security awareness training that protect organizations from Trojan threats. Contact us to evaluate your endpoint security posture.",
  },
  {
    id: 41,
    title: "What Is Spyware? Hidden Surveillance Software",
    excerpt:
      "Spyware monitors your activity without your knowledge, stealing credentials, personal information, and business secrets. Here is how to detect and prevent it.",
    category: "Threat Intelligence",
    date: "Oct 10, 2025",
    readTime: "6 min",
    seoKeywords:
      "what is spyware, spyware detection, surveillance software, keylogger, privacy protection",
    intro:
      "Spyware is malicious software that secretly monitors a device activity and transmits information to a third party without the user knowledge or consent. Spyware ranges from commercial keyloggers used in corporate espionage to sophisticated nation-state surveillance tools. For most organizations, the primary spyware threat comes in the form of credential-stealing spyware that targets banking credentials, email passwords, and VPN login information that attackers can monetize directly or use to gain deeper access.",
    keyTakeaways: [
      "Spyware secretly monitors activity, recording keystrokes, screenshots, and communications.",
      "Credential-stealing spyware targets banking, email, and VPN passwords.",
      "Spyware often arrives bundled with other software or through phishing.",
      "Device slowdown, high network traffic, and unexpected crashes may indicate spyware.",
      "EDR solutions and regular security scans can detect most spyware infections.",
      "Use encrypted communications and password managers to limit damage from credential-stealing spyware.",
    ],
    sections: [
      {
        heading: "How Spyware Works",
        body: "Spyware establishes itself on a device and then silently monitors activity, transmitting captured data to the attacker. Keyloggers record every keystroke, capturing passwords as they are typed. Screen capture spyware takes periodic screenshots or records screen activity. Browser-based spyware tracks browsing history, captures form data, and may inject into banking sessions to steal financial credentials. More sophisticated spyware can activate microphones and cameras, access files, and monitor communications. The defining characteristic is that all of this happens without the user awareness. Spyware is specifically designed to hide its presence.",
      },
      {
        heading: "Recognizing a Spyware Infection",
        body: "Spyware is designed to be invisible, making it genuinely difficult to detect without security tools. However, some behavioral indicators may suggest an infection: unexpected device slowdown because spyware consumes resources, unusual network activity particularly during idle periods as data is transmitted to command-and-control servers, unexpected battery drain on mobile devices, browser settings changes you did not make, and unknown programs appearing in your application list. Unexplained account access from unfamiliar locations may also indicate that spyware has captured and transmitted your credentials.",
      },
      {
        heading: "Preventing and Removing Spyware",
        body: "Endpoint security solutions with behavioral detection can identify spyware activity even for novel variants. Keep all software updated. Spyware commonly exploits known vulnerabilities in browsers, browser plugins, and operating systems. Apply application control policies to prevent unauthorized software installation. Train employees to avoid downloading software from unofficial sources or clicking links in suspicious emails. Use a password manager with strong, unique passwords for all accounts. For suspected spyware on a corporate device, isolate the device, preserve it for forensic analysis, and work with your security team on remediation.",
      },
    ],
    conclusion:
      "Spyware is a serious threat to both individual privacy and organizational security. MyITGuard provides endpoint protection, security monitoring, and incident response services that detect and remediate spyware infections. Contact us for an endpoint security assessment.",
  },
  {
    id: 42,
    title: "What Is Adware? Understanding Ad-Supported Malware",
    excerpt:
      "Adware is more than an annoyance. It can compromise your security and privacy. Here is what adware actually does and how to get rid of it.",
    category: "Threat Intelligence",
    date: "Oct 8, 2025",
    readTime: "6 min",
    seoKeywords:
      "what is adware, adware removal, ad-supported malware, browser hijacker, unwanted software",
    intro:
      "Adware is software that automatically displays, downloads, or delivers advertising content to a device, often without the user meaningful consent. While some adware is technically legal and delivered as part of a software agreement the user accepted, malicious adware installs without consent, is difficult to remove, and can compromise security and privacy beyond just displaying ads. Adware is frequently bundled with free software downloads and is often the gateway to more serious malware infections.",
    keyTakeaways: [
      "Adware displays unwanted advertisements, often through browser extensions or popup windows.",
      "Malicious adware installs without consent and can be difficult to remove.",
      "Adware can track browsing behavior and sell the data to third parties.",
      "Some adware serves as a gateway for more serious malware infections.",
      "Browser hijackers, a form of adware, change your homepage, default search engine, and new tab page.",
      "Use reputable download sources and read installation prompts carefully to avoid adware.",
    ],
    sections: [
      {
        heading: "What Adware Actually Does",
        body: "Beyond the obvious annoyance of unwanted advertisements, malicious adware can take several concerning actions. Browser hijackers modify browser settings, changing your homepage, new tab page, and default search engine, to redirect your traffic through attacker-controlled services that generate revenue per search. Privacy-invasive adware tracks your browsing history, search queries, and online behavior, selling this data to third parties. Some adware installs additional software without explicit consent. In the most severe cases, adware serves as a persistent malware loader, downloading and installing more dangerous payloads.",
      },
      {
        heading: "How Adware Gets Installed",
        body: "The most common adware delivery mechanism is bundling. Legitimate free software installers include adware as additional components, often pre-selected in installation wizards that users click through without reading carefully. Malicious websites can install adware through drive-by downloads exploiting browser vulnerabilities. Browser extensions from unofficial sources frequently contain adware functionality, monitoring browsing activity and injecting advertisements into web pages. Some legitimate-seeming utility software such as PDF converters, media players, and system optimizers is primarily a vehicle for delivering adware revenue.",
      },
      {
        heading: "Detecting and Removing Adware",
        body: "Signs of adware infection include unexpected browser homepage or search engine changes, new toolbars or extensions you did not install, excessive popup advertisements even on sites that are normally ad-free, general system slowdown, and browser redirects to unfamiliar search engines. Endpoint security software should detect and remove most adware. Browser extension audits, reviewing and removing extensions you do not recognize or no longer use, should be conducted regularly. Browser reset options can restore settings modified by browser hijackers. For enterprise environments, application control policies that prevent installation of unauthorized software are the most effective preventive measure.",
      },
    ],
    conclusion:
      "Adware is often dismissed as a minor nuisance, but its privacy implications and potential as a malware gateway make it a genuine security concern. MyITGuard endpoint security and managed security services help organizations detect and prevent adware infections. Contact us for an endpoint security review.",
  },
  {
    id: 43,
    title: "What Is a Rootkit? Deep System Infection Explained",
    excerpt:
      "Rootkits are among the stealthiest threats in cybersecurity, hiding deep in your operating system. Here is how they work and how to detect them.",
    category: "Threat Intelligence",
    date: "Oct 6, 2025",
    readTime: "8 min",
    seoKeywords:
      "what is rootkit, rootkit detection, kernel rootkit, stealth malware, system infection",
    intro:
      "A rootkit is a collection of software tools that gives an attacker persistent, privileged access to a computer while actively hiding its presence from the operating system, security software, and users. The name comes from root, the highest privilege level in Unix and Linux systems, and kit, the collection of tools. Rootkits are among the most sophisticated and dangerous forms of malware because they specifically subvert the security mechanisms designed to detect them.",
    keyTakeaways: [
      "Rootkits hide themselves and other malware from security tools and the operating system.",
      "Kernel-level rootkits operate at the deepest level of the OS and are extremely difficult to detect.",
      "Bootkits infect the master boot record and load before the operating system.",
      "Detection requires scanning from outside the infected OS using trusted boot media.",
      "Complete reinstallation from clean media is often the only reliable remediation.",
      "Prevention through patching, application control, and secure boot is far more practical than remediation.",
    ],
    sections: [
      {
        heading: "Types of Rootkits",
        body: "User-mode rootkits operate at the application level and intercept system calls to hide files, processes, and network connections from administrative tools. They are more easily detected than kernel-level rootkits but still require specialized tools. Kernel-mode rootkits modify the operating system kernel itself, giving them complete control over the system and the ability to hide from all tools running within the OS. Bootkit rootkits infect the master boot record or boot sector, loading before the operating system and hiding from all OS-level security tools. Firmware rootkits target hardware firmware and can survive operating system reinstallation.",
      },
      {
        heading: "Why Rootkits Are So Dangerous",
        body: "The fundamental challenge of rootkits is that security tools running on an infected system cannot be trusted. A kernel rootkit can intercept the very system calls that security software uses to scan for threats, returning falsified results that hide malicious processes and files. This means that your antivirus software, running on the same infected kernel, may look right at the rootkit and be told it is not there. Modern rootkits are often used to maintain persistence following initial compromise, ensuring that access is maintained even if other malicious components are detected and removed.",
      },
      {
        heading: "Detection and Remediation",
        body: "Detecting rootkits typically requires scanning from outside the infected operating system by booting from a trusted external drive to scan the infected system files and boot sector without running the potentially compromised OS. Trusted boot processes like Secure Boot can prevent bootkit infections by verifying the integrity of the boot chain before loading the OS. Modern EDR solutions with kernel-level telemetry can detect suspicious kernel behavior that may indicate a rootkit. However, the most reliable remediation for a confirmed rootkit infection is a complete system rebuild from clean, verified media, including reinstalling the operating system and restoring data from pre-infection backups.",
      },
    ],
    conclusion:
      "Rootkits represent the most sophisticated end of the malware spectrum and underscore the importance of prevention. They are far harder to remediate than to prevent. MyITGuard provides endpoint security assessments, advanced threat detection, and incident response services. Contact us if you suspect a rootkit infection or want to assess your defenses against this category of threat.",
  },
  {
    id: 44,
    title: "What Is Whaling? Executive Targeted Phishing Attacks",
    excerpt:
      "Whaling attacks target CEOs, CFOs, and other executives with highly personalized phishing. Here is what makes them so effective and how to defend against them.",
    category: "Threat Intelligence",
    date: "Oct 4, 2025",
    readTime: "7 min",
    seoKeywords:
      "what is whaling attack, executive phishing, CEO fraud, whaling cybersecurity, business email compromise",
    intro:
      "Whaling is a form of spear phishing that specifically targets high-level executives, the big fish of an organization. These attacks are exceptionally well-crafted, incorporating detailed knowledge of the target role, responsibilities, relationships, and current business activities. The goal is usually financial fraud, convincing the executive to authorize a wire transfer, or credential theft that gives attackers access to highly privileged accounts.",
    keyTakeaways: [
      "Whaling specifically targets senior executives with highly personalized, convincing attacks.",
      "Common whaling goals include wire transfer fraud, credential theft, and sensitive data access.",
      "Attackers research targets extensively before crafting whaling emails.",
      "Executive assistants and finance personnel who act on executive instructions are also targets.",
      "Process controls like verbal confirmation for wire transfers are essential executive defenses.",
      "Deepfake audio impersonating executives is an emerging and highly effective whaling technique.",
    ],
    sections: [
      {
        heading: "What Makes Whaling So Effective",
        body: "Whaling emails are crafted with detailed knowledge of the target gathered from LinkedIn, company websites, press releases, financial filings, and social media. A whaling email impersonating the board chair asking the CEO to approve an urgent wire transfer for a confidential acquisition may be indistinguishable from a legitimate message if the attacker has done their research thoroughly. The targets are high-authority individuals accustomed to having requests acted upon quickly, which the attacker exploits by framing requests as urgent and confidential.",
      },
      {
        heading: "The Emerging Threat of Deepfake Whaling",
        body: "In 2024 and 2025, a new form of whaling emerged beyond email: deepfake voice and video calls impersonating executives. Several organizations have lost millions of dollars after employees received what appeared to be video calls from senior executives requesting urgent wire transfers, only to discover afterward that the callers were AI-generated deepfakes. In 2026, deepfake audio and video technology is sufficiently mature that real-time impersonation of known individuals is accessible to sophisticated criminals. This escalation makes process controls around high-value financial transactions more important than ever.",
      },
      {
        heading: "Defending Executives and the Organization",
        body: "Protect executives publicly available information. Limit what is searchable about travel schedules, direct contacts, and current business activities. Implement and enforce process controls for high-risk actions. All wire transfers above a defined threshold require dual authorization and verbal confirmation through a pre-established phone number, regardless of how the initial request arrived. Brief executives specifically on whaling tactics and the deepfake threat, and establish a clear culture that it is okay to slow down and verify. Monitor for lookalike domains that mimic your company domain and could be used for impersonation.",
      },
    ],
    conclusion:
      "Executive-targeted attacks represent some of the highest financial risk per incident in the cybersecurity threat landscape. MyITGuard provides executive security briefings, anti-whaling training programs, and security policy design for high-risk business processes. Contact us to build defenses against whaling and executive impersonation fraud.",
  },
  {
    id: 45,
    title: "What Is Cryptojacking? Hidden Cryptocurrency Mining",
    excerpt:
      "Cryptojacking silently hijacks your computing resources to mine cryptocurrency for attackers. Here is how to detect and prevent it.",
    category: "Threat Intelligence",
    date: "Oct 2, 2025",
    readTime: "7 min",
    seoKeywords:
      "what is cryptojacking, cryptocurrency mining attack, cryptomining malware, browser mining, resource theft",
    intro:
      "Cryptojacking is the unauthorized use of someone else computer, server, or cloud infrastructure to mine cryptocurrency for the attacker benefit. Unlike ransomware or data theft, cryptojacking does not directly destroy data or obviously signal its presence. It simply consumes computing resources and electricity to generate cryptocurrency for attackers. Victims experience slower systems, higher electricity bills, and in cloud environments, dramatically increased infrastructure costs.",
    keyTakeaways: [
      "Cryptojacking uses your computing resources to mine cryptocurrency without your consent.",
      "Victims experience performance degradation, high CPU usage, and increased energy and cloud costs.",
      "Cryptojacking can occur through malware, browser scripts, or compromised cloud environments.",
      "Cloud environments are particularly attractive targets due to their large available compute capacity.",
      "Unusual CPU and GPU activity and unexpected cloud cost increases are key detection indicators.",
      "Endpoint security, cloud spending alerts, and browser security extensions help detect cryptojacking.",
    ],
    sections: [
      {
        heading: "How Cryptojacking Works",
        body: "Cryptojacking can be delivered in several ways. Malware-based cryptojacking installs a cryptocurrency miner on the victim device, often bundled with other software or delivered through phishing. Browser-based cryptojacking injects JavaScript mining code into web pages through compromised websites or malicious advertisements that uses visitors CPU resources while they browse, with no installation required. Cloud infrastructure cryptojacking targets misconfigured or compromised cloud environments, spinning up large numbers of compute instances to mine cryptocurrency at massive scale, causing victims to receive enormous cloud bills before the activity is detected.",
      },
      {
        heading: "How to Detect Cryptojacking",
        body: "The most obvious indicator of cryptojacking is unexpectedly high CPU or GPU utilization, especially if it persists during periods of low legitimate activity. Devices may run hotter and louder than usual as the mining process pushes hardware to its limits. For cloud environments, monitor your cost dashboards closely and set billing alerts that notify you when costs exceed expected thresholds. Cryptojacking in cloud environments can generate thousands of dollars in unexpected costs within hours. Browser-based cryptojacking can often be detected by noticing CPU spikes when visiting specific websites.",
      },
      {
        heading: "Preventing Cryptojacking",
        body: "Deploy endpoint security tools that detect and block known cryptomining malware. Use browser extensions that block JavaScript mining scripts, as many ad blockers include this functionality. For cloud environments, implement the same infrastructure security fundamentals that prevent other attacks: never expose management interfaces publicly, enforce least privilege on all service accounts, use MFA for cloud console access, enable security monitoring, and set cost alerts. Regularly audit cloud resources for unexpected compute instances or containers. Patch all internet-facing systems promptly, as cryptojackers actively scan for unpatched systems and commonly exploit known vulnerabilities for initial access.",
      },
    ],
    conclusion:
      "Cryptojacking may seem less alarming than ransomware, but the performance impact, energy costs, and cloud billing consequences can be substantial. MyITGuard helps organizations detect cryptojacking through managed security monitoring, cloud security posture assessment, and endpoint protection. Contact us to assess your exposure to cryptojacking and other resource-theft attacks.",
  },
];

// Navigation Component
function Navigation({
  activeSection,
  setActiveSection,
}: {
  activeSection: string;
  setActiveSection: (section: string) => void;
}) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollTimeout, setScrollTimeout] = useState<NodeJS.Timeout | null>(
    null,
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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
      if (currentScrollY < lastScrollY || currentScrollY < 100)
        setIsVisible(true);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [lastScrollY, scrollTimeout]);

  const navItems = [
    { id: "home", label: "Home", path: "#home" },
    { id: "services", label: "Services", path: "#services" },
    { id: "resources", label: "Resources", path: "#resources" },
    { id: "plans", label: "Plans", path: "#plans" },
    { id: "blog", label: "Blog", path: "#blog" },
    { id: "about", label: "About", path: "#about" },
    { id: "contact", label: "Contact", path: "#contact" },
  ];

  const handleNavClick = (item: (typeof navItems)[0]) => {
    const targetId = item.path.startsWith("#")
      ? item.path.replace("#", "")
      : null;
    if (targetId) {
      if (location.pathname !== "/") {
        navigate(`/#${targetId}`);
      } else {
        document
          .getElementById(targetId)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      navigate(item.path);
    }
    setActiveSection(item.id);
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isVisible ? "translate-y-0" : "-translate-y-full"} ${window.scrollY > 50 ? "glass-card mx-4 mt-4 rounded-2xl" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => handleNavClick(navItems[0])}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <MyITGuardLogo />
          </motion.div>
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className={`nav-link text-sm font-medium ${activeSection === item.id ? "text-cyber-green" : ""}`}
              >
                {item.label}
              </button>
            ))}
            <button
              className="btn-primary text-sm"
              onClick={() => handleNavClick(navItems[6])}
            >
              Get Free Consultation
            </button>
          </div>
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4 space-y-4"
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className="block w-full text-left py-2 text-white hover:text-cyber-green transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <button
                className="btn-primary w-full text-sm"
                onClick={() => handleNavClick(navItems[6])}
              >
                Get Free Consultation
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

// Hero Section
function HeroSection({
  onNavigate,
}: {
  onNavigate: (section: string) => void;
}) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 180]);
  const opacity = useTransform(scrollY, [0, 450], [1, 0]);

  return (
    <section id="home" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid" />
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl"
        style={{ backgroundColor: "rgba(0, 255, 136, 0.1)" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl"
        style={{ backgroundColor: "rgba(0, 212, 255, 0.1)" }}
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 text-center"
        style={{ y, opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Shield className="w-4 h-4" style={{ color: "#00ff88" }} />
            <span
              style={{
                fontWeight: 600,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#00ff88",
                fontSize: "13px",
              }}
            >
              Guarding Every Byte
            </span>
          </div>
        </motion.div>
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Protect Your Business with{" "}
          <span className="gradient-text">Cutting-Edge</span>
          <br />
          Cybersecurity Solutions
        </motion.h1>
        <motion.p
          className="text-xl text-slate-300 max-w-3xl mx-auto mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Virtual CISO services, compliance management (HIPAA, SOC 2, CMMC), and
          security awareness training to safeguard your digital assets.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button
            className="btn-primary flex items-center justify-center gap-2"
            onClick={() => onNavigate("contact")}
          >
            <Shield className="w-5 h-5" />
            Start Free Consultation
            <ArrowRight className="w-5 h-5" />
          </button>
          <button
            className="btn-secondary flex items-center justify-center gap-2"
            onClick={() => onNavigate("roi")}
          >
            <Calculator className="w-5 h-5" />
            Calculate ROI
          </button>
        </motion.div>
      </motion.div>

      {/* Stats Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mt-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            {
              value: "500+",
              label: "Clients secured",
              color: "#00ff88",
              icon: <Shield className="w-5 h-5" />,
            },
            {
              value: "99.9%",
              label: "Threat detection",
              color: "#00d4ff",
              icon: <Zap className="w-5 h-5" />,
            },
            {
              value: "250K+",
              label: "Endpoints protected",
              color: "#00ff88",
              icon: <Database className="w-5 h-5" />,
            },
            {
              value: "10K+",
              label: "Active learners",
              color: "#a78bfa",
              icon: <Users className="w-5 h-5" />,
            },
            {
              value: "24/7",
              label: "Monitoring & IR",
              color: "#f472b6",
              icon: <Clock className="w-5 h-5" />,
            },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.85,
                ease: "easeOut",
                delay: index * 0.08,
              }}
              className="glass-card p-4 flex items-center gap-3 border border-white/5"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{
                  backgroundColor: `${stat.color}22`,
                  color: stat.color,
                  boxShadow: `0 0 18px ${stat.color}40`,
                }}
              >
                {stat.icon}
              </div>
              <div>
                <div
                  className="text-xl font-extrabold leading-tight"
                  style={{ color: stat.color }}
                >
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
const serviceDetails: Record<
  string,
  {
    fullDescription: string;
    benefits: string[];
    deliverables: string[];
    cta: string;
  }
> = {
  "Virtual CISO (vCISO)": {
    fullDescription:
      "Our Virtual CISO service provides executive-level cybersecurity leadership without the cost of a full-time hire. You get strategic guidance, policy development, and board-level reporting from experienced security professionals.",
    benefits: [
      "Cost-effective alternative to full-time CISO",
      "Access to team of security experts",
      "Flexible engagement models",
      "Strategic security roadmap",
      "Compliance guidance",
    ],
    deliverables: [
      "Security strategy document",
      "Risk assessment reports",
      "Policy and procedure development",
      "Board presentation materials",
      "Quarterly business reviews",
    ],
    cta: "Schedule vCISO Consultation",
  },
  "Compliance Solutions": {
    fullDescription:
      "Navigate complex compliance requirements with expert guidance. We help you achieve and maintain compliance with HIPAA, SOC 2, CMMC, and other regulatory frameworks.",
    benefits: [
      "Expert compliance guidance",
      "Reduced audit preparation time",
      "Continuous compliance monitoring",
      "Gap assessment and remediation",
      "Documentation support",
    ],
    deliverables: [
      "Compliance gap assessment",
      "Policy templates",
      "Audit preparation support",
      "Continuous monitoring reports",
      "Certification support",
    ],
    cta: "Get Compliance Assessment",
  },
  "Cyber Risk Assessment": {
    fullDescription:
      "Identify vulnerabilities before attackers do. Our comprehensive risk assessments include vulnerability scanning, penetration testing, and detailed remediation planning.",
    benefits: [
      "Identify security weaknesses",
      "Prioritize remediation efforts",
      "Meet compliance requirements",
      "Reduce breach risk",
      "Executive reporting",
    ],
    deliverables: [
      "Vulnerability scan results",
      "Penetration test report",
      "Risk assessment matrix",
      "Remediation roadmap",
      "Executive summary",
    ],
    cta: "Request Risk Assessment",
  },
  "Security Awareness Training": {
    fullDescription:
      "Transform your employees into a human firewall with engaging, effective security awareness training. Our programs include interactive modules, phishing simulations, and progress tracking.",
    benefits: [
      "Reduce phishing susceptibility",
      "Build security culture",
      "Meet compliance training requirements",
      "Track employee progress",
      "Custom content available",
    ],
    deliverables: [
      "Training platform access",
      "Phishing simulation campaigns",
      "Progress reports",
      "Custom training content",
      "Certificate of completion",
    ],
    cta: "Start Security Training",
  },
  "Managed Security Services": {
    fullDescription:
      "24/7 security monitoring and incident response to protect your organization around the clock. Our SOC team watches for threats and responds immediately to incidents.",
    benefits: [
      "24/7 threat monitoring",
      "Rapid incident response",
      "Expert security analysts",
      "Advanced threat detection",
      "Reduced security overhead",
    ],
    deliverables: [
      "SIEM management",
      "Threat alerts",
      "Incident response",
      "Monthly security reports",
      "Quarterly reviews",
    ],
    cta: "Get 24/7 Protection",
  },
  "Data Protection": {
    fullDescription:
      "Protect your most valuable asset - your data. Our data protection services include encryption, backup solutions, and data loss prevention to ensure your data stays secure.",
    benefits: [
      "Prevent data breaches",
      "Ensure data availability",
      "Meet data protection regulations",
      "Reduce data loss risk",
      "Secure data lifecycle",
    ],
    deliverables: [
      "Data classification",
      "Encryption implementation",
      "Backup strategy",
      "DLP solution deployment",
      "Data protection policies",
    ],
    cta: "Protect Your Data",
  },
};

// Services Section
function ServicesSection({
  onServiceSelect,
}: {
  onServiceSelect: (service: string) => void;
}) {
  const [shieldProgress, setShieldProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const servicesSection = document.getElementById("services");
      if (servicesSection) {
        const rect = servicesSection.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const scrollProgress = Math.max(
          0,
          Math.min(1, (viewportHeight - rect.top) / (viewportHeight * 0.8)),
        );
        setShieldProgress(scrollProgress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Virtual CISO (vCISO)",
      description:
        "Executive-level cybersecurity leadership without the full-time cost.",
      features: [
        "Security Strategy",
        "Risk Management",
        "Policy Development",
        "Board Reporting",
      ],
      badge: "Most Popular",
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Compliance Solutions",
      description: "Achieve compliance with HIPAA, SOC 2, CMMC frameworks.",
      features: [
        "HIPAA Compliance",
        "SOC 2 Preparation",
        "CMMC Certification",
        "Continuous Monitoring",
      ],
      badge: "Certified Experts",
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Cyber Risk Assessment",
      description:
        "Comprehensive security audits and vulnerability assessments.",
      features: [
        "Vulnerability Scanning",
        "Penetration Testing",
        "Risk Analysis",
        "Remediation Planning",
      ],
      badge: null,
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Security Awareness Training",
      description: "Transform employees into a human firewall.",
      features: [
        "Interactive Training",
        "Phishing Simulations",
        "Custom Content",
        "Progress Tracking",
      ],
      badge: "Proven Results",
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Managed Security Services",
      description: "24/7 security monitoring and incident response.",
      features: [
        "24/7 Monitoring",
        "Incident Response",
        "Threat Hunting",
        "SIEM Management",
      ],
      badge: null,
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Protection",
      description: "Advanced encryption and data loss prevention.",
      features: [
        "Encryption",
        "Backup & Recovery",
        "DLP Solutions",
        "Data Classification",
      ],
      badge: null,
    },
  ];
  return (
    <section id="services" className="py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 badge-blue mb-4">
            <Zap className="w-4 h-4" />
            <span>Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Comprehensive{" "}
            <span className="gradient-text-blue">Security Solutions</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            From strategic leadership to technical implementation, we provide
            end-to-end cybersecurity services.
          </p>
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
            <div
              className="glass-card p-6 border-l-4"
              style={{ borderColor: "#00ff88" }}
            >
              <div className="flex items-center gap-3 mb-3">
                <FileCheck className="w-8 h-8" style={{ color: "#00ff88" }} />
                <h3 className="text-xl font-bold">Compliance Solutions</h3>
              </div>
              <p className="text-slate-300">
                Navigate complex regulations with confidence. HIPAA, SOC 2, CMMC
                - we've got you covered.
              </p>
            </div>
            <div
              className="glass-card p-6 border-l-4"
              style={{ borderColor: "#00d4ff" }}
            >
              <div className="flex items-center gap-3 mb-3">
                <AlertTriangle
                  className="w-8 h-8"
                  style={{ color: "#00d4ff" }}
                />
                <h3 className="text-xl font-bold">Cyber Risk Assessment</h3>
              </div>
              <p className="text-slate-300">
                Identify vulnerabilities before attackers do. Comprehensive
                security audits and penetration testing.
              </p>
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
            <motion.div
              key={index}
              className="glass-card p-8 service-card relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {service.badge && (
                <div className="absolute top-4 right-4 badge-cyber text-xs">
                  {service.badge}
                </div>
              )}
              <div
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyber-green/20 to-cyber-blue/20 flex items-center justify-center mb-6"
                style={{ color: "#00ff88" }}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-slate-300 mb-6">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm text-slate-400"
                  >
                    <CheckCircle
                      className="w-4 h-4 flex-shrink-0"
                      style={{ color: "#00ff88" }}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => onServiceSelect(service.title)}
                className="flex items-center gap-2 font-medium hover:gap-3 transition-all"
                style={{ color: "#00ff88" }}
              >
                Learn More <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Resources Section
type ResourceKey = "checklist" | "calculator" | "playbook" | "glossary";

function ResourcesSection() {
  const navigate = useNavigate();
  const location = useLocation();
  const initial =
    location.hash === "#roi-calculator" ? "calculator" : "checklist";
  const [activeResource, setActiveResource] = useState<ResourceKey>(initial);

  const playbookMdFallback = `# Human Firewall Playbook
Practical, low-friction actions to reduce human risk in 60 days. Use this as a lightweight runbook for awareness, behavior change, and measurable outcomes.
`;

  useEffect(() => {
    if (location.hash === "#roi-calculator") {
      setActiveResource("calculator");
      const el = document.getElementById("roi-calculator");
      if (el)
        setTimeout(
          () => el.scrollIntoView({ behavior: "smooth", block: "start" }),
          80,
        );
    }
  }, [location.hash]);

  const handlePlaybookDownload = async () => {
    try {
      const res = await fetch("/playbooks/human-firewall-playbook.md");
      if (!res.ok) throw new Error("fetch-failed");
      const text = await res.text();
      triggerPdfDownload(text);
    } catch (err) {
      triggerPdfDownload(playbookMdFallback);
    }
  };

  const triggerPdfDownload = (text: string) => {
    const doc = new jsPDF({ unit: "pt", format: "letter" });
    const brandGreen = [0, 255, 136];
    const brandCyan = [0, 212, 255];
    const brandPurple = [139, 92, 246];
    const body = [226, 232, 240];
    const margin = 42;
    const maxWidth = 530;
    let y = margin;
    const addLine = (
      content: string,
      opts: {
        size?: number;
        color?: number[];
        bold?: boolean;
        bullet?: boolean;
      } = {},
    ) => {
      const size = opts.size ?? 11;
      const color = opts.color ?? body;
      const bold = opts.bold ?? false;
      doc.setFont("helvetica", bold ? "bold" : "normal");
      doc.setFontSize(size);
      doc.setTextColor(color[0], color[1], color[2]);
      const textLines = doc.splitTextToSize(
        opts.bullet ? `• ${content}` : content,
        maxWidth,
      );
      const needed = textLines.length * (size + 4);
      if (y + needed > doc.internal.pageSize.getHeight() - margin) {
        doc.addPage();
        y = margin;
      }
      doc.text(textLines, margin, y);
      y += needed;
    };
    addLine("Human Firewall Playbook", {
      size: 18,
      color: brandGreen,
      bold: true,
    });
    y += 6;
    text.split("\n").forEach((raw) => {
      const line = raw.trim();
      if (!line) {
        y += 6;
        return;
      }
      if (line.startsWith("# "))
        (addLine(line.replace("# ", ""), {
          size: 15,
          color: brandGreen,
          bold: true,
        }),
          (y += 4));
      else if (line.startsWith("## "))
        addLine(line.replace("## ", ""), {
          size: 12,
          color: brandCyan,
          bold: true,
        });
      else if (/^[\d]+\.\s/.test(line))
        addLine(line, { size: 10, color: body });
      else if (line.startsWith("- "))
        addLine(line.replace("- ", ""), {
          size: 10,
          color: body,
          bullet: true,
        });
      else addLine(line, { size: 10, color: body });
    });
    y += 12;
    addLine("MyITGuard • Guarding Every Byte", {
      size: 9,
      color: brandPurple,
      bold: true,
    });
    doc.save("human-firewall-playbook.pdf");
  };

  return (
    <section id="resources" className="py-24 relative bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 badge-cyber mb-4">
            <BookOpen className="w-4 h-4" />
            <span>Resource Center</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Expert <span className="gradient-text">Resources</span> for Security
            Leaders
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Access our library of compliance guides, calculators, training
            materials, and industry definitions.
          </p>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            {
              id: "checklist",
              icon: <FileCheck className="w-6 h-6" />,
              title: "Compliance Checklists",
            },
            {
              id: "calculator",
              icon: <Calculator className="w-6 h-6" />,
              title: "vCISO ROI Calculator",
            },
            {
              id: "playbook",
              icon: <BookOpen className="w-6 h-6" />,
              title: "Human Firewall Playbook",
            },
            {
              id: "glossary",
              icon: <Search className="w-6 h-6" />,
              title: "Threat Glossary",
            },
          ].map((resource) => (
            <button
              key={resource.id}
              onMouseEnter={() => setActiveResource(resource.id as ResourceKey)}
              onClick={() => setActiveResource(resource.id as ResourceKey)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all ${
                activeResource === resource.id
                  ? "bg-gradient-to-r from-cyber-green/20 to-cyber-blue/20 border border-cyber-green/30 text-white"
                  : "glass-card text-slate-400 hover:text-white"
              }`}
            >
              {resource.icon}
              <span className="font-medium">{resource.title}</span>
            </button>
          ))}
        </div>
        <div id="roi-calculator" className="h-0 w-px" aria-hidden />
        <AnimatePresence mode="wait">
          {activeResource === "checklist" && (
            <motion.div
              key="checklist"
              className="glass-card p-4 md:p-5 max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-5">
                <FileCheck
                  className="w-11 h-11 mx-auto mb-2.5"
                  style={{ color: "#00ff88" }}
                />
                <h3 className="text-lg font-bold mb-1">
                  Compliance Checklists
                </h3>
                <p className="text-slate-300 text-sm">
                  Quick-hit controls for HIPAA, FedRAMP, SOC 2, NIST 800-171,
                  PCI DSS, CIS, GDPR, and CCPA/CPRA.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  {
                    title: "HIPAA",
                    color: "#00ff88",
                    items: [
                      "Risk analysis & management",
                      "Access controls (unique IDs/MFA)",
                      "Audit logs & monitoring",
                      "Business Associate Agreements",
                      "Encryption for ePHI at rest/in transit",
                      "Contingency/backup plans",
                    ],
                  },
                  {
                    title: "FedRAMP (Moderate)",
                    color: "#00d4ff",
                    items: [
                      "System security plan (SSP)",
                      "FIPS-validated encryption",
                      "Vulnerability scanning (weekly/monthly)",
                      "Continuous monitoring (SIEM/alerts)",
                      "POA&M tracking & remediation",
                      "Incident response plan & testing",
                    ],
                  },
                  {
                    title: "SOC 2 Type II",
                    color: "#a78bfa",
                    items: [
                      "Policies & approvals (AUP, IR, DR)",
                      "Change management & CAB evidence",
                      "Access reviews (quarterly)",
                      "Vendor risk assessments",
                      "Logging, alerting, retention",
                      "Backup/restore & DR testing evidence",
                    ],
                  },
                  {
                    title: "NIST 800-171",
                    color: "#f472b6",
                    items: [
                      "CUI inventory & marking",
                      "Multi-factor authentication",
                      "Least privilege & role-based access",
                      "Config baselines & hardening",
                      "Audit log protection & review",
                      "Incident response tabletop",
                    ],
                  },
                  {
                    title: "PCI DSS 4.0",
                    color: "#facc15",
                    items: [
                      "Cardholder data flow & segmentation",
                      "Network firewall rules review",
                      "Strong cryptography for PAN",
                      "Quarterly ASV scans & annual pen test",
                      "Change control & code review",
                      "Logging & file integrity monitoring",
                    ],
                  },
                  {
                    title: "CIS Controls v8",
                    color: "#38bdf8",
                    items: [
                      "Asset inventory (HW/SW)",
                      "Secure configuration baselines",
                      "Vulnerability mgmt & patch SLAs",
                      "Admin privileges: limit & monitor",
                      "Logging & SIEM coverage",
                      "Email/web protections & backups",
                    ],
                  },
                  {
                    title: "GDPR",
                    color: "#ec4899",
                    items: [
                      "Record of processing activities (RoPA)",
                      "Lawful basis & consent management",
                      "DPIAs for high-risk processing",
                      "Data subject rights (DSAR) process",
                      "DPA + SCCs with processors",
                      "Breach notification playbook (72h)",
                    ],
                  },
                  {
                    title: "CCPA/CPRA",
                    color: "#fb7185",
                    items: [
                      "Data inventory & “sale/share” classification",
                      "Privacy notices with Do Not Sell/Share links",
                      "Sensitive data handling & opt-out signals (GPC)",
                      "Consumer rights: access/delete/correct/limit use",
                      "Vendor contracts with CPRA clauses",
                      "Incident & breach response aligned to CA timelines",
                    ],
                  },
                ].map((check) => (
                  <div
                    key={check.title}
                    className="p-3 rounded-xl bg-slate-900/50 border border-white/5 space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-semibold text-white">
                        {check.title}
                      </h4>
                      <span
                        className="px-2.5 py-1 rounded-full text-[11px] font-semibold"
                        style={{
                          backgroundColor: `${check.color}22`,
                          color: check.color,
                        }}
                      >
                        {check.items.length} steps
                      </span>
                    </div>
                    <ul className="space-y-1.5 text-sm text-slate-300">
                      {check.items.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span
                            className="mt-[6px] h-1.5 w-1.5 rounded-full"
                            style={{ backgroundColor: check.color }}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
          {activeResource === "calculator" && (
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
          {activeResource === "playbook" && (
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
                  <h3 className="text-2xl font-bold">
                    Human Firewall Playbook
                  </h3>
                  <p className="text-slate-300">
                    8-week rollout with phishing drills, AI-safety guidance,
                    incident response steps, and manager coaching. Ready to
                    share with teams.
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
                    <Download className="w-5 h-5" /> Download Playbook
                    (markdown)
                  </button>
                  <p className="text-xs text-slate-400">
                    Sized for quick wins: goals, cadence, drills, metrics, and
                    comms snippets.
                  </p>
                </div>

                <div className="lg:w-1/2 grid gap-3">
                  {[
                    `Phish click rate under 5% and report <15m`,
                    `MFA + password manager as mandatory first step`,
                    `Report-a-phish drills and quarterly table-tops`,
                    `AI/Deepfake callback rule: verify on trusted channel`,
                    `DLP-friendly guidance: no public links by default`,
                    `Travel & remote: VPN, no open Wi-Fi, lock screens`,
                  ].map((item) => (
                    <div
                      key={item}
                      className="p-3 rounded-xl bg-slate-900/60 border border-white/5 flex gap-3 items-start"
                    >
                      <span
                        className="mt-1 h-2 w-2 rounded-full"
                        style={{ backgroundColor: "#00ff88" }}
                      />
                      <p className="text-sm text-slate-200">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
          {activeResource === "glossary" && (
            <motion.div
              key="glossary"
              className="glass-card p-4 md:p-5 max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
            >
              <div className="text-center py-12">
                <Search
                  className="w-16 h-16 mx-auto mb-4"
                  style={{ color: "#f472b6" }}
                />
                <h3 className="text-2xl font-bold mb-4">
                  Threat Intelligence Glossary
                </h3>
                <p className="text-slate-300 mb-6">
                  Comprehensive cybersecurity terms and definitions.
                </p>
                <button
                  className="btn-secondary flex items-center gap-2 mx-auto"
                  onClick={() => {
                    setActiveResource("glossary");
                    navigate("/glossary");
                  }}
                >
                  <BookOpen className="w-5 h-5" />
                  Browse Glossary
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
function BlogSection({
  onArticleSelect,
}: {
  onArticleSelect: (article: BlogArticle) => void;
}) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = [
    "All",
    ...Array.from(new Set(blogArticles.map((a) => a.category))),
  ];
  const filteredArticles =
    selectedCategory === "All"
      ? blogArticles
      : blogArticles.filter((a) => a.category === selectedCategory);
  return (
    <section id="blog" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 badge-cyber mb-4">
            <BookOpen className="w-4 h-4" />
            <span>Blog & Insights</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Cybersecurity <span className="gradient-text">Knowledge Hub</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Expert insights, compliance guides, and industry analysis to keep
            you informed and protected.
          </p>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${selectedCategory === category ? "bg-gradient-to-r from-cyber-green/20 to-cyber-blue/20 border border-cyber-green/30 text-white" : "glass-card text-slate-400 hover:text-white"}`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => (
            <motion.article
              key={article.id}
              className="glass-card overflow-hidden service-card cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              onClick={() => onArticleSelect(article)}
            >
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="badge-blue text-xs">{article.category}</span>
                  <span className="text-xs text-slate-500">
                    {article.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 line-clamp-2 hover:text-cyber-green transition-colors">
                  {article.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Calendar className="w-3.5 h-3.5" />
                    {article.date}
                  </div>
                  <button
                    className="flex items-center gap-1 text-sm font-medium"
                    style={{ color: "#00ff88" }}
                  >
                    Read More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
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
      <span
        className="h-1.5 w-1.5 rounded-full"
        style={{ backgroundColor: color }}
      />
      {text}
    </span>
  );
}

function ServiceModal({
  serviceName,
  onClose,
}: {
  serviceName: string;
  onClose: () => void;
}) {
  const details = serviceDetails[serviceName];
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
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
          initial={{ backdropFilter: "blur(0px)" }}
          animate={{ backdropFilter: "blur(10px)" }}
          exit={{ backdropFilter: "blur(0px)" }}
          onClick={onClose}
        />

        <motion.div
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-card"
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 50 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          style={{
            background: "rgba(15, 23, 42, 0.95)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(0, 212, 255, 0.2)",
          }}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-slate-800/80 hover:bg-cyber-blue/20 flex items-center justify-center transition-all group"
            style={{ color: "#00d4ff" }}
          >
            <X className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>

          <div className="p-8 md:p-12">
            <span className="badge-blue mb-4 inline-block">
              Service Offering
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-6 gradient-text-blue">
              {serviceName}
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              {details.fullDescription}
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h2
                  style={{ color: "#00d4ff" }}
                  className="text-xl font-bold mb-4"
                >
                  Key Benefits
                </h2>
                <ul className="space-y-3">
                  {details.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle
                        className="w-5 h-5 flex-shrink-0 mt-0.5"
                        style={{ color: "#00d4ff" }}
                      />
                      <span className="text-slate-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2
                  style={{ color: "#a78bfa" }}
                  className="text-xl font-bold mb-4"
                >
                  Deliverables
                </h2>
                <ul className="space-y-3">
                  {details.deliverables.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle
                        className="w-5 h-5 flex-shrink-0 mt-0.5"
                        style={{ color: "#a78bfa" }}
                      />
                      <span className="text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-700">
              <div className="flex justify-between items-center flex-wrap gap-4">
                <button
                  onClick={onClose}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition-all text-slate-300 hover:text-white"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Back to Services
                </button>
                <button
                  className="btn-secondary flex items-center gap-2"
                  onClick={() => {
                    onClose();
                    setTimeout(() => {
                      window.location.hash = "#contact";
                      document.getElementById("contact")?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }, 20);
                  }}
                >
                  <Mail className="w-5 h-5" />
                  {details.cta}
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
function ArticleModal({
  article,
  onClose,
}: {
  article: BlogArticle;
  onClose: () => void;
}) {
  const [shareToast, setShareToast] = useState<string | null>(null);
  const [showSubscribe, setShowSubscribe] = useState(false);
  const [subscribeEmail, setSubscribeEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleShare = async () => {
    const shareData = {
      title: article.title,
      text: article.excerpt,
      url: `${window.location.origin}${window.location.pathname}#blog-${article.id}`,
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (_e) {}
    } else {
      try {
        await navigator.clipboard.writeText(shareData.url);
        setShareToast("Link copied to clipboard!");
        setTimeout(() => setShareToast(null), 3000);
      } catch (_e) {
        setShareToast("Could not copy link.");
        setTimeout(() => setShareToast(null), 3000);
      }
    }
  };

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!subscribeEmail || !subscribeEmail.includes("@")) {
      setSubscribeStatus("error");
      setTimeout(() => setSubscribeStatus("idle"), 3000);
      return;
    }
    setSubscribeStatus("success");
    setSubscribeEmail("");
    setTimeout(() => {
      setSubscribeStatus("idle");
      setShowSubscribe(false);
    }, 4000);
  };

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
          initial={{ backdropFilter: "blur(0px)" }}
          animate={{ backdropFilter: "blur(10px)" }}
          exit={{ backdropFilter: "blur(0px)" }}
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
            background: "rgba(15, 23, 42, 0.95)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(0, 255, 136, 0.2)",
          }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-slate-800/80 hover:bg-cyber-green/20 flex items-center justify-center transition-all group"
            style={{ color: "#00ff88" }}
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

            <h1 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              {article.title}
            </h1>
            <p className="text-xl text-slate-300 mb-8">{article.excerpt}</p>

            <div className="prose prose-invert prose-lg max-w-none text-slate-300">
              <p className="text-lg leading-relaxed mb-6">{article.intro}</p>
              <h2
                style={{ color: "#00ff88" }}
                className="text-2xl font-bold mt-8 mb-4"
              >
                Key Takeaways
              </h2>
              <ul className="space-y-2 mb-8">
                {article.keyTakeaways.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle
                      className="w-5 h-5 flex-shrink-0 mt-0.5"
                      style={{ color: "#00ff88" }}
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              {article.sections.map((section, i) => (
                <div key={i} className="mb-8">
                  <h2
                    style={{ color: i % 2 === 0 ? "#00d4ff" : "#a78bfa" }}
                    className="text-2xl font-bold mt-8 mb-4"
                  >
                    {section.heading}
                  </h2>
                  <p className="leading-relaxed">{section.body}</p>
                </div>
              ))}
              <h2
                style={{ color: "#00ff88" }}
                className="text-2xl font-bold mt-8 mb-4"
              >
                Getting Started with MyITGuard
              </h2>
              <p className="leading-relaxed">{article.conclusion}</p>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-700">
              <div className="flex items-center gap-2 text-slate-500 text-sm">
                <Tag className="w-4 h-4" />
                <span className="font-medium">SEO Keywords:</span>
                <span style={{ color: "#00ff88" }}>{article.seoKeywords}</span>
              </div>
            </div>

            {shareToast && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-xl text-sm font-medium shadow-lg"
                style={{
                  background: "rgba(0,255,136,0.15)",
                  border: "1px solid rgba(0,255,136,0.4)",
                  color: "#00ff88",
                }}
              >
                {shareToast}
              </motion.div>
            )}
            {showSubscribe && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-6 rounded-2xl"
                style={{
                  background: "rgba(0,212,255,0.06)",
                  border: "1px solid rgba(0,212,255,0.2)",
                }}
              >
                {subscribeStatus === "success" ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle
                      className="w-6 h-6 flex-shrink-0"
                      style={{ color: "#00ff88" }}
                    />
                    <div>
                      <p className="font-semibold" style={{ color: "#00ff88" }}>
                        You are subscribed!
                      </p>
                      <p className="text-sm text-slate-400">
                        We will send you the latest cybersecurity insights from
                        MyITGuard.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubscribe} className="space-y-3">
                    <p
                      className="text-sm font-semibold"
                      style={{ color: "#00d4ff" }}
                    >
                      Get new articles delivered to your inbox
                    </p>
                    <div className="flex gap-3">
                      <input
                        type="email"
                        value={subscribeEmail}
                        onChange={(e) => {
                          setSubscribeEmail(e.target.value);
                          setSubscribeStatus("idle");
                        }}
                        placeholder="your@email.com"
                        className="input-dark flex-1 text-sm"
                        style={
                          subscribeStatus === "error"
                            ? { borderColor: "#f87171" }
                            : {}
                        }
                      />
                      <button
                        type="submit"
                        className="btn-primary px-5 py-2 text-sm whitespace-nowrap"
                      >
                        Subscribe
                      </button>
                    </div>
                    {subscribeStatus === "error" && (
                      <p className="text-xs" style={{ color: "#f87171" }}>
                        Please enter a valid email address.
                      </p>
                    )}
                    <p className="text-xs text-slate-500">
                      No spam. Unsubscribe anytime.
                    </p>
                  </form>
                )}
              </motion.div>
            )}
            <div className="mt-8 flex justify-between items-center flex-wrap gap-4">
              <button
                onClick={onClose}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition-all text-slate-300 hover:text-white"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Articles
              </button>
              <div className="flex gap-3">
                <button
                  onClick={handleShare}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl border border-cyber-green/30 hover:bg-cyber-green/10 transition-all"
                  style={{ color: "#00ff88" }}
                >
                  <Share2 className="w-4 h-4" />
                  Share Article
                </button>
                <button
                  onClick={() => setShowSubscribe((p) => !p)}
                  className="btn-primary flex items-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  {showSubscribe ? "Hide" : "Subscribe for More"}
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
      name: "Infantry",
      description:
        "Essential cybersecurity foundation for small businesses getting started with security",
      features: [
        "Fractional CISO Services",
        "Security Policy Development",
        "Basic Risk Assessment",
        "Monthly Security Check-ins",
        "Email Support",
        "Security Questionnaire Support",
        "Compliance Roadmap",
      ],
      cta: "Get Started",
      popular: false,
      color: "#00d4ff",
    },
    {
      name: "Premium Infantry",
      description:
        "Comprehensive security program for growing businesses with expanded needs",
      features: [
        "Everything in Infantry, plus:",
        "Enhanced vCISO Support Hours",
        "Complete Policy Suite",
        "Quarterly Risk Assessments",
        "Bi-weekly Security Meetings",
        "Priority Email + Phone Support",
        "Compliance Management (Multiple Frameworks)",
        "3rd Party Vendor Security Assessments",
        "Security Awareness Training",
        "Cyber Incident Support",
        "Audit Facilitation",
        "IT Security Gap Assessment",
        "Monthly Security Report",
      ],
      cta: "Get Started",
      popular: true,
      color: "#00ff88",
    },
    {
      name: "Enterprise",
      description:
        "Full security leadership for established organizations with complex requirements",
      features: [
        "Everything in Premium Infantry, plus:",
        "Executive Security Leadership",
        "vCISO Strategy Sessions (Quarterly)",
        "Weekly Security Meetings",
        "24/7 Priority Support",
        "Board Reporting & Presentations",
        "Multi-Framework Compliance",
        "Vendor Risk Management Program",
        "Custom Security Training",
        "Incident Response + Tabletop Exercises",
        "M&A Security Diligence",
        "Security Program Metrics & KPIs",
        "Regulatory Exam Preparation",
        "Dedicated Security Team",
      ],
      cta: "Contact Sales",
      popular: false,
      color: "#a78bfa",
    },
  ];

  const alaCarteServices = [
    {
      category: "Assessment & Consulting",
      services: [
        {
          name: "Cyber Risk Assessment",
          description:
            "Comprehensive evaluations to identify vulnerabilities and enhance your cybersecurity posture",
        },
        {
          name: "IT Security Gap Assessment",
          description:
            "Identify gaps between current security state and desired compliance requirements",
        },
        {
          name: "Risk Assessment & Consulting",
          description:
            "Expert guidance on identifying, evaluating, and mitigating security risks",
        },
        {
          name: "Vulnerability Assessment",
          description:
            "Systematic review of security weaknesses in your systems and networks",
        },
      ],
    },
    {
      category: "Compliance Solutions",
      services: [
        {
          name: "HIPAA Compliance",
          description:
            "Full HIPAA compliance implementation and documentation for healthcare organizations",
        },
        {
          name: "SOC 2 Readiness",
          description:
            "Gap analysis, control implementation, and auditor coordination for SOC 2 certification",
        },
        {
          name: "CMMC Certification Prep",
          description:
            "NIST 800-171 alignment and CMMC assessment preparation for defense contractors",
        },
        {
          name: "Compliance Readiness & Support",
          description:
            "Ongoing compliance management and support for multiple frameworks",
        },
        {
          name: "Audit Facilitation",
          description:
            "Expert support throughout the audit process to ensure successful certification",
        },
      ],
    },
    {
      category: "Security Leadership",
      services: [
        {
          name: "Virtual CISO (vCISO)",
          description:
            "Expert cybersecurity leadership to safeguard and enhance your security posture",
        },
        {
          name: "Fractional CISO Services",
          description:
            "Part-time executive security leadership without full-time cost",
        },
        {
          name: "vCISO Strategy Sessions",
          description:
            "Quarterly strategic planning sessions with security executives",
        },
        {
          name: "Board Reporting",
          description:
            "Executive-level security reports and presentations for board members",
        },
        {
          name: "Security Policy Development",
          description:
            "Complete security policy suite tailored to your organization",
        },
      ],
    },
    {
      category: "Network Security",
      services: [
        {
          name: "Network Security",
          description:
            "Advanced security protocols and monitoring to protect your network from breaches",
        },
        {
          name: "Firewall & Network Security Monitoring",
          description:
            "Continuous monitoring and management of firewall and network security",
        },
        {
          name: "Virtual Private Network (VPN)",
          description:
            "Secure VPN services ensuring privacy and safe internet access",
        },
        {
          name: "Endpoint Security Management",
          description:
            "Comprehensive protection for all devices connecting to your network",
        },
      ],
    },
    {
      category: "Training & Awareness",
      services: [
        {
          name: "Cybersecurity Awareness Training",
          description:
            "Educate your team on security best practices to create a human firewall",
        },
        {
          name: "Phishing Simulations",
          description:
            "Realistic phishing tests to train employees on recognizing threats",
        },
        {
          name: "Custom Security Training",
          description:
            "Tailored training programs specific to your organization needs",
        },
      ],
    },
    {
      category: "Incident Response",
      services: [
        {
          name: "Cyber Incident Support",
          description: "Expert assistance during and after security incidents",
        },
        {
          name: "Incident Response Planning",
          description:
            "Develop comprehensive IR playbooks and communication templates",
        },
        {
          name: "Tabletop Exercises",
          description:
            "Simulated incident scenarios to test and improve response capabilities",
        },
        {
          name: "24/7 Incident Response",
          description:
            "Round-the-clock incident response support for critical situations",
        },
      ],
    },
    {
      category: "Vendor & Third-Party",
      services: [
        {
          name: "3rd Party Vendor Security Assessments",
          description:
            "Evaluate and manage security risks from third-party vendors",
        },
        {
          name: "Vendor Risk Management Program",
          description:
            "Comprehensive program for ongoing vendor security monitoring",
        },
        {
          name: "Security Questionnaire Support",
          description:
            "Assistance completing customer and partner security questionnaires",
        },
      ],
    },
    {
      category: "Reporting & Analytics",
      services: [
        {
          name: "Monthly Security Report",
          description:
            "Regular reports on security posture, incidents, and improvements",
        },
        {
          name: "Security Program Metrics & KPIs",
          description: "Track and measure security program effectiveness",
        },
        {
          name: "Risk Assessment Reports",
          description:
            "Detailed documentation of identified risks and remediation plans",
        },
      ],
    },
  ];

  return (
    <section id="plans" className="py-24 relative bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 badge-cyber mb-4">
            <Award className="w-4 h-4" />
            <span>Security Plans</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Choose Your <span className="gradient-text">Armor</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Select the right level of security protection for your organization.
            All plans include expert vCISO services and can be customized to
            your needs.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`glass-card p-8 relative ${plan.popular ? "border-cyber-green/50 scale-105" : ""}`}
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
                <h3
                  className="text-2xl font-bold mb-2"
                  style={{ color: plan.color }}
                >
                  {plan.name}
                </h3>
                <p className="text-slate-400 text-sm mb-6">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle
                      className="w-5 h-5 flex-shrink-0 mt-0.5"
                      style={{ color: plan.color }}
                    />
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-xl font-semibold transition-all ${plan.popular ? "btn-primary" : "bg-slate-800 hover:bg-slate-700 text-white"}`}
              >
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
            <p className="text-slate-300">
              Comprehensive cybersecurity services available individually or as
              add-ons to any plan
            </p>
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
                <h4
                  className="text-xl font-bold mb-4 pb-2 border-b border-slate-700"
                  style={{ color: "#00d4ff" }}
                >
                  {category.category}
                </h4>
                <ul className="space-y-4">
                  {category.services.map((service, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div
                        className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                        style={{ backgroundColor: "#00ff88" }}
                      />
                      <div>
                        <span className="font-semibold text-white">
                          {service.name}
                        </span>
                        <p className="text-slate-400 text-sm mt-1">
                          {service.description}
                        </p>
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
              <h3 className="text-3xl font-bold mb-4">
                Complete Service Catalog
              </h3>
              <p className="text-slate-300">
                All MyITGuard services at a glance
              </p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                "Cyber Risk Assessment",
                "Compliance Solutions",
                "Network Security",
                "Virtual Private Network (VPN)",
                "Security Awareness Training",
                "Virtual CISO (vCISO)",
                "Fractional CISO Services",
                "HIPAA Compliance",
                "SOC 2 Readiness",
                "CMMC Certification Prep",
                "IT Security Gap Assessment",
                "Risk Assessment & Consulting",
                "Security Policy Development",
                "Firewall & Network Monitoring",
                "Endpoint Security Management",
                "Cyber Incident Support",
                "Incident Response Planning",
                "3rd Party Vendor Assessments",
                "Vendor Risk Management",
                "Audit Facilitation",
                "Monthly Security Reports",
                "Security Program Metrics",
                "Board Reporting",
                "vCISO Strategy Sessions",
                "Tabletop Exercises",
                "24/7 Incident Response",
                "Phishing Simulations",
                "Custom Security Training",
                "Security Questionnaire Support",
                "Compliance Readiness & Support",
              ].map((service, index) => (
                <motion.div
                  key={service}
                  className="p-4 rounded-lg bg-slate-800/30 hover:bg-slate-800/50 transition-all flex items-center gap-3"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.02 }}
                >
                  <CheckCircle
                    className="w-5 h-5 flex-shrink-0"
                    style={{ color: "#00ff88" }}
                  />
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
            <p className="text-slate-300 mb-8">
              Every organization has unique security needs. Our experts can
              create a customized plan that fits your specific requirements and
              budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary flex items-center justify-center gap-2">
                <Mail className="w-5 h-5" />
                Schedule Consultation
              </button>
              <button className="btn-secondary flex items-center justify-center gap-2">
                <Calculator className="w-5 h-5" />
                ROI Calculator
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
    name: "Sarah Mitchell",
    title: "Chief Technology Officer",
    company: "HealthTech Solutions",
    industry: "Healthcare",
    content:
      "MyITGuard transformed our security posture. Their vCISO service helped us achieve HIPAA compliance in just 3 months, and their team feels like an extension of our own. We finally have peace of mind knowing our patient data is protected.",
    rating: 5,
    image: "SM",
    color: "#00ff88",
  },
  {
    name: "Michael Chen",
    title: "CEO & Founder",
    company: "CloudScale Inc",
    industry: "Technology",
    content:
      "As a startup, we needed enterprise-level security without the enterprise budget. MyITGuard Premium Infantry plan gave us everything we needed to close our Series B round. Our investors were impressed with our security maturity.",
    rating: 5,
    image: "MC",
    color: "#00d4ff",
  },
  {
    name: "Jennifer Rodriguez",
    title: "Compliance Director",
    company: "FinServe Partners",
    industry: "Financial Services",
    content:
      "The SOC 2 readiness program was worth every penny. MyITGuard guided us through every step, and we passed our audit with zero findings. Their expertise in compliance frameworks is unmatched.",
    rating: 5,
    image: "JR",
    color: "#a78bfa",
  },
  {
    name: "David Thompson",
    title: "IT Director",
    company: "Manufacturing Corp",
    industry: "Manufacturing",
    content:
      "We experienced a ransomware attempt last year. MyITGuard incident response team was on the scene within hours and contained the threat before any damage occurred. They saved our business.",
    rating: 5,
    image: "DT",
    color: "#f472b6",
  },
  {
    name: "Lisa Park",
    title: "VP of Operations",
    company: "Retail Dynamics",
    industry: "Retail",
    content:
      "The security awareness training program reduced our phishing click rate from 35% to under 5% in just 6 months. Our employees are now our first line of defense, not our weakest link.",
    rating: 5,
    image: "LP",
    color: "#00ff88",
  },
  {
    name: "Robert Williams",
    title: "Chief Information Officer",
    company: "Defense Systems LLC",
    industry: "Defense Contracting",
    content:
      "CMMC certification seemed impossible until we partnered with MyITGuard. Their team understood the requirements perfectly and got us certified ahead of schedule. Now we can bid on DoD contracts with confidence.",
    rating: 5,
    image: "RW",
    color: "#00d4ff",
  },
];

// Testimonials Section
function TestimonialsSection() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 badge-cyber mb-4">
            <Award className="w-4 h-4" />
            <span>Client Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by <span className="gradient-text">Industry Leaders</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            See what our clients say about partnering with MyITGuard to protect
            their organizations.
          </p>
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
                  <svg
                    key={i}
                    className="w-5 h-5"
                    fill={testimonial.color}
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Content */}
              <p className="text-slate-300 mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white"
                  style={{ backgroundColor: testimonial.color }}
                >
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-semibold text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-slate-400">
                    {testimonial.title}
                  </div>
                  <div className="text-xs" style={{ color: testimonial.color }}>
                    {testimonial.company} • {testimonial.industry}
                  </div>
                </div>
              </div>

              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-6xl text-slate-700 opacity-30 font-serif">
                "
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// About Section
function AboutSection() {
  const features = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Certified Experts",
      description: "CISSP, CISM, CEH certified",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Round-the-clock monitoring",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Threat Intel",
      description: "Real-time intelligence feeds",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Proven Track Record",
      description: "500+ clients protected",
    },
  ];
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 badge-blue mb-4">
              <Award className="w-4 h-4" />
              <span>About MyITGuard</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your Trusted Partner in{" "}
              <span className="gradient-text-blue">Cybersecurity</span>
            </h2>
            <p className="text-xl text-slate-300 mb-6">
              MyITGuard delivers enterprise-grade cybersecurity solutions
              tailored for businesses of all sizes. Our team combines strategic
              leadership with technical excellence.
            </p>
            <p className="text-slate-400 mb-8">
              From Virtual CISO services to compliance management and security
              training, we provide comprehensive protection.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="glass-card p-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="mb-2" style={{ color: "#00d4ff" }}>
                    {feature.icon}
                  </div>
                  <h4 className="font-semibold mb-1">{feature.title}</h4>
                  <p className="text-sm text-slate-400">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-80 h-80 mx-auto relative">
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <Shield className="w-40 h-40" style={{ color: "#00ff88" }} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 1. Paste your exact keys from the EmailJS dashboard inside these single quotes:
    const SERVICE_ID = "service_vi0p04d";
    const TEMPLATE_ID = "template_s8897th";
    const PUBLIC_KEY = "aa3rg1srHmLVgN7wW";

    // 2. Send the form data to EmailJS
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.currentTarget, PUBLIC_KEY)
      .then(() => {
        // This only runs if the email successfully sent!
        setSubmitted(true);

        // Clear the form fields after 3 seconds
        setTimeout(() => {
          setSubmitted(false);
          setFormData({
            name: "",
            email: "",
            phone: "",
            company: "",
            service: "",
            message: "",
          });
        }, 3000);
      })
      .catch((error) => {
        // This runs if Hostinger SMTP or EmailJS has an error
        alert(
          "Something went wrong. Please try again or email us directly at info@myitguard.com",
        );
        console.error("EmailJS Error details:", error);
      });
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 badge-cyber mb-4">
            <Mail className="w-4 h-4" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Your <span className="gradient-text">Security Journey</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Ready to strengthen your cybersecurity posture? Contact us for a
            free consultation and risk assessment.
          </p>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6">
                Schedule Your Consultation
              </h3>
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="name" // 👈 Added for EmailJS {{name}}
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Full Name"
                      className="input-dark w-full"
                      required
                    />
                    <input
                      type="email"
                      name="email" // 👈 Added for EmailJS {{email}}
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="Work Email"
                      className="input-dark w-full"
                      required
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="tel"
                      name="phone" // 👈 Added for EmailJS {{phone}}
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="Phone Number"
                      className="input-dark w-full"
                    />
                    <input
                      type="text"
                      name="company" // 👈 Added for EmailJS {{company}}
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      placeholder="Company Name"
                      className="input-dark w-full"
                      required
                    />
                  </div>
                  <select
                    name="service" // 👈 Added for EmailJS {{service}}
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="input-dark w-full"
                    required
                  >
                    <option value="">Select Service</option>
                    <option value="vciso">Virtual CISO</option>
                    <option value="compliance">Compliance Solutions</option>
                    <option value="assessment">Cyber Risk Assessment</option>
                    <option value="training">
                      Security Awareness Training
                    </option>
                    <option value="managed">Managed Security Services</option>
                    <option value="dataprotection">Data Protection</option>
                    <option value="other">Other</option>
                  </select>
                  <textarea
                    name="message" // 👈 Added for EmailJS {{message}}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell us about your security needs..."
                    className="input-dark w-full h-32 resize-none"
                    required
                  />
                  <button type="submit" className="btn-primary w-full">
                    Submit Request
                  </button>
                  <p className="text-xs text-slate-400 text-center">
                    We'll respond within 24 business hours
                  </p>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle
                    className="w-20 h-20 mx-auto mb-4"
                    style={{ color: "#00ff88" }}
                  />
                  <h4 className="text-2xl font-bold mb-2">Thank You!</h4>
                  <p className="text-slate-400">
                    Your request has been submitted.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-card p-6">
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "rgba(0, 255, 136, 0.2)" }}
                >
                  <Phone className="w-6 h-6" style={{ color: "#00ff88" }} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <p className="text-slate-400">+1 (240) 729-0299</p>
                </div>
              </div>
            </div>
            <div className="glass-card p-6">
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "rgba(0, 212, 255, 0.2)" }}
                >
                  <Mail className="w-6 h-6" style={{ color: "#00d4ff" }} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-slate-400">info@myitguard.com</p>
                </div>
              </div>
            </div>
            <div className="glass-card p-6">
              <h4 className="font-semibold mb-4">Emergency Response</h4>
              <p className="text-slate-400 mb-4">
                Experiencing a security incident? Our rapid response team is
                available 24/7.
              </p>
              <button className="btn-secondary w-full flex items-center justify-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Report Incident
              </button>
            </div>
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
          <div>
            <div
              className="flex items-center gap-3 mb-4 cursor-pointer"
              onClick={() => onNavigate("home")}
            >
              <MyITGuardLogo />
            </div>
            <p className="text-slate-400 mb-4">
              Enterprise cybersecurity solutions for the modern business.
            </p>
            <div className="flex gap-4">
              {["twitter", "linkedin", "github"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-cyber-green/20 transition-all"
                  style={{ color: "#00ff88" }}
                >
                  <Globe className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a
                  href="#services"
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.preventDefault();
                    onNavigate("services");
                  }}
                  className="hover:text-cyber-green transition-colors"
                >
                  Virtual CISO
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.preventDefault();
                    onNavigate("services");
                  }}
                  className="hover:text-cyber-green transition-colors"
                >
                  Compliance Solutions
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.preventDefault();
                    onNavigate("services");
                  }}
                  className="hover:text-cyber-green transition-colors"
                >
                  Risk Assessment
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.preventDefault();
                    onNavigate("services");
                  }}
                  className="hover:text-cyber-green transition-colors"
                >
                  Security Training
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a
                  href="#resources"
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.preventDefault();
                    onNavigate("resources");
                  }}
                  className="hover:text-cyber-green transition-colors"
                >
                  Compliance Checklists
                </a>
              </li>
              <li>
                <a
                  href="#roi-calculator"
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.preventDefault();
                    onNavigate("roi");
                  }}
                  className="hover:text-cyber-green transition-colors"
                >
                  ROI Calculator
                </a>
              </li>
              <li>
                <a
                  href="#resources"
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.preventDefault();
                    onNavigate("resources");
                  }}
                  className="hover:text-cyber-green transition-colors"
                >
                  Human Firewall Playbook
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.preventDefault();
                    onNavigate("blog");
                  }}
                  className="hover:text-cyber-green transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a
                  href="#about"
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.preventDefault();
                    onNavigate("about");
                  }}
                  className="hover:text-cyber-green transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.preventDefault();
                    onNavigate("contact");
                  }}
                  className="hover:text-cyber-green transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-cyber-green transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-cyber-green transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="section-divider mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © 2026 MyITGuard. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-cyber-green transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-cyber-green transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-cyber-green transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main App Component with Routing
function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("home");
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(
    null,
  );
  const [selectedService, setSelectedService] = useState<string | null>(null);

  // Check localStorage synchronously
  const hasSeenIntro =
    typeof window !== "undefined"
      ? localStorage.getItem("myitguard_intro_seen")
      : null;
  const [showIntro, setShowIntro] = useState(!hasSeenIntro);

  useEffect(() => {
    const hash = location.hash || "";
    if (hash === "#/glossary") return;
    const targetId = hash.replace("#", "").replace("/", "");
    if (targetId) {
      setActiveSection(targetId);
      setTimeout(() => {
        document
          .getElementById(targetId)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 80);
    }
  }, [location.hash]);

  // Do not re-trigger intro on route/hash changes; intro only first load
  const handleIntroComplete = () => {
    setShowIntro(false);
    localStorage.setItem("myitguard_intro_seen", "true");
  };

  const handleNavigate = (section: string) => {
    const targetId = section === "roi" ? "roi-calculator" : section;

    // If we're not on the homepage, navigate there first (with the hash),
    // then let the location.hash effect above scroll to the right section.
    if (location.pathname !== "/") {
      navigate(`/#${targetId}`);
      setActiveSection(section);
      return;
    }

    const el = document.getElementById(targetId);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveSection(section);
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
  if (
    location.pathname === "/contact" ||
    location.hash.startsWith("#/contact")
  ) {
    return (
      <>
        {showIntro && <HyperspaceIntro onComplete={handleIntroComplete} />}
        <Navigation
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <div
          style={{ opacity: showIntro ? 0 : 1, transition: "opacity 1s ease" }}
        >
          <ContactPage />
        </div>
        <Footer onNavigate={handleNavigate} />
      </>
    );
  }

  if (location.hash === "#/glossary" || location.pathname === "/glossary") {
    return (
      <>
        {showIntro && <HyperspaceIntro onComplete={handleIntroComplete} />}
        <Navigation
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <div
          style={{ opacity: showIntro ? 0 : 1, transition: "opacity 1s ease" }}
        >
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
      <Navigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <main
        style={{ opacity: showIntro ? 0 : 1, transition: "opacity 1s ease" }}
      >
        <HeroSection onNavigate={handleNavigate} />
        <ServicesSection onServiceSelect={handleServiceSelect} />
        <ResourcesSection />
        <PlansSection />
        <TestimonialsSection />
        <BlogSection onArticleSelect={handleArticleSelect} />
        <AboutSection />
        <ContactSection />
      </main>
      {selectedArticle && (
        <ArticleModal article={selectedArticle} onClose={handleCloseArticle} />
      )}
      {selectedService && (
        <ServiceModal
          serviceName={selectedService}
          onClose={handleCloseService}
        />
      )}
      <Footer onNavigate={handleNavigate} />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <HelmetProvider>
        <div className="min-h-screen bg-navy-900">
          <Helmet>
            <title>
              MyITGuard - Enterprise Cybersecurity Solutions | Virtual CISO &
              Compliance
            </title>
            <meta
              name="description"
              content="MyITGuard provides Virtual CISO services, HIPAA/SOC 2/CMMC compliance, cyber risk assessments, and security awareness training."
            />
          </Helmet>
          <AppContent />
        </div>
      </HelmetProvider>
    </Router>
  );
}
