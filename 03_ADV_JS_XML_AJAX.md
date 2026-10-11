# UNIT III — ADVANCED JAVASCRIPT, XML & AJAX CHEATSHEET

---

# PART A: ADVANCED JAVASCRIPT

---

## 1. Classes, Objects & Inheritance (ES6)

### Key: Definitions
| Term | One-Liner |
|------|-----------|
| **Class** | Blueprint / template for creating objects with shared properties and methods (`class Name {}`) |
| **Object** | Concrete instance created from a class containing actual values (`const obj = new Class()`) |
| **`new` Keyword** | Instantiates a class, allocates memory, and executes constructor automatically |
| **`constructor`** | Special method called once during object creation to initialize properties |
| **Property** | Variable defined on an instance storing data (`this.name = name;`) |
| **Method** | Function defined inside a class describing behavior/action |
| **`this` Keyword** | Refers to the current object instance calling the method |
| **Inheritance** | Mechanism where child class acquires properties and methods of parent class (`extends`) |
| **`super()`** | Calls parent class constructor; **must** be called before `this` in child constructor |
| **Method Overriding**| Child class providing its own implementation of a parent class method |

---

### Syntax & Code Templates

#### 1. Defining Class, Constructor & Methods
```javascript
class Product {
  // Constructor initializes properties
  constructor(name, price, stock) {
    this.name = name;
    this.price = price;
    this.stock = stock;
  }

  // Instance method
  getDetails() {
    return `${this.name} - ₹${this.price} (${this.stock} in stock)`;
  }

  // Method with parameter
  applyDiscount(percent) {
    this.price -= (this.price * percent) / 100;
    return this.price;
  }
}

// Creating object instance
const p1 = new Product("Rice (5kg)", 350, 20);
console.log(p1.getDetails());     // Rice (5kg) - ₹350 (20 in stock)
p1.applyDiscount(10);
console.log(p1.price);            // 315
```

---

#### 2. Inheritance (`extends` & `super()`)
```javascript
// Parent Class
class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getInfo() {
    return `${this.name} costs ₹${this.price}`;
  }
}

// Child Class inherits from Item
class PerishableItem extends Item {
  constructor(name, price, expiryDays) {
    super(name, price);         // Warning: MUST call super() first!
    this.expiryDays = expiryDays;
  }

  // Method Overriding
  getInfo() {
    return `${super.getInfo()} (Expires in ${this.expiryDays} days)`;
  }
}

const milk = new PerishableItem("Milk", 30, 2);
console.log(milk.getInfo()); // Milk costs ₹30 (Expires in 2 days)
```

---

## 2. JavaScript ES6 Modules

### Key: Definitions
| Term | One-Liner |
|------|-----------|
| **Module** | Independent JS file that exports functions/classes/variables for reuse in other files |
| **`export`** | Keyword to expose variables, functions, or classes from a file |
| **`import`** | Keyword to bring exported code from another module into current file |
| **Named Export** | Export multiple items by explicit name; import using `{ name1, name2 }` |
| **Default Export** | Export single primary item per module (`export default`); import without `{}` |
| **Module in HTML** | `<script type="module" src="app.js"></script>` required to enable ES6 module syntax |

---

### Syntax: Named vs Default Export

#### `mathUtils.js` (Exporting Module)
```javascript
// 1. Named Exports
export const PI = 3.14159;

export function calculateTotal(items) {
  return items.reduce((sum, item) => sum + item.price, 0);
}

// 2. Default Export (one per file)
export default class Cart {
  constructor() {
    this.items = [];
  }
  addItem(item) {
    this.items.push(item);
  }
}
```

#### `app.js` (Importing Module)
```javascript
// Import default without braces, named exports with braces
import Cart, { PI, calculateTotal } from "./mathUtils.js";

const myCart = new Cart();
myCart.addItem({ name: "Apple", price: 50 });
```

#### `index.html` (Usage in Browser)
```html
<!-- type="module" is mandatory! -->
<script type="module" src="app.js"></script>
```

---

## 3. Asynchronous JavaScript, Callbacks & Promises

