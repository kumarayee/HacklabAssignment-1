
document.addEventListener("DOMContentLoaded", () => {
    const redLight = document.querySelector(".light.red");
    const yellowLight = document.querySelector(".light.yellow");
    const greenLight = document.querySelector(".light.green");

    const states = {
        RED: "red",
        YELLOW: "yellow",
        GREEN: "green",
    };

    let currentState = states.RED;
    let timer;

    const activateLight = (state) => {
        redLight.classList.remove("active");
        yellowLight.classList.remove("active");
        greenLight.classList.remove("active");

        if (state === states.RED) {
            redLight.classList.add("active");
        } else if (state === states.YELLOW) {
            yellowLight.classList.add("active");
        } else if (state === states.GREEN) {
            greenLight.classList.add("active");
        }
    };

    const startTimer = () => {
        clearTimeout(timer);

        if (currentState === states.RED) {
            timer = setTimeout(() => {
                currentState = states.GREEN;
                activateLight(currentState);
                startTimer();
            }, 20000); // 20 seconds
        } else if (currentState === states.GREEN) {
            timer = setTimeout(() => {
                currentState = states.YELLOW;
                activateLight(currentState);
                startTimer();
            }, 15000); // 15 seconds
        } else if (currentState === states.YELLOW) {
            timer = setTimeout(() => {
                currentState = states.RED;
                activateLight(currentState);
                startTimer();
            }, 5000); // 5 seconds
        }
    };

    const changeState = (state) => {
        clearTimeout(timer);
        currentState = state;
        activateLight(currentState);
        startTimer();
    };

    document.getElementById("redBtn").addEventListener("click", () => changeState(states.RED));
    document.getElementById("yellowBtn").addEventListener("click", () => changeState(states.YELLOW));
    document.getElementById("greenBtn").addEventListener("click", () => changeState(states.GREEN));

   
    activateLight(currentState);
    startTimer();
});
