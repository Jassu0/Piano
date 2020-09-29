function preload(){ 
}

function setup(){
    createCanvas(1000,700);
    
}

function draw(){
    background(0);
    Tile1();
    Tile2();
    Tile3();
    Tile4();
    Tile5();
    Tile6();
    Tile7();
    drawSprites();
}   

function Tile1() {
    if(frameCount%140 == 0) {
        var tile = createSprite(random(50,950),0,50,70);  
        tile.shapeColor = "yellow";
        tile.velocityY = 5;
        tile.lifetime = 150;
    }
 
}
function Tile2() {
    if(frameCount%150 == 0) {
        var tile = createSprite(random(50,950),0,50,70);  
        tile.shapeColor = "red";
        tile.velocityY = random(4,6);
        tile.lifetime = 150;
    }
 
}
function Tile3() {
    if(frameCount%160 == 0) {
        var tile = createSprite(random(50,950),0,50,70);  
        tile.shapeColor = "lightblue";
        tile.velocityY = random(4,7);
        tile.lifetime = 150;
    }
 
}
function Tile4() {
    if(frameCount%170 == 0) {
        var tile = createSprite(random(50,950),0,50,70);  
        tile.shapeColor = "green";
        tile.velocityY = random(4,7);
        tile.lifetime = 150;
    }
 
}
function Tile5() {
    if(frameCount%180 == 0) {
        var tile = createSprite(random(50,950),0,50,70);  
        tile.shapeColor = "pink";
        tile.velocityY = random(4,7);
        tile.lifetime = 150;
    }
 
}
function Tile6() {
    if(frameCount%175 == 0) {
        var tile = createSprite(random(50,950),0,50,70);  
        tile.shapeColor = "orange";
        tile.velocityY = random(4,7);
        tile.lifetime = 150;
    }
 
}
function Tile7() {
    if(frameCount%185 == 0) {
        var tile = createSprite(random(50,950),0,50,70);  
        tile.shapeColor = "purple";
        tile.velocityY = random(4,7);
        tile.lifetime = 150;
    }
 
}