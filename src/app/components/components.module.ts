import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JSMaterialModule } from '../js-material.module';
import { ComponentsRoutingModule } from './components-routing.module';

import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutComponent } from './layout/layout.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
    imports: [
        CommonModule,
        ComponentsRoutingModule,
        JSMaterialModule
    ],
    declarations: [
        LayoutComponent,
        HomeComponent,
        NavigationComponent,
        AboutComponent,
        ContactComponent,
        ProductsComponent,
        ProductComponent,
        LoaderComponent
    ],
    exports: [
        LayoutComponent,
        HomeComponent,
        NavigationComponent,
        AboutComponent,
        ContactComponent,
        ProductsComponent,
        ProductComponent,
        LoaderComponent
    ]
})
export class ComponentsModule {}