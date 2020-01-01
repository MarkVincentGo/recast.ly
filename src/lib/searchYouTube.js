var searchYouTube = (options, callback) => {
  var returnObj = $.ajax({
    data: {
      maxResults: 5,
      key: 'AIzaSyDVXgPDFrLqm_YHqo37TcIjB3hGga7QbqI',
      q: 'dogs',
      part: 'snippet'
    },
    dataType: 'json',
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    success:
  });

  return returnObj;


};

export default searchYouTube;
