/**
 * 3 drawings
 * Nicolas Robledo S.
 * 
 * This is my 1st drawing 
 */

"use strict";

/**
 
*/
function setup() {

createCanvas(500,500);
background(160,206,222);

//save the current change
push();

}


/**
 
*/
function draw() {

//call the function - run the code
Head();
Ears();

}
// Base shape of the fox's head
 
function Head() {


    push();
    fill(237, 145, 33); // 
    stroke(237, 145, 33);
    ellipse(250, 280, 220, 200);
}

// Fox ears

function Ears() {

push();
    // left ear ext
    fill(237, 145, 33);
    stroke(237, 145, 33);
    triangle(160, 220, 195, 110, 235, 220);

    // left ear int
    fill(255, 255, 255);
    stroke(255, 255, 255);
    triangle(178, 205, 200, 140, 222, 205);

    // right ear ext
    fill(237, 145, 33);
    stroke(237, 145, 33);
    triangle(265, 220, 305, 110, 340, 220);

    // right ear int
    fill(255, 255, 255);
    stroke(3255, 255, 255);
    triangle(278, 205, 300, 140, 322, 205);
    pop();
}