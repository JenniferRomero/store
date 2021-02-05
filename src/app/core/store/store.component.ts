import {
  Categorias,
  ProductosML,
  Productos
} from 'src/app/shared/services/categories/productos';
import { Component, OnInit } from '@angular/core';
// import Swiper core and required components
import SwiperCore, {
  A11y,
  Navigation,
  Pagination,
  Scrollbar,
} from 'swiper/core';

import { CategoriesService } from 'src/app/shared/services/categories/categories.service';
import { CurrencyPipe } from '@angular/common';
import { MockCategories } from 'src/app/shared/services/categories/mock-categories';
import { map } from 'rxjs/operators';

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
  providers: [CategoriesService, CurrencyPipe],
})
export class StoreComponent implements OnInit {
  arrayProductos: Productos[];
  arrayFilter: Productos[];
  message: string;
  showFilter = false;
  pageFilter = 1;
  categories: Categorias;

  constructor(
    public categoriesService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.getProductos();
    this.pruebaPromise();
  }

  async pruebaPromise() {
    const respuesta = await this.categoriesService.getCategories2();
  }

  getProductos() {
    this.categoriesService.getCategories().subscribe(
      (data: Categorias) => {
        this.categories = data;
        const { id } = this.categories.children_categories[
          Math.floor(Math.random() * data.children_categories.length)
        ];
        this.getItems(id);
      },
      (error) => {
        this.categories = null;
      }
    );
  }

  getItems(idCategory: string) {
    this.categoriesService
      .getItems(idCategory)
      .pipe(
        map((data: ProductosML) =>
          data.results.slice(0, 54).map((item) => ({
            title: item.title,
            precio: item.price,
            imagen: item.thumbnail,
            link: item.permalink,
          }))
        )
      )
      .subscribe(
        (data: any) => {
          console.log(JSON.stringify(data));
          this.arrayProductos = data;
        },
        (error) => {
          this.arrayProductos = null;
        }
      );
  }

  search(mensaje: string) {
    this.arrayFilter = [];
    if (mensaje) {
      this.showFilter = true;
      this.categoriesService
        .getItemName(mensaje)
        .pipe(
          map((data: ProductosML) =>
            data.results.slice(0, 54).map((item) => ({
              title: item.title,
              precio: item.price,
              imagen: item.thumbnail,
              link: item.permalink,
            }))
          )
        )
        .subscribe(
          (data: any) => {
            this.arrayFilter = data;
          },
          (error) => {
            this.arrayFilter = null;
          }
        );
    } else {
      this.showFilter = false;
    }
  }
}
