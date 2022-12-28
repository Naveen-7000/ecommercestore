import confetti from 'canvas-confetti';

export const runFireWorks = ()=>{
    var duration = 1 * 1000;
var end = Date.now() + duration;

(function frame() {
  // launch a few confetti from the left edge
  confetti({
    particleCount: 4,
    angle: 60,
    spread: 100,
    origin: { x: 0 }
  });
  // and launch a few from the right edge
  confetti({
    particleCount: 4,
    angle: 120,
    spread: 100,
    origin: { x: 1 }
  });

  // keep going until we are out of time
  if (Date.now() < end) {
    requestAnimationFrame(frame);
  }
}());
}