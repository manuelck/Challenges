const start = document.getElementById('startBtn');
const stop = document.getElementById('stopBtn');
const reload = document.getElementById('reloadBtn');
const hoursInput = document.getElementById('inputHoras');
const minutesInput = document.getElementById('inputMinutos');
const secondsInput = document.getElementById('inputSegundos');

let hours = 0;
let minutes = 0;
let seconds = 0;

let intervalId;

function timer() {
    countdown();
    updateTimer();
}

function countdown() {
    seconds--;
    if (seconds === -1) {
        seconds = 59;
        minutes--;
        if (minutes === -1) {
            minutes = 59;
            hours--;
            if (hours === -1) {
                hours = 0;
                minutes = 0;
                seconds = 0;
                clearInterval(intervalId)
            }
        }
    }
}

function setTimer() {
    reset()
    hours = parseInt(hoursInput.value) || 0;
    minutes = parseInt(minutesInput.value) || 0;
    seconds = parseInt(secondsInput.value) || 0;
    updateTimer();
    hoursInput.value = '';
    minutesInput.value = '';
    secondsInput.value = '';
}


function reset(){
    hours = 0;
    minutes = 0;
    seconds = 0;
    clearInterval(intervalId);
    updateTimer();
}

function updateTimer() {
    let cronometro = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    document.getElementById(`cronometro`).textContent = cronometro
}


start.addEventListener('click', function () {
    if (!start.disabled) {
        setTimer(); // Set the timer based on input values
        clearInterval(intervalId); // Clear any previous intervals
        start.disabled = true;
        intervalId = setInterval(timer, 1000); // Start the timer
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

