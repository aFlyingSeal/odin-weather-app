import getWeatherColor from '../utilities/color';
import getWeatherEmoji from '../utilities/emoji';

function updateWeatherDisplay(data){
    const weatherContainer = document.querySelector('.weather-container');
    
    const emojiDisplay = document.querySelector(".display-emoji");
    const overallDisplay = document.querySelector('.display-overall');
    const tempDisplay = document.querySelector('.display-temp');
    const feelsDisplay = document.querySelector('.display-feels');
    const windDisplay = document.querySelector('.display-wind');
    const humidDisplay = document.querySelector('.display-humid');

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
    const weatherContainer = document.querySelector('.weather-container');
    const forecastContainer = document.querySelector('.forecast-container');

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
            <p>🌡️ ${temp.toFixed(2)}</p>
            <p>💨 ${wind.toFixed(2)}</p>
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

export {
    updateWeatherDisplay,
    updateForecastDisplay
}