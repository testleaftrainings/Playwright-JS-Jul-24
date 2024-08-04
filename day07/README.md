
# TypeScript Essentials

This document provides an overview of several core TypeScript concepts, including type inference, explicit types, annotations, aliases, assertions, enums, and parameter handling in functions.

## 1. Type Inference

TypeScript is designed with type inference capabilities, which means that you often don't need to explicitly specify a type because TypeScript can infer it based on the value assigned to a variable.

```typescript
let example = "Hello, TypeScript!"; // inferred as string
```

## 2. Explicit Types

You can explicitly declare the type of a variable, function return type, or the type of parameters directly in the code to ensure the values conform to expectations.

```typescript
let count: number;
count = 123; // only numbers can be assigned
```

## 3. Type Annotations

Type annotations in TypeScript are used to explicitly specify the type of variables, function parameters, and return types.

```typescript
function displayMessage(name: string): string {
    return `Hello, ${name}!`;
}
```

## 4. Type Aliases

Type aliases allow you to create a new name for a type. Type aliases are sometimes equivalent to interfaces, but can name primitives and unions.
```typescript
type UserID = string | number;
let userIdentifier: UserID = "abc123";
```

## 5. Type Assertion

Type assertion is similar to type casting in other languages. It is a way to tell the TypeScript compiler about the type of a variable so you can access the specific properties of that type.

```typescript
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
```

## 6. Enum and Types

Enums allow you to define a set of named constants, either numeric or string-based. They can help in managing sets of related constants and improve the readability of your code.

```typescript
enum TestStatus {
    Pass = 1,
    Fail,
    Skip,
}
```

## 7. Optional & Default Parameters

Functions in TypeScript can define parameters that are optional or have default values, enhancing function flexibility and providing default functionality.

```typescript
function buildName(firstName: string, lastName?: string, middleName = "Smith") {
    if (lastName) return `${firstName} ${middleName} ${lastName}`;
    return `${firstName} ${middleName}`;
}
```

