const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var stones = []
var zombieImg, zombie
var stoneImg
var axeImg
var bg
var ground_con

let engine;
let world;

function preload() {
  axeImg = loadImage("axe.png")
  bg = loadImage("background.png")
  stoneImg = loadImage("stone.png")
  zombieImg = loadImage("zombie.png")
}

function setup() {
  createCanvas(750, 750);
  engine = Engine.create();
  world = engine.world;
  var stone = new Stone(300,100);
  frameRate(80);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)

  zombie = createSprite(width/2,675)
  zombie.addImage(zombieImg)
  zombie.scale = 0.15

  groundLeft = new Ground(0,330,200,30)
  bridge = new Bridge(17,{x:50, y:300})
  groundRight = new Ground(780,320,200,30)
  Matter.Composite.add(bridge.body,groundRight)
  ground_con = new Link(bridge, groundRight)

  

  button = createImg("axe.png")
  button.position(690,270)
  button.size(50,50)
  button.mouseClicked(drop)


  for (var i = 0; i < 9; i++) {
    var x = random(100,650);
    var y = random(10, 200);
    stone = new Stone(x,y)
    stones.push(stone);
    
  }
}

function draw() {
  background(51);
  imageMode(CENTER)
  image(bg,width/2,height/2,750,750)
  Engine.update(engine);

  for (var i = 0; i < 9;i++) {
    stones[i].show()
  }

  //groundLeft.display()
  //groundRight.display()
  bridge.show()

  drawSprites()
}

function drop() {
  //bridge.break()
  ground_con.detach()
  ground_con = null
}