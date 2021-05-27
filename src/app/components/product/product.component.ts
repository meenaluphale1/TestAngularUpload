import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit 
{
  prodList:Product[];
    //constructor injection of a service 
  constructor(private ProductService:ProductService)
  {     
   }
  
  ngOnInit() {
    console.log("modified product.component.ts file ");
    this.prodList=this.ProductService.getProducts();  
  }
  
  

  
}
