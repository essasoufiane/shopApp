export interface Product {
  name: string,
  description:string,
  category:string[],
  imageUrl:string,
  sold_price: number,
  regular_price: number,
  created_at: Date,
  updated_at?: Date,
}
