const out = document.getElementById("div");
const now = new Date();
let second = String(now.getSeconds()).padStart(2, "0");
let minute = String(now.getMinutes()).padStart(2, "0");
let hour = String(now.getHours()).padStart(2, "0");

const addCount = () => {
  second++;
  if (second === 60) {
    minute++;
    second = 0;
  }
  if (minute === 60) {
    hour++;
    minute = 0;
  }
  out.textContent = hour + ":" + minute + ":" + second;
};
let interval = setInterval(addCount, 1000);
const stopInterval = () => {
  clearInterval(interval);
};

const startTimer = () => {
  interval = setInterval(addCount, 1000);
  if (timerId) return;
  timerId = setInterval(() => {
    seconds++;
  }, 1000);
};

const timer = document.getElementById("timediv");
let sec = 0;
let min = 0;
let time = 0;

const count = () => {
  sec++;
  if (sec === 60) {
    min++;
    sec = 0;
  }
  if (min === 60) {
    time++;
    min = 0;
  }
  timediv.textContent =
    String(time).padStart(2, "0") +
    ":" +
    String(min).padStart(2, "0") +
    ":" +
    String(sec).padStart(2, "0");
};
let intervalll = setInterval(count, 1000);

const zogsInterval = () => {
  clearInterval(intervalll);
};

const ehelTimer = () => {
  intervalll = setInterval(count, 1000);
};
const restartHiih = () => {
  clearInterval(intervalll);
  intervalll = null;
  sec = 0;
  min = 0;
  time = 0;
  timediv.textContent = "00:00:00";
};

const uhraa = document.getElementById("uhrah");
let s = 59;
let m = 5;
let t = 0;

const uhar = () => {
  s--;
  if (s === 0) {
    m--;
    s = 59;
  }
  uhrah.textContent =
    String(t).padStart(2, "0") +
    ":" +
    String(m).padStart(2, "0") +
    ":" +
    String(s).padStart(2, "0");
};
let inter = setInterval(uhar, 1000);
const zogs = () => {
  clearInterval(inter);
};

const ehel = () => {
  inter = setInterval(uhar, 1000);
};
const restartHii = () => {
  clearInterval(inter);
  inter = null;
  s = 0;
  m = 5;
  t = 0;
  uhrah.textContent = "00:05:00";
};
