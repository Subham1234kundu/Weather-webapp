
const weatherBody = document.getElementById("weather-body");
let weatherImg = document.getElementById("weatherImg");
let imgslot = document.getElementById("imgslot");
let forError = document.getElementById("forError");

const getWeathersData = async(city)=>{
    const api_key = "ba079b7164f6a2dddd866254d2be3fbb"
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`)
    const data = await res.json();
    try{
    
        console.log(data);
        forError.style.display = "none"
        imgslot.style.display = "flex"
        weatherImg.style.display ="flex"
        weatherBody.innerHTML = `
        
        <div class="weather-box" id="weather-box"">
            <h2 class="temp">${Math.round(data.main.temp - 273.15)}<sup>°C</sup></h2>
            <p class="decp">${data.weather[0].description}</p>
        </div>



        <div class="weather-details" id="weather-details">
            <div class="humidity-body">
                <i class="bi bi-droplet-fill"></i>
                <div class="text">
                    <span id="humidity">${data.main.humidity}%</span>
                    <p>Humidity</p>
                </div>
            </div>
        
            <div class="wind-details">
                <i class="bi bi-wind"></i>
                <div class="text">
                    <span id="wind-speed">${data.wind.speed}km/hr</span>
                    <p>wind speed</p>
                </div>
            </div>
        
            
        </div>
        `

    
 
        switch(data.weather[0].main){
            case "Clouds":
                weatherImg.src = "/images/cloud.png";
                break;
            case "Clear":
                weatherImg.src = "/images/clear.png";
                break;
            case "Rain":
                weatherImg.src = "/images/rain.png";
                break;
            case "Mist":
                weatherImg.src = "/images/mist.png";
                break;
            case "Snow":
                weatherImg.src = "/images/snow.png";
                break;
            
        }
    }
    catch(error){
        
        if(data.cod === "404"){
            weatherBody.innerHTML = "";
            weatherImg.style.display = "none";
            forError.style.display = "flex";
            forError.style.flexDirection = "column";
            
           
        }
       
    }
};

let refreash =()=>{

}
