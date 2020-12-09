import Phaser from "phaser";
import spaceship from "./assets/shipPink_manned.png";

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 600,physics: {
    default: 'arcade',
    arcade: {
        gravity: { y: 0 },
        debug: false
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update,
  }
};

const game = new Phaser.Game(config);

function preload() {
  
  this.load.image("ship", spaceship);
}

function create() {
  
  this.ship = this.physics.add.sprite(400, 150, "ship");

  // this.tweens.add({
  //   targets: ship,
  //   y: 450,
  //   duration: 2000,
  //   ease: "Power2",
  //   yoyo: true,
  //   loop: -1
  // });

   this.cursors = this.input.keyboard.createCursorKeys();
}

function update(){
  
  if(this.cursors.left.isDown){
    console.log("esquerda");
    this.ship.setVelocityX(-100);
  }else if(this.cursors.right.isDown){
    console.log("direita");
    this.ship.setVelocityX(100);
  }else if(this.cursors.up.isDown){
    console.log("subir");
    this.ship.setVelocityY(-100);
  }else if(this.cursors.down.isDown){
    console.log("descer");
    this.ship.setVelocityY(100);
  }else{
    this.ship.setVelocityX(0);
    this.ship.setVelocityY(0);
  }
}
