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

//water

fill(38, 70, 119);
stroke(38, 70, 119);
square(0, 500, 800);

fill(58, 100, 160);
stroke(58, 100, 160);
square(0, 550, 800);

fill(90, 140, 200);
stroke(90, 140, 200);
square(0, 600, 800);


fill(255, 152, 83);
stroke(255, 152, 83);
  line(160, 504, 350, 504);

fill(255, 152, 83);
stroke(255, 152, 83);
  line(160, 510, 350, 510);

fill(255, 152, 83);
stroke(255, 152, 83);
  line(160, 516, 350, 516);

fill(255, 152, 83);
stroke(255, 152, 83);
  line(160, 522, 350, 522);

fill(255, 152, 83);
stroke(255, 152, 83);
line(160, 528, 350, 528);

fill(255, 152, 83);
stroke(255, 152, 83);
line(180, 534, 330, 534);

fill(255, 152, 83);
stroke(255, 152, 83);
line(200, 540, 310, 540);

fill(255, 152, 83);
stroke(255, 152, 83);
line(220, 546, 290, 546);

fill(255, 152, 83);
stroke(255, 152, 83);
line(240, 552, 270, 552);

}