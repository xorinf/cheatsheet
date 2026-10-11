# EWP (Essentials of Web Programming) — MASTER CHEATSHEET & SCENARIO INDEX

>  **Exam Goal**: If you are given ANY question or programming scenario, find the exact code snippet below in seconds and implement it immediately.

---

## Cheatsheet Files Overview

| # | Topic / Unit | File Link | Core Concepts Covered |
|:---:|--------------|-----------|------------------------|
| **01** | **HTML** | [01_HTML.md](./01_HTML.md) | Internet vs WWW, Elements, Void tags, Headings, Links, Lists, Tables, Semantic Elements, Audio/Video |
| **02** | **CSS & JavaScript** | [02_CSS_JS.md](./02_CSS_JS.md) | Inline/Internal/External CSS, Selectors, Box Model, Flexbox, JS Types, Functions, DOM Manipulation, Events |
| **03** | **Adv. JS, XML & AJAX** | [03_ADV_JS_XML_AJAX.md](./03_ADV_JS_XML_AJAX.md) | Classes, Inheritance, Modules, Promises, Async/Await, Fetch API, Form Validation, XML, Namespaces, XSD, AJAX (XHR), JSON |
| **04** | **TypeScript** | [04_TYPESCRIPT.md](./04_TYPESCRIPT.md) | Setup, Types, Enums, Optional/Rest Params, Arrow Functions, Interfaces, Duck Typing, Access Modifiers, Generics |
| **05** | **Angular** | [05_ANGULAR.md](./05_ANGULAR.md) | CLI, Components, 4 Data Bindings, Directives (`*ngIf`, `*ngFor`), Pipes, Services & DI, HttpClient, Forms, Routing |
| **06** | **Lab Programs & Blueprint**| [06_LAB_PROGRAMS.md](./06_LAB_PROGRAMS.md) | Weeks 1–14 Code Templates, External Lab Universal Scenario Blueprint (*Grocery, Hospital, Student, etc.*) |
| **07** | **Interactive Code Implementations** | [concepts_implementation/README.md](./concepts_implementation/README.md) | 8 Modular folders with full HTML, CSS, JS/TS/XML code for Forms, Tables, Box Model, DOM, AJAX, TypeScript, Angular & Master Grocery App |

---

## MASTER SCENARIO-TO-SYNTAX LOOKUP TABLE

Find your exact coding problem below, grab the syntax, and run:

---

### 1. Forms & Input Controls

