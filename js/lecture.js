'use strict';

var car = {
    make: "Toyota",
    model: "Camry"
};

var car = {};
car.make = "Toyota";
car.model = "Camry";

// create a honk method on the car object
car.honk = function () {
    alert("Honk! Honk!");
};

// honk the horn
car.honk();

carTwo = {
    make: Ford,
    model: Fusion,
    numberOfCylinders: 4,
    numberOfDoors: 4,
}

var car = {};
car.make = "Toyota";
car.model = "Camry";

// create a logMakeModel method on the car object
car.logMakeModel = function () {
    console.log("Car make/model is: " + this.make + " " + this.model);
};

// log the make/model
car.logMakeModel();