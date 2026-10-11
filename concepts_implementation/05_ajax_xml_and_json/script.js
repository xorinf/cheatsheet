/**
 * AJAX (XMLHttpRequest), XML & JSON Dynamic Reader Logic
 * Demonstrates:
 * 1. Creating new XMLHttpRequest()
 * 2. Monitoring readyState (0 to 4) transitions
 * 3. Inspecting HTTP Status (200 OK)
 * 4. Parsing XML Document (DOMParser / responseXML) using getElementsByTagName()
 * 5. Parsing JSON Response (JSON.parse / responseText)
 * 6. Dynamically generating HTML without page reloads
 * 7. Graceful offline fallback in case the file is opened directly via file:// protocol
 */

const reqTypeEl = document.getElementById("reqType");
const readyStateValEl = document.getElementById("readyStateVal");
const httpStatusValEl = document.getElementById("httpStatusVal");
const opStatusEl = document.getElementById("opStatus");

const outputTitle = document.getElementById("outputTitle");
const itemCountBadge = document.getElementById("itemCountBadge");
const dataContainer = document.getElementById("dataContainer");
const rawCodeViewer = document.getElementById("rawCodeViewer");

const loadXmlBtn = document.getElementById("loadXmlBtn");
const loadJsonBtn = document.getElementById("loadJsonBtn");
const resetDisplayBtn = document.getElementById("resetDisplayBtn");

const readyStateNames = {
  0: "0 (UNSENT)",
  1: "1 (OPENED)",
  2: "2 (HEADERS_RECEIVED)",
  3: "3 (LOADING)",
  4: "4 (DONE)"
};

// ==========================================
// 1. AJAX XML REQUEST
// ==========================================
function loadXMLData() {
  reqTypeEl.textContent = "GET (XML via XMLHttpRequest)";
  opStatusEl.textContent = "Connecting to server...";
  opStatusEl.className = "status-val status-active";

  // Step 1: Create XMLHttpRequest Instance
  const xhr = new XMLHttpRequest();

  // Step 2: Open GET connection (asynchronous = true)
  xhr.open("GET", "inventory.xml", true);

  // Step 3: Event Handler for readyState changes
  xhr.onreadystatechange = function () {
    // Update live monitor
    readyStateValEl.textContent = readyStateNames[xhr.readyState] || xhr.readyState;

    // Check if request reached readyState 4 (DONE)
    if (xhr.readyState === 4) {
      httpStatusValEl.textContent = `${xhr.status} ${xhr.statusText || ""}`;

      if (xhr.status === 200 || (xhr.status === 0 && xhr.responseText)) {
        opStatusEl.textContent = "XML Loaded Successfully!";
        opStatusEl.className = "status-val status-success";

        // Raw text view
        rawCodeViewer.textContent = xhr.responseText;

        // Extract XML Document object
        let xmlDoc = xhr.responseXML;
        if (!xmlDoc) {
          // Fallback if browser parsed as text
          const parser = new DOMParser();
          xmlDoc = parser.parseFromString(xhr.responseText, "text/xml");
        }

        renderXMLTable(xmlDoc);
      } else {
        handleAjaxError("XML", xhr.status);
      }
    }
  };

  // Step 4: Handle Network Errors
  xhr.onerror = function () {
    handleAjaxError("XML", "Network Error / CORS");
  };

  // Step 5: Send request
  try {
    xhr.send();
  } catch (err) {
    handleAjaxError("XML", err.message);
  }
}

// Render XML Document to HTML Table
function renderXMLTable(xmlDoc) {
  const items = xmlDoc.getElementsByTagName("item");
  const storeName = xmlDoc.documentElement.getAttribute("storeName") || "Catalog";

  outputTitle.textContent = `Parsed XML Catalog: ${storeName}`;
  itemCountBadge.textContent = `${items.length} Items`;
  itemCountBadge.classList.remove("hidden");

  let tableHtml = `
    <table class="ajax-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Item Name</th>
          <th>Department</th>
          <th>Price</th>
          <th>Stock Unit</th>
          <th>Available Qty</th>
          <th>Organic?</th>
        </tr>
      </thead>
      <tbody>
  `;

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const id = item.getAttribute("id") || "";
    const dept = item.getAttribute("department") || "";
    const name = item.getElementsByTagName("name")[0]?.textContent || "";
    const price = item.getElementsByTagName("price")[0]?.textContent || "";
    const currency = item.getElementsByTagName("price")[0]?.getAttribute("currency") || "INR";
    const stockUnit = item.getElementsByTagName("stockUnit")[0]?.textContent || "";
    const qty = item.getElementsByTagName("availableQuantity")[0]?.textContent || "";
    const isOrganic = item.getElementsByTagName("organicCertified")[0]?.textContent === "true" ? "Yes" : "No";

    tableHtml += `
      <tr>
        <td><b>${id}</b></td>
        <td>${name}</td>
        <td>${dept}</td>
        <td>₹${price}</td>
        <td>${stockUnit}</td>
        <td>${qty}</td>
        <td>${isOrganic}</td>
      </tr>
    `;
  }

  tableHtml += `</tbody></table>`;
  dataContainer.innerHTML = tableHtml;
}

