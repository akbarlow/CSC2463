let osc = new Tone.Synth(100, 'sine').toDestination();
let lfo = new Tone.LFO(10, 100, 500).connect(osc.frequency).start();

function preload() {
  turkey1 = loadImage ('assets/turkeys1.png')
  turkey2 = loadImage ('assets/turkeys2.png')
}

function mousePressed() {
  osc.triggerAttack();
}

function mouseReleased(){
  osc.triggerRelease();
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  if (mouseIsPressed === true){
    background(turkey1);
  } else if (mouseIsPressed === false){
    background (turkey2);
    text ('press mouse', 150, 75);
  }
  
}

