/**
 * Plant growing
 * Nicolas Robledo Sanchez
 * 
 * I created a plant that grows with time. 
 * If you click the plant it make it shrink. But, after 3 seconds it recovers.
 * It starts growing again and at the end a flower appears. 
 */

"use strict";

let plantHeight = 70;
let dying = false;

function grow() {
 if (dying === false) {
    plantHeight = constrain(plantHeight + 10, 20, 450);
  }
}

function keyPressed() {
  dying = true;
  plantHeight = constrain(plantHeight - 90, 20, 450);
  setTimeout(recover, 1000);
}

function setup() {
createCanvas(500, 700);
 setInterval(grow, 1000);
}



function draw() {
background(200, 230, 255);


 // Ground
  noStroke();
  fill(120, 80, 40);
  rect(0, 620, 700, 80);

// Stem 
  strokeWeight(8);
  if (dying) {
    stroke(150, 120, 60);
  }
  else {
    stroke(40, 150, 60);
  }
  line(250, 620, 250, 690 - plantHeight);

//Leaves start to appear as the plant grows
 noStroke();
  if (dying) {
    fill(170, 140, 70);
  }
  else {
    fill(60, 180, 80);
  }

// First leaves (first try)
  if (plantHeight > 130) {
    ellipse(225, 560, 50, 20);
    ellipse(276, 560, 50, 20);
  }
}

