/**
 * Frost Night
 * Nicolas Robledo Sanchez
 *
 * A farmer has to cover the sunflowers before the night frost freezes them.
 * Idea based on "The Last Lovely Day", an example found on OpenProcessing.
 */

"use strict";

const farmer = {
    x: 450,
    y: 570,
    width: 50,
    height: 90,
    speed: 5
};


function setup() {
createCanvas(900, 600);
}



function draw() {
background("#8ecae6");

  drawGround();
  drawSun();

   drawFarmer(farmer);

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

function drawFarmer(farmer) {
    push();
    noStroke();

    // Body
    fill("#ce2e53");
    rect(farmer.x - farmer.width / 2, farmer.y - farmer.height, farmer.width, farmer.height * 0.6);

    // Legs
    fill("#12465f");
    rect(farmer.x - farmer.width / 2, farmer.y - farmer.height * 0.4, farmer.width, farmer.height * 0.4);

    // Head
    fill("#ffd8c2");
    ellipse(farmer.x, farmer.y - farmer.height - 14, 34);

    // Hat
    fill("#f9e59a");
    ellipse(farmer.x, farmer.y - farmer.height - 24, 62, 12);
    ellipse(farmer.x, farmer.y - farmer.height - 30, 32, 20);

    pop();
}