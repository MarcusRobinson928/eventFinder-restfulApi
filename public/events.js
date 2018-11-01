const getEvents = function(eventName){
    const queryURL = `https://app.ticketmaster.com/discovery/v2/events.json?city=${eventName}&apikey=N86FEwtnedq98If1KBfmgBFFh4Niz4aL`;
    $.get(queryURL).then(function(response) {
        for (let i = 0; i < response._embedded.events.length; i++){
            let events = response._embedded.events[i].name
            let id = response._embedded.events[i].id
            let urls = response._embedded.events[i].url
            let image = `https://app.ticketmaster.com/discovery/v2/events/${id}/images.json?apikey=N86FEwtnedq98If1KBfmgBFFh4Niz4aL`;
            console.log(events)
            $('#eventList').append(`<li onclick=window.location.href='${urls}'>${events}</li>`)
        }
    })   
} 
