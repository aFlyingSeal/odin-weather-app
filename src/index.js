import './styles.css';

import { getWeatherData, getForecastData } from './api/weather';
import { createInputContainer, createDisplayContainer } from './ui/display';
import { updateWeatherDisplay, updateForecastDisplay } from './ui/update';

const { inputContainer, inputForm } = createInputContainer();

const mainContainer = document.querySelector('.main-container');
mainContainer.appendChild(inputContainer);
mainContainer.appendChild(createDisplayContainer());

inputForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const displayContainer = mainContainer.querySelector('.display-container');
    displayContainer.style.visibility = 'visible';

    const forecastContainer = mainContainer.querySelector('.forecast-container');
    forecastContainer.innerHTML = ``;

    const cityName = inputForm.cityName.value;

    getWeatherData(cityName).then(updateWeatherDisplay);
    getForecastData(cityName).then(updateForecastDisplay);
});