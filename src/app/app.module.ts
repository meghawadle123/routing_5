import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductDashboardComponent } from './component/products/product-dashboard/product-dashboard.component';
import { ProductSingleComponent } from './component/products/product-single/product-single.component';
import { ProductFormComponent } from './component/products/product-form/product-form.component';
import { HomeDashboardComponent } from './component/home/home-dashboard/home-dashboard.component';
import { UserDashboardComponent } from './component/users/user-dashboard/user-dashboard.component';
import { UserSingleComponent } from './component/users/user-single/user-single.component';
import { UserFormComponent } from './component/users/user-form/user-form.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found/page-not-found.component';
import { FairsComponent } from './component/fairs/fairs/fairs.component';
import { AppRouting } from './app-routing.module';
import { NavbarComponent } from './component/navbar/navbar/navbar.component';
import { GetconfirmComponent } from './component/getconfirm/getconfirm.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './component/auth/auth.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ProductDashboardComponent,
    ProductSingleComponent,
    ProductFormComponent,
    HomeDashboardComponent,
    UserDashboardComponent,
    UserSingleComponent,
    UserFormComponent,
    PageNotFoundComponent,
    FairsComponent,
    NavbarComponent,
    GetconfirmComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouting,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatChipsModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