### Key: Definitions
| Concept | One-Liner |
|---------|-----------|
| **Synchronous** | Code runs sequentially line-by-line; blocks subsequent code until current task finishes |
| **Asynchronous**| Non-blocking execution; time-taking tasks run in background while code continues |
| **Callback** | Function passed as argument to another function, invoked after task completes |
| **Callback Hell** | Deeply nested callbacks forming unreadable "Pyramid of Doom" |
| **Promise** | Object representing eventual completion (fulfilled) or failure (rejected) of async operation |
| **Promise States** | 1. **Pending** (initial), 2. **Fulfilled** (successful), 3. **Rejected** (failed) |
| **`resolve(value)`** | Marks promise fulfilled and passes result data to `.then()` |
| **`reject(error)`** | Marks promise failed and passes error reason to `.catch()` |
| **`.then()`** | Attaches callback handler executed when promise resolves successfully |
| **`.catch()`** | Attaches callback handler executed when promise encounters error |
| **`.finally()`** | Callback handler executed regardless of success or failure (cleanup code) |

---

### Syntax & Code Templates

#### 1. Callback Function Example
```javascript
function fetchStock(productName, callback) {
  setTimeout(() => {
    const stock = 15;
    callback(productName, stock); // Callback triggered after 1 sec
  }, 1000);
}

fetchStock("Apples", (name, qty) => {
  console.log(`Stock for ${name}: ${qty} units`);
});
```

#### 2. Creating & Consuming a Promise
```javascript
function checkAvailability(itemId, requestedQty) {
  return new Promise((resolve, reject) => {
    // Simulating server delay
    setTimeout(() => {
      const stock = 20;
      if (requestedQty <= stock) {
        resolve(`Success: ${requestedQty} units reserved for item ${itemId}!`);
      } else {
        reject(new Error(`Failed: Insufficient stock. Available: ${stock}`));
      }
    }, 1500);
  });
}

// Consuming Promise
checkAvailability(101, 5)
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error.message);
  })
  .finally(() => {
    console.log("Check availability operation completed.");
  });
```

#### 3. Promise Chaining
```javascript
fetchUser(userId)
  .then(user => fetchOrders(user.id))
  .then(orders => calculateBill(orders))
  .then(total => console.log("Total bill:", total))
  .catch(err => console.error("Error in sequence:", err));
```

---

## 4. Async / Await & Fetch API

### Key: Definitions
| Concept | One-Liner |
|---------|-----------|
| **`async`** | Placed before function; makes function return a Promise automatically |
| **`await`** | Pauses execution inside `async` function until Promise resolves; returns direct value |
| **`try...catch`**| Standard block used to catch errors when using `await` |
| **Fetch API** | Modern promise-based browser API to make HTTP requests (`fetch(url)`) |
| **`res.json()`** | Method on Fetch Response object parsing response body stream as JSON (returns Promise) |
| **`res.ok`** | Boolean: `true` if HTTP status code is 200–299 |

---

### Syntax & Code Templates

#### 1. Async / Await Basics
```javascript
async function loadData() {
  try {
    const response = await fetch("https://api.example.com/groceries");
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }
    const data = await response.json(); // Wait for JSON parsing
    console.log("Received data:", data);
  } catch (error) {
    console.error("Failed to load data:", error.message);
  } finally {
    console.log("Loading complete.");
  }
}
```

#### 2. Fetch API POST Request (Sending Data)
```javascript
async function addGroceryItem(itemObj) {
  try {
    const response = await fetch("https://api.example.com/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(itemObj) // Convert JS object to JSON string
    });
    const result = await response.json();
    console.log("Item saved:", result);
  } catch (err) {
    console.error("POST failed:", err);
  }
}
```

---

## 5. JavaScript Form Validation

### Key: Key Form Validation Rules & Properties
| Property / Method | Purpose |
|-------------------|---------|
| `event.preventDefault()` | Stops browser's default form submit & page refresh |
| `input.value.trim()` | Strips leading and trailing whitespace |
| `regex.test(string)` | Returns `true` if string matches regular expression |
| `isNaN(number)` | Returns `true` if value is Not-a-Number |

