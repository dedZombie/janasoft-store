import { Injectable } from "@angular/core";
import { Product } from '../models/product.model';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Products } from '../models/products.model';

@Injectable({
    providedIn: 'root'
})
export class ShoppingCartService {
    constructor(private http: HttpClient) {}

    private shoppingCartSub = new BehaviorSubject<Product[]>([]);
    shoppingCart$ = this.shoppingCartSub.asObservable();
    private dataStore: { shoppingCartItems: Product[] } = { shoppingCartItems: [] }

    addToShoppingList(shoppingList: Product) {
        this.dataStore.shoppingCartItems.push(shoppingList);
        this.shoppingCartSub.next(Object.assign({}, this.dataStore).shoppingCartItems);
        localStorage.setItem('shoppingList: ', JSON.stringify(this.dataStore.shoppingCartItems));
    }

    submitOrder(userId: string, order: Product[]) {
        return this.http.post(`/user/${userId}/orders`, order);
    }
}