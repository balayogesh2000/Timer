const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');
const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);
let totalTime = 0;
const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart(time){
        totalTime = time;
    },
    onTick(timeReamining){
        circle.setAttribute('stroke-dashoffset', perimeter * timeReamining / totalTime - perimeter);
    },
    onComplete(){
        console.log("completed");
    }
});
