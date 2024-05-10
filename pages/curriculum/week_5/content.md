## Week 5 Content - JavaScript Part 2

### Debugging

#### Log to console

Remember, console.log() is a great way to check out what your code is actually doing and looks like!

- use `console.log()` to debug

```javascript
console.log("hello world");
```

## Functions

Functions in Computer Science are similar to functions in mathematics in that they may take in some value, apply some logic to to it, and may output a result. More specifically, they are a block of _reusable code_ that performs a specific task.

- They require the following:
  - The keyword <b>function</b>
  - A <b>name</b> to identify the function
  - Finally, they optionally can take on input values which are called <b>parameters</b>

In JavaScript, functions are a type of variable. Start by:

1. Declaring the variable
2. Assigning a value

```javascript
const functionName = () => {};
```

Input the values you want manipulated in the parenthesis

```javascript
const functionName = (inputVariable) => {};
```

- These inputVariables are called `parameters`

Use the keyword `return` to signify what you want to output

```javascript
const functionName = (inputVariable) => {
  // output something here
  return outputVariable;
};
```

- Name your function something based on what that function will do
- This will help you in the long run when looking at more complex code!

Let's write a function that will take in two numbers and output the value of those two numbers multiplied together:

```javascript
const multiplyTwoNumbers = (a, b) => {
  return a * b;
};
```

Now that we have written the function, we have to be able to actually use it:

- The way you use it is by calling the function
- Write the function name, and input the variables you want it to use
- You can store the output of the function into a variable or directly call the function. Both will have the same outcome

```javascript
let result = multiplyTwoNumbers(5, 2);
console.log(result);
console.log(multiplyTwoNumbers(5, 2));
```

## Objects

A more complex data type over strings and numbers are <b>objects</b>. Objects allow you to group related data and functionality together, making it easier to organize and manage code.

You declare and assign a value, just like we did previously with variables, but we use what are called curly braces to denote that this is an object

```javascript
let car = {};
console.log(car);
```

### Why Use Objects?

- Objects are useful when you have more complex data
- Often we want data that represents things in the real world
  - For example, like a car
- Cars have different attributes, like: color, type, number of doors, etc.
- We can use objects to describe these attributes using something called `key-value pairs`
- Objects have the flexibility of using multiple `data types`, meaning it can have numbers, strings, and more!
  - They can become very complex because you can even have an object within an object!

```javascript
const car = {
  color: "black",
};
console.log(car);
```

In the example above:

- color is the `key`
- black is the `value`

You can assign multiple key-value pairs to an object

```javascript
const sedan = {
  color: "black",
  make: "lexus",
  year: 2007,
  numberOfDoors: 4,
};
console.log(sedan);
```

- Notice how the `color` and `make` keys are strings and `year` and `numberOfDoors` are numbers values

The examples above simply <b>creates</b> an object called `sedan`. To access the key-value pairs, you must:

- Use the object variable name (in this case sedan) followed by the `.` character and then any existing key name in the object

```javascript
console.log(sedan.color);
console.log(sedan.make);
console.log(sedan.year);
console.log(sedan.numberOfDoors);
```

Lastly, now that we know create objects and access key-value pairs of objects, we should learn how to set and add values to objects after creation

Very similar to how you would as a variable, you can do the same with objects!

```javascript
sedan.color = "Orange";
sedan.year = 2020;
console.log(sedan);
```

- Notice how all other key-value pairs in the sudan object remain the same if they are not modified

To add key-value pairs, "set" a value on a key that doesn't exist in the object already

```javascript
sedan.topSpeed = 160;
console.log(sedan);
```

## The Document Object Model (DOM)

The Document Object Model (DOM) put simply organizes the components of a web page into a tree-like hierarchy. Think back to what you learned about HTML in Week 1, do you remember some of the different components?

Imagine a web page is like a book. Just like a book has chapters, paragraphs, and sentences, a web page has different parts like headings, images, and text. The Document Object Model, or DOM for short, is like a map that shows how all these parts are organized and connected.

- The DOM itself is an <b>object</b>, a really big and complex one
- The DOM is made of `HTML elements`

The DOM is like a blueprint or a diagram that shows all the different parts on the page and how they're connected. It's a way for a computer to understand and keep track of everything on the web page, from the title at the top to the buttons at the bottom.

So, the DOM is like a behind-the-scenes organizer for a web page, helping computers understand how everything is arranged and allowing developers to change and interact with different parts of the page. The DOM is the reason you can see this page right now.

## Event Listeners

In JavaScript, `Event Listeners` are functions that wait for and respond to specific events that occur when interacting with different HTML elements from the DOM, such as clicking a button, pressing a key on the keyboard, and much more!

- Event listeners tell the HTML element to do something when a user takes a certain action
- Using functions, you can define custom behavior to be executed in response to specific events

Event listeners are existing function that:

- Must be called on an `HTML element` object
- Takes two parameters (input variables)
  - An event (for the purposes of this project, we will only use the `"click"` event)
  - A function to do something once event happens

If not done already, an ID to the HTML button element. In the `index.html` file:

```html
<div>
  <img
    src="https://target.scene7.com/is/image/Target/GUEST_780d12cc-79ae-474b-a4a3-0de8477746f5?qlt=65&fmt=webp&hei=154&wid=154"
    alt="Product 1"
  />
  <p>Minecraft - Xbox One</p>
  <p>$29.99</p>
  <button id="minecraftButton">Add to cart</button>
</div>
```

- The ID can be anything you would like to distinguish the button

Finally, add the event handler to our JavaScript code in `index.js`

```javascript
// Select the button element using its ID
let button = document.getElementById("minecraftButton");

// define the function to handle the event
const buttonClick = () => {
  alert("Added Minecraft - Xbox One to cart!");
};

// Add an event listener to the button element
button.addEventListener("click", buttonClick);
```
