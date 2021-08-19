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