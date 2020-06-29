import { Component, OnInit, OnDestroy } from '@angular/core';

import { ProductsService } from 'src/app/shared/services/products.service';
import { Product } from 'src/app/shared/models/product.model';
import { Subscription } from 'rxjs';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
    constructor(
        private productsService: ProductsService,
        private shoppingCartService: ShoppingCartService
    ) {}

    products: Product[] = [];
    noImageUrl = '../../../assets/images/no_image.jpg';
    private subscription: Subscription;

    ngOnInit() {
        this.getProducts();
    }

    getProducts() {
        this.subscription = this.productsService.getProducts('0','8').subscribe(
            data => {
                this.products = data.products;
                console.log(this.products);
            }
        );
    }

    addToCart(product: Product) {
        this.shoppingCartService.addToShoppingList(product);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}