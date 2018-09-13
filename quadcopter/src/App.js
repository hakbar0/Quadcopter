import React, { Component } from 'react';
import './App.css';
import YouTube from 'react-youtube';
;
class App extends Component {

  _onReady(event) {
    // access to player in all event handlers via event.target
  //  event.target.pauseVideo();
  }

  render() {
    
    const opts = {
      height: '540px',
      width: '980px',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        controls: 1,
        loop: 1,
        modestbranding: 0,
        rel: 0,
        showinfo: 0,
      }
    };




    return (
      <div className="App">
      <div className = "nav">
      <div className = "top-nav">Xela</div>
      </div>

      <div className = "main-page">

      <div className = "content">
      <div className = "text">
      <YouTube
        videoId="5lWkZ-JaEOc"
        opts={opts}
      />
      </div>
      </div>

      <div className = "buttons">
      <div className = "button1"></div>
      <div className = "button2"></div>
     </div>

     <div className = "clients">
     <div className = "clients-text">AT XELA WE OPERATE WITH A RANGE OF MULTI-ROTOR DRONES WITH CAMERA AND IMAGING SYSTEMS;FULLY CAA LICENSED,WE WORK ON LAND,OVER WATER,DURING THE DAY,DURING THE NIGHT.</div>
     <div className = "clients-images"></div>

     </div>

 
 </div>
 </div>
     

    );
  }
}

export default App;
