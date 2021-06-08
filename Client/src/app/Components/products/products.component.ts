import { ProductsService } from './../../Services/products.service';
import { Products } from './../../Models/products.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers:[ProductsService]
})
export class ProductsComponent implements OnInit {

  
  constructor(public productsService:ProductsService) { }

  items=this.productsService.products;


  ngOnInit() {
    this.getProducts();
  }

  getProducts(){
    this.productsService.getProductsList().subscribe((res)=>
      this.items=res);
  }

}
