# react-sweet-toobar

[react-sweet-toobar](https://www.npmjs.com/package/react-sweet-toobar) as React components

[![NPM](https://nodei.co/npm/react-sweet-toobar.png)](https://www.npmjs.com/package/react-sweet-toobar)

## Description
React based component Toobar. Enhance user experience of Toobar.


## Preview
![alt tag](https://cloud.githubusercontent.com/assets/429250/15212045/4034b42e-1871-11e6-92dd-46ee1f6e2237.gif)


## Installation

Install via [npm](https://www.npmjs.com/package/react-sweet-toobar)

Step 1:
```shell
npm install --save react-sweet-toobar
```

Step 2:
* include node_module/react-sweet-toobar/dist/css/SweetToobar.css


## Usage
* iconName please refer [react-icons Font-Awesome](http://gorangajic.github.io/react-icons/fa.html)

```js
import React from 'react';
import ReactDOM from 'react-dom';

import SweetToobar from "react-sweet-toobar";

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
```


## Author

Designer: Bill Chen (tw0023156@gmail.com)

Coder: smallma (s.rain@yahoo.com.tw)

## License

MIT
