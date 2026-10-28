/**
 * Fish tank
 * Nicolas Robledo Sanchez
 * 
 * I created a fish tank were all the fishes move at different speeds 
 * and when they touch the sides of the tank they change there trajectory
 */

"use strict";

//tank
const tank = {
    x: 100,
    y: 80,
    size: 300,
}

//fishes


function setup() {
  createCanvas(500, 500);
}



function draw() {
   background("#f5e6d3");


drawTable();

drawWater(tank);

drawGlass(tank);

}

function drawTable() {
    push();
    noStroke();
    fill("#8b5a2b");
    rect(0, tank.y + tank.size, width, height);
    pop();
}

function drawGlass(tank) {
    push();
    noFill();
    stroke(255, 255, 255, 220);
    strokeWeight(6);
    rect(tank.x, tank.y, tank.size);
    pop();
    }

function drawWater(tank) {
    push();
    noStroke();
    fill("#a6cfba");
    rect(tank.x, tank.y, tank.size);
    pop();
}