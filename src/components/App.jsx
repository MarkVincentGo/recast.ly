import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import APIKey from '../config/youtube.js';

class App extends React.Component {
  constructor(props) {
    super(props),
    this.state = {
      options: {
        key: APIKey,
        max: 5,
        query: 'dogs'
      },
      videoArray: exampleVideoData,
      currentVideo: exampleVideoData[1]
    };

  }


  selectVideo(event) {
    this.setState({
      currentVideo: event
    });
  }

  changeQuery(event) {
    this.setState({
      options: {
        key: APIKey,
        max: 5,
        query: event.target.value
      }
    });
    this.searchYouTube();
  }

  searchYouTube() {
    console.log(this.state.videoArray);
    this.props.searchYouTube(this.state.options, (data) => this.setState({
      videoArray: data
    })
    );


  }



  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search changeQuery={this.changeQuery.bind(this)} submit={this.searchYouTube.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo} />
          </div>
          <div className="col-md-5">
            <VideoList onClick={this.selectVideo.bind(this)} videos={this.state.videoArray} />
          </div>
        </div>
      </div>
    );
  }


}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
