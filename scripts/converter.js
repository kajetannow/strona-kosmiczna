//na podstawie wzorów z https://astronet.pl/na-niebie/n3073/

let submit = document.getElementById('btn-submit');

function cos(rad) {
    return Math.cos(rad);
}

function sin(rad) {
    return Math.sin(rad);
}

function sq(n) {
    return Math.pow(n, 2);
}

function degToRad(deg){
    return deg*Math.PI/180;
}

function hoursToRad(hours){
    return hours*Math.PI/12;
}

function radToDeg(rad){
    return rad*180/Math.PI;
}

function calcAlpha(r1,d1,r2,d2){
    return radToDeg(Math.acos(sin(d1)*sin(d2)+cos(d1)*cos(d2)*cos(r1-r2)));
    //return Math.sqrt(sq(d1-d2) + sq( cos((d1+d2)/2) * (a1-a2) ))
}

function getResults(){
    let r1 = document.getElementById('r1').value;
    let d1 = document.getElementById('d1').value;
    let r2 = document.getElementById('r2').value;
    let d2 = document.getElementById('d2').value;

    d1 = degToRad(d1);
    d2 = degToRad(d2);
    r1 = hoursToRad(r1);
    r2 = hoursToRad(r2);

    let alpha = calcAlpha(r1, d1, r2, d2);
    //alert(alpha)
    let display = document.getElementById('display');
    display.innerText = `Odległość kątowa to ${alpha.toFixed(2)}°`;

}

submit.addEventListener("click", (e)=>{
    e.preventDefault();
    getResults();
})