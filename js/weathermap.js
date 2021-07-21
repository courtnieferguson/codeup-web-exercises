'use strict'

$(document).ready(function () {

    var lat = 29.424349 // geocode what user's type in click func
    var long = -98.491142 // get coordinates, reset lat & long in click func , call weatherData

    let mapboxAPIKey = "pk.eyJ1IjoiY291cnRuaWVmZXJndXNvbjkiLCJhIjoiY2tyNTF0emo4MmQ1NzJvbzdrZGRsbnd4MiJ9.M_E5w8LuARdS94_A0g1KKg";
    mapboxgl.accessToken = mapboxAPIKey

    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        zoom: 15,
        center: [long, lat]
    });
    var placeMarker = new mapboxgl.Marker({
        draggable: true
    })
    placeMarker
        .setLngLat([long, lat])
        .addTo(map);

    weatherData();

    function weatherData() {
        $.get(`https://api.openweathermap.org/data/2.5/onecall`, {
            appid: `0a9d88b94f9dd96f3d1204102a5c65d2`,
            lat: lat,
            lon: long,
            units: `imperial`
        }).done(function (data) {
            console.log(data);

            $('#main-card-col').html("");

            data.daily.forEach(function (day, index) {
                if (index < 5) {
                    console.log(day);
                    var weatherCard = `
                     <div class="card col-2" id="styleMe" style="width: 18rem;">
                         <div class="card-header">
                            ${new Date(day.dt * 1000).toDateString()}
                        </div>
                          <ul class="list-group list-group-flush">
                            <li class="list-group-item">${day.temp.morn} / ${day.temp.night} </li>
                            <li class="list-group-item"><img src="https://openweathermap.org/img/w/${day.weather[0].icon}.png" alt="icons"></li>
                            <li class="list-group-item">Description: ${day.weather[0].description} </li>
                            <li class="list-group-item">Humidty: ${day.humidity} </li>
                            <li class="list-group-item">Wind: ${day.wind_speed}</li>
                            <li class="list-group-item">Pressure: ${day.pressure}</li>
                         </ul>
                 </div>`
                    $('#main-card-col').append(weatherCard)
                }

            })  // loop ends
        }) // .done function ends
    } // weatherData function ends


    function onDragEnd() {
        var lngLat = placeMarker.getLngLat()
        console.log(lngLat);

form.addEventListener("submit", e => {
    e.preventDefault();
    const inputVal = input.value;
});
const apiKey = `0a9d88b94f9dd96f3d1204102a5c65d2`;
const inputVal = input.value;

        geocode(address, mapboxAPIKey).then(function(result) {
            console.log(result);
            long = result[0];
            lat = result[1];

            placeMarker
                .setLngLat([long, lat])

            map.flyTo({
                center: [long, lat],
                essential: true // this animation is considered essential
            }) // flyto map func ends
        }); // geocode func ends
        weatherData();
    }); // find func ends

}) // document.ready ends
