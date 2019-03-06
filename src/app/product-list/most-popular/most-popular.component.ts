import { PageEvent, MatPaginator, MatTableDataSource} from '@angular/material';
import { ViewChild,Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { Observable,Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
    selector: 'app-most-popular',
    templateUrl: './most-popular.component.html',
    styleUrls: ['./most-popular.component.css']
})
export class MostPopularComponent implements OnInit, OnDestroy {
    //products: Product[] = [];
    length = 0;
    pageIndex = 0;
    pageSize = 10;
    pageEvent: PageEvent;

    obs: Observable<any>;
    filterSubscription: Subscription;
    dataSource = new MatTableDataSource<Product>();

    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private productService: ProductService) {
        this.obs = this.dataSource.connect();
        console.log(this.obs);
        this.dataSource.data = this.productService.getMostPopularProducts();
        this.dataSource.paginator = this.paginator;
        this.filterSubscription = this.productService.filterString.subscribe(filter => {
            this.dataSource.filter = filter.trim().toLowerCase();
            //this.dataSource.filter = 'AJ1'.trim().toLowerCase();
        });
    }

    ngOnInit() {
        //delay(2);
    }

    addToCart(product: Product, size: number) {
        let p = Object.assign({},product)
        p.size=[size];
        this.productService.addCartProduct(p);
    }

    ngOnDestroy(): void {
        if (this.dataSource) { this.dataSource.disconnect();}
        this.filterSubscription.unsubscribe();
    }

    doFilter() {
    }

}
