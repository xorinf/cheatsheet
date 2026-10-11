# 06: LAB PROGRAMS & SCENARIO BLUEPRINT CHEATSHEET

> **Exam Target**: ACE the external lab exam and lab record! Contains plug-and-play, error-free code templates for all lab weeks (1 to 14) and a **Universal Scenario Blueprint** adaptable to ANY allocated project theme (e.g., *Grocery Availability, Hospital Directory, Student Result, Library Portal*).

---

## Part 1: Week-by-Week Lab Program Templates

---

### WEEK 1: Basic HTML Structure, Headings, Paragraphs, Links & Images
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Portal Home - Week 1</title>
</head>
<body>
  <h1>Welcome to Grocery Portal</h1>
  <h2>Fresh & Organic Daily Essentials</h2>
  <hr>

  <p>Order fresh vegetables, fruits, dairy, and household items with same-day doorstep delivery.</p>

  <h3>Quick Navigation</h3>
  <ul>
    <li><a href="#about">About Our Store</a></li>
    <li><a href="https://google.com" target="_blank">Search External Info</a></li>
  </ul>

  <h3>Featured Category</h3>
  <img src="grocery.jpg" alt="Fresh Groceries" width="300" height="200">

  <h3 id="about">About Us</h3>
  <p>We connect local farmers directly to households ensuring freshness and best prices.</p>
</body>
</html>
```

---

### WEEK 2: HTML Forms & HTML5 Built-In Validation
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Registration Form - Week 2</title>
</head>
<body>
  <h2 align="center">CUSTOMER / USER REGISTRATION</h2>
  <hr>

  <form action="#" method="post">
    <!-- Text input with required and pattern -->
    <label for="uname">Full Name:</label><br>
    <input type="text" id="uname" name="uname" placeholder="Enter full name" required minlength="3"><br><br>

    <!-- Email -->
    <label for="email">Email Address:</label><br>
    <input type="email" id="email" name="email" placeholder="user@example.com" required><br><br>

    <!-- Password -->
    <label for="pwd">Password:</label><br>
    <input type="password" id="pwd" name="pwd" required minlength="6"><br><br>

    <!-- Number with min/max -->
    <label for="age">Age:</label><br>
    <input type="number" id="age" name="age" min="18" max="99" required><br><br>

    <!-- Radio Buttons -->
    <label>Gender:</label><br>
    <input type="radio" id="m" name="gender" value="Male" required><label for="m">Male</label>
    <input type="radio" id="f" name="gender" value="Female"><label for="f">Female</label><br><br>

    <!-- Dropdown -->
    <label for="city">Delivery City:</label><br>
    <select id="city" name="city" required>
      <option value="">--Select City--</option>
      <option value="Hyderabad">Hyderabad</option>
      <option value="Bangalore">Bangalore</option>
      <option value="Chennai">Chennai</option>
    </select><br><br>

    <!-- Checkbox -->
    <input type="checkbox" id="terms" name="terms" required>
    <label for="terms">I accept the terms and conditions</label><br><br>

    <input type="submit" value="Register Now">
    <input type="reset" value="Clear Form">
  </form>
</body>
</html>
```

---

### WEEK 3: Tables with Colspan & Rowspan, Description Lists
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Inventory Table - Week 3</title>
</head>
<body>
  <h2>Item Stock & Price List (Colspan & Rowspan)</h2>

  <table border="1" cellpadding="8" cellspacing="0">
    <caption style="font-weight:bold; margin-bottom:6px;">Current Grocery Inventory</caption>
    <thead>
      <tr bgcolor="#e0e0e0">
        <th>Category</th>
        <th>Item Code</th>
        <th>Item Name</th>
        <th colspan="2">Pricing (INR)</th>
      </tr>
      <tr bgcolor="#f5f5f5">
        <th colspan="3"></th>
        <th>Standard</th>
        <th>Discounted</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan="2">Dairy</td>
        <td>D101</td>
        <td>Full Cream Milk (1L)</td>
        <td>₹60</td>
        <td>₹55</td>
      </tr>
      <tr>
        <td>D102</td>
        <td>Paneer (200g)</td>
        <td>₹90</td>
        <td>₹80</td>
      </tr>
      <tr>
        <td>Grains</td>
        <td>G201</td>
        <td>Basmati Rice (5kg)</td>
        <td>₹350</td>
        <td>₹320</td>
      </tr>
    </tbody>
  </table>

  <h3>Description List</h3>
  <dl>
    <dt><b>SKU</b></dt>
    <dd>Stock Keeping Unit — distinct identifier for inventory management.</dd>
    <dt><b>Perishable</b></dt>
    <dd>Items that decay rapidly if not refrigerated.</dd>
  </dl>
