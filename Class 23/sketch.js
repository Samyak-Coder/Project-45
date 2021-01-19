var fatBoy, fastFoodGroup, healthyGroup, healthyBoy, ground;
var backgroundImage, background1;
var pizzaGroup, lazaniaGroup, burgerGroup, bannaGroup, orangeGroup, brocoliGroup;
var fat = 0;
var imunity = 0;
var gameState = 1;
var gameOverImage;

function preload(){

    fatBoyImage = loadAnimation("images/fatBoy1.png","images/fatBoy2.png","images/fatBoy3.png","images/fatBoy4.png" );
    backgroundImage = loadImage("images/background1.jpg");

    oImage = loadImage("images/orange.jpg");
    bannaImage = loadImage("images/banna.png");
    brocolImage = loadImage("images/brocoli.png");

    pizaImage = loadImage("images/pizza.jpg");
    lazaniaImage = loadImage("images/lazania.jpg");
    burgerImage = loadImage("images/burger.jpg");

    gameOverImage = loadImage("images/gameover.jpg");

}

function setup(){

    createCanvas(1200,600);

    background1 = createSprite(700,100,2000,700);
    background1.addImage( backgroundImage);
    background1.scale = 3.9;

    fatBoy = createSprite(400,500,50,50);
    fatBoy.addAnimation("fatBoy", fatBoyImage);
    fatBoy.scale = 0.8;

    ground = createSprite(100,600,1000,200);
    ground.visible = false;

    brocoliGroup = new Group();
    bannaGroup = new Group();
    orangeGroup = new Group();
    burgerGroup = new Group();
    pizzaGroup = new Group();
    lazaniaGroup = new Group();

}

function draw(){

    background("pink");

    background1.velocityX = -2;
    ground.velocityX = -2;

    if(fatBoy.isTouching(bannaGroup)){

        bannaGroup.destroyEach();
        imunity = imunity + 2;

    }

    if(fatBoy.isTouching(orangeGroup)){

        orangeGroup.destroyEach();
        imunity = imunity + 1;

    }

    if(fatBoy.isTouching(brocoliGroup)){

        brocoliGroup.destroyEach();
        imunity = imunity + 3;

    }

    if(fatBoy.isTouching(burgerGroup)){

        burgerGroup.destroyEach();
        fat = fat + 3;

    }

    if(fatBoy.isTouching(pizzaGroup)){

        pizzaGroup.destroyEach();
        fat = fat + 2;

    }

    if(fatBoy.isTouching(lazaniaGroup)){

        lazaniaGroup.destroyEach();
        fat = fat + 1;

    }
    
    if(ground.x < 0){

        ground.x = ground.width/2

    }

    if(background1.x < 0){

        background1.x = background1.width/2

    }

    if(keyDown("space") && fatBoy.y >= 250){

        fatBoy.velocityY = -13;

    }

    fatBoy.velocityY = fatBoy.velocityY + 0.8;
    fatBoy.collide(ground);

    var r = Math.round(random(1,6));

    if(r === 1){

        orange();

    }
    else if(r === 2){

        banna();

    }
    else if(r === 3){

        pizza();

    }
    else if (r === 4){

        lazania();

    }
    else if(r === 5){

        burger();

    }
    else {

        brocoli();
    }


    if(fat >= 5){

        gameState = 0;
        fatBoy.setVelocity(0,0);
        bannaGroup.setVelocityEach(0);
        bannaGroup.setLifetimeEach(0);
        orangeGroup.setVelocityEach(0);
        orangeGroup.setLifetimeEach(0);
        brocoliGroup.setVelocityEach(0);
        brocoliGroup.setLifetimeEach(0);
        pizzaGroup.setVelocityEach(0);
        pizzaGroup.setLifetimeEach(0);
        lazaniaGroup.setVelocityEach(0);
        lazaniaGroup.setLifetimeEach(0);
        burgerGroup.setVelocityEach(0);
        burgerGroup.setLifetimeEach(0);

        fatBoy.changeAnimation("Gameover", gameOverImage);
        fatBoy.scale = 0.8;
        fatBoy.x = 300;
        fatBoy.y = 300;

    }
    
    drawSprites();

    textSize(30);
    fill("red");
    stroke("black");
    strokeWeight(2);
    text("FAT " + fat, 850,100);

   textSize(30);
   fill("green");
   stroke("black");
   strokeWeight(2);
   text("IMUNITY " + imunity,1000,100)

}

function orange(){

    if(frameCount % 100 === 0){

        var o = createSprite(100,170,10,10);
        o.addImage(oImage);
        o.scale = 0.3;
        o.velocityX = 2;
        o.lifetime = 200;
        orangeGroup.add(o);

    }
    
}

function banna(){

    if(frameCount % 200 === 0){

        var b = createSprite(200,200,10,10);
        b.addImage(bannaImage);
        b.scale = 0.3;
        b.velocityX = 2;
        b.lifetime = 200;
        bannaGroup.add(b);

    }
    
}

function brocoli(){

    if(frameCount % 300 === 0){

        var br = createSprite(300,100,10,10);
        br.addImage(brocolImage);
        br.scale = 0.3;
        br.velocityX = 2;
        br.lifetime = 200;
        brocoliGroup.add(br);

    }
    
}

function pizza(){

    if(frameCount % 150 === 0){

        var p = createSprite(150,150,10,10);
        p.addImage(pizaImage);
        p.scale = 0.3;
        p.velocityX = 2;
        p.lifetime = 200;
        pizzaGroup.add(p);

    }
    
}

function lazania(){

    if(frameCount % 250 === 0){

        var l = createSprite(310,250,10,10);
        l.addImage(lazaniaImage);
        l.scale = 0.3;
        l.velocityX = 2;
        l.lifetime = 200;
        lazaniaGroup.add(l);

    }
    
}

function burger(){

    if(frameCount % 180 === 0){

        var bu = createSprite(250,300,10,10);
        bu.addImage(burgerImage);
        bu.scale = 0.3;
        bu.velocityX = 2;
        bu.lifetime = 200;
        burgerGroup.add(bu);

    }
    
}