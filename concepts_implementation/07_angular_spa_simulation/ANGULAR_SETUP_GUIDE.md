# Complete Angular Setup, Development & Execution Guide

This guide takes you step-by-step from zero to creating, writing, and running an Angular project on your computer.

---

## Step 1: Check Prerequisites (Node.js & npm)

Angular requires **Node.js** and **npm** (Node Package Manager).

Open your Terminal (macOS/Linux) or Command Prompt / PowerShell (Windows) and run:

```bash
# Check Node.js version (Recommended: Node 18 or higher)
node -v

# Check npm version
npm -v
```

> **If Node.js is not installed:**
> Download the LTS (Long Term Support) installer from [nodejs.org](https://nodejs.org/) and install it.

---

## Step 2: Install Angular CLI Globally

The **Angular CLI** (Command Line Interface) is the official tool used to create, build, and run Angular apps.

Run this command in your terminal:

```bash
npm install -g @angular/cli
```

Verify that it was installed correctly:

```bash
ng version
```

---

## Step 3: Create a New Angular Project

Choose a folder where you want your project to live, then run `ng new`:

```bash
ng new grocery-app --routing=false --style=css
```

### What the CLI will ask:
1. **"Would you like to enable Server-Side Rendering (SSR)?"** -> Choose **No** (press `N` or enter) for a standard client-side SPA.
2. **"Which stylesheet format would you like to use?"** -> Select **CSS**.

The CLI will automatically create the project folder and download all required npm packages.

---

## Step 4: Navigate into the Project & Start the Server

```bash
# Move into project directory
cd grocery-app

# Launch local development server and open browser automatically
ng serve --open
```

> Shortcut: `ng s -o`

Your browser will automatically open and navigate to:
**`http://localhost:4200`**

You should see the default Angular welcome page.

---

## Step 5: Understand the Project Folder Structure

Inside `grocery-app/src/app/`, you will see:
- `app.component.ts` — The main component's TypeScript logic
- `app.component.html` — The main component's HTML view
- `app.component.css` — The component's styles
- `app.module.ts` — The root module configuring imports, declarations, and bootstrap

---

## Step 6: Configure `app.module.ts` (CRITICAL STEP)

To use **Two-Way Binding `[(ngModel)]`** and **HTTP calls**, you must import `FormsModule` and `HttpClientModule` in `src/app/app.module.ts`:

Open `src/app/app.module.ts` and update it:

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Required for [(ngModel)]
import { HttpClientModule } from '@angular/common/http'; // Required for API calls

import { AppComponent } from './app.component';
import { GroceryListComponent } from './grocery-list/grocery-list.component';

@NgModule({
  declarations: [
    AppComponent,
    GroceryListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,          // Add here
    HttpClientModule      // Add here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

---

## Step 7: Generate Components & Services via CLI

The Angular CLI allows you to scaffold files with one command:

```bash
# 1. Generate a Component named grocery-list
ng generate component grocery-list
# Shortcut: ng g c grocery-list

# 2. Generate a Service named grocery
ng generate service grocery
# Shortcut: ng g s grocery

# 3. Generate a Pipe named discount
ng generate pipe discount
# Shortcut: ng g p discount
```

---

## Step 8: Put Your Code in Place

Copy the code from our `concepts_implementation/07_angular_spa_simulation/` files into your project:

### 1. `src/app/grocery.service.ts`:
Copy the content of `concepts_implementation/07_angular_spa_simulation/grocery.service.ts`.

### 2. `src/app/grocery-list/grocery-list.component.ts`:
Copy the content of `concepts_implementation/07_angular_spa_simulation/grocery-list.component.ts`.

### 3. `src/app/grocery-list/grocery-list.component.html`:
Copy the content of `concepts_implementation/07_angular_spa_simulation/grocery-list.component.html`.

### 4. `src/app/grocery-list/grocery-list.component.css`:
Copy the styles from `concepts_implementation/07_angular_spa_simulation/style.css`.

### 5. Render it in `src/app/app.component.html`:
Replace everything inside `src/app/app.component.html` with just this single line:

```html
<app-grocery-list></app-grocery-list>
```

Save the files. The browser at `http://localhost:4200` will **auto-refresh** and show your working Angular Grocery Application!

---

## Step 9: Common Errors & How to Fix Them

### Error 1: `Can't bind to 'ngModel' since it isn't a known property of 'input'`
- **Cause**: `FormsModule` is missing.
- **Fix**: Open `app.module.ts`, add `import { FormsModule } from '@angular/forms';`, and include `FormsModule` in the `imports: [...]` array.

### Error 2: `Port 4200 is already in use`
- **Cause**: Another server is running on port 4200.
- **Fix**: Run on a different port:
  ```bash
  ng serve --port 4300 --open
  ```

### Error 3: Windows PowerShell `ng : File cannot be loaded because running scripts is disabled`
- **Cause**: Windows Execution Policy restrictions.
- **Fix**: Open PowerShell as Administrator and run:
  ```powershell
  Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
  ```

---

## Step 10: Building for Production

When you are ready to deploy:

```bash
ng build
```

This compiles your TypeScript into optimized, minified HTML/CSS/JS files inside the `dist/` directory.
