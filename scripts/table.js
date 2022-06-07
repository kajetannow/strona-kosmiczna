var table = document.getElementById('table-stars')

const headers = [
    "l.p.",
    "nazwa",
    "dystans <br> [lata&nbsp;świetlne]",
    "typ",
    "absolutna jasność gwiazdowa",
    "rok odkrycia"
]

let stars = []


function Star(name, distance, type, magnitude, discoveryYear="znana od starożytności"){
    this.name=name;
    this.distance=distance;
    this.type=type;
    this.absoluteMagnitude=magnitude;
    this.discoveryYear=discoveryYear
}


stars.push(new Star("Proxima Centauri", 4.24, "M5,5Ve", 15.56, 1915));
stars.push(new Star("Alfa Centauri A", 4.32, "G2V", 4.40));
stars.push(new Star("Alfa Centauri B", 4.32, "K1V", 5.84, 1689));
stars.push(new Star("Gwiazda Barnarda", 5.96, "M4V", 13.20, 1916));
stars.push(new Star("Wolf 359", 7.89, "M6V", 16.59, 1919));
stars.push(new Star("Lalande 21185", 8.31, "M5,5e", 10.49, 1801));
stars.push(new Star("Syriusz", 8.60, "A1V", 1.43));
stars.push(new Star("Alfa Canis Majoris B", 8.60, "DA1,9", 11.32, 1844));
stars.push(new Star("BL Ceti", 8.82, "M5,5V", 15.54, 1949));
stars.push(new Star("UV Ceti", 8.82, "M6V", 16.05, 1949));

//console.log(stars)
function showTable(arr){
    let txt = ""
    txt+="<tr>";
    txt+=`<th>${headers[0]}</th>`;
    txt+=`<th>${headers[1]}</th>`;
    txt+=`<th>${headers[2]}</th>`;
    txt+=`<th>${headers[3]}</th>`;
    txt+=`<th>${headers[4]}</th>`;
    txt+=`<th>${headers[5]}</th>`;
    txt+="</tr>";
    for(var i=0; i < arr.length; i++){
        txt+="<tr>";
        txt+=`<td>${i+1}</td>`;
        txt+=`<td>${arr[i].name}</td>`;
        txt+=`<td>${arr[i].distance}</td>`;
        txt+=`<td>${arr[i].type}</td>`;
        txt+=`<td>${arr[i].absoluteMagnitude}</td>`;
        txt+=`<td>${arr[i].discoveryYear}</td>`;
        txt+="</tr>";
    }
    table.innerHTML = txt;
}

showTable(stars)