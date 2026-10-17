 // Task 6: Variables and Data Types
console.log("Task 6");
const fullName = "Aknur Sultan";
let age = 18;
let studentStatus = true;
const favouriteColour = "Pink";

// Print values and their data types
console.log("Full Name:", fullName);
console.log("Type:", typeof fullName);

console.log("Age:", age);
console.log("Type:", typeof age);

console.log("Student Status:", studentStatus);
console.log("Type:", typeof studentStatus);

console.log("Favourite Colour:", favouriteColour);
console.log("Type:", typeof favouriteColour);

// Reassign a let variable
age = 19;
console.log("New Age:", age);

 // Task 7: Input and a Greeting
console.log("Task 7");
const userName = prompt("What is your name?");

alert("Hello, " + userName + "! Welcome to JavaScript!");

const myName = "Aknur";
const myGroup = "MT-2505";

const greeting = `My name is ${myName} and I study in group ${myGroup}.`;

console.log(greeting);

 // Task 8: Sum and Arithmetic
console.log("Task 8");
let firstNumber = prompt("Enter the first number:");
let secondNumber = prompt("Enter the second number:");

if (
    firstNumber === null ||
    secondNumber === null ||
    firstNumber.trim() === "" ||
    secondNumber.trim() === "" ||
    !Number.isFinite(Number(firstNumber)) ||
    !Number.isFinite(Number(secondNumber))
) {
    alert("Error! Please enter valid numbers.");
} else if (Number(secondNumber) === 0) {
    alert("Error! The second number must not be zero.");
} else {
    // Join the original inputs as strings
    const concatenation = firstNumber + secondNumber;

    // Convert inputs to numbers
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);

    console.log("First number:", firstNumber);
    console.log("Second number:", secondNumber);

    console.log("Sum:", firstNumber + secondNumber);
    console.log("Difference:", firstNumber - secondNumber);
    console.log("Product:", firstNumber * secondNumber);
    console.log("Quotient:", firstNumber / secondNumber);
    console.log("Remainder:", firstNumber % secondNumber);
    console.log("Concatenation:", concatenation);
}

 // Task 9: Strings
console.log("Task 9");
const fullNameString = "Aknur Sultan";

console.log("Full name:", fullNameString);
console.log("Length:", fullNameString.length);
console.log("Uppercase:", fullNameString.toUpperCase());
console.log("Lowercase:", fullNameString.toLowerCase());
console.log("First three characters:", fullNameString.slice(0, 3));

const firstPart = "I am a student";
const secondPart = " at Astana IT University";

const sentence = firstPart + secondPart;

console.log("Combined sentence:", sentence);

 // Task 10: Increment and Assignment Operators
console.log("Task 10");
let counter = 10;

console.log("Starting value:", counter);

counter++;
console.log("After ++:", counter);

counter--;
console.log("After --:", counter);

counter += 5;
console.log("After += 5:", counter);

counter -= 3;
console.log("After -= 3:", counter);

counter *= 2;
console.log("After *= 2:", counter);

counter /= 4;
console.log("After /= 4:", counter);

 // Task 11: Dog Age Calculation
console.log("Task 11");
let dogAge = 2;
let humanAge = (dogAge - 2) * 4 + 21;

console.log("Dog age:", dogAge);
console.log("Human age:", humanAge);
console.log("A dog aged " + dogAge + " years is " + humanAge + " in human years.");

// Test with dogAge = 5
dogAge = 5;
humanAge = (dogAge - 2) * 4 + 21;

console.log("Dog age:", dogAge);
console.log("Human age:", humanAge);
console.log("A dog aged " + dogAge + " years is " + humanAge + " in human years.");

 // Task 12: Functions
console.log("Task 12");
// Function 1: Greet User
function greetUser(name) {
    console.log("Hello, " + name + "!!!");
}

greetUser("Aknur");
greetUser("Dana");

// Function 2: Calculate Sum
function calculateSum(a, b) {
    return a + b;
}

console.log("Sum (8+3):", calculateSum(8, 3));
console.log("Sum (10+9):", calculateSum(10, 9));

// Function 3: Calculate Rectangle Area
function calculateRectangleArea(width, height) {
    return width * height;
}

console.log("Rectangle area 1:", calculateRectangleArea(4, 5));
console.log("Rectangle area 2:", calculateRectangleArea(2, 8));
