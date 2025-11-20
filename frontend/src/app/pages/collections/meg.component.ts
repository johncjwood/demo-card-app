import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';

interface Card {
  card_name: string;
  card_type: string;
  subset_num: number;
  quantity: number;
}

@Component({
  selector: 'app-meg',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-6">
      <h1 class="text-2xl font-bold text-gray-900 mb-6">Mega Evolutions</h1>
      
      @if (loading) {
        <p class="text-gray-600">Loading cards...</p>
      } @else {
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          @for (card of cards; track card.subset_num) {
            <div class="bg-white rounded-lg shadow-md p-4">
              <img 
                [src]="'/assets/MEG/' + card.subset_num + '.jpg'" 
                [alt]="card.card_name"
                class="w-full h-32 object-cover rounded mb-2"
              />
              <h3 class="font-semibold text-sm mb-1">{{ card.card_name }}</h3>
              <p class="text-xs text-gray-600 mb-1">{{ card.card_type }}</p>
              <p class="text-xs text-gray-500 mb-1">#{{ card.subset_num }}</p>
              <p class="text-xs font-medium">Owned: {{ card.quantity }}</p>
            </div>
          }
        </div>
      }
    </div>
  `
})
export class MegComponent implements OnInit {
  private http = inject(HttpClient);
  private authService = inject(AuthService);
  
  cards: Card[] = [];
  loading = true;

  ngOnInit() {
    this.loadCards();
  }

  private loadCards() {
    const username = this.authService.username();
    
    this.http.post<Card[]>('/api/cards', {
      card_set: 'meg',
      login_id: username
    }).subscribe({
      next: (data) => {
        this.cards = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading cards:', error);
        this.loading = false;
      }
    });
  }
}