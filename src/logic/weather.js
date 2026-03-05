async function getWeatherData(city){
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=a6c2bb6c9e3785b4427daa587075b701`
    );
    if (!response.ok){
        throw new Error("City not found");
    }
    return response.json();
}

export default getWeatherData;