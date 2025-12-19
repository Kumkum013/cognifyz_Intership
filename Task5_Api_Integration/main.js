// === Select all UI elements ===
const cityInput = document.querySelector(".city-input");
const searchBtn = document.querySelector(".input-container .material-symbols-outlined");

const countryTxt = document.querySelector(".country-txt");
const currentDateText = document.querySelector(".current-date-text");
const tempText = document.querySelector(".temp-text");
const conditionText = document.querySelector(".condition-text");
const humidityValueText = document.querySelector(".humidity-value-text");
const windValueText = document.querySelector(".wind-value-text");
const weatherImg = document.querySelector(".weather-summary-img"); // ✅ fixed typo: was "summaey"

const forecastContainer = document.querySelector(".forecast-item-container");

// === Your OpenWeatherMap API key ===
const API_KEY = "94359cc8a109e068850cdb8f26239fd9"; // ⚠️ Replace with your actual API key

// === Function to fetch weather data ===
async function getWeatherData(city) {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod !== 200) {
      alert("City not found ❌");
      return;
    }

    // === Update current weather UI ===
    countryTxt.textContent = data.name;
    const today = new Date();
    currentDateText.textContent = today.toLocaleDateString("en-US", {
      weekday: "short",
      day: "2-digit",
      month: "short",
    });

    tempText.textContent = `${Math.round(data.main.temp)} ℃`;
    conditionText.textContent = data.weather[0].main;
    humidityValueText.textContent = `${data.main.humidity}%`;
    windValueText.textContent = `${data.wind.speed} m/s`;

    // === Weather image update ===
    const weatherType = data.weather[0].main.toLowerCase();
    if (weatherType.includes("cloud")) {
      weatherImg.src = "./Assets/weather/clouds.svg";
    } else if (weatherType.includes("rain")) {
      weatherImg.src = "./Assets/weather/rain.svg";
    } else if (weatherType.includes("clear")) {
      weatherImg.src = "./Assets/weather/clear.svg";
    } else if (weatherType.includes("thunderstorm")) {
      weatherImg.src = "./Assets/weather/thunderstorm.svg";
    } else if (weatherType.includes("snow")) {
      weatherImg.src = "./Assets/weather/snow.svg";
    } 
    // === Fetch 5-day forecast ===
    getForecastData(city);
  } catch (error) {
    console.error("Error fetching weather data:", error);
    alert("Something went wrong 😢");
  }
}

// === Fetch forecast (5 days) ===
async function getForecastData(city) {
  try {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();

    forecastContainer.innerHTML = ""; // Clear old forecast

    // Pick one forecast every 8 intervals (24 hours)
    const dailyForecast = data.list.filter((reading) =>
      reading.dt_txt.includes("12:00:00")
    );

    dailyForecast.slice(0, 3).forEach((day) => {
      const date = new Date(day.dt_txt);
      const dayName = date.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
      });
      const temp = Math.round(day.main.temp);
      const condition = day.weather[0].main.toLowerCase();

      // Set weather icon
      let iconSrc = "./Assets/weather/clear.svg";
      if (condition.includes("cloud")) iconSrc = "./Assets/weather/clouds.svg";
      else if (condition.includes("rain")) iconSrc = "./Assets/weather/rain.svg";
      else if (condition.includes("thunderstorm")) iconSrc = "./Assets/weather/thunderstorm.svg";
      else if (condition.includes("snow")) iconSrc = "./Assets/weather/snow.svg";

      // Create forecast box
      const forecastItem = document.createElement("div");
      forecastItem.classList.add("forecast-item");
      forecastItem.innerHTML = `
        <h5 class="forecast-item-date regular-text">${dayName}</h5>
        <img src="${iconSrc}" alt="${condition}" />
        <h5 class="forecast-item-temp">${temp}℃</h5>
      `;
      forecastContainer.appendChild(forecastItem);
    });
  } catch (error) {
    console.error("Error fetching forecast:", error);
  }
}

// === Event listener for search ===
searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city !== "") {
    getWeatherData(city);
  }
});

// === Optional: Enter key support ===
cityInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    searchBtn.click();
  }
});

// === Default city on load ===
window.addEventListener("load", () => {
  getWeatherData("delhi");
});
