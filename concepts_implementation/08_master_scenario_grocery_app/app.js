/**
 * Master Grocery Availability Application
 * Developed for EWP Lab Exam Scenario: PAYYAVULA YASHHWANTH | Grocery Availability Application
 * Unites:
 * 1. Semantic Layout & CSS Grid
 * 2. Form Validation & Event Handling
 * 3. Dynamic DOM Manipulation
 * 4. LocalStorage Data Persistence
 * 5. XML AJAX Dynamic Ingestion via XMLHttpRequest
 * 6. Multi-dimensional filtering (Search + Category + Stock status)
 */

const STORAGE_KEY = "grocery_portal_items_db";

// Default seed data
const defaultGroceries = [
  { id: 1, name: "Pasteurized Whole Milk (1L)", category: "Dairy", price: 62.00, stock: 30 },
  { id: 2, name: "Brown Multigrain Bread (400g)", category: "Produce", price: 45.00, stock: 15 },
  { id: 3, name: "Aged Basmati Rice (5kg)", category: "Grains", price: 380.00, stock: 40 },
  { id: 4, name: "Organic Honey (500g)", category: "Snacks", price: 290.00, stock: 0 },
  { id: 5, name: "Pure Cow Ghee (1L)", category: "Dairy", price: 620.00, stock: 12 },
  { id: 6, name: "Cold-Pressed Orange Juice (1L)", category: "Beverages", price: 110.00, stock: 8 }
];

// DOM references
const form = document.getElementById("groceryForm");
const prodName = document.getElementById("prodName");
const prodCat = document.getElementById("prodCat");
const prodPrice = document.getElementById("prodPrice");
const prodStock = document.getElementById("prodStock");

const searchFilter = document.getElementById("searchFilter");
const categoryFilter = document.getElementById("categoryFilter");
const availabilityFilter = document.getElementById("availabilityFilter");
const groceryGrid = document.getElementById("groceryGrid");
const noItemsBox = document.getElementById("noItemsBox");

const statTotalItems = document.getElementById("statTotalItems");
const statInStock = document.getElementById("statInStock");
const statOutOfStock = document.getElementById("statOutOfStock");

// 1. LocalStorage Helpers
function getInventory() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [...defaultGroceries];
}

function saveInventory(items) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

// 2. Render Inventory Cards & Update Live Stats
function render() {
  const items = getInventory();
  const search = searchFilter.value.trim().toLowerCase();
  const cat = categoryFilter.value;
  const avail = availabilityFilter.value;

  // Filter items
  const filtered = items.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(search);
    const matchesCat = cat === "ALL" || item.category === cat;
    const matchesAvail =
      avail === "ALL" ||
      (avail === "IN_STOCK" && item.stock > 0) ||
      (avail === "OUT_OF_STOCK" && item.stock === 0);

    return matchesSearch && matchesCat && matchesAvail;
  });

  // Update Stats
  statTotalItems.textContent = items.length;
  statInStock.textContent = items.filter((i) => i.stock > 0).length;
  statOutOfStock.textContent = items.filter((i) => i.stock === 0).length;

  // Display Cards
  groceryGrid.innerHTML = "";

  if (filtered.length === 0) {
    noItemsBox.classList.remove("hidden");
    return;
  }

  noItemsBox.classList.add("hidden");

  filtered.forEach((item) => {
    const inStock = item.stock > 0;
    const card = document.createElement("div");
    card.className = "item-card";
    card.innerHTML = `
      <div>
        <div class="card-top">
          <span class="badge-cat">${item.category}</span>
          <span style="font-size:11px; color:#94a3b8;">ID: #${item.id}</span>
        </div>
        <h3>${item.name}</h3>
        <div class="item-price">₹${item.price.toFixed(2)}</div>
        <div class="stock-status-bar">
          <span class="status-badge ${inStock ? "status-in" : "status-out"}">
            ${inStock ? "Available In Stock" : "Out of Stock"}
          </span>
          <span style="font-weight:600; color:#475569;">Stock: ${item.stock}</span>
        </div>
      </div>
      <div class="card-actions">
        <button class="btn-sm" onclick="adjustStock(${item.id}, 1)">+ Restock</button>
        <button class="btn-sm" onclick="adjustStock(${item.id}, -1)">- Sell</button>
        <button class="btn-sm btn-del" onclick="deleteItem(${item.id})">Delete</button>
      </div>
    `;
    groceryGrid.appendChild(card);
  });
}

