const APIKey = "7b6d16b9aad94f104b9310d42ef9ebf0";
const weatherTemplate = `
<p>City, Region: {name}, {sys.country}</p>
<p>
{?weather}Weather:{#weather} {description},{/weather} {/weather}
{#main}
temperature: {temp} K, 
humidity: {humidity}%, 
pressure: {pressure} hPa, 
{/main}
wind speed: {wind.speed} meters per hour.
</p>
`;
const errorTemplate = `
<p class="red">Error: {message}</p>
`;
const weatherCompiled = dust.compile(weatherTemplate, "weatherTemplate");
const errorCompiled = dust.compile(errorTemplate, "errorTemplate");
dust.loadSource(weatherCompiled);
dust.loadSource(errorCompiled);
const weatherDiv = document.getElementById("weather-div");
const cityInput = document.getElementById("city-input");

async function onsubmit(e) {
  const inputValue = document.getElementById("city-input").value;
  e.preventDefault();
  if (inputValue === "") {
    weatherDiv.innerHTML = `<p class="red">Empty city name</p>`;
    return;
  }
  const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&APPID=${APIKey}`);
  const weatherJson = await weather.json();
  await dust.render(weather.ok ? "weatherTemplate" : "errorTemplate", weatherJson, function(err, out) {
    weatherDiv.innerHTML = out;
  });
}
document.getElementById("city-form").addEventListener("submit", onsubmit);
