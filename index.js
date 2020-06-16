// jshint esversion: 8
// jscs:disable maximumLineLength

/* Copyright (c) 2020 The Learning Den */

/*************************** Variables ***************************/
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'white', 'black', 'grey', 'brown', 'pink'];
const hexCodes = ['#FF0000', '#FF7F00', '#FFFF00', '#008000', '#0000FF', '#4B0082', '#f5f5f5', '#050505', '#333333', '#663300', '#FF69B4'];
var currentColorIndex = 0;

/********************* Set Initial Page State ********************/
document.querySelector('#colorName').innerText = colors[currentColorIndex];
document.body.style.backgroundColor = hexCodes[currentColorIndex];
playSound(colors[currentColorIndex]);

/************************ Event Listeners ************************/

// proceed to next color and word when right arrow is clicked
document.querySelector('#rang').addEventListener('click', function () {
  nextColor();
  playSound();
});

// revert to previous color and word when left arrow is clicked
document.querySelector('#lang').addEventListener('click', function () {
  prevColor();
  playSound();
});

// replays color audio color name is clicked
document.querySelector('#colorName').addEventListener('click', function () {
  playSound();
});

// various keydown events
document.addEventListener('keydown', function (event) {
  // same as rigt arrow click
  if (event.key === 'ArrowRight') {
    nextColor();
    playSound();
  }

  // same as left arrow click
  if (event.key === 'ArrowLeft') {
    prevColor();
    playSound();
  }

  // same as color name click
  if (event.key === 'Enter' || event.key === ' ') {
    playSound();
  }
});

// prevents highlighting of sight word if user clicks quickly (double-clicks)
document.body.addEventListener('mousedown', function (event) {
  if (event.detail > 1) {
    event.preventDefault();
  }
}, false);

/*************************** Functions ***************************/

// called when right arrow is clicked or right arrow button is pressed
function nextColor() {
  currentColorIndex++;

  // if currentColorIndex is out of range, reset it to zero
  if (currentColorIndex >= colors.length || currentColorIndex >= hexCodes.length) {
    currentColorIndex = 0;
  }

  // change color name text
  document.querySelector('#colorName').innerText = colors[currentColorIndex];

  // change color scheme
  document.body.style.backgroundColor = hexCodes[currentColorIndex];
}

// called when left arrow is clicked or left arrow button is pressed
function prevColor() {
  currentColorIndex--;

  // if currentColorIndex is out of range, reset it to zero
  if (currentColorIndex < 0 || currentColorIndex < 0) {
    currentColorIndex = colors.length - 1;
  }

  // change color name text
  document.querySelector('#colorName').innerText = colors[currentColorIndex];

  // change color scheme
  document.body.style.backgroundColor = hexCodes[currentColorIndex];
}

function playSound() {
  let audio = new Audio(`aud/${colors[currentColorIndex]}.mp3`);
  audio.play();
}
