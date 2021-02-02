import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  path = 'https://api.mercadolibre.com/';

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get(this.path + 'categories/MCO1430');
  }

  getItems(idCategory) {
    return this.http.get(this.path + 'sites/MCO/search?category='+idCategory);
  }

  getItemName(name) {
    return this.http.get(this.path + 'sites/MCO/search?q='+name);
  }
}