</body>
</html>
```

---

### WEEK 4: HTML5 Semantic Elements, Multimedia & Containers
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Semantic Portal - Week 4</title>
</head>
<body>
  <!-- Semantic Header -->
  <header>
    <h1>FreshMart Daily Groceries</h1>
    <nav>
      <a href="#home">Home</a> | <a href="#items">Items</a> | <a href="#contact">Contact</a>
    </nav>
  </header>

  <!-- Main Content Area -->
  <main>
    <section id="items">
      <h2>Daily Fresh Picks</h2>
      <article>
        <h3>Organic Alphonso Mangoes</h3>
        <p>Direct from Ratnagiri farms. <span>₹500 / dozen</span>.</p>
      </article>
      <article>
        <h3>Farm Fresh Spinach</h3>
        <p>Harvested daily at 5 AM. <span>₹25 / bunch</span>.</p>
      </article>
    </section>

    <!-- Aside Sidebar -->
    <aside>
      <h3>Today's Special Offer</h3>
      <p>Use code <b>SAVE20</b> for 20% off on all fruits!</p>
    </aside>

    <!-- Multimedia -->
    <section>
      <h3>Store Introduction Video & Audio</h3>
      <video width="320" height="240" controls>
        <source src="store_tour.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video><br><br>

      <audio controls>
        <source src="announcement.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>
    </section>
  </main>

  <!-- Semantic Footer -->
  <footer>
    <p>&copy; 2026 FreshMart Portal. All Rights Reserved.</p>
  </footer>
</body>
</html>
```

---