### Complete Form Validation Template
```html
<form id="groceryForm" onsubmit="return validateForm(event)">
  <input type="text" id="itemName" placeholder="Item Name">
  <span id="nameError" style="color:red;"></span><br>

  <input type="number" id="price" placeholder="Price">
  <span id="priceError" style="color:red;"></span><br>

  <input type="text" id="email" placeholder="Contact Email">
  <span id="emailError" style="color:red;"></span><br>

  <button type="submit">Submit</button>
</form>

<script>
function validateForm(e) {
  e.preventDefault(); // Stop page reload

  let isValid = true;
  const name = document.getElementById("itemName").value.trim();
  const price = document.getElementById("price").value.trim();
  const email = document.getElementById("email").value.trim();

  // Reset errors
  document.getElementById("nameError").innerText = "";
  document.getElementById("priceError").innerText = "";
  document.getElementById("emailError").innerText = "";

  // 1. Text required & length
  if (name === "") {
    document.getElementById("nameError").innerText = "Item name is required.";
    isValid = false;
  } else if (name.length < 3) {
    document.getElementById("nameError").innerText = "Must be at least 3 characters.";
    isValid = false;
  }

  // 2. Number validation
  if (price === "" || isNaN(price) || Number(price) <= 0) {
    document.getElementById("priceError").innerText = "Enter valid price > 0.";
    isValid = false;
  }

  // 3. Email Regex validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").innerText = "Enter valid email address.";
    isValid = false;
  }

  if (isValid) {
    alert("Form submitted successfully!");
    // save to localStorage or send via fetch/ajax
  }
  return isValid;
}
</script>
```

---

# PART B: XML (eXtensible Markup Language)

---

## 6. XML Syntax & Rules

### Key: Definitions
| Concept | One-Liner |
|---------|-----------|
| **XML** | eXtensible Markup Language designed to store and transport structured data |
| **HTML vs XML** | HTML displays data with fixed tags; XML carries data with user-defined tags |
| **Prolog** | First line declaration: `<?xml version="1.0" encoding="UTF-8"?>` |
| **Root Element** | Single top-level tag enclosing all other XML elements (mandatory) |
| **Well-formed XML** | XML adhering strictly to all syntax rules (closed tags, single root, nested properly) |
| **Valid XML** | Well-formed XML that also complies with a DTD or XML Schema (XSD) |

### Strict XML Syntax Rules
1. **Prolog is optional but recommended**: `<?xml version="1.0" encoding="UTF-8"?>`
2. **Exactly ONE Root element** enclosing everything
3. **All tags MUST close** (no self-closing omissions like `<br>` — must be `<br/>`)
4. **Case Sensitive**: `<Item>` is different from `<item>`
5. **Proper Nesting**: `<b><i>text</i></b>` (cannot overlap `<b><i>text</b></i>`)
6. **Attribute values MUST be quoted**: `<item id="101">` (never `<item id=101>`)
7. **Entity References for special characters**:
   - `<` → `&lt;`
   - `>` → `&gt;`
   - `&` → `&amp;`
   - `"` → `&quot;`
   - `'` → `&apos;`

---

### Sample Well-Formed XML Document (`groceries.xml`)
```xml
<?xml version="1.0" encoding="UTF-8"?>
<groceryInventory>
  <item id="G01" category="Dairy">
    <name>Organic Milk</name>
    <price currency="INR">60</price>
    <quantity unit="Litre">25</quantity>
    <available>true</available>
  </item>
  <item id="G02" category="Grains">
    <name>Basmati Rice</name>
    <price currency="INR">120</price>
    <quantity unit="Kg">50</quantity>
    <available>true</available>
  </item>
</groceryInventory>
```

---

## 7. XML Namespaces

### Key: Definitions
| Concept | One-Liner |
|---------|-----------|
| **XML Namespace** | Mechanism to avoid element name conflicts when combining XML documents from different sources |
| **Prefix** | Short label attached to tag names (`<prefix:element>`) |
| **`xmlns` Attribute** | Syntax to declare namespace: `xmlns:prefix="URI"` |
| **Default Namespace** | Declared without prefix (`xmlns="URI"`); applies to element and children |

### Namespace Syntax Example
```xml
<?xml version="1.0" encoding="UTF-8"?>
<root xmlns:store="https://myshop.com/store"
      xmlns:billing="https://myshop.com/billing">
  
  <!-- store:item refers to store inventory definition -->
  <store:item>
    <store:name>Wheat Flour</store:name>
  </store:item>

  <!-- billing:item refers to payment item definition -->
  <billing:item>
    <billing:taxRate>5%</billing:taxRate>
  </billing:item>
</root>
```

