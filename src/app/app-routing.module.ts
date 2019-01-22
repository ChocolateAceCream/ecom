import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { MostPopularComponent } from './product-list/most-popular/most-popular.component';
import { NewReleaseComponent } from './product-list/new-release/new-release.component';
import { ViewAllComponent } from './product-list/view-all/view-all.component';
import { PasswordResetComponent } from './auth/password-reset/password-reset.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },
    { path: 'most-popular', component: MostPopularComponent },
    { path: 'new-release', component: NewReleaseComponent,canActivate: [AuthGuard] },
    { path: 'view-all', component: ViewAllComponent },
    { path: 'home', component: HomeComponent },
    { path: 'password-reset', component: PasswordResetComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    //AuthGuard is indeed an service, which inject by angular, that's why we
    //need to provide it here so it will be available to entire app. P.S it
    //usually inject in app.module
    providers: [AuthGuard]
})
export class AppRoutingModule {}
