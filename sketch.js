var bulet,wall;
var speed, weight;



function setup() {
  createCanvas(800,400);

  bulet = createSprite(50,200,10,5);
  wall =  createSprite(400, 200, 20, 100);


  speed=random(55,90);
  weight=random(400,1500);

  bulet.velocityX = speed;


}

function draw() {

  background("black");
  
  if(wall.x-bulet.x < (bulet.width+wall.width)/2) {
    bulet.velocityX=0;
  var deformtion=0.5 * weight * speed * speed/22509;
 if (deformtion>180) {
  bulet.shapeColor = "red";
 }
 if (deformtion<180 && deformtion>100) {
  bulet.shapeColor = "yellow";
 }
 if (deformtion<100) { 
  bulet.shapeColor = "green";
 }

  }





  drawSprites();
}