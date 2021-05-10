var cat,mouse



function preload() {
    //load the images here
bgImage=loadImage("images/garden.png")
catImage1=loadAnimation("images/cat1.png")
mouseImage1=loadAnimation("images/mouse1.png")
catImage2=loadAnimation("images/cat2.png","images/cat3.png")
catImage3=loadAnimation("images/cat4.png")
mouseImage2=loadAnimation("images/mouse2.png","images/mouse3.png")
mouseImage3=loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(870,600);
    cat.addAnimation("catsleeping",catImage1);
    cat.scale=0.2;
    mouse=createSprite(200,600);
    mouse.addAnimation("mousestanding",mouseImage1);
    mouse.scale=0.15;

}

function draw() {

    background(bgImage);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<cat.width/2+mouse.width/2){
        cat.velocityX=0;
        cat.addAnimation("cat",catImage3);
       // cat.x=300;
        cat.scale=0.2;
        cat.changeAnimation("cat",catImage3);
        mouse.addAnimation("mouse",mouseImage3);
        mouse.scale=0.15;
        mouse.changeAnimation("mouse",mouseImage3);


    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyDown(LEFT_ARROW)){
      cat.velocityX=-5;
      cat.addAnimation("catrunning",catImage2);
      cat.changeAnimation("catrunning",catImage2);
      mouse.addAnimation("mouseteasing",mouseImage2);
      mouse.changeAnimation("mouseteasing",mouseImage2);
  }


}
