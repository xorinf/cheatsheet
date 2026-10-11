# UNIT II — CSS & JAVASCRIPT CHEATSHEET

---

# PART A: CSS (Cascading Style Sheets)

---

## 1. Introduction to CSS

| Term | One-Liner |
|------|-----------|
| **CSS** | Style sheet language to describe presentation/appearance of HTML documents |
| **Purpose** | Controls layout, colors, fonts, spacing, borders, positioning of elements |
| **HTML** defines **WHAT** | CSS defines **HOW** it looks |

---

## 2. Types of Style Sheets

### Inline CSS
```html
<h1 style="color:blue; text-align:center;">Hello</h1>
```
- Applied to **one element only** using `style` attribute
- **Highest priority** among CSS types

### Internal CSS
```html
<head>
  <style>
    h1 { color: blue; text-align: center; }
    p  { font-size: 18px; }
  </style>
</head>
```
- Defined inside `<style>` tag in `<head>` section
- Applies to **all matching elements** in that page

### External CSS
```html
<!-- In HTML file -->
<head>
  <link rel="stylesheet" href="style.css">
</head>
```
```css
/* In style.css */
h1 { color: blue; font-family: Arial; }
```
- Separate `.css` file linked to HTML
- **Best for large websites** (one file → consistent design across pages)

### Key: When to Use Which?
| Type | Use When |
|------|----------|
| Inline | Styling **one specific element** uniquely |
| Internal | Styling **one page** with many elements |
| External | Styling **multiple pages** consistently ((Recommended) recommended) |

---

## 3. CSS Selectors

| Selector | Syntax | Selects | Example |
|----------|--------|---------|---------|
| **Element** | `tagname { }` | All elements of that type | `h1 { color: blue; }` |
| **Class** | `.classname { }` | All elements with that class | `.notice { color: red; }` |
| **ID** | `#idname { }` | ONE unique element | `#title { text-align: center; }` |
| **Universal** | `* { }` | ALL elements on page | `* { font-family: Arial; }` |
| **Group** | `h1, h2, p { }` | Multiple element types | `h1, p { color: blue; }` |

### Usage in HTML:
```html
<h1 id="title">Unique Title</h1>        <!-- ID: use # in CSS -->
<p class="notice">Announcement 1</p>     <!-- Class: use . in CSS -->
<p class="notice">Announcement 2</p>     <!-- Same class = same style -->
```

### Key: Class vs ID
| Class (`.`) | ID (`#`) |
|-------------|----------|
| Can be used on **multiple** elements | Must be **unique** on page |
| `.notice { }` | `#title { }` |
| In HTML: `class="notice"` | In HTML: `id="title"` |

---

## 4. Pseudo-Classes & Pseudo-Elements

### Pseudo-Classes (`:`) — style element **states**
| Pseudo-Class | When it Applies |
|-------------|-----------------|
| `:hover` | Mouse pointer is over element |
| `:active` | Element is being clicked |
| `:visited` | Link has been visited |
| `:focus` | Element has keyboard focus |
| `:first-child` | First child of parent |
| `:nth-child(n)` | nth child of parent |

```css
a:hover { color: red; }           /* Link turns red on hover */
input:focus { border-color: blue; }
```

### Pseudo-Elements (`::`) — style **part of** an element
| Pseudo-Element | What it Styles |
|---------------|----------------|
| `::first-letter` | First letter of text |
| `::first-line` | First line of text |
| `::before` | Content before element |
| `::after` | Content after element |

```css
p::first-letter { font-size: 30px; color: blue; }
```

### Key: Pseudo-class vs Pseudo-element
| Pseudo-class (`:`) | Pseudo-element (`::`) |
|--------------------|-----------------------|
| Styles element **state** | Styles element **part** |
| `:hover`, `:focus` | `::first-letter`, `::before` |

---

## 5. CSS Colors, Fonts, Lists, Backgrounds

### Colors
```css
h1 { color: blue; }                    /* Named */
h1 { color: #0000FF; }                 /* Hexadecimal */
h1 { color: rgb(0, 0, 255); }          /* RGB */
body { background-color: lightblue; }
```

