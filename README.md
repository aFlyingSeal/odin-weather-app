## Odin Weather App

A simple weather app that allows you to check out the current weather and forecasts of a city for a few days ahead. This project was supposed to be done already but I accidentally left it out. But it makes a good 'sandbox' project for me to continue on this course after stopping it for a few months.

I used **OpenWeatherMap** API for the weather data used in this project. You can check them out here: [https://openweathermap.org/api](https://openweathermap.org/api). On another note, my API key was also pushed up but it's free anyway. I'll probably disable it soon if thing goes south.

Have a good day reading this.

---

## Live Demo: [odin-weather-app](#)

## Key Features:

- Check the current weather status of a city and the weather for a few days ahead.
- You can switch between using Fahrenheit or Celcius unit for temperature.
- Loading component while fetching data through API call.
- Fully dynamic content rendering using vanilla JavaScript.

## Built With:

HTML, CSS, JavaScript (ES Modules) and Webpack (for bundling)

## Run This Project Locally:

1. Clone this repository:

```bash
    git clone https://github.com/aFlyingSeal/odin-weather-app.git
    cd odin-weather-app
```

2. Install dependencies:

```bash
    npm install
```

3. Start the development server:

```bash
    npm run dev
```

## Upcoming Features:

- [x] Toggle button to switch displaying temperature from Fahrenheit to Celsius.
- [x] Loading component for the contents after submitting a city.
- [x] Error handling for incorrect input or empty input.
- [ ] See your last searched cities or a favourite button to save specific cities.
- [ ] View the searched city through Google map.