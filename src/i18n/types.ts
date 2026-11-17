export type Language = 'en' | 'de';

export interface TranslationDictionary {
  language_label: string;
  lang_en: string;
  lang_de: string;
  search_placeholder: string;
  products_found: string;
  filters_title: string;
  filter_category: string;
  cat_all: string;
  cat_cables: string;
  cat_junction_boxes: string;
  cat_installation_kits: string;
  cat_splitters: string;
  cat_conduits: string;
  filter_availability: string;
  avail_all: string;
  avail_in_stock: string;
  avail_low_stock: string;
  avail_out_of_stock: string;
  filter_warehouse: string;
  units_count: string;
  restock_date: string;
  add_to_order: string;
  added_to_order: string;
  view_documents: string;
  suggested_substitute: string;
  no_products: string;
  // Product titles & subtitles
  prod_cat7_title: string;
  prod_cat7_sub: string;
  prod_fjb_title: string;
  prod_fjb_sub: string;
  prod_splitter_title: string;
  prod_splitter_sub: string;
  prod_kit_title: string;
  prod_kit_sub: string;
  prod_conduit_title: string;
  prod_conduit_sub: string;
  prod_os2_title: string;
  prod_os2_sub: string;
}