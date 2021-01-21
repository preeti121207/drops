const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var maxDrops = 100;
var drops;

function setup(){
   var canvas = createCanvas(400,600)
   background("black");
   
    engine = Engine.create();
    world = engine.world;



    umbrella = new Umbrella(200,400,120,200);

    for(var i = 0; i<maxDrops; i++){
        drops.push(new Drops(random(0,400), random(0,400)))
    }
}

function draw(){




umbrella.display();
drops.display();
}   

