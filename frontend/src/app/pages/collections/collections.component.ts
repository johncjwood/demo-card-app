import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collections',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-6">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold text-gray-900">Collections</h1>
        <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Create Collection
        </button>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-white p-6 rounded-lg shadow border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer" (click)="navigateToMeg()">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-semibold text-gray-900">Mega Evolutions</h3>
            <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">347 cards</span>
          </div>
          <p class="text-gray-600 text-sm mb-4">My comprehensive Mega Evolution card collection featuring rare holographics and first editions.</p>
          <div class="flex justify-between text-sm text-gray-500">
            <span>Last updated: 2 days ago</span>
            <span>Value: $2,450</span>
          </div>
        </div>
        

      </div>
    </div>
  `
})
export class CollectionsComponent {
  constructor(private router: Router) {}

  navigateToMeg() {
    this.router.navigate(['/collections/meg']);
  }
}