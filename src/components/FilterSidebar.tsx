import React from 'react';
import { useTranslation } from 'react-i18next';
import type { CategoryFilter, AvailabilityFilter } from '../data/products';

interface FilterSidebarProps {
  selectedCategory: CategoryFilter;
  onCategoryChange: (cat: CategoryFilter) => void;
  selectedAvailability: AvailabilityFilter;
  onAvailabilityChange: (avail: AvailabilityFilter) => void;
  warehouseChecked: boolean;
  onWarehouseChange: (checked: boolean) => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  selectedCategory,
  onCategoryChange,
  selectedAvailability,
  onAvailabilityChange,
  warehouseChecked,
  onWarehouseChange,
}) => {
  const { t } = useTranslation();

  const categories: { value: CategoryFilter; label: string }[] = [
    { value: 'all', label: t('cat_all') },
    { value: 'cables', label: t('cat_cables') },
    { value: 'junction_boxes', label: t('cat_junction_boxes') },
    { value: 'installation_kits', label: t('cat_installation_kits') },
    { value: 'splitters', label: t('cat_splitters') },
    { value: 'conduits', label: t('cat_conduits') },
  ];

  const availabilities: { value: AvailabilityFilter; label: string }[] = [
    { value: 'all', label: t('avail_all') },
    { value: 'in_stock', label: t('avail_in_stock') },
    { value: 'low_stock', label: t('avail_low_stock') },
    { value: 'out_of_stock', label: t('avail_out_of_stock') },
  ];

  return (
    <aside className="filter-sidebar">
      <div className="filter-header">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#1e293b"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
        </svg>
        <h2>{t('filters_title')}</h2>
      </div>

      <div className="filter-group">
        <h3>{t('filter_category')}</h3>
        {categories.map((cat) => (
          <label key={cat.value} className="filter-option">
            <input
              type="radio"
              name="category"
              checked={selectedCategory === cat.value}
              onChange={() => onCategoryChange(cat.value)}
            />
            <span>{cat.label}</span>
          </label>
        ))}
      </div>

      <div className="filter-group">
        <h3>{t('filter_availability')}</h3>
        {availabilities.map((avail) => (
          <label key={avail.value} className="filter-option">
            <input
              type="radio"
              name="availability"
              checked={selectedAvailability === avail.value}
              onChange={() => onAvailabilityChange(avail.value)}
            />
            <span>{avail.label}</span>
          </label>
        ))}
      </div>

      <div className="filter-group">
        <h3>{t('filter_warehouse')}</h3>
        <label className="filter-option">
          <input
            type="checkbox"
            checked={warehouseChecked}
            onChange={(e) => onWarehouseChange(e.target.checked)}
          />
          <span>Lux HUB</span>
        </label>
      </div>
    </aside>
  );
};

export default FilterSidebar;