/**
 * Fruit Basket
 * Nicolas Robledo Sanchez
 * 
 * I created a basket that moves with the mouse, with that basket the objective
 * is to catch the apples that are falling. If an apple isn't catched the screen turns red.
 */

"use strict";

let backgroundColor = "#f5e096";

const basket = {
    x: 350,
    y: 550,
    width: 100,
    height: 35
};

const apple1 = { x: 120, y: -20, width: 28, height: 28, speed: 1 };
const apple2 = { x: 350, y: -200, width: 28, height: 28, speed: 3 };
const apple3 = { x: 580, y: -100, width: 28, height: 28, speed: 2.1 };


function setup() {
createCanvas(700, 600);

}



function draw() {
 background(backgroundColor);

drawBasket(basket);
moveBasket(basket);

drawApple(apple1);
drawApple(apple2);
drawApple(apple3);
moveApple(apple1);
moveApple(apple2);
moveApple(apple3);

catchApple(apple1, basket);
catchApple(apple2, basket);
catchApple(apple3, basket);

}

function drawBasket(basket) {
    push();
    noStroke();
    fill("#8b5a2b");
     arc(basket.x, basket.y - basket.height / 2, basket.width, basket.height * 2, 0, PI);
    pop();
}

function moveBasket(basket) {
    basket.x = mouseX;
}

function drawApple(apple) {
    push();
    noStroke();
    fill("#8d1820");
    ellipse(apple.x, apple.y, apple.width, apple.height);
    pop();
}

function moveApple(apple) {
    apple.y = apple.y + apple.speed;

    if (apple.y > height) {
        backgroundColor = "#e63946";
        resetApple(apple);
    }
}

function resetApple(apple) {
    apple.y = -apple.height;
    apple.x = random(20, width - 20);
}

function catchApple(apple, basket) {
    if (checkOverlap(apple, basket)) {
        backgroundColor = "#f5e096";
        resetApple(apple);
    }
}

function checkOverlap(rectA, rectB) {
    return (rectA.x + rectA.width / 2 > rectB.x - rectB.width / 2 &&
        rectA.x - rectA.width / 2 < rectB.x + rectB.width / 2 &&
        rectA.y + rectA.height / 2 > rectB.y - rectB.height / 2 &&
        rectA.y - rectA.height / 2 < rectB.y + rectB.height / 2);
}