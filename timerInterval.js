let timerInterval = setInterval(function () {
    seconds++;
    timerElement.textContent = `Time: ${seconds} seconds`;
}, 1000);
