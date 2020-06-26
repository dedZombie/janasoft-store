import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from 'src/app/shared/models/user.model';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    constructor(
        private authService: AuthService,
        private fb: FormBuilder
    ) {  }

    userForm = this.fb.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
    });

    onLogin() {
        const user: User = this.userForm.value;

        this.authService.loginUser(user).subscribe();
    }
}