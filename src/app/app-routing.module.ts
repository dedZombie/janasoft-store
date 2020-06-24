import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { HomeComponent } from './components/home/home.component';
// import { AboutComponent } from './components/about/about.component';
// import { ContactComponent } from './components/contact/contact.component';
// import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
    // { path: '', redirectTo: '/home', pathMatch: 'full' },
    // { path: 'home', component: HomeComponent },
    // { path: 'about', component: AboutComponent },
    // { path: 'contact', component: ContactComponent },
    // { path: 'products', component: ProductsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
