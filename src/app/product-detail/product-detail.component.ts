import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product:Product;
  id;
  constructor(private ar:ActivatedRoute,
              private r:Router,
              private prdSer:ProductService){
  }
  ngOnInit() {
      this.id=this.ar.snapshot.params['id'];
      let products=this.prdSer.getProducts();//all records -> products - 3 rows 
      this.product=products.find(p => p.productID==this.id);//one rec 
     // console.log(this.product);
  }
    onBack(): void {
    this.r.navigate(['product']);
 }
}
