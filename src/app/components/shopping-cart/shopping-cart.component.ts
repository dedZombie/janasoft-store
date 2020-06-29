import { Component, OnInit } from "@angular/core";
import { Product } from 'src/app/shared/models/product.model';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';

@Component({
    selector: 'app-shopping-cart',
    templateUrl: './shopping-cart.component.html',
    styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
    constructor(
        private shoppingCartService: ShoppingCartService
    ) {}

    shoppingCart: Product[] = [];
    columns = ['product', 'name', 'price', 'total', 'actions'];
    noImageUrl = '../../../assets/images/no_image.jpg';

    ngOnInit() {
        if (localStorage.length > 0) {
            const key = localStorage.key(0);
            const value = localStorage.getItem(key);

            if (value) {
                this.shoppingCart = [...JSON.parse(value)];
            }
        }
    }

    get totalPrice() {
        return this.shoppingCart.reduce((p,c) => {
            return p + c.price
        }, 0)
    }

    get userId() {
        return localStorage.getItem('userId');
    }

    submitOrder() {
        this.shoppingCartService.submitOrder(this.userId, this.shoppingCart)
            .subscribe(
                (res) => {
                    console.log(res);
                }
            )
    }
}