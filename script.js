//your JS code here. If required.
const line = document.querySelector("#line");

let currentRotation = 0;

function rotate() {
  line.style.transform = `rotate(${currentRotation}deg)`;
  currentRotation += 2;
}

setInterval(rotate, 20);