import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';

@Injectable({
    providedIn: 'root'
})
export class JWTService {
    constructor() {}
    private token;

    getToken() {
        this.token = localStorage.getItem('token');
        return this.token;
    }

    decodeToken(token) {
        const decoded = jwt_decode(token);
        return decoded;
    }
}