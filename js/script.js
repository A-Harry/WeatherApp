let weather = {
    apiKey: "386e828c1c5c8362925232a5ee9f4f79",
    currentWeather: function(city){
        const city1 = "Toronto"
        const request = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`
        fetch(request)
            .then(response =>{
                return response.json();
            })
            .then((data) =>{
                console.log(data)
            })
    }
}