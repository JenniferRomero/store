import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { CartService } from 'src/app/shared/services/cart/cart.service';
import { CategoriesService } from 'src/app/shared/services/categories/categories.service';
import { MockProductos } from 'src/app/shared/services/categories/mock-productos';
import { Productos, ProductosML } from 'src/app/shared/services/categories/productos';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  product: Productos = {id: '',title: '',precio: 0,imagen: '',link:'', cantidad: 0};
  tipo: string;
  filter: string;
  productId: string;

  constructor(
    public categoriesService: CategoriesService,
    public cartService: CartService,
    private route: ActivatedRoute,
    private router: Router) {

      this.tipo = this.route.snapshot.params.tipo;
      this.filter = this.route.snapshot.params.filtro;
      this.productId = this.route.snapshot.params.id;
  }

  ngOnInit(): void {
    if (this.tipo==='1') {
        this.getItems(this.filter);
    } else {
      this.search(this.filter);
    }
  }

  getItems(idCategory: string) {
    this.categoriesService
      .getItems(idCategory)
      .pipe(
        map((data: ProductosML) =>
          data.results.filter(valor => valor.id === this.productId).map((item) => ({
            id: item.id,
            title: item.title,
            precio: item.price,
            imagen: item.thumbnail,
            link: item.permalink,
            cantidad: 1
          }))
        )
      )
      .subscribe(
        (data: any) => {
          this.product = data[0];
        },
        (error) => {
          this.product = null;
        }
      );
  }

  search(mensaje: string) {
    if (mensaje) {
      this.categoriesService
        .getItemName(mensaje)
        .pipe(
          map((data: ProductosML) =>
            data.results.filter(valor => valor.id === this.productId).map((item) => ({
              id: item.id,
              title: item.title,
              precio: item.price,
              imagen: item.thumbnail,
              link: item.permalink,
              cantidad: 1
            }))
          )
        )
        .subscribe(
          (data: any) => {
            this.product = data[0];
          },
          (error) => {
            this.product = null;
          }
        );
    } else {
    }
  }

  addCart(producto: Productos) {
    this.cartService.addCart(producto);
    this.router.navigateByUrl('store/cart');
  }
}
