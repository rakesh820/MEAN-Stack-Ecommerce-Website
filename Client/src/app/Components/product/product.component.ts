import { UserService } from './../../Services/user.service';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../Services/products.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[
    ProductsService,
    UserService
  ]
})
export class ProductComponent implements OnInit {

  constructor(public productService:ProductsService,private userService:UserService,private route: ActivatedRoute) { }
   id:string;
  items:any;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getProductId();
  }

  getProductId(){
    this.productService.getId(this.id).subscribe((res)=>{
        this.items=res;
    });
  }

  cart(){
       this.productService.addcart(this.id).subscribe((res)=>{});
  
}
}
