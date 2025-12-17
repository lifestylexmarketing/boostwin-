import { Link } from 'react-router-dom';
import { Shield, Users, Target, Heart } from 'lucide-react';
import { motion } from 'motion/react';

export function About() {
  const values = [
    {
      icon: Shield,
      title: 'Transparency',
      description: 'We believe in open communication about how our AI works and what data we use.',
    },
    {
      icon: Users,
      title: 'Privacy First',
      description: 'Your data is yours. We never sell or share your personal information.',
    },
    {
      icon: Target,
      title: 'Simplicity',
      description: 'Job searching should be simple, not overwhelming. We make it effortless.',
    },
    {
      icon: Heart,
      title: 'Results Driven',
      description: 'We measure success by the interviews you land and the offers you receive.',
    },
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Co-Founder',
      image: 'https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzY1OTE5NjQ4fDA&ixlib=rb-4.1.0&q=80&w=400',
    },
    {
      name: 'Michael Chen',
      role: 'CTO & Co-Founder',
      image: 'https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzY1OTE5NjQ4fDA&ixlib=rb-4.1.0&q=80&w=400',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Product',
      image: 'https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzY1OTE5NjQ4fDA&ixlib=rb-4.1.0&q=80&w=400',
    },
    {
      name: 'David Kim',
      role: 'Head of AI',
      image: 'https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzY1OTE5NjQ4fDA&ixlib=rb-4.1.0&q=80&w=400',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden py-16 sm:py-24 lg:py-32" style={{ backgroundColor: '#A0C9EC' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-4xl text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold" style={{ color: '#13315C' }}>
              We're on a mission to revolutionize job searching
            </h1>
            <p className="mt-6 text-base sm:text-lg leading-7 sm:leading-8" style={{ color: '#13315C' }}>
              BoostWin.ai was built by job seekers, for job seekers. We know how frustrating and time-consuming the application process can be. That's why we created an intelligent platform that helps you apply to more jobs, faster and more consistently.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl mb-6 sm:mb-8" style={{ color: '#13315C' }}>
              Our Mission
            </h2>
            <p className="text-base sm:text-lg leading-7 sm:leading-8 mb-6" style={{ color: '#666666' }}>
              Job searching is broken. Spending hours filling out repetitive applications, tracking spreadsheets, and 
              waiting for responses is exhausting and inefficient.
            </p>
            <p className="text-base sm:text-lg leading-7 sm:leading-8 mb-6" style={{ color: '#666666' }}>
              BoostWin.ai was created to solve this problem. We believe that finding your dream job shouldn't require 
              sacrificing your time, sanity, or self-worth. Our platform automates the tedious parts of job searching 
              while keeping you in control of your career journey.
            </p>
            <p className="text-base sm:text-lg leading-7 sm:leading-8" style={{ color: '#666666' }}>
              We're here for students entering the workforce, professionals making career switches, and busy individuals 
              who deserve better tools to land their next opportunity.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 sm:py-24 lg:py-32" style={{ backgroundColor: '#D8EEFF' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-2xl lg:text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl" style={{ color: '#13315C' }}>
              Our Values
            </h2>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8" style={{ color: '#666666' }}>
              These principles guide everything we do at BoostWin.ai
            </p>
          </motion.div>
          
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-6 sm:gap-8 lg:max-w-none lg:grid-cols-2">
              {values.map((value, index) => (
                <motion.div 
                  key={value.title} 
                  className="flex flex-col items-start bg-white rounded-2xl p-6 sm:p-8 shadow-sm"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
                >
                  <div className="rounded-lg p-3 ring-1 ring-gray-900/10 mb-4" style={{ backgroundColor: '#1982FC' }}>
                    <value.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <dt className="font-semibold mb-2" style={{ color: '#13315C' }}>
                    {value.title}
                  </dt>
                  <dd className="text-sm sm:text-base leading-6 sm:leading-7" style={{ color: '#666666' }}>
                    {value.description}
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-2xl lg:text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl" style={{ color: '#13315C' }}>
              Meet our team
            </h2>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8" style={{ color: '#666666' }}>
              We're a diverse group of engineers, designers, and job search experts committed to your success.
            </p>
          </motion.div>
          
          <div className="mx-auto max-w-7xl grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <motion.div 
                key={member.name} 
                className="text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <img
                  className="mx-auto h-40 w-40 sm:h-48 sm:w-48 rounded-full object-cover ring-4 ring-[#D8EEFF]"
                  src={member.image}
                  alt={member.name}
                />
                <h3 className="mt-6 font-semibold" style={{ color: '#13315C' }}>
                  {member.name}
                </h3>
                <p className="mt-1 text-sm sm:text-base" style={{ color: '#666666' }}>
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Trust Section */}
      <div className="py-16 sm:py-24 lg:py-32" style={{ backgroundColor: '#D8EEFF' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-6 font-bold" style={{ color: '#13315C' }}>
              Privacy & Trust
            </h2>
            <div className="space-y-6 text-base sm:text-lg" style={{ color: '#666666' }}>
              <p>
                Your privacy is our top priority. We use industry-standard encryption to protect your data, and we never 
                sell or share your personal information with third parties.
              </p>
              <p>
                You maintain complete control over your account and data. You can view, edit, or delete your information 
                at any time. Our AI only uses the data you explicitly provide to match you with relevant job opportunities.
              </p>
              <p>
                We believe in transparency. Our AI works by analyzing job descriptions and matching them with your profile 
                to submit tailored applications on your behalf. You can review and approve applications before they're sent.
              </p>
              <p>
                Cancel anytime, no questions asked. We don't lock you into long-term contracts because we're confident 
                you'll see results and want to stay.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="rounded-3xl px-6 py-16 sm:p-16 text-center shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, #1982FC 0%, #A0C9EC 100%)',
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl text-white mb-6">
              Want to see it in action?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Book a personalized demo and discover how BoostWin.ai can transform your job search.
            </p>
            <Link
              to="/contact"
              className="inline-block rounded-lg bg-white px-8 py-3 font-semibold shadow-sm transition-all hover:bg-gray-50 hover:scale-105"
              style={{ color: '#1982FC' }}
            >
              Book a Demo
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}