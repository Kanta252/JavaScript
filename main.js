const hour = document.querySelector(".h");
const minutes = document.querySelector(".m");
const seconds = document.querySelector(".s");
const millisecond = document.querySelector(".ms");
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");

let h = 0;
let m = 0;
let s = 0;
let ms = 0;

let timerId;
  
function start() {
    timerId = setInterval(count, 100);
    startBtn.setAttribute("disabled", true);
    stopBtn.removeAttribute("disabled", false);
    resetBtn.removeAttribute("disabled", false);
  }

function count() {
  ms++;
  millisecond.textContent = ms;
    if (ms == 9) {
      ms = -1;
      s++;
      seconds.textContent = s;
    }
    if (s > 59 && m != 59) {
      s = 0;
      m++;
      seconds.textContent = s;
      minutes.textContent = m;
    }
    if (s > 59 && m == 59) {
       s = 0;
       m = 0;
       h++;
       seconds.textContent = s;
       minutes.textContent = m;
       hour.textContent = h;
    }
}
  
  function stop() {
    clearInterval(timerId);
    stopBtn.setAttribute("disabled", true);
    startBtn.removeAttribute("disabled", false);
  }
  
  function reset() {
    clearInterval(timerId);
    hour.textContent = "0";
    minutes.textContent = "0";
    seconds.textContent = "0";
    millisecond.textContent ="0";
    startBtn.removeAttribute("disabled", false);
    stopBtn.setAttribute("disabled", true);
    resetBtn.setAttribute("disabled", true);
    h = 0;
    m = 0;
    s = 0;
    ms = 0;
  
  }