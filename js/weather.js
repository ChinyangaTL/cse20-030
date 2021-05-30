/* 
-----------------------------------
WEATHER COMPONENT
-----------------------------------
*/
const date = document.getElementById("date");
const tempHigh = document.getElementById("temp-high");
const tempLow = document.getElementById("temp-low");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");

const infoWrapper = document.querySelector(".info__wrapper");

const kelvin = 273;
const kelToCel = (temp) => Math.floor(temp - kelvin);

const lat = "35.0116";
const lng = "135.7681";
const apikey = "7278345b86ac5e2ad4284ce0023f2577";
const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&appid=${apikey}`;

const getData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  setData(data);
};

const setData = (data) => {
  const date = new Date();
  const locale = navigator.language;
  const options = {
    dateStyle: "long",
    timeStyle: "short",
  };
  const formattedDate = new Intl.DateTimeFormat(locale, options).format(date);

  const [icon] = data.current.weather;

  const markup = `
<div class="wrapper--date">
  <h2 class="date" id="date">${formattedDate}</h2>
</div>
<div class="weather__wrapper">
  <div class="weather__icon">
    <img src="./icons/weather/${icon.icon}.png" alt="" />
  </div>
  <div class="weather__temp-high">
    <h3 class="weather__label">Temp, high</h3>
    <p class="weather__unit" id="temp-high">${kelToCel(
      data.daily[0].temp.max
    )}°C</p>
  </div>
  <div class="weather__temp-low">
    <h3 class="weather__label">Temp, low</h3>
    <p class="weather__unit" id="temp-low">${kelToCel(
      data.daily[0].temp.min
    )}°C</p>
  </div>
  <div class="weather__humidity">
    <h3 class="weather__label">Humidity</h3>
    <p class="weather__unit" id="humidity">${data.current.humidity} g.kg-1</p>
  </div>
  <div class="weather__wind">
    <h3 class="weather__label">Wind</h3>
    <p class="weather__unit" id="wind">${data.current.wind_speed} m/s</p>
  </div>
</div>
`;

  infoWrapper.innerHTML = markup;
};

getData();
