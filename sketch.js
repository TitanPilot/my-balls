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

  placeBall();
  //make mouse on cursor
  rect(mouseX,mouseY,20,20)

  //for every ball placed
  for (let i = 0; i < balls.length; i++){

      //apply gravity to ball
      if(balls[i] != null){

        //apply gravity and shit
        balls[i].moveBall();

        //draw ball
        image(ballSprite,balls[i].x,balls[i].y, 50, 50);

        //if ball fall out of screen hihi
        if(balls[i].y > height + 100 || balls[i].y < -100){
          balls[i] = null;
        }
     }
  }

  //debug shit
  if(balls.length > 0)
  console.log("yes");
  else
  console.log("no");

}

function mousePressed(){
    placeBall();
}

function placeBall(){
  //put ball object in ball array
  balls[balls.length] = new Ball(mouseX,mouseY,0,random(-0.1,0.1));
}


class Ball {
  g;
  x;
  y;
  ux;
  uy = 0;
  t = 0;

  relativeY = 0;
  relativeX = 0;

  constructor(x,y,u,g) {
    this.x = x;
    this.y = y;
    this.ux= u;
    this.g = g;
  }

  moveBall(){
    //apply gravity
    if (this.t>=0){
      this.uy+=this.g;
      this.y += this.uy;
      //move ball horizontall
      this.x += this.ux * this.t;
    }
    this.t += 1;
  }
}
