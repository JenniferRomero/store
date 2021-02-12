import { createReducer, on } from '@ngrx/store';

import { add, remove, inc } from './cart.actions';

export interface Cart {
  products: any[];
  count: number;
  total: number;
}

export const initialState: Cart = {
  products: [],
  count: 0,
  total: 0
};

export const cartReducer = createReducer(initialState,
  on(add, (state, props) => {
    const products = state.products.slice();
    let total = 0;
    if (products.length) {
      const index = products.findIndex(item => item.id === props.id);

      if (index >= 0) {
        products[index].cantidad = products[index].cantidad + 1;
      } else {
        products.push(props);
      }
    } else {
      products.push(props);
    }

    products.forEach(item => {
      total = total + (item.cantidad * item.precio);
    });

    return { ...state, count: state.count + 1, products, total };
  }),
  on(remove, (state, props) => {
    const products = state.products.slice();

    let total = 0;
    if (products.length) {
      const index = products.findIndex(item => item.id === props.id);
      if (index !== -1) {
        products.splice(index, 1);
      }
    }

    products.forEach(item => {
      total = total + (item.cantidad * item.precio);
    });

    return { ...state, count: state.count - 1, products, total };
  })
  );



  // export const initial = 0;

  // export const cartReducer = createReducer(
  //   initial,
  //   on(inc, state => {
  //     const prueba = state + 1;
  //     console.log(prueba);
  //     return prueba;
  //   })
  // );
