function updateTimer() {
    future  = Date.parse("Nov 20, 2022 00:00:00");
    now     = new Date();
    diff    = future - now;
  
    days  = Math.floor( diff / (1000*60*60*24) );
    hours = Math.floor( diff / (1000*60*60) );
    mins  = Math.floor( diff / (1000*60) );
    secs  = Math.floor( diff / 1000 );
  
    d = days;
    h = hours - days  * 24;
    m = mins  - hours * 60;
    s = secs  - mins  * 60;
  
    document.getElementById("clock").innerHTML =
        '<div> <h3>' + d + '</h3> <span>days</span></div>' +
        '<div> <h3>' + h + '</h3> <span>hours</span></div>' +
        '<div> <h3>' + m + '</h3> <span>min</span></div>' +
        '<div> <h3>' + s + '</h3> <span>sec</span></div>' ;
    }
setInterval('updateTimer()', 1000 );


var track = document.getElementById('track');
var controlBtn = document.getElementById('play-pause');
function playPause() {
    if (track.paused) {
        track.play();
        controlBtn.className = "pause";
    } else { 
        track.pause();
        controlBtn.className = "play";
    }
}
controlBtn.addEventListener("click", playPause);