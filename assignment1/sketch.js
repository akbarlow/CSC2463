function setup() {
  createCanvas(400,1200); 
}

function draw() {
  //first
  background(200);
  noStroke(0);
  fill(0,255,0);
  rect(0,0,400,200);
  strokeWeight(1);
  stroke(0);
  fill(255);
  circle (100, 100, 175);
  square(210, 10, 175);

  //second
  noStroke(0);
  fill(255);
  rect(0,200,400,400);
  noStroke(0);
  fill(255,0,0,100);
  circle(200,350,190);
  fill(0,255,0,100);
  circle(260,450,190);
  fill(0,0,255,100);
  circle(140,450,190)

  //third
  fill(0);
  rect(0,600,400,200);
  fill(255,255,0);
  circle(100,700,175);
  fill(0);
  beginShape();
  vertex(0,700);
  vertex(5,605);
  vertex(100,700);
  vertex(5,795);
  endShape();
  fill(255,70,0);
  square(210,610,175,80,80,0,0);
  fill(255);
  circle(250,690,50);
  circle(345,690,50);
  fill(0,0,255);
  circle(250,690,30);
  circle(345,690,30)

  //fourth
  noStroke(0);
  fill(0,0,125);
  rect(0,800,400,400);
  strokeWeight(5);
  stroke(255);
  fill(0,167,0);
  circle(200,1000,200)
  fill(255,0,0);
  beginShape();
  vertex(200,900);
  vertex(225,975);
  vertex(300,975);
  vertex(240,1015);
  vertex(250,1090);
  vertex(200,1050);
  vertex(150,1090);
  vertex(165,1015);
  vertex(100,975);
  vertex(175,975);
  vertex(200,900);
  endShape();
}
