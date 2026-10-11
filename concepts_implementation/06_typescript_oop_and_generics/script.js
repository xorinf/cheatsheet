/**
 * TypeScript OOP Runtime Simulator
 * Powers the interactive browser playground for models.ts logic.
 */

const tsCodeViewer = document.getElementById("tsCodeViewer");
const terminalOutput = document.getElementById("terminalOutput");

function logToTerminal(text, type = "normal") {
  const line = document.createElement("div");
  line.className = `console-line ${type}`;
  line.textContent = text;
  terminalOutput.appendChild(line);
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

function clearConsole() {
  terminalOutput.innerHTML = "";
  logToTerminal("[System] Console cleared.", "system");
}

// 1. Interface Demo
function runInterfaceDemo() {
  tsCodeViewer.textContent = `// 1. TypeScript Interface Definition
interface IGroceryItem {
  id: number;
  name: string;
  category: string;
  price: number;
  expiryDate?: string;       // Optional
  readonly barcode: string;  // Cannot be altered after creation
}

const milk: IGroceryItem = {
  id: 101,
  name: "Whole Milk (1L)",
  category: "Dairy",
  price: 60.00,
  barcode: "8901234567"
};
// milk.barcode = "new"; // [Compile Error] Compile error!`;

  logToTerminal("--- [DEMO 1: INTERFACE & READONLY] ---", "header");
  logToTerminal("Creating object conforming to IGroceryItem interface...");
  logToTerminal("Object created: ID: 101, Name: 'Whole Milk (1L)', Price: ₹60.00", "success");
  logToTerminal("Property 'barcode': '8901234567' [readonly enforced by compiler]");
  logToTerminal("Optional property 'expiryDate' is omitted without error.");
}

// 2. Duck Typing Demo
function runDuckTypingDemo() {
  tsCodeViewer.textContent = `// 2. Duck Typing (Structural Typing)
// "If it walks like a duck and quacks like a duck, it is a duck"
function logItemSummary(item: { name: string; price: number }): string {
  return item.name + " costs ₹" + item.price;
}

// Object has extra field 'bakerNote', but matches required shape {name, price}
const cookie = { name: "Choco Cookie", price: 50, bakerNote: "Fresh" };
logItemSummary(cookie); // [Valid] Valid! Structural compatibility.`;

  logToTerminal("--- [DEMO 2: DUCK TYPING] ---", "header");
  logToTerminal("Function expects shape: { name: string, price: number }");
  logToTerminal("Passing object with extra property 'bakerNote'...");
  logToTerminal("Result: 'Choco Cookie costs ₹50' (Accepted due to Structural Typing!)", "success");
}

// 3. Class & Inheritance Demo
function runClassInheritanceDemo() {
  tsCodeViewer.textContent = `// 3. Class with Parameter Properties & Inheritance
class Product {
  constructor(
    public id: number,
    public name: string,
    protected basePrice: number,
    private wholesaleCost: number
  ) {}
  public getProfit(): number { return this.basePrice - this.wholesaleCost; }
}

class PerishableProduct extends Product {
  constructor(id: number, name: string, price: number, cost: number, public days: number) {
    super(id, name, price, cost);
  }
  public getDiscountedPrice(rate: number): number {
    return this.basePrice - (this.basePrice * rate) / 100;
  }
}`;

  logToTerminal("--- [DEMO 3: CLASS, ACCESS MODIFIERS & INHERITANCE] ---", "header");
  logToTerminal("Instantiating PerishableProduct('Honey', Price: 280, Cost: 200, ShelfLife: 365)...");
  logToTerminal("Accessing public .name: 'Honey'");
  logToTerminal("Calling .getProfit(): ₹80 (Computed using private wholesaleCost)", "success");
  logToTerminal("Calling .getDiscountedPrice(10%): ₹252 (Computed using protected basePrice)", "success");
  logToTerminal("Trying to access private 'wholesaleCost' directly from outside -> [Blocked by TypeScript Compiler]");
}

// 4. Generics Demo
function runGenericsDemo() {
  tsCodeViewer.textContent = `// 4. Generics (<T>) and Generic Constraints (<T extends HasId>)
interface HasId { id: number; }

class InventoryRepository<T extends HasId> {
  private items: T[] = [];
  public addItem(item: T): void { this.items.push(item); }
  public findById(id: number): T | undefined {
    return this.items.find(i => i.id === id);
  }
  public count(): number { return this.items.length; }
}

const repo = new InventoryRepository<PerishableProduct>();
repo.addItem(honeyItem);`;

  logToTerminal("--- [DEMO 4: GENERICS & GENERIC CONSTRAINTS] ---", "header");
  logToTerminal("Created instance: InventoryRepository<PerishableProduct>()");
  logToTerminal("Type parameter T is strictly constrained to types having 'id: number'");
  logToTerminal("Adding item with ID 102 to repository...");
  logToTerminal("Calling repo.findById(102) -> Found: 'Organic Honey (500g)'", "success");
  logToTerminal("Calling repo.count() -> 1 item stored in typed generic memory.", "success");
}
