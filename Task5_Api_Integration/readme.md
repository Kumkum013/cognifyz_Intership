# 🌦️ Weather App – API Based Project

## 📌 Project Overview

This is a **Weather Application** built using **HTML, CSS, and JavaScript (Fetch API)**.  
It fetches **real-time weather data** from a weather API and displays essential weather details in a clean, responsive UI.

### 🌍 Displays Real-Time Data:
- 🌡️ Temperature (°C)
- 💧 Humidity
- 🌬️ Wind Speed
- ☁️ Weather Condition Icons (auto-updated based on weather)

The application dynamically updates images and UI elements based on conditions such as **clear sky, clouds, rain, snow, thunderstorm**, etc.

---

## 🎯 Features

- ✅ Fetches live weather data using API
- 🌡️ Displays temperature in Celsius
- 💧 Shows humidity percentage
- 🌬️ Shows wind speed
- ☁️ Dynamic weather icons
- ❌ Error handling for invalid city names
- 📱 Fully responsive UI

---

## 🛠️ Technologies Used

- **HTML5** – Structure  
- **CSS3** – Styling & responsiveness  
- **JavaScript (main.js)** – API integration & logic  
- **Weather API** (e.g., OpenWeatherMap API)

---

## 📂 Folder Structure

Project Folder/
│
├── index.html
├── style.css
├── main.js
│
├── Assets/
│ ├── bg.jpg
│ ├── search.png
│ │
│ ├── message/
│ │ ├── not-found.png
│ │ └── search-city.png
│ │
│ └── weather/
│ ├── atmosphere.svg
│ ├── clear.svg
│ ├── clouds.svg
│ ├── drizzle.svg
│ ├── rain.svg
│ ├── snow.svg
│ └── thunderstorm.svg

yaml
Copy code

---

## 🚀 How to Run the Project

1. Download or clone the repository.
2. Open `index.html` in any modern browser (Chrome recommended).
3. Ensure:
   - `style.css` and `main.js` are correctly linked.
   - Your **API key** is added inside `main.js`.
4. Enter a city name to get real-time weather updates.

---

## 🔑 How It Works

1. User enters a city name.
2. `main.js` sends a request using `fetch()`.
3. API returns weather data in **JSON format**.
4. The UI displays:
   - Current temperature
   - Humidity (%)
   - Wind speed
   - Auto-selected weather icon
5. Displays **“City not found”** for invalid inputs.

---

## 📸 Screenshots

![Weather App UI](public/Screenshot%202025-12-12%20163557.png)

![Weather Result](public/Screenshot%202025-12-12%20164057.png)

---

## 🧠 Learning Outcomes

- Learned how to fetch data using **JavaScript Fetch API**
- Worked with **JSON data**
- Built a **dynamic UI** based on API response
- Improved **CSS layout and styling skills**
- Implemented error handling in real-world scenarios

---

## 📝 Future Enhancements

- 📅 5-day weather forecast
- 🌡️ Temperature unit toggle (°C / °F)
- 📍 Geolocation-based weather detection
- 🎨 Smooth animations and transitions

---

## 👩‍💻 Author

**Kumkum Kumari**  
Cognifyz Internship – API Based Project  
Built with ❤️ using HTML, CSS & JavaScript