async function fetchWeather() {
    const city = document.getElementById('city-input').value;
    const apiKey = '2bf25f71ede8d6c683645d8198b9b5a4';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('City not found');
      }
  
      const data = await response.json();
      displayWeather(data);
    } catch (error) {
      document.getElementById('weather-info').innerHTML = `<p>Error: ${error.message}</p>`;
    }
  }
  
  function displayWeather(data) {
    const { name, main, weather } = data;
    const weatherInfo = `
      <h2>${name}</h2>
      <p>Temperature: ${main.temp}°C</p>
      <p>Description: ${weather[0].description}</p>
      <p>Humidity: ${main.humidity}%</p>
    `;
  
    document.getElementById('weather-info').innerHTML = weatherInfo;
  }
  