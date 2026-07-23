export default function getWeatherEmoji(weatherData){
    const id = weatherData.id;
    if(id >= 200 && id < 300) return "⛈️";
    if(id >= 300 && id < 400) return "🌦️";
    if(id >= 500 && id < 600) return "🌧️";
    if(id >= 600 && id < 700) return "❄️";
    if(id >= 700 && id < 800) return "🌫️";
    if(id === 800) return "☀️";
    if(id > 800 && id < 900) return "☁️";
    return "🌈";
}