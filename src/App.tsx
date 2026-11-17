import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { PRODUCTS } from './data/products';
import type { CategoryFilter, AvailabilityFilter } from './data/products';
import SearchBar from './components/SearchBar';
import FilterSidebar from './components/FilterSidebar';
import ProductCard from './components/ProductCard';
import './App.css';

const App: React.FC = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');
  const [selectedAvailability, setSelectedAvailability] = useState<AvailabilityFilter>('all');
  const [warehouseChecked, setWarehouseChecked] = useState<boolean>(true);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      if (!warehouseChecked) return false;
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }
      if (selectedAvailability !== 'all' && product.status !== selectedAvailability) {
        return false;
      }
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const translatedTitle = t(product.titleKey).toLowerCase();
        const translatedSub = t(product.subtitleKey).toLowerCase();
        const matchesSku = product.sku.toLowerCase().includes(q);
        const matchesCat = product.category.toLowerCase().includes(q);
        if (
          !translatedTitle.includes(q) &&
          !translatedSub.includes(q) &&
          !matchesSku &&
          !matchesCat
        ) {
          return false;
        }
      }
      return true;
    });
  }, [searchQuery, selectedCategory, selectedAvailability, warehouseChecked, t]);

  return (
    <div className="catalog-page">
      <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      <div className="catalog-body">
        <FilterSidebar
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          selectedAvailability={selectedAvailability}
          onAvailabilityChange={setSelectedAvailability}
          warehouseChecked={warehouseChecked}
          onWarehouseChange={setWarehouseChecked}
        />

        <main className="catalog-main">
          <div className="results-count">
            {t('products_found', { count: filteredProducts.length })}
          </div>

          {filteredProducts.length === 0 ? (
            <div className="empty-state">{t('no_products')}</div>
          ) : (
            <div className="products-grid">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default App;