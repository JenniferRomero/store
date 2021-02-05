import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/shared/services/categories/categories.service';
import { CurrencyPipe } from '@angular/common';
// import Swiper core and required components
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper/core';
import { map } from 'rxjs/operators';
import {
  Categorias,
  ProductosML,
} from 'src/app/shared/services/categories/productos';
import { MockCategories } from 'src/app/shared/services/categories/mock-categories';
// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
  providers: [CategoriesService, CurrencyPipe],
})
export class StoreComponent implements OnInit {
  arrayProductos: [];
  arrayFilter = [];
  message: string;
  showFilter = false;
  pageFilter = 1;
  categories: Categorias;
  pruebaP: Categorias;

  constructor(
    private categoriesService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.getProductos();
    this.pruebaPromise();
  }

  async pruebaPromise() {
    const respuesta = await this.categoriesService.getCategories2();
    this.pruebaP = respuesta;
    console.log(respuesta);
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
        console.log(error);
      }
    );
  }

  getItems(idCategory) {
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
          this.arrayProductos = data;
        },
        (error) => {
          console.log(error);
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
            console.log(error);
          }
        );
    } else {
      this.showFilter = false;
    }
  }
}
