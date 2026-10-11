/**
 * JavaScript DOM Calculations & LocalStorage Data Manager
 * Covers:
 * 1. Live price calculation with discount tiers
 * 2. Form submission and input parsing (parseFloat, parseInt)
 * 3. Saving, retrieving, and deleting records in browser LocalStorage
 * 4. Dynamically rendering HTML table rows via DOM manipulation
 * 5. Instant search filtering on stored items
 */

const STORAGE_KEY = "grocery_inventory_records";

// DOM references
const form = document.getElementById("itemEntryForm");
const nameInput = document.getElementById("itemName");
const priceInput = document.getElementById("unitPrice");
const qtyInput = document.getElementById("quantity");
const categorySelect = document.getElementById("category");
const discountSelect = document.getElementById("discountTier");
const searchInput = document.getElementById("searchInput");

const previewSubtotal = document.getElementById("previewSubtotal");
const previewDiscount = document.getElementById("previewDiscount");
const previewTotal = document.getElementById("previewTotal");

const tableBody = document.getElementById("inventoryTableBody");
const grandTotalVal = document.getElementById("grandTotalVal");

// 1. Live Calculation Preview Function
function updateCalculationPreview() {
  const price = parseFloat(priceInput.value) || 0;
  const qty = parseInt(qtyInput.value, 10) || 0;
  const discountPercent = parseFloat(discountSelect.value) || 0;

  const subtotal = price * qty;
  const discountAmount = (subtotal * discountPercent) / 100;
  const finalTotal = subtotal - discountAmount;

  previewSubtotal.textContent = `₹${subtotal.toFixed(2)}`;
  previewDiscount.textContent = `-₹${discountAmount.toFixed(2)} (${discountPercent}%)`;
  previewTotal.textContent = `₹${finalTotal.toFixed(2)}`;
}

// Attach input listeners for live calculation
priceInput.addEventListener("input", updateCalculationPreview);
qtyInput.addEventListener("input", updateCalculationPreview);
discountSelect.addEventListener("change", updateCalculationPreview);

// 2. LocalStorage Helpers
function getStoredInventory() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

function saveStoredInventory(items) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

// 3. Render Table from Stored Data
function renderTable(filterQuery = "") {
  const items = getStoredInventory();
  tableBody.innerHTML = "";

  const filtered = items.filter((item) =>
    item.name.toLowerCase().includes(filterQuery.toLowerCase())
  );

  if (filtered.length === 0) {
    tableBody.innerHTML = `<tr><td colspan="7" style="text-align:center; color:#94a3b8; padding: 20px;">No inventory records found.</td></tr>`;
    grandTotalVal.textContent = "₹0.00";
    return;
  }

  let grandTotal = 0;

  filtered.forEach((item, index) => {
    grandTotal += item.finalTotal;

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${index + 1}</td>
      <td><b>${item.name}</b></td>
      <td>${item.category}</td>
      <td>₹${item.price.toFixed(2)}</td>
      <td>${item.qty}</td>
      <td>₹${item.finalTotal.toFixed(2)}</td>
      <td><button type="button" class="btn-delete" onclick="deleteItem(${item.id})">Delete</button></td>
    `;
    tableBody.appendChild(row);
  });

  grandTotalVal.textContent = `₹${grandTotal.toFixed(2)}`;
}

// 4. Form Submit Handler (Create Item)
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = nameInput.value.trim();
  const price = parseFloat(priceInput.value);
  const qty = parseInt(qtyInput.value, 10);
  const category = categorySelect.value;
  const discountPercent = parseFloat(discountSelect.value);

  if (!name || isNaN(price) || isNaN(qty) || price <= 0 || qty <= 0) {
    alert("Please enter valid positive values!");
    return;
  }

  const subtotal = price * qty;
  const discountAmount = (subtotal * discountPercent) / 100;
  const finalTotal = subtotal - discountAmount;

  const newItem = {
    id: Date.now(), // Unique timestamp ID
    name: name,
    price: price,
    qty: qty,
    category: category,
    discountPercent: discountPercent,
    finalTotal: finalTotal
  };

  const inventory = getStoredInventory();
  inventory.push(newItem);
  saveStoredInventory(inventory);

  // Reset form and refresh table
  form.reset();
  qtyInput.value = 1;
  updateCalculationPreview();
  renderTable();
});

// 5. Delete Item Handler
window.deleteItem = function (id) {
  let inventory = getStoredInventory();
  inventory = inventory.filter((item) => item.id !== id);
  saveStoredInventory(inventory);
  renderTable(searchInput.value);
};

// 6. Clear All Data Handler
window.clearAllData = function () {
  if (confirm("Are you sure you want to clear all stored inventory records?")) {
    localStorage.removeItem(STORAGE_KEY);
    renderTable();
  }
};

// 7. Search Filter Listener
searchInput.addEventListener("input", (e) => {
  renderTable(e.target.value);
});

// Initial boot
updateCalculationPreview();
renderTable();
