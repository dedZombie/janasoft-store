import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

import { ProductsService } from 'src/app/shared/services/products.service';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/shared/models/product.model';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {

    id: string;
    private subscription: Subscription;
    shoppingCart: Product[] = [];
    product: Product = {
        name: '',
        code: '',
        imageUrls: [],
        price: 0,
        id: '',
        createdAt: ''
    };

    constructor(
        private productsService: ProductsService,
        private route: ActivatedRoute,
        private shoppingCartService: ShoppingCartService
    ) {}

    ngOnInit() {
        this.getRouteId();
        this.getProduct();
    }

    getRouteId() {
        this.subscription = this.route.paramMap.subscribe(
            params => {
                this.id = params.get('id');
            }
        );
    }

    getProduct() {
        this.subscription = this.productsService.getProduct(this.id).subscribe(
            response => {
                this.product = response;
                console.log(this.product)
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