### WEEKS 5 & 6: CSS Styling, Box Model & Responsive Flexbox
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS Styling & Box Model - Week 5 & 6</title>
  <style>
    /* CSS Reset */
    * {
      box-sizing: border-box; /* Crucial Box Model property */
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
    }

    body {
      background-color: #f4f6f8;
      padding: 20px;
    }

    header {
      background: linear-gradient(135deg, #2e7d32, #4caf50);
      color: white;
      text-align: center;
      padding: 24px;
      border-radius: 8px;
      margin-bottom: 20px;
    }

    /* Flexbox Container */
    .container {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: center;
    }

    /* CSS Box Model in Card: Content + Padding + Border + Margin */
    .card {
      background-color: #ffffff;
      width: 260px;
      padding: 16px;                 /* Padding */
      border: 1px solid #ddd;        /* Border */
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.08);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .card:hover {
      transform: translateY(-4px);   /* Hover effect */
      box-shadow: 0 8px 16px rgba(0,0,0,0.15);
    }

    .card h3 {
      color: #2e7d32;
      margin-bottom: 8px;
    }

    .badge {
      display: inline-block;
      padding: 4px 8px;
      background-color: #e8f5e9;
      color: #2e7d32;
      border-radius: 4px;
      font-size: 12px;
      font-weight: bold;
    }

    .btn {
      display: block;
      width: 100%;
      margin-top: 12px;
      padding: 10px;
      background-color: #2e7d32;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-weight: bold;
    }
    .btn:hover {
      background-color: #1b5e20;
    }
  </style>
</head>
<body>
  <header>
    <h1>Fresh Grocery Market</h1>
    <p>Responsive Card Layout with CSS Box Model & Flexbox</p>
  </header>

  <div class="container">
    <div class="card">
      <span class="badge">Dairy</span>
      <h3>Cow Milk (1L)</h3>
      <p>Pure pasteurized milk.</p>
      <b>₹60.00</b>
      <button class="btn">Add to Cart</button>
    </div>

    <div class="card">
      <span class="badge">Bakery</span>
      <h3>Multigrain Bread</h3>
      <p>100% whole grain loaf.</p>
      <b>₹45.00</b>
      <button class="btn">Add to Cart</button>
    </div>

    <div class="card">
      <span class="badge">Produce</span>
      <h3>Farm Apples (1kg)</h3>
      <p>Crisp Kashmiri apples.</p>
      <b>₹140.00</b>
      <button class="btn">Add to Cart</button>
    </div>
  </div>
</body>
</html>
```

---

### WEEKS 7 & 8: JavaScript Fundamentals, DOM Manipulation & Calculations
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JS DOM & Calculations - Week 7 & 8</title>
</head>
<body>
  <h2>Grocery Billing & Price Calculator</h2>

  <label>Item Name:</label>
  <input type="text" id="itemName" value="Basmati Rice"><br><br>

  <label>Unit Price (₹):</label>
  <input type="number" id="unitPrice" value="80"><br><br>

  <label>Quantity:</label>
  <input type="number" id="quantity" value="3"><br><br>

  <label>Customer Type:</label>
  <select id="custType">
    <option value="regular">Regular (No Discount)</option>
    <option value="member">Club Member (10% Off)</option>
    <option value="vip">VIP (20% Off)</option>
  </select><br><br>

  <button onclick="calculateBill()">Calculate Total</button>

  <hr>
  <div id="billSummary" style="font-size:18px; font-weight:bold;"></div>

  <script>
    function calculateBill() {
      // 1. Read input values from DOM
      const name = document.getElementById("itemName").value;
      const price = parseFloat(document.getElementById("unitPrice").value);
      const qty = parseInt(document.getElementById("quantity").value);
      const memberType = document.getElementById("custType").value;

      // 2. Control statement / conditional logic
      if (isNaN(price) || isNaN(qty) || price <= 0 || qty <= 0) {
        alert("Please enter valid positive numbers!");
        return;
      }

      const subtotal = price * qty;
      let discountRate = 0;

      // Switch statement
      switch (memberType) {
        case "member":
          discountRate = 0.10;
          break;
        case "vip":
          discountRate = 0.20;
          break;
        default:
          discountRate = 0.00;
      }

      const discountAmount = subtotal * discountRate;
      const finalTotal = subtotal - discountAmount;

      // 3. Update DOM dynamically
      const resultDiv = document.getElementById("billSummary");
      resultDiv.innerHTML = `
        <p>Item: ${name}</p>
        <p>Subtotal: ₹${subtotal.toFixed(2)}</p>
        <p style="color:green;">Discount (${discountRate * 100}%): -₹${discountAmount.toFixed(2)}</p>
        <p style="color:blue;">Final Amount Payable: ₹${finalTotal.toFixed(2)}</p>
      `;
    }
  </script>
</body>
</html>
```

---

### WEEK 9: JS Form Validation (Regex) & LocalStorage
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Validation & LocalStorage - Week 9</title>
</head>
<body>
  <h2>Add New Grocery Item (Validation & LocalStorage)</h2>

  <form id="itemForm" onsubmit="saveItem(event)">
    <label>Item Name:</label><br>
    <input type="text" id="pName"><br>
    <small id="nameErr" style="color:red;"></small><br>

    <label>Price (₹):</label><br>
    <input type="text" id="pPrice"><br>
    <small id="priceErr" style="color:red;"></small><br>

    <label>Contact Phone (10 digits):</label><br>
    <input type="text" id="pPhone"><br>
    <small id="phoneErr" style="color:red;"></small><br>

    <button type="submit">Save to LocalStorage</button>
  </form>

  <h3>Saved Items in Browser Storage</h3>
  <ul id="savedList"></ul>
  <button onclick="clearStorage()">Clear Storage</button>

  <script>
    // Load existing items on page load
    window.onload = displayItems;

    function saveItem(e) {
      e.preventDefault(); // Stop page reload

      const name = document.getElementById("pName").value.trim();
      const price = document.getElementById("pPrice").value.trim();
      const phone = document.getElementById("pPhone").value.trim();

      // Reset error messages
      document.getElementById("nameErr").innerText = "";
      document.getElementById("priceErr").innerText = "";
      document.getElementById("phoneErr").innerText = "";

      let valid = true;

      // Validation 1: Name required & length
      if (name.length < 3) {
        document.getElementById("nameErr").innerText = "Item name must be ≥ 3 chars.";
        valid = false;
      }

      // Validation 2: Price must be positive number
      if (price === "" || isNaN(price) || parseFloat(price) <= 0) {
        document.getElementById("priceErr").innerText = "Enter a valid price > 0.";
        valid = false;
      }

      // Validation 3: Phone regex (exactly 10 digits)
      const phonePattern = /^[6-9]\d{9}$/;
      if (!phonePattern.test(phone)) {
        document.getElementById("phoneErr").innerText = "Enter valid 10-digit Indian phone number.";
        valid = false;
      }

      if (valid) {
        // Read existing array from localStorage
        const stored = JSON.parse(localStorage.getItem("grocery_db") || "[]");
        stored.push({ name, price: parseFloat(price), phone, timestamp: new Date().toLocaleTimeString() });

        // Save back to localStorage
        localStorage.setItem("grocery_db", JSON.stringify(stored));
        alert("Item saved successfully!");

        document.getElementById("itemForm").reset();
        displayItems();
      }
    }

    function displayItems() {
      const items = JSON.parse(localStorage.getItem("grocery_db") || "[]");
      const ul = document.getElementById("savedList");
      ul.innerHTML = "";

      if (items.length === 0) {
        ul.innerHTML = "<li>No items saved yet.</li>";
        return;
      }

      items.forEach((item, index) => {
        ul.innerHTML += `<li>${index + 1}. <b>${item.name}</b> — ₹${item.price} (Phone: ${item.phone})</li>`;
      });
    }

    function clearStorage() {
      localStorage.removeItem("grocery_db");
      displayItems();
    }
  </script>
</body>
</html>
```

---

### WEEK 10: XML & AJAX (XMLHttpRequest) Dynamic Data Display

#### 1. Data File: `data.xml`
```xml
<?xml version="1.0" encoding="UTF-8"?>
<inventory>
  <item>
    <id>101</id>
    <name>Organic Wheat Flour (5kg)</name>
    <category>Grains</category>
    <price>260</price>
    <stock>35</stock>
  </item>
  <item>
    <id>102</id>
    <name>Pure Ghee (500ml)</name>
    <category>Dairy</category>
    <price>320</price>
    <stock>18</stock>
  </item>
  <item>
    <id>103</id>
    <name>Green Tea Bags (25pcs)</name>
    <category>Beverages</category>
    <price>150</price>
    <stock>50</stock>
  </item>
</inventory>
```

#### 2. HTML + AJAX Code: `ajax_demo.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>AJAX XML Reader - Week 10</title>
</head>
<body>
  <h2>Dynamic Inventory Fetch via AJAX (XMLHttpRequest)</h2>
  <button onclick="fetchXMLData()">Load XML Data Asynchronously</button>
  <br><br>

  <div id="tableContainer"></div>

  <script>
    function fetchXMLData() {
      // 1. Create XMLHttpRequest Object
      const xhr = new XMLHttpRequest();

      // 2. Initialize GET request for data.xml
      xhr.open("GET", "data.xml", true);

      // 3. Define event callback
      xhr.onreadystatechange = function () {
        // readyState 4 = DONE, status 200 = HTTP OK
        if (xhr.readyState === 4 && xhr.status === 200) {
          const xmlDoc = xhr.responseXML;
          const items = xmlDoc.getElementsByTagName("item");

          let html = "<table border='1' cellpadding='8' cellspacing='0'>";
          html += "<tr bgcolor='#dcedc8'><th>ID</th><th>Name</th><th>Category</th><th>Price (₹)</th><th>Stock</th></tr>";

          for (let i = 0; i < items.length; i++) {
            const id = items[i].getElementsByTagName("id")[0].textContent;
            const name = items[i].getElementsByTagName("name")[0].textContent;
            const category = items[i].getElementsByTagName("category")[0].textContent;
            const price = items[i].getElementsByTagName("price")[0].textContent;
            const stock = items[i].getElementsByTagName("stock")[0].textContent;

            html += `<tr>
              <td>${id}</td>
              <td>${name}</td>
              <td>${category}</td>
              <td>₹${price}</td>
              <td>${stock}</td>
            </tr>`;
          }

          html += "</table>";
          // 4. Update DOM without reloading page
          document.getElementById("tableContainer").innerHTML = html;
        }
      };

      // 4. Send request
      xhr.send();
    }
  </script>
</body>
</html>
```

---

### WEEK 11: Node.js & Express Setup
```bash
# Terminal Steps:
mkdir MyProject && cd MyProject
npm init -y
npm install express
```

```javascript
// server.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static HTML/CSS/JS files from 'public' folder
app.use(express.static('public'));

// JSON API Route
app.get('/api/groceries', (req, res) => {
  res.json([
    { id: 1, name: "Sunflower Oil (1L)", price: 140 },
    { id: 2, name: "Almonds (250g)", price: 210 }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
```

---

### WEEKS 12–14: TypeScript Model & Angular Component Implementation

#### 1. TypeScript Interface (`item.model.ts`)
```typescript
export interface Item {
  id: number;
  name: string;
  category: string;
  price: number;
  inStock: boolean;
}
```

#### 2. Angular Service (`item.service.ts`)
```typescript
import { Injectable } from '@angular/core';
import { Item } from './item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private items: Item[] = [
    { id: 1, name: 'Brown Bread', category: 'Bakery', price: 40, inStock: true },
    { id: 2, name: 'Fresh Milk', category: 'Dairy', price: 30, inStock: true },
    { id: 3, name: 'Apple Juice', category: 'Beverage', price: 90, inStock: false }
  ];

  getItems(): Item[] {
    return this.items;
  }

  addItem(newItem: Item): void {
    this.items.push(newItem);
  }
}
```

#### 3. Angular Component Class (`app.component.ts`)
```typescript
import { Component, OnInit } from '@angular/core';
import { ItemService } from './item.service';
import { Item } from './item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  items: Item[] = [];
  searchCategory: string = '';

  // New item form model for Two-Way Binding
  newItem: Item = { id: 0, name: '', category: '', price: 0, inStock: true };

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.items = this.itemService.getItems();
  }

  onSaveItem(): void {
    if (this.newItem.name && this.newItem.price > 0) {
      this.newItem.id = this.items.length + 1;
      this.itemService.addItem({ ...this.newItem });
      // Reset form
      this.newItem = { id: 0, name: '', category: '', price: 0, inStock: true };
    }
  }
}
```

#### 4. Angular Component Template (`app.component.html`)
```html
<div style="padding: 20px; font-family: Arial;">
  <h1>Grocery Availability Portal (Angular SPA)</h1>

  <!-- Two-Way Binding: Add Item Form -->
  <h3>Add New Item</h3>
  <input type="text" placeholder="Name" [(ngModel)]="newItem.name">
  <input type="text" placeholder="Category" [(ngModel)]="newItem.category">
  <input type="number" placeholder="Price" [(ngModel)]="newItem.price">
  <button (click)="onSaveItem()">Add Item</button>

  <hr>

  <!-- Structural Directive: *ngIf and *ngFor -->
  <h3>Available Items List</h3>
  <table border="1" cellpadding="8" cellspacing="0" *ngIf="items.length > 0; else noData">
    <tr bgcolor="#eee">
      <th>ID</th>
      <th>Name</th>
      <th>Category</th>
      <th>Price</th>
      <th>Status</th>
    </tr>
    <tr *ngFor="let item of items">
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.category }}</td>
      <td>₹{{ item.price }}</td>
      <td [style.color]="item.inStock ? 'green' : 'red'">
        {{ item.inStock ? 'In Stock' : 'Out of Stock' }}
      </td>
    </tr>
  </table>

  <ng-template #noData>
    <p>No grocery items available.</p>
  </ng-template>
