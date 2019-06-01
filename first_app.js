var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".color");
var pickedColor = pickColor();
var messageDisplay = document.querySelector(".mesagge");
var colorDisplay = document.querySelector(".color-display");
var HeaderColor = document.querySelector(".game");
var resetButton = document.querySelector(".reset");
var easyButton = document.querySelector(".easy-deficulity");
var hardButton = document.querySelector(".hard-deficulity");

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

easyButton.addEventListener("click", function() {
  numSquares = 3;
  HeaderColor.style.backgroundColor = "white";
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    if (i <= 2) {
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  easyButton.style.backgroundColor = "blue";
  hardButton.style.backgroundColor = "#42f4e8";
});

hardButton.addEventListener("click", function() {
  numSquares = 6;
  HeaderColor.style.backgroundColor = "white";
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.display = "block";
    squares[i].style.backgroundColor = colors[i];
  }
  hardButton.style.backgroundColor = "blue";
  easyButton.style.backgroundColor = "#42f4e8";
});

resetButton.addEventListener("click", event => {
  event.preventDefault();
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
