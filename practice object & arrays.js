



//“doing something N times”
function repeatLog(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
}


//We don’t have to pass a predefined function to repeat. Often, it is easier to create a function value on the spot instead.
let labels = [];
repeat(5, i => {
    labels.push(`Unit ${i + 1}`);
});
console.log(labels);
// → ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"]



function greaterThan(n) {
    return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
// → true



function filter(array, test) {
    let passed = [];
    for (let element of array) {
        if (test(element)) {
            passed.push(element);
        }
    }
    return passed;
}

console.log(filter(SCRIPTS, script => script.living));
// → [{name: "Adlam", …}, …]
//To find the scripts in the data set that are still in use, the following function might be helpful. It filters out the elements in an array that don’t pass a test.



//The map method transforms an array by applying a function to all of its elements and building a new array from the returned values.
function map(array, transform) {
    let mapped = [];
    for (let element of array) {
        mapped.push(transform(element));
    }
    return mapped;
}

let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl");
console.log(map(rtlScripts, s => s.name));
// → ["Adlam", "Arabic", "Imperial Aramaic", …]


//As an example, let’s write code that finds the average year of origin for living and dead scripts in the data set.

    function average(array) {
    return array.reduce((a, b) => a + b) / array.length;
}

console.log(Math.round(average(
    SCRIPTS.filter(s => s.living).map(s => s.year))));
// → 1165
console.log(Math.round(average(
    SCRIPTS.filter(s => !s.living).map(s => s.year))));
// → 204
//could also write one big loop
let total = 0, count = 0;
for (let script of SCRIPTS) {
    if (script.living) {
        total += script.year;
        count += 1;
    }
}
console.log(Math.round(total / count));
// → 1165
//compute a single value from them. Our recurring example, summing a collection of numbers, is an instance of this. Another example is finding the script with the most characters.
//It builds a value by repeatedly taking a single element from the array and combining it with the current value.
// When summing numbers, you’d start with the number zero and, for each element, add that to the sum.



//For example, this function—which outputs the ingredients needed to make a batch of hummus—has another function inside it:
    const hummus = function(factor) {
        const ingredient = function(amount, unit, name) {
            let ingredientAmount = amount * factor;
            if (ingredientAmount > 1) {
                unit += "s";
            }
            console.log(`${ingredientAmount} ${unit} ${name}`);
        };
        ingredient(1, "can", "chickpeas");
        ingredient(0.25, "cup", "tahini");
        ingredient(0.25, "cup", "lemon juice");
        ingredient(1, "clove", "garlic");
        ingredient(2, "tablespoon", "olive oil");
        ingredient(0.5, "teaspoon", "cumin");
    };


// Define f to hold a function value
const f = function(a) {
    console.log(a + 2);
};
// Declare g to be a function
function g(a, b) {
    return a * b * 3.5;
}
// A less verbose function value
let h = a => a % 3;


//these two definitions of square do the same thing:
    const square1 = (x) => { return x * x; };
    const square2 = x => x * x;





/*
Objects and Arrays Practice
This is practice to help you with Objects and arrays. There are no test associated with these exercises, so you will need to test them manually.

    Create a function called removeDuplicates that accepts an array of strings and returns the array with all duplicate elements filtered out.
    Examples
removeDuplicates(["bob","squid","samantha","bob"]);
// Should return the following
["bob","squid","samantha"]

removeDuplicates(["tilda","tilda"]);
// Should return the following
["tilda"]

removeDuplicates(["2016-02-13","1994-12-21","2016-02-13","2016-02-13","2005-11-29"]);
// Should return the following
["1994-12-21","2016-02-13","2005-11-29"]
*/

function removeDuplicates(arrayOfStrings){
     return [...new Set(arrayOfStrings)]
 }

function removeDuplicates(arrayOfStrings){

    var uniqueStrings = [];

    for (let i = 0; i < arrayOfStrings.length; i++) {

        if (uniqueStrings.includes(arrayOfStrings[i])){

        }else{
            uniqueStrings.push(arrayOfStrings[i])
        }

    }

    return uniqueStrings

 }

 console.log(removeDuplicates(["bob", "squid", "samantha", "bob"]));
  Should return the following
  ["bob","squid","samantha"]

 console.log(removeDuplicates(["tilda", "tilda"]));
  Should return the following
  ["tilda"]

 console.log(removeDuplicates(["2016-02-13", "1994-12-21", "2016-02-13", "2016-02-13", "2005-11-29"]));
  Should return the following
  ["1994-12-21","2016-02-13","2005-11-29"]

Create a function called max that accepts an array of numbers and returns the largest number from that array.
    Examples
max([4,34,193,2,345,46,0]);
// Should return the following
345

max([-34,83,21,38,-2039,3.2]);
// Should return the following
83

max([54.5,2,34,-93]);
// Should return the following
54.5


Create a function called mostOccuringNumber that accepts an array of numbers and returns the number that occurs the most within that array.
    Examples
mostOccuringNumber([8,93,28,8,27,-62,32,8,-62]);
// Should return the following
8

mostOccuringNumber([8,93,-62.0,28,27,-62,32,8,-62]);
// Should return the following
-62

mostOccuringNumber([73.5,8,0,-3,3.50,8.25,3.50]);
// Should return the following
3.5


Create a function called whoIsPassing that accepts an array of objects, where each object is a student's name and class average (from 0 to 100). Your function will return an array of objects where each object is a student's name and whether he/she is passing. Note that a class average of 60 and higher is passing.
    Examples
var students = [
    {
        name: "Phill Rundy",
        classAverage: 53
    },
    {
        name: "Samuel Moore",
        classAverage: 71
    },
    {
        name: "Mark Tendly",
        classAverage: 84
    },
    {
        name: "Dough Mosh",
        classAverage: 87
    },
    {
        name: "Bran Thomb",
        classAverage: 93
    },
    {
        name: "Mario Yushi",
        classAverage: 82
    },
    {
        name: "Nathan Skywalker",
        classAverage: 52
    }
]

whoIsPassing(students);
// Should return the following
[
    {
        name: "Phill Rundy",
        passing: false
    },
    {
        name: "Samuel Moore",
        passing: true
    },
    {
        name: "Mark Tendly",
        passing: true
    },
    {
        name: "Dough Mosh",
        passing: true
    },
    {
        name: "Bran Thomb",
        passing: true
    },
    {
        name: "Mario Yushi",
        passing: true
    },
    {
        name: "Nathan Skywalker",
        passing: false
    }
]

Create a function called dateStringToObject that accepts a date in the following string format "YYYY-MM-DD" and returns an object that contains month, day, and year properties.
    Examples
dateStringToObject("2016-2-13");
// Should return the following
{month: 2, day: 13, year: 2016}

dateStringToObject("2005-11-29");
// Should return the following
{month: 11, day: 29, year: 2005}

dateStringToObject("1994-12-21");
// Should return the following
{month: 12, day: 21, year: 1994}
Create a function called reverseString that that accepts a string and returns a string with the characters in reverse order.
    Examples
reverseString("squid");
// Should return the following
"diuqs"

reverseString("tilda");
// Should return the following
"adlit"

reverseString("2016-02-13");
// Should return the following
"31-21-6102"
Create a function called numberInfo that accepts a number and returns an object with the properties isPositive, isEven, isZero. The properties should either be true or false based on if the parameter meets the criteria.
    Examples
numberInfo(-1);
// Should return the following
{
    isPositive: false,
        isEven: false,
    isZero: false
}

numberInfo(6);
// Should return the following
{
    isPositive: true,
        isEven: true,
    isZero: false
}

numberInfo(0);
// Should return the following
{
    isPositive: false,
        isEven: true,
    isZero: true
}
