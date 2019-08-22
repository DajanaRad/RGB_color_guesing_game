const pickColor = () => {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
};
const generateRandomColors = num => {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
};
const randomColor = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b + ")";
};

let squares = document.querySelectorAll(".color");
let numSquares = 6;
let colors = generateRandomColors(numSquares);
let pickedColor = pickColor();
let colorDisplay = document.querySelector(".color-display");
const messageDisplay = document.querySelector(".mesagge");
const HeaderColor = document.querySelector(".game");
const resetButton = document.querySelector(".reset");
const easyButton = document.querySelector(".easy-deficulity");
const hardButton = document.querySelector(".hard-deficulity");

const clearStyle = () => {
  hardButton.style = "";
  easyButton.style = "";
};

const addBackgroundColor = button => {
  button.style.backgroundColor = "blue";
};

easyButton.addEventListener("click", () => {
  clearStyle();
  addBackgroundColor(easyButton);
  generateHardnes("easy");
});
hardButton.addEventListener("click", () => {
  clearStyle();
  addBackgroundColor(hardButton);
  generateHardnes("hard");
});

resetButton.addEventListener("click", event => {
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  HeaderColor.style.backgroundColor = "white";
  resetButton.textContent = "NEW COLORS";
  messageDisplay.textContent = "";
});

colorDisplay.textContent = pickedColor;

squares.forEach((square, i) => {
  square.style.backgroundColor = colors[i];
  square.addEventListener("click", e => {
    if (pickedColor === e.target.style.backgroundColor) {
      messageDisplay.textContent = "correct";
      changeColors(pickedColor);
      HeaderColor.style.backgroundColor = pickedColor;
      resetButton.textContent = "PLAY AGAIN";
    } else {
      squares[i].style.backgroundColor = "white";
      messageDisplay.textContent = "try again";
    }
  });
});

const generateHardnes = type => {
  HeaderColor.style.backgroundColor = "white";
  colors = generateRandomColors(type === "hard" ? 6 : 3);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (let i = 0; i < squares.length; i++) {
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
};

const changeColors = color => {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
};
