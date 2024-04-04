const searchBox = document.querySelector(
    ".card .search-city .search-box .search"
);
const searchIcon = document.querySelector(".card .search-city .search-icon");
const wheather = document.querySelector(".card .weather-details");

const iconLookup = {
    Clouds: "clouds.png",
    Clear: "clear.png", 
    Rain: "rain.png",
    Drizzle: "drizzle.png",
    Mist: "mist.png",
    Snow: "snow.png",
};

const wheatherDetails = async (city) => {
    const appkey = "f09b8ef55a95ebe535b312c6abffdc4d";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${appkey}`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    wheather.querySelector(".city-temp h1").innerHTML = `<h1>${data.main.temp}</h1>`;

    wheather.querySelector(".city-temp h2").innerHTML = `<h2>${city}</h2>`;
    
    wheather.querySelector(".more-details .humidity .humidity-percent h5").innerHTML = `<h5>${data.main.humidity}%</h5>`;

    wheather.querySelector(".more-details .wind-speed .wind-percent h5").innerHTML = `<h5>${data.wind.speed}km/h</h5>`;

    const weatherMain = data.weather[0].main;
    wheather.querySelector(".weather-image img").src = `images/${iconLookup[weatherMain]}`;

    wheather.style.maxHeight="400px";
};

searchIcon.addEventListener("click", async () => {
    await wheatherDetails(searchBox.value);
    searchBox.value = "";
});
