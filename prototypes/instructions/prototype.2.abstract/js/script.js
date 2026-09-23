/**
 *Abstract
 * Nicolas Robledo Sanchez
 * 
 * This is my 2nd drawing 
 */

"use strict";

/**
*/
function setup() {

colorMode(HSB, 360, 100, 100);
createCanvas(500, 700);
background(253, 94, 83);


}


/**
*/
function draw() {

 // Sun
fill(255, 152, 83);
stroke(255, 152, 83);
circle(250, 300, 150);

  // Mountains
    fill(280, 60, 40);
    triangle(0, 500, 150, 200, 300, 500);

    fill(260, 60, 50);
    triangle(150, 500, 320, 250, 550, 500);

    fill(240, 50, 60);
    triangle(300, 500, 500, 350, 700, 500);

}