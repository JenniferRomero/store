import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { remove } from 'src/app/ngrx/cart.actions';
import { Cart } from '../../ngrx/cart.reducer';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {
  products$: Observable<any[]>;
  count$: Observable<number>;
  total$: Observable<number>;
  cart$: Observable<Cart>;

  constructor(private store: Store<{ cart: Cart }>) {
    this.products$ = store.pipe(select(state => state.cart.products));
    this.count$ = store.pipe(select(state => state.cart.count));
    this.total$ = store.pipe(select(state => state.cart.total));
  }

  ngOnInit(): void {
    this.cart$ = this.store.pipe(select('cart'));
  }

  remove(product) {
    this.store.dispatch(remove(product));
  }

}
