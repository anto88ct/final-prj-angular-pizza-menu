import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ProductsComponent } from './features/products/products.component';
import { ContactsComponent } from './features/contacts/contacts.component';
import { ProductsDetailsComponent } from './shared/products-details/products-details.component'
import { NotfoundComponent } from './shared/notfound/notfound.component';
const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'home', component: HomeComponent },

  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductsDetailsComponent },

  { path: 'contacts', component: ContactsComponent },

  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
