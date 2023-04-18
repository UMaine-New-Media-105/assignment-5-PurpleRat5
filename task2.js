let Bubble1;
let BubbleArray = []

let numBubbles = 50;
function setup() {
  createCanvas(960, 540);
  
  for(let i = 0; i < numBubbles; i++){
    Bubble1 = new Bubble(random(0, 960), random(0, 540), random(20, 80))
    append(BubbleArray, Bubble1)
  }
  
}

function draw() {
  background("cyan");
  
  for(let i = 0;i < numBubbles; i++){
   BubbleArray[i].drawBubble()
   BubbleArray[i].show() 
  }
  
}
class Bubble{
  constructor(x, y, radius){
    this.x = x
    this.y = y
    this.radius = radius
  }
  
drawBubble(){
  this.x+=random(-1,1);
  this.y+=random(-1,1);
}
  
show(){
  noFill()
  strokeWeight(3)
  stroke("blue")
  ellipse(this.x, this.y, this.radius)
}
}
