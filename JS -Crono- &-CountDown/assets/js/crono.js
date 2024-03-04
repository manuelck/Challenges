const start = document.getElementById('startBtn');
const stop = document.getElementById('stopBtn');
const reload = document.getElementById('reloadBtn');


let hours = 0;
let minutes = 0;
let seconds = 0;

let intervalId;

function timer () {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
            }
        }
        updateTimer()
    }


function reset (){
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateTimer()
}


function updateTimer() {
    let cronometro = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    document.getElementById(`cronometro`).textContent = cronometro
}



start.addEventListener('click', function () {
    if (!start.disabled) {
        clearInterval(intervalId); // Clear any previous intervals
        start.disabled = true;
        intervalId = setInterval(timer, 1000);
    }
});

stop.addEventListener('click', function() {
    clearInterval(intervalId); 
    start.disabled = false; 
});

reload.addEventListener('click', function() {
    clearInterval(intervalId); 
    reset();
    start.disabled = false; 
});

