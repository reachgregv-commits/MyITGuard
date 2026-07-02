import { useEffect, useMemo, useRef, useState } from 'react';
import { Search, Filter, Tag, BookOpen } from 'lucide-react';

interface ThreatItem {
  term: string;
  category: string;
  summary: string;
  mitigations: string[];
  tags: string[];
}

const threats: ThreatItem[] = [
  {
    term: 'Business Email Compromise (BEC)',
    category: 'Social Engineering',
    summary: 'Fraudulent emails pretending to be executives or vendors to redirect payments or harvest credentials.',
    mitigations: ['Out-of-band verification for payment changes', 'MFA on email/SSO', 'Banner for external senders', 'DMARC/DKIM/SPF enforcement'],
    tags: ['phishing', 'fraud', 'finance'],
  },
  {
    term: 'Ransomware',
    category: 'Malware',
    summary: 'Malicious code encrypts data and demands payment; often follows phishing or RDP/VPN exploits.',
    mitigations: ['EDR with behavioral blocks', 'Offline/immutable backups', 'Patch VPN/RDP', 'Least privilege & segmentation'],
    tags: ['encryption', 'extortion'],
  },
  {
    term: 'Phishing / Spear Phishing',
    category: 'Social Engineering',
    summary: 'Deceptive emails or messages to steal credentials, deploy malware, or initiate fraud.',
    mitigations: ['MFA everywhere', 'User reporting + simulations', 'Email security filtering', 'Hover-to-verify + callback rule'],
    tags: ['email', 'mfa', 'training'],
  },
  {
    term: 'Smishing / Vishing',
    category: 'Social Engineering',
    summary: 'SMS or voice-based phishing to capture MFA codes, credentials, or payments.',
    mitigations: ['Never share OTPs by phone/SMS', 'Number spoofing awareness', 'Use corporate channels to verify'],
    tags: ['voice', 'sms'],
  },
  {
    term: 'Credential Stuffing',
    category: 'Identity',
    summary: 'Using breached credentials against other services to take over accounts.',
    mitigations: ['Enforce MFA and SSO', 'Password manager + no reuse', 'Bot detection / rate limiting', 'Have I Been Pwned checks'],
    tags: ['identity', 'account takeover'],
  },
  {
    term: 'Password Spraying',
    category: 'Identity',
    summary: 'Trying common passwords across many accounts to evade lockouts.',
    mitigations: ['Strong password policy + block common passwords', 'MFA', 'Login throttling and alerting', 'Geo/behavioral rules'],
    tags: ['identity', 'bruteforce'],
  },
  {
    term: 'Insider Threat',
    category: 'Insider',
    summary: 'Malicious or negligent insiders abusing access to data or systems.',
    mitigations: ['Least privilege & just-in-time access', 'DLP + UEBA monitoring', 'Exit access revocation', 'Segregation of duties'],
    tags: ['access', 'detection'],
  },
  {
    term: 'Shadow IT / Unsanctioned SaaS',
    category: 'Cloud / SaaS',
    summary: 'Unapproved tools storing company data without security controls.',
    mitigations: ['SaaS discovery & approvals', 'SSO enforcement', 'DLP and CASB controls', 'Data classification & sharing rules'],
    tags: ['saas', 'data'],
  },
  {
    term: 'Misconfiguration (Cloud)',
    category: 'Cloud / SaaS',
    summary: 'Over-permissive storage, public buckets, open security groups, or disabled logging.',
    mitigations: ['CSPM/benchmark checks (CIS)', 'Least privilege IAM', 'Private networking and WAF', 'Enable logging + retention'],
    tags: ['cloud', 'iam', 'network'],
  },
  {
    term: 'SQL Injection (SQLi)',
    category: 'Application',
    summary: 'Untrusted input alters database queries leading to data theft or corruption.',
    mitigations: ['Parameterize queries / ORM', 'WAF rules', 'Input validation', 'Least privilege DB accounts'],
    tags: ['appsec', 'owasp'],
  },
  {
    term: 'Cross-Site Scripting (XSS)',
    category: 'Application',
    summary: 'Injecting scripts into web pages to hijack sessions or deface content.',
    mitigations: ['Output encoding', 'CSP headers', 'Sanitize user input', 'HttpOnly/Secure cookies'],
    tags: ['appsec', 'owasp'],
  },
  {
    term: 'SSRF (Server-Side Request Forgery)',
    category: 'Application',
    summary: 'Forcing backend to fetch internal resources (metadata, services).',
    mitigations: ['Block metadata/IMDS or require hop tokens', 'Allow-list outbound hosts', 'WAF SSRF rules', 'Network egress controls'],
    tags: ['cloud', 'appsec'],
  },
  {
    term: 'Cross-Site Request Forgery (CSRF)',
    category: 'Application',
    summary: 'Forcing victims to perform unintended actions while authenticated.',
    mitigations: ['SameSite/HttpOnly cookies', 'CSRF tokens', 'Re-auth for critical actions'],
    tags: ['appsec', 'owasp'],
  },
  {
    term: 'Man-in-the-Middle (MITM)',
    category: 'Network',
    summary: 'Intercepting traffic to eavesdrop or tamper with communications.',
    mitigations: ['TLS everywhere', 'HSTS & certificate pinning', 'DNSSEC/DoH where appropriate', 'VPN on untrusted networks'],
    tags: ['network', 'tls'],
  },
  {
    term: 'Distributed Denial of Service (DDoS)',
    category: 'Network',
    summary: 'Flooding services to exhaust resources and cause downtime.',
    mitigations: ['CDN/WAF with auto-mitigation', 'Rate limiting', 'Autoscaling where safe', 'Runbooks for traffic spikes'],
    tags: ['availability', 'network'],
  },
  {
    term: 'Zero-Day Exploit',
    category: 'Vulnerability',
    summary: 'Exploits for unknown or unpatched flaws with no vendor fix available.',
    mitigations: ['Threat intel + virtual patching (WAF/EDR rules)', 'Exploit mitigation (ASLR/DEP)', 'Rapid detection & containment playbooks'],
    tags: ['vuln', 'patch'],
  },
  {
    term: 'Supply Chain Attack',
    category: 'Supply Chain',
    summary: 'Compromising vendors, software updates, or CI/CD to reach downstream targets.',
    mitigations: ['SBOM + signed artifacts', 'Vendor risk assessments', 'Least privilege CI/CD secrets', 'Integrity checks and code signing'],
    tags: ['third-party', 'code'],
  },
  {
    term: 'AI/Deepfake Impersonation',
    category: 'Social Engineering',
    summary: 'Synthetic voice/video used to trick staff into actions or approvals.',
    mitigations: ['Callback to verified numbers', 'Video-off for sensitive approvals', 'Awareness training and codewords'],
    tags: ['ai', 'impersonation'],
  },
  {
    term: 'Data Exfiltration',
    category: 'Data',
    summary: 'Unauthorized transfer of sensitive data out of the environment.',
    mitigations: ['DLP with egress controls', 'Encrypt at rest/in transit', 'Monitor unusual downloads', 'Segment high-value data'],
    tags: ['data', 'dlp'],
  },
  {
    term: 'Lateral Movement',
    category: 'Post-Exploitation',
    summary: 'Attackers pivot between hosts using stolen creds or tokens.',
    mitigations: ['Network segmentation', 'EDR with lateral move detections', 'Disable legacy protocols', 'Tiered admin and jump hosts'],
    tags: ['edr', 'network'],
  },
];

