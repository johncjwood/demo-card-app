import { Injectable, signal, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private router = inject(Router);
  private _username = signal('');
  private _isAuthenticated = signal(false);

  get username() {
    return this._username.asReadonly();
  }

  get isAuthenticated() {
    return this._isAuthenticated.asReadonly();
  }

  async login(username: string, password: string): Promise<number> {
    const response = await fetch('http://localhost:3001/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });
    
    const result = await response.json();
    
    if (result === 0) {
      localStorage.setItem('loginId', username);
      this._isAuthenticated.set(true);
      this._username.set(username);
    }
    
    return result;
  }

  logout() {
    localStorage.removeItem('loginId');
    this._isAuthenticated.set(false);
    this._username.set('');
    this.router.navigate(['/login']);
  }
}