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
	pageSize = 10;
	pageEvent: PageEvent;

	obs: Observable<any>;
	filterSubscription: Subscription;
	dataSource = new MatTableDataSource<Product>();

	@ViewChild(MatPaginator) paginator: MatPaginator;

	constructor(private productService: ProductService) {
		this.obs = this.dataSource.connect();
		this.dataSource.data = this.productService.getMostPopularProducts();
		this.dataSource.paginator = this.paginator;

        this.dataSource.filterPredicate = this.customFilterPredicate();

		this.filterSubscription = this.productService.filterObj.subscribe(filterObj => {
			this.dataSource.filter = JSON.stringify(filterObj);
			//this.dataSource.filter = 'AJ1'.trim().toLowerCase();
		});

	}

	ngOnInit() {
	}

    customFilterPredicate() {
        const myFilterPredicate = function(data: Product, filter: string ):boolean{
            let searchString = JSON.parse(filter);
            //indexOf will return -1 if there's no match
            let sizeFound = true;
            //if size not empty or undefined
            if (searchString.size !== undefined && searchString.size.length !==0) {
                for(let n of searchString.size) {
                    if(!data.size.includes(Number(n))){
                        sizeFound = false;
                        break;
                    }
                }
            }

            let brandFound = true;
            if (searchString.brand !== undefined && searchString.brand.length !==0) {
                for(let n of searchString.brand) {
                    console.log(data.brand,n.toLowerCase);
                    if(data.brand.toLowerCase().trim().indexOf(n.toLowerCase().trim())==-1){
                        brandFound = false;
                        break;
                    }
                }
            }

            let nameFound = true;
            if (searchString.name !== undefined && searchString.name.length !==0) {
                for(let n of searchString.name) {
                    if(data.name.toLowerCase().trim().indexOf(n.toLowerCase().trim())==-1){
                        nameFound = false;
                        break;
                    }
                }
            }

            if(searchString.topFilter) {
                return nameFound || brandFound || sizeFound
            } else {
                return nameFound && brandFound && sizeFound
            }
        }
        return myFilterPredicate;
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
