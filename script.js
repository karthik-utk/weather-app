function getWeather() {
    let city = document.getElementById("cityInput").value;
    let result = document.getElementById("weatherResult");
    let apiKey = "b5f779cab944b9cc9d68f9f3c17905c4";
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                result.innerHTML = `
                    <p>City: ${data.name}</p>
                    <p>Temperature: ${data.main.temp} °C</p>
                    <p>Humidity: ${data.main.humidity} %</p>
                    <p>Condition: ${data.weather[0].description}</p>
                    <p>Wind Speed: ${data.wind.speed} km/h</p>
                `;
            } else {
                result.innerHTML = '<p>City not found</p>';
            }
        })
        .catch(error => {
            result.innerHTML = '<p>Something went wrong</p>';
            console.log(error);
        });
}