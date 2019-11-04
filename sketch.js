let g = -0.5;
var balls = [];
let x = 10;

function preload(){
  ballSprite = loadImage("assets/yeet.png");

}

function setup() {
  createCanvas(1500,800);
  imageMode(CENTER);
}
function draw() {
  background(0,0,0);
  rectMode(CENTER);


  //make mouse on cursor
  rect(mouseX,mouseY,20,20)

  //for every ball placed
  doBall();

  //debug shit
  if(balls.length > 0)
  console.log("yes")
  else
  console.log("no")

}

function mousePressed(){
    placeBall();
}

function placeBall(){
  //make ball object
  ballObject = new Ball(mouseX,mouseY,0,random(-0.1,0.1));
  //put ball object in ball array
  append(balls,ballObject);
}

function doBall(){
  for (let i = 0; i < balls.length; i++){
    //apply gravity to ball
    balls[i].moveBall();
    //draw ball
    //image(ballSprite,balls[i].relativeX,balls[i].relativeY, 50, 50);
    ellipse(balls[i].relativeX,balls[i].relativeY, 50, 50);
    //if ball fall out of screen hihi
    if(balls[i].relativeY > height || balls[i].relativeY < 0){
      balls.splice(i,1);
    }
  }
}

class Ball {
  g;
  x;
  y;
  u;
  t = 0;

  relativeY = 0;
  relativeX = 0;

  constructor(x,y,u,g) {
    this.x = x;
    this.y = y;
    this.u = u;
    this.g = g;
  }

  moveBall(){
    //apply gravity
    if (this.t>=0){
      this.relativeY = this.y + (1/2 * this.g * this.t * this.t);
      //move ball horizontally
      this.relativeX = this.x + this.u * this.t;
    }
    this.t += 1;
  }
}
