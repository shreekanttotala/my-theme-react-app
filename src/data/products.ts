import type { TranslationKey } from '../i18n/config';

export type CategoryFilter =
  | 'all'
  | 'cables'
  | 'junction_boxes'
  | 'installation_kits'
  | 'splitters'
  | 'conduits';

export type AvailabilityFilter =
  | 'all'
  | 'in_stock'
  | 'low_stock'
  | 'out_of_stock';

export type StockStatus = 'in_stock' | 'low_stock' | 'out_of_stock';

export interface Product {
  id: string;
  titleKey: TranslationKey;
  subtitleKey: TranslationKey;
  sku: string;
  price: string;
  category: Exclude<CategoryFilter, 'all'>;
  status: StockStatus;
  units: string;
  warehouse: string;
  restockDate?: {
    en: string;
    de: string;
  };
  substituteKey?: TranslationKey;
  visualType: 'cable' | 'junction_box' | 'splitter' | 'kit' | 'conduit';
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    titleKey: 'prod_cat7_title',
    subtitleKey: 'prod_cat7_sub',
    sku: 'FC-CAT7-500M',
    price: '€245,00',
    category: 'cables',
    status: 'in_stock',
    units: '1.240',
    warehouse: 'Lux HUB',
    visualType: 'cable',
  },
  {
    id: '2',
    titleKey: 'prod_fjb_title',
    subtitleKey: 'prod_fjb_sub',
    sku: 'FJB-12P',
    price: '€89,50',
    category: 'junction_boxes',
    status: 'low_stock',
    units: '48',
    warehouse: 'Lux HUB',
    restockDate: {
      en: '20 June 2026',
      de: '20. Juni 2026',
    },
    substituteKey: 'prod_splitter_title',
    visualType: 'junction_box',
  },
  {
    id: '3',
    titleKey: 'prod_splitter_title',
    subtitleKey: 'prod_splitter_sub',
    sku: 'OS-1X4-PLC',
    price: '€34,90',
    category: 'splitters',
    status: 'in_stock',
    units: '620',
    warehouse: 'Lux HUB',
    visualType: 'splitter',
  },
  {
    id: '4',
    titleKey: 'prod_kit_title',
    subtitleKey: 'prod_kit_sub',
    sku: 'IK-FTTH-PRO',
    price: '€415,00',
    category: 'installation_kits',
    status: 'in_stock',
    units: '85',
    warehouse: 'Lux HUB',
    visualType: 'kit',
  },
  {
    id: '5',
    titleKey: 'prod_conduit_title',
    subtitleKey: 'prod_conduit_sub',
    sku: 'CD-HDPE-100M',
    price: '€128,00',
    category: 'conduits',
    status: 'out_of_stock',
    units: '0',
    warehouse: 'Lux HUB',
    restockDate: {
      en: '15 July 2026',
      de: '15. Juli 2026',
    },
    substituteKey: 'prod_cat7_title',
    visualType: 'conduit',
  },
  {
    id: '6',
    titleKey: 'prod_os2_title',
    subtitleKey: 'prod_os2_sub',
    sku: 'FC-OS2-1000M',
    price: '€390,00',
    category: 'cables',
    status: 'in_stock',
    units: '310',
    warehouse: 'Lux HUB',
    visualType: 'cable',
  },
];