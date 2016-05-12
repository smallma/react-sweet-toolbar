# react-sweet-toobar

[react-sweet-Toobar](https://www.npmjs.com/package/react-sweet-toobar) as React components

[![NPM](https://nodei.co/npm/react-sweet-toobar.png)](https://www.npmjs.com/package/react-sweet-Toobar)

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
* include node_module/react-sweet-Toobar/dist/css/SweetToobar.css


## Usage

```js
import React from 'react';
import ReactDOM from 'react-dom';

import SweetToobar from "react-sweet-toobar";

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
```


## Author

Designer: Bill Chen (tw0023156@gmail.com)

Coder: smallma (s.rain@yahoo.com.tw)

## License

MIT