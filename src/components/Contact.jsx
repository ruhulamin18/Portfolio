import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Send, MessageSquare } from 'lucide-react';

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

    const whatsappMessage =
      `*New Portfolio Message*%0A%0A` +
      `*Name:* ${name}%0A` +
      `*Email:* ${email}%0A` +
      `*Message:* ${message}`;

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
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-400/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Get In <span className="text-cyan-500">Touch.</span>
            </h2>

            <p className="text-gray-600 text-lg mb-10 max-w-md">
              Feel free to contact me for project collaborations,
              internship opportunities, freelance work, or software
              development related discussions.
            </p>

            <div className="space-y-6">

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-center text-green-500 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                  <MessageSquare size={20} />
                </div>

                <div>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                    WhatsApp
                  </p>

                  <p className="text-gray-900 font-medium">
                    +880 1816-648095
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:mdruhulaminridoy18@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-center text-cyan-500 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-300">
                  <Mail size={20} />
                </div>

                <div>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                    Email
                  </p>

                  <p className="text-gray-900 font-medium">
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
                <div className="w-12 h-12 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-center text-orange-500 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                  <Github size={20} />
                </div>

                <div>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                    GitHub
                  </p>

                  <p className="text-gray-900 font-medium">
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
            className="p-8 rounded-3xl bg-white border border-gray-200 shadow-lg"
          >
            <form
              className="space-y-6"
              onSubmit={handleSubmit}
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1">
                    Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full mt-2 px-4 py-3 rounded-xl bg-white border border-gray-300 text-gray-900 focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full mt-2 px-4 py-3 rounded-xl bg-white border border-gray-300 text-gray-900 focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1">
                  Message
                </label>

                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full mt-2 px-4 py-3 rounded-xl bg-white border border-gray-300 text-gray-900 focus:outline-none focus:border-cyan-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-cyan-600 text-white rounded-xl font-medium hover:bg-cyan-700 transition-all flex items-center justify-center gap-2"
              >
                Send via WhatsApp
                <Send size={18} />
              </button>

              <p className="text-center text-[10px] text-gray-500 uppercase tracking-widest">
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