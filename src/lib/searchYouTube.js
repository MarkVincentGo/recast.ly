var searchYouTube = (options, callback = () => {}) => {

  $.ajax({
    data: {
      key: options.key,
      q: options.query,
      maxResults: options.max,
      videoEmbeddable: 'true',
      type: 'video',
      part: 'snippet'
    },
    dataFilter: (data) => {
      data = JSON.parse(data);
      data = data.items;
      data = JSON.stringify(data);
      return data;
    },
    dataType: 'json',
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    timeout: 1500,
    success: callback
  }).done();
};

export default searchYouTube;
