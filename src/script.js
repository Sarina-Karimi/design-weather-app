function searchResault(event){
    event.preventDefault();
    let searchInput = document.querySelector("#submit-button");
    searchCity(searchInput.value);
}
let searchElement = document.querySelector("#search-form")
searchElement.addEventListener("submit",searchResault);

function data(response){
    let city = document.querySelector("#city");
    let currentDay = document.querySelector("#day");
    let currentTime = document.querySelector("#time");
    let currentondition = document.querySelector("#weatherCondition");
    let currentHumidity = document.querySelector("#humidityAmounth");
    let currentSpeed = document.querySelector("#windSpeed");
    city.innerHTML = response.data.city ;
}
function formatDate(date) {
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[date.getDay()];
    let date = new Date(response.data.time * 1000);
}  

function searchCity(city){
    apiKey = "707b228tfod34a6602695b296fa44bb3";
    apiUrl = 'https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}'
    axios.get(apiUrl).then(data);
}