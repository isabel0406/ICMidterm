let blockImg;
let m,n;
let tileSize = 25;
let dx = 0;
let board = [];
let shape;
let canMove = true;
//create array for moving figures
let current = [];
//create rules of blocks
let block = [
  //shape "O"
  [2,3,4,5],
  //shape "J"
  [3,5,7,6],
  //shape "L"
  [2,3,5,7],
  //shape "T"
  [3,5,4,7],
  //shape "S"
  [3,5,4,6],
  //shape "Z"
  [2,4,5,7],
  //shape "I"
  [1,3,5,7]
];
let timer = 0;
let delayed = 0.8
function preload(){
  blockImg = loadImage("blocks/block3.png");
}
function setup(){
  createCanvas(400,600);

  //set the canvs into m*n grids
  m = int(height/tileSize);
  n = int(width/tileSize);
  for (let i = 0; i < m; i++){
    board[i] = new Array(m);
    for(let k = 0;k<n;k++){
      //add space for no blocks
      board[i][k] = 0;
    }
  }
  //create figures
  for(let j = 0; j < 4;j++){
    current[j] = new Blocks();
  }
  //create random shape in block array
  shape = int(random(7));

}
function draw(){
  background(220);

  drawBlocks();
  check();


  for (let h = 0; h <m; h ++){
    for (let k = 0; k <n; k++){
      text(board[h][k],k*tileSize,h*tileSize);
    }
  }

  //console.log(frameCount);
  timer += deltaTime / 1000;
  if(timer>delay){
    for(i = 0; i<4;i++){
        current[i].move();
    }
  }
  for (let i = 0 ;i < 4;i++){
    if(keyIsDown(65)){
      dx -= 0.1;
    }else if (keyIsDown(68)){
      dx += 0.1;
    }
  }
  for( i = 0; i < 4; i++){
    //console.log(current[i].x);
    image(blockImg,current[i].x*tileSize,current[i].y*tileSize,tileSize,tileSize);
  }

}

class Blocks{
  constructor(){
    this.x = 0;
    this.y = 0;
  }
  move(){
    this.x+= dx;
    this.y+=1;
    board[this.y][this.x]=1;
  }
}

function drawBlocks(){

  //compute the x and y position of each block
  for(let i = 0; i<4; i++){
    current[i].x = block[shape][i]%2+n/2;
    current[i].y = int(block[shape][i]/2)-1;
    //board[current[i].y][current[i].x] = 1;
  }

  delay = 0.8;
}

function check(){
  // to check if current grid has been placed blockS

}
