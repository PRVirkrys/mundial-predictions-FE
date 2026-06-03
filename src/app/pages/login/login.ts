import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { Auth } from '../../core/services/auth';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [LucideAngularModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  user: string = '';
  password: string = '';

  // Inyección de dependencias
  constructor(private auth: Auth) {}

  logIn() {
    this.auth.onLogin(this.user, this.password);
  }
}
