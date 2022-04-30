import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { interval, Observable, of } from 'rxjs';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class ProdService {

  private products: Product[] = []
  private urlApi: string = "http://shopapp.com/assets/products.json"

  constructor(private http: HttpClient) { }

  // getProducts(): Promise<Product[]> {
  //   return new Promise((resolve, reject) => {
  //     if (this.products.length) {
  //       resolve(this.products)
  //     } else {
  //       reject([])
  //     }
  //   })

  // }

  getProducts(): Observable<Product[]>{
   return this.http.get<Product[]>(this.urlApi)
  }

  getNumber(): Observable<Number>{
    return of(98)

  }

  getSecond(): Observable<Number>{
    return interval(1000)
  }

  addProduct(product: Product) {

  }

  editProduct(_id: string, product: Product) {

  }

  deleteProduct(_id: string) {

  }

}
