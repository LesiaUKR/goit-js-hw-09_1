
const btnStart = document.querySelector('button[data-start]');
console.log(btnStart);
const btnStop = document.querySelector('button[data-stop]');
console.log(btnStop);
const bodyColor = document.getElementsByTagName('body')[0];
console.dir(bodyColor);
let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnStart.addEventListener('click', startColorChange);
btnStop.addEventListener('click', stopColorChange);

function startColorChange() {
    btnStart.disabled = false;
    btnStop.disabled = true;
    
    timerId = setInterval(() => {
        let color = getRandomHexColor();
        bodyColor.style.backgroundColor = color;
    }, 1000)
}

function stopColorChange() {
    btnStart.disabled = false;
    btnStop.disabled = true;
    
  clearInterval(timerId);
}