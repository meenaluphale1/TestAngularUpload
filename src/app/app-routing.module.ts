import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { ProductComponent } from './components/product/product.component';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
//create an array of Routing objects 
//Wild Cards **
//wild-card notation to specify a component that is always 
//instantiated regardless of where you navigate to.
//always at the end 

 export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'product', component: ProductComponent},
  { path: 'detail/:id', component: ProductDetailComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: HomeComponent } 
]; 


// so  URL = basehref'/' + path 'product'= /product - loads above mentioned ProductComponent 
// 4th path is empty i.e default 



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
