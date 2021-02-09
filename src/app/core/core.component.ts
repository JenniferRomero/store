import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/shared/services/categories/categories.service';
import {
  Categorias,
  ProductosML,
  Productos
} from 'src/app/shared/services/categories/productos';
import { map } from 'rxjs/operators';
import { Router} from '@angular/router';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styles: [
  ]
})
export class CoreComponent implements OnInit {

  arrayFilter: Productos[];
  showFilter = false;
  constructor(
    public categoriesService: CategoriesService, private router: Router) { }

  ngOnInit(): void {
  }

  search(mensaje: string) {
    if (mensaje) {
      console.log(mensaje);
      this.router.navigateByUrl(`store/search/${mensaje}`);
    } else {
      this.router.navigateByUrl(`store`);
    }
  }
}
