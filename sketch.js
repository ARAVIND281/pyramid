const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box10;
var box2;
var box20;
var box3;
var box30;
var box4;
var box40;
var box5;
var box50;
var box6;
var box60;
var box7;
var box70;
var box8;
var box80;
var box9;
var box90;

var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(40,345,80,35);
    box10 = new Box(40,280,80,35);
    box2 = new Box(120,345,80,35);
    box20 = new Box(120,280,80,35);
    box3 = new Box(200,345,80,35);
    box30 = new Box(200,280,80,35);
    box4 = new Box(280,345,80,35);
    box40 = new Box(280,280,80,35);
    box5 = new Box(360,345,80,35);
    box50 = new Box(360,280,80,35);
    box6 = new Box(120,215,80,35);
    box60 = new Box(120,250,80,35);
    box7 = new Box(200,215,80,35);
    box70 = new Box(200,250,80,35);
    box8 = new Box(200,145,80,35);
    box80 = new Box(200,180,80,35);
    box9 = new Box(280,215,80,35);
    box90 = new Box(280,250,80,35);
    ground = new Ground();
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box10.display();
    box2.display();
    box20.display();
    box3.display();
    box30.display();
    box4.display();
    box40.display();
    box5.display();
    box50.display();
    box6.display();
    box60.display();
    box7.display();
    box70.display();
    box8.display();
    box80.display();
    box9.display();
    box90.display();
    ground.display();
   
}