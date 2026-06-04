import { Component } from '@angular/core';
import { Auth } from '../../../core/services/auth';
import { Router } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-header',
  imports: [LucideAngularModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  userName = '';
  constructor(
    private auth: Auth,
    private router: Router,
  ) {}

  ngOnInit() {
    this.auth.userName$.subscribe((name) => (this.userName = name));
  }

  isUserLoggedIn(): boolean {
    return !!this.auth.getCurrentUserId();
  }

  logOut() {
    this.auth.logOut();
  }

  openProfile() {
    this.router.navigate(['/profile']);
  }

  openRanking() {
    this.router.navigate(['/ranking']);
  }

  openMatches() {
    this.router.navigate(['']);
  }
}