#### Scenario: How to create a form with all input types and HTML5 validation
 [See 01_HTML.md — Forms](./01_HTML.md#10-forms) | [See 06_LAB_PROGRAMS.md — Week 2](./06_LAB_PROGRAMS.md#week-2-html-forms--html5-built-in-validation)
```html
<form action="#" method="post">
  <input type="text" name="uname" placeholder="Name" required minlength="3">
  <input type="email" name="email" placeholder="Email" required>
  <input type="password" name="pwd" required minlength="6">
  <input type="number" name="age" min="18" max="99" required>
  <input type="radio" name="gender" value="Male" required> Male
  <input type="radio" name="gender" value="Female"> Female
  <select name="city" required>
    <option value="">--Select--</option>
    <option value="Hyd">Hyderabad</option>
  </select>
  <input type="checkbox" name="terms" required> Agree
  <input type="submit" value="Submit">
</form>
```

#### Scenario: How to validate a form in JavaScript using Regex and prevent page reload
 [See 03_ADV_JS_XML_AJAX.md — Form Validation](./03_ADV_JS_XML_AJAX.md#5-javascript-form-validation)
```javascript
function validateForm(e) {
  e.preventDefault(); // Stop default form submit / refresh
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[6-9]\d{9}$/; // 10 digit Indian mobile

  if (!emailRegex.test(email)) { alert("Invalid email!"); return false; }
  if (!phoneRegex.test(phone)) { alert("Invalid 10-digit phone!"); return false; }
  return true;
}
```

#### Scenario: How to save & retrieve form data in browser localStorage
 [See 06_LAB_PROGRAMS.md — Week 9](./06_LAB_PROGRAMS.md#week-9-js-form-validation-regex--localstorage)
```javascript
// Save Array to localStorage
const items = JSON.parse(localStorage.getItem("items_key") || "[]");
items.push({ name: "Apple", price: 100 });
localStorage.setItem("items_key", JSON.stringify(items));

// Retrieve from localStorage
const stored = JSON.parse(localStorage.getItem("items_key") || "[]");
console.log(stored);
```

#### Scenario: How to build a Form in Angular (Template-Driven Form)
 [See 05_ANGULAR.md — Template-Driven Forms](./05_ANGULAR.md#7-template-driven-forms)
```html
<!-- Requires FormsModule in AppModule -->
<form #myForm="ngForm" (ngSubmit)="onSubmit(myForm)">
  <input type="text" name="itemName" [(ngModel)]="item.name" required minlength="3" #nameCtrl="ngModel">
  <span *ngIf="nameCtrl.invalid && nameCtrl.touched" style="color:red;">Name required</span>
  <button type="submit" [disabled]="myForm.invalid">Save</button>
</form>
```

#### Scenario: How to build a Form in Angular (Reactive Forms)
 [See 05_ANGULAR.md — Reactive Forms](./05_ANGULAR.md#8-reactive-forms--validation)
```typescript
// Component: Requires ReactiveFormsModule in AppModule
this.loginForm = this.fb.group({
  email: ['', [Validators.required, Validators.email]],
  password: ['', [Validators.required, Validators.minLength(6)]]
});
```
```html
<!-- Template -->
<form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
  <input type="email" formControlName="email">
  <input type="password" formControlName="password">
  <button type="submit" [disabled]="loginForm.invalid">Login</button>
</form>
```

---

### 2. Tables, Layouts & CSS Box Model

#### Scenario: How to create a Table with `colspan` and `rowspan`
 [See 01_HTML.md — Tables](./01_HTML.md#9-tables) | [See 06_LAB_PROGRAMS.md — Week 3](./06_LAB_PROGRAMS.md#week-3-tables-with-colspan--rowspan-description-lists)
```html
<table border="1" cellpadding="6" cellspacing="0">
  <tr>
    <th rowspan="2">Category</th>
    <th colspan="2">Price List</th>
  </tr>
  <tr>
    <th>MRP</th>
    <th>Discounted</th>
  </tr>
  <tr>
    <td>Dairy</td>
    <td>₹60</td>
    <td>₹50</td>
  </tr>
</table>
```

#### Scenario: How to build a responsive Card Layout using Flexbox & Box Model
 [See 02_CSS_JS.md — Box Model](./02_CSS_JS.md#6-css-box-model) | [See 06_LAB_PROGRAMS.md — Week 6](./06_LAB_PROGRAMS.md#weeks-5--6-css-styling-box-model--responsive-flexbox)
```css
* { box-sizing: border-box; margin: 0; padding: 0; }

.container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.card {
  width: 250px;
  padding: 16px;              /* Padding */
  border: 1px solid #ccc;     /* Border */
  border-radius: 8px;
  margin: 10px;               /* Margin */
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: transform 0.2s;
}
.card:hover { transform: translateY(-4px); }
```

---

### 3. DOM Manipulation, Calculations & Events (JavaScript)

#### Scenario: How to read input numbers and calculate Total / Bill / Discount
 [See 06_LAB_PROGRAMS.md — Week 8](./06_LAB_PROGRAMS.md#weeks-7--8-javascript-fundamentals-dom-manipulation--calculations)
```javascript
function calculateBill() {
  const price = parseFloat(document.getElementById("price").value);
  const qty = parseInt(document.getElementById("quantity").value);
  const isMember = document.getElementById("isMember").checked;

  const subtotal = price * qty;
  const discount = isMember ? (subtotal * 0.10) : 0; // 10% discount
  const finalAmount = subtotal - discount;

  document.getElementById("totalOutput").innerHTML = `
    <b>Total:</b> ₹${finalAmount.toFixed(2)} (Discount: ₹${discount.toFixed(2)})
  `;
}
```

#### Scenario: How to dynamically add items to an HTML list / table on button click
 [See 02_CSS_JS.md — DOM](./02_CSS_JS.md#16-dom-document-object-model)
```javascript
function addItem() {
  const text = document.getElementById("inputBox").value;
  if (!text) return;

  const ul = document.getElementById("myList");
  const li = document.createElement("li");
  li.textContent = text;
  ul.appendChild(li);

  document.getElementById("inputBox").value = ""; // Clear input
}
```

---

### 4. AJAX, XML, JSON & Fetch API

#### Scenario: How to fetch XML data asynchronously with AJAX (`XMLHttpRequest`) without reload
 [See 03_ADV_JS_XML_AJAX.md — XMLHttpRequest](./03_ADV_JS_XML_AJAX.md#11-xmlhttprequest-xhr-object) | [See 06_LAB_PROGRAMS.md — Week 10](./06_LAB_PROGRAMS.md#week-10-xml--ajax-xmlhttprequest-dynamic-data-display)
```javascript
function loadXML() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "items.xml", true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const xmlDoc = xhr.responseXML;
      const items = xmlDoc.getElementsByTagName("item");
      let output = "";
      for (let i = 0; i < items.length; i++) {
        const name = items[i].getElementsByTagName("name")[0].textContent;
        const price = items[i].getElementsByTagName("price")[0].textContent;
        output += `<li>${name} - ₹${price}</li>`;
      }
      document.getElementById("list").innerHTML = output;
    }
  };
  xhr.send();
}
```

#### Scenario: How to fetch JSON data with `fetch()` and `async/await`
 [See 03_ADV_JS_XML_AJAX.md — Async/Await](./03_ADV_JS_XML_AJAX.md#4-async--await--fetch-api)
```javascript
async function loadProducts() {
  try {
    const res = await fetch("https://api.example.com/items");
    if (!res.ok) throw new Error("HTTP Error " + res.status);
    const data = await res.json();
    console.log("Products:", data);
  } catch (err) {
    console.error("Fetch error:", err.message);
  }
}
```

---

### 5. OOP & TypeScript (Classes, Interfaces, Generics)

#### Scenario: How to define an Interface with optional and readonly properties in TypeScript
 [See 04_TYPESCRIPT.md — Interfaces](./04_TYPESCRIPT.md#5-interfaces--duck-typing)
```typescript
interface Product {
  id: number;
  name: string;
  price: number;
  category?: string;       // Optional
  readonly barcode: string; // Cannot be altered after creation
}
```

#### Scenario: How to write a Class with constructor shortcut and access modifiers in TypeScript
 [See 04_TYPESCRIPT.md — Classes](./04_TYPESCRIPT.md#6-classes-constructors--access-modifiers)
```typescript
class ProductRecord {
  // Parameter properties shortcut: declares & assigns automatically
  constructor(
    public id: number,
    public name: string,
    private costPrice: number,
    protected sellingPrice: number
  ) {}

  public getProfit(): number {
    return this.sellingPrice - this.costPrice;
  }
}
```

#### Scenario: How to use TypeScript Generics `<T>`
 [See 04_TYPESCRIPT.md — Generics](./04_TYPESCRIPT.md#8-generics--generic-constraints)
```typescript
// Generic Function
function getFirst<T>(arr: T[]): T | undefined {
  return arr.length > 0 ? arr[0] : undefined;
}
const n = getFirst<number>([1, 2, 3]);   // type: number
const s = getFirst<string>(["a", "b"]); // type: string
```

---

### 6. Angular Building Blocks (Data Binding, Directives, Services)

#### Scenario: How to use all 4 Angular Data Bindings
 [See 05_ANGULAR.md — Templates & Data Binding](./05_ANGULAR.md#3-templates--data-binding-4-types)
```html
<!-- 1. Interpolation -->
<h1>{{ title }}</h1>

<!-- 2. Property Binding -->
<button [disabled]="isSubmitting">Submit</button>

<!-- 3. Event Binding -->
<button (click)="saveItem()">Save</button>

<!-- 4. Two-Way Binding (Banana in a box [()]) -->
<input type="text" [(ngModel)]="searchKeyword">
```

#### Scenario: How to use `*ngIf` and `*ngFor` in Angular
 [See 05_ANGULAR.md — Directives](./05_ANGULAR.md#4-directives--pipes)
```html
<!-- Conditional rendering with else block -->
<p *ngIf="items.length > 0; else emptyState">Items are available.</p>
<ng-template #emptyState><p>No items found!</p></ng-template>

<!-- Loop through array with index -->
<ul>
  <li *ngFor="let item of items; let i = index">
    {{ i + 1 }}. {{ item.name }} — ₹{{ item.price }}
  </li>
</ul>
```

#### Scenario: How to create and inject an Angular Service
 [See 05_ANGULAR.md — Services](./05_ANGULAR.md#5-services--dependency-injection-di)
```typescript
// 1. Service: grocery.service.ts
@Injectable({ providedIn: 'root' })
export class GroceryService {
  getItems() { return ['Milk', 'Bread', 'Eggs']; }
}

// 2. Component: app.component.ts
export class AppComponent implements OnInit {
  items: string[] = [];
  constructor(private groceryService: GroceryService) {} // DI in constructor
  ngOnInit() { this.items = this.groceryService.getItems(); }
}
```

#### Scenario: How to fetch data with Angular `HttpClient` and Observable `.subscribe()`
 [See 05_ANGULAR.md — HttpClient](./05_ANGULAR.md#6-lifecycle-hooks--httpclient)
```typescript
// Service
constructor(private http: HttpClient) {}
getGroceries(): Observable<GroceryItem[]> {
  return this.http.get<GroceryItem[]>('/api/groceries');
}

// Component
this.groceryService.getGroceries().subscribe({
  next: (data) => this.items = data,
  error: (err) => console.error(err)
});
```

---

>  **Exam Tip**: In your exam question paper or lab task, identify which category your requirement falls under, copy the structure above, replace the variable names with your scenario (e.g. `Grocery`, `Hospital`, `Student`), and your solution is complete!
