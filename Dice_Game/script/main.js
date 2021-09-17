console.log('main.js connecté');

//Dice//
const canvas = document.getElementById('dice');
var ctx = canvas.getContext('2d');
canvas.width=100;
canvas.height=100;
ctx.fillStyle = 'white';
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.beginPath();
ctx.fillStyle="#FF4422";
ctx.arc(canvas.width/3, canvas.height/4, 5, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle="#FF4422";
ctx.arc(canvas.width/3*2, canvas.height/4, 5, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle="#FF4422";
ctx.arc(canvas.width/3, canvas.height/4*2, 5, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle="#FF4422";
ctx.arc(canvas.width/3*2, canvas.height/4*2, 5, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle="#FF4422";
ctx.arc(canvas.width/3, canvas.height/4*3, 5, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle="#FF4422";
ctx.arc(canvas.width/3*2, canvas.height/4*3, 5, 0, 2 * Math.PI);
ctx.fill();

//Points//
const canvas2 = document.getElementsByClassName('point');
for (i=0; i<canvas2.length; i++) {
    console.log(canvas2[i])
    var contex = canvas2[i].getContext('2d');
    canvas2[i].width=25;
    canvas2[i].height=25;

    contex.beginPath();
    contex.fillStyle="#FF4422";
    contex.arc(canvas2[i].width/2, canvas2[i].height/2, 5, 0, 2 * Math.PI);
    contex.fill();

}

//Canvas newGame//
const canvas_newGame = document.getElementById('canvas_newGame');
    console.log(canvas_newGame)
    var contex_newGame = canvas_newGame.getContext('2d');
    canvas_newGame.width=25;
    canvas_newGame.height=25;
    contex_newGame.beginPath();
    contex_newGame.strokeStyle="#FF4422";
    contex_newGame.arc(canvas_newGame.width/2, canvas_newGame.height/2, 10, 0, 2 * Math.PI);
    contex_newGame.moveTo(canvas_newGame.width/2,canvas_newGame.height/4);
    contex_newGame.lineTo(canvas_newGame.width/2,canvas_newGame.height/4*3);
    contex_newGame.moveTo(canvas_newGame.width/4,canvas_newGame.height/2);
    contex_newGame.lineTo(canvas_newGame.width/4*3,canvas_newGame.height/2);
    contex_newGame.stroke();
    contex_newGame.closePath();

//Canvas Rolld Dice//
const canvas_rollDice = document.getElementById('canvas_rollDice');
    console.log(canvas_rollDice)
    var contex_rollDice = canvas_rollDice.getContext('2d');
    canvas_rollDice.width=25;
    canvas_rollDice.height=25;
    contex_rollDice.beginPath();
    contex_rollDice.strokeStyle="#FF4422";
    contex_rollDice.arc(canvas_rollDice.width/2, canvas_rollDice.height/2+2, 9, 0, 0.9*Math.PI);
    contex_rollDice.stroke();
    contex_rollDice.closePath();

    contex_rollDice.beginPath();
    contex_rollDice.strokeStyle="#FF4422";
    contex_rollDice.arc(canvas_rollDice.width/2, canvas_rollDice.height/2-2, 9, 0, 0.9*Math.PI, true);
    contex_rollDice.stroke();
    contex_rollDice.closePath();

    contex_rollDice.beginPath();
    contex_rollDice.fillStyle="#FF4422";
    contex_rollDice.moveTo(0, canvas_rollDice.height/2-2);
    contex_rollDice.lineTo(8, canvas_rollDice.height/2-2);
    contex_rollDice.lineTo(4, canvas_rollDice.height/2+2);
    contex_rollDice.fill();
    contex_rollDice.closePath();

    contex_rollDice.beginPath();
    contex_rollDice.fillStyle="#FF4422";
    contex_rollDice.moveTo(canvas_rollDice.width, canvas_rollDice.height/2+4);
    contex_rollDice.lineTo(canvas_rollDice.width-8, canvas_rollDice.height/2+4);
    contex_rollDice.lineTo(canvas_rollDice.width-4, canvas_rollDice.height/2);
    contex_rollDice.fill();
    contex_rollDice.closePath();

//Canvas hold//
const canvas_hold = document.getElementById('canvas_hold');
    console.log(canvas_hold)
    var contex_hold = canvas_hold.getContext('2d');
    canvas_hold.width=25;
    canvas_hold.height=25;
    contex_hold.beginPath();
    contex_hold.strokeStyle="#FF4422";
    contex_hold.strokeRect(canvas_hold.width/8,canvas_hold.height/4-1,canvas_hold.width/4*3,canvas_hold.height/4*3);
    contex_hold.closePath();

    contex_hold.beginPath();
    contex_hold.strokeStyle="#FF4422";
    contex_hold.moveTo(canvas_hold.width/2,0);
    contex_hold.lineTo(canvas_hold.width/2,canvas_hold.height/2);
    contex_hold.lineTo(canvas_hold.width/2-3,canvas_hold.height/2-3);
    contex_hold.moveTo(canvas_hold.width/2,canvas_hold.height/2);
    contex_hold.lineTo(canvas_hold.width/2+3,canvas_hold.height/2-3);
    contex_hold.stroke();
    contex_hold.closePath();
