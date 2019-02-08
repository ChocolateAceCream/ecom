import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product-list/product.service';
import { Product } from '../../product-list/product.model';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

    constructor(private productService: ProductService) { }

    orderProducts: Product[];
    private sum: number=0;

    ngOnInit() {
        this.orderProducts = this.productService.getOrderProducts();
        //console.log(this.orderProducts);
        if (this.orderProducts.length != 0) {
            this.sum = this.orderProducts.map(product => product.price*product.qty).reduce((prev,next)=>prev+next);
        };
    }

}
