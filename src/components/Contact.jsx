import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PortfolioBackground from './PortfolioBackground';
import {
  Mail,
  Github,
  Send,
  MessageSquare,
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const whatsappNumber = '8801816648095';

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    const whatsappMessage = encodeURIComponent(
      `*New Portfolio Message*\n\n` +
        `*Name:* ${name}\n` +
        `*Email:* ${email}\n` +
        `*Message:* ${message}`,
    );

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    window.open(whatsappUrl, '_blank');
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
            className="p-8 rounded-lg bg-white border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 dark:bg-white/10 dark:border-white/10 dark:shadow-black/30"
          >
            <form
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
                className="w-full py-4 bg-cyan-600 text-white rounded-lg font-medium hover:bg-cyan-500 hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
              >
                Send via WhatsApp
                <Send size={18} />
              </button>

              <p className="text-center text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                Your message will open in WhatsApp
              </p>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
