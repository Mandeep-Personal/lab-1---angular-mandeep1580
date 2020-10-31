import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

    products: Product[] = [

      new Product ('Database Development For Dummies', 'Step-by-Step guide for databases', './assets/images/Database_Development_For_Dummies.jpg'),
      new Product ('Front End Developer', 'Principal guide to Front End Development', './assets/images/Front_End_Developer.jpg'),
      new Product ('Front End Development', 'Professional guide to web development', './assets/images/Front_End_Development.jpg'),
      new Product ('Professional Front End Architecture', 'Foundational principals for front end architecture', './assets/images/Professional_Front_End_Architecture.jpg')
    ]
  constructor() { }

  ngOnInit(): void {
  }

}
