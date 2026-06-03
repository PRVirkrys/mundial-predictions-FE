import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  constructor(
    private userService: UserService,
    private router: Router,
  ) {}

  onLogin(name: string, password: string) {
    this.userService.login(name, password).subscribe({
      next: (user) => {
        localStorage.setItem('user', JSON.stringify(user));
        this.router.navigate(['/matches']);
      },
      error: () => {
        console.log('NO existe el usaurio');
      },
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user') || '{}');
  }

  getCurrentUserId(): number {
    return this.getCurrentUser().id;
  }
}
