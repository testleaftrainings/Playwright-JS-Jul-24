# OOPs for Playwright

This README covers key TypeScript concepts, providing explanations and examples for each topic with a focus on web automation testing.

## Table of Contents

1. [Class](#class)
2. [Object](#object)
3. [Methods](#methods)
4. [Difference between Method and Function](#difference-between-method-and-function)
5. [Access Modifiers](#access-modifiers)
6. [Inheritance and Types](#inheritance-and-types)
7. [Encapsulation](#encapsulation)
8. [Polymorphism](#polymorphism)
9. [Abstraction](#abstraction)
10. [OOP Principles Comparison Table](#oop-principles-comparison-table)

## Class

A class in TypeScript is a blueprint for creating objects with predefined properties and methods. It encapsulates data and behavior, promoting reusability and modularity.

## Object

An object in TypeScript is an instance of a class. It holds data (properties) and functionalities (methods) defined by its class.

## Methods

Methods are functions defined inside a class, used to perform operations on the class's properties.

## Difference between Method and Function

- **Method**: A function associated with an object or class.
- **Function**: A standalone block of code designed to perform a specific task.

### Example:

```typescript
// Function
function navigateTo(url: string, page: Page) {
    return page.goto(url);
}

// Method
class Navigation {
    page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    navigateTo(url: string) {
        return this.page.goto(url);
    }
}

await navigateTo('http://example.com', page);
const navigation = new Navigation(page);
await navigation.navigateTo('http://example.com');
```

## Access Modifiers

Access modifiers control the visibility of class members. TypeScript supports `public`, `private`, and `protected`.

- **public**: Accessible from anywhere.
- **private**: Accessible only within the class.
- **protected**: Accessible within the class and its subclasses.

## Inheritance and Types

Inheritance allows a class to inherit properties and methods from another class. TypeScript supports single inheritance through class extension and multiple inheritance through interfaces.

### Example:

```typescript
class BasePage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    navigateTo(url: string) {
        return this.page.goto(url);
    }
}

class LoginPage extends BasePage {
    login(username: string, password: string) {
        this.page.fill('#username', username);
        this.page.fill('#password', password);
        this.page.click('#login');
    }
}
```

## Encapsulation

Encapsulation is the concept of bundling data (properties) and methods that operate on the data within a single unit (class) and restricting access to some of the object's components.

### Example:

```typescript
class User {
    private username: string;
    private password: string;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }

    getUsername(): string {
        return this.username;
    }

    setUsername(newUsername: string): void {
        this.username = newUsername;
    }

    private encryptPassword(password: string): string {
        // Encrypt the password
        return `encrypted-${password}`;
    }
}
```

## Polymorphism

Polymorphism allows objects of different classes to be treated as objects of a common superclass. It enables a single interface to be used for a general class of actions.

### Example:

```typescript
abstract class PageComponent {
    abstract render(): void;
}

class Button extends PageComponent {
    render() {
        console.log("Render a button");
    }
}

class TextField extends PageComponent {
    render() {
        console.log("Render a text field");
    }
}

function renderComponent(component: PageComponent) {
    component.render();
}

const button = new Button();
const textField = new TextField();

renderComponent(button);      // Output: Render a button
renderComponent(textField);   // Output: Render a text field
```

## Abstraction

Abstraction is the concept of hiding the complex implementation details and showing only the essential features of an object.

### Example:

```typescript
abstract class Authentication {
    abstract login(username: string, password: string): void;
    abstract logout(): void;
}

class SimpleAuth extends Authentication {
    login(username: string, password: string) {
        console.log(`Logging in with ${username}`);
    }

    logout() {
        console.log("Logging out");
    }
}
```

## OOP Principles Comparison Table

| Principle      | Description                                                                 | Example                                                                                   | Benefits                                            |
|----------------|-----------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|-----------------------------------------------------|
| **Encapsulation** | Bundles data and methods in a single unit, restricting access to some components | `private` and `public` modifiers in classes                                                 | Improves security and data integrity                 |
| **Polymorphism**  | Allows objects to be treated as instances of their superclass            | Different classes implementing the same abstract method                                   | Promotes flexibility and code reusability            |
| **Abstraction**   | Hides complex implementation details, exposing only the necessary parts  | Abstract classes and methods                                                               | Simplifies interaction with complex systems          |
| **Inheritance**   | Enables a new class to inherit properties and methods from an existing class | `extends` keyword to create a subclass                                                     | Facilitates code reuse and hierarchical classification|

