const gridContainer = document.querySelector(".grid-container");

generateGrid(25);


let allPixels = document.querySelector(".grid-container").children;
let allPixelsArray = Array.from(allPixels);
const clearBtn = document.querySelector(".clear-btn");
const range = document.querySelector(".range-input");
const rangeLabel = document.querySelector(".range-label");
let color = "black";


clearBtn.addEventListener("click", (e) => {
  allPixelsArray.forEach(pixel => pixel.style.backgroundColor = "white")
})

range.addEventListener("change", (e) => {
  rangeLabel.textContent = range.value;
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
  generateGrid(range.value);
  load();
})

load();

function load() {
  allPixelsArray = Array.from(allPixels);

  allPixelsArray.forEach(pixel => {
    pixel.addEventListener("mousedown", (e) => {
      e.preventDefault();
      e.target.style.backgroundColor = color;
      allPixelsArray.forEach(pixel => pixel.addEventListener("mouseenter", eventHandler))
    })
  })
  window.addEventListener("mouseup", (e) => {
    allPixelsArray.forEach(pixel => pixel.removeEventListener("mouseenter", eventHandler));
  })
  
  const eventHandler = function(e) {
    e.target.style.backgroundColor = color;
  }
  
}



function generateGrid(x) {
  const pixelTotal = x * x;
  gridContainer.style.gridTemplateRows = `repeat(${x}, 1fr`;
  gridContainer.style.gridTemplateColumns = `repeat(${x}, 1fr`;
  for (let i = 1; i <= pixelTotal; i++) {
    const pixel = document.createElement('div');
    pixel.classList.add("pixel");
    gridContainer.append(pixel);
  }
}



