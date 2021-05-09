//Create variables here
var dog;
var happyDog;
var dogImg;
var happyDogImg;
var database;
var foodS;
var foodStock;

function preload(){
  dogImg = loadImage('images/dogImg.png');
  happyDogImg = loadImage('images/dogImg1.png');
  console.log(dog);
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  fetchFoodStock();
  dog = createSprite(300,300,10,10);
  dog.scale = 0.5;
  dog.addImage(dogImg);

  
}
function fetchFoodStock(){
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}
function readStock(value){
 //alert(JSON.stringify(value)); 
 foodS = value.val();
}

function draw() {  
  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
    foodS = foodS-1;//foodS--
    writeStock(foodS);
    dog.addImage(happyDogImg);
  }

  

  drawSprites();
  //add styles here

}

function writeStock(x){
  database.ref('/').update({
    Food:x
  });
}


