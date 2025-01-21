import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/user.interface';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  users: User[] = [
    { id: 1, username: 'admin', role: 'admin', password: 'admin' },
    { id: 2, username: 'user', role: 'user', password: 'user' },
  ];

  constructor(public router: Router) {}

  isLoged() {
    if (this.router.url === '/login') {
      return true;
    }
    return false;
  }

  username = new FormControl('');
  password = new FormControl('');

  login() {
    const user = this.users.find(
      (user) =>
        user.username === this.username.value &&
        user.password === this.password.value
    );
    console.debug('user', user);
    if (user) {
      this.router.navigate(['/home']);
    }
  }
}
