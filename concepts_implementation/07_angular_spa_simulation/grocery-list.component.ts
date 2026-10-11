import { Component, OnInit } from '@angular/core';
import { GroceryService, GroceryItem } from './grocery.service';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit {
  // Component Properties
  appTitle: string = 'Angular Grocery Availability SPA';
  searchTerm: string = ''; // Bound via [(ngModel)] Two-Way Data Binding
  selectedCategory: string = 'ALL';
  isButtonDisabled: boolean = false; // Bound via [disabled] Property Binding

  // New item form model
  newItemName: string = '';
  newItemCategory: string = 'Dairy';
  newItemPrice: number = 50;

  // Items list
  items: GroceryItem[] = [];

  // Dependency Injection: GroceryService injected via constructor
  constructor(private groceryService: GroceryService) {}

  // Lifecycle Hook: ngOnInit runs after component initialization
  ngOnInit(): void {
    this.items = this.groceryService.getItems();
  }

  // Event Binding Handler
  onAddItem(): void {
    if (this.newItemName.trim()) {
      this.groceryService.addItem({
        id: 0,
        name: this.newItemName.trim(),
        category: this.newItemCategory,
        price: this.newItemPrice,
        inStock: true,
        addedDate: new Date()
      });
      // Reset input fields
      this.newItemName = '';
      this.newItemPrice = 50;
    }
  }

  onToggleStock(id: number): void {
    this.groceryService.toggleStock(id);
  }

  // Filtered items logic
  get filteredItems(): GroceryItem[] {
    return this.items.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesCat = this.selectedCategory === 'ALL' || item.category === this.selectedCategory;
      return matchesSearch && matchesCat;
    });
  }
}
