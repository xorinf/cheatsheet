# UNIT V — ANGULAR CHEATSHEET

---

## 1. Introduction, Features & Angular CLI

> **Step-by-Step Setup Guide**: For a beginner-friendly walkthrough on installing Node.js, running Angular CLI, configuring `FormsModule`, and running your project locally, see [ANGULAR_SETUP_GUIDE.md](./concepts_implementation/07_angular_spa_simulation/ANGULAR_SETUP_GUIDE.md).

### Key: Definitions
| Term | One-Liner |
|------|-----------|
| **Angular** | Modern, open-source TypeScript-based frontend web framework developed by Google for building SPAs |
| **SPA** | Single Page Application — web app that loads a single HTML page and dynamically rewrites contents without refreshing |
| **Angular CLI** | Command Line Interface tool used to initialize, develop, scaffold, test, and build Angular applications |
| **Component-Based** | Architecture dividing the user interface into independent, reusable, and self-contained building blocks |
| **Data Binding** | Automatic synchronization of data between the TypeScript component (model) and the HTML template (view) |
| **Dependency Injection**| Design pattern where Angular supplies required services/objects to a class automatically rather than instantiating them manually |

---

### Angular CLI Commands
| Action | Command | Shortcut |
|--------|---------|:--------:|
| Install Angular CLI | `npm install -g @angular/cli` | — |
| Create New Project | `ng new my-app --routing --style=css` | — |
| Run Dev Server | `ng serve --open` (or `ng serve -o`) | `ng s -o` |
| Generate Component | `ng generate component grocery-list` | `ng g c grocery-list` |
| Generate Service | `ng generate service grocery` | `ng g s grocery` |
| Generate Pipe | `ng generate pipe discount` | `ng g p discount` |
| Generate Directive | `ng generate directive highlight` | `ng g d highlight` |
| Build for Production | `ng build` | — |

---

### Angular Project File Structure
```
my-app/
├── src/
│   ├── app/
│   │   ├── app.component.ts    # Main TypeScript component logic
│   │   ├── app.component.html  # Main component HTML view template
│   │   ├── app.component.css   # Main component styles
│   │   └── app.module.ts       # Root module declaring components/imports
│   ├── index.html              # Single HTML shell file containing <app-root>
│   ├── main.ts                 # Bootstrap entry point that loads AppModule
│   └── styles.css              # Global application CSS styles
├── angular.json                # Project configuration settings
└── package.json                # Project npm dependencies and scripts
```

---

## 2. Components & Modules

### Key: Definitions
| Concept | One-Liner |
|---------|-----------|
| **Component** | Basic UI building block composed of 3 parts: HTML Template, TypeScript Class, and CSS Styles |
| **`@Component`** | Decorator function attaching metadata specifying selector, template, and styles to a TypeScript class |
| **Selector** | Custom HTML tag name used to render the component in markup (e.g., `<app-grocery-list>`) |
| **Module (`@NgModule`)** | Container grouping related components, directives, pipes, and services into a cohesive unit |

---

### Component Syntax Example (`grocery-item.component.ts`)
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-grocery-item',
  templateUrl: './grocery-item.component.html',
  styleUrls: ['./grocery-item.component.css']
})
export class GroceryItemComponent {
  title: string = 'Fresh Groceries';
  itemCount: number = 24;

  addItem(): void {
    this.itemCount++;
  }
}
```

### Root Module Syntax (`app.module.ts`)
```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GroceryItemComponent } from './grocery-item.component';

@NgModule({
  declarations: [
    AppComponent,             // Components, directives, pipes declared here
    GroceryItemComponent
  ],
  imports: [
    BrowserModule,            // Essential browser support
    FormsModule,              // Needed for [(ngModel)] Template-driven forms
    ReactiveFormsModule,      // Needed for [formGroup] Reactive forms
    HttpClientModule          // Needed for HTTP API calls
  ],
  providers: [],              // Services registered here (if not root)
  bootstrap: [AppComponent]   // Root component to load at startup
})
export class AppModule { }
```

---

## 3. Templates & Data Binding (4 Types)

### The 4 Types of Data Binding in Angular
| Binding Type | Direction | Syntax | Purpose |
|--------------|:---------:|--------|---------|
| **1. Interpolation** | Component -> View | `{{ expression }}` | Displaying dynamic variables or expressions as text |
| **2. Property Binding** | Component -> View | `[property]="variable"` | Binding element properties (e.g. `src`, `disabled`, `value`) |
| **3. Event Binding** | View -> Component | `(event)="handler()"` | Listening for user interactions (e.g. `click`, `keyup`, `submit`) |
| **4. Two-Way Binding** | Component <-> View | `[(ngModel)]="variable"` | Immediate two-way synchronization between input and model |

---

### Code Examples for All 4 Bindings

#### In `app.component.ts`:
```typescript
export class AppComponent {
  storeName: string = "Fresh Supermarket";
  imageUrl: string = "assets/groceries.jpg";
  isButtonDisabled: boolean = false;
  searchQuery: string = "Rice";

