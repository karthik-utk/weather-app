const fakeWeatherObj = [{
    cityName: 'Vijayawada',
    Temparture: '38 C',
    Humidity: '0.75',
    weatherCondition: 'Sunny',
    windSpeed: '10 km/h'
},
{
    cityName: 'Hyderabad',
    Temparture: '19 C',
    Humidity: '0.15',
    weatherCondition: 'Cloudy',
    windSpeed: '3 km/h'
}, {
    cityName: 'Chennai',
    Temparture: '25 C',
    Humidity: '0.55',
    weatherCondition: 'Sunny',
    windSpeed: '13 km/h'
}]

function getWeather() {
    let result = document.getElementById("weatherResult");
    let found = false;
    let city = document.getElementById("cityInput").value;
    fakeWeatherObj.forEach(we => {
        if (city === we.cityName) {
            found = true;
            result.innerHTML = `
                <p>City: ${we.cityName}</p>
                <p>Temperature: ${we.Temparture}</p>
                <p>Humidity: ${we.Humidity}</p>
                <p>Condition: ${we.weatherCondition}</p>
                <p>Wind Speed: ${we.windSpeed}</p>
            `;
        }
    })

    if (!found) {
       result.innerHTML = '<p>City not found</p>';
    }
}
