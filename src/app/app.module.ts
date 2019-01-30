import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MaterialModule} from './material.module';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { PasswordResetComponent } from './auth/password-reset/password-reset.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';

import { SlideshowModule } from 'ng-simple-slideshow';
import { SlideComponent } from './navigation/slide/slide.component';
import { MostPopularComponent } from './product-list/most-popular/most-popular.component';
import { NewReleaseComponent } from './product-list/new-release/new-release.component';
import { ViewAllComponent } from './product-list/view-all/view-all.component';

import { AuthService } from './auth/auth.service';
import { ProductService } from './product-list/product.service';
import { CartComponent } from './order/cart/cart.component';
import { WishComponent } from './order/wish/wish.component';

@NgModule({
    declarations: [
        AppComponent,
        SignupComponent,
        LoginComponent,
        HomeComponent,
        PasswordResetComponent,
        HeaderComponent,
        SidenavListComponent,
        SlideComponent,
        MostPopularComponent,
        NewReleaseComponent,
        ViewAllComponent,
        CartComponent,
        WishComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        BrowserAnimationsModule,
        MaterialModule,
        AppRoutingModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        SlideshowModule
    ],
    //provide service in app module so entire app use same instance
    providers: [AuthService,ProductService],
    bootstrap: [AppComponent]
})
export class AppModule { }
