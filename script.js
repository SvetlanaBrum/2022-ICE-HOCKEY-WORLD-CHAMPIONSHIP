

function champCountDown() {
    const champDate = new Date("May 13, 2022, 16:20"); //скорее всего по местному финскому времени
    const now = new Date();
    const diff = champDate - now;

    const msInSecond = 1000;
    const msInMinute = 60 * 1000;
    const msInHour = 60 * 60 * 1000;
    const msInDay = 24 * 60 * 60 * 1000;

    const displayDay = Math.floor(diff / msInDay);
    document.querySelector(".days").textContent = displayDay;

    const displayHours = Math.floor((diff%msInDay) / msInHour);
    document.querySelector(".hours").textContent = displayHours;

    const displayMinutes = Math.floor((diff%msInHour) / msInMinute);
    document.querySelector(".minutes").textContent = displayMinutes;

    const displaySeconds = Math.floor((diff%msInMinute) / msInSecond);
    document.querySelector(".seconds").textContent = displaySeconds;

    if (diff <= 0) {
        document.querySelector(".days").textContent = 0;
        document.querySelector(".hours").textContent = 0;
        document.querySelector(".minutes").textContent = 0;
        document.querySelector(".seconds").textContent = 0;
        
        clearInterval(timerId);

        letsGetStarted();
    }
}

let timerId = setInterval(champCountDown, 1000);

function letsGetStarted() {
    const heading = document.querySelector("h1");
    heading.innerHTML = `MEN'S ICE HOCKEY WORLD CHAMPIONSHIP 2022 <br> is declared to be OPEN!!!`
    heading.classList.add("headingChanged");
}

const button = document.querySelector("#myButton");

button.addEventListener("click", function () {
    const audio = document.querySelector("#myAudio");
    if (audio.paused) {
        audio.play();
    }
    else {
        audio.pause();
    }
    
});