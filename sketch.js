//Create variables here
var dog,dogImage;
var happyDog,happydogImage;
var database;
var foodS,foodStock,readStock;

function preload()
{
	//load images here
  dogImage= loadImage("images/dogImg.png");
  happyDogImage = loadImage("images/dogImg1.png");
  
}

function setup() {
  database = firebase.database();
  
  canvas = createCanvas(800,700);
  dog=createSprite(400,350,100,100);
  dog.addImage(dogImage);
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  }


function draw() {  
  background(46,139,87);
  
 
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogImage);
  }
  drawSprites();
  fill(255,255,254);
  stroke('black');
  text('Food Remaining: '+ foodS,170,200);
  textSize(13);
  text('Press Up Arrow_Key To Feed Milk',130,10,300,20);
}
  
function readStock(data)
  {
    foodS=data.val();
  }
  
  function writeStock(x)
  {
    if(x<=0){
      x=0;
    }
    else{
      x=x-1;
    }
    database.ref('/').update({
      Food:x
    })
  }

  //add styles here

