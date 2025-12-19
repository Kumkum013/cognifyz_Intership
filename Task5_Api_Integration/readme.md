# Weather App – API Based Project

## 📌 Project Overview

This is a **Weather Application** built using **HTML, CSS, and JavaScript (Fetch API)**.
It fetches real-time weather data from a Weather API and displays:

* 🌡️ Temperature
* 💧 Humidity
* 🌬️ Wind Speed
* ☁️ Weather Condition Icons (auto changes based on real-time weather)

The UI is clean, responsive, and includes dynamic image updates based on the weather condition (e.g., clouds, rain, clear sky, thunderstorm, etc.).

---

## 🎯 Features

* Fetches live weather data using API
* Displays temperature in Celsius
* Shows humidity percentage
* Shows wind speed
* Weather-based dynamic icons
* Error handling for invalid city names
* Responsive UI design

---

## 🛠️ Technologies Used

* **HTML5** – Structure
* **CSS3** – Styling
* **JavaScript (main.js)** – API integration and logic
* **OpenWeatherMap API** (or whichever API you used)

---

## 📂 Folder Structure

```
Project Folder/
│
├── index.html
├── style.css
├── main.js
│
├── Assets/
│   ├── bg.jpg
│   ├── search.png
│   │
│   ├── message/
│   │   ├── not-found.png
│   │   └── search-city.png
│   │
│   └── weather/
│       ├── atmosphere.svg
│       ├── clear.svg
│       ├── clouds.svg
│       ├── drizzle.svg
│       ├── rain.svg
│       ├── snow.svg
│       └── thunderstorm.svg
```

---

## 🚀 How to Run the Project

2. Open `index.html` in any browser (Chrome recommended).

3. Make sure `style.css` and `main.js` are properly linked.

2. Open **index.html** in any browser.
3. Ensure **main.js** contains your API key.
4. Type any city name → Get real-time weather updates.

---

## 🔑 How It Works

* User enters a city name.
* `main.js` sends a request using `fetch()`.
* API returns JSON data.
* UI displays:

  * Current Temperature
  * Humidity (%)
  * Wind Speed
  * Appropriate weather icon (auto-selected using conditions like `clear`, `clouds`, `rain`, etc.)
* Shows "City not found" message for invalid inputs.

---

## 📸 Screenshots
![alt text](<Screenshot 2025-12-12 163557.png>)

![alt text](<Screenshot 2025-12-12 164057.png>)

---

## 🧠 Learning Outcomes

* Implemented **API fetching** using JavaScript
* Understood **JSON data handling**
* Built a **dynamic UI** that changes based on weather conditions
* Improved CSS skills for layout and design

---

## 📝 Future Enhancements

* Add 5-day weather forecast
* Add temperature unit toggle (°C/°F)
* Add geolocation-based weather detection
* Add animations


---