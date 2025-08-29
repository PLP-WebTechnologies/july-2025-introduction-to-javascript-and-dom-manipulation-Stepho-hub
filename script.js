// Part 1: Mastering JS Basics
// =========================================================

// Declaring variables and data types
const studentName = 'Omwamba';
let studentAge = 30;
const isStudent = true;

// A simple conditional statement showing  use of logic
if (studentAge >= 18) {
  console.log(`${studentName} is an adult.`);
} else {
  console.log(`${studentName} is a minor.`);
}

// A more complex conditional using an operator
if (studentAge < 24 && isStudent) {
  console.log(`${studentName} is a young student.`);
} else if (studentAge >= 24 && isStudent) {
  console.log(`${studentName} is an experienced student.`);
}

// Part 2: JavaScript Functions
// =========================================================

/**
 * The script Calculates the total price of items with sales tax.
 * @param {number} subtotal The price of the items before tax.
 * @returns {number} The final price including tax.
 */
function calculateTotal(subtotal) {
  const taxRate = 0.08; // 8% sales taxation
  const taxAmount = subtotal * taxRate;
  const total = subtotal + taxAmount;
  return total;
}

// Example showcasing usage of the function
const orderTotal = calculateTotal(150);
console.log(`The total order price is KES${orderTotal.toFixed(2)}.`);

/**
 * Creating a customized greeting message with a user's name.
 * @param {string} name The user's name.
 * @returns {string} The formatted greeting message.
 */
function createGreeting(name) {
  return `Dear, ${name}! Glad you visited our site.`;
}

// Example usage of the function
const greetingMessage = createGreeting('Grace_Wandawa');
console.log(greetingMessage);


// Part 3: JavaScript Loops
// =========================================================

// Example 1: Using a for loop to iterate through an array
const fruits = ['Apple', 'Banana', 'Avocadoes', 'Laquats'];
console.log('Locally Available fruits:');
for (let j = 0; j < fruits.length; j++) {
  console.log(`- ${fruits[j]}`);
}

// Example 2: Using a while loop for a countdown
let countdown = 5;
console.log('Countdown starts now...');
while (countdown > 0) {
  console.log(countdown);
  countdown--;
}
console.log('Launch!');


// Part 4: Mastering the DOM with JavaScript

// 1. Respond to a user click event to change text content
// Get the button and the text element from the HTML
const changeTextBtn = document.getElementById('changeTextBtn');
const dynamicText = document.getElementById('dynamicText');

// Add a click event listener
changeTextBtn.addEventListener('click', () => {
  dynamicText.textContent = 'The text has been updated by JavaScript!';
});

// 2. Change a CSS class on an element
// Get the element to be toggled
const toggleDiv = document.getElementById('toggleDiv');

// Add a click event listener to toggle a class
toggleDiv.addEventListener('click', () => {
  toggleDiv.classList.toggle('highlight');
});

// 3. Dynamically create and add new elements to the page
const addItemBtn = document.getElementById('addItemBtn');
const itemList = document.getElementById('itemList');

// Add a click event listener to create a new list item
addItemBtn.addEventListener('click', () => {
  const newItem = document.createElement('li');
  newItem.textContent = `New Item #${itemList.children.length + 1}`;
  itemList.appendChild(newItem);
});