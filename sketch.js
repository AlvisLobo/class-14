
var ball={
X:20,
Y:30,
R:30,
XSpeed:0,
YSpeed:0,
Colour:["green","blue","orange","red","pink"]
}


function setup() {
  createCanvas(400, 400);
 
 
   




}





function draw() {
  background(220);

  fill(ball.Colour[Math.round(random(0,4))]);
  circle(ball.X,ball.Y,ball.R);

  ball.XSpeed=1;
  ball.X=ball.X+ball.XSpeed;


}

