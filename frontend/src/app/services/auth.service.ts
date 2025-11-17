import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _username = signal('CardCollector123');
  private _isAuthenticated = signal(true);

  get username() {
    return this._username.asReadonly();
  }

  get isAuthenticated() {
    return this._isAuthenticated.asReadonly();
  }

  logout() {
    this._isAuthenticated.set(false);
    this._username.set('');
  }
}