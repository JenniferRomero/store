import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { CategoriesService } from 'src/app/shared/services/categories/categories.service';
import { CurrencyPipe } from '@angular/common'


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
  providers: [CategoriesService, CurrencyPipe]
})
export class StoreComponent implements OnInit {

  arrayProductos = [];
  arrayFilter = [];
  message: string;
  showFilter = false;
  p: number = 1;

  constructor(public categoriesService: CategoriesService, public currencyPipe: CurrencyPipe) {
  }

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos() {
    this.categoriesService.getCategories().subscribe(
      (data: any) => {
        let randomCategory = data.children_categories[Math.floor(Math.random() * data.children_categories.length)].id;
        this.getItems(randomCategory);
      },
      error => {
        console.log(error);
      });
  }

  getItems(idCategory) {
    this.categoriesService.getItems(idCategory).subscribe(
      (data: any) => {
        this.arrayProductos = data.results.slice(0, 50).map((product, index, array) => {
          let tempProducts = {
                  "title": product.title,
                  "precio": product.price,
                  "imagen": product.thumbnail,
                  "link": product.permalink
                };
          return tempProducts;
      });
      this.estructuraSwiper(this.arrayProductos);
      },
      error => {
        console.log(error);
      });
  }

  estructuraSwiper(data) {
    let htmlData = '';
    for (let i = 0; i < data.length; i++) {
      htmlData += '<div class="swiper-slide">';
      htmlData += '  <div class="row">';
      htmlData += '    <div class="col-md-12 img-card"><a target="_blank" href="' + data[i].link + '">';
      htmlData += '      <img src="' + data[i].imagen + '" alt="banner">';
      htmlData += '    </a></div>';
      htmlData += '    <div class="col-md-12 title-card">';
      htmlData += data[i].title;
      htmlData += '    </div>';
      htmlData += '    <div class="col-md-12 price-card">';
      htmlData += this.currencyPipe.transform(data[i].precio, 'COL', '$');
      htmlData += '    </div>';
      htmlData += '  </div>';
      htmlData += '</div>';
    }

    document.getElementById('productos').innerHTML = htmlData;

    let swiperDos = new Swiper('.swiper-productos', {
      slidesPerView: 4,
      spaceBetween: 30,
      navigation: {
        nextEl: '#swd-n',
        prevEl: '#swd-p',
      },
      breakpoints: {
        320: { slidesPerView: 1, spaceBetween: 20},
        480: { slidesPerView: 2, spaceBetween: 20},
        640: { slidesPerView: 3, spaceBetween: 20},
        1024: { slidesPerView: 4, spaceBetween: 30 },
      }
    });
    swiperDos.pagination.update();
  }

  search(mensaje: string) {
    this.arrayFilter = [];
    if (mensaje != "") {
      this.showFilter = true;
      this.categoriesService.getItemName(mensaje).subscribe(
        (data: any) => {
          this.arrayFilter = data.results.slice(0, 50).map((product, index, array) => {
              let tempProductsFilter = {
                      "title": product.title,
                      "precio": product.price,
                      "imagen": product.thumbnail,
                      "link": product.permalink
                    };
              return tempProductsFilter;
          });
        },
        error => {
          console.log(error);
        });
    } else {
      this.showFilter = false;
    }
  }

}
