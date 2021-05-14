 
var canvas;
var music;
var surface1,surface2,surface3,surface4,box
var edges
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(400,400);
      //create 4 different surfaces
surface1=createSprite(50,360,80,20)
surface1.shapeColor="green"
surface4=createSprite(350,360,80,20)
surface4.shapeColor="red"
surface3=createSprite(247,360,80,20)
surface3.shapeColor="blue"
surface2=createSprite(152,360,80,20)
surface2.shapeColor="yellow"


    //create box sprite and give velocity
    
box=createSprite(50,200,30,30)
box.velocityY=3
box.velocityX=4


}

function draw() {
    background("pink");
    music.play()
 
    //box.velocityY=3
    //box.velocityX=3
    //create edgeSprite
    edges=createEdgeSprites();
    box.bounceOff(edges);


    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box)&& box.bounceOff(surface1)){
   box.shapeColor="green"
  
    }
    if(surface3.isTouching(box)&& box.bounceOff(surface3)){
        box.shapeColor="blue"
            }
  if(surface4.isTouching(box)&& box.bounceOff(surface4)){
        box.shapeColor="red"
      }
      if(box.isTouching(surface2)){
          box.shapeColor="yellow"
          box.velocityX=0
          box.velocityY=0
          music.stop()
      }
                   
    drawSprites();
   
}
