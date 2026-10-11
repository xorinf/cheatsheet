# TypeScript OOP & Generics Implementation

## What is in this folder?
1. `models.ts`: Full TypeScript interface definitions, duck typing, classes with access modifiers (`public`, `private`, `protected`), constructor parameter properties, inheritance (`extends`, `super()`), and generic classes `<T extends HasId>`.
2. `app.ts`: Main TypeScript execution file consuming the models.
3. `index.html`: Interactive browser playground to run and test TypeScript concepts with zero setup.
4. `script.js` & `style.css`: Browser runtime styling and execution.

## How to compile and run via Terminal:
```bash
# 1. Install TypeScript globally (if not already installed)
npm install -g typescript

# 2. Compile TypeScript files to JavaScript
tsc models.ts
tsc app.ts

# 3. Run the compiled JavaScript file with Node.js
node app.js
```
