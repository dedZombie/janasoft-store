import { Component, OnInit } from '@angular/core';

import { ProductsService } from 'src/app/shared/services/products.service';
import { Product } from 'src/app/shared/models/product.model';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
    constructor(private productsService: ProductsService) {}

    products: Product[] = [];
    noImageUrl = '../../../assets/images/no_image.jpg';

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
}