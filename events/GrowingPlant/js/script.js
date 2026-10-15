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

}

function grow() {
 if (dying === false) {
    plantHeight = constrain(plantHeight + 10, 20, 200);
  }
}