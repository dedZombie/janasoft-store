import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

    @Output() toggleSidenav = new EventEmitter();
    @Input() elementRef: MatSidenav;

    numberOfItemsInCart: any;

    constructor(private shoppingCartService: ShoppingCartService) {}

    ngOnInit() {
        this.shoppingCartService.shoppingCart$.subscribe(
            (items) => this.numberOfItemsInCart = items.length
        );
    }
}