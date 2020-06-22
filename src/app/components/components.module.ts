import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { JSMaterialModule } from '../js-material.module';

import { LoaderComponent } from './loader/loader.component';

@NgModule({
    imports: [ 
        // CommonModule, 
        JSMaterialModule 
    ],
    declarations: [
        LoaderComponent
    ],
    exports: [
        LoaderComponent
    ]
})
export class ComponentsModule {}