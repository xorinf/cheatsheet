# Angular Concepts & Single Page Application (SPA)

## What is in this folder?
This folder gives you **BOTH** the official Angular TypeScript source files AND an interactive browser simulator that runs right away without installing anything!

### 1. Official Angular Source Files (for your assignment or CLI):
- `grocery.service.ts`: Defines `@Injectable({ providedIn: 'root' })` service with data operations.
- `grocery-list.component.ts`: Defines `@Component`, DI in constructor, lifecycle `ngOnInit`, and event handlers.
- `grocery-list.component.html`: Official Angular template demonstrating:
  - Interpolation: `{{ appTitle }}`
  - Property Binding: `[disabled]="condition"`
  - Event Binding: `(click)="onAddItem()"`
  - Two-Way Binding: `[(ngModel)]="searchTerm"`
  - Directives: `*ngIf`, `*ngFor="let item of items; let i = index"`
  - Pipes: `| uppercase`, `| currency:'INR'`, `| date`

### 2. Live Interactive Simulator:
- Double click `index.html` to run in any browser and see Angular's reactive bindings, change detection, and directives in action live on your screen!
