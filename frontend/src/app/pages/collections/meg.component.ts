import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-meg',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-6">
      <h1 class="text-2xl font-bold text-gray-900 mb-6">Mega Evolutions</h1>
      <p class="text-gray-600">Mega Evolution cards collection page</p>
    </div>
  `
})
export class MegComponent {}