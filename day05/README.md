📑 Agenda for Day 05: Playwright Locators

📌 Playwright Locators (CSS & XPath)
# CSS Selectors
- *Universal Selector (*)*: Selects all elements within a page.

- *Class Selector (.className)*: Selects all elements with a specific class.

- *ID Selector (#idName)*: Selects a single element with a specific ID.

## Combinators
- *Descendant Selector (space)*: Selects all elements that are descendants of a specified element.

- *Child Selector (>)*: Selects all elements that are direct children of a specified element.

- *Adjacent Sibling Selector (+)*: Selects all elements that are immediately preceded by a specific element.

- *General Sibling Selector (~)*: Selects all elements that are siblings of a specific element.

## Attribute Selectors
- *Presence and Value Attribute Selectors:*

    - [attribute]: Selects elements with a specific attribute.
    >> Example: a[target] targets all <a> elements with a "target" attribute.
    - [attribute="value"]: Selects elements with a specific attribute and value.
    >> Example: input[type="text"] targets all <input> elements with a type of "text".

- *Substring Value Attribute Selector:* 

    - [attribute*="value"]: Selects elements with an attribute value containing a specified substring.
    >> Example: a[href*="example"] targets all <a> elements whose href attribute contains "example".

# Playwright `getBy` Locators
Playwright provides a set of `getBy` methods to locate elements in the DOM, which can be more expressive and powerful compared to traditional CSS selectors. These methods are used to interact with web elements in a more human-readable way.

## Commonly Used `getBy` Locators

1. **`getByText`**: Selects elements containing specific text.
   - Example: `page.getByText('Submit')` selects an element with the text "Submit".

2. **`getByRole`**: Selects elements based on their ARIA roles.
   - Example: `page.getByRole('button', { name: 'Login' })` selects a button element with the accessible name "Login".

3. **`getByLabel`**: Selects form elements associated with a specific label.
   - Example: `page.getByLabel('Username')` selects the input field associated with the label "Username".

4. **`getByPlaceholder`**: Selects input elements based on their placeholder attribute.
   - Example: `page.getByPlaceholder('Enter your password')` selects an input field with the placeholder "Enter your password".

5. **`getByAltText`**: Selects images and other elements with an alt attribute.
   - Example: `page.getByAltText('Product image')` selects an image with the alt text "Product image".

6. **`getByTestId`**: Selects elements with a specific data-testid attribute.
   - Example: `page.getByTestId('submit-button')` selects an element with `data-testid="submit-button"`.

### Usage Example
```javascript

test('Test to login', async ({page}) => {
  
  await page.goto('https://login.amazon.in');
  // Click on a button with the text 'Submit'
  await page.getByText('Submit').click();
});
```

## XPath
XPath is a query language used to select nodes from an XML document, and it is also commonly used to locate elements within HTML documents.

### Basic Syntax and Examples

1. **Absolute Path**: Selects nodes with a full path.
   - Example: `/html/body/div` selects the `div` element within the body.

2. **Relative Path**: Selects nodes relative to the current node.
   - Example: `//div[@class='example']` selects all `div` elements with the class "example".

3. **Attribute Selectors**:
   - `[attribute='value']`: Selects elements with a specific attribute value.
   - Example: `//input[@type='text']` selects all input elements with type "text".

4. **Contains Function**: Selects elements containing a specified text.
   - Example: `//a[contains(text(), 'example')]` selects all anchor (`<a>`) elements containing the text "example".

5. **Indexing**: Selects elements by their index.
   - Example: `(//div)[1]` selects the first `div` element.

### Usage Example in Playwright
Playwright supports using XPath to locate elements. Here's how you can use it:

```javascript

test('Title of the page', async ({page}) => {

  await page.goto('https://login.amazon.in');

  // Click on the first link that contains the text 'More'
  await page.locator('//a[contains(text(), "More")]').click();

});
```