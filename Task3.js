let Bubble1;
let BubbleArray = []

let Cat1;
let CatArray = []

let numBubbles = 5;
let numCats = 2;

function setup() {
  createCanvas(960, 540);
  
  for(let i = 0; i < numBubbles; i++){
    Bubble1 = new Bubble(random(0, 960), random(0, 540), random(3,5))
    append(BubbleArray, Bubble1)
  }
  
  for(let i = 0; i < numCats; i++){
    Cat1 = new Cat(random(0, 960), random(0, 540), random(6,8))
    append(CatArray, Cat1)
  }
  
}

function draw() {
  background("cyan");
  
  for(let i = 0;i < numBubbles; i++){
   BubbleArray[i].drawBubble()
   BubbleArray[i].show() 
  }
  
  for(let i = 0;i < numCats; i++){
   CatArray[i].DrawCat()
   CatArray[i].moveCat() 
  }
  
  
  
}


class Bubble{
  constructor(x, y, XSpeed){
    this.x = x
    this.y = y
    this.XSpeed = XSpeed
  }
  
drawBubble(){
  this.x+=this.XSpeed;
  if(this.x > width){
    this.XSpeed *= -1
  }
  else if(this.x < 0){
    this.XSpeed *= -1
  }
  
}
  
show(){
  stroke("grey")
  fill("lightgrey")
  strokeWeight(2)
  ellipse(this.x-13, this.y-20, 15)
  ellipse(this.x+13, this.y-20, 15)
  
  
  strokeWeight(3)
  stroke("grey")
  fill("lightgrey")
  ellipse(this.x, this.y, 40)
  
  stroke("pink")
  line(this.x-10, this.y+5, this.x-30, this.y-5)
  line(this.x-10, this.y+5, this.x-30, this.y+5)
  line(this.x-10, this.y+5, this.x-30, this.y+15)
  line(this.x+10, this.y+5, this.x+30, this.y-5)
  line(this.x+10, this.y+5, this.x+30, this.y+5)
  line(this.x+10, this.y+5, this.x+30, this.y+15)
  
  stroke("white")
  fill("black")
  strokeWeight(2)
  ellipse(this.x-10, this.y-5, 10, 7)
  ellipse(this.x+10, this.y-5, 10, 7)
  

  
  
  fill("red")
  stroke("black")
  ellipse(this.x, this.y+10, 10, 10)
}
  
  
  }

class Cat{
  constructor(x, y, XSpeed){
    this.x = x
    this.y = y
    this.XSpeed = XSpeed
  }

  moveCat(){
    this.x+=this.XSpeed;
    if(this.x > width){
      this.XSpeed *= -1
      this.y = random(0, height)
    }
    else if(this.x < 0){
      this.XSpeed *= -1
      this.y = random(0, height)
    }

  }
  
  
  DrawCat(x, y){
  push()
  scale(1.4)
    
  strokeWeight(2)
  stroke("black")
  fill("orange")
  //DrawCat
  triangle(this.x, this.y-10, this.x-20, this.y-10, this.x-5, this.y-30)
  triangle(this.x, this.y-10, this.x+20, this.y-10, this.x+5, this.y-30)
  ellipse(this.x, this.y, 40, 35)
  stroke("white")
  fill("black")
  ellipse(this.x-10, this.y-5, 10, 10)
  ellipse(this.x+10, this.y-5, 10, 10)
  strokeWeight(2)
  stroke("black")
  line(this.x-10, this.y+5, this.x-30, this.y-5)
  line(this.x-10, this.y+5, this.x-30, this.y+5)
  line(this.x-10, this.y+5, this.x-30, this.y+15)
  line(this.x+10, this.y+5, this.x+30, this.y-5)
  line(this.x+10, this.y+5, this.x+30, this.y+5)
  line(this.x+10, this.y+5, this.x+30, this.y+15)
  triangle(this.x, this.y+15, this.x+5, this.y+5, this.x-5, this.y+5)
    
    pop()
}
}
