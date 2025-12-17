import { Link } from 'react-router-dom';
import { Check, Zap, Target, BarChart3, Shield, Clock, ChevronDown } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { motion } from 'motion/react';

export function Home() {
  const benefits = [
    {
      icon: Zap,
      title: 'Automated Applications',
      description: 'Submit high-quality applications automatically to matching positions.',
    },
    {
      icon: BarChart3,
      title: 'Application Tracking Dashboard',
      description: 'Monitor all your applications in one centralized, easy-to-use dashboard.',
    },
    {
      icon: Target,
      title: 'Smart Filters & Targeting',
      description: 'AI-powered job matching based on your skills, experience, and preferences.',
    },
    {
      icon: Shield,
      title: 'Resume Optimization',
      description: 'Get guidance to improve your resume and profile for better results.',
    },
    {
      icon: Clock,
      title: 'Time Saved Weekly',
      description: 'Recover 10+ hours per week by automating the application process.',
    },
    {
      icon: Check,
      title: 'Stay Consistent',
      description: 'Never miss opportunities with daily automated application submissions.',
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Create Your Profile',
      description: 'Upload your resume and set your job preferences in minutes.',
    },
    {
      number: '02',
      title: 'Set Your Filters',
      description: 'Define your target roles, locations, and salary expectations.',
    },
    {
      number: '03',
      title: 'BoostWin Applies',
      description: 'Our AI automatically applies to matching jobs and tracks progress.',
    },
  ];

  const pricingTiers = [
    {
      name: 'Standard',
      price: '$37',
      period: '/month',
      description: 'We apply to 450 jobs/month using AI & custom resumes. Land more interviews. Get hired faster.',
    },
    {
      name: 'Premium',
      price: '$57',
      period: '/month',
      popular: true,
      description: 'We apply to 750 jobs/month using AI & custom resumes. Land more interviews. Get hired faster.',
    },
    {
      name: 'Elite',
      price: '$75',
      period: '/month',
      description: 'We apply to 1,500 jobs/month using AI & custom resumes. Land more interviews. Get hired faster.',
    },
  ];

  const faqs = [
    {
      question: 'How does BoostWin.ai work?',
      answer:
        'BoostWin.ai uses advanced AI to match your profile with relevant job postings and automatically submits tailored applications on your behalf. You stay in control and can review everything through your dashboard.',
    },
    {
      question: 'Is my data secure?',
      answer:
        'Yes! We use bank-level encryption to protect your personal information. Your data is never shared with third parties without your explicit consent, and you can delete your account at any time.',
    },
    {
      question: 'Can I cancel anytime?',
      answer:
        'Absolutely. There are no long-term contracts. You can cancel your subscription at any time from your account settings, and you\'ll retain access until the end of your billing period.',
    },
    {
      question: 'What types of jobs can BoostWin.ai apply to?',
      answer:
        'BoostWin.ai works with a wide range of job boards and company career pages across various industries. You can customize your preferences to target specific roles, industries, and locations.',
    },
    {
      question: 'How many applications will be submitted?',
      answer:
        'The number depends on your plan. Standard includes 450 applications per month, Premium includes 750, and Elite offers 1,500 applications. You can upgrade or downgrade at any time.',
    },
    {
      question: 'Will employers know I used automation?',
      answer:
        'No. Each application is customized to match the job posting and appears as if you submitted it manually. BoostWin.ai optimizes your materials to increase your chances of getting noticed.',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              background: 'linear-gradient(135deg, #1982FC 0%, #A0C9EC 100%)',
            }}
          />
        </div>
        
        <div className="mx-auto max-w-7xl lg:flex lg:px-8 lg:py-32">
          <motion.div 
            className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-0 lg:mx-0 lg:max-w-xl lg:flex-shrink-0 pb-8 pt-10 sm:pb-12 lg:pb-0 lg:pt-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mt-6 text-3xl sm:text-4xl lg:text-6xl" style={{ color: '#13315C' }}>
              Apply to Jobs Faster. Smarter. Automatically.
            </h1>
            <p className="mt-6 text-base sm:text-lg leading-7 sm:leading-8" style={{ color: '#666666' }}>
              BoostWin.ai helps you submit more high-quality applications with less effort, track everything in one place, and stay consistent.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-x-6">
              <Link
                to="/contact"
                className="rounded-lg px-6 sm:px-8 py-3 font-semibold text-white text-center shadow-sm transition-all hover:opacity-90 active:scale-95 sm:hover:scale-105"
                style={{ backgroundColor: '#1982FC' }}
              >
                Get Started
              </Link>
              <Link
                to="/pricing"
                className="rounded-lg px-6 sm:px-8 py-3 font-semibold text-center border-2 transition-all hover:bg-[#D8EEFF] active:scale-95 sm:hover:scale-105"
                style={{ borderColor: '#13315C', color: '#13315C' }}
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full lg:ml-10 lg:mr-0 lg:mt-2 lg:max-w-none lg:flex-none lg:self-center xl:ml-20 pb-16 sm:pb-24 lg:pb-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="lg:max-w-3xl">
              <div className="rounded-none sm:rounded-2xl shadow-2xl ring-1 ring-gray-900/10 overflow-hidden" style={{ height: '300px' }}>
                <img
                  src="https://images.unsplash.com/photo-1759593218431-6f1585bc14de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGxhcHRvcCUyMHdvcmtzcGFjZSUyMG1vZGVybnxlbnwxfHx8fDE3NjU5NTA0Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Professional working on laptop in modern workspace"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Social Proof */}
      <motion.div 
        className="py-8 sm:py-12" 
        style={{ backgroundColor: '#D8EEFF' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold" style={{ color: '#13315C' }}>
            Built for job seekers who want speed, consistency, and results.
          </p>
        </div>
      </motion.div>

      {/* Features Section */}
      <div className="py-16 sm:py-24 lg:py-32" style={{ backgroundColor: '#A0C9EC' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-base font-semibold leading-7" style={{ color: '#1982FC' }}>
              Automate Your Success
            </h2>
            <p className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold" style={{ color: '#13315C' }}>
              Everything you need to land your dream job
            </p>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 mx-auto max-w-2xl px-4" style={{ color: '#13315C' }}>
              Our AI-powered platform handles the tedious work of job applications so you can focus on
              preparing for interviews and landing offers.
            </p>
          </motion.div>
          
          <div className="mx-auto mt-12 sm:mt-16 lg:mt-24 max-w-2xl lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-6 sm:gap-8 lg:max-w-none lg:grid-cols-3">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={benefit.title} 
                  className="flex flex-col items-start"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="rounded-lg p-3 ring-1 ring-gray-900/10 mb-4" style={{ backgroundColor: '#D8EEFF' }}>
                    <benefit.icon className="h-6 w-6" style={{ color: '#1982FC' }} aria-hidden="true" />
                  </div>
                  <dt className="font-semibold" style={{ color: '#13315C' }}>
                    {benefit.title}
                  </dt>
                  <dd className="mt-2 text-sm sm:text-base leading-6 sm:leading-7" style={{ color: '#000000' }}>
                    {benefit.description}
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* How It Works Preview */}
      <div className="py-16 sm:py-24 lg:py-32" style={{ backgroundColor: '#D8EEFF' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-2xl lg:text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-base font-semibold leading-7" style={{ color: '#1982FC' }}>
              Simple Process
            </h2>
            <p className="mt-2 text-3xl sm:text-4xl" style={{ color: '#13315C' }}>
              How it works
            </p>
          </motion.div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {steps.map((step, index) => (
                <motion.div 
                  key={step.number} 
                  className="relative bg-white rounded-2xl p-8 shadow-sm ring-1 ring-gray-900/5"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
                >
                  <div
                    className="inline-flex h-12 w-12 items-center justify-center rounded-lg font-semibold text-white mb-4"
                    style={{ backgroundColor: '#1982FC' }}
                  >
                    {step.number}
                  </div>
                  <h3 className="mb-2" style={{ color: '#13315C' }}>
                    {step.title}
                  </h3>
                  <p style={{ color: '#666666' }}>{step.description}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Link
                to="/how-it-works"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-all hover:gap-4"
                style={{ color: '#1982FC' }}
              >
                Learn more about our process
                <ChevronDown className="h-4 w-4 rotate-[-90deg]" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Preview */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-2xl lg:text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-base font-semibold leading-7" style={{ color: '#1982FC' }}>
              Pricing
            </h2>
            <p className="mt-2 text-3xl sm:text-4xl" style={{ color: '#13315C' }}>
              Plans that scale with your job search
            </p>
          </motion.div>
          
          <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-3">
            {pricingTiers.map((tier, tierIdx) => (
              <motion.div
                key={tier.name}
                className={`rounded-3xl p-8 ring-1 ${
                  tier.popular
                    ? 'bg-[#13315C] ring-[#13315C] relative lg:z-10 lg:rounded-b-none shadow-2xl'
                    : 'bg-white ring-gray-900/10 lg:rounded-r-none'
                } ${tierIdx === 2 ? 'lg:rounded-l-none' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: tierIdx * 0.15 }}
                whileHover={{ scale: 1.05 }}
              >
                {tier.popular && (
                  <p className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full px-4 py-1 text-xs font-semibold text-white" style={{ backgroundColor: '#1982FC' }}>
                    Most Popular
                  </p>
                )}
                <h3
                  className="text-base font-semibold leading-7"
                  style={{ color: tier.popular ? '#A0C9EC' : '#1982FC' }}
                >
                  {tier.name}
                </h3>
                <p className="mt-4 flex items-baseline gap-x-2">
                  <span className="text-5xl font-bold tracking-tight" style={{ color: tier.popular ? '#ffffff' : '#13315C' }}>
                    {tier.price}
                  </span>
                  <span className="text-base" style={{ color: tier.popular ? '#A0C9EC' : '#666666' }}>
                    {tier.period}
                  </span>
                </p>
                <p className="mt-4 text-sm leading-6" style={{ color: tier.popular ? '#D8EEFF' : '#666666' }}>
                  {tier.description}
                </p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-all hover:gap-4"
              style={{ color: '#1982FC' }}
            >
              See full pricing details
              <ChevronDown className="h-4 w-4 rotate-[-90deg]" />
            </Link>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-24 sm:py-32" style={{ backgroundColor: '#D8EEFF' }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-2xl lg:text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-base font-semibold leading-7" style={{ color: '#1982FC' }}>
              FAQ
            </h2>
            <p className="mt-2 text-3xl sm:text-4xl" style={{ color: '#13315C' }}>
              Frequently asked questions
            </p>
          </motion.div>
          
          <motion.div 
            className="mx-auto mt-16 max-w-2xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-lg px-6 shadow-sm border-0"
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline" style={{ color: '#13315C' }}>
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base" style={{ color: '#666666' }}>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
              Start landing more interviews with less effort
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of job seekers who are using BoostWin.ai to accelerate their careers.
            </p>
            <Link
              to="/contact"
              className="inline-block rounded-lg bg-white px-8 py-3 font-semibold shadow-sm transition-all hover:bg-gray-50 hover:scale-105"
              style={{ color: '#1982FC' }}
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}