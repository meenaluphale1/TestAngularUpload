import { Component } from '@angular/core';


@Component({
  selector:'app-root',
   templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ERoutingServices';  

  //disadv - tightly coupled what if user needs other service , here it's hard coded 
  //will you keep changing everytime , implement  dependancy injection 
  /*  
   products:Product[];
   productService;
 
   constructor(){
     this.productService=new ProductService();
   }
 
   getProducts() {     
     this.products=this.productService.getProducts();
   }*/
 
}
