function updateTime() {
  let currentLocationElement = document.querySelector("#currentLocation");
  if (currentLocationElement) {
    let currentLocationDateElement =
      currentLocationElement.querySelector(".date");
    let currentLocationTimeElement =
      currentLocationElement.querySelector(".time");
    let currentLocationTimezone = moment.tz.guess();
    let currentTime = moment().tz(currentLocationTimezone);
    currentLocationTimeElement.innerHTML = currentTime.format("h:mm:ss A");
    currentLocationDateElement.innerHTML = currentTime.format("DD MMMM, YYYY");
    findCurrentCity();
  }

  let johannesburgElement = document.querySelector("#johannesburg");
  if (johannesburgElement) {
    let johannesburgDateElement = johannesburgElement.querySelector(".date");
    let johannesburgTimeElement = johannesburgElement.querySelector(".time");
    let johannesburgTimezone = moment().tz("Africa/Johannesburg");
    johannesburgTimeElement.innerHTML =
      johannesburgTimezone.format("h:mm:ss A");
    johannesburgDateElement.innerHTML =
      johannesburgTimezone.format("DD MMMM, YYYY");
  }
  let bangkokElement = document.querySelector("#bangkok");
  if (bangkokElement) {
    let bangkokDateElement = bangkokElement.querySelector(".date");
    let bangkokTimeElement = bangkokElement.querySelector(".time");
    let bangkokTimezone = moment().tz("Asia/Bangkok");
    bangkokTimeElement.innerHTML = bangkokTimezone.format("h:mm:ss A");
    bangkokDateElement.innerHTML = bangkokTimezone.format("DD MMMM, YYYY");
  }
}

function updateCity(event) {
  event.preventDefault();
  setInterval(function () {
    let selectedTimezone = event.target.value;
    if (selectedTimezone === " ") {
      window.location.reload();
    }
    let cityName = selectedTimezone.replace("_", " ").split("/")[1];
    let selectedTime = moment().tz(selectedTimezone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${selectedTime.format("DD MMMM, YYYY")}</div>
          </div>
          <div class="time">${selectedTime.format("h:mm:ss A")}</div>
        </div>`;
  }, 1000);
}

function findCurrentCity() {
  navigator.geolocation.getCurrentPosition(searchLocation);
}

function updateCityName(response) {
  let cityName = response.data.name;
  let cityNameElement = document.querySelector("#currentLocation h2");
  cityNameElement.innerHTML = `${cityName}`;
}

function searchLocation(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "02a3e153b68431fbb188627f7c3c24b7";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateCityName);
}

//function getCurrentLocation() {
//navigator.geolocation.getCurrentPosition(searchLocation);
//}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#citySelect");

citiesSelectElement.addEventListener("change", updateCity);