  onSearchClick(): void {
    alert("Searching for: " + this.searchQuery);
  }
}
```

#### In `app.component.html`:
```html
<!-- 1. Interpolation -->
<h1>Welcome to {{ storeName }}</h1>

<!-- 2. Property Binding -->
<img [src]="imageUrl" alt="Store Banner" width="200">
<button [disabled]="isButtonDisabled">Order Now</button>

<!-- 3. Event Binding -->
<button (click)="onSearchClick()">Search</button>

<!-- 4. Two-Way Data Binding (requires FormsModule in AppModule) -->
<input type="text" [(ngModel)]="searchQuery">
<p>You are searching for: {{ searchQuery }}</p>
```

> Tip: **Memory Trick for Two-Way Binding**: `[()]` is called **"Banana in a Box"** — brackets `[]` outside, parentheses `()` inside!

---

## 4. Directives & Pipes

### Key: Definitions
| Type | Description | Examples |
|------|-------------|----------|
| **Structural Directives** | Modify DOM structure by adding, removing, or manipulating HTML elements (prefixed with `*`) | `*ngIf`, `*ngFor`, `*ngSwitch` |
| **Attribute Directives** | Alter the appearance or behavior of an existing element without altering the DOM tree | `[ngClass]`, `[ngStyle]` |
| **Pipes** | Transform display data inside templates without changing the original value (`\|`) | `uppercase`, `date`, `currency` |

---

### 1. Structural Directives Syntax

#### `*ngIf` and `else` block
```html
<p *ngIf="inStock; else outStockBlock">Item is available in stock!</p>

<ng-template #outStockBlock>
  <p style="color:red;">Currently Out of Stock!</p>
</ng-template>
```

#### `*ngFor` with index
```html
<ul>
  <!-- let i = index gives 0-based iteration index -->
  <li *ngFor="let item of groceryList; let i = index">
    {{ i + 1 }}. {{ item.name }} — ₹{{ item.price }}
  </li>
</ul>
```

#### `[ngSwitch]`
```html
<div [ngSwitch]="orderStatus">
  <p *ngSwitchCase="'Pending'">[Pending] Order is being prepared.</p>
  <p *ngSwitchCase="'Shipped'"> Order is on the way.</p>
  <p *ngSwitchCase="'Delivered'">[Valid] Order delivered!</p>
  <p *ngSwitchDefault>Warning: Unknown status.</p>
</div>
```

---

### 2. Attribute Directives (`[ngClass]` & `[ngStyle]`)
```html
<!-- Apply 'text-danger' class if stock is 0 -->
<span [ngClass]="{ 'text-danger': stock === 0, 'text-success': stock > 0 }">
  Stock: {{ stock }}
</span>

<!-- Dynamically set inline CSS style -->
<p [ngStyle]="{ 'color': price > 100 ? 'red' : 'green', 'font-weight': 'bold' }">
  Price: ₹{{ price }}
</p>
```

---

### 3. Pipes (Built-in & Custom)

#### Built-in Pipes
```html
<p>{{ 'fresh fruits' | uppercase }}</p>          <!-- FRESH FRUITS -->
<p>{{ 'ORGANIC' | lowercase }}</p>               <!-- organic -->
<p>{{ todayDate | date:'fullDate' }}</p>         <!-- Monday, October 11, 2026 -->
<p>{{ 1250.5 | currency:'INR' }}</p>             <!-- ₹1,250.50 -->
<p>{{ 0.18 | percent }}</p>                      <!-- 18% -->
<p>{{ rawObject | json }}</p>                    <!-- { "id": 1, "name": "Milk" } -->
```

#### Creating a Custom Pipe (`discount.pipe.ts`)
```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {
  // Takes price and percentage, returns discounted price
  transform(price: number, discountPercent: number = 10): number {
    return price - (price * discountPercent) / 100;
  }
}
```

```html
<!-- Usage in template: -->
<p>Original: ₹{{ item.price }} | After 15% Off: ₹{{ item.price | discount:15 }}</p>
```

---

## 5. Services & Dependency Injection (DI)

### Key: Definitions
| Concept | One-Liner |
|---------|-----------|
| **Service** | Centralized class containing business logic, reusable calculations, or server API communication |
| **`@Injectable`** | Decorator marking a class as a service that can be injected into components or other services |
| **`providedIn: 'root'`**| Registers the service as a singleton instance available everywhere across the entire application |
| **Dependency Injection**| Supplying the service instance via the component's constructor parameter |

---

### Complete Service & Injection Code

#### 1. Defining Service (`grocery.service.ts`)
```typescript
import { Injectable } from '@angular/core';

