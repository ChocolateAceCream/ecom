import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product-list/product.service';
import { Product } from '../../product-list/product.model';
import { MatDialog } from "@angular/material";
import { DialogComponent } from './dialog.component';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

    constructor(private productService: ProductService, private dialog: MatDialog) { }

    orderProducts: Product[];
    private sum: number=0;

    ngOnInit() {
        this.orderProducts = this.productService.getOrderProducts();
        //console.log(this.orderProducts);
        if (this.orderProducts.length != 0) {
            this.sum = this.orderProducts.map(product => product.price*product.qty).reduce((prev,next)=>prev+next);
        };
    }

    delete(product: Product) {
        this.dialog.open(DialogComponent, {
            data: {
                name: product.name
            }
        });
        console.log(product);
        //this.orderProducts = this.orderProducts.slice(this.orderProducts.indexOf(product),1);
        //console.log(this.orderProducts);
    }

}
