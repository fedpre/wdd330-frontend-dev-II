const timer = document.querySelector("#timer strong");
let timerValue = parseInt(timer.innerHTML);
console.log(timerValue);

const timerObj = window.setInterval(() => {
  if (timerValue == 1) {
    window.clearInterval(timerObj);
  }
  timerValue = timerValue - 1;
  timer.innerHTML = timerValue;
}, 1000);
