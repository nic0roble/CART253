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

flower1 = createFlower();
flower2 = createFlower();
flower3 = createFlower();
flower4 = createFlower();
flower5 = createFlower();
flower6 = createFlower();

}



function draw() {
  background("#fd8e86");

drawGrass();
drawTitle();

drawFlower(flower1);
drawFlower(flower2);
drawFlower(flower3);
drawFlower(flower4);
drawFlower(flower5);
drawFlower(flower6);

}

function createFlower() {
    let flower = {
        x: random(60, 700 - 60),
        y: random(200, 420),
        size: random(30, 60),
        petalColor: createPetalColor(),
    }; 
return flower;
}

// make the petals change colors 
function createPetalColor() {
    let colors = ["#dc69ff", "#0095ff", "#ad3a3a", "#ff7f50", "#55d357", "#ffe14d"];
    return random(colors);
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
    noStroke();
    fill("#456d34");
    textSize(48);
    textAlign(CENTER, CENTER);
    textFont("Olympia");
    textStyle(BOLD);
    text("My Flower Field", 700 / 2, 60);
    pop();
}


function drawFlower(flower) {
    push();

    // Stem
    stroke("#38761d");
strokeWeight(5);
line(flower.x, flower.y, flower.x, 480);

    // Center of the flower
    fill("#e6e4e0");
noStroke();
ellipse(flower.x, flower.y, flower.size / 2);

    // Petals of the flowers
    noStroke();
    fill(flower.petalColor);
ellipse(flower.x - flower.size / 2, flower.y, flower.size / 1.4);
ellipse(flower.x + flower.size / 2, flower.y, flower.size / 1.4);
ellipse(flower.x, flower.y - flower.size / 2, flower.size / 1.4);
ellipse(flower.x, flower.y + flower.size / 2, flower.size / 1.4); 
}