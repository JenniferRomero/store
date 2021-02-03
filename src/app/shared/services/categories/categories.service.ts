import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  path = 'https://api.mercadolibre.com/';

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get(`${this.path}categories/MCO1430`);
  }

  getItems(idCategory: number) {
    return this.http.get(`${this.path}sites/MCO/search?category=${idCategory}`);
  }

  getItemName(name: string) {
    return this.http.get(`${this.path}sites/MCO/search?q=${name}`);
  }
}
