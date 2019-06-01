var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".color");

var pickedColor = pickColor();
var colorDisplay = document.querySelector(".color-display");
var messageDisplay = document.querySelector(".mesagge");
var HeaderColor = document.querySelector(".game");
var resetButton = document.querySelector(".reset");
var easyButton = document.querySelector(".easy-deficulity");
var hardButton = document.querySelector(".hard-deficulity");

function clearStyle() {
  hardButton.style = "";
  easyButton.style = "";
}

function addBackgroundColor(button) {
  button.style.backgroundColor = "blue";
}

easyButton.addEventListener("click", function() {
  clearStyle();
  addBackgroundColor(this);
  generateHardnes("easy");
});
hardButton.addEventListener("click", function() {
  clearStyle();
  addBackgroundColor(this);
  generateHardnes("hard");
});

resetButton.addEventListener("click", function() {
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  HeaderColor.style.backgroundColor = "white";
  resetButton.textContent = "NEW COLORS";
  messageDisplay.textContent = "";
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener("click", function() {
    var clickedColor = this.style.backgroundColor;

    if (pickedColor === clickedColor) {
      messageDisplay.textContent = "correct";
      changeColors(pickedColor);
      HeaderColor.style.backgroundColor = pickedColor;
      resetButton.textContent = "PLAY AGAIN";
    } else {
      this.style.backgroundColor = "white";
      messageDisplay.textContent = "try again";
    }
  });
}

function generateHardnes(type) {
  HeaderColor.style.backgroundColor = "white";
  colors = generateRandomColors(type === "hard" ? 6 : 3);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    if (type === "easy") {
      if (i <= 2) {
        squares[i].style.backgroundColor = colors[i];
      } else {
        squares[i].style.display = "none";
      }
    } else {
      if (i >= 3) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
      }
    }
    squares[i].style.backgroundColor = colors[i];
  }
}

function changeColors(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b + ")";
}
