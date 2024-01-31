

const apiKey = "fbda30469aecde46a56780ecbb4a08b0";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const bgImag=document.querySelector("body");



async function checkWeather(city) {
    const response = await fetch(apiUrl +city+ `&appid=${apiKey}`);
    var data = await response.json();
    if(data.cod=="404"){
        alert("Please Enter Correct City Name!")
        return;
    }
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/clouds.png";
        bgImag.style.backgroundImage="url('Bgimg/Cloudymain.avif')";
        bgImag.classList.add('transitioning');

    } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.png";
        bgImag.style.backgroundImage="url('Bgimg/sunny-weather.jpg')";
        bgImag.classList.add('transitioning');

    } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.png";
        bgImag.style.backgroundImage="url('Bgimg/Rainy1.avif')";
        bgImag.classList.add('transitioning');


    } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/drizzle.png";
        bgImag.style.backgroundImage="url('Bgimg/Rainy2.avif')";
        bgImag.classList.add('transitioning');



    } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "images/mist.png";
        
    }



}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
    document.querySelector(".weather").style.display="block";


})





