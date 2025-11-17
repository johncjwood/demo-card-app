import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-goals',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-6">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold text-gray-900">Goals</h1>
        <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Add New Goal
        </button>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="bg-white p-6 rounded-lg shadow border border-gray-200">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-semibold text-gray-900">Collect 50 Pokemon Cards</h3>
            <span class="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm">In Progress</span>
          </div>
          <div class="mb-4">
            <div class="flex justify-between text-sm text-gray-600 mb-1">
              <span>Progress</span>
              <span>32/50</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div class="bg-blue-600 h-2 rounded-full" style="width: 64%"></div>
            </div>
          </div>
          <p class="text-gray-600 text-sm">Build a comprehensive Pokemon card collection focusing on rare and holographic cards.</p>
        </div>
        
        <div class="bg-white p-6 rounded-lg shadow border border-gray-200">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-semibold text-gray-900">Complete Magic Set</h3>
            <span class="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">Completed</span>
          </div>
          <div class="mb-4">
            <div class="flex justify-between text-sm text-gray-600 mb-1">
              <span>Progress</span>
              <span>100/100</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div class="bg-green-600 h-2 rounded-full" style="width: 100%"></div>
            </div>
          </div>
          <p class="text-gray-600 text-sm">Collect all cards from the latest Magic: The Gathering set.</p>
        </div>
        
        <div class="bg-white p-6 rounded-lg shadow border border-gray-200">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-semibold text-gray-900">Vintage Baseball Cards</h3>
            <span class="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-sm">Not Started</span>
          </div>
          <div class="mb-4">
            <div class="flex justify-between text-sm text-gray-600 mb-1">
              <span>Progress</span>
              <span>0/25</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div class="bg-gray-400 h-2 rounded-full" style="width: 0%"></div>
            </div>
          </div>
          <p class="text-gray-600 text-sm">Find and collect vintage baseball cards from the 1980s era.</p>
        </div>
      </div>
    </div>
  `
})
export class GoalsComponent {}