export interface GroceryItem {
  id: number;
  name: string;
  price: number;
}

@Injectable({
  providedIn: 'root' // Singleton across app
})
export class GroceryService {
  private items: GroceryItem[] = [
    { id: 1, name: 'Rice (1kg)', price: 60 },
    { id: 2, name: 'Sugar (1kg)', price: 42 }
  ];

  getItems(): GroceryItem[] {
    return this.items;
  }

  addItem(item: GroceryItem): void {
    this.items.push(item);
  }
}
```

#### 2. Injecting into Component (`app.component.ts`)
```typescript
import { Component, OnInit } from '@angular/core';
import { GroceryService, GroceryItem } from './grocery.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  groceries: GroceryItem[] = [];

  // (Recommended) Dependency Injection inside constructor
  constructor(private groceryService: GroceryService) {}

  // Lifecycle hook: initialize data
  ngOnInit(): void {
    this.groceries = this.groceryService.getItems();
  }
}
```

---

## 6. Lifecycle Hooks & HttpClient

### Key: Common Lifecycle Hooks
| Hook | Method | When It Executes |
|------|--------|------------------|
| **`OnInit`** | `ngOnInit()` | Called once after component inputs are initialized; **best place to fetch API data** |
| **`OnChanges`** | `ngOnChanges()` | Called whenever `@Input()` bound properties change |
| **`DoCheck`** | `ngDoCheck()` | Called during every change detection cycle |
| **`OnDestroy`** | `ngOnDestroy()` | Called immediately before component is removed from DOM; cleanup code |

---

### HttpClient & Observables vs Promises
| Feature | RxJS Observable | JavaScript Promise |
|---------|-----------------|--------------------|
| **Values** | Emits **stream of multiple values** over time | Resolves **single value** once |
| **Execution** | **Lazy** (does not run until `.subscribe()` is called) | **Eager** (executes immediately on creation) |
| **Cancellation** | **Cancellable** via `subscription.unsubscribe()` | Cannot be cancelled |
| **Operators** | Rich functional operators (`map`, `filter`, `debounceTime`) | Only `.then()`, `.catch()` |

---

### HttpClient Code Template (`api.service.ts`)
```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Product {
  id: number;
  title: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://api.example.com/products';

  constructor(private http: HttpClient) {}

  // Returns an Observable of Product array
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
}
```

#### Consuming in Component (`product-list.component.ts`):
```typescript
import { Component, OnInit } from '@angular/core';
import { ApiService, Product } from './api.service';

@Component({
  selector: 'app-product-list',
  template: `
    <ul *ngFor="let p of products">
      <li>{{ p.title }} - ₹{{ p.price }}</li>
    </ul>
  `
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    // Subscribe to Observable
    this.apiService.getProducts().subscribe({
      next: (data) => this.products = data,
      error: (err) => console.error("Error fetching data:", err)
    });
  }
}
```

---

## 7. Template-Driven Forms

### Key: Definitions & State Tracking
| Concept / State | Description |
|-----------------|-------------|
| **`FormsModule`** | Must be imported in `AppModule` to enable Template-Driven forms |
| **`#form="ngForm"`**| Creates template reference variable capturing the `NgForm` directive instance |
| **`[(ngModel)]`** | Binds form input control to component property; **`name` attribute is required!** |
| **`pristine` / `dirty`**| Has user modified the control value? (`pristine` = not modified, `dirty` = modified) |
| **`untouched` / `touched`**| Has user focused and blurred out of the control? |
| **`valid` / `invalid`** | Does value satisfy all validation rules (`required`, `email`, `pattern`)? |

---

### Complete Template-Driven Form Template
```html
<form #groceryForm="ngForm" (ngSubmit)="onSubmit(groceryForm)">
  <!-- Name field -->
  <div>
    <label>Item Name:</label>
    <input type="text" name="itemName" [(ngModel)]="item.name" #itemName="ngModel" required minlength="3">
    <span *ngIf="itemName.invalid && itemName.touched" style="color:red;">
      Name is required (min 3 chars).
    </span>
  </div>

  <!-- Price field -->
  <div>
    <label>Price:</label>
    <input type="number" name="itemPrice" [(ngModel)]="item.price" #itemPrice="ngModel" required>
    <span *ngIf="itemPrice.invalid && itemPrice.touched" style="color:red;">
      Price is required.
    </span>
  </div>

  <button type="submit" [disabled]="groceryForm.invalid">Submit</button>
</form>
```

