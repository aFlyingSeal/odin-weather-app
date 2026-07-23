export default function getWeatherColor(weatherData){
    const id = weatherData.id;
    if(id >= 200 && id < 300) return "#4A235A";    // thunderstorm - dark purple
    if(id >= 300 && id < 400) return "#5DADE2";    // drizzle - light blue
    if(id >= 500 && id < 600) return "#3498DB";    // rain - blue
    if(id >= 600 && id < 700) return "#D6EAF8";    // snow - icy blue
    if(id >= 700 && id < 800) return "#B0BEC5";    // atmosphere - gray
    if(id === 800) return "#F9E79F";               // clear - sunny yellow
    if(id > 800 && id < 900) return "#BDC3C7";    // clouds - gray
    return "#58D68D";                               // fallback - green
}