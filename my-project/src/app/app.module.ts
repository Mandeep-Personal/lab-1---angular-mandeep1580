import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { ProductComponent } from './product/product.component';
import { ProductItemComponent } from './product/product-item/product-item.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainNavComponent,
    ProductComponent,
    ProductItemComponent,
    MainFooterComponent,
    CartComponent,
    CartItemComponent,
    ProductDetailComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
