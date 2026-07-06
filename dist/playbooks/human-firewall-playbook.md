# Human Firewall Playbook
Practical, low-friction actions to reduce human risk in 60 days. Use this as a lightweight runbook for awareness, behavior change, and measurable outcomes.

## Program Goals (what good looks like)
- Phish click rate under 5%
- MFA coverage >95%
- Password reuse eliminated on corporate accounts
- Critical incidents reported within 15 minutes of discovery
- USB / shadow IT policy acknowledgment >98%

## Weekly Rhythm (8-week rollout)
1. **Week 1-2: Foundations** – Policy refresh, MFA push, baseline phishing simulation
2. **Week 3-4: Phishing Focus** – Targeted simulations, just-in-time micro-learnings
3. **Week 5-6: Data Handling** – DLP reminders, clean desk, sharing rules, generative AI guidance
4. **Week 7: Device & Remote Hygiene** – Patch, disk encryption checks, Wi-Fi hygiene
5. **Week 8: Incident Practice** – Report-a-phish drills, tabletop for leadership

## Essential Controls & Behaviors
- **MFA everywhere**: Okta/M365/SSO + VPN/Privileged + Email
- **Passwords**: Manager required, 14+ chars, no reuse, passphrases preferred
- **Email & Messaging**: Hover-to-verify, never act on urgency without voice/Slack verify, no links from unexpected senders
- **Data handling**: Label sensitive, avoid personal email/USB, redact PII/PHI before sharing, AI tools allowed only with approved guidance
- **Devices**: Auto-lock 5 min, full disk encryption, patch within 7 days (critical), no rogue USB
- **Remote work**: Avoid open Wi-Fi; if needed, use VPN + disable auto-join; no printing sensitive data at home
- **Reporting**: One-click “Report Phish” or Slack “#security-help”; reward fast reporting

## Playbook Modules (use these as micro-trainings)
- Phishing patterns: lookalikes, payroll scams, vendor fraud, MFA fatigue
- BEC & payment fraud: always out-of-band verify banking changes
- AI-powered threats: deepfake voice/video checks; require callback to known numbers
- QR code safety: never scan from posters/emails unless business-critical and verified
- Social engineering (phone/in-person): no badge tailgating; challenge politely
- Secure file sharing: use approved storage; no public links by default
- Clean desk & screens: lock screen when away; clear whiteboards after meetings
- Travel security: privacy screen, disable Bluetooth auto-pair, declare device loss immediately
- Incident first steps: disconnect device from network; report; don’t delete evidence
- Third-party access: least privilege; time-bound vendor accounts; monitor sharing links

## Simulation & Drills
- **Phishing cadence**: monthly baseline + quarterly targeted (finance, HR, exec admins)
- **Smishing/voice**: quarterly tests for high-risk roles
- **Report drills**: send safe “report-me” emails monthly; celebrate fastest reporters
- **Tabletop**: quarterly with execs on ransomware, BEC, and data leak scenarios

## Metrics to Track
- Phish click rate, report rate, and median time-to-report (goal <15 min)
- MFA coverage and bypass attempts
- Patch SLAs for user endpoints
- DLP/AI policy violations and coaching outcomes
- Training completion and retake rate for repeat offenders

## Just-in-Time Coaching Snippets
- “Pause on urgency”: if it’s urgent, it can wait for verification
- “Link or attachment?”: open only if expected and verified
- “Call back on a known number”: never the number in the email/request
- “When in doubt, shout it out”: #security-help channel or hotline

## Communications Kit (copy/paste)
- **Slack/Email nudge**: “Security quick win: use the Report Phish button. Fast reports stop losses. Goal: <15 min to report.”
- **Manager brief**: “Remind teams: approve access with least privilege, lock screens, and verify payment changes by phone.”
- **Onboarding blurb**: “Install the password manager, enable MFA on SSO + email, and join #security-help for quick questions.”

## Response: What to do when something’s off
1) Report immediately (button/Slack/phone). 2) Stop interacting (don’t reply/click). 3) If opened, disconnect network, keep the window open, call security. 4) Security will contain, investigate, and guide comms.

## Roles & Owners
- Security: owns simulations, coaching, metrics, incident guidance
- Managers: reinforce behaviors weekly; approve least-privilege access
- IT: enforces device posture, SSO, logging, DLP
- HR/Comms: messaging and positive recognition

## Quick Reward Ideas
- Fastest phish reporter of the month
- Team with lowest click rate quarter-over-quarter
- Shoutouts in all-hands for great catches

Use this playbook as a living document. Adapt the cadence and modules to your risk profile and track the metrics weekly.
