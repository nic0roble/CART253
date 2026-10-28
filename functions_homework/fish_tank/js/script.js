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
const fish1 = { x: 150, y: 150, size: 30, speed: 1.5, color: "#daa648" };
const fish2 = { x: 250, y: 220, size: 40, speed: 1, color: "#8b1952" };
const fish3 = { x: 320, y: 290, size: 25, speed: 2.5, color: "#6c84d2" };
const fish4 = { x: 200, y: 340, size: 35, speed: 1.8, color: "#f48470" };



function setup() {
  createCanvas(500, 500);
}



function draw() {
   background("#f5e6d3");


drawTable();


drawWater(tank);

drawFish(fish1);
drawFish(fish2);
drawFish(fish3);
drawFish(fish4);

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

function moveFish(fish, tank) {
    fish.x += fish.speed;


    if (fish.x + fish.size * 0.75 > tank.x + tank.size) {
  
        fish.x = tank.x + fish.size * 1.1;
    }
}

function drawFish(fish) {
    push();
    noStroke();
    fill(fish.color);
    // body
    ellipse(fish.x, fish.y, fish.size * 1.5, fish.size);
    // tale
    triangle(
        fish.x - fish.size * 0.7, fish.y,
        fish.x - fish.size * 1.1, fish.y - fish.size * 0.4,
        fish.x - fish.size * 1.1, fish.y + fish.size * 0.4
    );
   // eyes
    fill("#ffffff");
    ellipse(fish.x + fish.size * 0.4, fish.y - fish.size * 0.1, fish.size * 0.25);
    fill("#000000");
    ellipse(fish.x + fish.size * 0.45, fish.y - fish.size * 0.1, fish.size * 0.1);
    pop();

}