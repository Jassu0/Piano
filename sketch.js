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
    B = loadImage("B.png");
    C = loadImage("C.png");

    D = loadImage("D.png");
    E = loadImage("E.png");
    F = loadImage("F.png");

    G = loadImage("G.png");
    H = loadImage("H.png");
    I = loadImage("I.png");

    J = loadImage("J.png");
    K = loadImage("K.png");
    L = loadImage("L.png");

    M = loadImage("M.png");
    N = loadImage("N.png");
    O = loadImage("O.png");

    P = loadImage("P.png");
    Q = loadImage("Q.png");
    R = loadImage("R.png");

    S = loadImage("S.png");
    T = loadImage("T.png");
    U = loadImage("U.png");

    V = loadImage("V.png");
    W = loadImage("W.png");
    X = loadImage("X.png");

    Y = loadImage("Y.png");
    Z = loadImage("Z.png");

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
    groupB = new Group();
    groupC = new Group();

    groupD = new Group();
    groupE = new Group();
    groupF = new Group();

    groupG = new Group();
    groupH = new Group();
    groupI = new Group();

    groupJ = new Group();
    groupK = new Group();
    groupL = new Group();

    groupM = new Group();
    groupN = new Group();
    groupO = new Group();

    groupP = new Group();
    groupQ = new Group();
    groupR = new Group();

    groupS = new Group();
    groupT = new Group();
    groupU = new Group();

    groupV = new Group();
    groupW = new Group();
    groupX = new Group();

    groupY = new Group();
    groupZ = new Group();

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
        Tile5();
        Tile6();
        Tile7();
        Tile8();
        Tile9();
        Tile10();
        Tile11();
        Tile12();
        Tile13();
        Tile14();
        Tile15();
        Tile16();
        Tile17();
        Tile18();
        Tile19();
        Tile20();
        Tile21();
        Tile22();
        Tile23();
        Tile24();
        Tile25();
        Tile26();

        if(groupA.isTouching(ground) || groupB.isTouching(ground) || groupC.isTouching(ground) || groupD.isTouching(ground) || groupE.isTouching(ground) 
        || groupF.isTouching(ground) || groupG.isTouching(ground) || groupH.isTouching(ground) || groupI.isTouching(ground) || groupJ.isTouching(ground)
         || groupK.isTouching(ground) || groupL.isTouching(ground) || groupM.isTouching(ground) || groupN.isTouching(ground) || groupO.isTouching(ground)
         || groupP.isTouching(ground) || groupQ.isTouching(ground) || groupR.isTouching(ground) || groupS.isTouching(ground)
         || groupT.isTouching(ground) || groupU.isTouching(ground) || groupV.isTouching(ground) || groupW.isTouching(ground)
         || groupX.isTouching(ground) || groupY.isTouching(ground) || groupZ.isTouching(ground)) {
            gamestate = "END";
        }
    }
    else if(gamestate == "END") {
        groupA.destroyEach();
        groupB.destroyEach();
        groupC.destroyEach();
        groupD.destroyEach();
        groupE.destroyEach();
        groupF.destroyEach();
        groupG.destroyEach();
        groupH.destroyEach();
        groupI.destroyEach();
        groupJ.destroyEach();
        groupK.destroyEach();
        groupL.destroyEach();
        groupM.destroyEach();
        groupN.destroyEach();
        groupO.destroyEach();
        groupP.destroyEach();
        groupQ.destroyEach();
        groupR.destroyEach();
        groupS.destroyEach();
        groupT.destroyEach();
        groupU.destroyEach();
        groupV.destroyEach();
        groupW.destroyEach();
        groupX.destroyEach();
        groupY.destroyEach();
        groupZ.destroyEach();
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
    if(frameCount%180 == 0) {
        var tile = createSprite(random(50,width-50),0,50,70);  
        tile.addImage(A);
        tile.velocityY = random(4,7);
        tile.lifetime = 150;
        tile.scale = 0.5;
        groupA.add(tile);
        statusA = 0;
    }
 
}
function Tile2() {
    if(frameCount%190 == 0) {
        var tile = createSprite(random(50,width-50),0,50,70);  
        tile.addImage(B);
        tile.velocityY = random(4,7);
        tile.lifetime = 150;
        tile.scale = 0.5;
        groupB.add(tile);
        statusB = 0;
    }
 
}
function Tile3() {
    if(frameCount%200 == 0) {
        var tile = createSprite(random(50,width-50),0,50,70);  
        tile.addImage(C);
        tile.velocityY = random(4,7);
        tile.lifetime = 150;
        tile.scale = 0.5;
        groupC.add(tile);
        statusC = 0;
    }
 
}
function Tile4() {
    if(frameCount%220 == 0) {
        var tile = createSprite(random(50,width-50),0,50,70);  
        tile.addImage(D);
        tile.velocityY = random(4,7);
        tile.lifetime = 150;
        tile.scale = 0.5;
        groupD.add(tile);
        statusD = 0;
    }
 
}
function Tile5() {
    if(frameCount%240 == 0) {
        var tile = createSprite(random(50,width-50),0,50,70);  
        tile.addImage(E);
        tile.velocityY = random(4,7);
        tile.lifetime = 150;
        tile.scale = 0.5;
        groupE.add(tile);
        statusE = 0;
    }
 
}
function Tile6() {
    if(frameCount%260 == 0) {
        var tile = createSprite(random(50,width-50),0,50,70);  
        tile.addImage(F);
        tile.velocityY = random(4,7);
        tile.lifetime = 150;
        tile.scale = 0.5;
        groupF.add(tile);
        statusF = 0;
    }
}
function Tile7() {
    if(frameCount%280 == 0) {
        var tile = createSprite(random(50,width-50),0,50,70);  
        tile.addImage(G);
        tile.velocityY = random(4,7);
        tile.lifetime = 150;
        tile.scale = 0.5;
        groupG.add(tile);
        statusG = 0;
    }
    
}
function Tile8() {
    if(frameCount%300 == 0) {
        var tile = createSprite(random(50,width-50),0,50,70);  
        tile.addImage(H);
        tile.velocityY = random(4,7);
        tile.lifetime = 150;
        tile.scale = 0.5;
        groupH.add(tile);
        statusH = 0;
    }
    
}
function Tile9() {
    if(frameCount%320 == 0) {
        var tile = createSprite(random(50,width-50),0,50,70);  
        tile.addImage(I);
        tile.velocityY = random(4,7);
        tile.lifetime = 150;
        tile.scale = 0.5;
        groupI.add(tile);
        statusI = 0;
    }
}
function Tile10() {
    if(frameCount%340 == 0) {
        var tile = createSprite(random(50,width-50),0,50,70);  
        tile.addImage(J);
        tile.velocityY = random(4,7);
        tile.lifetime = 150;
        tile.scale = 0.5;
        groupJ.add(tile);
        statusJ = 0;
    }
    
}
function Tile11() {
    if(frameCount%190 == 0) {
        var tile = createSprite(random(50,width-50),0,50,70);  
        tile.addImage(K);
        tile.velocityY = random(4,7);
        tile.lifetime = 150;
        tile.scale = 0.5;
        groupK.add(tile);
        statusK = 0;
    }
    
}
function Tile12() {
    if(frameCount%210 == 0) {
        var tile = createSprite(random(50,width-50),0,50,70);  
        tile.addImage(L);
        tile.velocityY = random(4,7);
        tile.lifetime = 150;
        tile.scale = 0.5;
        groupL.add(tile);
        statusL = 0;
    }
}
function Tile13() {
    if(frameCount%230 == 0) {
        var tile = createSprite(random(50,width-50),0,50,70);  
        tile.addImage(M);
        tile.velocityY = random(4,7);
        tile.lifetime = 150;
        tile.scale = 0.5;
        groupM.add(tile);
        statusM = 0;
    }
    
}
function Tile14() {
    if(frameCount%250 == 0) {
        var tile = createSprite(random(50,width-50),0,50,70);  
        tile.addImage(N);
        tile.velocityY = random(4,7);
        tile.lifetime = 150;
        tile.scale = 0.5;
        groupN.add(tile);
        statusN = 0;
    }
    
}
function Tile15() {
    if(frameCount%270 == 0) {
        var tile = createSprite(random(50,width-50),0,50,70);  
        tile.addImage(O);
        tile.velocityY = random(4,7);
        tile.lifetime = 150;
        tile.scale = 0.5;
        groupO.add(tile);
        statusO = 0;
    }
}
function Tile16() {
    if(frameCount%290 == 0) {
        var tile = createSprite(random(50,width-50),0,50,70);  
        tile.addImage(P);
        tile.velocityY = random(4,7);
        tile.lifetime = 150;
        tile.scale = 0.5;
        groupP.add(tile);
        statusP = 0;
    }
    
}
function Tile17() {
    if(frameCount%310 == 0) {
        var tile = createSprite(random(50,width-50),0,50,70);  
        tile.addImage(Q);
        tile.velocityY = random(4,7);
        tile.lifetime = 150;
        tile.scale = 0.5;
        groupQ.add(tile);
        statusQ = 0;
    }
    
}
function Tile18() {
    if(frameCount%330 == 0) {
        var tile = createSprite(random(50,width-50),0,50,70);  
        tile.addImage(R);
        tile.velocityY = random(4,7);
        tile.lifetime = 150;
        tile.scale = 0.5;
        groupR.add(tile);
        statusR = 0;
    }
}
function Tile19() {
    if(frameCount%350 == 0) {
        var tile = createSprite(random(50,width-50),0,50,70);  
        tile.addImage(S);
        tile.velocityY = random(4,7);
        tile.lifetime = 150;
        tile.scale = 0.5;
        groupS.add(tile);
        statusS = 0;
    }
    
}
function Tile20() {
    if(frameCount%370 == 0) {
        var tile = createSprite(random(50,width-50),0,50,70);  
        tile.addImage(T);
        tile.velocityY = random(4,7);
        tile.lifetime = 150;
        tile.scale = 0.5;
        groupT.add(tile);
        statusT = 0;
    }
    
}
function Tile21() {
    if(frameCount%390 == 0) {
        var tile = createSprite(random(50,width-50),0,50,70);  
        tile.addImage(U);
        tile.velocityY = random(4,7);
        tile.lifetime = 150;
        tile.scale = 0.5;
        groupU.add(tile);
        statusU = 0;
    }
}
function Tile22() {
    if(frameCount%410 == 0) {
        var tile = createSprite(random(50,width-50),0,50,70);  
        tile.addImage(V);
        tile.velocityY = random(4,7);
        tile.lifetime = 150;
        tile.scale = 0.5;
        groupV.add(tile);
        statusV = 0;
    }
    
}
function Tile23() {
    if(frameCount%400 == 0) {
        var tile = createSprite(random(50,width-50),0,50,70);  
        tile.addImage(W);
        tile.velocityY = random(4,7);
        tile.lifetime = 150;
        tile.scale = 0.5;
        groupW.add(tile);
        statusW = 0;
    }

}
function Tile24() {
    if(frameCount%421 == 0) {
        var tile = createSprite(random(50,width-50),0,50,70);  
        tile.addImage(X);
        tile.velocityY = random(4,7);
        tile.lifetime = 150;
        tile.scale = 0.5;
        groupX.add(tile);
        statusX = 0;
    }
}
function Tile25() {
    if(frameCount%440 == 0) {
        var tile = createSprite(random(50,width-50),0,50,70);  
        tile.addImage(Y);
        tile.velocityY = random(4,7);
        tile.lifetime = 150;
        tile.scale = 0.5;
        groupY.add(tile);
        statusY = 0;
    }
    
}
function Tile26() {
    if(frameCount%460 == 0) {
        var tile = createSprite(random(50,width-50),0,50,70);  
        tile.addImage(Z);
        tile.velocityY = random(4,7);
        tile.lifetime = 150;
        tile.scale = 0.5;
        groupZ.add(tile);
        statusZ = 0;
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
        if(statusB == 0) {
          if(keyCode == 66 || keyCode == 98) {
                groupB.destroyEach();
                score += 5;
                statusB = 1;
                click.play();
            }
        }
        if(statusC == 0) {
           if(keyCode == 67 || keyCode == 99) {
                groupC.destroyEach();
                score += 5;
                statusC = 1;
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
        if(statusE == 0) {
            if(keyCode == 69 || keyCode == 101) {
                groupE.destroyEach();
                score += 5;
                statusE = 1;
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
        if(statusG == 0) {
            if(keyCode == 71 || keyCode == 103) {
                groupG.destroyEach();
                score += 5;
                statusG = 1;
                click.play();
            }
        }
        if(statusH == 0) {
            if(keyCode == 72 || keyCode == 104) {
                groupH.destroyEach();
                score += 5;
                statusH = 1;
                click.play();
            }
        }
        if(statusI == 0) {
            if(keyCode == 73 || keyCode == 105) {
                groupI.destroyEach();
                score += 5;
                statusI = 1;
                click.play();
            }
        }
        if(statusJ == 0) {
            if(keyCode == 74 || keyCode == 106) {
                groupJ.destroyEach();
                score += 5;
                statusJ = 1;
                click.play();
            }
        }
        if(statusK == 0) {
            if(keyCode == 75 || keyCode == 107) {
                groupK.destroyEach();
                score += 5;
                statusK = 1;
                click.play();
            }
        }
        if(statusL == 0) {
            if(keyCode == 76 || keyCode == 108) {
                groupL.destroyEach();
                score += 5;
                statusL = 1;
                click.play();
            }
        }
        if(statusM == 0) {
            if(keyCode == 77 || keyCode == 109) {
                groupM.destroyEach();
                score += 5;
                statusM = 1;
                click.play();
            }
        }
        if(statusN == 0) {
            if(keyCode == 78 || keyCode == 110) {
                groupN.destroyEach();
                score += 5;
                statusN = 1;
                click.play();
            }
        }
        if(statusO == 0) {
            if(keyCode == 79 || keyCode == 111) {
                groupO.destroyEach();
                score += 5;
                statusO = 1;
                click.play();
            }
        }
        if(statusP == 0) {
            if(keyCode == 80 || keyCode == 112) {
                groupP.destroyEach();
                score += 5;
                statusP = 1;
                click.play();
            }
        }
        if(statusQ == 0) {
            if(keyCode == 81 || keyCode == 113) {
                groupQ.destroyEach();
                score += 5;
                statusQ = 1;
                click.play();
            }
        }
        if(statusR == 0) {
            if(keyCode == 82 || keyCode == 114) {
                groupR.destroyEach();
                score += 5;
                statusR = 1;
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
        if(statusT == 0) {
            if(keyCode == 84 || keyCode == 116) {
                groupT.destroyEach();
                score += 5;
                statusT = 1;
                click.play();
            }
        }
        if(statusU == 0) {
            if(keyCode == 85 || keyCode == 117) {
                groupU.destroyEach();
                score += 5;
                statusU = 1;
                click.play();
            }
        }
        if(statusV == 0) {
            if(keyCode == 86 || keyCode == 118) {
                groupV.destroyEach();
                score += 5;
                statusV = 1;
                click.play();
            }
        }
        if(statusW == 0) {
            if(keyCode == 87 || keyCode == 119) {
                groupW.destroyEach();
                score += 5;
                statusW = 1;
                click.play();
            }
        }
        if(statusX == 0) {
            if(keyCode == 88 || keyCode == 120) {
                groupX.destroyEach();
                score += 5;
                statusX = 1;
                click.play();
            }
        }
        if(statusY == 0) {
            if(keyCode == 89 || keyCode == 121) {
                groupY.destroyEach();
                score += 5;
                statusY = 1;
                click.play();
            }
        }
        if(statusZ == 0) {
            if(keyCode == 90 || keyCode == 122) {
                groupZ.destroyEach();
                score += 5;
                statusZ = 1;
                click.play();
            }
        }
    }

}
/*
function alphabet() {
    var R = Math.round(1,26);
    switch(R) {
        case 1: alphaimage = A;
        statusA = 0;
        break;
        case 2: alphaimage = B;
        statusB = 0;
        break;
        case 3: alphaimage = C;
        statusC = 0;
        break;
        case 4: alphaimage = D;
        statusD = 0;
        break;
        case 5: alphaimage = E;
        statusE = 0;
        break;
        case 6: alphaimage = F;
        statusF = 0;
        break;
        case 7: alphaimage = G;
        statusG = 0;
        break;
        case 8: alphaimage = H;
        statusH = 0;
        break;
        
    }
}
*/