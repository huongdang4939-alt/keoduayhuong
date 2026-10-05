import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingMobileBar } from './components/FloatingMobileBar';
import { Product } from './types';

export default function App() {
  const [prefilledMessage, setPrefilledMessage] = useState('');
  const [activeSection, setActiveSection] = useState('trang-chu');

  // Track active section for nav highlight
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['trang-chu', 'san-pham', 'lien-he'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInquireProduct = (product: Product, variantWeight?: string) => {
    const weightLabel = variantWeight 
      ? (variantWeight.startsWith('Hộp') ? variantWeight : `Hộp ${variantWeight}`)
      : product.weight;

    setPrefilledMessage(
      `Chào Công ty TNHH Dừa Quốc Cường, tôi quan tâm đến sản phẩm "${product.name} (${weightLabel})". Vui lòng tư vấn giá sỉ / số lượng lớn và chính sách giao hàng.`
    );
    const contactSection = document.getElementById('lien-he');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] font-body text-[#3B2516]">
      {/* Header */}
      <Header activeSection={activeSection} />

      <main className="flex-1">
        {/* Trang Chủ / Hero */}
        <Hero
          onExploreProducts={() => {
            const el = document.getElementById('san-pham');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          onContactClick={() => {
            const el = document.getElementById('lien-he');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Sản Phẩm / Products */}
        <Products onInquireProduct={handleInquireProduct} />

        {/* Liên Hệ / Contact */}
        <Contact prefilledMessage={prefilledMessage} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Hotline / Mobile Quick Bar */}
      <FloatingMobileBar />
    </div>
  );
}
