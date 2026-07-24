import getWeatherColor from '../utilities/color';
import getWeatherEmoji from '../utilities/emoji';

function updateWeatherDisplay(data, isCelsius){
    const weatherContainer = document.querySelector('.weather-container');
    
    const emojiDisplay = document.querySelector(".display-emoji");
    const overallDisplay = document.querySelector('.display-overall');
    const tempDisplay = document.querySelector('.display-temp');
    const feelsDisplay = document.querySelector('.display-feels');
    const windDisplay = document.querySelector('.display-wind');
    const humidDisplay = document.querySelector('.display-humid');

    const weather = data.weather[0];
    let temp = data.main.temp;
    let feelsTemp = data.main.feels_like;
    const wind = data.wind.speed;
    const humid = data.main.humidity;

    let tempUnitSign;

    if (isCelsius){
        temp = temp - 273.15;
        feelsTemp = feelsTemp - 273.15
        tempUnitSign = "°C";
    }
    else{
        temp = (temp - 273.15) * 1.8 + 32;
        feelsTemp = (feelsTemp - 273.15) * 1.8 + 32;
        tempUnitSign = "°F";
    }

    emojiDisplay.textContent = `${getWeatherEmoji(weather)}`;
    overallDisplay.textContent = `${weather.main} - ${weather.description}`;
    tempDisplay.textContent = `🌡️ Temperature: ${temp.toFixed(2)}${tempUnitSign}`;
    feelsDisplay.textContent = `🙄 Feels like ${feelsTemp.toFixed(2)}${tempUnitSign}`;
    windDisplay.textContent = `💨 Wind: ${wind} m/s`;
    humidDisplay.textContent = `💧 Humidity: ${humid}%`;

    weatherContainer.style.backgroundColor = getWeatherColor(weather);
}

function updateForecastDisplay(data, isCelsius){
    const weatherContainer = document.querySelector('.weather-container');
    const forecastContainer = document.querySelector('.forecast-container');

    const filteredDays = data.list.filter(day => {
        return day.dt_txt.includes("12:00:00");
    });

    const cardsContainer = document.createElement('div');
    cardsContainer.classList.add('cards-container');

    filteredDays.forEach(day => {
        let temp = day.main.temp;
        const wind = day.wind.speed;
        const desc = day.weather[0].main;

        let tempUnitSign;

        if (isCelsius){
            temp = temp - 273.15;
            tempUnitSign = "°C";
        }
        else{
            temp = (temp - 273.15) * 1.8 + 32;
            tempUnitSign = "°F";
        }

        const card = document.createElement('div');
        card.innerHTML = `
            <p class="display-emoji">${getWeatherEmoji(day.weather[0])}</p>
            <p>🌡️ ${temp.toFixed(2)}${tempUnitSign}</p>
            <p>💨 ${wind.toFixed(2)} m/s</p>
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