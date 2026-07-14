const button = document.getElementById('myBtn');
const input = document.getElementById('input');

button.addEventListener('click', function() {
  const city = input.value;
  getWeather(city);
});
async function getWeather(city) {
  const geoResponse = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`);
  const geoData = await geoResponse.json();
  const lat = geoData.results[0].latitude;
  const lon = geoData.results[0].longitude;

  const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
  const weatherData = await weatherResponse.json();

  const temp = weatherData.current_weather.temperature;

  const result = document.getElementById('result');
  result.textContent = `Temperature: ${temp}°C`;
}