import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    constructor(private http: HttpClient) {}

    private base_url = environment.api_url;

    getProducts(skip: string, limit: string): Observable<any> {
        return this.http.get(`${this.base_url}/products`, {
            params: {
                skip: skip,
                limit: limit
            }
        });
    }

    getProduct(id: string): Observable<any> {
        return this.http.get(`${this.base_url}/products/${id}`);
    }
}