
var ob1
var ob2


function setup() {


  createCanvas(800,400);


  

  ob1=createSprite(300,200,50,80);
  ob2=createSprite(500,100,90,30);

  ob1.shapeColor="pink"
  ob2.shapeColor="blue"
}

function draw() {
  background(0);  
ob1.x = World.mouseX
ob1.y=World.mouseY
console.log(ob1.x-ob2.x)

if(collision(ob1,ob2)){
  ob1.shapeColor="yellow"
  ob2.shapeColor="yellow"
}
else{
  ob1.shapeColor="pink"
  ob2.shapeColor="blue"
}
  drawSprites();
}

function collision(ob1,ob2){
  if (ob1.x-ob2.x<ob1.width/2 + ob2.width/2
    && ob2.x-ob1.x<ob1.width/2 + ob2.width/2
    && ob1.y-ob2.y<ob1.height/2 + ob2.height/2
    && ob2.y-ob1.y<ob1.height/2 + ob2.height/2){
    return true
  }
  else{
   return false
  
  }
}