import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class ListingService {
  #http = inject(HttpClient);

  constructor() { }

  getAll(query = ''): Observable<any> {
    return this.#http.get(
      'https://dummyjson.com/products?limit=10',
    )
  }
  getAllByCategory(query = ''): Observable<any> {
    return this.#http.get(
      `https://dummyjson.com/products/category/${query}`
    );
  }
}
