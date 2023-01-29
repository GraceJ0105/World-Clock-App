function updateTime() {
  let edinburghElement = document.querySelector("#edinburgh");
  let edinburghDateElement = edinburghElement.querySelector(".date");
  let edinburghTimeElement = edinburghElement.querySelector(".time");
  let edinburghTimezone = moment().tz("Europe/London");
  edinburghTimeElement.innerHTML = edinburghTimezone.format("h:mm:ss A");
  edinburghDateElement.innerHTML = edinburghTimezone.format("DD MMMM, YYYY");

  let bangkokElement = document.querySelector("#bangkok");
  let bangkokDateElement = bangkokElement.querySelector(".date");
  let bangkokTimeElement = bangkokElement.querySelector(".time");
  let bangkokTimezone = moment().tz("Asia/Bangkok");
  bangkokTimeElement.innerHTML = bangkokTimezone.format("h:mm:ss A");
  bangkokDateElement.innerHTML = bangkokTimezone.format("DD MMMM, YYYY");
}
setInterval(updateTime, 1000);
