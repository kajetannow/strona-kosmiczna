var can, ctx;
//window.onload = function(){
    can = document.getElementById('canva');
    ctx = can.getContext('2d')
//}

const {PI} = Math;
function rd(n=1){
    return Math.random()*n
}

function drawPacman(){
    if(ctx==null)
        ctx = can.getContext("2d");
    ctx.beginPath();
    ctx.translate(can.width/2, can.height/2);
    let r = 100;
    let startKat = 0.25*PI;
    let stopKat = 1.75*PI;
    ctx.beginPath();
    ctx.strokeStyle=`black`;
    ctx.fillStyle=`yellow`;
    ctx.lineWidth=10;
    ctx.lineCap="rounded";
    ctx.arc(0, 0, r, startKat, stopKat);
    ctx.lineTo(0,0);
    ctx.lineTo(Math.cos(startKat)*r, Math.sin(startKat)*r);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    //ctx.moveTo(100, 10);
    ctx.fillStyle=`black`;
    ctx.arc(10, -60, 10, 0, 2*PI);
    ctx.stroke();
    ctx.fill();
}

function drawStar(posX, posY, n, rOuter, rInner){
    if(ctx==null)
        ctx = can.getContext("2d");
    var step = PI/n;
    var rot=Math.PI/2*3;
    ctx.beginPath();
    ctx.moveTo(posX, posY-rOuter);
   
    for(i=0;i<n;i++){
        x=posX+Math.cos(rot)*rOuter;
        y=posY+Math.sin(rot)*rOuter;
        ctx.lineTo(x,y)
        rot+=step

        x=posX+Math.cos(rot)*rInner;
        y=posY+Math.sin(rot)*rInner;
        ctx.lineTo(x,y)
        rot+=step
      }
      ctx.lineTo(posX, posY-rOuter);
      ctx.closePath();
      ctx.lineWidth=5;
      ctx.strokeStyle='blue';
      ctx.stroke();
      ctx.fillStyle='skyblue';
      ctx.fill();
}

for (let i=0; i<16; i++){
    let x = 25+rd(450);
    let y = 10+rd(280);
    let n = 3+rd(16);
    let rO = 10+rd(15)
    let rI = 3+rd(5);
    drawStar(x,y,n,rO,rI);
}
//drawStar(100,100,10,30,15);

drawPacman();