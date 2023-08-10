var intentos=0;
var boundary1;
var boundary2;
var boundary3;
var boundary4;
var boundary5;
var boundary6;
var boundary7;
var piratas1,piratas2,piratas3;

var aqua;






function preload(){
  //Opcional: si ocupas para tu juego imágenes aquí puedes precargarlas.
}

function setup(){
  createCanvas(400, 400);
  boundary1=createSprite(200,399,450,3);
  boundary2=createSprite(150,70,340,3)
  boundary3=createSprite(150,290,300,3);
  boundary4=createSprite(270,180,350,3);
  boundary5=createSprite(190,2,450,3);
  boundary6=createSprite(400,200,3,450);
  boundary7=createSprite(0,200,3,450);

  
aqua = createSprite(70,340,15,15);
aqua.shapeColor=("aqua");

  piratas1=createSprite(200,300,10,10);
  piratas1.shapeColor=("#4CAF50")

piratas2=createSprite(100,200,10,10);
  piratas2.shapeColor=("#8BC34A")

  piratas3=createSprite(260,80,10,10);
  piratas3.shapeColor=("#4CAF50")

  oro = createSprite(70,30,10,10);
  oro.shapeColor=("rgb(252,252,51)")

 piratas1.velocityY=5;
 piratas2.velocityY=5;
piratas3.velocityY=5;
  
  
}
function draw() {
   background("#D3E42E")
  
  text("Intentos: "+intentos,200,100);
  
  aqua.bounceOff(boundary1)
  aqua.bounceOff(boundary2)
  aqua.bounceOff(boundary3)
  aqua.bounceOff(boundary4)
  aqua.bounceOff(boundary5)
  aqua.bounceOff(boundary6)
  aqua.bounceOff(boundary7)
  piratas1.bounceOff(boundary3);
  piratas1.bounceOff(boundary1);
  piratas2.bounceOff(boundary4);
  piratas2.bounceOff(boundary3);
  piratas3.bounceOff(boundary2);
  piratas3.bounceOff(boundary4);
  
  if(keyDown("right")){
    aqua.x=aqua.x+3;
  }
  if(keyDown("left")){
    aqua.x=aqua.x-3;
  }
  
    if(keyDown("up_arrow")){
    aqua.velocityY=-3;
  }
  
  aqua.velocityY=aqua.velocityY+0.8;
  
   if(aqua.isTouching(piratas1) || aqua.isTouching(piratas2) || aqua.isTouching(piratas3)){
      intentos=intentos+1;
      aqua.x=70;
    aqua.y=330;
  }
  if(aqua.isTouching(oro)){
      text("ganaste!!!",200,200);
      piratas1.velocityY=0
    piratas2.velocityY=0
    piratas3.velocityY=0
     }
  
  
  
  if(intentos==3){
   fill("red");
    textSize(20);
    text("PERDISTE!!!",200,200);
    piratas1.velocityY=0
    piratas2.velocityY=0
    piratas3.velocityY=0
    
  }
 drawSprites();
}




