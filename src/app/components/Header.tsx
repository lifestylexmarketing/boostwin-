import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 pb-4 sm:pb-6" aria-label="Global">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
              style={{ color: '#13315C' }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Toggle menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          
          <div className="flex flex-1 justify-center lg:flex-1 lg:justify-start">
            <Link to="/" className="-m-1.5 p-1.5">
              <img className="h-16 w-auto sm:h-20" src="/assets/logo.png" alt="BoostWin.ai" />
            </Link>
          </div>
          
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-base font-semibold transition-colors ${
                  isActive(item.href)
                    ? 'text-[#1982FC]'
                    : 'text-[#13315C] hover:text-[#1982FC]'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              to="/contact"
              className="rounded-lg px-4 py-2 font-semibold text-white shadow-sm transition-all hover:opacity-90 hover:scale-105"
              style={{ backgroundColor: '#1982FC' }}
            >
              Get Started
            </Link>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="space-y-2 py-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block rounded-lg px-3 py-2 text-base font-semibold ${
                    isActive(item.href)
                      ? 'bg-[#D8EEFF] text-[#1982FC]'
                      : 'text-[#13315C] hover:bg-[#D8EEFF]'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block rounded-lg px-3 py-2.5 text-base font-semibold text-white shadow-sm"
                style={{ backgroundColor: '#1982FC' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}