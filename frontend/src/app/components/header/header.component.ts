import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="bg-white shadow-sm border-b border-gray-200 px-4 py-3">
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <button 
            (click)="toggleSidebar()"
            class="p-2 rounded-md hover:bg-gray-100 lg:hidden">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          <h1 class="text-xl font-semibold text-gray-900 ml-2">Card Collection Manager</h1>
        </div>
        
        <div class="relative">
          <button 
            (click)="toggleDropdown()"
            class="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100">
            <span class="text-sm font-medium text-gray-700">{{ authService.username() }}</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          
          @if (showDropdown()) {
            <div class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50">
              <button class="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</button>
              <button 
                (click)="logout()"
                class="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Logout
              </button>
            </div>
          }
        </div>
      </div>
    </header>
  `
})
export class HeaderComponent {
  authService = inject(AuthService);
  showDropdown = signal(false);

  toggleDropdown() {
    this.showDropdown.update(show => !show);
  }

  toggleSidebar() {
    // Emit event for parent to handle
  }

  logout() {
    this.authService.logout();
    this.showDropdown.set(false);
  }
}