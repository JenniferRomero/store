import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categorias, ProductosML } from './productos';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  path: string;

  constructor(private http: HttpClient) {
    this.path = environment.endpointML;
  }

  getCategories(): Observable<Categorias> {
    return this.http.get<Categorias>(`${this.path}categories/MCO1430`);
  }

  getItems(idCategory: number): Observable<ProductosML> {
    return this.http.get<ProductosML>(`${this.path}sites/MCO/search?category=${idCategory}`);
  }

  getItemName(name: string): Observable<ProductosML> {
    return this.http.get<ProductosML>(`${this.path}sites/MCO/search?q=${name}`);
  }
}
