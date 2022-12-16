let palette = [
  "#ffffff",
  "#fceabb",
  "#fccd4d",
  "#a8e6cf",
  "#dcedc1",
  "#ffd3b6",
  "#ffaaa5",
  "#ff8b94",
];
function setup() {
  // create the canvas
  createCanvas(windowWidth - 20, windowHeight - 20);
  // set the background color to black
  background(0);
  // set the noStroke option so that the shapes don't have outlines
  noStroke();
  // set the frame rate
  frameRate(30);
}
function draw() {
  // choose a random color from the palette
  let c = random(palette);
  // set the fill color to the chosen color
  fill(c);
  // generate a random size for the shape
  let s = random(30, 100);
  // generate random x and y positions for the shape
  let x = random(width);
  let y = random(height);
  // draw the shape
  ellipse(x, y, s, s);
}
