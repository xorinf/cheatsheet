# UNIT I — HTML CHEATSHEET

---

## 1. Internet & WWW

| Term | One-Liner |
|------|-----------|
| **Internet** | Global system of interconnected computer networks using TCP/IP protocols |
| **WWW** | Collection of interconnected web pages accessed via browsers over the Internet |
| **Web Page** | An HTML document displayed by a web browser |
| **Website** | Collection of related web pages connected through hyperlinks |
| **Web Browser** | Software to access and display web pages (Chrome, Firefox, Edge, Safari) |
| **Web Server** | Computer that stores web pages and delivers them on request (Apache, Nginx, IIS) |
| **URL** | Uniform Resource Locator — address of a web page (e.g., `https://www.google.com`) |
| **HTTP** | HyperText Transfer Protocol — transfers web pages between browser and server |
| **Hyperlink** | Clickable element that connects one web page to another |
| **Tim Berners-Lee** | Invented WWW in 1989 at CERN; introduced HTML, HTTP, URL |
| **ARPANET** | First network (1969) by US Department of Defense → led to the Internet |

### Key: Internet vs WWW
| Internet | WWW |
|----------|-----|
| Global network (infrastructure) | Information system (service) |
| Provides connectivity | Provides information |
| Uses TCP/IP | Uses HTTP |
| Can exist without WWW | **Cannot** exist without Internet |

### URL Components: `https://www.google.com`
- `https` → Protocol
- `www` → Subdomain
- `google` → Domain Name
- `.com` → Domain Extension

### WWW Architecture → **Client-Server Model**
```
User → Browser → Internet → Web Server → Response → Browser → Display
```

---

## 2. Evolution of HTML

| Version | Year | Major Feature |
|---------|------|---------------|
| HTML 1.0 | 1991 | Basic pages (headings, paragraphs, links) |
| HTML 2.0 | 1995 | **Forms** |
| HTML 3.2 | 1997 | **Tables, Images** |
| HTML 4.01 | 1999 | **CSS support**, scripting |
| XHTML | 2000 | **Strict rules** (all tags closed, lowercase) |
| HTML5 | 2014 | **Multimedia** (audio, video), semantic elements, canvas, local storage |

- **HTML is NOT a programming language** — it's a **markup language** (no loops, no calculations)
- HTML was developed by **Tim Berners-Lee** in **1991**
- XHTML enforced strict rules but was too restrictive → HTML5 became more popular

---

## 3. HTML Basics

| Concept | One-Liner |
|---------|-----------|
| **HTML** | HyperText Markup Language — standard language to create web pages |
| **HyperText** | Text containing links to other documents |
| **Markup** | Adding tags/instructions to text to describe its structure |
| **Tag** | Predefined keyword in angle brackets `<tagname>` that instructs the browser |
| **Element** | Complete unit: opening tag + content + closing tag → `<p>Hello</p>` |
| **Attribute** | Additional info about an element → `<img src="pic.jpg" alt="photo">` |

### HTML Document Structure
```html
<!DOCTYPE html>         <!-- Declares HTML5 -->
<html>                  <!-- Root element -->
  <head>                <!-- Metadata section -->
    <title>Page Title</title>
  </head>
  <body>                <!-- Visible content -->
    <h1>Hello</h1>
    <p>Paragraph</p>
  </body>
</html>
```

---

## 4. HTML Elements

| Type | Description | Example |
|------|-------------|---------|
| **Container** | Has opening + closing tag with content | `<p>Text</p>` |
| **Empty (Void)** | No closing tag, performs a function | `<br>`, `<hr>`, `<img>` |
| **Nested** | Element inside another element | `<body><h1>Hi</h1></body>` |
| **Block-level** | Starts on new line, takes full width | `<h1>`, `<p>`, `<div>`, `<table>` |
| **Inline** | Takes only needed space, stays on same line | `<span>`, `<a>`, `<img>`, `<strong>` |

---

## 5. HTML Tags & Attributes

