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
    let found = 0;

    let city = document.getElementById("cityInput").value;
    fakeWeatherObj.forEach(we => {
        if (city === we.cityName) {
            console.log(we.cityName);
            console.log(we.Temparture);
            console.log(we.Humidity);
            console.log(we.weatherCondition);
            console.log(we.windSpeed);
            found = 1;
        }
    })

    if (found === 0) {
        console.log('City not found')
    }
}
