import logo from './logo.svg';
import './App.css';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

const logo1 = require('./Images/IMG_6771.JPG');
const logo2 = require('./Images/IMG_6787.PNG');
const logo3 = require('./Images/IMG_6788.PNG');
const logo4 = require('./Images/IMG_6789.PNG');
const logo5 = require('./Images/IMG_6790.PNG');
const logo6 = require('./Images/IMG_6791.PNG');
const logo7 = require('./Images/IMG_6792.PNG');
const logo8 = require('./Images/IMG_6793.PNG');
const logo9 = require('./Images/IMG_6794.PNG');
const logo10 = require('./Images/IMG_6773.JPG');
const animation = require('./Images/slideforvon.gif');
const audio = require('./Images/Tatsunoshin - Light Me Up (feat. Giin) [NCS Release].mp3');



function App() {
  return (
    <div className="App">
      <header className="App-header">
          <LightGallery>
              <audio src={audio} controls></audio>
              <br/>

                      <img height={1500} src={logo5}/>

                      <img height={1500} src={logo7}/>

                      <img height={1500} src={logo8}/>

                      <img height={1500} src={logo9}/>

              <img width={1000} src={animation}/>




          </LightGallery>
      </header>
    </div>
  );
}

export default App;