### Common Tags
| Tag | Purpose |
|-----|---------|
| `<h1>` to `<h6>` | Headings (h1 = biggest, h6 = smallest) |
| `<p>` | Paragraph |
| `<br>` | Line break (empty tag) |
| `<hr>` | Horizontal line (empty tag) |
| `<a href="url">` | Hyperlink |
| `<img src="file" alt="text">` | Image (empty tag) |
| `<div>` | Block-level container for grouping |
| `<span>` | Inline container for styling small parts |
| `<b>` / `<strong>` | Bold text |
| `<i>` / `<em>` | Italic text |

### Common Attributes
| Attribute | Purpose | Example |
|-----------|---------|---------|
| `href` | Link destination | `<a href="page.html">` |
| `src` | Source file path | `<img src="logo.png">` |
| `alt` | Alternative text for images | `<img alt="College Logo">` |
| `id` | Unique identifier (one per page) | `<p id="intro">` |
| `class` | Group multiple elements | `<p class="notice">` |
| `style` | Inline CSS | `<h1 style="color:blue;">` |
| `target` | Where to open link | `<a target="_blank">` (new tab) |

---

## 6. Headings & Paragraphs

```html
<h1>Main Heading (Largest)</h1>
<h2>Sub-heading</h2>
<h3>Sub-sub-heading</h3>
<!-- h4, h5, h6 → progressively smaller -->
<p>This is a paragraph. It starts on a new line with spacing.</p>
```
- `<h1>` = most important heading (use only ONE per page for SEO)
- Headings → for titles; Paragraphs → for detailed content

---

## 7. Hyperlinks

```html
<!-- Internal Link -->
<a href="about.html">About Us</a>

<!-- External Link -->
<a href="https://www.google.com">Google</a>

<!-- Email Link -->
<a href="mailto:info@college.edu">Email Us</a>

<!-- Open in New Tab -->
<a href="page.html" target="_blank">Open New Tab</a>
```
- `<a>` = **anchor** element
- `href` = destination address

---

## 8. Lists

### Ordered List (numbered)
```html
<ol>
  <li>Step 1 - Register</li>
  <li>Step 2 - Upload Documents</li>
  <li>Step 3 - Pay Fees</li>
</ol>
```

### Unordered List (bulleted)
```html
<ul>
  <li>Computer Science</li>
  <li>Artificial Intelligence</li>
  <li>Data Science</li>
</ul>
```

### Description List
```html
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
</dl>
```

| List Type | Tag | When to Use |
|-----------|-----|-------------|
| Ordered | `<ol>` + `<li>` | Sequence matters (steps, rankings) |
| Unordered | `<ul>` + `<li>` | No specific order (features, items) |
| Description | `<dl>` + `<dt>` + `<dd>` | Term + definition pairs |

---

## 9. Tables

```html
<table border="1">
  <tr>
    <th>Name</th>          <!-- Table Heading (bold, centered) -->
    <th>Course</th>
  </tr>
  <tr>
    <td>Rahul</td>         <!-- Table Data -->
    <td>B.Tech AI</td>
  </tr>
  <tr>
    <td>Ananya</td>
    <td>B.Tech CSE</td>
  </tr>
</table>
```

| Tag | Purpose |
|-----|---------|
| `<table>` | Creates the table |
| `<tr>` | Table Row |
| `<th>` | Table Heading (bold + center by default) |
| `<td>` | Table Data (cell) |
| `colspan="2"` | Merge 2 columns |
| `rowspan="2"` | Merge 2 rows |

---

## 10. Forms

```html
<form action="submit.html" method="POST">
  Name: <input type="text" name="name"><br>
  Password: <input type="password" name="pwd"><br>
  
  Gender:
  <input type="radio" name="gender" value="M"> Male
  <input type="radio" name="gender" value="F"> Female<br>
  
  Hobbies:
  <input type="checkbox" name="hobby" value="sports"> Sports
  <input type="checkbox" name="hobby" value="music"> Music<br>
  
  Course:
  <select name="course">
    <option>B.Tech AI</option>
    <option>B.Tech CSE</option>
  </select><br>
  
  Message: <textarea name="msg" rows="4" cols="30"></textarea><br>
  
  <input type="submit" value="Submit">
  <input type="reset" value="Reset">
</form>
```

