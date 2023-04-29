let Rat1;
let RatArray = []

let Cat1;
let CatArray = []

let numRats = 5;
let numCats = 2;

let timeout = -300;
let Rattimeout = 0;

function setup() {
  createCanvas(600, 400);
  
  for(let i = 0; i < numRats; i++){
    Rat1 = new Rat(random(0, width), random(0, 400), random(3,5))
    append(RatArray, Rat1)
  }
  
  for(let i = 0; i < numCats; i++){
    Cat1 = new Cat(random(0, width), random(0, 400), random(3,5))
    append(CatArray, Cat1)
  }
  
}

  //CheeseBackground
  function drawCheese(x, y) {
    push()
  translate(x, y)
  stroke("rgb(197,197,5)1)")
  fill("rgb(235,235,137)")
  triangle(0, 0, 0, 30, 50, 15)
  quad(0, 30, 50, 15, 50, 30, 0, 45)
  fill("rgb(185,185,84)")
  ellipse(10, 14, 6)
  ellipse(12, 34, 6)
  ellipse(32, 22, 6)
    pop()
  }

function draw() {
  
  
  background("rgb(241,241,92)");
  
  //Draw cheese in the background
  drawCheese(20, 40)
  drawCheese(300, 80)
  drawCheese(580, 120)
  drawCheese(20, 240)
  drawCheese(300, 280)
  drawCheese(580, 320)

  //move the rats, for each rat...
  for(let i = 0; i < RatArray.length; i++){
   RatArray[i].drawRat()
   RatArray[i].show() 
    
    
  //if close enough and rat is not itself...
   for(let j = 0; j < numRats; j++){
     if(dist(RatArray[i].x, RatArray[i].y,RatArray[j].x, RatArray[j].y) < 20 && j != i && Rattimeout > 0){
       //Register a hit, Make another Rat
       
       
       Rat1 = new Rat(random(0, width), random(0, 400), random(3,5))
       append(RatArray, Rat1)
       numRats+=1
       Rattimeout = -200
       
       print(RatArray.length)
     }
   }
    
  }
  
  
  //For every cat...
  for(let i = 0; i < numCats; i++){
   CatArray[i].DrawCat()
   CatArray[i].moveCat() 
    
  //If we have hit a rat, then kill that rat
  for(let j = 0; j < numRats; j++){
     if(dist(CatArray[i].x, CatArray[i].y, RatArray[j].x, RatArray[j].y) < 20 && timeout >= 0){
       print(RatArray[j].y)
       print(CatArray[i].y)
       RatArray.splice(j-1, 1);
       numRats-=1;
       timeout = -200
       
       }
    
  
    }
  
  }
  //Increase frames so we dont overpopulate
  timeout += deltaTime;
  Rattimeout += deltaTime;
  
}
//Rat Class
class Rat{
  constructor(x, y, XSpeed){
    this.x = x
    this.y = y
    this.XSpeed = XSpeed
  }
  
drawRat(){
  this.x+=this.XSpeed;
  if(this.x > width){
    this.y = random(0, 400)
    this.XSpeed *= -1
  }
  else if(this.x < 0){
    this.y = random(0, 400)
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

//Cat Class
class Cat{
  constructor(x, y, XSpeed){
    this.x = x
    this.y = y
    this.XSpeed = XSpeed
  }
//Movement
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
  
//Cat Sprite
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
