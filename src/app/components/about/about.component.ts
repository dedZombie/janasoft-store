import { Component } from '@angular/core';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html'
})
export class AboutComponent {

    aboutTitle = 'About us';
    aboutDescription = [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, tempore nemo provident sunt quisquam minima repudiandae, laudantium veritatis deleniti excepturi at vero! Ipsum magnam, sunt corrupti asperiores inventore porro, atque, maxime aliquid possimus quas provident.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, tempore nemo provident sunt quisquam minima repudiandae, laudantium veritatis deleniti excepturi at vero! Ipsum magnam, sunt corrupti asperiores inventore porro, atque, maxime aliquid possimus quas provident.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, tempore nemo provident sunt quisquam minima repudiandae, laudantium veritatis deleniti excepturi at vero! Ipsum magnam, sunt corrupti asperiores inventore porro, atque, maxime aliquid possimus quas provident.'
    ];

    constructor() {}
}