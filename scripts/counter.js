const COOKIE_NAME = "number_of_visits";

function setCookie(visits=0){
    let date = new Date()
    date.setTime(Date.now() + 2*24*60*60*1000)
    document.cookie = `${COOKIE_NAME}=${visits};expires=${date.toUTCString()}`;
}

//setCookie();

function getCookie(){
    let decoded = decodeURIComponent(document.cookie);
    //console.log(decoded);
    if(decoded){
        decoded = decoded.split(';');
        let decodedObj = {};
        for(let i=0; i<decoded.length; i++){
            let div = decoded[i].indexOf("=");
            let key = decoded[i].substring(0,div);
            let val = decoded[i].substring(div+1, decoded[i].length);
            decodedObj[key]=val;
        }
        //console.log(decodedObj);
        return decodedObj;
    }
    return null
}

if(!getCookie()){
    setCookie();
    getCookie();
}

function checkCookie(){
    let cookie = getCookie();
    let visits = parseInt(cookie[COOKIE_NAME]);
    visits+=1;
    setCookie(visits);
    return visits;
}


function displayCookie(){
    let display = document.getElementById('counter-display');
    let visits = checkCookie();
    display.innerText = `Strona wyświetlona ${visits} razy przez Ciebie.`

}

displayCookie();