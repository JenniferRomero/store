import { Observable, of } from "rxjs";
import { Categorias } from "./productos";

export class MockCat {

  public getCategories(): Observable<Categorias> {
    return of(MockCategories);
  }
}

export const MockCategories:Categorias = {
  id: 'MCO1430',
  name: 'Ropa y Accesorios',
  picture:
    'http://resources.mlstatic.com/category/images/eb722172-7d47-4a40-a65e-dab06e4f8ee6.png',
  permalink: 'https://www.mercadolibre.com.co/c/ropa-y-accesorios',
  path_from_root: [{ id: 'MCO1430', name: 'Ropa y Accesorios' }],
  children_categories: [
    {
      id: 'MCO118376',
      name: 'Accesorios de Moda',
      total_items_in_this_category: 426707,
    },
    {
      id: 'MCO157296',
      name: 'Bermudas y Pantalonetas',
      total_items_in_this_category: 5870,
    },
    { id: 'MCO157280', name: 'Blusas', total_items_in_this_category: 26021 },
    { id: 'MCO157281', name: 'Buzos', total_items_in_this_category: 42797 },
    { id: 'MCO5208', name: 'Calzado', total_items_in_this_category: 219821 },
    { id: 'MCO157282', name: 'Camisas', total_items_in_this_category: 22877 },
    { id: 'MCO157283', name: 'Camisetas', total_items_in_this_category: 95471 },
    {
      id: 'MCO157285',
      name: 'Chaquetas y Abrigos',
      total_items_in_this_category: 32120,
    },
    { id: 'MCO441905', name: 'Enterizos', total_items_in_this_category: 2945 },
    {
      id: 'MCO3109',
      name: 'Equipaje, Bolsos y Carteras',
      total_items_in_this_category: 341064,
    },
    { id: 'MCO157286', name: 'Faldas', total_items_in_this_category: 6264 },
    { id: 'MCO441906', name: 'Leggings', total_items_in_this_category: 4158 },
    {
      id: 'MCO157289',
      name: 'Pantalones y Jeans',
      total_items_in_this_category: 31229,
    },
    {
      id: 'MCO441730',
      name: 'Ropa de Danza y Patinaje',
      total_items_in_this_category: 121,
    },
    {
      id: 'MCO118153',
      name: 'Ropa Deportiva',
      total_items_in_this_category: 46465,
    },
    {
      id: 'MCO441828',
      name: 'Ropa Interior y de Dormir',
      total_items_in_this_category: 103363,
    },
    {
      id: 'MCO1455',
      name: 'Ropa para Bebés',
      total_items_in_this_category: 10507,
    },
    {
      id: 'MCO413460',
      name: 'Ropa por Mayor',
      total_items_in_this_category: 600,
    },
    {
      id: 'MCO441827',
      name: 'Sacos, Suéteres y Chalecos',
      total_items_in_this_category: 15116,
    },
    { id: 'MCO157293', name: 'Trajes', total_items_in_this_category: 17292 },
    {
      id: 'MCO441881',
      name: 'Uniformes y Ropa de Trabajo',
      total_items_in_this_category: 11886,
    },
    { id: 'MCO157294', name: 'Vestidos', total_items_in_this_category: 73235 },
    {
      id: 'MCO157295',
      name: 'Vestidos de Baño',
      total_items_in_this_category: 12436,
    },
    { id: 'MCO1911', name: 'Otros', total_items_in_this_category: 57031 },
  ],
  attribute_types: 'variations',
  // settings: {
  //   adult_content: false,
  //   buying_allowed: true,
  //   buying_modes: ['auction', 'buy_it_now'],
  //   catalog_domain: 'MCO-CLOTHING',
  //   coverage_areas: 'not_allowed',
  //   currencies: ['USD', 'COP'],
  //   fragile: false,
  //   immediate_payment: 'required',
  //   item_conditions: ['new', 'not_specified', 'used'],
  //   items_reviews_allowed: false,
  //   listing_allowed: false,
  //   max_description_length: 50000,
  //   max_pictures_per_item: 12,
  //   max_pictures_per_item_var: 10,
  //   max_sub_title_length: 70,
  //   max_title_length: 60,
  //   maximum_price: null,
  //   minimum_price: 1000,
  //   mirror_category: null,
  //   mirror_master_category: null,
  //   mirror_slave_categories: [],
  //   price: 'required',
  //   reservation_allowed: 'not_allowed',
  //   restrictions: [],
  //   rounded_address: false,
  //   seller_contact: 'not_allowed',
  //   shipping_modes: ['custom', 'me1', 'not_specified'],
  //   shipping_options: ['custom', 'carrier'],
  //   shipping_profile: 'optional',
  //   show_contact_information: false,
  //   simple_shipping: 'optional',
  //   stock: 'required',
  //   sub_vertical: null,
  //   subscribable: false,
  //   tags: [],
  //   vertical: null,
  //   vip_subdomain: 'articulo',
  //   buyer_protection_programs: ['delivered', 'undelivered'],
  //   status: 'enabled',
  //},
  meta_categ_id: null,
  attributable: false,
  date_created: '2018-04-25T08:12:56.000Z',
};
