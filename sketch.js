let g = -0.5;
var balls = [];

function setup() {
  createCanvas(1500,800);
}
function draw() {
  background(0,0,0);
  rectMode(CENTER)

  //make mouse on cursor
  rect(mouseX,mouseY,20,20)

  //for every ball placed
  for (let i = 0; i < balls.length; i++){
    //apply gravity to ball
    moveBall(balls[i]);
    //draw ball
    ellipse(balls[i].relativeX,balls[i].relativeY, 20, 20);

    //if ball fall out of screen hihi
    if(balls[i].relativeY > height){
      balls.splice(i,1);
    }
  }

  //debug shit
  if(balls.length > 0)
  console.log("yes")
  else
  console.log("no")

}

function mousePressed(){


  //make ball object
  ballObject = new Ball(mouseX,mouseY,0,random(-0.1,0.1));

  //put ball object in ball array
  append(balls,ballObject);
}


function moveBall(ball){
  //apply gravity
  if (ball.t>0){
  ball.setRelY(ball.y + (1/2 * ball.g * ball.t * ball.t));
  //move ball horizontally
  ball.setRelX(ball.x + ball.u * ball.t);
}else if(ball.t == -500){
  ball.setRelY(ball.y);
  ball.setRelX(ball.x);
}
  ball.setTime(ball.t + 1);
}


class Ball {
  g = 0;
  x = 0;
  y = 0;
  u = 0;
  t = -500;

  relativeY = 0;
  relativeX = 0;

  constructor(x,y,u,g) {
    this.x = x;
    this.y = y;
    this.u = u;
    this.g = g;
  }

  setRelY(n){
    this.relativeY = n;
  }

  setTime(n){
    this.t = n;
  }

  setRelX(n){
    this.relativeX = n;
  }
}
