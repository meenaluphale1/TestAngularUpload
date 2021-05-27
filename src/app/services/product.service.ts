
//import { Observable } from 'rxjs/Observable';
import { Product } from '../models/product'

export class ProductService {

        public getProducts() 
        {
        let products: Product[];
        products = [
            new Product(1011, 'Mobile', 50000),
            new Product(1012, 'Head Phone', 750),
            new Product(1013, 'Battery',1000)
        ]   
        return products;
         }   
          
   public getProduct(id) {
        let products: Product[] = this.getProducts();        
        return products.find(p => p.productID == id);
    }
}
