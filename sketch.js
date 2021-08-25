var health= 10
function preload(){
  bg = loadImage("images/bg.jpeg")
  fishimg = loadImage("images/fish.png")
  sharkimg = loadImage("images/shark.png")
  foodimg = loadImage("images/food.png")

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  player = createSprite(150,height/2,50,50)
  player.addImage(fishimg)
  player.mirrorX(-1);
  player.scale=0.2
  foodgroup=createGroup()
  sharkgroup=createGroup()
  for(var i = 0;i<health;i++){
    healthbar= createSprite(50+i*13,50,10,20)
    healthbar.shapeColor= "green"
  }

}

function draw() {
  background(bg);
  player.debug=true
  

  

  if(keyDown("space")){
    player.velocityY=-13
  }
  player.velocityY=player.velocityY+1
    sharks()
    foods()

   
      for(var j=0;j<foodgroup.length;j++){
      if(sharkgroup.isTouching(foodgroup.get(j))){
        foodgroup.get(j).y -=30
      }
    }
  
  drawSprites();
  
}

function sharks(){
  if(frameCount%150===0 || frameCount===1){
    shark= createSprite(width+120,random(100,height-100))
    shark.addImage(sharkimg)
    shark.velocityX=-5
    shark.mirrorX(-1);
    shark.scale=0.5
    sharkgroup.add(shark)
    shark.debug=true
    shark.lifetime=width/2
  }
}
function foods(){
  if(frameCount%100===0){
   
      food= createSprite(width+120,random(100,height-100))
    food.addImage(foodimg)
    food.velocityX=-5
    food.scale=0.1
    foodgroup.add(food)
    food.debug=true
    food.lifetime=width/2

  }
}