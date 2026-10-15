/**
 * The Candle
 * Nicolas Robledo Sanchez
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let flameSize = 60;

//Scrolling makes the flame bigger or smaller

function mouseWheel(event) {
  flameSize = flameSize - event.delta;
  flameSize = constrain(flameSize, 0, 1000);
 }


function setup() {
createCanvas(500, 700);
}



function draw() {

//the place gets darker with the height of the candle

if (flameSize > 0) {
    background(255, 220, 230);
  }
  else {
    background(30);
  }

// Candle
  noStroke();
  fill(250, 245, 230);
  rect(220, 340, 80, 200);

// Candle cord
  stroke(0);
  strokeWeight(4);
  line(260, 340, 260, 310);

    // Flame
  noStroke();
  if (flameSize > 0) {
    fill(255, 140, 0);
    ellipse(260, 290, flameSize, flameSize + 40);
    fill(255, 220, 0);
    ellipse(260, 295, flameSize - 20, flameSize + 10);
  }

//furniture
noStroke();
fill("#533b09");
rect(60, 540, 380, 160); 

 // Drawer
  fill("#7a5a1e");
  rect(90, 565, 320, 110);
  
}