import {
  IGroceryItem,
  logItemSummary,
  Product,
  PerishableProduct,
  InventoryRepository
} from "./models";

// 1. Using Interface
const milkItem: IGroceryItem = {
  id: 101,
  name: "Pasteurized Full Cream Milk",
  category: "Dairy",
  price: 65.00,
  barcode: "8901234567890",
  expiryDate: "2026-10-15"
};

// 2. Demonstrating Duck Typing
const duckObject = { name: "Handmade Cookies", price: 120.00, extraBakerNote: "Special" };
console.log(logItemSummary(duckObject));

// 3. Demonstrating Class & Inheritance
const organicHoney = new PerishableProduct(102, "Organic Honey (500g)", "Sweeteners", 280, 200, 365);
console.log(`Product: ${organicHoney.name}`);
console.log(`Normal Price: ₹${organicHoney.getPrice()}`);
console.log(`Profit Margin: ₹${organicHoney.calculateProfitMargin()}`);
console.log(`Discounted (10% off): ₹${organicHoney.getDiscountedPrice(10)}`);

// 4. Demonstrating Generic Repository (<T extends HasId>)
const repo = new InventoryRepository<PerishableProduct>();
repo.addItem(organicHoney);

const found = repo.findById(102);
console.log(`Found in generic repo: ${found?.name} (Total items: ${repo.count()})`);
