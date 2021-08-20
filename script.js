const gridContainer = document.querySelector(".grid-container");

generateGrid(50);

const clearBtn = document.querySelector(".clear-btn");
const allPixels = document.querySelectorAll(".pixel");
const allPixelsArray = Array.from(allPixels);


penColor("red")

clearBtn.addEventListener("click", (e) => {
  allPixelsArray.forEach(pixel => pixel.style.backgroundColor = "white")
})






function penColor(color) {
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



