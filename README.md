--etch-a-sketch--

task-1 --Create a 16x16 grid using divs--

  They should be created within js, and should be stored inside a container(we can insert it within HTML)
  We will use CSS Grid - since last time I used flex

  -make sure the border does not resize the containers

  grid-template-rows: repeat(100, 50px); --this will create 100 rows
  we will use this to create our rows and columns 

  we will create a function called generateGrid(x) 
  it will take a number as an argument - we will take that number, and multiply to itself, the result will be how many times we will create a div(pixel);
  each pixel will have a width and a height worth 1 of the number of pixels in a row for example:
    16 pixels in a row

      1/16f is the size



task-2 -- set up a hover effect where if your mouse goes over the pixel it would color it

  we will do it by changing the background color property using JS

task-3 -- add a clear-grid button - which would turn all the pixels back to white 

  we will change all the pixels color back to white

task-4 -- we will add a range option between 8-100, that will change the grid size

  it will not affect the grid size, just the pixel size

task-4 -- add a rainbow color pen
  this pen will randomzie an rgb for each pixel it goes through

task-5 -- add a customize color pen
  this will be a color picker, and whichever color you pick would color in the pixels


OPTIONAL --add a history section, where the previous colors chosen are stored, we will have 5 colors
OPTIONAL --add transparant option, where if selected, then the color would have an opacity of 10%, and     
           everytime you pass through that pixel it would add another 10%, would take 10 passes to make it 100%


color pallete: https://coolors.co/353535-3c6e71-ffffff-d9d9d9-284b63

  jet - should be the controls background color
  white - should be the grid color
  