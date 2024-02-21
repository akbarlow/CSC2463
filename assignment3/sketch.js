let sprite;
let characters = [];

function preload() {
  let animations = {
    stand: {row: 0, frames: 1},
    walkRight: {row: 0, col: 1, frames: 8}
  };
  
  characters.push(new Character(200,100,80,80,'assets/purple.png',animations));
  characters.push(new Character(200,200,80,80,'assets/cyclops.png',animations));
  characters.push(new Character(200,300,80,80,'assets/blue.png',animations));
}

function setup() {
  createCanvas(400,400); 

}

function draw() {
  background (0);

  characters.forEach((character) => {
    if (kb.pressing('d')) {
      character.walkRight();
    }
    else if (kb.pressing('a')) {
      character.walkLeft();
    }
    else {
      character.stand();
    }
  })


 // if (sprite.x + sprite.width/2 > width) {
 //   sprite.vel.x = -1;
 //   sprite.scale.x = -1;
 // } else if (sprite.x - sprite.width/2 < 0) {
 //   sprite.vel.x = 1;
 //   sprite.scale.x =1;
  
}

class Character {
  constructor(x,y,width,height,spriteSheet,animations) {
    this.sprite = new Sprite(x,y,width,height);
    this.sprite.spriteSheet = spriteSheet;
    
    this.sprite.anis.frameDelay = 9;
    this.sprite.addAnis(animations);
    this.sprite.changeAni('stand');
  }

  walkRight() {
    this.sprite.changeAni('walkRight');
    this.sprite.vel.x = 1;
    this.sprite.scale.x = 1
  }
  
  stand(){
    this.sprite.changeAni('stand');
    this.sprite.vel.x = 0;
  }
  
  walkLeft() {
    this.sprite.changeAni('walkRight');
    this.sprite.vel.x = -1;
    this.sprite.scale.x = -1;
  }
}



function keyTyped () {
  switch(key) {
    case 'd':
      walkRight();
      break;
    case 'a':
      walkLeft();
      break;
  }
}