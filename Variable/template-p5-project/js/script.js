/**
 * Variables challenge
 * Nicolas Robledo Sanchez
 * 
 *First approche to variable
 It changes with parameters
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/

//let ellipseSize = 150;
//let rectSize = 10;

//let sunX = 20;
//let sunY = 50;
//let sunSize = 10;
//let r = 255;
//let g = 0;
//let b = 255;

let sun = {
 sunX:20,
 sunY:50,
 sunSize:10,
 r:255,
 g:0
 b:255,
}

let bird = {
 birdX:20,
 birdY:50,
 birdSize:10,
 r:255,
 g:0
 b:0
}

function setup() {

    createCanvas(500,500);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
background(0,0,0);
fill(sun.r,sun.g,sun.b);
ellipse(sun, sunX,sun,sunY,sun.sunSize,sun.sunSize);

fill(bird.r,bird.g,bird.b);
ellipse(bird.birdX,birdY,bird.birdSize);

bird.birdX = bird.birdX+1;

//ellipse(250, 250,ellipseSize,ellipseSize);

//fill(255,0,0);
//rect(rectSize,height/2,20);


//ellipseSize = ellipseSize-1;
//rectSize = rectSize+1;

}