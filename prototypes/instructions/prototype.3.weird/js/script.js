/**
 * weird
 * Nicolas Robledo Sanchez
 * 
 * This is my 3rd drawing
 */

"use strict";

/**
*/
function setup() {

createCanvas(500, 750);
background(28, 52, 84);   
}


/**
*/
function draw() {

//moon
 push();
 fill(240, 240, 210);
 stroke(240, 240, 210);
  circle(380, 120, 200);

  //moons cut
fill(28, 52, 84);
stroke(28, 52, 84);
circle(410, 100, 200);
    pop();
}