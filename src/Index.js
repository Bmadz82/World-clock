function updateTime() {
  const locations = {
      "America/Los_Angeles": "#los-angeles",
      "Europe/Paris": "#paris",
      "Asia/Tokyo": "#tokyo"
  };

  for (const [timezone, selector] of Object.entries(locations)) {
      const element = document.querySelector(selector);
      if (element) {
          const dateElement = element.querySelector(".date");
          const timeElement = element.querySelector(".time");
          const time = moment().tz(timezone);
          dateElement.innerHTML = time.format("MMMM Do YYYY");
          timeElement.innerHTML = time.format("h:mm:ss [<small>]A[</small>]");
      }
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
      cityTimeZone = moment.tz.guess();
  }
  
  const cityName = cityTimeZone.replace("_", " ").split("/")[1];
  const cityTime = moment().tz(cityTimeZone);
  const citiesElement = document.querySelector("#cities");

  citiesElement.innerHTML = `
      <div class="city">
          <div>
              <h2>${cityName}</h2>
              <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
      </div>
      <a href="/">All cities</a>
  `;
}

updateTime();
setInterval(updateTime, 1000);

const citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
