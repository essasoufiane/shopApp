import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() product: Product | undefined
//undefined = soit product soit rien
@Output()deleteProductItem: EventEmitter<Product> = new EventEmitter<Product>()

@Output()displayProductViewModal: EventEmitter<Product> = new EventEmitter<Product>()
  constructor() { }

  ngOnInit(): void {
    // console.log(this.product);
  }
  onClickProduct(product: Product | undefined){
    this.displayProductViewModal.emit(product)
    // console.log(product)
    // this.deleteProductItem.emit(product)
  }

}
