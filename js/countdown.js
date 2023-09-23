const countdownNumberDays = document.querySelector('.countdown-number-days');
const countdownNumberHours = document.querySelector('.countdown-number-hours');
const countdownNumberMinutes = document.querySelector(
  '.countdown-number-minutes'
);

let targetTimestamp = 1695578400000;

const updateCountdown = () => {
  const newDate = new Date();

  const newTimestamp = newDate.getTime();

  const deltaTime = (targetTimestamp - newTimestamp) / 1000;

  const daysLeft = Math.floor(deltaTime / 86400);

  const hoursLeft = Math.floor(deltaTime / 3600) % 24;

  const minutesLeft = Math.floor(deltaTime / 60) % 60;

  countdownNumberDays.innerText = `0${daysLeft}`.slice(-2);
  countdownNumberHours.innerText = `0${hoursLeft}`.slice(-2);
  countdownNumberMinutes.innerText = `0${minutesLeft}`.slice(-2);
};

setInterval(updateCountdown, 1000);

updateCountdown();
