var box;

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,30,30);

}

function draw() 
{
  //write the code to change backgroundcolor
  //to red when RIGHT_ARROW is pressed
   background( "color:red;");

  if(Keyisdown(RIGHT_ARROW)){
    box.position.x=box.position.x+5
  }
  background( "color:;yellow");
  if(Keyisdown(LEFT_ARROW)){
    box.position.x=box.position.x-5
  }
  if(Keyisdown(UP_ARROW)){
    box.position.y=box.position.y-5
  }
  if(Keyisdown(DOWN_ARROW)){
    box.position.y=box.position.y+5
  }
  drawSprites();
}




