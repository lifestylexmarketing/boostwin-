import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { motion } from 'motion/react';

export function Pricing() {
  const tiers = [
    {
      name: 'Standard',
      price: '$37',
      period: '/month',
      description: 'We apply to 450 jobs/month using AI & custom resumes. Land more interviews. Get hired faster.',
      features: [
        '450 job applications per month',
        'AI-powered job matching',
        'Custom resume tailoring',
        'Application tracking dashboard',
        'Email support',
        'Basic filters (location, industry)',
      ],
      cta: 'Join Now',
    },
    {
      name: 'Premium',
      price: '$57',
      period: '/month',
      popular: true,
      description: 'We apply to 750 jobs/month using AI & custom resumes. Land more interviews. Get hired faster.',
      features: [
        '750 job applications per month',
        'AI-powered job matching',
        'Custom resume tailoring',
        'Advanced analytics dashboard',
        'Priority email support',
        'Advanced filters (salary, company size)',
        'Cover letter customization',
        'Resume optimization tips',
      ],
      cta: 'Join Now',
    },
    {
      name: 'Elite',
      price: '$75',
      period: '/month',
      description: 'We apply to 1,500 jobs/month using AI & custom resumes. Land more interviews. Get hired faster.',
      features: [
        '1,500 job applications per month',
        'AI-powered job matching',
        'Custom resume tailoring',
        'White-glove tracking dashboard',
        'Priority email support',
        'Custom filter creation',
        'Priority application targeting',
        'Weekly resume reviews',
        'Interview preparation resources',
        'Dedicated success manager',
      ],
      cta: 'Join Now',
    },
  ];

  const faqs = [
    {
      question: 'How does the monthly pricing work?',
      answer:
        'You\'re billed monthly on the date you sign up. You can cancel anytime and you\'ll retain access until the end of your current billing cycle. No prorated refunds.',
    },
    {
      question: 'Can I change plans?',
      answer:
        'Yes! You can upgrade or downgrade your plan at any time from your account settings. Changes take effect at the start of your next billing cycle.',
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'We accept all major credit cards (Visa, Mastercard, American Express) and PayPal. All payments are processed securely through industry-standard encryption.',
    },
    {
      question: 'What happens if I cancel?',
      answer:
        'You can cancel anytime with no penalties or fees. You\'ll continue to have access to your account until the end of your current billing period. Your data is retained for 30 days in case you want to reactivate.',
    },
    {
      question: 'Do you offer enterprise or team plans?',
      answer:
        'Yes, we offer custom enterprise solutions for universities, career centers, and recruiting agencies. Contact us to discuss volume pricing and custom features.',
    },
    {
      question: 'Can I cancel anytime?',
      answer:
        'Absolutely. There are no long-term contracts. You can cancel your subscription at any time from your account settings, and you will retain access until the end of your billing period.',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden py-16 sm:py-24 lg:py-32" style={{ backgroundColor: '#A0C9EC' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="mx-auto text-center flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold" style={{ color: '#13315C' }}>
              Simple, Transparent Pricing
            </h1>
            <p className="mt-6 text-base sm:text-lg leading-7 sm:leading-8 max-w-2xl" style={{ color: '#13315C' }}>
              Choose the plan that fits your job search needs. Cancel anytime. No long-term contracts.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Pricing Tiers */}
      <div className="py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {tiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                className={`rounded-3xl p-6 sm:p-8 ring-1 ${
                  tier.popular
                    ? 'bg-[#13315C] ring-[#13315C] relative shadow-2xl sm:scale-105'
                    : 'bg-white ring-gray-900/10'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ scale: tier.popular ? 1.05 : 1.03 }}
              >
                {tier.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full px-4 sm:px-6 py-1 sm:py-2 text-xs sm:text-sm font-semibold text-white shadow-lg" style={{ backgroundColor: '#1982FC' }}>
                    Most Popular
                  </div>
                )}
                
                <h3
                  className="text-lg sm:text-xl font-semibold mb-2"
                  style={{ color: tier.popular ? '#A0C9EC' : '#1982FC' }}
                >
                  {tier.name}
                </h3>
                
                <div className="mt-4 mb-6">
                  <span className="text-4xl sm:text-5xl font-bold tracking-tight" style={{ color: tier.popular ? '#ffffff' : '#13315C' }}>
                    {tier.price}
                  </span>
                  <span className="text-sm sm:text-base ml-2" style={{ color: tier.popular ? '#A0C9EC' : '#666666' }}>
                    {tier.period}
                  </span>
                </div>
                
                <p className="mb-6 sm:mb-8 text-sm" style={{ color: tier.popular ? '#D8EEFF' : '#666666' }}>
                  {tier.description}
                </p>
                
                <Link
                  to="/contact"
                  className={`block w-full rounded-lg px-6 py-3 text-center font-semibold shadow-sm transition-all active:scale-95 sm:hover:scale-105 ${
                    tier.popular
                      ? 'bg-white text-[#1982FC] hover:bg-gray-50'
                      : 'bg-[#1982FC] text-white hover:opacity-90'
                  }`}
                >
                  {tier.cta}
                </Link>
                
                <ul className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 mt-0.5" style={{ color: tier.popular ? '#A0C9EC' : '#1982FC' }} />
                      <span className="text-xs sm:text-sm" style={{ color: tier.popular ? '#D8EEFF' : '#666666' }}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 sm:mt-12 text-center">
            <p className="text-sm" style={{ color: '#666666' }}>
              Cancel anytime. No long-term contracts. 7-day money-back guarantee.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
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
              Pricing FAQs
            </h2>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8" style={{ color: '#666666' }}>
              Have questions? We've got answers.
            </p>
          </motion.div>
          
          <motion.div 
            className="mx-auto max-w-3xl"
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
                  className="bg-white rounded-lg px-4 sm:px-6 shadow-sm border-0"
                >
                  <AccordionTrigger className="text-left text-sm sm:text-base font-semibold hover:no-underline" style={{ color: '#13315C' }}>
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base" style={{ color: '#666666' }}>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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
              Ready to accelerate your job search?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Choose a plan and start landing more interviews today.
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