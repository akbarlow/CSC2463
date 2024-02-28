let soundFX;
soundFX = new Tone.Players({
  bird1: "assets/bird1.mp3",
  bird2: "assets/bird2.mp3",
  bird3: "assets/bird3.mp3",
  bird4: "assets/bird4.mp3",

});

let button1, button2, button3, button4;
let delAmt = new Tone.FeedbackDelay("8n", 0.5);
let delaySlider;

soundFX.connect(delAmt);
delAmt.toDestination();

function setup() {
  createCanvas(400,400);

  button1 = createButton("bird1");
  button1.position(75,100);
  button1.mousePressed(() =>
 soundFX.player("bird1").start());

  button2 = createButton("bird2");
  button2.position(300,100);
  button2.mousePressed(() => 
 soundFX.player("bird2").start());

  button3 = createButton("bird3");
  button3.position(75,200);
  button3.mousePressed(() =>
 soundFX.player("bird3").start());

  button4 = createButton("bird4");
  button4.position(300,200);
  button4.mousePressed(() =>
 soundFX.player("bird4").start());

  delaySlider = createSlider(0, 1, 0, 0.05);
  delaySlider.position(150, 300);
  delaySlider.mouseMoved(() =>
 (delAmt.delayTime.value = delaySlider.value()));
}

function draw() {
  background(300,300,200);
}

