import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
// test pedagogique
  title: string ;
  age: number = 28;
  isVerify: boolean = true;
  names:string[] = ['jules','fatima','moulay'];
  test: any = 4.5
  date: Date = new Date()
//
products: Product[] = [
  {
  name: "robe du desert",
  description:"robe de soirée",
  category:['robe','pantalon','jogging'],
  imageUrl:'https://picsum.photos/200/300',
  sold_price: 29,
  regular_price: 59,
  created_at: new Date(),
  }
]
// -------------
  constructor() {
    this.title = 'My Shop'
  }

  ngOnInit(): void {
  }
// test pedago
  hello():string{
    return "2"
  }

}
