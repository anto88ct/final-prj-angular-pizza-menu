import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { ProductsComponent } from './features/products/products.component';
import { ContactsComponent } from './features/contacts/contacts.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './core/navbar/navbar.component';
import { CardComponent } from './shared/card/card.component';
import { CartComponent } from './features/cart/cart.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { ProductsDetailsComponent } from './shared/products-details/products-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ContactsComponent,
    NavbarComponent,
    CardComponent,
    CartComponent,
    NotfoundComponent,
    ProductsDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
