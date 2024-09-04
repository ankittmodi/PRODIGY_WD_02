
let milisec = 0, sec = 0, min = 0, hour = 0;
let timer;

let display = document.querySelector(".timer-Display");
let laps = document.querySelector(".laps");


function start(){
    if(!timer){
        timer = setInterval(run, 10);
    }
}

function run(){
    display.innerHTML = getTimer()
    milisec++;              
    if(milisec == 100){
        milisec = 0;
        sec++;
    }
    if(sec == 60){
        sec = 0;
        min++;
    }
    if(min == 60){
        min = 0;
        hour++;
    }
    
    if(hour == 13){
        hour = 1;
    } 
}

function getTimer(){
    return (hour<10 ? "0" + hour: hour) + " : " + (min<10 ? "0" + min : min) + " : " + (sec<10 ? "0" + sec : sec) + " : " + (milisec<10 ? "0" + milisec : milisec); 
}



function pause(){
    stopTimer();
}

function stopTimer(){
    clearInterval(timer);
    timer = false;
}




function reset(){
    stopTimer();
    milisec = 0;
    sec = 0;
    min = 0;
    hour = 0;
    display.innerHTML = getTimer();
}




function restart(){
    if(timer){ 
        reset();
        start();
    }
    
}


// lap = taking screenshot of current time...
function lap() {
    if(timer) {   
        let Li = document.createElement("li");  
        Li.innerHTML = getTimer();
        laps.appendChild(Li); 
    }
}

function resetLap(){
    laps.innerHTML = "";
}
