function renderWeatherData(data){
    const infoContainer = document.querySelector(".info-displayer");
    infoContainer.innerHTML = `
        <p class="city-label">${data.name}</p>
        <p class="temp-label">Temperature: ${data.main.temp}°C</p>
        <p class="humidity-label">Humidity: ${data.main.humidity}%</p>
        <p class="weather-label">${data.weather[0].main}</p>
        <p class="weather-desc-label">${data.weather[0].description}</p>
    `;
}

function renderError(error){
    const infoContainer = document.querySelector(".info-displayer");
    infoContainer.innerHTML = `
        <p class="error-label">${error.message}</p>
    `;
}

export {
    renderWeatherData,
    renderError,
}