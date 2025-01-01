
function simulateHotSlowComputer() {
    console.log("Simulation started. The browser will lag and be unresponsive.");

    // Heavy computational task that runs indefinitely
    function heavyLoad() {
        while (true) {
            // Perform heavy computation in a loop to max out CPU usage
            for (let i = 0; i < 1e7; i++) {
                Math.sin(Math.random() * i);
                Math.cos(Math.random() * i);
                Math.sqrt(Math.random() * i);
            }

            // Introduce deliberate delays to simulate slowness
            for (let i = 0; i < 1e5; i++) {
                Math.random(); // Wasting time to simulate slowness
            }
        }
    }

    // Start multiple "workers" to max out the CPU indefinitely
    const workers = 8; // Number of simultaneous workers (more = more load)
    for (let i = 0; i < workers; i++) {
        setTimeout(heavyLoad, 0);
    }

    // This code will never stop by itself and will continue indefinitely
    console.log("The browser will continue to be slow as the CPU is maxed out.");
}



function updateCountdown() {
    const daysCountdown = document.getElementById("days-countdown")
    const hoursCountdown = document.getElementById("hours-countdown")
    const minutesCountdown = document.getElementById("minutes-countdown")
    const secondsCountdown = document.getElementById("seconds-countdown")
    const currentDate = new Date()
    let targetDate = "-11-26"
    if (currentDate < new Date(`${currentDate.getFullYear()}${targetDate}`)) {
        console.log("BEFORE")
        targetDate = new Date(`${currentDate.getFullYear()}${targetDate}`)
    } else {
        console.log("AFTER")
        targetDate = new Date(`${currentDate.getFullYear() + 1}${targetDate}`)
    }

    const difference = targetDate - currentDate

    const days = Math.floor(difference / (1000 * 60 * 60 * 24))
    const hours = Math.floor((difference / (1000 * 60 * 60) % 24))
    const minutes = Math.floor((difference / (1000 * 60) % 60))
    const seconds = Math.floor((difference / (1000) % 60))

    console.log(`days ${days}\n
        hours ${hours}\n
        minutes ${minutes}\n
        seconds ${seconds}\n`)

    daysCountdown.innerText = days;
    hoursCountdown.innerText = hours;
    minutesCountdown.innerText = minutes;
    secondsCountdown.innerText = seconds;

}
updateCountdown()
const interval = setInterval(updateCountdown, 1000);

//simulateHotSlowComputer()