import { Component } from '@angular/core';
import { Auth } from '../../../core/services/auth';
import { Router } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { User } from '../../../core/models/user.model';

@Component({
  selector: 'app-header',
  imports: [LucideAngularModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  currentUser: User | null = null;
  userName = '';
  constructor(
    private auth: Auth,
    private router: Router,
  ) {}

  ngOnInit() {
    this.auth.refreshCurrentUser();
    this.auth.currentUser$.subscribe(
      (user) => ((this.currentUser = user), (this.userName = user ? user.name || '' : '')),
    );
  }

  isUserLoggedIn(): boolean {
    return !!this.currentUser;
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
