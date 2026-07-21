const overallDisplay = document.querySelector('.display-overall');
const tempDisplay = document.querySelector('.display-temp');
const feelsDisplay = document.querySelector('.display-feels');
const windDisplay = document.querySelector('.display-wind');
const humidDisplay = document.querySelector('.display-humid');

const cityInput = document.getElementById("city-input");
const submitButton = document.getElementById("submit-btn");

const API_KEY = "a6c2bb6c9e3785b4427daa587075b701";

async function getWeatherData(cityName){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
    try{
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        return data;
    }
    catch(error){
        console.log(error);
    }
}

function updateDisplay(data){
    const weather = data.weather[0];
    const temp = data.main.temp;
    const feelsTemp = data.main.feels_like;
    const wind = data.wind.speed;
    const humid = data.main.humidity;

    overallDisplay.textContent = `${weather.main} - ${weather.description}`;
    tempDisplay.textContent = `Temperature: ${temp}`;
    feelsDisplay.textContent = `Feels like ${feelsTemp}`
    windDisplay.textContent = `Wind: ${wind}`
    humidDisplay.textContent = `Humidity: ${humid}`
}

submitButton.addEventListener("click", () => {
    const cityName = cityInput.value;
    getWeatherData(cityName).then(updateDisplay);
});