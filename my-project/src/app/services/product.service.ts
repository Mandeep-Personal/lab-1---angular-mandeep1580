import { Injectable } from '@angular/core';
import { Product } from '../product/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [

    new Product (1, 'Database Development', './assets/images/Database_Development_For_Dummies.jpg', 25.00),
    new Product (2, 'Front End Developer', './assets/images/Front_End_Developer.jpg', 30.00),
    new Product (3, 'Front End Development', './assets/images/Front_End_Development.jpg', 35.00),
    new Product (4, 'Professional Front End Architecture', './assets/images/Professional_Front_End_Architecture.jpg', 40.00),
  ]
  constructor() { }

  getProducts(): Product[]{

  return this.products

  }

}
