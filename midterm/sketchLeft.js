let theBlocks = [];
let temp;
let block1,block2,block3,block4,block5,block6,block7,block8,block9,block10;
//import block's images
function preload(){
  block1 = loadImage("blocks/block1.png");
  block2 = loadImage("blocks/block2.png");
  block3 = loadImage("blocks/block3.png");
  block4 = loadImage("blocks/block4.png");
  block5 = loadImage("blocks/block5.png");
  block6 = loadImage("blocks/block6.png");
  block7 = loadImage("blocks/block7.png");
  block8 = loadImage("blocks/block8.png");
  block9 = loadImage("blocks/block9.png");
  block10 = loadImage("blocks/block10.png");
}
function setup(){
  imageMode(CENTER);
  createCanvas(400,600);
  // cnv.parent("#canvas_container");
  // cnv.style("display","block");
  // cnv.style("margin","auto");

  // temp = new Blocks(width/2,-50);



}
function draw(){
  background(220);
  fill(92, 128, 188);
  noStroke();
  rect(0,0,5,height);
  rect(395,0,5,height);
  console.log(temp);

  if(frameCount%120 == 0){
    temp = int(random(1,11));
    let nb = new Blocks(width/2,-50,temp);
    theBlocks.push(nb);
  }
  for(let i = 0; i<theBlocks.length;i++){
    theBlocks[i].display();
    theBlocks[i].move();
  }

}

class Blocks{
  constructor(x,y,temp){

    this.xPos = x;
    this.yPos = y;
    this.xSpeed = 5;
    this.ySpeed = 10;
    this.shape = temp;

  }
  display(){
    if(this.shape == 1){
      image(block1,this.xPos,this.yPos,100,100);
    }else if(this.shape == 2){
      image(block2,this.xPos,this.yPos,100,100);
    }else if(this.shape == 3){
      image(block3,this.xPos,this.yPos,100,100);
    }else if(this.shape == 4){
      image(block4,this.xPos,this.yPos,100,100);
    }else if(this.shape == 5){
      image(block5,this.xPos,this.yPos,100,100);
    }else if(this.shape == 6){
      image(block6,this.xPos,this.yPos,100,100);
    }
  }
  move(){
    // console.log("move");
    if(keyIsDown(65)){
      this.xPos -= this.xSpeed;
    } else if(keyIsDown(68)){
      this.xPos += this.xSpeed;
    }
    if(keyIsDown(83)){
      this.yPos += this.ySpeed*2;
    }else if(frameCount%60 == 0){
      this.yPos += this.ySpeed;
    }
    console.log(this.xPos);
  }

}