const categories = ['All', ...Array.from(new Set(threats.map((t) => t.category)))];

export default function ThreatGlossary() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [showFilters, setShowFilters] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    searchRef.current?.focus();
  }, []);

  const filtered = useMemo(() => {
    return threats.filter((t) => {
      const matchesCategory = category === 'All' || t.category === category;
      const haystack = `${t.term} ${t.category} ${t.summary} ${t.tags.join(' ')}`.toLowerCase();
      const matchesSearch = haystack.includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  return (
    <section id="glossary-top" className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 space-y-3 text-center">
          <div className="inline-flex items-center gap-2 badge-cyber">
            <BookOpen className="w-4 h-4" />
            <span>Threat Intelligence Glossary</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Know the threats. Ship safer.</h1>
          <p className="text-slate-300 max-w-3xl mx-auto">
            Quick reference for common attack patterns with practical mitigations your team can apply today.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="glass-card p-4 md:p-6 mb-8 flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-3 md:items-center">
              <div className="relative flex-1">
                <input
                  ref={searchRef}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search threats, e.g., ransomware, MFA, SQLi"
                  className="input-dark w-full h-14 pr-12 text-base"
                />
                <button
                  className="absolute inset-y-0 right-0 px-4 text-cyan-300 hover:text-white"
                  aria-label="Search"
                >
                  <Search className="w-5 h-5" />
                </button>
              </div>
              <button
                onClick={() => setShowFilters((v) => !v)}
                className={`inline-flex items-center gap-2 px-4 py-3 rounded-xl border transition ${
                  showFilters ? 'border-cyan-400/50 bg-cyan-500/10 text-white' : 'border-white/10 text-slate-300 hover:border-cyan-300/40 hover:text-white'
                }`}
              >
                <Filter className="w-4 h-4" /> Filters
              </button>
            </div>

            {showFilters && (
              <div className="flex items-center gap-2 flex-wrap">
                {categories.map((c) => (
                  <button
                    key={c}
                    onClick={() => setCategory(c)}
                    className={`px-3 py-1.5 rounded-full text-sm border transition ${
                      category === c
                        ? 'border-cyan-400/50 bg-cyan-500/10 text-white'
                        : 'border-white/10 text-slate-300 hover:border-cyan-300/40 hover:text-white'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5">
          {filtered.map((t) => (
            <div key={t.term} className="glass-card p-5 space-y-3 border border-white/5 h-full">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-cyan-200/80">{t.category}</div>
                  <h3 className="text-lg font-semibold text-white">{t.term}</h3>
                </div>
                <Tag className="w-4 h-4 text-cyan-300" />
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">{t.summary}</p>
              <div className="space-y-1">
                <p className="text-xs font-semibold text-cyan-200">Mitigations</p>
                <ul className="space-y-1 text-sm text-slate-200">
                  {t.mitigations.map((m) => (
                    <li key={m} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {t.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 rounded-full text-[11px] border border-white/10 text-slate-200 bg-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center text-slate-400 mt-8">No threats match your filters.</div>
        )}
      </div>
    </section>
  );
}
