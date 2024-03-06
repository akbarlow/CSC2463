let synth = new Tone.PolySynth(Tone.MonoSynth);
let change = new Tone.PitchShift();

change.pitch = 0;

synth.connect(change);
change.toDestination();

function setup() {
  createCanvas(400, 400);
  pitchSlider = createSlider(0, 12, 1, 0.1);
  pitchSlider.position(120, 200);
  pitchSlider.mouseMoved(() => (change.pitch = pitchSlider.value()));
}

let notes = {
  q: "C4",
  w: "D4",
  e: "E4",
  r: "F4",
  t: "G4",
  y: "A4",
  u: "B4",
  i: "C5",
};

function keyPressed() {
  let playNotes = notes[key];
  synth.triggerAttack(playNotes);
}

function keyReleased() {
  let playNotes = notes[key];
  synth.triggerRelease(playNotes, "+0.03");
}

function draw() {
  background(150);
  textSize(15);
  text("Play q-i for synth", 130, 100);
  text("Use slider to change pitch", 100, 140);
}
