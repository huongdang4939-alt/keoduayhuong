import React from 'react';
import { Phone, MapPin, Clock, Mail } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2B6F44] text-[#D0E2D5] pt-14 pb-20 md:pb-12 border-t-4 border-[#C49A52]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 text-left">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div>
              <span className="font-display text-2xl font-bold tracking-tight text-white">
                {COMPANY_INFO.name}
              </span>
              <span className="block text-xs uppercase tracking-widest text-[#F3CD7A] mt-1 font-bold">
                Cơ Sở Sản Xuất & Phân Phối Kẹo Dừa Ý Hương
              </span>
            </div>
            
            <p className="text-sm text-[#B8D0BF] leading-relaxed max-w-sm">
              Tự hào gìn giữ và mang tinh hoa hương vị đặc sản kẹo dừa Bến Tre truyền thống đến với quý khách hàng.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-bold text-[#F3CD7A]">
              Mục Chính
            </h4>
            <ul className="space-y-2 text-sm text-[#D0E2D5]">
              <li>
                <a href="#trang-chu" className="hover:text-[#F3CD7A] font-medium transition-colors">
                  Trang Chủ
                </a>
              </li>
              <li>
                <a href="#san-pham" className="hover:text-[#F3CD7A] font-medium transition-colors">
                  Sản Phẩm Kẹo Dừa
                </a>
              </li>
              <li>
                <a href="#lien-he" className="hover:text-[#F3CD7A] font-medium transition-colors">
                  Liên Hệ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-3 text-sm">
            <h4 className="text-xs uppercase tracking-wider font-bold text-[#F3CD7A]">
              Thông Tin Liên Hệ
            </h4>
            
            <div className="space-y-2.5 text-[#D0E2D5]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F3CD7A] shrink-0 mt-1" />
                <span className="leading-snug">{COMPANY_INFO.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F3CD7A] shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="font-normal text-[#D0E2D5] hover:text-white transition-colors tabular-nums"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F3CD7A] shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-[#F3CD7A] transition-colors break-all"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#F3CD7A] shrink-0" />
                <span>{COMPANY_INFO.workingHours}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-[#1F462B] flex items-center justify-center text-xs text-[#8EA895]">
          <p className="flex items-center gap-1 text-center font-medium">
            <span>Đặc sản ngọt lành từ quê hương xứ dừa · {COMPANY_INFO.name}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
