var canvas;
var music;
var surface1;
var surface2;
var surface3;
var surface4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
surface1 = createSprite(100,550,170,30);
surface1.shapeColor = "green";

surface2 = createSprite(280,550,170,30);
surface2.shapeColor = "red";

surface3 = createSprite(460,550,170,30);
surface3.shapeColor = "blue"

surface4 = createSprite(650,550,170,30);
surface4.shapeColor = "yellow"

    //create box sprite and give velocity
box = createSprite(250,50,30,30)
box.shapeColor = "white"
box.velocityY= (2);


}

function draw() {
    background("black");
surface1.display();
surface2.display();
surface3.display();
surface4.display();
box.display();

    //create edgeSprite





    //add condition to check if box touching surface and make it box
    if (surface1.x - surface1.x < surface1.width/2 + box.width/2
        && surface1.x - box.x < surface1.width/2 + box.width/2) {
      box.velocityX = box.velocityX * (-1);
      surface1.velocityX = surface1.velocityX * (0);
    }
  
    if (box.y - surface1.y < surface1.height/2 + box.height/2
        && surface1.y - box.y < surface1.height/2 + box.height/2){
        box.velocityY = box.velocityY * (-1);
        box.shapeColor = "green"
        music.play()
      }

      if (surface2.x - surface2.x < surface2.width/2 + box.width/2
        && surface2.x - box.x < surface2.width/2 + box.width/2) {
      box.velocityX = box.velocityX * (0);
      surface2.velocityX = surface2.velocityX * (0);
    }
  
    if (box.y - surface2.y < surface2.height/2 + box.height/2
        && surface2.y - box.y < surface2.height/2 + box.height/2){
        box.velocityY = box.velocityY * (0);
        box.shapeColor = "white"
        music.play()
      }

      if (surface3.x - surface3.x < surface3.width/2 + box.width/2
        && surface3.x - box.x < surface3.width/2 + box.width/2) {
      box.velocityX = box.velocityX * (-1);
      surface3.velocityX = surface3.velocityX * (0);
    }
  
    if (box.y - surface3.y < surface3.height/2 + box.height/2
        && surface3.y - box.y < surface3.height/2 + box.height/2){
        box.velocityY = box.velocityY * (-1);
        box.shapeColor = "blue"
        music.play()
      }

      if (surface4.x - surface4.x < surface4.width/2 + box.width/2
        && surface4.x - box.x < surface4.width/2 + box.width/2) {
      box.velocityX = box.velocityX * (-1);
      surface4.velocityX = surface4.velocityX * (0);
    }
  
    if (box.y - surface4.y < surface4.height/2 + box.height/2
        && surface4.y - box.y < surface4.height/2 + box.height/2){
        box.velocityY = box.velocityY * (-1);
        box.shapeColor = "yellow"
        music.play()
      }

      

}


