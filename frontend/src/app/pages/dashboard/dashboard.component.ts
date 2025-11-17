import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-6">
      <h1 class="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-white p-6 rounded-lg shadow border border-gray-200">
          <h3 class="text-lg font-semibold text-gray-900 mb-2">Total Cards</h3>
          <p class="text-3xl font-bold text-blue-600">1,247</p>
        </div>
        
        <div class="bg-white p-6 rounded-lg shadow border border-gray-200">
          <h3 class="text-lg font-semibold text-gray-900 mb-2">Collections</h3>
          <p class="text-3xl font-bold text-green-600">8</p>
        </div>
        
        <div class="bg-white p-6 rounded-lg shadow border border-gray-200">
          <h3 class="text-lg font-semibold text-gray-900 mb-2">Goals Completed</h3>
          <p class="text-3xl font-bold text-purple-600">12</p>
        </div>
      </div>
      
      <div class="mt-8 bg-white p-6 rounded-lg shadow border border-gray-200">
        <h2 class="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
        <div class="space-y-3">
          <div class="flex items-center justify-between py-2 border-b border-gray-100">
            <span class="text-gray-700">Added Charizard to Pokemon Collection</span>
            <span class="text-sm text-gray-500">2 hours ago</span>
          </div>
          <div class="flex items-center justify-between py-2 border-b border-gray-100">
            <span class="text-gray-700">Completed goal: Collect 10 Rare Cards</span>
            <span class="text-sm text-gray-500">1 day ago</span>
          </div>
          <div class="flex items-center justify-between py-2">
            <span class="text-gray-700">Created new Magic Collection</span>
            <span class="text-sm text-gray-500">3 days ago</span>
          </div>
        </div>
      </div>
    </div>
  `
})
export class DashboardComponent {}