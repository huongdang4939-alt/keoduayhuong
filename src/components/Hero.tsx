import React from 'react';
import { ArrowRight, Phone, Award, ShieldCheck, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';
import heroImage from '../assets/images/bentre_coconut_grove_1791001223447.jpg';

interface HeroProps {
  onExploreProducts: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProducts, onContactClick }) => {
  return (
    <section id="trang-chu" className="relative overflow-hidden pt-6 pb-16 lg:py-20 bg-[#FAF7F2]">
      {/* Subtle organic coconut leaf pattern background watermark/gradient */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#EED8B3]/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-[#D4A359]/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Bold Typography & Value Proposition */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Clean unboxed metadata kicker */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#966838]">
              <span>Đặc Sản Xứ Dừa Bến Tre</span>
              <span aria-hidden="true" className="text-[#D4A359]">·</span>
              <span>Sản Xuất & Phân Phối Kẹo Dừa</span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#332219] leading-[1.18] tracking-tight [text-wrap:balance]">
              Đậm Đà Hương Vị Kẹo Dừa Truyền Thống
            </h1>

            <p className="text-base sm:text-lg text-[#5E4839] leading-relaxed max-w-xl">
              Chắt lọc từ nguồn nước cốt dừa tươi béo ngậy nguyên chất, hòa quyện cùng mạch nha nếp thơm lừng 
              và cơm dừa sáp. Công ty TNHH Dừa Quốc Cường gìn giữ tinh hoa ẩm thực quê hương trọn vẹn trong từng viên kẹo.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={onExploreProducts}
                className="px-6 py-3.5 bg-[#2B6F44] hover:bg-[#235C38] text-white border border-[#235C38] font-bold text-base rounded-xl transition-all shadow-xs hover:shadow-sm flex items-center gap-2.5 group cursor-pointer"
              >
                <span>Xem các sản phẩm kẹo dừa</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="px-5 py-3.5 bg-[#DC2626] hover:bg-[#B91C1C] text-white border border-[#B91C1C] font-bold text-base rounded-xl transition-colors flex items-center gap-2 shadow-sm"
              >
                <Phone className="w-4 h-4 text-white" />
                <span className="tabular-nums">Hotline: {COMPANY_INFO.phone}</span>
              </a>
            </div>

            {/* Key trust indicators - clean text without pill badges */}
            <div className="pt-6 border-t border-[#E8DFC0] grid grid-cols-3 gap-4 text-left">
              <div>
                <div className="text-lg sm:text-xl font-bold text-[#3B2516] tabular-nums">100%</div>
                <div className="text-xs text-[#705847] mt-0.5">Nước cốt dừa tươi nguyên chất</div>
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold text-[#3B2516] tabular-nums">12+</div>
                <div className="text-xs text-[#705847] mt-0.5">Dòng kẹo đa dạng hương vị</div>
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold text-[#3B2516] tabular-nums">Toàn Quốc</div>
                <div className="text-xs text-[#705847] mt-0.5">Cung ứng sỉ & lẻ tận nơi</div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Showcase Image with Warm Framing */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-[#FAF7F2]">
              <img
                src={heroImage}
                alt="Đặc sản kẹo dừa truyền thống Quốc Cường Bến Tre"
                referrerPolicy="no-referrer"
                className="w-full h-[360px] sm:h-[460px] object-cover hover:scale-103 transition-transform duration-700 ease-out"
              />
              
              {/* Subtle gradient scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

              {/* In-image caption card */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 rounded-xl bg-white/95 backdrop-blur-md shadow-md border border-[#E8DFC0] text-left">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-display font-bold text-base sm:text-lg text-[#3B2516]">
                      Kẹo Dừa Ý Hương: Đặc Sản Bến Tre
                    </h3>
                    <p className="text-xs sm:text-sm text-[#705847] mt-0.5">
                      Gói trọn hương vị quê nhà!
                    </p>
                  </div>
                  <button
                    onClick={onContactClick}
                    type="button"
                    className="shrink-0 ml-3 px-3 py-1.5 text-xs font-semibold text-[#966838] bg-[#FAF0DC] hover:bg-[#EED8B3] border border-[#E8DFC0] rounded-lg transition-colors cursor-pointer"
                  >
                    Tư vấn
                  </button>
                </div>
              </div>
            </div>

            {/* Natural decorative accent */}
            <div className="hidden sm:flex absolute -bottom-4 -left-4 items-center gap-2 px-3.5 py-2 bg-[#3D6647] text-white text-xs font-medium rounded-lg shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-[#EED8B3]" />
              <span>Nguyên liệu thiên nhiên chọn lọc</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
