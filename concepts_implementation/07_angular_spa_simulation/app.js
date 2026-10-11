/**
 * Angular Concept Simulator Logic
 * Powers the browser demonstration to faithfully replicate Angular's:
 * - Interpolation: {{ title }}
 * - Property Binding: [disabled]
 * - Event Binding: (click)
 * - Two-Way Binding: [(ngModel)]
 * - Directives: *ngIf and *ngFor
 * - Pipes: uppercase and currency
 * - Service: Dependency Injection pattern
 */

// ==========================================
// 1. SIMULATING ANGULAR SERVICE
// ==========================================
class SimulatedGroceryService {
  constructor() {
    this.items = [
      { id: 1, name: "Pasteurized Milk (1L)", category: "Dairy", price: 60, inStock: true },
      { id: 2, name: "Brown Bread Loaf", category: "Bakery", price: 45, inStock: true },
      { id: 3, name: "Alphonso Mangoes (1kg)", category: "Produce", price: 400, inStock: false },
      { id: 4, name: "Basmati Rice (5kg)", category: "Grains", price: 380, inStock: true }
    ];
  }

  getItems() {
    return this.items;
  }

  addItem(newItem) {
    this.items.push(newItem);
  }

  toggleStock(id) {
    const item = this.items.find(i => i.id === id);
    if (item) item.inStock = !item.inStock;
  }
}

// ==========================================
// 2. SIMULATING ANGULAR COMPONENT
// ==========================================
class SimulatedGroceryComponent {
  constructor(groceryService) {
    // Service Injection via constructor!
    this.service = groceryService;

    // Component Properties
    this.appTitle = "Grocery Availability Single Page App";
    this.searchTerm = "";
    this.items = [];
  }

  // Simulating ngOnInit Lifecycle Hook
  ngOnInit() {
    this.items = this.service.getItems();
    this.initDOM();
    this.render();
  }

  initDOM() {
    // 1. Interpolation: {{ appTitle }}
    document.getElementById("appTitle").textContent = this.appTitle;

    // DOM inputs
    this.searchInput = document.getElementById("searchInput");
    this.liveSearchDisplay = document.getElementById("liveSearchDisplay");
    this.itemNameInput = document.getElementById("itemNameInput");
    this.itemCatSelect = document.getElementById("itemCatSelect");
    this.itemPriceInput = document.getElementById("itemPriceInput");
    this.addBtn = document.getElementById("addBtn");
    this.catalogGrid = document.getElementById("catalogGrid");
    this.emptyCatalogState = document.getElementById("emptyCatalogState");

    // 4. Two-Way Data Binding [(ngModel)] Listener
    this.searchInput.addEventListener("input", (e) => {
      this.searchTerm = e.target.value; // View -> Model
      this.liveSearchDisplay.textContent = `"${this.searchTerm}"`; // Model -> View
      this.render();
    });

    // 2. Property Binding [disabled] on Add Button
    this.itemNameInput.addEventListener("input", (e) => {
      const hasText = e.target.value.trim().length > 0;
      // [disabled]="!hasText"
      this.addBtn.disabled = !hasText;
    });

    // 3. Event Binding (click)="onAddItem()"
    this.addBtn.addEventListener("click", () => {
      this.onAddItem();
    });
  }

  onAddItem() {
    const name = this.itemNameInput.value.trim();
    const cat = this.itemCatSelect.value;
    const price = parseFloat(this.itemPriceInput.value) || 0;

    if (name) {
      this.service.addItem({
        id: Date.now(),
        name: name,
        category: cat,
        price: price,
        inStock: true
      });

      // Clear form
      this.itemNameInput.value = "";
      this.addBtn.disabled = true;
      this.render();
    }
  }

  onToggleStock(id) {
    this.service.toggleStock(id);
    this.render();
  }

  // Render method simulating Angular Change Detection, Directives & Pipes
  render() {
    // Filter logic
    const filtered = this.items.filter(item =>
      item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );

    // Structural Directive: *ngIf / else
    if (filtered.length === 0) {
      this.catalogGrid.innerHTML = "";
      this.emptyCatalogState.classList.remove("hidden");
      return;
    }

    this.emptyCatalogState.classList.add("hidden");
    this.catalogGrid.innerHTML = "";

    // Structural Directive: *ngFor="let item of filteredItems"
    filtered.forEach((item, index) => {
      // Angular Built-in Pipes:
      const categoryPipe = item.category.toUpperCase(); // | uppercase
      const pricePipe = `₹${item.price.toFixed(2)}`;   // | currency:'INR'

      const card = document.createElement("div");
      card.className = "ng-card";
      card.innerHTML = `
        <div class="ng-card-top">
          <span class="cat-badge">${categoryPipe}</span>
          <span style="font-size:11px; color:#94a3b8;">Index: ${index}</span>
        </div>
        <h4>${item.name}</h4>
        <div class="card-price">${pricePipe}</div>
        <div class="status-pill ${item.inStock ? "status-in" : "status-out"}">
          ${item.inStock ? "In Stock" : "Out of Stock"}
        </div>
        <button class="btn-toggle" onclick="appComponent.onToggleStock(${item.id})">
          (click)="toggleStock()"
        </button>
      `;
      this.catalogGrid.appendChild(card);
    });
  }
}

// Bootstrap Application (Simulating Angular main.ts)
const groceryService = new SimulatedGroceryService(); // Service Singleton
const appComponent = new SimulatedGroceryComponent(groceryService); // Injected into Component
appComponent.ngOnInit();
