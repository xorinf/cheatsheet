# UNIT IV — TYPESCRIPT CHEATSHEET

---

## 1. Introduction & Setup

### Key: Definitions
| Term | One-Liner |
|------|-----------|
| **TypeScript** | Open-source typed superset of JavaScript developed by Microsoft that compiles to plain JavaScript |
| **Why TypeScript?** | Catches errors at compile-time instead of run-time; adds static typing, interfaces, and OOP features |
| **Transpilation** | Compiling TypeScript code (`.ts`) down to standard JavaScript code (`.js`) using `tsc` |
| **Static Typing** | Type checking occurs during compilation before code executes |
| **Dynamic Typing** | Type checking occurs at runtime while program executes (standard JavaScript) |
| **`tsconfig.json`** | Configuration file specifying root files and compiler options for a TypeScript project |

### CLI Commands & Installation
```bash
# 1. Install TypeScript globally
npm install -g typescript

# 2. Check installed version
tsc -v

# 3. Compile a TypeScript file to JavaScript
tsc app.ts          # produces app.js

# 4. Run compiled JavaScript file
node app.js

# 5. Initialize tsconfig.json project config
tsc --init

# 6. Auto-compile on file changes (watch mode)
tsc -w
```

---

## 2. Variables & Data Types

### Key: Type Annotation Syntax
```typescript
let variableName: dataType = initialValue;
```

### Complete TypeScript Data Types
| Type | Description | Example |
|------|-------------|---------|
| `number` | Double-precision floating point (integers and floats) | `let price: number = 49.99;` |
| `string` | Textual data | `let name: string = "Fresh Apples";` |
| `boolean` | Logical `true` or `false` | `let isAvailable: boolean = true;` |
| `any` | Disables type-checking; allows any value (avoid when possible) | `let data: any = 10; data = "text";` |
| `unknown` | Type-safe counterpart of `any`; must perform type check before usage | `let val: unknown = "hi"; if (typeof val === "string") val.toUpperCase();` |
| `void` | Used for functions that return no value | `function logMsg(): void { console.log("Done"); }` |
| `null` & `undefined` | Intentional absence of value / uninitialized variable | `let n: null = null; let u: undefined = undefined;` |
| `never` | Represents values that never occur (e.g., functions throwing error or infinite loop) | `function fail(): never { throw new Error("Crash"); }` |
| **Array** | Collection of elements of identical type | `let items: string[] = ["Rice", "Sugar"];`<br>`let prices: Array<number> = [10, 20];` |
| **Tuple** | Fixed-length array with defined type per position | `let product: [number, string] = [101, "Milk"];` |
| **Union Type** | Allows a variable to hold one of several types (`\|`) | `let id: number \| string = "A101";` |
| **Type Alias** | Custom user-defined name for any type | `type Status = "Pending" \| "Completed";` |

---

### Enums (Enumerations)
Named set of numeric or string constants.

```typescript
// 1. Numeric Enum (auto-increments from 0)
enum OrderStatus {
  Pending,    // 0
  Shipped,    // 1
  Delivered,  // 2
  Cancelled   // 3
}
let currentStatus: OrderStatus = OrderStatus.Pending; // 0

// 2. Custom Numeric Enum
enum Priority {
  Low = 1,
  Medium = 5,
  High = 10
}

// 3. String Enum
enum Category {
  Dairy = "DAIRY",
  Produce = "PRODUCE",
  Bakery = "BAKERY"
}
let itemCategory: Category = Category.Dairy; // "DAIRY"
```

---

## 3. Functions & Parameters

### Key: Definitions
| Concept | One-Liner |
|---------|-----------|
| **Function Type** | Specifying parameter types and return type: `function name(param: type): returnType` |
| **Optional Param (`?`)** | Parameter that may be omitted; must appear **after** required parameters |
| **Default Param (`=`)** | Parameter initialized with fallback value when omitted or `undefined` passed |
| **Rest Param (`...`)** | Captures arbitrary number of arguments into a typed array; must be last parameter |

---

### Syntax & Code Templates

#### 1. Basic Typed Function
```typescript
function calculateSubtotal(price: number, quantity: number): number {
  return price * quantity;
}
console.log(calculateSubtotal(25, 4)); // 100
```

#### 2. Optional Parameter (`?`)
```typescript
function printProduct(name: string, price: number, discount?: number): void {
  if (discount !== undefined) {
    console.log(`${name}: ₹${price} (Discount: ₹${discount})`);
  } else {
    console.log(`${name}: ₹${price}`);
  }
}
printProduct("Milk", 30);       // Valid
printProduct("Milk", 30, 5);    // Valid
```

