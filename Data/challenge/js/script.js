/**
 * Terrible New Car
 * Pippin Barr
 * 
 * A program to generate new car model names using dinosaurs.
 * 
 * Uses:
 * Darius Kazemi's corpora repository
 * https://github.com/dariusk/corpora/tree/master
 */

"use strict";

let carData = undefined;
let dinosaurData = undefined;
let langData = undefined;
let lang = "fr";
let cars = []
let dinosaurs = []

// Starts with the instruction
let carName = ""

/**
 * Load the car and dinosaur data
 */

/**
 * Create the canvas
*/
async function setup() {
    createCanvas(600, 400);

let jsonData = await loadJSON("assets/data/cars.json");
let jsonData2 = await loadJSON("assets/data/dinosaurs.json");

cars = jsonData.cars;
dinosaurs = jsonData2.dinosaurs;
    
}

/**
 * Display the current main text (either instructions or a car)
*/
function draw() {
    background(0);

    push();
    fill("pink");
    textAlign(CENTER, CENTER);
    textSize(32);
    text(carName, width / 2, height / 2);
    pop();
}

/**
 * Generate a new car name
 */
function mousePressed() {

carName = random(cars)+" "+random(dinosaurs)
}
