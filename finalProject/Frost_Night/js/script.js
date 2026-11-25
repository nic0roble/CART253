/**
 * Frost Night
 * Nicolas Robledo Sanchez
 *
 * A farmer has to cover the sunflowers before the night frost freezes them.
 * Idea based on "The Last Lovely Day", an example found on OpenProcessing.
 */

"use strict";




function setup() {
createCanvas(900, 600);
}



function draw() {
background("#8ecae6");

  drawGround();
  drawSun();

}

function drawGround() {
    push();
    noStroke();
    fill("#6b8f3a");
    rect(0, 480, 900, 120);
    pop();
}

function drawSun() {
    push();
    noStroke();
    fill("#ffd166");
    ellipse(780, 100, 110, 110);
    pop();
}