---

## 8. XML Schema (XSD)

### Key: Definitions
| Term | One-Liner |
|------|-----------|
| **XSD** | XML Schema Definition — XML-based alternative to DTD defining data types and structure |
| **DTD vs XSD** | DTD is non-XML syntax with no data types; XSD is written in XML and supports data types |
| **Simple Type** | Element containing only text/numbers, no child elements and no attributes |
| **Complex Type** | Element containing other child elements and/or attributes |
| **`xs:sequence`** | Child elements must appear in the exact specified order |
| **Built-in Types** | `xs:string`, `xs:integer`, `xs:decimal`, `xs:boolean`, `xs:date` |

### Sample XML Schema (`groceries.xsd`)
```xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
  <xs:element name="groceryInventory">
    <xs:complexType>
      <xs:sequence>
        <xs:element name="item" maxOccurs="unbounded">
          <xs:complexType>
            <xs:sequence>
              <xs:element name="name" type="xs:string"/>
              <xs:element name="price" type="xs:decimal"/>
              <xs:element name="quantity" type="xs:integer"/>
              <xs:element name="available" type="xs:boolean"/>
            </xs:sequence>
            <xs:attribute name="id" type="xs:string" use="required"/>
            <xs:attribute name="category" type="xs:string"/>
          </xs:complexType>
        </xs:element>
      </xs:sequence>
    </xs:complexType>
  </xs:element>
</xs:schema>
```

---

## 9. XML Parsers & DOMParser

### Key: Definitions
| Concept | One-Liner |
|---------|-----------|
| **XML Parser** | Software that reads an XML document, verifies syntax, and converts it to a traversable DOM tree |
| **DOMParser** | Standard browser JavaScript API to parse raw XML string into an XML Document object |
| **`parseFromString()`**| Method taking `(xmlString, "text/xml")` and returning XML Document DOM |
| **`getElementsByTagName()`** | Returns collection of matching XML node elements |
| **`textContent`** | Reads inner text content of an XML node |

### Parsing XML String in JavaScript
```javascript
const xmlString = `
<items>
  <item><name>Bread</name><price>40</price></item>
  <item><name>Butter</name><price>55</price></item>
</items>`;

// 1. Create parser
const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlString, "text/xml");

// 2. Extract elements
const items = xmlDoc.getElementsByTagName("item");
for (let i = 0; i < items.length; i++) {
  const name = items[i].getElementsByTagName("name")[0].textContent;
  const price = items[i].getElementsByTagName("price")[0].textContent;
  console.log(`${name}: ₹${price}`);
}
```

---

# PART C: AJAX & XMLHttpRequest

---

## 10. AJAX Introduction & Working Principle

### Key: Definitions
| Concept | One-Liner |
|---------|-----------|
| **AJAX** | Asynchronous JavaScript And XML — technique to exchange data with server and update page parts without reload |
| **Advantage** | Faster, responsive user experience, reduces server bandwidth usage |
| **Technologies**| HTML/CSS (display), JavaScript (DOM/logic), XMLHttpRequest/Fetch (async request), XML/JSON (data format) |

### AJAX Step-by-Step Flow
```
1. User Event (Click / Input)
       ↓
2. JavaScript creates XMLHttpRequest object
       ↓
3. XHR sends asynchronous request to server (in background)
       ↓
4. Server processes request and returns XML or JSON response
       ↓
5. JavaScript receives response via callback / event handler
       ↓
6. JavaScript updates specific HTML DOM element (NO PAGE RELOAD)
```

---

## 11. XMLHttpRequest (XHR) Object

### Key: Properties of XMLHttpRequest
| Property | Description |
|----------|-------------|
| `readyState` | Current status of the request (integer 0 to 4) |
| `status` | HTTP status code returned by server (`200` = OK, `404` = Not Found, `500` = Server Error) |
| `statusText` | HTTP status text message (e.g., "OK", "Not Found") |
| `responseText`| Server response body received as a plain text string |
| `responseXML` | Server response body parsed as XML Document DOM object |
| `onreadystatechange` | Event handler function called every time `readyState` changes |
| `onload` | Event handler called when request completes successfully (`readyState === 4` and HTTP 200) |

