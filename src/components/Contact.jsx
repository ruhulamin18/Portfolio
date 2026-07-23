import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { AnimatePresence, motion } from 'framer-motion';
import PortfolioBackground from './PortfolioBackground';
import {
  Mail,
  Github,
  Linkedin,
  Send,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';

const Contact = () => {
  const initialFormData = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const whatsappNumber = '8801816648095';
  const emailAddress = 'mdruhulaminridoy18@gmail.com';

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return;
    }

    setIsSending(true);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('Missing EmailJS environment configuration');
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: name,
          from_email: email,
          subject,
          message,
        },
        publicKey,
      );

      setSubmitStatus('success');
      setIsSubmitted(true);
    } catch (error) {
      setSubmitStatus('error');
      setIsSubmitted(true);
    } finally {
      setIsSending(false);
    }
  };

  const handleShowFormAgain = () => {
    setIsSubmitted(false);
    setSubmitStatus('');
  };

  const handleSendAnotherMessage = () => {
    setFormData(initialFormData);
    handleShowFormAgain();
  };

  const handleContactViaEmail = () => {
    window.location.href = `mailto:${emailAddress}`;
  };


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="page-shell py-24 bg-slate-50 relative overflow-hidden dark:bg-slate-950"
    >
      <PortfolioBackground variant="contact" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-950 dark:text-white">
              Let's Work <span className="text-cyan-500">Together.</span>
            </h2>

            <p className="text-slate-600 dark:text-slate-400 text-lg mb-10 max-w-md">
              I'm always open to discussing new opportunities,
              internships, project collaborations, and innovative ideas.
              Feel free to reach out and let's build something amazing together.
            </p>

            <div className="space-y-6">

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-lg bg-white border border-slate-200 shadow-sm flex items-center justify-center text-green-500 group-hover:bg-green-600 group-hover:text-white transition-all duration-300 dark:bg-white/10 dark:border-white/10">
                  <MessageSquare size={20} />
                </div>

                <div>
                  <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                    WhatsApp
                  </p>

                  <p className="text-slate-950 dark:text-white font-medium">
                    +880 1816-648095
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:mdruhulaminridoy18@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-lg bg-white border border-slate-200 shadow-sm flex items-center justify-center text-cyan-500 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-300 dark:bg-white/10 dark:border-white/10">
                  <Mail size={20} />
                </div>

                <div>
                  <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                    Email
                  </p>

                  <p className="text-slate-950 dark:text-white font-medium break-all">
                    mdruhulaminridoy18@gmail.com
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/md-ruhul-amin-r018"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-lg bg-white border border-slate-200 shadow-sm flex items-center justify-center text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300 dark:bg-white/10 dark:border-white/10">
                  <Linkedin size={20} />
                </div>

                <div>
                  <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                    LinkedIn
                  </p>

                  <p className="text-slate-950 dark:text-white font-medium break-all">
                    linkedin.com/in/md-ruhul-amin-r018
                  </p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/ruhulamin18"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-lg bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-700 group-hover:bg-black group-hover:text-white transition-all duration-300 dark:bg-white/10 dark:border-white/10 dark:text-slate-200">
                  <Github size={20} />
                </div>

                <div>
                  <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                    GitHub
                  </p>

                  <p className="text-slate-950 dark:text-white font-medium">
                    github.com/ruhulamin18
                  </p>
                </div>
              </a>

            </div>
          </motion.div>

          {/* Right Side Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-lg bg-white border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 dark:bg-white/10 dark:border-white/10 dark:shadow-black/30 min-h-[520px]"
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.28 }}
                  className="space-y-6"
                  onSubmit={handleSubmit}
                >
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-1">
                        Name
                      </label>

                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="w-full mt-2 px-4 py-3 rounded-lg bg-white border border-slate-300 text-slate-950 focus:outline-none focus:border-cyan-500 dark:bg-slate-950/70 dark:border-white/10 dark:text-white"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-1">
                        Email
                      </label>

                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full mt-2 px-4 py-3 rounded-lg bg-white border border-slate-300 text-slate-950 focus:outline-none focus:border-cyan-500 dark:bg-slate-950/70 dark:border-white/10 dark:text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-1">
                      Subject
                    </label>

                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry"
                      className="w-full mt-2 px-4 py-3 rounded-lg bg-white border border-slate-300 text-slate-950 focus:outline-none focus:border-cyan-500 dark:bg-slate-950/70 dark:border-white/10 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 ml-1">
                      Message
                    </label>

                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Write your message..."
                      className="w-full mt-2 px-4 py-3 rounded-lg bg-white border border-slate-300 text-slate-950 focus:outline-none focus:border-cyan-500 resize-none dark:bg-slate-950/70 dark:border-white/10 dark:text-white"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full py-4 bg-cyan-600 text-white rounded-lg font-medium hover:bg-cyan-500 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-80"
                  >
                    {isSending ? 'Sending...' : 'Send Message'}
                    <Send size={18} />
                  </button>
                </motion.form>
              ) : submitStatus === 'success' ? (
                <motion.div
                  key="success-panel"
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  className="min-h-[460px] h-full flex flex-col items-center justify-center text-center"
                >
                  <motion.div
                    initial={{ scale: 0.9 }}
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
                    className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-500 shadow-lg shadow-emerald-500/20 dark:bg-emerald-500/20 dark:text-emerald-300"
                  >
                    <CheckCircle2 size={42} className="drop-shadow-sm" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-slate-950 dark:text-white">
                    Message Sent Successfully!
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-7 text-slate-600 dark:text-slate-300">
                    Thank you for reaching out! Your message has been sent successfully.
                    I&apos;ll review your message and get back to you as soon as possible.
                  </p>

                  <button
                    type="button"
                    onClick={handleSendAnotherMessage}
                    className="mt-8 inline-flex items-center justify-center rounded-lg bg-cyan-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-500"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="error-panel"
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  className="min-h-[460px] h-full flex flex-col items-center justify-center text-center"
                >
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: [0, -4, 4, -3, 3, 0] }}
                    transition={{ duration: 0.7, repeat: Infinity, ease: 'easeInOut' }}
                    className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-rose-500/15 text-rose-500 shadow-lg shadow-rose-500/20 dark:bg-rose-500/20 dark:text-rose-300"
                  >
                    <AlertCircle size={42} className="drop-shadow-sm" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-slate-950 dark:text-white">
                    Message Failed to Send
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-7 text-slate-600 dark:text-slate-300">
                    Sorry, your message couldn&apos;t be sent at the moment.
                    Please check your internet connection and try again.
                    If the problem persists, you can contact me directly using the email address or WhatsApp listed on this page.
                  </p>

                  <div className="mt-8 flex flex-col sm:flex-row gap-3">
                    <button
                      type="button"
                      onClick={handleShowFormAgain}
                      className="inline-flex items-center justify-center rounded-lg bg-cyan-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-500"
                    >
                      Try Again
                    </button>

                    <button
                      type="button"
                      onClick={handleContactViaEmail}
                      className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-500 hover:text-cyan-600 dark:border-white/15 dark:bg-transparent dark:text-slate-200 dark:hover:border-cyan-400 dark:hover:text-cyan-300"
                    >
                      Contact via Email
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
