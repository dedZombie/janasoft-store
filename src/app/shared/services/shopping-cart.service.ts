import { Injectable } from "@angular/core";
import { Product } from '../models/product.model';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ShoppingCartService {
    constructor() {}

    private shoppingCartSub = new BehaviorSubject<Product[]>([]);
    shoppingCart$ = this.shoppingCartSub.asObservable();
    private dataStore: { shoppingCartItems: Product[] } = { shoppingCartItems: [] }

    addToShoppingList(shoppingList: Product) {
        this.dataStore.shoppingCartItems.push(shoppingList);
        this.shoppingCartSub.next(Object.assign({}, this.dataStore).shoppingCartItems);
    }
}