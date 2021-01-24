let weather = {
    apiKey: "386e828c1c5c8362925232a5ee9f4f79",
    units: "metric",
    getWeather: function(city){
        const request = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${this.units}&appid=${this.apiKey}`
        fetch(request)
            .then(response =>{
                return response.json();
            })
            .then((data) =>{
                this.displayWeather(data);
            })
    },
    displayWeather: function (data) {
        console.log(data);
        const city = data.name
        const temp = data.main.temp;
        const description = data.weather[0].description;
        const windspeed = data.wind.speed;
        const humidity = data.main.humidity;
        const icon = data.weather[0].icon;

        document.getElementById("city").innerHTML = `Weather in ${city}`;
        document.getElementById("temp").innerHTML = temp + "°C";
        document.getElementById("description").innerHTML = `<h3> ${description} </h3>`;
        document.getElementById("wind-speed").innerHTML = ` Wind speed: ${windspeed} km/h `;
        document.querySelector("#humidity").innerHTML = ` humidity: ${humidity}% `;
        document.querySelector("img").src = `https://openweathermap.org/img/wn/${icon}@2x.png`
        document.querySelector(".weather-details").classList.remove("loading"); 
        document.querySelector("#weather").style.background = `url(https://source.unsplash.com/featured/?${city})`
    },
    search: function() {
        const input = document.querySelector("#search-box").value;
        this.getWeather(input); 
    }
}

document.querySelector("#search-box")
.addEventListener("keypress", function (event) {
    if(event.key == "Enter"){
        weather.search();
    }
})

document.querySelector("#search-btn")
    .addEventListener("click", () =>{
        weather.search();
    })