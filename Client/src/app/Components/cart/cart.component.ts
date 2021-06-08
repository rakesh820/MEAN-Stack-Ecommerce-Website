import { UserService } from './../../Services/user.service';
import { ProductsService } from './../../Services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers:[ProductsService]
})
export class CartComponent implements OnInit {

  constructor(private  productService:ProductsService,private userService:UserService) { }
   cart:any;
   quantity:any;
   product:any;
  ngOnInit(): void {
    this.get();
  }

  get(){
      this.productService.getCart().subscribe((res)=>{
        this.cart=res;
      });
  }

  delete(){
    this.productService.deleteCart().subscribe((res)=>{});
  }
}
