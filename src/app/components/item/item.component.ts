import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() product: Product | undefined
//undefined = soit product soit rien
  constructor() { }

  ngOnInit(): void {
    console.log(this.product);
  }
  onClickProduct(papa: Product | undefined){
    console.log(papa)
  }

}
