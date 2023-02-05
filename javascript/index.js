function updateTime() {
  let edinburghElement = document.querySelector("#edinburgh");
  if (edinburghElement) {
    let edinburghDateElement = edinburghElement.querySelector(".date");
    let edinburghTimeElement = edinburghElement.querySelector(".time");
    let edinburghTimezone = moment().tz("Europe/London");
    edinburghTimeElement.innerHTML = edinburghTimezone.format("h:mm:ss A");
    edinburghDateElement.innerHTML = edinburghTimezone.format("DD MMMM, YYYY");
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
    if (selectedTimezone === "current") {
      selectedTimezone = moment.tz.guess();
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

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#citySelect");

citiesSelectElement.addEventListener("change", updateCity);
