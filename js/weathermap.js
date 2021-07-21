'use strict'

$(document).ready(function () {

    var lat = 29.424349
    var long = -98.491142

    mapboxgl.accessToken = mapboxAPIKey

    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        zoom: 12,
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

            })
        })
    }


    function onDragEnd() {
        var lngLat = placeMarker.getLngLat()
        console.log(lngLat);

        reverseGeocode(lngLat, mapboxAPIKey).then(function(result) {
            console.log(result);
            $('#current_city').html('Current Location: ' + result);
            placeMarker
                .setLngLat([long, lat])

            map.flyTo({
                center: [long, lat],
                essential: true
            })
        });





        long = lngLat.lng;
        lat = lngLat.lat;
        weatherData();
    }

    placeMarker.on('dragend', onDragEnd)

    $('#find_button').click(function (e) {
        e.preventDefault();
        var address = $("#userInput").val();
        var lngLat = placeMarker.getLngLat();
        console.log(address)

        $('#current_city').html('Current Location: ' + address);

        geocode(address, mapboxAPIKey).then(function(result) {
            console.log(result);
            long = result[0];
            lat = result[1];

            placeMarker
                .setLngLat([long, lat])

            map.flyTo({
                center: [long, lat],
                essential: true
            })
        });
        weatherData();
    });

})

