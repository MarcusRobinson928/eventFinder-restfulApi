const getWeather = function(cityName){
    const queryURL = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=fhDCHfwue9AjkN7jwe8WUZ7jb7V3Uxpd&q=${cityName}&language=en-us&details=flase&offset=0`
    $.get(queryURL).then(function(response){
        key = response[0].Key
        city = response[0].LocalizedName
        $.getJSON(`http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=fhDCHfwue9AjkN7jwe8WUZ7jb7V3Uxpd&language=en-us&details=false`, function(data){
            tempVal = data[0].Temperature.Imperial.Value
            weather = data[0].WeatherText
            console.log(city)
            console.log(tempVal)
            console.log(weather)
            $('#weather').append(`<p id='city'>${city}</p>`)
            $('#weather').append(`<p id='temp'>${tempVal} ℉</p>`)
            $('#weather').append(`<p id='weather2'>${weather}</p>`)
        })        
    })
}