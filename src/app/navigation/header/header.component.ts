import { Component, OnInit, OnDestroy} from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { ProductService } from '../../product-list/product.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
    constructor(private authService: AuthService, private productService: ProductService){}
    private count: number = 0;
    isAuth = false;
    authSubscription: Subscription;
    countSubscription: Subscription;

    ngOnInit() {
        this.authSubscription = this.authService.authChange.subscribe(authStatus => {
            this.isAuth = authStatus;
        });
        this.countSubscription = this.productService.countChange.subscribe(productCount => {
            this.count = productCount;
        });
    }

    ngOnDestroy() {
        this.authSubscription.unsubscribe();
        this.countSubscription.unsubscribe();
    }

    onLogout() {
        this.authService.logout();
    }

    doFilter(filterValue: string) {
        this.productService.doFilter(filterValue);
    }
}
