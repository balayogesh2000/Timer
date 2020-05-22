class Timer {
    constructor(durationInput, startButton, pauseButton, callbacks){
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);

        if(callbacks){
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }
    }

    start = () => {
        if(this.onStart){
            this.onStart(this.durationInput.value);
        }
        this.tick();
        this.interval = setInterval(this.tick, 10);
    }

    pause = () => {
        clearInterval(this.interval);
    }

    tick = () => {
        if(this.timeRemaining <= 0){
            this.pause();
            this.onComplete();
        }else{
            this.timeRemaining = this.timeRemaining - 0.01;
            if(this.onTick){
                this.onTick(this.timeRemaining);
            }
        }
    }

    get timeRemaining() {
        return parseFloat(this.durationInput.value);
    }
    
    set timeRemaining(time) {
        this.durationInput.value = time.toFixed(2);
    }
}