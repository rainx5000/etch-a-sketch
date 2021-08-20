const gridContainer = document.querySelector(".grid-container");

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





generateGrid(50);

function penColor(color) {
  const allPixels = document.querySelectorAll(".pixel");
  const allPixelsArray = Array.from(allPixels)
  
  allPixelsArray.forEach(pixel => {
    pixel.addEventListener("mousedown", (e) => {
      e.preventDefault();
      e.target.style.backgroundColor = color;
      allPixelsArray.forEach(pixel => pixel.addEventListener("mouseenter", eventHandler))
    })
  })
  
  for (let pixel of allPixels) {
    pixel.addEventListener("mouseup", (e) => {
      allPixelsArray.forEach(pixel => pixel.removeEventListener("mouseenter", eventHandler));
    })
  }
  const eventHandler = function(e) {
    e.target.style.backgroundColor = color;
  }
}

penColor("red")

