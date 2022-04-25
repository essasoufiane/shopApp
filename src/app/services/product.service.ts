import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = []

  constructor() { }

  getProducts(){
    return this.products
  }

  addProduct(product: Product){

  }

  editProduct(_id:string,product: Product){

  }

  deleteProduct(_id: string){

  }

}
