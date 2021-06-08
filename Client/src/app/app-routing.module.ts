import { PurchaseComponent } from './Components/purchase/purchase.component';
import { ProductComponent } from './Components/product/product.component';
import { EditComponent } from './Components/edit/edit.component';
import { LoginComponent } from './Components/login/login.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { CartComponent } from './Components/cart/cart.component';
import { RegisterComponent } from './Components/register/register.component';
import { ProductsComponent } from './Components/products/products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component : ProductsComponent},
  {path:'Profile' ,component: ProfileComponent},
  {path:'Cart' ,component: CartComponent},
  {path:'Login' ,component: LoginComponent},
  {path:'Register' ,component: RegisterComponent},
  {path: 'Register/Login' , component: LoginComponent},
  {path: 'Profile/Edit' , component: EditComponent},
  {path: 'Product/:id' , component: ProductComponent},
  {path: 'Product/:id/Purchase' , component: PurchaseComponent},
  {path:'Login/Register' ,component: RegisterComponent},
  {path:'Profile/:id' ,component: ProfileComponent},
  {path:'Cart/Purchase' ,component: PurchaseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[
  ProductsComponent,
  ProfileComponent,
  CartComponent,
  RegisterComponent,
  LoginComponent,
  EditComponent,
  ProductComponent,
  PurchaseComponent
];
