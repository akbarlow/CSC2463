let score = 0;
let time = 30;
let squished = false; 
let frameDel = 7;
let velYneg = -1;
let velYpos = 1;
let bugs = [];
let bug;
let numSquish = 0;

function preload() {
  
  let animations = {
    stand: { row: 0, col: 2, frames: 1},
    walk: {row: 0, col: 0, frames: 2},
    squish: {row: 0, col: 3, frames: 1},
  };

  for (let i = 0; i < 5; i++) {
    bugs.push(
      new Bug(
        random(25,775),
          random(25,775),
          50,
          50,
          "assets/buggy.png",
          animations
          )
      );
  }
}

function setup() {
  createCanvas(800,800);
}

function draw() {
  background(225);

  textSize(20);

  if (time>= 0) {
    text("Time Remaining: " +ceil(time), 20, 25);
    text("Bugs Squished: " + score, 20, 50);
    time -= deltaTime / 1000;

    if (numSquish === 3) {
      moreBugs();
      numSquish = 0;
    }

    bugs.forEach((bug) => {
      if (bug.sprite.y + bug.sprite.height / 2 > height) {bug.walkUp();
      } else if (bug.sprite.y - bug.sprite.height / 2 < 0) {bug.walkDown();
      }
    });
  } else {
    text("GAME OVER", 20, 25);
    text("SCORE: ", + score, 50, 80);
   
    };
  }

function mousePressed() {
  for (let i = 0; i < bugs.length; i++) {
    bug = bugs[i];
    if (
      mouseX > bug.sprite.x - bug.sprite.width / 2 &&
      mouseX < bug.sprite.x + bug.sprite.width / 2 &&
      mouseY > bug.sprite.y - bug.sprite.height / 2 &&
      mouseY < bug.sprite.y + bug.sprite.height / 2
    ) {
      if (!bug.squished) {
        bug.squish();
        bug.squished = true;
        score++;
        numSquish++;
        velYneg -= 0.5;
        velYpos += 0.5;
        frameDel -= 0.25;
      }
    }
  }
}

function moreBugs() {
  let animations = {
    stand: { row: 0, col: 2, frames: 1 },
    walk: { row: 0, col: 0, frames: 2 },
    squish: { row: 0, col: 3, frames: 1 },
  };

  for (let i = 0; i < 3; i++) [
    bugs.push(
      new Bug(
        random(25,775),
        random(25,775),
          50,
          50,
          "assets/buggy.png",
          animations
      )
    )
  ]
}

class Bug {
  constructor(x, y, width, height, spriteSheet, animations) {
    this.sprite = new Sprite(x, y, width, height);
    this.sprite.spriteSheet = spriteSheet;
    this.sprite.colldier = "none";
    this.sprite.anis.frameDelay = frameDel;
    this.sprite.addAnis(animations);
    this.sprite.vel.y = velYneg;
    this.sprite.changeAni("walk");
  }

  walkUp() {
    this.sprite.changeAni("walk");
    this.sprite.scale.x = 1;
    this.sprite.scale.y = 1;
    this.sprite.vel.y = velYneg;
    this.sprite.vel.x = 0;
  }

  walkDown() {
    this.sprite.changeAni("walk");
    this.sprite.scale.x = 1;
    this.sprite.scale.y = -1;
    this.sprite.vel.y = velYpos;
    this.sprite.vel.x = 0;
  }

  squish() {
    this.sprite.changeAni("squish");
    this.sprite.vel.y = 0;
    this.sprite.vel.x = 0;
  }

  stand() {
    this.sprite.changeAni("stand");
    this.sprite.vel.y = 0;
    this.sprite.vel.x = 0;
  }
}