| Control | Tag | Use Case |
|---------|-----|----------|
| Text Box | `<input type="text">` | Single-line text input |
| Password | `<input type="password">` | Hidden characters |
| Radio | `<input type="radio" name="group">` | Select ONE from group |
| Checkbox | `<input type="checkbox">` | Select MULTIPLE options |
| Dropdown | `<select>` + `<option>` | Pick from predefined list |
| Text Area | `<textarea>` | Multi-line text |
| Submit | `<input type="submit">` | Send form data |
| Reset | `<input type="reset">` | Clear all fields |
| File | `<input type="file">` | Upload files |
| Email | `<input type="email">` | Email validation |
| Number | `<input type="number">` | Numeric input |
| Date | `<input type="date">` | Date picker |

### Key Attributes
- `action` → URL where form data is sent
- `method` → `GET` (data in URL) or `POST` (data in body)
- `name` → identifies the control (required for radio grouping)
- `value` → default/submitted value
- `required` → makes field mandatory (HTML5)
- `placeholder` → hint text inside input

### Key: Radio vs Checkbox
| Radio | Checkbox |
|-------|----------|
| Select **only ONE** | Select **one or more** |
| Same `name` for group | Independent `name` allowed |

---

## 11. Semantic HTML Elements (HTML5)

| Tag | Purpose |
|-----|---------|
| `<header>` | Page/section header (logo, nav) |
| `<nav>` | Navigation links |
| `<main>` | Main content of the page |
| `<section>` | Thematic grouping of content |
| `<article>` | Self-contained content (blog post, news) |
| `<aside>` | Sidebar content |
| `<footer>` | Page/section footer |
| `<figure>` | Image/diagram with caption |
| `<figcaption>` | Caption for `<figure>` |

- **Non-semantic**: `<div>`, `<span>` → no meaning about content
- **Semantic**: `<header>`, `<nav>`, `<article>` → clearly describe purpose
- Semantic tags improve: **readability, accessibility, SEO**

---

## 12. `<div>` and `<span>`

| Tag | Type | Purpose |
|-----|------|---------|
| `<div>` | **Block-level** | Groups block elements; starts on new line |
| `<span>` | **Inline** | Groups inline content; stays on same line |

```html
<div style="background:lightblue;">
  <h2>Department Info</h2>
  <p>Welcome to <span style="color:red;">AI Department</span></p>
</div>
```

---

## 13. Multimedia (HTML5)

### Video
```html
<video width="400" controls>
  <source src="lecture.mp4" type="video/mp4">
</video>
```

### Audio
```html
<audio controls>
  <source src="song.mp3" type="audio/mpeg">
</audio>
```

| Attribute | Purpose |
|-----------|---------|
| `controls` | Show play/pause buttons |
| `autoplay` | Start playing automatically |
| `loop` | Repeat playback |
| `muted` | Start muted |

### HTML5 Key Features
- `<video>`, `<audio>` → no plugins needed (replaced Flash)
- `<canvas>` → drawing graphics via JavaScript
- Local Storage → store data in browser
- Geolocation API → get user's location
- Semantic elements → `<header>`, `<nav>`, etc.

---

## Quick Recall — Exam Favorites

1. **Who created HTML?** → Tim Berners-Lee (1991)
2. **Who invented WWW?** → Tim Berners-Lee (1989, CERN)
3. **HTML is a ____?** → Markup Language (NOT programming language)
4. **Which version introduced forms?** → HTML 2.0
5. **Which version introduced tables?** → HTML 3.2
6. **Which version supports multimedia?** → HTML5
7. **XHTML enforces?** → Strict rules (lowercase tags, proper closing)
8. **`<br>` is a?** → Empty/void element (no closing tag)
9. **Radio vs Checkbox?** → Radio = one choice, Checkbox = multiple
10. **`<ol>` vs `<ul>`?** → Ordered = numbered, Unordered = bullets
11. **`<div>` vs `<span>`?** → div = block, span = inline
12. **action attribute?** → Specifies where form data is sent
13. **Internet vs WWW?** → Internet = infrastructure, WWW = service on it
