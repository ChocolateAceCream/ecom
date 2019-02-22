import { PageEvent, MatPaginator, MatTableDataSource} from '@angular/material';
import { ViewChild,Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-most-popular',
    templateUrl: './most-popular.component.html',
    styleUrls: ['./most-popular.component.css']
})
export class MostPopularComponent implements OnInit {
    products: Product[] = [];
    length = 0;
    pageIndex = 0;
    pageSize = 5;
    pageEvent: PageEvent;

    obs: Observable<any>;
    dataSource = new MatTableDataSource<Product>();

    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private productService: ProductService) { }

    ngOnInit() {
        this.products = this.productService.getMostPopularProducts();
        this.dataSource.data = this.products;
        this.obs = this.dataSource.connect();
        this.dataSource.paginator = this.paginator;
    }

    addToCart(product: Product, size: number) {
        let p = Object.assign({},product)
        p.size=[size];
        this.productService.addCartProduct(p);
    }

}
