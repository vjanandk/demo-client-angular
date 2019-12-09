import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { StocksComponent } from './stocks/stocks.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    component: HomeComponent,
    data: { title: "home" }
  },
  {
    path: 'products',
    component: ProductsComponent,
    data: { title: "products" }
  },
  {
    path: 'stocks',
    component: StocksComponent,
    data: { title: "stocks" }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
