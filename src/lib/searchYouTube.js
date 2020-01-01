var searchYouTube = (options, callback) => {
  var returnObj = $.ajax({
    cache: false,
    data: {
      maxResults: 5,
      key: 'AIzaSyDVXgPDFrLqm_YHqo37TcIjB3hGga7QbqI',
      q: 'dogs',
      part: 'snippet'
    },
    dataType: 'json',
    type: 'GET',
    timeout: 5000,
    url: 'https://www.googleapis.com/youtube/v3/search'
});

  return returnObj;


};

export default searchYouTube;
