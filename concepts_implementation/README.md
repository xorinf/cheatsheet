# Concepts Implementation — Complete Interactive Reference Guide


![alt text](../meow.jpeg)
This folder contains fully functional, self-contained implementations for every major topic in the Web Programming syllabus and lab curriculum. 

Every subfolder is completely modular and contains its own `index.html`, `style.css`, and `script.js` (or `.ts`/`.xml`/`.xsd`), designed so that **a person with no prior coding experience can open, inspect, and run each concept immediately**.

---

## Folder Directory & Topics Demonstrated

| Folder Name | Concepts Demonstrated | Files Included |
|-------------|------------------------|----------------|
| **[01_forms_and_validation](./01_forms_and_validation/)** | Complete HTML form input controls (Text, Email, Password, Number, Radio, Checkbox, Select, Textarea), real-time & on-submit regex validation, custom error messaging, and password visibility toggle. | `index.html`, `style.css`, `script.js` |
| **[02_tables_and_box_model](./02_tables_and_box_model/)** | Complex HTML table with `colspan` and `rowspan` + an interactive CSS Box Model laboratory with real-time sliders for Margin, Border, Padding, and Content. | `index.html`, `style.css`, `script.js` |
| **[03_semantic_and_multimedia](./03_semantic_and_multimedia/)** | HTML5 Semantic layout (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`), `<div>` vs `<span>` visual demo, and native `<video>` & `<audio>` players. | `index.html`, `style.css` |
| **[04_dom_calculation_and_localstorage](./04_dom_calculation_and_localstorage/)** | JavaScript DOM manipulation, dynamic arithmetic calculations (subtotal, member discount tiers, tax), and browser `localStorage` CRUD persistence with real-time search. | `index.html`, `style.css`, `script.js` |
| **[05_ajax_xml_and_json](./05_ajax_xml_and_json/)** | Asynchronous JavaScript and XML (AJAX) using `XMLHttpRequest`. Demonstrates `readyState` (0 to 4), HTTP status codes, parsing XML DOM nodes (`getElementsByTagName`), JSON response handling (`JSON.parse`), and dynamic table generation without page reloads. | `index.html`, `style.css`, `script.js`, `inventory.xml`, `inventory.xsd`, `inventory.json` |
| **[06_typescript_oop_and_generics](./06_typescript_oop_and_generics/)** | TypeScript interfaces, Duck Typing (structural typing), classes with access modifiers (`public`, `private`, `protected`), parameter properties shortcut, and generic repository classes (`<T extends HasId>`). Includes an interactive browser playground and terminal compilation guide. | `models.ts`, `app.ts`, `index.html`, `style.css`, `script.js`, `README.md` |
| **[07_angular_spa_simulation](./07_angular_spa_simulation/)** | Angular Single Page Application architecture. Official TypeScript component & service files + interactive browser simulator demonstrating all 4 Data Bindings (Interpolation, Property, Event, Two-Way `[(ngModel)]`), Directives (`*ngIf`, `*ngFor`), Pipes (`currency`, `uppercase`), and Service Dependency Injection. Also includes full setup guide: [ANGULAR_SETUP_GUIDE.md](./07_angular_spa_simulation/ANGULAR_SETUP_GUIDE.md). | `grocery.service.ts`, `grocery-list.component.ts`, `grocery-list.component.html`, `index.html`, `style.css`, `app.js`, `ANGULAR_SETUP_GUIDE.md`, `README.md` |
| **[08_master_scenario_grocery_app](./08_master_scenario_grocery_app/)** | **Master Capstone Exam Project**: End-to-end Grocery Availability Application uniting semantic HTML, responsive flex/grid, validated form submission, stock adjustment counters, LocalStorage persistence, and AJAX XML data import. | `index.html`, `style.css`, `app.js`, `groceries.xml` |

---

## How to Run Any Implementation

### Option 1: Direct Double-Click (Zero Setup)
Simply open any subfolder in your file explorer / Finder and **double-click `index.html`**. It will open in Google Chrome, Edge, Firefox, or Safari immediately.

### Option 2: Local Web Server (Recommended for AJAX / XML)
To run with standard HTTP requests (avoiding local `file://` browser security restrictions when testing AJAX):
```bash
# In your terminal, navigate to the folder:
cd "/Users/yashhwanth/Documents/cheatsheet!/concepts_implementation"

# Start lightweight Python web server:
python3 -m http.server 8000
```
Then visit: `http://localhost:8000` in your web browser.

---

## How to Adapt These for Other Lab Scenarios
If your external lab question is for a different topic (e.g. *Hospital Directory*, *Student Result*, *Movie Booking*, *Library Portal*):
1. **Change the labels**: Replace "Item Name / Price / Stock" with "Patient Name / Doctor / Department" or "Student Name / Marks / Subject".
2. **Reuse the validation logic**: The regex patterns in `01_forms_and_validation/script.js` (for phone, email, name) work universally for any form.
3. **Reuse the AJAX loader**: The XML parsing logic in `05_ajax_xml_and_json/script.js` works for any XML tags simply by matching tag names with `getElementsByTagName()`.
