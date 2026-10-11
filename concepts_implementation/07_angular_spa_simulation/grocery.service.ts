import { Injectable } from '@angular/core';

export interface GroceryItem {
  id: number;
  name: string;
  category: string;
  price: number;
  inStock: boolean;
  addedDate: Date;
}

@Injectable({
  providedIn: 'root' // Singleton across entire Angular application
})
export class GroceryService {
  private items: GroceryItem[] = [
    { id: 1, name: 'Pasteurized Milk (1L)', category: 'Dairy', price: 60, inStock: true, addedDate: new Date() },
    { id: 2, name: 'Brown Bread Loaf', category: 'Bakery', price: 45, inStock: true, addedDate: new Date() },
    { id: 3, name: 'Alphonso Mangoes', category: 'Produce', price: 400, inStock: false, addedDate: new Date() },
    { id: 4, name: 'Basmati Rice (5kg)', category: 'Grains', price: 380, inStock: true, addedDate: new Date() }
  ];

  getItems(): GroceryItem[] {
    return this.items;
  }

  addItem(newItem: GroceryItem): void {
    newItem.id = this.items.length + 1;
    newItem.addedDate = new Date();
    this.items.push(newItem);
  }

  toggleStock(id: number): void {
    const item = this.items.find(i => i.id === id);
    if (item) {
      item.inStock = !item.inStock;
    }
  }
}
