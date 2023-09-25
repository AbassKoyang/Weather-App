const apiKey = '0cd769a0f08f6edbbe71e99bb23bff04';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const searchBar = document.querySelector('.search__bar input');
const searchBtn = document.querySelector('.search__bar button');
const weatherIcon = document.querySelector('.weather__icon');
const error = document.querySelector('.error');

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == '404') {
        error.style.display = 'block'
        document.querySelector('.weather').style.display = 'none'
    } else {
    let data = await response.json();
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temperature').innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = Math.round(data.wind.speed) + ' km/h';

    if (data.weather[0].main == 'Clouds') {
        weatherIcon.src = './images/clouds.png'
    } 
    else if (data.weather[0].main == 'Clear'){
        weatherIcon.src = './images/clear.png'
    } 
    else if (data.weather[0].main == 'Drizzle'){
        weatherIcon.src = './images/drizzle.png'
    } 
    else if (data.weather[0].main == 'mist'){
        weatherIcon.src = './images/mist.png'
    } 
    else if (data.weather[0].main == 'Rain'){
        weatherIcon.src = './images/rain.png'
    } 
    else if (data.weather[0].main == 'Snow'){
        weatherIcon.src = './images/snow.png'
    }

    document.querySelector('.weather').style.display = 'block';
    error.style.display = 'none';
    }
    
}

searchBtn.addEventListener('click', ()=>{
    checkWeather(searchBar.value);
})