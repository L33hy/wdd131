document.addEventListener("DOMContentLoaded", function () {
  loadData();
  loadWeather();
  document.getElementById("currentyear").textContent = new Date().getFullYear();

document.getElementById("lastmodified").textContent =
	"Last Modification: " + document.lastModified;
});

// Load country data from JSON
function loadData() {
  fetch("../data/data.json")
      .then(response => response.json())
      .then(data => {
          const content = `
              <p><strong>Area:</strong> <span>${data.area}</span></p>
              <p><strong>Population:</strong> <span>${data.population}</span></p>
              <p><strong>Capital:</strong> <span>${data.capital}</span></p>
              <p><strong>Languages:</strong> <span>${data.languages}</span></p>
              <p><strong>Currency:</strong> ${data.currency}</p>
              <p><strong>Time Zone:</strong> <span>${data.time_zone}</span></p>
              <p><strong>Calling Code:</strong> <span>${data.calling_code}</span></p>
              <p><strong>Internet TLD:</strong> <span>${data.internet_tld}</span></p>
          `;
          document.getElementById("location").innerHTML = content;
      })
      .catch(error => console.error("Error loading JSON data:", error));
}

// Fetch weather data from OpenWeatherMap API
function loadWeather() {
  const apiKey = "278286a1cca556be7de32b0aa2f565ea";
  const city = "Maldives";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  fetch(url)
      .then(response => response.json())
      .then(weather => {
          const temperature = weather.main.temp;
          const conditions = weather.weather[0].description;
          const windSpeed = weather.wind.speed;
          const windChill = (13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)).toFixed(1);

          const weatherHTML = `
              <p><strong>Temperature:</strong> <span>${temperature} °C</span></p>
              <p><strong>Conditions:</strong> ${conditions.charAt(0).toUpperCase() + conditions.slice(1)}</p>
              <p><strong>Wind:</strong> <span>${windSpeed} km/h</span></p>
              <p><strong>Wind Chill:</strong> <span>${windChill} °C</span></p>
          `;
          document.getElementById("weather-content").innerHTML = weatherHTML;
      })
      .catch(error => console.error("Error fetching weather data:", error));
}
