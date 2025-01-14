import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Amazont';

  constructor(public router: Router) {}

  isLoged() {
    if (this.router.url === '/login') {
      console.debug('isLoged: false');
      return true;
    }
    console.debug('isLoged: true');
    return false;
  }
}
