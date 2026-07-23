import './styles.css';

import { getWeatherData, getForecastData } from './api/weather';
import { createInputContainer, createDisplayContainer } from './ui/display';
import { updateWeatherDisplay, updateForecastDisplay } from './ui/update';

const { inputContainer, cityInput, submitBtn } = createInputContainer();

const mainContainer = document.querySelector('.main-container');
mainContainer.appendChild(inputContainer);
mainContainer.appendChild(createDisplayContainer());

submitBtn.addEventListener("click", () => {
    const forecastContainer = mainContainer.querySelector('.forecast-container');
    forecastContainer.innerHTML = ``;

    const cityName = cityInput.value;

    getWeatherData(cityName).then(updateWeatherDisplay);
    getForecastData(cityName).then(updateForecastDisplay);
});