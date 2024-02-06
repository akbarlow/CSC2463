let color;
function setup() {
  createCanvas(1000, 700);
}

function draw() {
  let dragging = false
  noStroke(0)
  fill("red")
  square(10,10,50)
  fill("orange")
  square(10,70,50)
  fill("yellow")
  square(10,130,50)
  fill("green")
  square(10,190,50)
  fill("cyan")
  square(10,250,50)
  fill("blue")
  square(10,310,50)
  fill("magenta")
  square(10,370,50)
  fill("brown")
  square(10,430,50)
  stroke(0)
  fill("white")
  square(10,490,50)
  fill("black")
  square(10,550,50)
}

function mouseClicked(){
  if (mouseX > 10 &&  mouseX < 60 && mouseY > 10 && mouseY < 60) {
    color = "red"
  }
  if (mouseX > 10 &&  mouseX < 60 && mouseY > 70 && mouseY < 120) {
    color = "orange"
  }
  if (mouseX > 10 &&  mouseX < 60 && mouseY > 130 && mouseY < 180) {
    color = "yellow"
  }
  if (mouseX > 10 &&  mouseX < 60 && mouseY > 190 && mouseY < 240) {
    color = "green"
  }
  if (mouseX > 10 &&  mouseX < 60 && mouseY > 250 && mouseY < 300) {
    color = "cyan"
  }
  if (mouseX > 10 &&  mouseX < 60 && mouseY > 310 && mouseY < 360) {
    color = "blue"
  }
  if (mouseX > 10 &&  mouseX < 60 && mouseY > 370 && mouseY < 420) {
    color = "magenta"
  }
  if (mouseX > 10 &&  mouseX < 60 && mouseY > 430 && mouseY < 480) {
    color = "brown"
  }
  if (mouseX > 10 &&  mouseX < 60 && mouseY > 490 && mouseY < 540) {
    color = "white"
  }
  if (mouseX > 10 &&  mouseX < 60 && mouseY > 550 && mouseY < 600) {
    color = "black"
  }
}

function mousePressed() {
  dragging = true
}

function mouseReleased() {
  dragging = false
}

function mouseDragged(){
  if (dragging) {
    noStroke(0);
    fill(color);
    circle(mouseX,mouseY,15);
  }
}