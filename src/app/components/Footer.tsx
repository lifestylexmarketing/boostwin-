import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  const navigation = {
    main: [
      { name: 'Home', href: '/' },
      { name: 'About Us', href: '/about' },
      { name: 'How It Works', href: '/how-it-works' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Contact', href: '/contact' },
    ],
    social: [
      { name: 'Facebook', icon: Facebook, href: '#' },
      { name: 'Twitter', icon: Twitter, href: '#' },
      { name: 'LinkedIn', icon: Linkedin, href: '#' },
      { name: 'Instagram', icon: Instagram, href: '#' },
    ],
  };

  return (
    <footer className="bg-[#13315C]">
      <div className="mx-auto max-w-7xl overflow-hidden px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="mb-8 sm:mb-12 text-center">
          <Link to="/" className="text-2xl sm:text-3xl font-bold text-white">
            BoostWin.ai
          </Link>
          <p className="mt-4 text-sm sm:text-base text-[#A0C9EC] max-w-md mx-auto px-4">
            Empowering job seekers with AI-driven automation to land their dream careers faster.
          </p>
        </div>
        
        <nav className="mb-6 sm:-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-8 lg:space-x-12" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-4 sm:pb-6">
              <Link
                to={item.href}
                className="text-sm leading-6 text-[#D8EEFF] hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        
        <div className="mt-8 sm:mt-10 flex justify-center space-x-8 sm:space-x-10">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[#A0C9EC] hover:text-white transition-colors"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        
        <p className="mt-8 sm:mt-10 text-center text-xs leading-5 text-[#A0C9EC] px-4">
          &copy; {new Date().getFullYear()} BoostWin.ai. All rights reserved. |{' '}
          <a href="mailto:support@boostwin.ai" className="hover:text-white transition-colors">
            support@boostwin.ai
          </a>
        </p>
      </div>
    </footer>
  );
}