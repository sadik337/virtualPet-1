var dog,happyDog,database,foodS,foodStock,dogImg;

function preload()
{
	dogImg=loadImage("dog1.png");
  happyDog=loadImage("dog2.png");

}

function setup() {
	createCanvas(500,500);
  database = firebase.database();
   
  dog=createSprite(230,180,50,20);
  dog.addImage(dogImg);
  dog.scale=0.2


  foodStock=database.ref('food');
  foodStock.on("value",readStock);
  

}


function draw() {  
   background(46,139,87);

   textSize(12);
   fill("black");
   //stroke("black");
   text("Note: Press UP_ARROW key to feed buggi milk",40,50);

   if(keyWentDown(UP_ARROW)){
      writeStock(foodS);
      dog.addImage(happyDog);
     
   }

  drawSprites();

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  
  database.ref('/').update({
   Food:x
  })
}