
const form = document.querySelector(".top-banner form");

form.addEventListener("submit", e => {
    e.preventDefault();
    const inputVal = input.value;
});
const apiKey = `0a9d88b94f9dd96f3d1204102a5c65d2`;
const inputVal = input.value;

...

const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;
