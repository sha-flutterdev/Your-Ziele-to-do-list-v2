var dt;
var a=0;

function repeatTime () {
dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleString();

}

// Initial call
repeatTime();

// Calling once every sec
setInterval(repeatTime,1000);