#### Component Class:
```typescript
export class FormDemoComponent {
  item = { name: '', price: 0 };

  onSubmit(form: any): void {
    if (form.valid) {
      console.log('Submitted Data:', form.value);
      form.reset();
    }
  }
}
```

---

## 8. Reactive Forms & Validation

### Key: Definitions
| Concept | One-Liner |
|---------|-----------|
| **`ReactiveFormsModule`** | Must be imported in `AppModule` to enable model-driven Reactive forms |
| **`FormControl`** | Tracks the value and validation status of an individual form input control |
| **`FormGroup`** | Tracks value and validity of a group of `FormControl` instances |
| **`FormBuilder`** | Syntactic sugar service providing helper methods (`fb.group`) to create forms easily |
| **`Validators`** | Built-in validation functions: `Validators.required`, `Validators.pattern`, `Validators.email` |

---

### Complete Reactive Form Template

#### Component (`register.component.ts`):
```typescript
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    });
  }

  // Helper getter for easy template access
  get f() { return this.registerForm.controls; }

  onSubmit(): void {
    if (this.registerForm.valid) {
      console.log('Valid Form Data:', this.registerForm.value);
    }
  }
}
```

#### Template (`register.component.html`):
```html
<form [formGroup]="registerForm" (ngSubmit)="onSubmit()">
  <div>
    <label>Username:</label>
    <input type="text" formControlName="username">
    <span *ngIf="f['username'].touched && f['username'].invalid" style="color:red;">
      Username must be at least 4 characters.
    </span>
  </div>

  <div>
    <label>Email:</label>
    <input type="email" formControlName="email">
    <span *ngIf="f['email'].touched && f['email'].invalid" style="color:red;">
      Enter valid email.
    </span>
  </div>

  <div>
    <label>Phone (10 digits):</label>
    <input type="text" formControlName="phone">
    <span *ngIf="f['phone'].touched && f['phone'].invalid" style="color:red;">
      Must be 10 digits.
    </span>
  </div>

  <button type="submit" [disabled]="registerForm.invalid">Register</button>
</form>
```

---

## 9. Angular Routing

### Key: Definitions
| Concept | One-Liner |
|---------|-----------|
| **Routing** | Facilitates navigation between different views/components in an SPA based on the URL path |
| **`RouterModule`** | Angular routing module providing directives (`router-outlet`, `routerLink`) and service providers |
| **`<router-outlet>`** | Placeholder directive where Angular dynamically displays the matched component view |
| **`routerLink`** | Directive placed on `<a>` tags for SPA navigation without triggering page refresh |
| **`ActivatedRoute`** | Injected service providing information about the current route URL and route parameters |

---

### Complete Routing Setup

#### 1. Define Routes (`app-routing.module.ts`)
```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ProductListComponent } from './product-list.component';
import { DetailsComponent } from './details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'details/:id', component: DetailsComponent }, // Route with parameter
  { path: '**', redirectTo: '' }                         // Wildcard 404 fallback
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

#### 2. Navigation in HTML (`app.component.html`)
```html
<nav>
  <a routerLink="/" routerLinkActive="active">Home</a> |
  <a routerLink="/products" routerLinkActive="active">Products</a>
</nav>

<!-- Matched route view displays here: -->
<router-outlet></router-outlet>
```

#### 3. Reading Route Parameters (`details.component.ts`)
```typescript
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  template: `<h2>Viewing Item ID: {{ itemId }}</h2>`
})
export class DetailsComponent implements OnInit {
  itemId: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Read route parameter :id
    this.itemId = this.route.snapshot.paramMap.get('id');
  }
}
```

---

## Quick Exam Revision Table
| Concept | Key Syntax | Remember Rule |
|---------|------------|---------------|
| Interpolation | `{{ value }}` | One-way component to view |
| Property Binding | `[src]="imgUrl"` | One-way component to view |
| Event Binding | `(click)="save()"` | One-way view to component |
| Two-Way Binding | `[(ngModel)]="name"` | Requires `FormsModule`, `name` attribute in HTML |
| Structural Directive | `*ngIf`, `*ngFor` | Prefixed with asterisk `*` |
| Pipe | `{{ price \| currency:'INR' }}` | Transforms display output only |
| Service | `@Injectable({ providedIn: 'root' })` | Injected via constructor |
| HTTP Request | `http.get<T[]>(url).subscribe()` | Observables are lazy; must call `.subscribe()` |
| Template Form | `#f="ngForm"`, `[(ngModel)]` | Form logic in HTML template |
| Reactive Form | `[formGroup]="fg"`, `formControlName` | Requires `ReactiveFormsModule`, logic in TS |
| Routing Outlet | `<router-outlet></router-outlet>` | Dynamic placeholder for route component |
