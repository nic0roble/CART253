/**
 * Field of flowers
 * Nicolas Robledo Sanchez
 * 
 * I created a field of flowers that everytime the page is refresh
 * this flowers change size, position,color,etc.
 */

"use strict";

let flower1;
let flower2;
let flower3;
let flower4;
let flower5;
let flower6;


function setup() {
 createCanvas(700, 600);


}



function draw() {
  background("#fd8e86");

drawGrass();
drawTitle();
}

function drawGrass() {
push();
    noStroke();
    fill("#456d34");
    rect(0, 480, 800, 120);
pop();
}

function drawTitle() {
    push();
    fill("#456d34");
    textSize(48);
    textAlign(CENTER, CENTER);
    textFont("Olympia");
    textStyle(BOLD);
    text("My Flower Field", 700 / 2, 60);
    pop();
}