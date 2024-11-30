const spinnerWheel = document.getElementById('spinnerWheel');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');

let isSpinning = false;
let rotationAngle = 0;
let animationFrame;

function rotateWheel() {
  rotationAngle += 5; // Adjust speed by changing this value
  spinnerWheel.style.transform = `rotate(${rotationAngle}deg)`;
  animationFrame = requestAnimationFrame(rotateWheel);
}

startButton.addEventListener('click', () => {
  if (!isSpinning) {
    isSpinning = true;
    rotateWheel();
  }
});

stopButton.addEventListener('click', () => {
  if (isSpinning) {
    isSpinning = false;
    cancelAnimationFrame(animationFrame);
  }
});