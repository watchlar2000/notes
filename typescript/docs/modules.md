# TypeScript Modules: ES Modules vs CommonJS

## ES Modules (ESM)

```typescript
// Import named exports
import { Blueberry, Raspberry } from './berries';

// Import default export
import Kiwi from './kiwi';

// Named export
export function makeFruitSalad() {}

// Default export
export default class FruitBasket {}

// Re-export entire module as a single namespace
export * as berries from './berries';

// Re-export specific exports from another module
export { lemon, lime } from './citrus';
```

## CommonJS Modules (CJS)

```typescript
// Importing
const { value, doSomething } = require('./module');

// Defining exports
const value = 42;
function doSomething() {}
module.exports = { value, doSomething };

// Alternative export syntax
exports.value = value;
exports.doSomething = doSomething;
```

## Default Exports Comparison

### ES Modules

```typescript
// Default export in ESM
export default function () {}
```

### CommonJS

```typescript
// Equivalent in CJS
module.exports = function () {};

// NOT equivalent (would be imported differently!)
module.exports.default = function () {};
```

## Dynamic Imports

### ES Modules

```typescript
// ESM - returns a Promise
const module = await import('./module');
```

### CommonJS

```typescript
// CJS - synchronous
const module = require('./module');
```
