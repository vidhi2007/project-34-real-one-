var dog;
var happyDog;
var database;
var foodS;
var foodStock;

function preload()
{
  dogImg = loadImage("dogImg.png");
  happyDogImg = loadImage("dogImg1.png")
}

function setup() {
	createCanvas(500,500);
  
  background(46,139,87);

  dogSprite= createSprite(10,10,200,200);
  dogSprite.addImage(dogImg);

  foodSotck=database.red('Food');
  foodStock.om("value, readStock")

}


function draw() {  

  if(keyDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);  
  }

  drawSprites();
  //add styles here

 textSize(20);
 fill("blue");
 stroke(4);
}

