const apiKey = "f7f0c2c772806c0b82dd95c643f879c1";

document
  .getElementById("searchBtn")
  .addEventListener("click", getWeather);

async function getWeather() {

    const city =
      document.getElementById("cityInput").value;

    const weatherResult =
      document.getElementById("weatherResult");

    if (!city) {
        weatherResult.innerHTML = "Please enter a city name";
        return;
    }

    try {

        const response =
          await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
          );

        const data =
          await response.json();

        if (data.cod !== 200) {
            weatherResult.innerHTML =
              "Error: " + data.message;
            return;
        }

        weatherResult.innerHTML = `
            <h2>${data.name}</h2>
            <p>🌡 Temperature: ${data.main.temp} °C</p>
            <p>💧 Humidity: ${data.main.humidity}%</p>
            <p>🌬 Wind Speed: ${data.wind.speed} m/s</p>
        `;

    } catch (error) {
        weatherResult.innerHTML =
          "Network error. Try again.";
    }
}