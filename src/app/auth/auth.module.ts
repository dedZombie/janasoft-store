import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { JSMaterialModule } from '../js-material.module';
import { LoginComponent } from './login/login.component';

@NgModule({
    declarations: [LoginComponent],
    imports: [
        ReactiveFormsModule,
        JSMaterialModule
    ]
})
export class AuthModule {}