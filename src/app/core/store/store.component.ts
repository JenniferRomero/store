import { Component, Output, OnInit, EventEmitter, ViewChild, AfterViewInit, OnChanges } from '@angular/core';
import Swiper from 'swiper';
import { CategoriesService } from 'src/app/shared/services/categories/categories.service';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Virtual } from 'swiper/core';
import { CurrencyPipe } from '@angular/common'
import { HeaderComponent } from "../../shared/theme/header/header.component";


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
        console.log(data.children_categories);
        /*for (let i = 0; i < data.children_categories.length; i++) {
          this.getItems(data.children_categories[i].id);
        }*/
        let randomCategory = data.children_categories[Math.floor(Math.random() * data.children_categories.length)].id;
        this.getItems(randomCategory);
      },
      error => {
        console.log(error);
      });
  }

  getItems(idCategory) {
    console.log(idCategory);
    this.categoriesService.getItems(idCategory).subscribe(
      (data: any) => {
        for (let i = 0; i < data.results.length; i++) {
          if (this.arrayProductos.length <= 50) {
            this.arrayProductos.push({
              "title": data.results[i].title,
              "precio": data.results[i].price,
              "imagen": data.results[i].thumbnail,
              "link": data.results[i].permalink
            });
          }
        }
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

    var swiperDos = new Swiper('.swiper-productos', {
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
    console.log(mensaje);
    this.arrayFilter = [];
    if (mensaje != "") {
      this.showFilter = true;
      this.categoriesService.getItemName(mensaje).subscribe(
        (data: any) => {
          console.log(data);
          for (let i = 0; i < data.results.length; i++) {
            if (this.arrayFilter.length <= 50) {
              this.arrayFilter.push({
                "title": data.results[i].title,
                "precio": data.results[i].price,
                "imagen": data.results[i].thumbnail,
                "link": data.results[i].permalink
              });
            }
          }
        },
        error => {
          console.log(error);
        });
    } else {
      this.showFilter = false;
    }
  }

}
