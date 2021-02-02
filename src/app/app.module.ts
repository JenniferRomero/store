import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { StoreComponent } from './core/store/store.component';
import { BannerComponent } from './components/banner/banner.component';
import { SwiperModule } from 'swiper/angular';
import { DeportesComponent } from './components/deportes/deportes.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    BannerComponent,
    DeportesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    SwiperModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  exports: [
    BannerComponent,
    DeportesComponent,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
