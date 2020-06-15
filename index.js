// jshint esversion: 8
// jscs:disable maximumLineLength

/* Copyright (c) 2020 The Learning Den */

// variables
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'white', 'black', 'grey', 'brown', 'pink'];
const hexCodes = ['#FF0000', '#FF7F00', '#FFFF00', '#008000', '#0000FF', '#4B0082', '#f5f5f5', '#050505', '#333333', '#663300', '#FF69B4'];
var currentColorIndex = 0;

// set initial color name text and background color
document.querySelector('#colorName').innerText = colors[currentColorIndex];
document.body.style.backgroundColor = hexCodes[currentColorIndex];

// proceed to next color and word when right arrow is clicked
document.querySelector('#rang').addEventListener('click', function () {

  currentColorIndex++;

  // if currentColorIndex is out of range, reset it to zero
  if (currentColorIndex >= colors.length || currentColorIndex >= hexCodes.length) {
    currentColorIndex = 0;
  }

  // change color name text
  document.querySelector('#colorName').innerText = colors[currentColorIndex];

  // change color scheme
  document.body.style.backgroundColor = hexCodes[currentColorIndex];

});

// revert to previous color and word when left arrow is clicked
document.querySelector('#lang').addEventListener('click', function () {

  currentColorIndex--;

  // if currentColorIndex is out of range, reset it to zero
  if (currentColorIndex < 0 || currentColorIndex < 0) {
    currentColorIndex = colors.length - 1;
  }

  // change color name text
  document.querySelector('#colorName').innerText = colors[currentColorIndex];

  // change color scheme
  document.body.style.backgroundColor = hexCodes[currentColorIndex];

});

// prevents highlighting of sight word if user clicks quickly (double-clicks)
document.body.addEventListener('mousedown', function (event) {
  if (event.detail > 1) {
    event.preventDefault();
  }
}, false);
