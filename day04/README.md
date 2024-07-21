📑 _Agenda for Day 04: Dig Deeper into Playwright_

📌 Key Browser, Context, Page
📌 Code your basic first test script
📌 Understanding DOM
📌 Locators / Selectors [CSS & Playwright getBys]
📌 Playwright Config file Walkthrough

## Understanding Browser, Context, and Pages

In Playwright, automation is structured around three key objects: Browser, Context, and Pages, each serving distinct roles in the automation workflow.

## Browser

Represents an instance of a web browser. Playwright can control multiple Browser instances simultaneously, with each operating in its isolated environment.

## Context
A Browser Context simulates an incognito session, allowing for parallel tests in a single Browser instance without shared cookies, localStorage, or session data.

## Pages

A Page object represents a single browser tab or window, serving as the primary interface for web content interaction, including navigation and element manipulation.

## CSS Selectors
- *Universal Selector (*)*: Selects all elements within a page.

- *Class Selector (.className)*: Selects all elements with a specific class.

- *ID Selector (#idName)*: Selects a single element with a specific ID.

## Attribute Selectors
- *Presence and Value Attribute Selectors:*

    - [attribute]: Selects elements with a specific attribute.
    >> Example: a[target] targets all <a> elements with a "target" attribute.
    - [attribute="value"]: Selects elements with a specific attribute and value.
    >> Example: input[type="text"] targets all <input> elements with a type of "text".

- *Substring Value Attribute Selector:* 

    - [attribute*="value"]: Selects elements with an attribute value containing a specified substring.
    >> Example: a[href*="example"] targets all <a> elements whose href attribute contains "example".


## Fixtures

Fixtures in Playwright provide a powerful way to setup and tear down resources needed for your tests, helping you manage common objects like browser instances, pages, and custom configurations in a reusable manner.

### What is a Fixture?

A fixture is essentially a piece of code that can run before and after each test, or a suite of tests, to set up the environment in which the tests will run. This can include creating a new browser instance, a new page, logging into an application.

### The Page Fixture

One of the most commonly used fixtures in Playwright tests is the `page` fixture. It provides a fresh browser page for each test, ensuring test isolation and reducing the likelihood of side effects between tests.

#### Usage

When using Playwright Test, the `page` fixture is automatically available in each test, and you do not need to explicitly declare it. Here’s how you can use it:


import { test, expect } from '@playwright/test';

test("Learning fixtures", async ({page}) =>{

    await page.goto("https://login.salesforce.com/");
    await page.fill("#username", "ranjini.r@testleaf.com");
    await page.fill("#password", "Testleaf$4321");
    await page.click("#Login");

});
