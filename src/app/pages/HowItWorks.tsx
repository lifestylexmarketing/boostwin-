import { Link } from 'react-router-dom';
import { Upload, Settings, Zap, BarChart3, Check, X } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { motion } from 'motion/react';

export function HowItWorks() {
  const steps = [
    {
      icon: Upload,
      number: '01',
      title: 'Create your profile and upload resume',
      description:
        'Sign up in under 2 minutes. Upload your resume, and our AI will extract your skills, experience, and qualifications. You can customize and refine your profile to match your target roles.',
      details: [
        'Secure profile creation',
        'Resume parsing with AI',
        'Manual editing and customization',
        'Multiple resume versions supported',
      ],
    },
    {
      icon: Settings,
      number: '02',
      title: 'Set your job preferences and filters',
      description:
        'Define what you\'re looking for—job titles, industries, locations, salary range, and company size. Our smart filters ensure you only apply to roles that match your criteria.',
      details: [
        'Customizable job titles and keywords',
        'Location preferences (remote, hybrid, on-site)',
        'Salary expectations',
        'Company culture and size filters',
      ],
    },
    {
      icon: Zap,
      number: '03',
      title: 'BoostWin.ai applies and tracks progress',
      description:
        'Sit back while our AI scans job boards, identifies matching opportunities, and submits tailored applications on your behalf. Every application is customized to increase your chances.',
      details: [
        'Automated job board scanning',
        'Tailored cover letters',
        'Application tracking in real-time',
        'Daily application quota based on your plan',
      ],
    },
    {
      icon: BarChart3,
      number: '04',
      title: 'You review results and optimize',
      description:
        'Monitor your applications in a centralized dashboard. See which companies you\'ve applied to, track responses, and get insights to improve your profile for better results.',
      details: [
        'Real-time application status',
        'Response rate analytics',
        'Profile optimization suggestions',
        'Interview preparation resources',
      ],
    },
  ];

  const comparison = [
    {
      feature: 'Finding job postings',
      you: false,
      boostwin: true,
    },
    {
      feature: 'Filtering irrelevant jobs',
      you: false,
      boostwin: true,
    },
    {
      feature: 'Filling out application forms',
      you: false,
      boostwin: true,
    },
    {
      feature: 'Writing cover letters',
      you: false,
      boostwin: true,
    },
    {
      feature: 'Tracking applications',
      you: false,
      boostwin: true,
    },
    {
      feature: 'Setting preferences and goals',
      you: true,
      boostwin: false,
    },
    {
      feature: 'Reviewing applications before sending',
      you: true,
      boostwin: false,
    },
    {
      feature: 'Interviewing and negotiations',
      you: true,
      boostwin: false,
    },
  ];

  const faqs = [
    {
      question: 'How does the AI customize applications?',
      answer:
        'Our AI analyzes each job description and matches it with your skills and experience. It then creates a tailored cover letter and adjusts your resume highlights to align with the specific role requirements.',
    },
    {
      question: 'Can I review applications before they\'re sent?',
      answer:
        'Yes! You can enable manual approval in your settings. With this option, you\'ll receive notifications for each application and can approve or decline before it\'s submitted.',
    },
    {
      question: 'What job boards does BoostWin.ai support?',
      answer:
        'We integrate with major platforms including LinkedIn, Indeed, Glassdoor, ZipRecruiter, and hundreds of company career pages. We\'re constantly adding more sources.',
    },
    {
      question: 'How long does it take to see results?',
      answer:
        'Most users see their first interview invitations within 1-2 weeks. Results depend on your industry, experience level, and job market conditions. Our AI optimizes over time based on your response rates.',
    },
    {
      question: 'What if I want to pause applications?',
      answer:
        'You can pause and resume applications at any time from your dashboard. This is useful if you\'re deep in interview processes or taking a break from your job search.',
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
              How BoostWin.ai Works
            </h1>
            <p className="mt-6 text-base sm:text-lg leading-7 sm:leading-8" style={{ color: '#13315C' }}>
              A simple, powerful process to accelerate your job search and land more interviews.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Steps Section */}
      <div className="py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 sm:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className={`lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="inline-flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-lg font-bold text-white text-xl sm:text-2xl mb-4 sm:mb-6" style={{ backgroundColor: '#1982FC' }}>
                    {step.number}
                  </div>
                  <h2 className="text-2xl sm:text-3xl mb-4" style={{ color: '#13315C' }}>
                    {step.title}
                  </h2>
                  <p className="text-base sm:text-lg mb-6" style={{ color: '#666666' }}>
                    {step.description}
                  </p>
                  <ul className="space-y-3">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <Check className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0 mt-0.5" style={{ color: '#1982FC' }} />
                        <span className="text-sm sm:text-base" style={{ color: '#666666' }}>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <motion.div 
                  className={`mt-10 lg:mt-0 ${index % 2 === 1 ? 'lg:order-1' : ''}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="rounded-2xl p-8 ring-1 ring-gray-900/10 flex items-center justify-center" style={{ backgroundColor: '#D8EEFF', minHeight: '250px' }}>
                    <step.icon className="h-24 w-24 sm:h-32 sm:w-32" style={{ color: '#1982FC' }} />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Comparison Table */}
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
              What you control vs. what we automate
            </h2>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8" style={{ color: '#666666' }}>
              You stay in the driver's seat while we handle the heavy lifting.
            </p>
          </motion.div>
          
          <motion.div 
            className="mx-auto max-w-4xl overflow-x-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="overflow-hidden rounded-2xl bg-white shadow-lg min-w-[500px]">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200" style={{ backgroundColor: '#F8F9FA' }}>
                    <th className="py-3 sm:py-4 px-4 sm:px-6 text-left text-sm sm:text-base font-semibold" style={{ color: '#13315C' }}>
                      Task
                    </th>
                    <th className="py-3 sm:py-4 px-4 sm:px-6 text-center text-sm sm:text-base font-semibold" style={{ color: '#13315C' }}>
                      You Control
                    </th>
                    <th className="py-3 sm:py-4 px-4 sm:px-6 text-center text-sm sm:text-base font-semibold" style={{ color: '#13315C' }}>
                      We Automate
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((item, index) => (
                    <motion.tr
                      key={index}
                      className="border-b border-gray-100 last:border-0"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                    >
                      <td className="py-3 sm:py-4 px-4 sm:px-6 text-sm sm:text-base" style={{ color: '#666666' }}>
                        {item.feature}
                      </td>
                      <td className="py-3 sm:py-4 px-4 sm:px-6 text-center">
                        {item.you ? (
                          <Check className="h-5 w-5 sm:h-6 sm:w-6 mx-auto" style={{ color: '#1982FC' }} />
                        ) : (
                          <X className="h-5 w-5 sm:h-6 sm:w-6 mx-auto" style={{ color: '#666666' }} />
                        )}
                      </td>
                      <td className="py-3 sm:py-4 px-4 sm:px-6 text-center">
                        {item.boostwin ? (
                          <Check className="h-5 w-5 sm:h-6 sm:w-6 mx-auto" style={{ color: '#1982FC' }} />
                        ) : (
                          <X className="h-5 w-5 sm:h-6 sm:w-6 mx-auto" style={{ color: '#666666' }} />
                        )}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Process FAQ */}
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
              Process Questions
            </h2>
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
                  className="rounded-lg px-4 sm:px-6 shadow-sm border"
                  style={{ backgroundColor: '#D8EEFF', borderColor: '#A0C9EC' }}
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
      <div className="py-16 sm:py-24 lg:py-32" style={{ backgroundColor: '#D8EEFF' }}>
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
              Ready to automate the hardest part of job searching?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of job seekers who are landing more interviews with BoostWin.ai.
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