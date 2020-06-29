import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';
import { Product } from 'src/app/shared/models/product.model';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

    @Output() toggleSidenav = new EventEmitter();
    @Input() elementRef: MatSidenav;

    numberOfItemsInCart: any;
    shoppingCart: Product[] = [];

    constructor(private shoppingCartService: ShoppingCartService) {}

    ngOnInit() {
        this.shoppingCartService.shoppingCart$.subscribe(
            (items) => {
                this.numberOfItemsInCart = items.length;
            }
        );
        
        if (localStorage.length > 0) {
            const key = localStorage.key(0);
            const value = localStorage.getItem(key);

            if (value) {
                this.shoppingCart = [...JSON.parse(value)];
                console.log(this.shoppingCart)
            }
        }
    }

    get totalPrice() {
        return this.shoppingCart.reduce((p,c) => {
            return p + c.price
        }, 0)
    }
}