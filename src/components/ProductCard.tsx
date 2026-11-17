import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { Product } from '../data/products';
import type { SupportedLanguage } from '../i18n/config';

interface ProductCardProps {
  product: Product;
}

const ProductVisual: React.FC<{ type: Product['visualType'] }> = ({ type }) => {
  if (type === 'cable') {
    return (
      <svg viewBox="0 0 320 140" className="product-svg">
        <ellipse cx="160" cy="65" rx="95" ry="38" fill="none" stroke="#2dd4bf" strokeWidth="14" />
        <ellipse cx="160" cy="72" rx="90" ry="34" fill="none" stroke="#14b8a6" strokeWidth="10" />
        <rect x="65" y="95" width="38" height="16" rx="3" fill="#cbd5e1" />
        <rect x="215" y="95" width="38" height="18" rx="3" fill="#2563eb" />
      </svg>
    );
  }
  if (type === 'junction_box') {
    return (
      <svg viewBox="0 0 320 140" className="product-svg">
        <rect x="75" y="15" width="170" height="110" rx="6" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2" />
        <rect x="95" y="30" width="130" height="80" rx="3" fill="#f8fafc" />
        {Array.from({ length: 12 }).map((_, i) => (
          <rect key={i} x={102 + i * 10} y="55" width="7" height="26" rx="1" fill="#2563eb" />
        ))}
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 320 140" className="product-svg">
      <rect x="105" y="35" width="110" height="70" rx="8" fill="#cbd5e1" stroke="#64748b" strokeWidth="2" />
      <line x1="55" y1="70" x2="105" y2="70" stroke="#0284c7" strokeWidth="5" />
      <line x1="215" y1="52" x2="265" y2="52" stroke="#0284c7" strokeWidth="4" />
      <line x1="215" y1="70" x2="265" y2="70" stroke="#0284c7" strokeWidth="4" />
      <line x1="215" y1="88" x2="265" y2="88" stroke="#0284c7" strokeWidth="4" />
    </svg>
  );
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { t, i18n } = useTranslation();
  const [added, setAdded] = useState<boolean>(false);

  const currentLang = (i18n.resolvedLanguage || 'en') as SupportedLanguage;

  const handleAddToOrder = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  const renderStockBadge = () => {
    if (product.status === 'in_stock') {
      return (
        <span className="stock-badge stock-in">
          <span className="status-dot">✓</span> {t('avail_in_stock')}
        </span>
      );
    }
    if (product.status === 'low_stock') {
      return (
        <span className="stock-badge stock-low">
          <span className="status-dot">!</span> {t('avail_low_stock')}
        </span>
      );
    }
    return (
      <span className="stock-badge stock-out">
        <span className="status-dot">×</span> {t('avail_out_of_stock')}
      </span>
    );
  };

  return (
    <article className="product-card">
      <div className="product-image-box">
        <ProductVisual type={product.visualType} />
      </div>

      <h3 className="product-title">{t(product.titleKey)}</h3>
      <p className="product-subtitle">{t(product.subtitleKey)}</p>
      <p className="product-sku">SKU: {product.sku}</p>

      <div className="product-price">{product.price}</div>

      <div className="stock-row">
        {renderStockBadge()}
        <span className="stock-units">
          {t('units_count', { units: product.units })}
        </span>
      </div>

      {product.restockDate && (
        <div className="restock-row">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <span>{t('restock_date', { date: product.restockDate[currentLang] })}</span>
        </div>
      )}

      <button className="add-order-btn" onClick={handleAddToOrder}>
        {added ? t('added_to_order') : t('add_to_order')}
      </button>

      {product.substituteKey ? (
        <div className="substitute-callout">
          <span>
            💡{' '}
            {t('suggested_substitute', {
              substitute: t(product.substituteKey),
            })}
          </span>
        </div>
      ) : (
        <a
          href="#documents"
          className="documents-link"
          onClick={(e) => e.preventDefault()}
        >
          {t('view_documents')}
        </a>
      )}
    </article>
  );
};

export default ProductCard;