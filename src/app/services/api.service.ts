import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IProducto } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _http = inject(HttpClient);
  private urlBase: string = 'https://fakestoreapi.com/products';

  getProducts():Observable<IProducto[]>{
    return this._http.get<IProducto[]>(this.urlBase);
  }

  getProduct(id:number):Observable<IProducto>{
    return this._http.get<IProducto>(`${this.urlBase}/${id}`);
  }  
}
