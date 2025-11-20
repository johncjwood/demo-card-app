import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';

interface Card {
  card_name: string;
  color: string;
  card_type: string;
  subset_num: number;
  rarity: string;
  file_loc: string;
  set_name: string;
  release_date: string;
  total_cards: number;
  quantity: number;
}

@Component({
  selector: 'app-meg',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-6">
      <h1 class="text-2xl font-bold text-gray-900 mb-6">Mega Evolutions</h1>
      
      
      <div *ngIf="loading" class="text-gray-600">Loading cards...</div>
      <div *ngIf="!loading && cards.length === 0" class="text-gray-600">No cards found.</div>
      <div *ngIf="!loading && cards.length > 0">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div *ngFor="let card of cards; trackBy: trackBySubsetNum" class="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow">
            <img 
              [src]="getImagePath(card.subset_num)" 
              [alt]="card.card_name"
              class="w-full h-48 object-cover rounded mb-3"
              (error)="onImageError($event)"
            />
            <div class="space-y-2">
              <h3 class="font-bold text-lg text-gray-900">{{ card.card_name }}</h3>
              <div class="flex justify-between items-center">
                <span class="text-sm font-medium text-gray-700">{{ card.card_type }}</span>
                <span class="text-xs bg-gray-100 px-2 py-1 rounded">#{{ card.subset_num }}</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-sm text-gray-600">Color: {{ card.color }}</span>
                <span class="text-sm text-gray-600">Rarity: {{ card.rarity }}</span>
              </div>
              <div class="text-sm text-gray-600">
                <p>Set: {{ card.set_name }}</p>
                <p>Release: {{ card.release_date }}</p>
                <p>Total Cards: {{ card.total_cards }}</p>
              </div>
              <div class="pt-2 border-t">
                <p class="text-sm font-semibold text-blue-600">Owned: {{ card.quantity }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class MegComponent implements OnInit {
  private http = inject(HttpClient);
  private authService = inject(AuthService);
  private cdr = inject(ChangeDetectorRef);
  
  cards: Card[] = [];
  loading = true;

  ngOnInit() {
    this.loadCards();
  }

  trackBySubsetNum(index: number, card: Card): number {
    return card.subset_num;
  }

  getImagePath(subsetNum: number): string {
    const path = `assets/meg/${subsetNum}.jpg`;
    console.log('Image path:', path);
    return path;
  }

  onImageError(event: any): void {
    event.target.src = '/assets/placeholder.svg';
  }

  private loadCards() {
    const username = this.authService.username();
    
    this.http.post<Card[]>('/api/cards', {
      card_set: 'meg',
      login_id: username
    }).subscribe({
      next: (data) => {
        console.log('First card data:', data[0]);
        this.cards = data;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error loading cards:', error);
        this.loading = false;
      }
    });
  }
}