import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

import { StoreComponent } from './store/store.component';
import { DetailComponent } from './detail/detail.component';
import { CoreComponent } from './core.component';
import { SearchComponent } from './search/search/search.component';
import { CartComponent } from './cart/cart.component';
import { CarritoComponent } from './carrito/carrito.component';


    // <!-- nuevo -->

@NgModule({
  declarations: [
    CoreComponent,
    StoreComponent,
    DetailComponent,
    SearchComponent,
    CartComponent,
    CarritoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ComponentsModule,
    SwiperModule,
    NgxPaginationModule
  ],
  exports: [
    CoreComponent,
    StoreComponent,
    DetailComponent,
    SearchComponent,
    CartComponent
  ]
})
export class CoreModule { }
