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

export {
    getWeatherData,
    getForecastData
}