/**
 * Title of Project
 * Nicolas Robledo Sanchez

 */

"use strict";

let circle1 = {
  x: 300,
  y: 300,
  size: 100,
  fill: {
    r: 150,
    g: 150,
    b: 150,
     }

}
function setup() {
  createCanvas(600, 600);
}



function draw() {
background(245, 245, 220);

//ticket
 push();
  noStroke();
  fill(255);
  rect(150, 200, 300, 200);
  pop();


}