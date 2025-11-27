function getWeather() {
    const city = document.getElementById("cityInput").value;
    if (!city) return alert("Please enter a city name!");

    fetch(`https://api.open-meteo.com/v1/forecast?latitude=28.6139&longitude=77.2090&current_weather=true`)
        .then(response => response.json())
        .then(data => {
            
            document.getElementById("cityName").innerText = city;
            document.getElementById("temperature").innerText =
                "Temperature: " + data.current_weather.temperature + "°C";
            document.getElementById("description").innerText =
                "Weather: " + data.current_weather.weathercode;
            document.getElementById("wind").innerText =
                "Wind Speed: " + data.current_weather.windspeed + " km/h";

            document.getElementById("weatherResult").classList.remove("hidden");
        })
        .catch(error => {
            alert("Something went wrong!");
            console.log(error);
        });
}
