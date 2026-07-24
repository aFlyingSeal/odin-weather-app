const API_KEY = "a6c2bb6c9e3785b4427daa587075b701";

async function getWeatherData(cityName){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
    const response = await fetch(url);
    if (response.ok == false){
        const errData = await response.json();
        throw new Error(errData.message || "City not found");
    }
    return response.json();
}

async function getForecastData(cityName){
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}`;
    const response = await fetch(url);
    if (response.ok == false){
        const errData = await response.json();
        throw new Error(errData.message || "City not found");
    }
    return response.json();
}

export {
    getWeatherData,
    getForecastData
}