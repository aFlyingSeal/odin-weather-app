import './styles.css';

import { getWeatherData, getForecastData } from './api/weather';
import { createInputContainer, createDisplayContainer } from './ui/display';
import { updateWeatherDisplay, updateForecastDisplay } from './ui/update';
import createLoadingElement from './ui/loading';
import createErrorElement from './ui/error';

const { inputContainer, inputForm, tempSwitchBtn } = createInputContainer();

const loadingElement = createLoadingElement();
loadingElement.style.display = 'none';
const errorElement = createErrorElement();
errorElement.style.display = 'none';

const mainContainer = document.querySelector('.main-container');
mainContainer.appendChild(inputContainer);
mainContainer.appendChild(loadingElement);
mainContainer.appendChild(errorElement);
mainContainer.appendChild(createDisplayContainer());

let isCelsius = false;

let lastWeatherData, lastForecastData;

inputForm.addEventListener("submit", (e) => {
    e.preventDefault();
    inputForm.checkValidity();

    const cityName = inputForm.cityName.value;
    if (!cityName) return;

    const displayContainer = mainContainer.querySelector('.display-container');
    displayContainer.style.visibility = 'hidden';

    const forecastContainer = mainContainer.querySelector('.forecast-container');
    forecastContainer.innerHTML = ``;

    loadingElement.style.display = 'flex';

    Promise
        .all([getWeatherData(cityName), getForecastData(cityName)])
        .then(([weatherData, forecastData]) => {
            lastWeatherData = weatherData;
            lastForecastData = forecastData;
            updateWeatherDisplay(weatherData, isCelsius);
            updateForecastDisplay(forecastData, isCelsius);
            displayContainer.style.visibility = 'visible';
            errorElement.style.display = 'none';
        })
        .catch((error) => {
            errorElement.style.display = 'block';
            errorElement.textContent = error.message;
        })
        .finally(() => {
            loadingElement.style.display = 'none';
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

    try{
        updateWeatherDisplay(lastWeatherData, isCelsius);
        updateForecastDisplay(lastForecastData, isCelsius);
    }
    catch(error){
        console.log(error);
    }
});