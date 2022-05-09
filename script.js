var minutes = 25
var seconds = "00"


function timer(){
    document.getElementById("minutes").innerHTML = minutes
    document.getElementById("seconds").innerHTML = seconds
}

function start(){
    minutes = 24;
    seconds = 59;

    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    var minutesInterval = setInterval(minutesTimer, 60000);
    var secondsInterval = setInterval(secondsTimer, 1000);

    function minutesTimer() {
        minutes = minutes - 1;
        document.getElementById("minutes").innerHTML = minutes;
    }

    // Function for second counter
    function secondsTimer() {
        seconds = seconds - 1;
        document.getElementById("title").innerHTML = minutes + ":" + seconds + " - OnionTimer"
        if(seconds < 10){
            document.getElementById("seconds").innerHTML = "0" + seconds;
        } else {
            document.getElementById("seconds").innerHTML = seconds;
        }

        if (seconds <= 0) {
            if (minutes <= 0) {
                clearInterval(minutesInterval);
                clearInterval(secondsInterval);
            }
            seconds = 60;
        }
    }
}