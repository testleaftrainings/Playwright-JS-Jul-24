```markdown

## Table of Contents

1. [Anonymous Function](#anonymous-function)
2. [Callback and Callback Hell](#callback-and-callback-hell)
3. [Asynchronous JavaScript](#asynchronous-javascript)
    - [Promises](#promises)
    - [Async/Await](#asyncawait)
4. [Introduction to TypeScript](#introduction-to-typescript)
    - [TypeScript (TS) and TypeScript Compiler (TSC)](#typescript-ts-and-typescript-compiler-tsc)
    - [Installation Commands](#installation-commands)
    - [TypeScript Variable Declaration and Syntax](#typescript-variable-declaration-and-syntax)



## Callback and Callback Hell

A callback is a function passed into another function as an argument to be executed later.

Callback Hell, also known as the pyramid of doom, is a situation where callbacks are nested within other callbacks several levels deep, making the code hard to read and maintain.

## Asynchronous JavaScript

### Promises

A Promise is an object representing the eventual completion or failure of an asynchronous operation.

```javascript
let myPromise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("Data received"), 3000);
});
```

### Async/Await

`async` and `await` are syntactic sugar built on top of promises. They make asynchronous code look and behave a little more like synchronous code.

```javascript
async function fetchData() {
    let data = await fetch('https://api.leaftaps.com/data');
    console.log(data);
}
```

# Introduction to TypeScript

## TypeScript (TS) and TypeScript Compiler (TSC)

TypeScript is a superset of JavaScript that adds static types. To run TypeScript, you need to compile it into JavaScript using the TypeScript Compiler (TSC).

### Installation Commands

Install TypeScript globally via npm:

```bash
npm install -g typescript
```

## TypeScript Variable Declaration and Syntax

Variables in TypeScript can be declared using `let` or `const`, similar to JavaScript.

```typescript
let username: string = "Babu";
```
```