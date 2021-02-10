import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Productos } from '../categories/productos';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // <!-- nuevo -->
  public cart = new BehaviorSubject<Array<Productos>>(null);
  public currentDataCart$ = this.cart.asObservable();

  constructor() {}

  public addCart(newData: Productos) {
    let listCart = this.cart.getValue();

    if (listCart) {
      const objIndex = listCart.findIndex((obj) => obj.id === newData.id);
      if (objIndex !== -1) {
        listCart[objIndex].cantidad += 1;
      } else {
        listCart.push(newData);
      }
    } else {
      listCart = [];
      listCart.push(newData);
    }

    this.cart.next(listCart);
  }

  public removeElementCart(newData: Productos) {
    const listCart = this.cart.getValue();
    const objIndex = listCart.findIndex((obj) => obj.id === newData.id);
    if (objIndex !== -1) {
      listCart[objIndex].cantidad = 1;
      listCart.splice(objIndex, 1);
    }
    this.cart.next(listCart);
  }
}
