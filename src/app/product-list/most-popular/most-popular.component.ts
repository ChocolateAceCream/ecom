import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
    selector: 'app-most-popular',
    templateUrl: './most-popular.component.html',
    styleUrls: ['./most-popular.component.css']
})
export class MostPopularComponent implements OnInit {
    products: Product[] = [];

    constructor(private productService: ProductService) { }

    ngOnInit() {
        this.products = this.productService.getMostPopularProducts();
    }

    addToCart(product: Product) {
        this.productService.addCartProduct(product);
    }

}
