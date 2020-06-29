import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../shared/models/user.model';
import { environment } from '../../environments/environment';
import { JWTService } from '../shared/services/jwt.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private http: HttpClient, private jwt: JWTService) {}

    private base_url = environment.api_url;
    private token;

    loginUser(user: User): Observable<any> {
        return this.http.post(`${this.base_url}/login`, user).pipe(
            map(
                (token) => {
                    this.token = token;
                    localStorage.setItem('token', this.token.access_token);
                    const decoded = this.jwt.decodeToken(this.token.access_token);
                    localStorage.setItem('userId', decoded.userId);
                    return decoded;
                }
            )
        );
    }
}