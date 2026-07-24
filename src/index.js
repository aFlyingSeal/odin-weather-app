import './styles.css';

import { getWeatherData, getForecastData } from './api/weather';
import { createInputContainer, createDisplayContainer } from './ui/display';
import { updateWeatherDisplay, updateForecastDisplay } from './ui/update';
import createLoadingElement from './ui/loading';

const { inputContainer, inputForm, tempSwitchBtn } = createInputContainer();

const loadingElement = createLoadingElement();
loadingElement.style.display = 'none';

const mainContainer = document.querySelector('.main-container');
mainContainer.appendChild(inputContainer);
mainContainer.appendChild(loadingElement);
mainContainer.appendChild(createDisplayContainer());

let isCelsius = false;

let lastWeatherData, lastForecastData;

inputForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const displayContainer = mainContainer.querySelector('.display-container');
    displayContainer.style.visibility = 'hidden';

    const forecastContainer = mainContainer.querySelector('.forecast-container');
    forecastContainer.innerHTML = ``;

    const cityName = inputForm.cityName.value;

    loadingElement.style.display = 'flex';

    Promise
        .all([getWeatherData(cityName), getForecastData(cityName)])
        .then(([weatherData, forecastData]) => {
            lastWeatherData = weatherData;
            lastForecastData = forecastData;
            updateWeatherDisplay(weatherData, isCelsius);
            updateForecastDisplay(forecastData, isCelsius);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            loadingElement.style.display = 'none';
            displayContainer.style.visibility = 'visible';
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