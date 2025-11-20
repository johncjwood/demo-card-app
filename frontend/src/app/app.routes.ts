import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GoalsComponent } from './pages/goals/goals.component';
import { CollectionsComponent } from './pages/collections/collections.component';
import { MegComponent } from './pages/collections/meg.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'goals', component: GoalsComponent },
  { path: 'collections', component: CollectionsComponent },
  { path: 'collections/meg', component: MegComponent }
];
