import { Component, OnInit, OnDestroy } from '@angular/core';

import { ProductsService } from 'src/app/shared/services/products.service';
import { Product } from 'src/app/shared/models/product.model';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
    constructor(private productsService: ProductsService) {}

    products: Product[] = [];
    noImageUrl = '../../../assets/images/no_image.jpg';
    // private subscription: Subscription;

    ngOnInit() {
        this.getProducts();
    }

    getProducts() {
        this.productsService.getProducts('0','8').subscribe(
            data => {
                this.products = data.products;
                console.log(this.products);
            }
        );
    }

    ngOnDestroy() {
        // this.subscription.unsubscribe();
    }
}