const btn = document.querySelector("#submit");
const temps = document.querySelector(".temps");
const humidity = document.querySelector(".humidity");
const description = document.querySelector(".description");

const apiKey = "d1d3053bcaf978bfa2d00bda55f06324";

btn.addEventListener("click", function () {
  const searchInput = document.getElementById("city").value;
  // console.log(searchInput);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then((res) => {
      console.log(res);
      if (!res.ok) {
        throw new Error(`${searchInput} is not a valid county`);
      }

      return res.json();
    })
    .then((data) => {
      console.log(data);
      temps.innerHTML = `Temperature: ${data.main.temp} °C`;
      humidity.innerHTML = `Humidity: ${data.main.humidity}`;
      description.innerHTML = `Oh!! it's gonna be ${data.weather[0].description}`;
    })
    .catch((err) => (temps.innerHTML = `Error: ${err}`));
});
