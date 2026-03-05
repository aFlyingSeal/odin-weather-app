import getWeatherData from "./logic/weather";
import { renderWeatherData, renderError } from "./ui/display-info";

const cityInput = document.getElementById("city-input");
const searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", async () => {
    try{
        const data = await getWeatherData(cityInput.value);
        console.log(data);
        renderWeatherData(data);
    }
    catch(error){
        renderError(error);
    }
});