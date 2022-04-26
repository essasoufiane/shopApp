import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { interval, Observable, of } from 'rxjs';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class ProdService {

  private products: Product[] = []
  constructor(private http: HttpClient) { }

  // getProducts(): Promise<Product[]> {
  //   return new Promise((resolve, reject) => {
  //     if (this.products.length) {
  //       resolve(this.products)
  //     } else {
  //       reject([])
  //     }
  //   })

getProducts(){
  // PUT et PATCH = modification des données existante sur le serveur
  // DELETE = suprrimer des données existante sur le serveur

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