</div>
```

---

## Part 2: The Universal Exam Scenario Blueprint

In the external practical exam, you are assigned a specific website scenario (e.g., **Grocery Availability**, **Hospital Directory**, **Student Result**, **Library Portal**, **Electricity Calculator**, etc.).

Use the 4 Golden Steps below to implement ANY scenario instantaneously:

### Step 1: Identify the Entity Properties
Every scenario has 3–5 core data attributes:
- **Grocery**: `name`, `category`, `price`, `stockQuantity`
- **Hospital**: `doctorName`, `department`, `roomNo`, `fee`
- **Student Result**: `hallTicket`, `studentName`, `subject`, `marks`, `grade`
- **Library**: `bookTitle`, `author`, `isbn`, `availability`
- **Electricity**: `consumerId`, `consumerName`, `unitsConsumed`, `billAmount`

---

### Step 2: Instant HTML + CSS Card / Table Template
Simply replace labels to match your given scenario:
```html
<div class="card">
  <h3>{{ entityName }}</h3>
  <p><b>Attribute 1:</b> {{ val1 }}</p>
  <p><b>Attribute 2:</b> {{ val2 }}</p>
  <span class="status-badge">{{ status }}</span>
</div>
```

---

### Step 3: Instant JavaScript Formula / Calculation
For scenarios with calculation:
```javascript
// Grocery / Restaurant Bill:
const total = (price * quantity) * (1 - discountRate);

// Electricity Calculator:
let rate = units <= 100 ? 1.5 : units <= 200 ? 3.0 : 5.0;
const bill = units * rate;

// Student Result:
let grade = marks >= 75 ? "Distinction" : marks >= 60 ? "First Class" : "Pass";
```

---

### Step 4: Instant TypeScript & Angular Template
```typescript
// 1. Interface
export interface RecordModel {
  id: number;
  title: string;
  category: string;
  val: number;
}

// 2. Component Array
records: RecordModel[] = [
  { id: 1, title: 'Sample A', category: 'Cat 1', val: 100 },
  { id: 2, title: 'Sample B', category: 'Cat 2', val: 200 }
];
```