### `readyState` Values
| State | Name | Meaning |
|:---:|------|---------|
| **0** | `UNSENT` | Client created; `.open()` has not been called yet |
| **1** | `OPENED` | `.open()` has been called |
| **2** | `HEADERS_RECEIVED` | `.send()` called; headers and status are available |
| **3** | `LOADING` | Downloading response; `responseText` holds partial data |
| **4** | `DONE` | Operation completed; entire response is available |

### Common XHR Methods
| Method | Syntax & Purpose |
|--------|------------------|
| `open(method, url, async)` | Initializes request (`xhr.open("GET", "data.json", true)`) |
| `send(body)` | Sends request to server (`xhr.send()` for GET; `xhr.send(data)` for POST) |
| `setRequestHeader(hdr, val)` | Sets request header (`xhr.setRequestHeader("Content-Type", "application/json")`) |
| `abort()` | Cancels an ongoing network request |

---

### Complete AJAX Code: Loading XML Data (`xhr_xml.html`)
```html
<button onclick="loadXMLData()">Load Groceries XML</button>
<div id="output"></div>

<script>
function loadXMLData() {
  // 1. Create XHR instance
  const xhr = new XMLHttpRequest();

  // 2. Configure GET request
  xhr.open("GET", "groceries.xml", true);

  // 3. Define callback on readyState change
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const xmlDoc = xhr.responseXML;
      const items = xmlDoc.getElementsByTagName("item");

      let html = "<table border='1'><tr><th>Name</th><th>Price</th><th>Qty</th></tr>";
      for (let i = 0; i < items.length; i++) {
        const name = items[i].getElementsByTagName("name")[0].textContent;
        const price = items[i].getElementsByTagName("price")[0].textContent;
        const qty = items[i].getElementsByTagName("quantity")[0].textContent;
        html += `<tr><td>${name}</td><td>₹${price}</td><td>${qty}</td></tr>`;
      }
      html += "</table>";

      // 4. Update DOM dynamically
      document.getElementById("output").innerHTML = html;
    }
  };

  // 5. Send request
  xhr.send();
}
</script>
```

---

## 12. JSON Response Handling

### Key: Definitions
| Concept | One-Liner |
|---------|-----------|
| **JSON** | JavaScript Object Notation — lightweight, human-readable data-interchange format |
| **JSON vs XML** | JSON is shorter, faster to parse, uses array/key-value notation, and maps directly to JS objects |
| **`JSON.parse(str)`** | Parses JSON string into native JavaScript object / array |
| **`JSON.stringify(obj)`** | Serializes JavaScript object into JSON string |
| **JSON Rule** | Keys and string values **must** use double quotes (`"key": "value"`) |

### Complete AJAX Code: Loading JSON Data (`xhr_json.html`)
```html
<button onclick="loadJSONData()">Load Products JSON</button>
<ul id="itemList"></ul>

<script>
function loadJSONData() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "products.json", true);

  xhr.onload = function () {
    if (xhr.status === 200) {
      // Parse JSON text into JS Array
      const products = JSON.parse(xhr.responseText);

      let listHtml = "";
      products.forEach(p => {
        listHtml += `<li><strong>${p.name}</strong> — ₹${p.price} (${p.status})</li>`;
      });

      document.getElementById("itemList").innerHTML = listHtml;
    } else {
      console.error("Failed to load JSON, status:", xhr.status);
    }
  };

  xhr.send();
}
</script>
```

---

## Quick Exam Revision Table
| Concept | Key Syntax / Keyword | Must Remember Rule |
|---------|----------------------|--------------------|
| Class Inheritance | `class Child extends Parent` | Call `super()` before `this` in constructor |
| Modules | `export { x }` / `import { x }` | HTML must use `<script type="module">` |
| Promise | `new Promise((resolve, reject) => {})` | States: Pending, Fulfilled, Rejected |
| Async / Await | `async function f() { await p; }` | `await` only works inside `async` function |
| XML Rule | `<?xml version="1.0"?>` | Single root tag, all tags closed, case-sensitive |
| XML Schema | `<xs:schema>` | Supports typed data validation unlike DTD |
| AJAX ReadyState 4 | `xhr.readyState === 4 && xhr.status === 200` | Request completed & server responded OK |
| JSON Parse | `JSON.parse(str)` | Keys must be in double quotes in JSON text |
