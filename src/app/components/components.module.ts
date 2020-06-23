import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JSMaterialModule } from '../js-material.module';

import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutComponent } from './layout/layout.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
    imports: [
        CommonModule,
        JSMaterialModule 
    ],
    declarations: [
        LayoutComponent,
        HomeComponent,
        NavigationComponent,
        LoaderComponent
    ],
    exports: [
        LayoutComponent,
        HomeComponent,
        NavigationComponent,
        LoaderComponent
    ]
})
export class ComponentsModule {}