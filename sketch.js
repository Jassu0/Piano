var A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z;
var ground;
var groupA,groupB,groupC,groupD,groupE,groupF,groupG,groupH,groupI,groupJ,groupK,groupL,groupM,groupN,
groupO,groupP,groupQ,groupR,groupS,groupT,groupU,groupV,groupW,groupX,groupY,groupZ;
var score = 0;
var gamestate = "PLAY";
var restart, restartimage;
var statusA,statusB,statusC,statusD,statusE,statusF,statusG,statusH,statusI,statusJ,statusK,statusL,statusM,statusN,
statusO,statusP,statusQ,statusR,statusS,statusT,statusU,statusV,statusW,statusX,statusY,statusZ;
var bgimage;
var click;
function preload(){ 
    A = loadImage("A.png");
    S = loadImage("S.png");
    D = loadImage("D.png");
    F = loadImage("F.png");
    Reset = loadImage("Restart.png");
    bgimage = loadImage("Bg.jpg");
    click = loadSound("Click.mp3");
}

function setup(){
    createCanvas(displayWidth-20,displayHeight-50);
    ground = createSprite(width/2,height,width,150);
    ground.visible = false;
    //ground.shapeColor = "black";
    groupA = new Group();
    groupS = new Group();
    groupD = new Group();
    groupF = new Group();
    textSize(18);
    restart = createSprite(width/2,height/2+80);
    restart.addImage(Reset);
    restart.scale = 0.5;
    restart.visible = false;
    fill("white");
}

function draw(){
    background(bgimage);
    text("score: "+score, width/7, height/7);
    if(gamestate == "PLAY") {
        Tile1();
        Tile2();
        Tile3();
        Tile4();
        if(groupA.isTouching(ground) || groupS.isTouching(ground) || groupD.isTouching(ground) || groupF.isTouching(ground)) {
            gamestate = "END";
        }
    }
    else if(gamestate == "END") {
        groupA.destroyEach();
        groupS.destroyEach();
        groupD.destroyEach();
        groupF.destroyEach();
        textSize(35);
        fill("white");
        stroke("white");
        strokeWeight(2);
        text("GAME OVER", width/2-100, height/2);
        restart.visible = true;
        if(mousePressedOver(restart)) {
            reset();
        }
    }
    drawSprites();
}   
function reset() {
    restart.visible = false;
    gamestate = "PLAY";
    score = 0;
}
function Tile1() {
    if(frameCount%140 == 0) {
        var tile = createSprite(random(50,width-50),0,50,70);  
        tile.addImage(A);
        tile.velocityY = 5;
        tile.lifetime = 150;
        tile.scale = 0.5;
        groupA.add(tile);
        statusA = 0;
    }
 
}
function Tile2() {
    if(frameCount%150 == 0) {
        var tile = createSprite(random(50,width-50),0,50,70);  
        tile.addImage(S);
        tile.velocityY = random(4,6);
        tile.lifetime = 150;
        tile.scale = 0.5;
        groupS.add(tile);
        statusS = 0;
    }
 
}
function Tile3() {
    if(frameCount%160 == 0) {
        var tile = createSprite(random(50,width-50),0,50,70);  
        tile.addImage(D);
        tile.velocityY = random(4,7);
        tile.lifetime = 150;
        tile.scale = 0.5;
        groupD.add(tile);
        statusD = 0;
    }
 
}
function Tile4() {
    if(frameCount%170 == 0) {
        var tile = createSprite(random(50,width-50),0,50,70);  
        tile.addImage(F);
        tile.velocityY = random(4,7);
        tile.lifetime = 150;
        tile.scale = 0.5;
        groupF.add(tile);
        statusF = 0;
    }
 
}

function keyPressed() {
    if(gamestate == "PLAY") {
        if(statusA == 0) {
            if(keyCode == 65 || keyCode == 97) {
                groupA.destroyEach();
                score += 5;
                statusA = 1;
                click.play();
            }
        }
        if(statusS == 0) {
          if(keyCode == 83 || keyCode == 115) {
                groupS.destroyEach();
                score += 5;
                statusS = 1;
                click.play();
            }
        }
        if(statusD == 0) {
           if(keyCode == 68 || keyCode == 100) {
                groupD.destroyEach();
                score += 5;
                statusD = 1;
                click.play();
            } 
        }
        if(statusF == 0) {
          if(keyCode == 70 || keyCode == 102) {
                groupF.destroyEach();
                score += 5;
                statusF = 1;
                click.play();
            }  
        }
        
    }

}