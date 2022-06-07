var can, ctx;
//window.onload = function(){
    can = document.getElementById('canva');
    ctx = can.getContext('2d')
//}

const {PI} = Math;

function draw(){
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

draw();