import { Component, OnInit } from '@angular/core';

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
  produit: object[] = [
    {
    name: "robe pour femmes",
    description: 'jolie robe pour femme',
    sold_price: 1299,
    regular_price: 1899,
    isSolded: false,
  },
    {
    name: "robe pour femmes",
    description: 'jolie robe pour femme',
    sold_price: 1299,
    regular_price: 1899,
    isSolded: false,
  },
    {
    name: "robe pour femmes",
    description: 'jolie robe pour femme',
    sold_price: 1299,
    regular_price: 1899,
    isSolded: false,
  },
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
