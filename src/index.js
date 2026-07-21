import './styles.css';

const cityInput = document.getElementById("city-input");
const submitButton = document.getElementById("submit-btn");

const emojiDisplay = document.querySelector(".display-emoji");
const overallDisplay = document.querySelector('.display-overall');
const tempDisplay = document.querySelector('.display-temp');
const feelsDisplay = document.querySelector('.display-feels');
const windDisplay = document.querySelector('.display-wind');
const humidDisplay = document.querySelector('.display-humid');

const weatherContainer = document.querySelector('.weather-container');
const forecastContainer = document.querySelector('.forecast-container');

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

async function getForecastData(cityName){
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}`;
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

function getWeatherEmoji(weatherData){
    const id = weatherData.id;
    if(id >= 200 && id < 300) return "⛈️";
    if(id >= 300 && id < 400) return "🌦️";
    if(id >= 500 && id < 600) return "🌧️";
    if(id >= 600 && id < 700) return "❄️";
    if(id >= 700 && id < 800) return "🌫️";
    if(id === 800) return "☀️";
    if(id > 800 && id < 900) return "☁️";
    return "🌈";
}

function getWeatherColor(weatherData){
    const id = weatherData.id;
    if(id >= 200 && id < 300) return "#4A235A";    // thunderstorm - dark purple
    if(id >= 300 && id < 400) return "#5DADE2";    // drizzle - light blue
    if(id >= 500 && id < 600) return "#3498DB";    // rain - blue
    if(id >= 600 && id < 700) return "#D6EAF8";    // snow - icy blue
    if(id >= 700 && id < 800) return "#B0BEC5";    // atmosphere - gray
    if(id === 800) return "#F9E79F";               // clear - sunny yellow
    if(id > 800 && id < 900) return "#BDC3C7";    // clouds - gray
    return "#58D68D";                               // fallback - green
}

function updateWeatherDisplay(data){
    const weather = data.weather[0];
    const temp = data.main.temp;
    const feelsTemp = data.main.feels_like;
    const wind = data.wind.speed;
    const humid = data.main.humidity;

    emojiDisplay.textContent = `${getWeatherEmoji(weather)}`;
    overallDisplay.textContent = `${weather.main} - ${weather.description}`;
    tempDisplay.textContent = `Temperature: ${temp}`;
    feelsDisplay.textContent = `Feels like ${feelsTemp}`
    windDisplay.textContent = `Wind: ${wind}`
    humidDisplay.textContent = `Humidity: ${humid}`

    weatherContainer.style.backgroundColor = getWeatherColor(weather);
}

function updateForecastDisplay(data){
    const filteredDays = data.list.filter(day => {
        return day.dt_txt.includes("12:00:00");
    });
    console.log(filteredDays);

    const cardsContainer = document.createElement('div');
    cardsContainer.classList.add('cards-container');

    filteredDays.forEach(day => {
        const temp = day.main.temp;
        const wind = day.wind.speed;
        const desc = day.weather[0].main;

        const card = document.createElement('div');
        card.innerHTML = `
            <p class="display-emoji">${getWeatherEmoji(day.weather[0])}</p>
            <p>🌡️ ${temp}</p>
            <p>💨 ${wind}</p>
            <p>${desc}</p>
        `;
        card.classList.add('info-card');
        card.style.backgroundColor = getWeatherColor(day.weather[0]);

        cardsContainer.appendChild(card);
    });

    const forecastHeading = document.createElement('p');
    forecastHeading.classList.add(".forecast-heading");
    forecastHeading.textContent = `Weather in the next few days...`

    forecastContainer.appendChild(forecastHeading);
    forecastContainer.appendChild(cardsContainer);
}

submitButton.addEventListener("click", () => {
    forecastContainer.innerHTML = ``;

    const cityName = cityInput.value;
    getWeatherData(cityName).then(updateWeatherDisplay);
    getForecastData(cityName).then(updateForecastDisplay);
});
