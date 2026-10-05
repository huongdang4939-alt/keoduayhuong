import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';

export const FloatingMobileBar: React.FC = () => {
  return (
    <>
      {/* Mobile Sticky Bottom Action Bar (< md) - height ~56px */}
      <aside
        aria-label="Thanh liên hệ nhanh"
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#2B6F44]/95 backdrop-blur-md border-t border-[#235C38] px-3 py-2 shadow-lg"
      >
        <div className="grid grid-cols-2 gap-2.5 items-center max-w-md mx-auto">
          {/* Main Hotline Call Button */}
          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="flex items-center justify-center gap-2 py-2.5 px-3 bg-[#DC2626] text-white border border-[#B91C1C] rounded-xl font-bold text-xs sm:text-sm shadow-sm active:scale-98 transition-transform"
          >
            <div className="w-5 h-5 rounded-full bg-white/20 text-white flex items-center justify-center animate-pulse">
              <Phone className="w-3.5 h-3.5" />
            </div>
            <span className="tabular-nums">Gọi {COMPANY_INFO.phone}</span>
          </a>

          {/* Chat Zalo Button */}
          <a
            href={COMPANY_INFO.zaloUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 py-2.5 px-3 bg-[#0068FF] text-white rounded-xl font-semibold text-xs sm:text-sm shadow-xs active:scale-98 transition-transform"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat Zalo</span>
          </a>
        </div>
      </aside>

      {/* Desktop / Tablet Floating Quick Action Button (>= md) at bottom-right */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-3 pointer-events-auto">
        <a
          href={`tel:${COMPANY_INFO.phoneRaw}`}
          className="group flex items-center gap-3 bg-[#DC2626] hover:bg-[#B91C1C] text-white border border-[#B91C1C] px-4 py-3 rounded-full shadow-xl transition-all hover:scale-103"
          title="Gọi Hotline tư vấn nhanh"
        >
          <div className="w-7 h-7 rounded-full bg-white/20 text-white flex items-center justify-center animate-bounce">
            <Phone className="w-4 h-4" />
          </div>
          <div className="text-left pr-1">
            <div className="text-[10px] uppercase font-bold text-white/90 leading-tight">Hotline tư vấn</div>
            <div className="text-sm font-extrabold tabular-nums text-white">{COMPANY_INFO.phone}</div>
          </div>
        </a>
      </div>
    </>
  );
};
