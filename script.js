const hoursEl = document.querySelector('#hours');
const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");
const millisecondsEl = document.querySelector("#milliseconds");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resumeBtn = document.querySelector("#resumeBtn");
const resetBtn = document.querySelector("#resetBtn");

let interval;
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isPaused = false;

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resumeBtn.addEventListener("click", resumeTimer);
resetBtn.addEventListener("click", resetTimer);

function startTimer() {
  interval = setInterval(() => {
    if (!isPaused) {
      milliseconds += 10;
      if (milliseconds === 1000) {
        seconds++;
        milliseconds = 0;
      }
      if (seconds === 60) {
        minutes++;
        seconds = 0;
      }
      if (minutes === 60) {
        hours++;
        minutes = 0;
      }
      hoursEl.innerHTML = formatMilliseconds(hours);
      minutesEl.innerHTML = formatTime(minutes);
      secondsEl.innerHTML = formatTime(seconds);
      millisecondsEl.innerHTML = formatMilliseconds(milliseconds);
    }
  }, 10);
  startBtn.style.display = "none";
  pauseBtn.style.display = "inline-block";
}

function pauseTimer() {
  isPaused = true;
  pauseBtn.style.display = "none";
  resumeBtn.style.display = "inline-block";
}

function resumeTimer() {
  isPaused = false;
  resumeBtn.style.display = "none";
  pauseBtn.style.display = "inline-block";
}

function resetTimer() {
  clearInterval(interval);
  hours = 0;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  isPaused = false;
  hoursEl.innerHTML = "00";
  minutesEl.innerHTML = "00";
  secondsEl.innerHTML = "00";
  millisecondsEl.innerHTML = "00";
  startBtn.style.display = "inline-block";
  pauseBtn.style.display = "none";
  resumeBtn.style.display = "none";
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function formatMilliseconds(time) {
  return time < 100 ? `0${time}`.padStart(2, "0") : time;
}