console.log("JavaScript Portion of the Test");

// Step 1: Write a multi-line comment detailing your name and student number
/* Name: Sneha Rugmini
   Student Number: 200533731
   */


const myImmutableArray = ["Jared", "Francis", "Amrit", "Sarah", "Gurleen", "Johanna", "Ury"];


// Step 2: Add the 3 people's names to the array
myImmutableArray.push("Shaun", "Kevin", "Rohan");

// Step 4: Remove the first array item from the array
myImmutableArray.shift();

// Step 5 Remove the second array item from the array
myImmutableArray.shift();

// Step 6: Using array filter, iterate over the array items and remove all items beginning with the letter "J". Store the result in a new, block scoped, mutable variable
const updatedArray = myImmutableArray.filter(name => !name.startsWith('J'));
console.log(updatedArray);

// Step 7: Create an event listener that fires a callback function when the call to action button in the header is clicked. It should alert "Call me now at 555-555-55555";
const theButton = document.querySelector('button');
theButton.addEventListener("click", function () {
    console.log("Button was clicked")
alert("Call me now at 555-555-5555");
});
