import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  constructor(
    private userService: UserService,
    private router: Router,
  ) {}

  private userNameSubject = new BehaviorSubject<string>(this.getUserName());
  userName$ = this.userNameSubject.asObservable();

  onLogin(name: string, password: string) {
    this.userService.login(name, password).subscribe({
      next: (user) => {
        localStorage.setItem('user', JSON.stringify(user));
        this.userNameSubject.next(user.name);
        this.router.navigate(['/matches']);
      },
      error: () => {
        console.log('NO existe el usaurio');
      },
    });
  }

  logOut() {
    localStorage.removeItem('user');
    this.userNameSubject.next('');
    this.router.navigate(['/login']);
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user') || '{}');
  }

  getCurrentUserId(): number {
    return this.getCurrentUser().id;
  }

  getUserName(): string {
    return this.getCurrentUser().name || '';
  }

  getUserScore(): number {
    return this.getCurrentUser().totalScore || 0;
  }
}
