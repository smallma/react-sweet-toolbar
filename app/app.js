import React from 'react';
import ReactDOM from 'react-dom';

import SweetToolbar from "./components/SweetToolbar.js";

// require('./sass/test.css');


const styles = {
  main: {
    width: 800,
    height: 600,
    backgroundColor: 'rgba(0,0,0,0.1)'
  }
};

const searchFn = function(inputValue, endSearch) {
  console.log('inputValue: ' + inputValue);

  setTimeout(function () {
    endSearch();
  }, 2000);
}

const cancelFn = function (endSearch) {
  // sometimes needs to cancel search
}

const initConfig = [
  {
    iconName: 'FaFacebook',
    clickFn: function () {
      console.log('Handle Facebook Click');
    }
  },
  {
    iconName: 'FaTwitter',
    clickFn: function () {
      console.log('Handle Twitter Click');
    }
  },
  {
    iconName: 'FaPinterest',
    clickFn: function () {
      console.log('Handle Pinterest Click');
    }
  },
  {
    iconName: 'FaTumblr',
    clickFn: function () {
      console.log('Handle Tumblr Click');
    }
  },
  {
    iconName: 'FaGooglePlus',
    clickFn: function () {
      console.log('Handle Google Plus Click');
    }
  }
];

ReactDOM.render(
  <div style={styles.main}>
    <SweetToolbar initConfig={initConfig} />
  </div>,
  document.getElementById("react")
);