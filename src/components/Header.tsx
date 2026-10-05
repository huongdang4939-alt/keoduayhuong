import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';

interface HeaderProps {
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Trang Chủ', href: '#trang-chu', id: 'trang-chu' },
    { label: 'Sản Phẩm', href: '#san-pham', id: 'san-pham' },
    { label: 'Liên Hệ', href: '#lien-he', id: 'lien-he' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#2B6F44]/95 backdrop-blur-md shadow-md border-b border-[#235C38]'
          : 'bg-[#2B6F44] border-b border-[#235C38]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#trang-chu"
            className="group flex flex-col items-start leading-tight"
            aria-label={COMPANY_INFO.name}
          >
            <span className="font-display text-lg sm:text-2xl font-bold tracking-tight text-white group-hover:text-[#F3CD7A] transition-colors">
              {COMPANY_INFO.name}
            </span>
            <span className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-[#F3CD7A] mt-0.5">
              Cơ Sở Sản Xuất & Phân Phối Kẹo Dừa Ý Hương
            </span>
          </a>

          {/* Zone 2: Nav links */}
          <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-[#D4EAD9]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`relative py-1 transition-colors hover:text-white ${
                    isActive ? 'text-white font-semibold' : ''
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F3CD7A] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Desktop Hotline CTA */}
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 bg-[#DC2626] hover:bg-[#B91C1C] text-white border border-[#EF4444]/30 text-sm font-bold rounded-xl shadow-sm transition-all hover:scale-102 whitespace-nowrap"
            >
              <Phone className="w-4 h-4 text-white" />
              <span className="tabular-nums">{COMPANY_INFO.phone}</span>
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="md:hidden p-2 rounded-lg text-white hover:bg-white/15 transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? 'Đóng menu' : 'Mở menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#235C38] bg-[#235C38] px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-[#D4EAD9] hover:bg-white/10 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-[#275333]">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="flex items-center justify-center gap-2 w-full py-3 bg-[#DC2626] hover:bg-[#B91C1C] text-white border border-[#B91C1C] font-bold rounded-lg text-sm shadow-sm"
            >
              <Phone className="w-4 h-4 text-white" />
              <span>Gọi hotline: {COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
