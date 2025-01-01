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

const interval = setInterval(updateCountdown, 1000);