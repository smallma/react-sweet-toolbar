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
    iconName: 'plane',
    clickFn: function () {
      console.log('plane Fn');
    }
  },
  {
    iconName: 'android',
    clickFn: function () {
      console.log('Android Fn');
    }
  },
  {
    iconName: 'anchor',
    clickFn: function () {
      console.log('Anchor Fn');
    }
  }
];

ReactDOM.render(
  <div style={styles.main}>
    <SweetToolbar initConfig={initConfig} />
  </div>,
  document.getElementById("react")
);