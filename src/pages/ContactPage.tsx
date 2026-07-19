import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Clock,
  CheckCircle,
  ShieldCheck,
  Send,
} from "lucide-react";
import { useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser"; // Ensure you have this package imported or configured globally

export default function ContactPage() {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Direct fallback to push the global window object to coordinate 0,0 instantly
    window.scrollTo({ top: 0, behavior: "instant" });

    if (location.hash === "#contact-hero") {
      const el = document.getElementById("contact-hero");
      if (el) {
        setTimeout(
          () => el.scrollIntoView({ behavior: "smooth", block: "start" }),
          80,
        );
      }
    }
  }, [location]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const SERVICE_ID = "service_vi0p04d";
    const TEMPLATE_ID = "template_s8897th";
    const PUBLIC_KEY = "aa3rg1srHmLVgN7wW";

    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      phone_number: formData.phone,
      company_name: formData.company,
      service_requested: formData.service,
      message_details: formData.message,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        setSubmitted(true);
        setIsSubmitting(false);

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
        setIsSubmitting(false);
        alert(
          "Something went wrong. Please try again or email us directly at info@myitguard.com",
        );
        console.error("EmailJS Error details:", error);
      });
  };

  const contactDetails = [
    {
      icon: <Phone className="w-5 h-5 text-emerald-400" />,
      label: "Telephone",
      value: "+1 (240) 729-0299",
      href: "tel:+12407290299",
    },
    {
      icon: <Mail className="w-5 h-5 text-emerald-400" />,
      label: "Secure Email",
      value: "info@myitguard.com",
      href: "mailto:info@myitguard.com",
    },
    {
      icon: <Clock className="w-5 h-5 text-emerald-400" />,
      label: "Office Hours",
      value: "Mon - Fri: 8:00 AM - 6:00 PM EST",
      href: null,
    },
  ];

  const glassCardClass =
    "flex flex-col justify-between h-full bg-slate-900/40 border border-slate-800/80 rounded-2xl p-8 lg:p-10 backdrop-blur-md shadow-xl transition-all duration-300 hover:border-emerald-500/30 hover:shadow-[0_0_25px_rgba(52,211,153,0.05)]";

  return (
    <section
      id="contact-hero"
      className="pt-28 pb-24 relative font-sans overflow-hidden bg-slate-900/50 text-white border-t border-slate-900/60"
    >
      {/* Background Accent Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b10_1px,transparent_1px),linear-gradient(to_bottom,#1e293b10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-4">
            <ShieldCheck className="w-4 h-4" />
            <span>Secure Terminal Gateway</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Start Your <span className="gradient-text">Security Journey</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Ready to strengthen your cybersecurity posture? Contact us for a
            free consultation and systemic risk analysis.
          </p>
        </motion.div>

        {/* Layout Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Left Column: Contact Parameters Glass Card */}
          <motion.div
            className={glassCardClass}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div>
              <h3 className="text-2xl font-bold tracking-tight mb-4 text-white">
                Contact Us
              </h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Have specific implementation requirements or operational
                auditing deadlines approaching? Reach out to interface directly
                with an advisor.
              </p>

              <div className="space-y-6">
                {contactDetails.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/60 mt-0.5 shadow-inner">
                      {item.icon}
                    </div>
                    <div>
                      <span className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-0.5">
                        {item.label}
                      </span>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-slate-200 font-medium hover:text-emerald-400 transition-colors duration-200"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-slate-300 font-medium">
                          {item.value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 pt-6 border-t border-slate-900/60 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-mono text-slate-400 tracking-wider">
                COMMUNICATION FLOWWAYS: SECURE & ON-LINE
              </span>
            </div>
          </motion.div>

          {/* Right Column: Interaction Form Glass Card */}
          <motion.div
            className={`${glassCardClass} relative min-h-[550px] justify-center`}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5 w-full">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-700 focus:outline-none focus:border-emerald-500/80 focus:ring-1 focus:ring-emerald-500/30 transition-all duration-200"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                      Work Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-700 focus:outline-none focus:border-emerald-500/80 focus:ring-1 focus:ring-emerald-500/30 transition-all duration-200"
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-700 focus:outline-none focus:border-emerald-500/80 focus:ring-1 focus:ring-emerald-500/30 transition-all duration-200"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-700 focus:outline-none focus:border-emerald-500/80 focus:ring-1 focus:ring-emerald-500/30 transition-all duration-200"
                      placeholder="Acme Corp"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Requested Service Line
                  </label>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-300 focus:outline-none focus:border-emerald-500/80 focus:ring-1 focus:ring-emerald-500/30 transition-all duration-200"
                  >
                    <option value="" className="text-slate-600">
                      Select Service
                    </option>
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
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Message Details
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-700 focus:outline-none focus:border-emerald-500/80 focus:ring-1 focus:ring-emerald-500/30 transition-all duration-200 resize-none h-32"
                    placeholder="Tell us about your security needs..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group relative flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 p-3.5 text-sm font-semibold text-white hover:from-emerald-400 hover:to-teal-500 transition-all duration-300 shadow-lg shadow-emerald-500/10 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>
                    {isSubmitting ? "Transmitting..." : "Submit Request"}
                  </span>
                  {!isSubmitting && (
                    <Send className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  )}
                </button>

                <p className="text-xs text-slate-500 text-center font-mono tracking-wide uppercase">
                  Response Window: Within 24 Business Hours
                </p>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-slate-900/40 rounded-2xl backdrop-blur-sm"
              >
                <CheckCircle className="w-16 h-16 mb-4 text-emerald-400 drop-shadow-[0_0_12px_rgba(52,211,153,0.3)]" />
                <h4 className="text-2xl font-bold mb-2 text-white">
                  Transmission Successful
                </h4>
                <p className="text-slate-400 max-w-xs text-sm">
                  Your request has been successfully routed. An advisor will
                  review your variables shortly.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
