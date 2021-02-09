export interface Productos {
  id: string;
  title: string;
  precio: number;
  imagen: string;
  link: string;
  cantidad: number;
}
export interface Categorias {
  attributable: boolean;
  attribute_types: string;
  children_categories: Array<ChildCategory>,
  date_created: string;
  id: string;
  meta_categ_id: null;
  name: string;
  path_from_root: Array<PathFromRoot>
  permalink: string;
  picture: string;
  // settings: Array<settingsCategories>;
}

export interface ProductosML {
  site_id: string;
  paging: {
    limit: number;
    offset: number;
    primary_results: number;
    total: number;
  },
  results: Array<resultsProducts>,
  secondary_results: {};
  related_results: {};
  available_filters: Array<availablefilters>,
  available_sorts: Array<available_sorts>,
  filters: Array<filters>,
  sort: {
    id: string;
    name: string;
  },
  query: string;
}

interface ChildCategory {
  id: string;
  name: string;
  total_items_in_this_category: number;
};


interface PathFromRoot{
  id: string;
  name: string;
}
interface settingsCategories {
  adult_content: boolean;
  buyer_protection_programs: Array<string>;
  buying_allowed: boolean;
  buying_modes: Array<string>;
  catalog_domain: string;
  coverage_areas: string;
  currencies: Array<string>;
  fragile: boolean;
  immediate_payment: string;
  item_conditions: Array<string>;
  items_reviews_allowed: boolean;
  listing_allowed: boolean;
  max_description_length: number;
  max_pictures_per_item: number;
  max_pictures_per_item_var: number;
  max_sub_title_length: number;
  max_title_length: number;
  maximum_price: null;
  minimum_price: number;
  mirror_category: null;
  mirror_master_category: null;
  mirror_slave_categories: Array<string>;
  price: string;
  reservation_allowed: string;
  restrictions: Array<string>;
  rounded_address: boolean;
  seller_contact: string;
  shipping_modes: Array<string>;
  shipping_options: Array<string>;
  shipping_profile: string;
  show_contact_information: boolean;
  simple_shipping: string;
  status: string;
  stock: string;
  sub_vertical: null;
  subscribable: boolean;
  tags: {};
  vertical: null;
  vip_subdomain: string;
  total_items_in_this_category: number;
}

interface attPl {
  attribute_group_id: string;
  attribute_group_name: string;
  id: string;
  name: string;
  source: number;
  value_id: string;
  value_name: string;
  value_struct: null;
  values: Array<valuesAtt>;
};

interface valuesAtt {
  id: string;
  name: string;
  source: number;
  struct: null;
};


interface resultsProducts {
    accepts_mercadopago: boolean;
    address: {
      state_id: string;
      state_name: string;
      city_id: string;
      city_name: string;
    };
    attributes: Array<attPl>;
    available_quantity: number;
    buying_mode: string;
    catalog_product_id: null;
    category_id: string;
    condition: string;
    currency_id: string;
    differential_pricing: differentialPricing;
    domain_id: string;
    id: string;
    installments: {
      quantity: number;
      amount: number;
      rate: number;
      currency_id: string;
    };
    listing_type_id: string;
    official_store_id: null;
    order_backend: number;
    original_price: null;
    permalink: string;
    price: number;
    prices: {};
    sale_price: null;
    seller: {
      id: number;
      permalink: null;
      registration_date: null;
      car_dealer: boolean;
      real_estate_agency: boolean;
      tags: null;
    };
    seller_address: {
      address_line: string;
      city: {
        id: string;
        name: string;
      };
      comment: string;
      country: {
        id: string;
        name: string;
      };
      id: string;
      latitude: string;
      longitude: string;
      state: {
        id: string;
        name: string;
      };
      zip_code: string;
    };
    shipping: {
      free_shipping: boolean;
      mode: string;
      tags: {};
      logistic_type: string;
      store_pick_up: boolean;
    };
    site_id: string;
    sold_quantity: number;
    stop_time: string;
    tags: {};
    thumbnail: string;
    thumbnail_id: string;
    title: string;
  }
  interface differentialPricing {
    id: number;
  };

  interface available_sorts{
    id: string;
    name: string;
  }

  interface filters{
    id: string;
    name: string;
    type: string;
    values: Array<valuesFilters>;
  }

  interface valuesFilters {
    id: string;
    name: string;
    path_from_root: Array<pathFilters>
  };


  interface pathFilters {
    id: string;
    name: string;
  }

  interface availablefilters{
    id: string;
    name: string;
    type: string;
    values: Array<valuesAf>
  }

  interface valuesAf{
    id: string;
    name: string;
    results: number;
  }