// 3. Form Validation & Item Creation
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameVal = prodName.value.trim();
  const priceVal = parseFloat(prodPrice.value);
  const stockVal = parseInt(prodStock.value, 10);
  const catVal = prodCat.value;

  let isValid = true;

  // Reset errors
  document.getElementById("prodNameErr").textContent = "";
  document.getElementById("prodPriceErr").textContent = "";
  document.getElementById("prodStockErr").textContent = "";

  if (nameVal.length < 3) {
    document.getElementById("prodNameErr").textContent = "Item name must be at least 3 characters.";
    isValid = false;
  }

  if (isNaN(priceVal) || priceVal <= 0) {
    document.getElementById("prodPriceErr").textContent = "Please enter valid price > ₹0.";
    isValid = false;
  }

  if (isNaN(stockVal) || stockVal < 0) {
    document.getElementById("prodStockErr").textContent = "Stock quantity cannot be negative.";
    isValid = false;
  }

  if (isValid) {
    const items = getInventory();
    const newItem = {
      id: Date.now(),
      name: nameVal,
      category: catVal,
      price: priceVal,
      stock: stockVal
    };

    items.unshift(newItem);
    saveInventory(items);

    form.reset();
    render();
  }
});

// 4. Adjust Stock Levels (+ Restock / - Sell)
window.adjustStock = function (id, delta) {
  const items = getInventory();
  const item = items.find((i) => i.id === id);
  if (item) {
    item.stock = Math.max(0, item.stock + delta);
    saveInventory(items);
    render();
  }
};

// 5. Delete Item
window.deleteItem = function (id) {
  if (confirm("Remove this item from the catalog?")) {
    let items = getInventory();
    items = items.filter((i) => i.id !== id);
    saveInventory(items);
    render();
  }
};

// 6. Reset Defaults
window.resetInventoryData = function () {
  if (confirm("Reset inventory to factory sample items?")) {
    localStorage.removeItem(STORAGE_KEY);
    searchFilter.value = "";
    categoryFilter.value = "ALL";
    availabilityFilter.value = "ALL";
    render();
  }
};

// 7. Load from XML Catalog via AJAX (XMLHttpRequest)
window.loadFromXML = function () {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "groceries.xml", true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200 || (xhr.status === 0 && xhr.responseText)) {
        let xmlDoc = xhr.responseXML;
        if (!xmlDoc) {
          const parser = new DOMParser();
          xmlDoc = parser.parseFromString(xhr.responseText, "text/xml");
        }

        const xmlProducts = xmlDoc.getElementsByTagName("product");
        const items = getInventory();

        for (let i = 0; i < xmlProducts.length; i++) {
          const p = xmlProducts[i];
          const name = p.getElementsByTagName("name")[0]?.textContent;
          const price = parseFloat(p.getElementsByTagName("price")[0]?.textContent || "0");
          const stock = parseInt(p.getElementsByTagName("stock")[0]?.textContent || "0", 10);
          const cat = p.getAttribute("category") || "General";

          // Avoid duplicates by name
          if (name && !items.some((existing) => existing.name === name)) {
            items.push({
              id: Date.now() + i,
              name: name,
              category: cat,
              price: price,
              stock: stock
            });
          }
        }

        saveInventory(items);
        alert(`Successfully imported items from groceries.xml via AJAX!`);
        render();
      } else {
        alert("Notice: Could not load groceries.xml. If using file://, run python3 -m http.server.");
      }
    }
  };

  try {
    xhr.send();
  } catch (err) {
    console.error("AJAX Error:", err);
  }
};

// 8. Event Listeners for Filters
searchFilter.addEventListener("input", render);
categoryFilter.addEventListener("change", render);
availabilityFilter.addEventListener("change", render);

// Boot
render();
