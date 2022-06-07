function getDate(){
    let date = new Date();
    let day = date.getDate();
    day = day>9 ? day : "0"+day;
    let month = date.getDate()-1;
    month = month>9 ? month : "0"+month;
    let year = date.getFullYear();
    let msg = `${day}.${month}.${year}r.`

    let display = document.getElementById('date-display');
    display.innerText = msg;

}

getDate();