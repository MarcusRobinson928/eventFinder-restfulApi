const runSearch = function(e){
    e.preventDefault();
    $('#eventList').html('');
    $('#weather').html('');
    const input = $('#userInput').val().trim();
    $('#userInput').val('');
    getEvents(input);
    getWeather(input)
  }


  
  $('#search').on('click', runSearch)

  $('#search').click(function(e) {
    e.preventDefault();
    $('li').remove();
  });

