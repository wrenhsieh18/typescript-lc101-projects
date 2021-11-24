"use strict";
// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
exports.__esModule = true;
var SpaceLocation_1 = require("./SpaceLocation");
// Part 1: Declare (5) Variables With Type
var spacecraftNameV1 = "Determination";
var speedMphV1 = 17500;
var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
var milesPerKilometerV1 = 0.621;
// Part 2: Print Days to Mars
var milesToMars = kilometersToMars * milesPerKilometerV1;
var hoursToMars = milesToMars / speedMphV1;
var daysToMars = hoursToMars / 24;
// Code an output statement here (use a template literal):
console.log("".concat(spacecraftNameV1, " takes ").concat(daysToMars, " days to get to Mars."));
// Part 3: Create a Function ("getDaysToLocation")
var getDaysToLocation = function (kilometersAway) {
    var milesAway = kilometersAway * milesPerKilometerV1;
    var hoursToLocation = milesAway / speedMphV1;
    var daysToLocation = hoursToLocation / 24;
    return daysToLocation;
};
// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
console.log("".concat(spacecraftNameV1, " takes ").concat(getDaysToLocation(kilometersToMars), " days to get to Mars."));
console.log("".concat(spacecraftNameV1, " takes ").concat(getDaysToLocation(kilometersToTheMoon), " days to get to the Moon."));
// Part 4: Create a Spacecraft Class
var Spacecraft = /** @class */ (function () {
    function Spacecraft(name, speedMph) {
        this.milesPerKilometer = 0.621;
        this.name = name;
        this.speedMph = speedMph;
    }
    Spacecraft.prototype.getDaysToLocation = function (kilometersAway) {
        var milesAway = kilometersAway * this.milesPerKilometer;
        var hoursToLocation = milesAway / this.speedMph;
        var daysToLocation = hoursToLocation / 24;
        return daysToLocation;
    };
    Spacecraft.prototype.printDaysToLocation = function (location) {
        console.log("".concat(this.name, " would take ").concat(this.getDaysToLocation(location.kilometersAway), " days to get to ").concat(location.name, "."));
    };
    return Spacecraft;
}());
// Create an instance of the class here:
var spaceShuttle = new Spacecraft('Determination', 17500);
// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
console.log("".concat(spaceShuttle.name, " takes ").concat(spaceShuttle.getDaysToLocation(kilometersToMars), " days to get to Mars."));
console.log("".concat(spaceShuttle.name, " takes ").concat(spaceShuttle.getDaysToLocation(kilometersToTheMoon), " days to get to the Moon."));
// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.
// Add the printDaysToLocation function to the Spacecraft class.
// Paste in the code from step 6 here:
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('Mars', kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('the Moon', kilometersToTheMoon));
