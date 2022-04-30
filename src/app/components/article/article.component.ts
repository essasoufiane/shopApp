import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProdService } from 'src/app/services/product.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit, OnDestroy {
  // test pedagogique
  // age: number = 28;
  // isVerify: boolean = true;
  // names:string[] = ['jules','fatima','moulay'];
  // test: any = 4.5
  title: string = 'My Shop'
  date: Date = new Date()

  productsSub: Subscription | undefined

  products: Product[] = [
    // {
    // name: "robe du desert",
    // description:"robe de soirée",
    // category:['robe','pantalon','jogging'],
    // imageUrl:'https://picsum.photos/200/300',
    // sold_price: 29,
    // regular_price: 59,
    // created_at: new Date(),
    // }
  ]
  // -------------
  isDisplayModal: boolean = false
  modalProduct: Product | undefined
  constructor(private productService: ProdService) { }

  ngOnInit(): void {
    // this.products = this.productService.getProducts()
    this.productsSub = this.productService.getProducts()
    .subscribe({
      next: (products: Product[])=>{
        this.products = products
      },
      error: (error: any)=>{
        console.log("Error : ", error)
      },
      complete: ()=>{
        console.log("complete !")
      },
    })

  }

  ngOnDestroy(){
    this.productsSub?.unsubscribe()
  }

  // test pedago
  // hello():string{
  //   return "2"
  // }

  handleDeleteProduct(product: Product) {
    this.products = this.products.filter(p => p._id !== product._id)
    console.log('handleDeleteProduct:', product);
  }
  handleDisplayProductViewModal(product: Product) {
    console.log("-------------------------------------------------")
    console.log(product)
    if (product) {
      this.isDisplayModal = true
      this.modalProduct = product
    }
  }
  handleCloseModal() {
    this.isDisplayModal = false
    this.modalProduct = undefined
  }
}
