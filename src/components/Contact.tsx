import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, MessageCircle, Building2 } from 'lucide-react';
import { COMPANY_INFO, PRODUCTS } from '../data/products';
import { ContactFormData } from '../types';

interface ContactProps {
  prefilledMessage?: string;
}

export const Contact: React.FC<ContactProps> = ({ prefilledMessage = '' }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    customerType: 'wholesale',
    productInterest: 'Kẹo dừa Ý Hương Thập Cẩm & Kẹo Dừa Sáp',
    message: prefilledMessage,
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Sync if prefilledMessage changes
  React.useEffect(() => {
    if (prefilledMessage) {
      setFormData((prev) => ({
        ...prev,
        message: prefilledMessage,
      }));
    }
  }, [prefilledMessage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      alert('Vui lòng điền Họ tên và Số điện thoại');
      return;
    }

    setLoading(true);
    // Simulate real brief network delay
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      address: '',
      customerType: 'wholesale',
      productInterest: 'Kẹo dừa Ý Hương Thập Cẩm & Kẹo Dừa Sáp',
      message: '',
    });
  };

  return (
    <section id="lien-he" className="py-16 lg:py-24 bg-[#FAF7F2] border-t border-[#E8DFC0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#966838]">
            <span>Liên Hệ & Hợp Tác</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#332219] mt-2">
            Kết Nối Với Chúng Tôi
          </h2>
          <p className="mt-2 text-base text-[#685141] leading-relaxed">
            Quý khách hàng có nhu cầu mua sỉ số lượng lớn, mở đại lý phân phối hoặc mua lẻ thưởng thức, vui lòng để lại thông tin hoặc liên hệ trực tiếp hotline.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Company Information Card */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8DFC0] shadow-xs space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#966838]">
                  <Building2 className="w-4 h-4 text-[#D4A359]" />
                  <span>Thông Tin Doanh Nghiệp</span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#3B2516] mt-1">
                  {COMPANY_INFO.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#705847] mt-1">
                  Loại hình hoạt động: <strong>{COMPANY_INFO.businessType}</strong>
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-[#E8DFC0] text-sm text-[#5E4839]">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#FAF0DC] text-[#966838] border border-[#E8DFC0] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-semibold text-[#3B2516] block text-xs uppercase tracking-wide">
                      Địa chỉ cơ sở:
                    </span>
                    <span className="leading-snug">{COMPANY_INFO.address}</span>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#FAF0DC] text-[#966838] border border-[#E8DFC0] shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-semibold text-[#3B2516] block text-xs uppercase tracking-wide">
                      Điện thoại / Hotline:
                    </span>
                    <a
                      href={`tel:${COMPANY_INFO.phoneRaw}`}
                      className="text-base sm:text-lg font-bold text-[#B91C1C] hover:text-[#991B1B] hover:underline transition-colors tabular-nums"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                    <span className="block text-xs text-[#8C7665]">(Hỗ trợ 24/7 - Zalo đặt hàng)</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#FAF0DC] text-[#966838] border border-[#E8DFC0] shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-semibold text-[#3B2516] block text-xs uppercase tracking-wide">
                      Email liên hệ:
                    </span>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-sm sm:text-base font-semibold text-[#3B2516] hover:text-[#B91C1C] hover:underline transition-colors break-all"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Working hours */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#FAF0DC] text-[#966838] border border-[#E8DFC0] shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-semibold text-[#3B2516] block text-xs uppercase tracking-wide">
                      Thời gian làm việc:
                    </span>
                    <span>{COMPANY_INFO.workingHours}</span>
                  </div>
                </div>
              </div>

              {/* Direct Instant Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="flex-1 py-3 px-4 bg-[#DC2626] hover:bg-[#B91C1C] text-white border border-[#B91C1C] font-bold text-sm rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <Phone className="w-4 h-4 text-white" />
                  <span>Gọi {COMPANY_INFO.phone}</span>
                </a>

                <a
                  href={COMPANY_INFO.zaloUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="py-3 px-4 bg-[#0068FF] hover:bg-[#0052cc] text-white font-semibold text-sm rounded-xl transition-colors flex items-center justify-center gap-2 shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat Zalo</span>
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Contact & Order Form */}
          <div className="lg:col-span-7 text-left">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8DFC0] shadow-xs">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-[#EBF3ED] text-[#2D5A3A] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[#3B2516]">
                    Gửi Thông Tin Thành Công!
                  </h3>
                  <p className="text-sm text-[#5E4839] max-w-md mx-auto leading-relaxed">
                    Cảm ơn quý khách <strong className="text-[#3B2516]">{formData.fullName}</strong> đã quan tâm đến sản phẩm của Công ty TNHH Dừa Quốc Cường. 
                    Chúng tôi sẽ liên hệ qua số điện thoại <strong className="text-[#3B2516]">{formData.phone}</strong> sớm nhất.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                    <a
                      href={`tel:${COMPANY_INFO.phoneRaw}`}
                      className="px-6 py-3 bg-[#DC2626] hover:bg-[#B91C1C] text-white border border-[#B91C1C] font-bold text-sm rounded-xl shadow-sm"
                    >
                      Gọi trực tiếp: {COMPANY_INFO.phone}
                    </a>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-6 py-3 bg-[#FAF0DC] hover:bg-[#EED8B3] text-[#7C552A] border border-[#E8DFC0] font-semibold text-sm rounded-xl cursor-pointer"
                    >
                      Gửi thông tin khác
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="font-display text-xl font-bold text-[#3B2516]">
                      Điền Thông Tin Nhận Tư Vấn & Báo Giá
                    </h3>
                    <p className="text-xs sm:text-sm text-[#7A6454] mt-1">
                      Vui lòng nhập thông tin liên hệ dưới đây, chúng tôi sẽ phản hồi trong thời gian sớm nhất.
                    </p>
                  </div>

                  {/* Name and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#4E392B] mb-1">
                        Họ và tên quý khách <span className="text-[#A5382B]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Ví dụ: Nguyễn Văn An"
                        className="w-full px-3.5 py-2.5 bg-white border border-[#E8DFC0] rounded-xl text-sm text-[#3B2516] placeholder:text-[#A39080] focus:outline-hidden focus:border-[#B6833D] focus:ring-1 focus:ring-[#B6833D]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#4E392B] mb-1">
                        Số điện thoại liên hệ <span className="text-[#A5382B]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Ví dụ: 0869 575 775"
                        className="w-full px-3.5 py-2.5 bg-white border border-[#E8DFC0] rounded-xl text-sm text-[#3B2516] placeholder:text-[#A39080] focus:outline-hidden focus:border-[#B6833D] focus:ring-1 focus:ring-[#B6833D]"
                      />
                    </div>
                  </div>

                  {/* Email & Address */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#4E392B] mb-1">
                        Email (nếu có)
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="email@example.com"
                        className="w-full px-3.5 py-2.5 bg-white border border-[#E8DFC0] rounded-xl text-sm text-[#3B2516] placeholder:text-[#A39080] focus:outline-hidden focus:border-[#B6833D] focus:ring-1 focus:ring-[#B6833D]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#4E392B] mb-1">
                        Tỉnh / Thành phố / Địa chỉ
                      </label>
                      <input
                        type="text"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        placeholder="Ví dụ: Vĩnh Long, TP.HCM, Hà Nội..."
                        className="w-full px-3.5 py-2.5 bg-white border border-[#E8DFC0] rounded-xl text-sm text-[#3B2516] placeholder:text-[#A39080] focus:outline-hidden focus:border-[#B6833D] focus:ring-1 focus:ring-[#B6833D]"
                      />
                    </div>
                  </div>

                  {/* Product of Interest */}
                  <div>
                    <label className="block text-xs font-medium text-[#4E392B] mb-1">
                      Sản phẩm quý khách quan tâm nhất
                    </label>
                    <select
                      value={formData.productInterest}
                      onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#E8DFC0] rounded-xl text-sm text-[#3B2516] focus:outline-hidden focus:border-[#B6833D] focus:ring-1 focus:ring-[#B6833D]"
                    >
                      <option value="Tất cả các dòng kẹo dừa Ý Hương">Tất cả các dòng kẹo dừa Ý Hương</option>
                      {PRODUCTS.map((prod) => {
                        if (prod.variants && prod.variants.length > 0) {
                          return prod.variants.map((v) => (
                            <option key={`${prod.id}-${v.weight}`} value={`${prod.name} (Hộp ${v.weight})`}>
                              {prod.name} (Hộp {v.weight})
                            </option>
                          ));
                        }
                        return (
                          <option key={prod.id} value={`${prod.name} (${prod.weight})`}>
                            {prod.name} ({prod.weight})
                          </option>
                        );
                      })}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-medium text-[#4E392B] mb-1">
                      Nội dung tin nhắn / Số lượng dự kiến cần đặt
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Nhập số lượng bạn cần lấy sỉ, ngày giao hàng mong muốn hoặc câu hỏi..."
                      className="w-full px-3.5 py-2.5 bg-white border border-[#E8DFC0] rounded-xl text-sm text-[#3B2516] placeholder:text-[#A39080] focus:outline-hidden focus:border-[#B6833D] focus:ring-1 focus:ring-[#B6833D]"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-6 bg-[#2B6F44] hover:bg-[#235C38] text-white border border-[#235C38] font-bold text-base rounded-xl transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    {loading ? (
                      <span>Đang gửi thông tin...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-white" />
                        <span>Gửi thông tin liên hệ</span>
                      </>
                    )}
                  </button>
                  <p className="text-center text-[11px] text-[#8C7665]">
                    Thông tin của quý khách được bảo mật tuyệt đối và chỉ dùng để liên lạc tư vấn đơn hàng.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
