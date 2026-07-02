import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, CheckCircle, Shield, Send, AlertTriangle } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export default function ContactPage() {
  const location = useLocation();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name:'', email:'', company:'', employees:'', service:'', urgency:'standard', message:'' });

  useEffect(() => {
    if (location.hash === '#contact-hero') {
      const el = document.getElementById('contact-hero');
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
      }
    }
  }, [location]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(()=>setSent(false), 3500);
  };

  return (
    <section className="pt-28 pb-24 relative">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          id="contact-hero"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 badge-cyber mb-4">
            <Shield className="w-4 h-4" />
            <span>Secure Contact</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Talk to a <span className="gradient-text">security architect</span></h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Free 30-minute risk assessment. No sales pressure — just clear next steps for your security program.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold mb-6">Request your security consult</h2>
              {!sent ? (
                <form onSubmit={submit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-slate-300 mb-1.5 block">Full name</label>
                      <input className="input-dark w-full" required value={form.name} onChange={e=>setForm({...form, name:e.target.value})} />
                    </div>
                    <div>
                      <label className="text-sm text-slate-300 mb-1.5 block">Work email</label>
                      <input type="email" className="input-dark w-full" required value={form.email} onChange={e=>setForm({...form, email:e.target.value})} />
                    </div>
                    <div>
                      <label className="text-sm text-slate-300 mb-1.5 block">Company</label>
                      <input className="input-dark w-full" required value={form.company} onChange={e=>setForm({...form, company:e.target.value})} />
                    </div>
                    <div>
                      <label className="text-sm text-slate-300 mb-1.5 block">Team size</label>
                      <select className="input-dark w-full" value={form.employees} onChange={e=>setForm({...form, employees:e.target.value})}>
                        <option value="">Select</option>
                        <option>1-10</option>
                        <option>11-50</option>
                        <option>51-200</option>
                        <option>200-1000</option>
                        <option>1000+</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-slate-300 mb-1.5 block">Primary interest</label>
                      <select className="input-dark w-full" value={form.service} onChange={e=>setForm({...form, service:e.target.value})}>
                        <option value="">Choose a service</option>
                        <option>Virtual CISO</option>
                        <option>HIPAA Compliance</option>
                        <option>SOC 2 Readiness</option>
                        <option>CMMC</option>
                        <option>Risk Assessment</option>
                        <option>Security Training</option>
                        <option>Incident Response</option>
                        <option>Learn more about MyITGuard/Plans</option>
                        <option>Account Management</option>
                        <option>Technical Support</option>
                        <option>Invoice and Billing</option>
                        <option>Other Inquiry</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm text-slate-300 mb-1.5 block">Urgency</label>
                      <select className="input-dark w-full" value={form.urgency} onChange={e=>setForm({...form, urgency:e.target.value})}>
                        <option value="standard">Standard (2-3 days)</option>
                        <option value="priority">Priority (24h)</option>
                        <option value="emergency">Active incident</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm text-slate-300 mb-1.5 block">How can we help?</label>
                    <textarea className="input-dark w-full h-32 resize-none" placeholder="Briefly describe your security goals, compliance needs, or current challenges..."
                      required value={form.message} onChange={e=>setForm({...form, message:e.target.value})} />
                  </div>

                  <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                    <Send className="w-4 h-4" /> Send secure request
                  </button>
                  <p className="text-xs text-slate-400 text-center">TLS encrypted • SOC 2 aligned intake • Response within 24 hrs</p>
                </form>
              ) : (
                <motion.div initial={{opacity:0, scale:.96}} animate={{opacity:1, scale:1}} className="text-center py-16">
                  <CheckCircle className="w-16 h-16 mx-auto mb-4" style={{ color: '#00ff88' }} />
                  <h3 className="text-2xl font-bold mb-2">Request received</h3>
                  <p className="text-slate-300">A MyITGuard security architect will reach out within 24 hours.</p>
                </motion.div>
              )}
            </div>
          </div>

          <div className="lg:col-span-2 space-y-5">
            <div className="glass-card p-6">
              <h3 className="font-bold text-lg mb-4">Direct channels</h3>
              <div className="space-y-4 text-sm">
                <div className="flex gap-3">
                  <Phone className="w-5 h-5 mt-0.5" style={{color:'#00ff88'}}/>
                  <div><div className="text-slate-400">Security line</div><div className="text-white font-medium">+1 (555) 123-4567</div></div>
                </div>
                <div className="flex gap-3">
                  <Mail className="w-5 h-5 mt-0.5" style={{color:'#00d4ff'}}/>
                  <div><div className="text-slate-400">Email</div><div className="text-white font-medium">security@myitguard.com</div></div>
                </div>
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 mt-0.5" style={{color:'#a78bfa'}}/>
                  <div><div className="text-slate-400">HQ</div><div className="text-white font-medium">123 Security Boulevard<br/>Cyber City, TC 12345</div></div>
                </div>
                <div className="flex gap-3">
                  <Clock className="w-5 h-5 mt-0.5" style={{color:'#f472b6'}}/>
                  <div><div className="text-slate-400">SOC hours</div><div className="text-white font-medium">24/7/365 monitoring</div></div>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 border border-red-500/20">
              <h4 className="font-bold mb-2 text-red-300">Active security incident?</h4>
              <p className="text-sm text-slate-300 mb-4">Don’t wait on a form. Call our IR hotline immediately.</p>
              <button className="w-full py-3 rounded-xl font-semibold bg-red-500/15 text-red-300 border border-red-500/30 hover:bg-red-500/25 transition-colors flex items-center justify-center gap-2">
                <AlertTriangle className="w-4 h-4" /> IR Hotline: +1 (555) 911-SEC1
              </button>
            </div>

            <div className="glass-card p-6">
              <h4 className="font-bold mb-3">What happens next</h4>
              <ol className="space-y-3 text-sm text-slate-300">
                <li className="flex gap-3"><span className="text-cyber-green font-bold">1</span> 30-min discovery call with a CISSP</li>
                <li className="flex gap-3"><span className="text-cyber-green font-bold">2</span> Free risk snapshot & compliance map</li>
                <li className="flex gap-3"><span className="text-cyber-green font-bold">3</span> Tailored proposal with clear ROI</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
