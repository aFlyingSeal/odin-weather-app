import './styles.css';

import { getWeatherData, getForecastData } from './api/weather';
import { createInputContainer, createDisplayContainer } from './ui/display';
import { updateWeatherDisplay, updateForecastDisplay } from './ui/update';

const { inputContainer, inputForm, tempSwitchBtn } = createInputContainer();

const mainContainer = document.querySelector('.main-container');
mainContainer.appendChild(inputContainer);
mainContainer.appendChild(createDisplayContainer());

let isCelsius = false;

let lastWeatherData, lastForecastData;

inputForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const displayContainer = mainContainer.querySelector('.display-container');
    displayContainer.style.visibility = 'visible';

    const forecastContainer = mainContainer.querySelector('.forecast-container');
    forecastContainer.innerHTML = ``;

    const cityName = inputForm.cityName.value;

    getWeatherData(cityName).then(data => {
        lastWeatherData = data;
        updateWeatherDisplay(data, isCelsius);
    });
    getForecastData(cityName).then(data => {
        lastForecastData = data;
        updateForecastDisplay(data, isCelsius);
    });
});

tempSwitchBtn.addEventListener("click", () => {
    isCelsius = !isCelsius;

    if (isCelsius)
        tempSwitchBtn.textContent = `Celsius`;
    else
        tempSwitchBtn.textContent = `Fahrenheit`;

    const displayContainer = mainContainer.querySelector('.display-container');
    displayContainer.style.visibility = 'visible';

    const forecastContainer = mainContainer.querySelector('.forecast-container');
    forecastContainer.innerHTML = ``;

    updateWeatherDisplay(lastWeatherData, isCelsius);
    updateForecastDisplay(lastForecastData, isCelsius);
});