### Fonts
```css
p { font-family: Arial, sans-serif; }  /* Font type */
h1 { font-size: 36px; }                /* Font size */
p { font-style: italic; }              /* italic / normal */
h2 { font-weight: bold; }              /* bold / normal / 100-900 */
```

### List Styling
```css
ul { list-style-type: square; }        /* disc | circle | square | none */
ol { list-style-type: upper-alpha; }   /* decimal | lower-alpha | upper-roman */
```

### Backgrounds
```css
body { background-color: lightyellow; }
body { background-image: url("campus.jpg"); }
body { background-repeat: no-repeat; }
body { background-size: cover; }
```

---

## 6. CSS Box Model

```
┌──────────────── MARGIN ────────────────┐
│  ┌──────────── BORDER ──────────────┐  │
│  │  ┌──────── PADDING ──────────┐   │  │
│  │  │  ┌───── CONTENT ──────┐   │   │  │
│  │  │  │   Actual Text/     │   │   │  │
│  │  │  │   Image Here       │   │   │  │
│  │  │  └────────────────────┘   │   │  │
│  │  └───────────────────────────┘   │  │
│  └──────────────────────────────────┘  │
└────────────────────────────────────────┘
```

| Component | What It Does | CSS Property |
|-----------|-------------|--------------|
| **Content** | Actual text/image | `width`, `height` |
| **Padding** | Space between content & border | `padding: 20px;` |
| **Border** | Line around padding | `border: 2px solid black;` |
| **Margin** | Space outside border (between elements) | `margin: 30px;` |

```css
div {
    width: 300px;
    padding: 20px;
    border: 2px solid blue;
    margin: 30px;
    background-color: lightyellow;
}
```

### Key: Padding vs Margin
| Padding | Margin |
|---------|--------|
| Space **inside** border (content↔border) | Space **outside** border (element↔element) |
| Background color fills padding | Margin is always transparent |

---

## 7. CSS Conflict Resolution (Cascade)

### Priority Order (Highest → Lowest):
```
1. Inline CSS         ← HIGHEST (Recommended)
2. Internal CSS
3. External CSS
4. Browser Default    ← LOWEST
```

- If same property defined by inline + internal + external → **inline wins**
- `!important` overrides everything (use sparingly)

---

# PART B: JAVASCRIPT

---

## 8. Introduction to JavaScript

| Term | One-Liner |
|------|-----------|
| **JavaScript** | High-level, lightweight, interpreted scripting language for interactive web pages |
| **HTML** | Structure (WHAT) |
| **CSS** | Appearance (HOW it looks) |
| **JavaScript** | Behavior (WHAT it does) |

### 3 Ways to Include JavaScript

| Method | Syntax | Best For |
|--------|--------|----------|
| **Inline** | `<button onclick="alert('Hi')">` | Single element action |
| **Internal** | `<script> ... </script>` in HTML | Single page scripts |
| **External** | `<script src="app.js"></script>` | Multiple pages ((Recommended) best) |

---

## 9. Variables

```javascript
let name = "Rahul";      // Block-scoped, reassignable
const PI = 3.14;          // Block-scoped, NOT reassignable
var age = 20;             // Function-scoped (older, avoid)
```

### Key: let vs const vs var
| Feature | `let` | `const` | `var` |
|---------|-------|---------|-------|
| Reassign | [Valid] Yes | [Error] No | [Valid] Yes |
| Scope | Block | Block | Function |
| Hoisting | [Error] | [Error] | [Valid] (undefined) |
| **Preferred?** | [Valid] | [Valid] | [Error] Avoid |

### Naming Rules
- Must start with letter, `_`, or `$`
- Cannot start with number
- Case-sensitive (`Name` ≠ `name`)
- No spaces, no JS keywords (`let`, `if`, `while`)

---

## 10. Data Types

| Type | Example | Description |
|------|---------|-------------|
| **Number** | `let x = 42; let y = 3.14;` | Integer & decimal |
| **String** | `let s = "Hello";` | Text in quotes |
| **Boolean** | `let b = true;` | `true` or `false` only |
| **Undefined** | `let x;` | Declared but no value assigned |
| **Null** | `let x = null;` | Intentional absence of value |
| **Array** | `let a = [1, 2, 3];` | Ordered collection |
| **Object** | `let o = {name: "A"};` | Key-value pairs |

