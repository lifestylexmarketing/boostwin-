import { useState } from 'react';
import { Mail, MessageSquare, Clock, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const quickFaqs = [
    {
      icon: Clock,
      question: 'How fast do you respond?',
      answer: 'We typically respond to all inquiries within 24 hours during business days.',
    },
    {
      icon: MessageSquare,
      question: 'Can I get a demo?',
      answer: 'Yes! Request a demo through the contact form and we\'ll schedule a personalized walkthrough.',
    },
    {
      icon: HelpCircle,
      question: 'Do you offer enterprise plans?',
      answer: 'Absolutely. We provide custom solutions for universities, career centers, and organizations.',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden py-16 sm:py-24 lg:py-32" style={{ backgroundColor: '#A0C9EC' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold" style={{ color: '#13315C' }}>
              Get in Touch
            </h1>
            <p className="mt-6 text-base sm:text-lg leading-7 sm:leading-8" style={{ color: '#13315C' }}>
              Have questions? Want to see a demo? We're here to help.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact Form and Info */}
      <div className="py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 sm:gap-16 lg:grid-cols-2">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl mb-4 sm:mb-6" style={{ color: '#13315C' }}>
                Send us a message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm sm:text-base" style={{ color: '#13315C' }}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 transition-all"
                    style={{ borderColor: '#A0C9EC', '--tw-ring-color': '#1982FC' } as any}
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm sm:text-base" style={{ color: '#13315C' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 transition-all"
                    style={{ borderColor: '#A0C9EC', '--tw-ring-color': '#1982FC' } as any}
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block mb-2 text-sm sm:text-base" style={{ color: '#13315C' }}>
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 transition-all"
                    style={{ borderColor: '#A0C9EC', '--tw-ring-color': '#1982FC' } as any}
                  >
                    <option value="">Select a subject</option>
                    <option value="demo">Request a Demo</option>
                    <option value="pricing">Pricing Question</option>
                    <option value="support">Technical Support</option>
                    <option value="enterprise">Enterprise Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm sm:text-base" style={{ color: '#13315C' }}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full rounded-lg border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 transition-all resize-none"
                    style={{ borderColor: '#A0C9EC', '--tw-ring-color': '#1982FC' } as any}
                    placeholder="Tell us how we can help..."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  className="w-full rounded-lg px-6 py-3 font-semibold text-white shadow-sm transition-all hover:opacity-90 active:scale-95"
                  style={{ backgroundColor: '#1982FC' }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl mb-4 sm:mb-6" style={{ color: '#13315C' }}>
                Other ways to reach us
              </h2>
              
              <div className="space-y-6 sm:space-y-8">
                <motion.div 
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="rounded-lg p-3 ring-1 ring-gray-900/10" style={{ backgroundColor: '#D8EEFF' }}>
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6" style={{ color: '#1982FC' }} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-sm sm:text-base" style={{ color: '#13315C' }}>
                      Email Support
                    </h3>
                    <p className="text-sm sm:text-base" style={{ color: '#666666' }}>
                      <a href="mailto:support@boostwin.ai" className="hover:underline" style={{ color: '#1982FC' }}>
                        support@boostwin.ai
                      </a>
                    </p>
                    <p className="text-xs sm:text-sm mt-1" style={{ color: '#666666' }}>
                      Average response time: 24 hours
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="rounded-lg p-3 ring-1 ring-gray-900/10" style={{ backgroundColor: '#D8EEFF' }}>
                    <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6" style={{ color: '#1982FC' }} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-sm sm:text-base" style={{ color: '#13315C' }}>
                      Live Chat
                    </h3>
                    <p className="text-sm sm:text-base" style={{ color: '#666666' }}>
                      Available Monday-Friday, 9am-6pm EST
                    </p>
                    <p className="text-xs sm:text-sm mt-1" style={{ color: '#666666' }}>
                      Click the chat icon in the bottom right
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Quick FAQs */}
              <div className="mt-10 sm:mt-12">
                <h3 className="text-xl sm:text-2xl mb-4 sm:mb-6" style={{ color: '#13315C' }}>
                  Quick Answers
                </h3>
                <div className="space-y-4 sm:space-y-6">
                  {quickFaqs.map((faq, index) => (
                    <motion.div 
                      key={faq.question} 
                      className="rounded-lg p-4 sm:p-6 shadow-sm ring-1 ring-gray-900/5" 
                      style={{ backgroundColor: '#D8EEFF' }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-start gap-3">
                        <faq.icon className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 mt-1" style={{ color: '#1982FC' }} />
                        <div>
                          <h4 className="font-semibold mb-2 text-sm sm:text-base" style={{ color: '#13315C' }}>
                            {faq.question}
                          </h4>
                          <p className="text-xs sm:text-sm" style={{ color: '#666666' }}>
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Response Time Note */}
      <div className="py-12 sm:py-16" style={{ backgroundColor: '#D8EEFF' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-semibold mb-3" style={{ color: '#13315C' }}>
              Expected Response Time
            </h3>
            <p className="text-lg" style={{ color: '#666666' }}>
              We aim to respond to all inquiries within 24 hours during business days (Monday-Friday). For urgent 
              matters, please mention "URGENT" in your subject line.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}