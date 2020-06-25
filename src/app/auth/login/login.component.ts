import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent {
    constructor(private authService: AuthService) {}

    user: User = {
        email: 'Milos_0_Marinkovic@mail.com',
        password: 'Milos.000'
    };

    login() {
        this.authService.loginUser(this.user)
            .subscribe(
                (response) => console.log(response)
            )
    }
}