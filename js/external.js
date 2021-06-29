"use strict";


alert("Welcome to my website!");

var userInput = prompt('What is your favorite color?');
alert('Great! ' + userInput + ' is my favorite color too!');

// the following line will show the OK/CANCEL confirm dialog
var confirmed = confirm('Are you sure you want to do XYZ?');
console.log(confirmed); // will be either true or false

var userInput = prompt('Please type something:');
console.log('The user entered: ' + userInput);

// You have rented some movies for your kids:
// The little mermaid (for 3 days), Brother Bear
// (for 5 days, they love it), and Hercules
// (1 day, you don't know yet if they're going to like it).
// If price for a movie per day is $3,
//how much will you have to pay?

alert('The price for the movies is ' + (3+2+5)*3)

//Suppose you're working as a contractor for 3 companies:
// Google, Amazon and Facebook, they pay you a different
// rate per hour. Google pays $400, Amazon $380,
// and Facebook $350. How much will you receive in
// payment for this week? You worked 10 hours for Facebook,
// 6 hours for Google and 4 hours for Amazon

alert ('I am getting paid : ' + ((400*10) + (380*6) + (350*4)));

//A student can be enrolled in a class only if the class is
// not full and the class schedule does not conflict with
// her current schedule.

var full = confirm('Is class full?');
var conflict = confirm('Is there a conflict?');
alert('')

//A product offer can be applied only if a person buys more
// than 2 items, and the offer has not expired.
// Premium members do not need to buy a specific amount
// of products.

var ValidOffer = confirm("Is the offer valid?");

var TwoOrMoreItems = parseInt(prompt("How many items do you have in your cart?")) >= 2;

var PreMember = confirm("Are you a premium member?");

var UseOffer = (TwoOrMoreItems || PreMember) && ValidOffer;

alert("You can use this offer is a " + UseOffer + " statement.");






