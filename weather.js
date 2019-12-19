
var search = document.getElementById("search");
search.addEventListener("keyup", e => {
   // console.log(e.target.value);
   
    
        var getCityName = e.target.value;
    
    getWeather(getCityName);
});

function getWeather(getCityName){
    //console.log(getCityName);
    const weatherApi = `http://api.openweathermap.org/data/2.5/weather?q=${getCityName}&&mode=json&units=metric&APPID=9e6db9efd71d092217316565d099fa31`;
    window
    .fetch(weatherApi)
    .then(data => {
        data
            .json()
            .then(weather => {
                var output= "";
                document.getElementById("template").innerHTML= output;
                 console.log(weather);
                // console.log(weather.coord.lon);
                // console.log(weather.coord.lat);
             var weatherData = weather.weather;
             for (let x of weatherData) {
                 output +=`
                 <div class="mt-4 weatherBlock">
                 <div class="card-body1">
                     <h1>${weather.name}</h1>
                     <span class="icon">
                     <img src="https://openweathermap.org/img/wn/${x.icon}.png"/></span>
                     <p><span>temp:</span>
                     <span class="temp">${weather.main.temp}&deg;c</span></p>
                     <span class="des float-left">${x.description}</span>
                     <span class="des float-right">${x.main}</span>
                 </div>
             </div>
                 `;
                document.getElementById("template1").innerHTML= output;
                /*
                 console.log(x);
                 console.log(x.id);
                 console.log(x.main);
                 console.log(x.description);
                 console.log(x.icon);*/
             }
        })
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err));
    
}