---

## 11. Operators

### Arithmetic
| Operator | Meaning | Example |
|----------|---------|---------|
| `+` | Addition | `10 + 5` → `15` |
| `-` | Subtraction | `10 - 5` → `5` |
| `*` | Multiplication | `10 * 5` → `50` |
| `/` | Division | `10 / 3` → `3.33` |
| `%` | Modulus (remainder) | `10 % 3` → `1` |
| `**` | Exponent | `2 ** 3` → `8` |
| `++` | Increment | `x++` |
| `--` | Decrement | `x--` |

### Assignment
| Operator | Same As |
|----------|---------|
| `x = 10` | Assign 10 |
| `x += 5` | `x = x + 5` |
| `x -= 2` | `x = x - 2` |
| `x *= 3` | `x = x * 3` |

### Comparison (returns `true` / `false`)
| Operator | Meaning |
|----------|---------|
| `==` | Equal (value only) |
| `===` | Strict equal (value + type) (Recommended) |
| `!=` | Not equal |
| `!==` | Strict not equal |
| `>`, `<` | Greater / Less than |
| `>=`, `<=` | Greater/Less or equal |

### Logical
| Operator | Meaning | Example |
|----------|---------|---------|
| `&&` | AND | `age >= 18 && citizen` |
| `\|\|` | OR | `isAdmin \|\| isMod` |
| `!` | NOT | `!isPassed` |

### Key: `==` vs `===`
| `==` (Loose) | `===` (Strict) |
|-------------|----------------|
| `5 == "5"` → `true` | `5 === "5"` → `false` |
| Compares value only | Compares value AND type (Recommended) |

---

## 12. Conditional Statements

### if
```javascript
if (marks >= 50) {
    document.write("Pass");
}
```

### if...else
```javascript
if (marks >= 50) {
    document.write("Pass");
} else {
    document.write("Fail");
}
```

### else if
```javascript
if (marks >= 90)      { grade = "A+"; }
else if (marks >= 75) { grade = "A";  }
else if (marks >= 60) { grade = "B";  }
else                  { grade = "C";  }
```

### switch
```javascript
switch (day) {
    case 1:  document.write("Monday");  break;
    case 2:  document.write("Tuesday"); break;
    default: document.write("Invalid");
}
```
- `break` stops fall-through to next case
- `default` = when no case matches

---

## 13. Loops

### for loop (when count is known)
```javascript
for (let i = 1; i <= 5; i++) {
    document.write(i + "<br>");
}
```

### while loop (condition-based)
```javascript
let i = 1;
while (i <= 5) {
    document.write(i + "<br>");
    i++;
}
```

### do...while loop (runs **at least once**)
```javascript
let i = 1;
do {
    document.write(i + "<br>");
    i++;
} while (i <= 5);
```

### for...of (iterate array values)
```javascript
let fruits = ["Apple", "Mango", "Banana"];
for (let fruit of fruits) {
    console.log(fruit);
}
```

### for...in (iterate object keys)
```javascript
let student = { name: "Rahul", age: 20 };
for (let key in student) {
    console.log(key + ": " + student[key]);
}
```

---

## 14. Functions

### Regular Function
```javascript
function greet(name) {
    return "Hello " + name;
}
greet("Rahul");  // "Hello Rahul"
```

### Arrow Function (Modern (Recommended))
```javascript
const greet = (name) => {
    return "Hello " + name;
};

// Short form (one expression)
const greet = (name) => "Hello " + name;

// No parameters
const welcome = () => "Welcome!";
```

### Key: Regular vs Arrow Function
| Regular | Arrow |
|---------|-------|
| `function name() { }` | `const name = () => { }` |
| Has its own `this` | Inherits `this` from parent |
| Longer syntax | Shorter, modern syntax (Recommended) |

---

## 15. Scope

| Type | Where Declared | Accessible |
|------|---------------|------------|
| **Global** | Outside all functions | Everywhere in script |
| **Local** | Inside a function | Only within that function |
| **Block** | Inside `{ }` (with `let`/`const`) | Only within that block |

