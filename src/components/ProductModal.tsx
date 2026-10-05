import React, { useState, useEffect } from 'react';
import { X, Check, MessageCircle, Phone, Box, Calendar, ShieldCheck } from 'lucide-react';
import { Product } from '../types';
import { COMPANY_INFO } from '../data/products';

interface ProductModalProps {
  product: Product | null;
  initialVariantWeight?: string;
  onClose: () => void;
  onInquireProduct: (product: Product, variantWeight?: string) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  initialVariantWeight,
  onClose,
  onInquireProduct,
}) => {
  if (!product) return null;

  const [selectedVariantWeight, setSelectedVariantWeight] = useState<string>(() => {
    if (product.variants && product.variants.length > 0) {
      if (initialVariantWeight && product.variants.some((v) => v.weight === initialVariantWeight)) {
        return initialVariantWeight;
      }
      return product.variants[0].weight;
    }
    return product.weight;
  });

  useEffect(() => {
    if (product.variants && product.variants.length > 0) {
      if (initialVariantWeight && product.variants.some((v) => v.weight === initialVariantWeight)) {
        setSelectedVariantWeight(initialVariantWeight);
      } else {
        setSelectedVariantWeight(product.variants[0].weight);
      }
    } else {
      setSelectedVariantWeight(product.weight);
    }
  }, [product, initialVariantWeight]);

  const currentVariant = product.variants?.find((v) => v.weight === selectedVariantWeight);
  const displayImage = currentVariant?.image || product.image;
  const displayWeight = currentVariant ? `Hộp ${currentVariant.weight}` : product.weight;
  const displayShortDesc = currentVariant?.shortDesc || product.shortDesc;
  const displayDesc = currentVariant?.description || product.description;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/65 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-white rounded-2xl max-w-4xl lg:max-w-5xl w-full overflow-hidden shadow-2xl border border-[#E8DFC0] text-left"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/95 text-[#3B2516] hover:bg-white hover:text-black transition-all shadow-md cursor-pointer border border-[#E8DFC0]"
          aria-label="Đóng chi tiết sản phẩm"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Horizontal Split Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-0 max-h-[90vh] overflow-y-auto md:overflow-hidden">
          
          {/* Left Column: Product Visual & Packaging Specs */}
          <div className="md:col-span-5 bg-[#FAF7F2] border-b md:border-b-0 md:border-r border-[#E8DFC0] p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {/* Product Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#966838] bg-[#EFE4D2] px-2.5 py-1 rounded-md">
                  Đặc sản xứ Dừa
                </span>
                {product.badge && (
                  <span className="text-[11px] font-bold text-[#966838] bg-[#FAF0DC] border border-[#E8DFC0] px-2.5 py-1 rounded-md shadow-xs">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Product Image Frame: Full Box Display */}
              <div className="relative aspect-4/3 sm:aspect-square bg-white rounded-xl p-4 sm:p-6 flex items-center justify-center border border-[#EBE1CF] shadow-xs">
                <img
                  src={displayImage}
                  alt={`${product.name} - ${displayWeight}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain drop-shadow-sm transition-transform duration-300 hover:scale-104"
                />
              </div>

              {/* Box Variant Selector in Left Column if variants exist */}
              {product.variants && product.variants.length > 0 ? (
                <div className="mt-3.5 bg-white p-3 rounded-xl border border-[#E8DFC0]">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-semibold text-[#7A6454] flex items-center gap-1">
                      <Box className="w-3.5 h-3.5 text-[#2B6F44]" />
                      <span>Phân loại hộp:</span>
                    </span>
                    <span className="font-bold text-[#2B6F44]">Hộp {selectedVariantWeight}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {product.variants.map((v) => {
                      const isSelected = selectedVariantWeight === v.weight;
                      return (
                        <button
                          key={v.weight}
                          type="button"
                          onClick={() => setSelectedVariantWeight(v.weight)}
                          className={`py-2 px-2.5 text-xs font-bold rounded-lg border transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                            isSelected
                              ? 'bg-[#2B6F44] text-white border-[#2B6F44] shadow-xs'
                              : 'bg-[#FAF7F2] text-[#4A3425] border-[#E8DFC0] hover:bg-[#FAF0DC]'
                          }`}
                        >
                          {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
                          <span>Hộp {v.weight}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div className="mt-3 text-center">
                  <span className="inline-block text-xs font-semibold text-[#7A6454] bg-[#EFE8DC] px-3 py-1 rounded-full">
                    Khối lượng tịnh: <strong className="text-[#3B2516]">{product.weight}</strong>
                  </span>
                </div>
              )}
            </div>

            {/* Packaging & Storage Meta */}
            <div className="mt-6 pt-5 border-t border-[#E6DCBF] space-y-2.5 text-xs text-[#6B5545]">
              {product.shelfLife && (
                <div className="flex items-start gap-2">
                  <Calendar className="w-4 h-4 text-[#966838] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#3B2516]">Hạn dùng:</strong> {product.shelfLife}
                  </span>
                </div>
              )}

              {product.storage && (
                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#2B6F44] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#3B2516]">Bảo quản:</strong> {product.storage}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Detailed Product Profile & Action Area */}
          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between md:max-h-[90vh] md:overflow-y-auto">
            <div className="space-y-5">
              
              {/* Header Info */}
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#966838]">
                  <span>{displayWeight}</span>
                  <span aria-hidden="true">·</span>
                  <span>Công ty TNHH Dừa Quốc Cường</span>
                </div>

                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#332219] mt-1.5 leading-snug">
                  {product.name}
                </h2>
                
                {displayShortDesc && (
                  <p className="mt-2 text-sm text-[#665040] leading-relaxed">
                    {displayShortDesc}
                  </p>
                )}
              </div>

              {/* Description */}
              <div className="text-sm text-[#4E392B] leading-relaxed bg-[#FAF7F2] p-4 rounded-xl border border-[#E8DFC0]">
                {displayDesc}
              </div>

              {/* Packaging Specification Detail Card */}
              <div className="p-4 bg-white/90 rounded-xl border border-[#E8DFC0] space-y-3">
                <div className="flex items-center gap-2 text-[#3B2516] font-bold text-sm">
                  <Box className="w-4 h-4 text-[#2B6F44]" />
                  <span>Thông Tin Quy Cách & Bảo Quản</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="bg-[#FAF7F2] p-3 rounded-lg border border-[#E8DFC0]">
                    <span className="text-[#8C7665] block mb-1">Khối lượng:</span>
                    <span className="font-bold text-sm text-[#3B2516] tabular-nums">{displayWeight}</span>
                  </div>

                  <div className="bg-[#FAF7F2] p-3 rounded-lg border border-[#E8DFC0]">
                    <span className="text-[#8C7665] block mb-1">Hạn sử dụng:</span>
                    <span className="font-semibold text-[#3B2516]">{product.shelfLife}</span>
                  </div>

                  <div className="bg-[#FAF7F2] p-3 rounded-lg border border-[#E8DFC0]">
                    <span className="text-[#8C7665] block mb-1">Bảo quản:</span>
                    <span className="font-semibold text-[#3B2516]">{product.storage}</span>
                  </div>
                </div>
              </div>

              {/* Delivery and Supply Specification */}
              <div className="p-3.5 bg-white/90 rounded-xl border border-[#E8DFC0] text-xs text-[#5E4839] space-y-2">
                <div className="font-bold text-[#3B2516]">Tiêu chuẩn đóng kiện & phân phối:</div>
                <ul className="space-y-1.5 text-[#665040]">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#2B6F44] shrink-0" />
                    <span>Quy cách đóng thùng carton tiêu chuẩn, đảm bảo an toàn khi vận chuyển đi xa.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#2B6F44] shrink-0" />
                    <span>Cung ứng sỉ số lượng lớn theo thùng/kiện cho các đại lý và nhà phân phối toàn quốc.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Action Bar */}
            <div className="mt-8 pt-5 border-t border-[#E8DFC0] space-y-3">
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={() => {
                    onInquireProduct(product, currentVariant?.weight);
                    onClose();
                  }}
                  className="flex-1 py-3 px-5 bg-[#2B6F44] hover:bg-[#235C38] text-white border border-[#235C38] font-bold text-sm rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <Phone className="w-4 h-4 text-white" />
                  <span>Gửi yêu cầu báo giá sản phẩm này</span>
                </button>

                <a
                  href={COMPANY_INFO.zaloUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="py-3 px-5 bg-[#0068FF] hover:bg-[#0055D4] text-white font-bold text-sm rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat Zalo tư vấn</span>
                </a>
              </div>

              {/* Quick Contacts */}
              <div className="flex items-center justify-between text-xs text-[#7A6454] px-1">
                <span>Hotline: <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="font-bold text-[#B91C1C] hover:underline tabular-nums">{COMPANY_INFO.phone}</a></span>
                <span className="text-[#8C7665]">Cung ứng sỉ & lẻ toàn quốc</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
