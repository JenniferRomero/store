import { Component, OnInit } from '@angular/core';
import {
  Categorias,
  ProductosML,
  Productos
} from 'src/app/shared/services/categories/productos';
import { CategoriesService } from 'src/app/shared/services/categories/categories.service';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {
  arrayFilter: Productos[];
  message: string;
  showFilter = false;
  pageFilter = 1;

  constructor(
    public categoriesService: CategoriesService,
    private route: ActivatedRoute) {
      this.message = this.route.snapshot.params.text;
      console.log(this.message);

    }

  ngOnInit(): void {
    this.search(this.message);
  }

  search(mensaje: string) {
    this.arrayFilter = [];
    if (mensaje) {
      this.categoriesService
        .getItemName(mensaje)
        .pipe(
          map((data: ProductosML) =>
            data.results.slice(0, 54).map((item) => ({
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
            this.arrayFilter = data;
          },
          (error) => {
            this.arrayFilter = null;
          }
        );
    } else {
    }
  }

}
