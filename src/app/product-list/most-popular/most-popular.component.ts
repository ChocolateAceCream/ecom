import { PageEvent, MatPaginator, MatTableDataSource} from '@angular/material';
import { ViewChild,Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { Observable,Subscription } from 'rxjs';

@Component({
    selector: 'app-most-popular',
    templateUrl: './most-popular.component.html',
    styleUrls: ['./most-popular.component.css']
})
export class MostPopularComponent implements OnInit, OnDestroy {
    products: Product[] = [];
    length = 0;
    pageIndex = 0;
    pageSize = 5;
    pageEvent: PageEvent;

    obs: Observable<any>;
    filterSubscription: Subscription;
    dataSource = new MatTableDataSource<Product>();

    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private productService: ProductService) { }

    ngOnInit() {
        this.products = this.productService.getMostPopularProducts();
        this.dataSource.data = this.products;
        this.obs = this.dataSource.connect();
        this.dataSource.paginator = this.paginator;
        this.filterSubscription = this.productService.filterString.subscribe(filter => {
            this.dataSource.filter = filter.trim().toLowerCase();
        });
    }

    addToCart(product: Product, size: number) {
        let p = Object.assign({},product)
        p.size=[size];
        this.productService.addCartProduct(p);
    }

    ngOnDestroy(): void {
        if (this.dataSource) { this.dataSource.disconnect();}
    }

    doFilter() {
    }

}