#### 3. Default Parameter (`=`)
```typescript
function applyTax(amount: number, taxRate: number = 0.05): number {
  return amount + amount * taxRate;
}
console.log(applyTax(100));     // 105 (uses default 0.05)
console.log(applyTax(100, 0.18)); // 118 (overrides default)
```

#### 4. Rest Parameters (`...`)
```typescript
function calculateTotalCost(deliveryFee: number, ...itemPrices: number[]): number {
  const itemsTotal = itemPrices.reduce((sum, current) => sum + current, 0);
  return itemsTotal + deliveryFee;
}
console.log(calculateTotalCost(40, 120, 80, 50)); // 290
```

---

## 4. Arrow Functions

### Key: Key Characteristics
- Compact syntax: `(params) => expression`
- Preserves **lexical `this`** (inherits `this` from surrounding lexical context, unlike standard `function`)
- Implicit return for single-line statements

```typescript
// Single line arrow function with typed parameters and return
const multiply = (x: number, y: number): number => x * y;

// Multi-line arrow function
const filterInStock = (stock: number[]): number[] => {
  return stock.filter(qty => qty > 0);
};

// Arrow function in Array operations
const prices: number[] = [10, 25, 50, 100];
const discounted: number[] = prices.map((p: number): number => p * 0.9);
```

---

## 5. Interfaces & Duck Typing

### Key: Definitions
| Concept | One-Liner |
|---------|-----------|
| **Interface** | Syntactic contract specifying required properties and method signatures for an object |
| **Duck Typing** | Structural typing principle: *"If it walks like a duck and quacks like a duck, it is a duck"* — objects are compatible if they possess the required shape/properties regardless of explicit type declaration |
| **Optional (`?`)** | Property that is not mandatory on object |
| **`readonly`** | Property that cannot be modified after initial creation |
| **Extending** | Interface inheriting properties from another interface (`interface B extends A`) |

---

### Syntax & Code Templates

#### 1. Defining & Using Interface
```typescript
interface IGroceryItem {
  id: number;
  name: string;
  price: number;
  category?: string;       // Optional
  readonly barcode: string; // Cannot be reassigned
}

const item1: IGroceryItem = {
  id: 1,
  name: "Whole Wheat Bread",
  price: 45,
  barcode: "8901234567"
};

// item1.barcode = "newVal"; // [Error] ERROR: Cannot assign to 'barcode' because it is a read-only property.
```

#### 2. Duck Typing / Structural Typing in Action
```typescript
interface Point2D {
  x: number;
  y: number;
}

function renderPoint(p: Point2D) {
  console.log(`Point at: (${p.x}, ${p.y})`);
}

// object has extra property 'label', but matches required shape {x, y}
const pointWithLabel = { x: 10, y: 20, label: "Center" };

renderPoint(pointWithLabel); // [Valid] Allowed! (Duck typing: shape has x and y)
```

#### 3. Extending Interfaces
```typescript
interface BaseProduct {
  id: number;
  name: string;
  price: number;
}

interface PerishableProduct extends BaseProduct {
  expiryDate: string;
  temperatureControl: boolean;
}

const yogurt: PerishableProduct = {
  id: 201,
  name: "Greek Yogurt",
  price: 80,
  expiryDate: "2026-10-25",
  temperatureControl: true
};
```

---

## 6. Classes, Constructors & Access Modifiers

### Key: Access Modifiers Table
| Modifier | Scope / Accessibility | Default? |
|----------|-----------------------|:--------:|
| **`public`** | Accessible anywhere (inside class, child subclasses, and outside instances) | **YES** |
| **`private`** | Accessible **only inside the declaring class** (hidden from instances and subclasses) | No |
| **`protected`**| Accessible inside the declaring class and its **child derived subclasses** | No |
| **`readonly`** | Value can only be assigned during declaration or inside constructor | No |

---

### Parameter Properties (Constructor Shortcut)
TypeScript lets you declare and initialize class fields in a single line inside constructor arguments:

```typescript
// Traditional lengthy way:
// class A { public id: number; constructor(id: number) { this.id = id; } }

// (Recommended) TypeScript Parameter Properties Shortcut:
class ProductRecord {
  constructor(
    public id: number,
    public name: string,
    private costPrice: number,
    protected sellingPrice: number,
    public readonly createdDate: Date = new Date()
  ) {}

  // Public getter method to safely access private member
  public calculateProfit(): number {
    return this.sellingPrice - this.costPrice;
  }
}

const record = new ProductRecord(1, "Sugar (1kg)", 38, 45);
console.log(record.name);            // [Valid] Sugar (1kg)
console.log(record.calculateProfit()); // [Valid] 7
// console.log(record.costPrice);     // [Error] ERROR: Property 'costPrice' is private.
```

---

