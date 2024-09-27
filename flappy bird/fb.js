var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var bird = new Image();
var bg = new Image();
var fg = new Image();
var pipeUp = new Image();
var pipeDown = new Image();

bird.src = "img/bird.png";
bg.src = "img/bg.png";
fg.src = "img/fg.png";
pipeUp.src = "img/pU.png";
pipeDown.src = "img/pD.png";

// Sound files
var fly = new Audio();
var sa = new Audio();

fly.src = "audio/fly.mp3";
sa.src = "audio/score.mp3";


var gap = 100;

// When pressing something button
document.addEventListener("keydown", moveUp);

function moveUp() {
    yPos -= 40;
    fly.play();
}

// Creating blocks
var pipe = [];
pipe[0] = {
    x: cvs.width,
    y: 0
}

var score = 0;

// position bird

var xPos = 10;
var yPos = 150;
var grav = 1.4;

function draw() {
    ctx.drawImage(bg, 0 , 0);

    for( var i = 0 ; i < pipe.length; i++) {
        ctx.drawImage(pipeUp, pipe[i].x , pipe[i].y);
        ctx.drawImage(pipeDown, pipe[i].x , pipe[i].y + pipeUp.height + gap);

        pipe[i].x--;

        if(pipe[i].x == 90) {
            pipe.push({
                x : cvs.width,
                y : Math.floor(Math.random() * pipeUp.height) - pipeUp.height
            });
        }

        if(xPos + bird.width >= pipe[i].x 
            && xPos <= pipe[i].x + pipeUp.width 
            && (yPos <= pipe[i].y + pipeUp.height
                || yPos + bird.height >= pipe[i].y + pipeUp.height + gap) || yPos + bird.height >= cvs.height - fg.height) {
                    location.reload(); // restart game if bird stack in block
                }

        if(pipe[i].x == 5) {
            score++;
            sa.play();
        }           
    }


    ctx.drawImage(fg, 0 , cvs.height - fg.height);
    ctx.drawImage(bird, xPos, yPos);

    yPos += grav;

    ctx.fillStyle = "#000";
    ctx.font = "24px Verdana";
    ctx.fillText("Score: " + score, 10 , cvs.height - 20);

    requestAnimationFrame(draw);
}

pipeDown.onload = draw;