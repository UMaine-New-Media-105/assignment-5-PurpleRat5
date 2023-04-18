let Bubble1;
let BubbleArray = []
function setup() {
  createCanvas(960, 540);
  
  for(let i = 0; i < 5; i++){
    Bubble1 = new Bubble(random(100, 800), random(100, 400), random(40, 150))
    append(BubbleArray, Bubble1)
  }
  
}

function draw() {
  background("lightblue");
  
  for(let i = 0;i < 5; i++){
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
