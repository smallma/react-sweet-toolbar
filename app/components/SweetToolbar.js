import React from 'react';
import classNames from 'classnames';

import ReactDOM from 'react-dom';
import IconSearch from 'react-icons/lib/fa/search';

require('../sass/SweetToolbar.sass');


export default React.createClass({
  getInitialState() {
    return {
      isInputActive: false,
    };
  },

  componentWillMount() {
  },

  _handleMainBtnClick: function () {
    console.log('Click Main icon');
  },

  _handleSubBtnClick: function (clickFn) {
    console.log('click')
    if (typeof clickFn === 'function') { clickFn(); }
  },

  _genRows: function (initConfig) {
    const that = this;
    let result = [];

    initConfig.forEach(function (config) {
      const Icon = require('react-icons/lib/fa/' + config.iconName);
      const className = 'icon ' + config.iconName;
      result.push(
        <div className={className} onClick={that._handleSubBtnClick.bind(that, config.clickFn)}>
          <Icon/>
        </div>
      );
    });

    return result;
  },

  render: function() {
    return (
      <div className="sweet-toolbar">

        <div className="icon main search" onClick={this._handleMainBtnClick}>
          <IconSearch/>
        </div>
        {this._genRows(this.props.initConfig)}
      </div>
    );
  }
});