```javascript
let college = "ABC";           // Global

function show() {
    let dept = "CSE";          // Local
    console.log(college);      // [Valid] Can access global
    console.log(dept);         // [Valid] Can access local
}

console.log(college);          // [Valid] Global accessible
// console.log(dept);          // [Error] Error! Local not accessible outside
```

---

## 16. Arrays

```javascript
let departments = ["CSE", "AI", "IT"];

departments[0];              // "CSE" (index starts at 0)
departments.length;          // 3
departments.push("ECE");     // Add to end
departments.pop();           // Remove from end
departments.indexOf("AI");   // 1
departments.includes("IT");  // true
```

| Method | Purpose |
|--------|---------|
| `push(val)` | Add to end |
| `pop()` | Remove from end |
| `shift()` | Remove from start |
| `unshift(val)` | Add to start |
| `indexOf(val)` | Find index of value |
| `includes(val)` | Check if value exists |
| `splice(i, n)` | Remove n items from index i |
| `slice(start, end)` | Extract sub-array |
| `forEach(fn)` | Loop through each element |
| `map(fn)` | Transform each element |
| `filter(fn)` | Filter elements by condition |

---

## 17. Objects

```javascript
let student = {
    name: "Ananya",
    age: 18,
    department: "CSE",
    greet: function() {
        return "Hello " + this.name;
    }
};

student.name;                // "Ananya"
student["age"];              // 18
student.greet();             // "Hello Ananya"
```

---

## 18. DOM (Document Object Model)

> DOM = Browser creates a tree of objects from HTML; JS can access/modify them

### Common DOM Methods
```javascript
document.getElementById("id");              // Select by ID
document.getElementsByClassName("class");    // Select by class
document.getElementsByTagName("p");          // Select by tag
document.querySelector(".class");            // First match (CSS selector)
document.querySelectorAll("p");              // All matches
```

### Modifying Elements
```javascript
document.getElementById("msg").innerHTML = "New Text";    // Change content
document.getElementById("msg").style.color = "red";       // Change style
document.getElementById("msg").setAttribute("class","x"); // Set attribute
```

### Creating Elements
```javascript
let p = document.createElement("p");
p.innerHTML = "New paragraph";
document.body.appendChild(p);
```

---

## 19. Events

| Event | When It Fires |
|-------|--------------|
| `onclick` | Element is clicked |
| `ondblclick` | Element is double-clicked |
| `onmouseover` | Mouse enters element |
| `onmouseout` | Mouse leaves element |
| `onchange` | Value of input changes |
| `onkeyup` | Key is released |
| `onkeydown` | Key is pressed |
| `onsubmit` | Form is submitted |
| `onload` | Page finishes loading |
| `onfocus` | Element gets focus |
| `onblur` | Element loses focus |

### Inline Event
```html
<button onclick="alert('Hello!')">Click Me</button>
```

### addEventListener (Modern (Recommended))
```javascript
document.getElementById("btn").addEventListener("click", function() {
    alert("Button clicked!");
});
```

---

## Quick Recall — Exam Favorites

1. **CSS stands for?** → Cascading Style Sheets
2. **3 types of CSS?** → Inline, Internal, External
3. **CSS Priority?** → Inline > Internal > External > Browser Default
4. **Box Model components?** → Content → Padding → Border → Margin
5. **Padding vs Margin?** → Padding = inside border, Margin = outside border
6. **`.notice` selects?** → Class selector | `#title` selects? → ID selector
7. **`*` selector?** → Universal (all elements)
8. **`:hover` is a?** → Pseudo-class | `::first-letter` is a? → Pseudo-element
9. **JS is a?** → Interpreted scripting language
10. **`let` vs `const`?** → let = reassignable, const = cannot reassign
11. **`==` vs `===`?** → `==` checks value, `===` checks value + type
12. **DOM stands for?** → Document Object Model
13. **`getElementById()`** → Selects element by its `id` attribute
14. **Arrow function syntax?** → `const fn = () => { }`
15. **`onclick` is a?** → JavaScript event
