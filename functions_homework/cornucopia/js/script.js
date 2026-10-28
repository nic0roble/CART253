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


function setup() {
createCanvas(700, 600);

}



function draw() {
 background(backgroundColor);

drawBasket(basket);


}

function drawBasket(basket) {
    push();
    noStroke();
    fill("#8b5a2b");
    rect(basket.x - basket.width / 2, basket.y - basket.height / 2, basket.width, basket.height);
    pop();
}