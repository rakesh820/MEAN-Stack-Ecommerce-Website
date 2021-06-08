import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Products } from "../Models/products.model";
import { Observable, } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products : any;
  id:any;
  user:any;
  email="abc@gmail.com";
  baseURL="http://localhost:3000/Products";

  constructor(private http:HttpClient) { }

  getProductsList(){
       return this.http.get(this.baseURL);
  }

  getId(id){
     return this.http.get("http://localhost:3000/Products/"+id);
  }

  addcart(id){
    var headers=new HttpHeaders();
    headers.append('Content-Type','application/json');
     return this.http.post("http://localhost:3000/Cart/"+this.email+"/"+id,{headers:headers});
  }

  getCart(){
    return this.http.get("http://localhost:3000/Cart/"+this.email);
  }

  updateCart(quantity,product){
    var headers=new HttpHeaders();
    headers.append('Content-Type','application/json');
     return this.http.post("http://localhost:3000/Cart/"+this.user+"/"+product+"/"+quantity,{headers:headers});
  }

  deleteCart(){
    var headers=new HttpHeaders();
    headers.append('Content-Type','application/json');
     return this.http.delete("http://localhost:3000/Cart/"+this.email,{headers:headers});
  }
}
