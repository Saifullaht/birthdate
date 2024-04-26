window.onload = () => {
    document.querySelector("#Calculate") .onclick = Calculate
    document.querySelector("#reset") .onclick = reset;
    
}
function Calculate() {
    const date = document.querySelector("#date").value;
    const time = document.querySelector("#time").value;
    
    
    const endTime = new Date (date + " " + time);
    
    const stop = document.querySelector("#Stop")

     const interval = setInterval(() => Calculatetime(endTime) , 1000);
    stop.addEventListener('click' ,() => {
        clearInterval(interval);
    })

}

function Calculatetime(endTime){
    const currentTime = new Date();
    
    const days = document.querySelector("#countdown-days");
    const hours = document.querySelector("#countdown-hours");
    const minutes = document.querySelector("#countdown-minutes");
    const second = document.querySelector("#countdown-seconds");

    if (endTime > currentTime) {
        const timeLeft = (endTime - currentTime) /1000;
        // console.log(timeLeft);
        days.innerText = Math.floor (timeLeft / (24 * 60 * 60) );
        hours.innerText = Math.floor ((timeLeft / (60 * 60)) % 24 );
        minutes.innerText = Math.floor ((timeLeft / 60) % 60);
        second.innerText = Math.floor (timeLeft % 60);
    } else{
        days.innerText = 0
        hours.innerText = 0
        minutes.innerText = 0
        second.innerText = 0
    }

}


function reset(){
    document.querySelector("#countdown-days").innerHTML = 0;
    document.querySelector("#countdown-hours").innerHTML = 0;
    document.querySelector("#countdown-minutes").innerHTML = 0;
    document.querySelector("#countdown-seconds").innerHTML = 0;
}

