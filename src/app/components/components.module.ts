import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { BannerComponent } from './banner/banner.component';
import { DeportesComponent } from './deportes/deportes.component';



@NgModule({
  declarations: [BannerComponent, DeportesComponent],
  imports: [
    CommonModule,
    SwiperModule
  ],
  exports: [BannerComponent, DeportesComponent]
})
export class ComponentsModule { }
