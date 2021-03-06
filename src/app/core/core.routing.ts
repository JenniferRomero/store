import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CoreComponent } from './core.component';
import { StoreComponent } from './store/store.component';
import { DetailComponent } from './detail/detail.component';
import { SearchComponent } from './search/search/search.component';
import { CartComponent } from './cart/cart.component';
import { CarritoComponent } from './carrito/carrito.component';

    // <!-- nuevo -->
const routes: Routes = [
  {
    path: 'store',
    component: CoreComponent,
    children: [
      { path: '', component: StoreComponent },
      { path: 'detail/:tipo/:filtro/:id', component: DetailComponent },
      { path: 'search/:text', component: SearchComponent },
      { path: 'cart', component: CartComponent },
      { path: 'carrito', component: CarritoComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {}
