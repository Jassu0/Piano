var A,S,D,F;
var ground;
var groupA, groupS, groupD, groupF;
var score = 0;
var gamestate = "PLAY";
var restart, restartimage;
function preload(){ 
    A = loadImage("A.png");
    S = loadImage("S.png");
    D = loadImage("D.png");
    F = loadImage("F.png");
}

function setup(){
    createCanvas(1000,700);
    ground = createSprite(500,680,1000,40);
    ground.shapeColor = "red";
    groupA = new Group();
    groupS = new Group();
    groupD = new Group();
    groupF = new Group();
    textSize(18);
    restart = createSprite(500,350);
    restart.visible = false;
    fill("white");
}

function draw(){
    background(0);
    text("score: "+score, 80, 80);
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
        text("GAME OVER", 380, 300);
        restart.visible = true;
    }
    drawSprites();
}   

function Tile1() {
    if(frameCount%140 == 0) {
        var tile = createSprite(random(50,950),0,50,70);  
        tile.addImage(A);
        tile.velocityY = 5;
        tile.lifetime = 150;
        tile.scale = 0.5;
        groupA.add(tile);
    }
 
}
function Tile2() {
    if(frameCount%150 == 0) {
        var tile = createSprite(random(50,950),0,50,70);  
        tile.addImage(S);
        tile.velocityY = random(4,6);
        tile.lifetime = 150;
        tile.scale = 0.5;
        groupS.add(tile);
    }
 
}
function Tile3() {
    if(frameCount%160 == 0) {
        var tile = createSprite(random(50,950),0,50,70);  
        tile.addImage(D);
        tile.velocityY = random(4,7);
        tile.lifetime = 150;
        tile.scale = 0.5;
        groupD.add(tile);
    }
 
}
function Tile4() {
    if(frameCount%170 == 0) {
        var tile = createSprite(random(50,950),0,50,70);  
        tile.addImage(F);
        tile.velocityY = random(4,7);
        tile.lifetime = 150;
        tile.scale = 0.5;
        groupF.add(tile);
    }
 
}

function keyPressed() {
    if(gamestate == "PLAY") {
        if(keyCode == 65 || keyCode == 97) {
            groupA.destroyEach();
            score += 5;
        }
        if(keyCode == 83 || keyCode == 115) {
            groupS.destroyEach();
            score += 5;
        }
        if(keyCode == 68 || keyCode == 100) {
            groupD.destroyEach();
            score += 5;
        }
        if(keyCode == 70 || keyCode == 102) {
            groupF.destroyEach();
            score += 5;
        }
    }

}