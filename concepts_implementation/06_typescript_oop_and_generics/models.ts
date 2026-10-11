/**
 * TypeScript OOP & Generics Reference Model
 * Demonstrates:
 * 1. Interface definition with optional (?) and readonly properties
 * 2. Duck Typing (Structural Typing)
 * 3. Class with constructor parameter properties and access modifiers (public, private, protected)
 * 4. Inheritance with extends and super()
 * 5. Generics (<T>) and Generic Constraints (<T extends HasId>)
 */

// 1. INTERFACE DEFINITION
export interface HasId {
  id: number;
}

export interface IGroceryItem extends HasId {
  name: string;
  category: string;
  price: number;
  expiryDate?: string;       // Optional property
  readonly barcode: string;  // Read-only: cannot be modified after assignment
}

// 2. DUCK TYPING (Structural Typing)
export function logItemSummary(item: { name: string; price: number }): string {
  // Any object that possesses at least 'name' and 'price' is accepted!
  return `Item: ${item.name} | Price: ₹${item.price.toFixed(2)}`;
}

// 3. BASE CLASS WITH ACCESS MODIFIERS & PARAMETER PROPERTIES
export class Product implements HasId {
  // TypeScript shortcut: declaring 'public', 'private', 'protected' in constructor
  // automatically creates and assigns the class fields in 1 line!
  constructor(
    public id: number,
    public name: string,
    public category: string,
    protected basePrice: number,
    private wholesaleCost: number
  ) {}

  // Public method accessible by anyone
  public getPrice(): number {
    return this.basePrice;
  }

  // Method accessing private member
  public calculateProfitMargin(): number {
    return this.basePrice - this.wholesaleCost;
  }
}

// 4. CHILD CLASS INHERITING BASE CLASS (Inheritance)
export class PerishableProduct extends Product {
  constructor(
    id: number,
    name: string,
    category: string,
    basePrice: number,
    wholesaleCost: number,
    public shelfLifeDays: number
  ) {
    super(id, name, category, basePrice, wholesaleCost); // MUST invoke parent constructor
  }

  // Can access protected 'basePrice' from parent class
  public getDiscountedPrice(discountRate: number): number {
    return this.basePrice - (this.basePrice * discountRate) / 100;
  }
}

// 5. GENERIC REPOSITORY CLASS WITH CONSTRAINT (<T extends HasId>)
export class InventoryRepository<T extends HasId> {
  private items: T[] = [];

  public addItem(item: T): void {
    this.items.push(item);
  }

  public findById(id: number): T | undefined {
    return this.items.find((item) => item.id === id);
  }

  public getAll(): T[] {
    return [...this.items];
  }

  public count(): number {
    return this.items.length;
  }
}