### Inheritance & Implementing Interfaces
```typescript
interface IInventoryItem {
  restock(qty: number): void;
}

// Parent Class
class StockItem implements IInventoryItem {
  protected quantity: number;

  constructor(public id: number, public name: string, quantity: number) {
    this.quantity = quantity;
  }

  public restock(qty: number): void {
    this.quantity += qty;
  }

  public getStock(): number {
    return this.quantity;
  }
}

// Child Derived Class
class PerishableStock extends StockItem {
  constructor(id: number, name: string, quantity: number, public shelfLifeDays: number) {
    super(id, name, quantity); // Warning: MUST call super()
  }

  // Can access protected 'quantity' from parent
  public isLowStock(): boolean {
    return this.quantity < 5;
  }
}

const appleStock = new PerishableStock(10, "Apples", 3, 7);
console.log(appleStock.isLowStock()); // true
appleStock.restock(10);
console.log(appleStock.isLowStock()); // false
```

---

## 7. Namespaces vs Modules

### Key: Definitions & Comparison
| Feature | Namespace (Internal Module) | Module (External Module) |
|---------|-----------------------------|--------------------------|
| **Keyword** | `namespace Name { export ... }` | `export` / `import` |
| **Scope** | Organizes code inside global scope, prevents name collision | Separate independent file scope |
| **Loading** | Loaded via `<script>` tag or `/// <reference path="" />` | Loaded via module loader (`import` / ES6 / CommonJS) |
| **Best For** | Legacy client-side scripts, simple single-bundle files | Modern web applications, Angular, Node.js ((Recommended) Standard) |

### Namespace Syntax
```typescript
namespace GroceryValidation {
  export function isValidPrice(price: number): boolean {
    return price > 0;
  }

  export function isValidQty(qty: number): boolean {
    return Number.isInteger(qty) && qty >= 0;
  }
}

// Usage:
console.log(GroceryValidation.isValidPrice(50)); // true
```

---

## 8. Generics & Generic Constraints

### Key: Definitions
| Concept | One-Liner |
|---------|-----------|
| **Generics** | Feature allowing writing flexible, reusable code that works over multiple data types while preserving type safety (`<T>`) |
| **Type Variable (`<T>`)** | Placeholder capturing the actual type supplied during invocation |
| **Generic Function**| Function capable of receiving arguments of any type and returning that matching type |
| **Generic Interface**| Interface parameterized by a type: `interface Box<T> { content: T; }` |
| **Generic Constraint**| Restricts allowed types for `<T>` using `extends` keyword (`<T extends Constraint>`) |

---

### Syntax & Code Templates

#### 1. Generic Function
```typescript
// T acts as a type placeholder
function getFirstElement<T>(items: T[]): T | undefined {
  return items.length > 0 ? items[0] : undefined;
}

const num = getFirstElement<number>([10, 20, 30]);       // type is number (10)
const str = getFirstElement<string>(["Apple", "Banana"]); // type is string ("Apple")
```

#### 2. Generic Class
```typescript
class Queue<T> {
  private data: T[] = [];

  enqueue(item: T): void {
    this.data.push(item);
  }

  dequeue(): T | undefined {
    return this.data.shift();
  }

  getAll(): T[] {
    return [...this.data];
  }
}

const orderQueue = new Queue<string>();
orderQueue.enqueue("Order #101");
orderQueue.enqueue("Order #102");
console.log(orderQueue.dequeue()); // Order #101
```

#### 3. Generic Constraints (`extends`)
```typescript
interface HasId {
  id: number;
}

// T is constrained: must have at least an 'id' property of type number
function printRecordId<T extends HasId>(record: T): void {
  console.log(`Processing ID: ${record.id}`);
}

printRecordId({ id: 101, name: "Flour" }); // [Valid] Valid (has id)
// printRecordId({ name: "Flour" });       // [Error] ERROR: Property 'id' is missing
```

---

## Quick Exam Revision Table
| Concept | Syntax / Example | Golden Rule |
|---------|------------------|-------------|
| Types | `let x: number = 5;` | Compile-time check prevents wrong assignment |
| Union Type | `let id: number \| string;` | Variable can hold either type |
| Optional Param | `function f(x?: number)` | Optional must come after required params |
| Rest Param | `function f(...nums: number[])` | Rest gathers parameters into an array |
| Arrow Function | `(x: number): number => x * 2` | Preserves lexical `this` |
| Duck Typing | Shape matching, not class name | Checks if required properties exist on object |
| Access Modifiers | `public`, `private`, `protected` | Default is always `public` |
| Param Properties | `constructor(public name: string)` | Shorthand declaring + assigning property |
| Generic Function | `function wrap<T>(val: T): T` | `<T>` captures and enforces type safety |
| Generic Constraint | `<T extends HasLength>` | Limits `<T>` to types fulfilling the interface |
