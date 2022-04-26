import { Injectable } from '@angular/core';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class ProdService {

  private products: Product[] = [
    {
      _id: '124342',
      name: "robe du desert",
      description: "robe de soirée",
      category: ['robe', 'femmes'],
      imageUrl: [
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300',
      ],
      sold_price: 29,
      regular_price: 59,
      created_at: new Date(),
    },
    {
      _id: '908343',
      name: "robe Loui Vuitton",
      description: "robe des champs de mais elysées",
      category: ['robe', 'femmes'],
      imageUrl: [
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300',
      ],
      sold_price: 8000,
      regular_price: 12000,
      created_at: new Date(),
    },
    {
      _id: '349843',
      name: "robe Armani",
      description: "robe d'italie mafia",
      category: ['robe', 'femmes'],
      imageUrl: [
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300',
      ],
      sold_price: 3000,
      regular_price: 5399,
      created_at: new Date(),
    },
    {
      _id: '234898',
      name: "robe Gucci",
      description: "robe en soit de canard",
      category: ['robe', 'femmes'],
      imageUrl: [
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300',
      ],
      sold_price: 1000,
      regular_price: 2000,
      created_at: new Date(),
    },
    {
      _id: '124342',
      name: "robe de start",
      description: "robe de starlette",
      category: ['robe', 'femmes'],
      imageUrl: [
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300',
      ],
      sold_price: 5000,
      regular_price: 9999,
      created_at: new Date(),
    },
    {
      _id: '323989',
      name: "robe du futur",
      description: "robe gadjet",
      category: ['robe', 'femmes'],
      imageUrl: [
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300',
      ],
      sold_price: 2999,
      regular_price: 5999,
      created_at: new Date(),
    },
    {
      _id: '234958',
      name: "robe pourrix",
      description: "robe qui pue la merde",
      category: ['robe', 'femmes'],
      imageUrl: [
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300',
      ],
      sold_price: 1000,
      regular_price: 3000,
      created_at: new Date(),
    },
    {
      _id: '124342',
      name: "robe trizo",
      description: "robe d'attarder'",
      category: ['robe', 'femmes'],
      imageUrl: [
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300',
      ],
      sold_price: 800,
      regular_price: 2000,
      created_at: new Date(),
    },
    {
      _id: '456098',
      name: "robe Ricky",
      description: "robe inteligente",
      category: ['robe', 'femmes'],
      imageUrl: [
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300',
      ],
      sold_price: 3909,
      regular_price: 5945,
      created_at: new Date(),
    },
    {
      _id: '098456',
      name: "robe simson",
      description: "robe marrante",
      category: ['robe', 'femmes'],
      imageUrl: [
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300',
      ],
      sold_price: 566,
      regular_price: 1300,
      created_at: new Date(),
    },
    {
      _id: '859403',
      name: "robe morty",
      description: "robe de manga",
      category: ['robe', 'femmes'],
      imageUrl: [
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300',
      ],
      sold_price: 2934,
      regular_price: 5978,
      created_at: new Date(),
    },
    {
      _id: '643543',
      name: "robe de malade",
      description: "robe qui tue",
      category: ['robe', 'femmes'],
      imageUrl: [
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300',
      ],
      sold_price: 292,
      regular_price: 593,
      created_at: new Date(),
    },
  ]

  constructor() { }

  getProducts(): Promise<Product[]> {
    return new Promise((resolve, reject) => {
      if (this.products.length) {
        resolve(this.products)
      } else {
        reject([])
      }
    })

  }

  addProduct(product: Product) {

  }

  editProduct(_id: string, product: Product) {

  }

  deleteProduct(_id: string) {

  }

}
