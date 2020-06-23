import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {

    homeTitle = 'Welcome to our store';
    homeDescription = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, tempore nemo provident sunt quisquam minima repudiandae, laudantium veritatis deleniti excepturi at vero! Ipsum magnam, sunt corrupti asperiores inventore porro, atque, maxime aliquid possimus quas provident.';

    constructor() {}
}