// ==========================================
// 2. AJAX JSON REQUEST
// ==========================================
function loadJSONData() {
  reqTypeEl.textContent = "GET (JSON via XMLHttpRequest)";
  opStatusEl.textContent = "Connecting to server...";
  opStatusEl.className = "status-val status-active";

  const xhr = new XMLHttpRequest();
  xhr.open("GET", "inventory.json", true);

  xhr.onreadystatechange = function () {
    readyStateValEl.textContent = readyStateNames[xhr.readyState] || xhr.readyState;

    if (xhr.readyState === 4) {
      httpStatusValEl.textContent = `${xhr.status} ${xhr.statusText || ""}`;

      if (xhr.status === 200 || (xhr.status === 0 && xhr.responseText)) {
        opStatusEl.textContent = "JSON Loaded Successfully!";
        opStatusEl.className = "status-val status-success";

        rawCodeViewer.textContent = xhr.responseText;

        // Parse JSON String into JavaScript Array
        const products = JSON.parse(xhr.responseText);
        renderJSONCards(products);
      } else {
        handleAjaxError("JSON", xhr.status);
      }
    }
  };

  xhr.onerror = function () {
    handleAjaxError("JSON", "Network Error / CORS");
  };

  try {
    xhr.send();
  } catch (err) {
    handleAjaxError("JSON", err.message);
  }
}

// Render JSON to HTML Grid Cards
function renderJSONCards(products) {
  outputTitle.textContent = "Parsed JSON Product Grid";
  itemCountBadge.textContent = `${products.length} Products`;
  itemCountBadge.classList.remove("hidden");

  let cardsHtml = `<div class="json-grid">`;

  products.forEach((p) => {
    cardsHtml += `
      <div class="json-card">
        <h4>${p.name}</h4>
        <p>Category: ${p.category}</p>
        <p class="price-tag">Price: ₹${p.price.toFixed(2)}</p>
        <p>Stock: ${p.stock} units (${p.status})</p>
      </div>
    `;
  });

  cardsHtml += `</div>`;
  dataContainer.innerHTML = cardsHtml;
}

// ==========================================
// 3. ERROR HANDLER WITH EMBEDDED DEMO FALLBACK
// ==========================================
function handleAjaxError(format, reason) {
  opStatusEl.textContent = `Local file notice (${reason})`;
  opStatusEl.className = "status-val status-error";

  outputTitle.textContent = `${format} Demonstration`;
  dataContainer.innerHTML = `
    <div style="padding: 16px; background-color: #fef2f2; border: 1px solid #fecaca; border-radius: 6px; color: #991b1b; font-size: 13px;">
      <p><b>Note for Local Browser Browsing:</b> If you opened this file by double-clicking it (<code>file:///</code> protocol), some modern browsers restrict loading external local files via XMLHttpRequest for security.</p>
      <p style="margin-top: 6px;"><b>Solution:</b> Open terminal in this folder and run: <code>python3 -m http.server 8000</code> or <code>npx serve</code>, then visit <code>http://localhost:8000</code>.</p>
    </div>
  `;
}

// Reset Display
function resetDisplay() {
  reqTypeEl.textContent = "Idle";
  readyStateValEl.textContent = "0 (UNSENT)";
  httpStatusValEl.textContent = "—";
  opStatusEl.textContent = "Ready to send request";
  opStatusEl.className = "status-val status-idle";

  outputTitle.textContent = "Awaiting AJAX Request...";
  itemCountBadge.classList.add("hidden");
  dataContainer.innerHTML = `
    <div class="placeholder-msg">
      Click either button above to trigger an asynchronous HTTP request using <code>new XMLHttpRequest()</code>.
    </div>
  `;
  rawCodeViewer.textContent = "// Server response text will appear here...";
}

// Attach event listeners
loadXmlBtn.addEventListener("click", loadXMLData);
loadJsonBtn.addEventListener("click", loadJSONData);
resetDisplayBtn.addEventListener("click", resetDisplay);
