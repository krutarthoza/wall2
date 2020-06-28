var bullet,wall,thicknes;

var speed,weight;


function setup() {
  createCanvas(400,400);
  bullet=createSprite(200, 200, 50, 50);
  thicknes=random(22,83);
  wall=createSprite(1500,200,thicknes,370);
  speed=random(223,321);
  weight=random(30,52);
  bullet.velocityX=speed;

}

function draw() {
  background(255,255,255);
  if(hasColided(wall,bullet)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/thicknes*thicknes*thicknes;
  

  if(damage>10){
    bullet.shapeColor="red";

  }

    
  if(damage<10){
     bullet.shapeColor="green";

  }
  
}
  drawSprites();
}
var o1,o2;
function hasColided(){
  if(o1.x-o2.x<=o1.width/2+o2.width/2){

    return true;

  }else{

    return false;

  }
}