import { Routes } from "@angular/router";
 
export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
 
  { path: 'home', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
 
  
  {
    path: 'masters',
    children: [
      { path: 'categories', loadComponent: () => import('./Components/Item-list/item-list.component').then(m => m.ItemListComponent) },
      { path: 'items', loadComponent: () => import('./Components/Item-list/item-list.component').then(m => m.ItemListComponent) },
      { path: 'items/create', loadComponent: () => import('./Components/Item-form/item-form.component').then(m => m.ItemFormComponent) },
      { path: 'items/edit/:id', loadComponent: () => import('./Components/Item-form/item-form.component').then(m => m.ItemFormComponent) },
      { path: 'customers', loadComponent: () => import('./Components/Item-list/item-list.component').then(m => m.ItemListComponent) },
      { path: 'vendors', loadComponent: () => import('./Components/Item-list/item-list.component').then(m => m.ItemListComponent) }
    ]
  },
 
  {
    path: 'transactions',
    children: [
      { path: 'indent', loadComponent: () => import('./Components/Item-list/item-list.component').then(m => m.ItemListComponent) },
      { path: 'po', loadComponent: () => import('./Components/Item-list/item-list.component').then(m => m.ItemListComponent) },
      { path: 'inward', loadComponent: () => import('./Components/Item-list/item-list.component').then(m => m.ItemListComponent) },
      { path: 'receipt', loadComponent: () => import('./Components/Item-list/item-list.component').then(m => m.ItemListComponent) }
    ]
  },
 
  { path: '**', redirectTo: 'home' }
];
 