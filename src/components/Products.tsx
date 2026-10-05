import React, { useState, useMemo, useEffect } from 'react';
import { Search, Eye, Filter, Box } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';
import { ProductModal } from './ProductModal';

interface ProductsProps {
  onInquireProduct: (product: Product, variantWeight?: string) => void;
}

interface ProductCardProps {
  product: Product;
  selectedCategory: string;
  onOpenDetails: (product: Product, variantWeight?: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, selectedCategory, onOpenDetails }) => {
  const [selectedVariantWeight, setSelectedVariantWeight] = useState<string>(() => {
    if (product.variants && product.variants.length > 0) {
      if (selectedCategory === '500g' && product.variants.some((v) => v.weightCategory === '500g')) {
        return '500g';
      }
      return product.variants[0].weight;
    }
    return product.weight;
  });

  useEffect(() => {
    if (product.variants && product.variants.length > 0) {
      if (selectedCategory === '500g' && product.variants.some((v) => v.weightCategory === '500g')) {
        setSelectedVariantWeight('500g');
      }
    }
  }, [selectedCategory, product.variants]);

  const currentVariant = product.variants?.find((v) => v.weight === selectedVariantWeight);
  const displayImage = currentVariant?.image || product.image;
  const displayWeight = currentVariant ? `Hộp ${currentVariant.weight}` : product.weight;

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-[#E8DFC0] hover:border-[#2B6F44] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between text-left">
      {/* Image container: shows full candy box without cropping */}
      <div className="relative aspect-4/3 overflow-hidden bg-[#FAF7F2] p-3 sm:p-4 flex items-center justify-center">
        <img
          src={displayImage}
          alt={`${product.name} - ${displayWeight}`}
          referrerPolicy="no-referrer"
          className="w-full h-full object-contain drop-shadow-xs group-hover:scale-105 transition-transform duration-300 ease-out"
        />

        {/* Gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

        {/* Top Tag */}
        {product.badge && (
          <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#FAF0DC]/95 text-[#966838] border border-[#E8DFC0] text-[11px] font-bold rounded-md shadow-xs">
            {product.badge}
          </div>
        )}

        {/* Quick view button overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            type="button"
            onClick={() => onOpenDetails(product, currentVariant?.weight)}
            className="px-4 py-2 bg-white/95 text-[#3B2516] text-xs font-semibold rounded-lg shadow-md hover:bg-white transition-all transform translate-y-2 group-hover:translate-y-0 flex items-center gap-1.5 cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5 text-[#2B6F44]" />
            <span>Xem nhanh</span>
          </button>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-display text-lg font-bold text-[#3B2516] line-clamp-1 group-hover:text-[#2B6F44] transition-colors">
            {product.name}
          </h3>

          {/* Box classification / Quy cách đóng gói */}
          {product.variants && product.variants.length > 0 ? (
            <div className="mt-3 bg-[#FAF0DC]/60 border border-[#EADFCB] rounded-xl p-2.5">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="text-[#7A6454] font-medium flex items-center gap-1">
                  <Box className="w-3 h-3 text-[#2B6F44]" />
                  <span>Phân loại:</span>
                </span>
                <span className="font-bold text-[#2B6F44] text-xs tabular-nums">
                {currentVariant?.weight || selectedVariantWeight}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                {product.variants.map((v) => {
                  const isSelected = selectedVariantWeight === v.weight;
                  return (
                    <button
                      key={v.weight}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedVariantWeight(v.weight);
                      }}
                      className={`py-1.5 px-2 text-xs font-bold rounded-lg border transition-all cursor-pointer text-center ${
                        isSelected
                          ? 'bg-[#2B6F44] text-white border-[#2B6F44] shadow-xs'
                          : 'bg-white text-[#5C4637] border-[#E8DFC0] hover:bg-[#FAF0DC]'
                      }`}
                    >
                    {v.weight}
                    </button>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="mt-3 flex items-center justify-between text-xs bg-[#FAF0DC]/60 border border-[#EADFCB] rounded-lg px-3 py-2">
              <span className="text-[#7A6454] font-medium">Khối lượng tịnh:</span>
              <span className="font-bold text-[#3B2516] text-sm tabular-nums">{product.weight}</span>
            </div>
          )}
        </div>

        <div className="mt-4 pt-4 border-t border-[#E8DFC0] flex items-center justify-between">
          <div>
            <div className="text-sm font-bold text-[#966838]">
              Giá sỉ & lẻ
            </div>
            <div className="text-[11px] text-[#8C7665]">Liên hệ nhận báo giá tốt nhất</div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onOpenDetails(product, currentVariant?.weight)}
              className="px-3.5 py-2 text-xs font-semibold rounded-lg bg-[#FAF0DC] hover:bg-[#2B6F44] text-[#966838] hover:text-white border border-[#E8DFC0] transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
              title="Xem chi tiết sản phẩm"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Chi tiết</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Products: React.FC<ProductsProps> = ({ onInquireProduct }) => {
  const [selectedWeight, setSelectedWeight] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [activeVariantWeight, setActiveVariantWeight] = useState<string | undefined>(undefined);

  const categories = [
    { id: 'all', label: 'Tất cả sản phẩm', count: PRODUCTS.length },
    { id: '400g', label: 'Hộp 400g', count: PRODUCTS.filter((p) => p.weightCategory === '400g').length },
    { id: '300g', label: 'Hộp 300g', count: PRODUCTS.filter((p) => p.weightCategory === '300g').length },
    { 
      id: '500g', 
      label: 'Hộp 500g', 
      count: PRODUCTS.filter((p) => p.weightCategory === '500g' || p.variants?.some((v) => v.weightCategory === '500g')).length 
    },
    { id: 'sap', label: 'Kẹo Dừa Sáp', count: PRODUCTS.filter((p) => p.isSpecialty).length },
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      // Category match
      let matchesCat = true;
      if (selectedWeight === '400g') {
        matchesCat = p.weightCategory === '400g';
      } else if (selectedWeight === '300g') {
        matchesCat = p.weightCategory === '300g';
      } else if (selectedWeight === '500g') {
        matchesCat = p.weightCategory === '500g' || !!p.variants?.some((v) => v.weightCategory === '500g');
      } else if (selectedWeight === 'sap') {
        matchesCat = !!p.isSpecialty;
      }

      // Search match
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        p.name.toLowerCase().includes(query) ||
        p.flavor.toLowerCase().includes(query) ||
        p.weight.toLowerCase().includes(query) ||
        (p.variants && p.variants.some((v) => v.weight.toLowerCase().includes(query)));

      return matchesCat && matchesSearch;
    });
  }, [selectedWeight, searchQuery]);

  const handleOpenDetails = (product: Product, variantWeight?: string) => {
    setActiveProduct(product);
    setActiveVariantWeight(variantWeight);
  };

  return (
    <section id="san-pham" className="py-16 lg:py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 text-left">
          <div>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#966838]">
              <span>Danh Mục Sản Phẩm</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#332219] mt-2">
              Kẹo Dừa Ý Hương: Đặc Sản Bến Tre
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#685141] max-w-2xl">
              Cung cấp nhiều loại (250g, 300g, 400g, 500g) chuẩn chất lượng, phù hợp phân phối sỉ & lẻ toàn quốc.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-[#8C7665] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm theo vị, khối lượng..."
              className="w-full pl-9 pr-4 py-2.5 bg-white border border-[#E8DFC0] rounded-xl text-sm text-[#3B2516] placeholder:text-[#A39080] focus:outline-hidden focus:border-[#2B6F44] focus:ring-1 focus:ring-[#2B6F44] transition-colors shadow-2xs"
            />
          </div>
        </div>

        {/* Filter Tabs - Interactive Button Control */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => {
            const isActive = selectedWeight === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedWeight(cat.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl whitespace-nowrap transition-colors cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#2B6F44] text-white border border-[#2B6F44] shadow-xs font-semibold'
                    : 'bg-white text-[#5C4637] border border-[#E8DFC0] hover:bg-[#FAF0DC] hover:text-[#3B2516]'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[11px] px-1.5 py-0.2 rounded-full tabular-nums ${
                  isActive ? 'bg-white/20 text-white font-bold' : 'bg-[#FAF0DC] text-[#7C552A]'
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white/70 rounded-2xl border border-[#EAE1D2] p-8">
            <Filter className="w-8 h-8 text-[#A89482] mx-auto mb-3" />
            <p className="text-base font-semibold text-[#3B2516]">Không tìm thấy sản phẩm phù hợp</p>
            <p className="text-xs text-[#7A6656] mt-1">Vui lòng thử tìm từ khóa khác hoặc chọn tất cả sản phẩm.</p>
            <button
              onClick={() => {
                setSelectedWeight('all');
                setSearchQuery('');
              }}
              type="button"
              className="mt-4 px-4 py-2 bg-[#2B6F44] hover:bg-[#235C38] text-white border border-[#235C38] text-xs font-bold rounded-lg cursor-pointer"
            >
              Xem tất cả sản phẩm
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                selectedCategory={selectedWeight}
                onOpenDetails={handleOpenDetails}
              />
            ))}
          </div>
        )}

        {/* Modal for product details */}
        <ProductModal
          product={activeProduct}
          initialVariantWeight={activeVariantWeight}
          onClose={() => {
            setActiveProduct(null);
            setActiveVariantWeight(undefined);
          }}
          onInquireProduct={onInquireProduct}
        />

      </div>
    </section>
  );
};
