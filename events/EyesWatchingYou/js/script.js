/**
 * Eyes Watching You
 * Nicolas Robledo Sanchez
 * 
 * My proyect is about two pair of eyes that follows the mouse wherever it goes.
 * Also, by clicking the mouse it makes the eyes blink. 
 */

"use strict";


let blinking = false;

function openEyes() {
  blinking = false;
}


function setup() {
  createCanvas(700, 600);
}

function mousePressed() {
  blinking = true;
  setTimeout(openEyes, 200);
}

function draw() {
background(230, 220, 200);


// Closed eyes

     stroke(0);

  if (blinking) {
    line(190, 300, 310, 300);
    line(390, 300, 510, 300);
 }

  // White thing of the eyes

 else {
    noStroke();
    fill(255);
    ellipse(250, 300, 120);
    ellipse(450, 300, 120);

// pupils and color
stroke("#964B00");
strokeWeight(10);
fill(0);
    ellipse(constrain(mouseX, 235, 265), constrain(mouseY, 285, 315), 40);
    ellipse(constrain(mouseX, 435, 465), constrain(mouseY, 285, 315), 40);
  }
   }

