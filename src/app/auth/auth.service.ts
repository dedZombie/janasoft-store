import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../shared/models/user.model';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private http: HttpClient) {}

    private base_url = environment.api_url;

    loginUser(user: User): Observable<any> {
        return this.http.post(`${this.base_url}/login`, user);
    }
}