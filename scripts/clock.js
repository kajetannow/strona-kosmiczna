function setTime(){
    const time = new Date()
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let miliseconds = time.getMilliseconds();
    let timeStr = ((hours<9) ? "0"+hours : hours);
    //let timeStr = ((hours>12) ? hours-12 : hours);
    /*if(timeStr==0){
        timeStr = 12
    }*/

    timeStr += ((minutes<10) ? ":0" : ":") + minutes;
    timeStr += ((seconds<10) ? ":0" : ":") + seconds;
    timeStr += ((miliseconds<10) ? ":00" : ((miliseconds<100) ? ":0" : ":")) + miliseconds;
    //timeStr += hours>12 ? " PM" : " AM";

    let display = document.getElementById("timer-display");
    display.innerText = timeStr;
    setTimeout(setTime, 1);
}

window.onload = setTime();
