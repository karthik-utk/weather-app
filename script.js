function getWeather() {
    let city = document.getElementById("cityInput").value;
    let result = document.getElementById("weatherResult");
    let apiKey = config.apiKey;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                result.style.display = "block";
                result.innerHTML = `
                    <div class="city-name">${data.name}, ${data.sys.country}</div>
                    <div class="condition">${data.weather[0].description}</div>
                    <div class="temp">${Math.round(data.main.temp)}°C</div>
                    <div class="details">
                        <div class="detail-item">
                            <div class="detail-label">Humidity</div>
                            <div class="detail-value">${data.main.humidity}%</div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-label">Wind</div>
                            <div class="detail-value">${data.wind.speed} km/h</div>
                        </div>
                    </div>
                `;
            } else {
                result.style.display = "block";
                result.innerHTML = '<p class="error">City not found</p>';
            }
        })
        .catch(error => {
            result.style.display = "block";
            result.innerHTML = '<p class="error">Something went wrong</p>';
        });
}