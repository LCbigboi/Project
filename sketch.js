var ground
var dirt1
var dirt2
var dirt3
var dirt4
var dirt5
var dirt6
var dirt7
var dirt8
var dirtpic1, dirtpic2, dirtpic3, dirtpic4, dirtpic5, dirtpic6, dirtpic7, dirtpic8 

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

function preload()
{
  dirtBlock = loadImage('Piskels/Dirt Block.png');
  brickB = loadImage('Piskels/Brick BluePrint.png');
  chestB = loadImage('Piskels/Chest BluePrint.png');
  craftingTableB = loadImage('Piskels/Chest Blueprint.png');
  ladderB = loadImage('Piskels/Ladder Blueprint.png');
  oakBlockB = loadImage('Piskels/Oak Block Blueprint.png');
  bedB = loadImage('Piskels/Bed BluePrint.png');


}

function setup()
{
  createCanvas(windowWidth-10,windowHeight-10);
  ground = createSprite(windowWidth/2,windowHeight-180,windowWidth-10,15);
  ground.visible = false; 

}

function draw() 
{
  background('lightBlue');

  image(dirtBlock,1,windowHeight-190,200,200);
  image(dirtBlock,200,windowHeight-190,200,200);
  image(dirtBlock,400,windowHeight-190,200,200);
  image(dirtBlock,600,windowHeight-190,200,200);
  image(dirtBlock,800,windowHeight-190,200,200);
  image(dirtBlock,1000,windowHeight-190,200,200);
  image(dirtBlock,1200,windowHeight-190,200,200);
  image(dirtBlock,1400,windowHeight-190,200,200);
  image(dirtBlock,1600,windowHeight-190,200,200);
  image(dirtBlock,1750,windowHeight-190,200,200);
  image(ladderB,600, windowHeight-50,700,700)
  
  drawSprites();
}

