let g = 0.5;
var balls = [];

function setup() {
  createCanvas(400,500);
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
    moveBallOnXAxis(balls[i]);
    //draw ball
    ellipse(balls[i].x,balls[i].relativeY, 20, 20);

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

function mouseClicked(){


  //make ball object
  ballObject = new Ball(mouseX,mouseY,50);

  //put ball object in ball array
  append(balls,ballObject);
}


function moveBall(ball){
  //apply gravity
  ball.setRelY(ball.y + (1/2 * g * ball.t * ball.t));
  //move ball horizontally
  ball.setX(ball.x + ball.u * ball.t);
  ball.setTime(ball.t + 1);
}


class Ball {
  x = 0;
  y = 0;
  u = 0;
  t = 0;

  relativeY = 0;

  constructor(x,y,u) {
    this.x = x;
    this.y = y;
    this.u = u;
  }

  setRelY(n){
    this.relativeY = n;
  }

  setTime(n){
    this.t = n;
  }

  setX(n){
    this.x = n;
  }
}
