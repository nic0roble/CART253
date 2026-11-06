/**
 * fortune cookie
 * Nicolas Robledo Sanchez
 * 
 * I created cookie that it opens when you click on it,
 * when the cookie is open it will appeared a random message.
 */

"use strict";

const cookie = {
    x: 350,
    y: 280,
    size: 260,

}

let fortunes = [
    "Good things are coming",
    "Today is your lucky day",
    "Take a break, you earned it",
    "Your code will work soon",
    "A surprise is on its way",
];



function setup() {
 createCanvas(700, 600);
}



function draw() {
background("#8b2e2e");

drawWholeCookie(cookie);

}

function drawWholeCookie(cookie) {
  push();
    noStroke();
    // Darker edge
    fill("#b5792e");
    ellipse(cookie.x, cookie.y, cookie.size + 12);
    // Surface
    fill("#e0a64f");
    ellipse(cookie.x, cookie.y, cookie.size);
    pop();
}

   