import React from 'react';
import classNames from 'classnames';

import ReactDOM from 'react-dom';
import * as IconFa from 'react-icons/lib/fa';
import * as IconMd from 'react-icons/lib/md';

require('../sass/SweetToolbar.sass');


export default React.createClass({
  getInitialState() {
    return {
      isMainIconHide: false,
      isMainIconClicked: false,
      isSubIconHide: true,
      isSubIconShow: false,
      isCancelIconClicked: false
    };
  },

  componentWillMount() {
  },

  _handleMainIconClick: function () {
    console.log('Click Main icon');
    const that = this;

    this.setState({
      isMainIconClicked: true,
    });

    setTimeout(function () {
      that.setState({
        isMainIconClicked: false,
        isMainIconHide: true,
        isSubIconHide: false,
        isSubIconShow: true
      });
    }, 600)
  },

  _handleSubIconClick: function (clickFn) {
    console.log('click')
    if (typeof clickFn === 'function') { clickFn(); }
  },

  _handleCancelIconClick: function () {
    console.log('Click cancel icon');
  },

  _genRows: function (initConfig) {
    const that = this;
    let result = [];
    let index = 0;

    initConfig.forEach(function (config) {
      const defaultClasses = 'icon-sub sub-'+ index + ' ' + config.iconName;

      let subIconClassed = classNames(defaultClasses, {'hide':that.state.isSubIconHide, 'show': that.state.isSubIconShow});

      // const className = 'icon-sub ' + config.iconName;
      const Icon = IconFa[config.iconName];
      const style = {
        animationDuration: (index * 50 + 100) + 'ms'
      }
      result.push(
        <div key={'icon-sub--' + index} style={style} className={subIconClassed} onClick={that._handleSubIconClick.bind(that, config.clickFn)}>
          <Icon />
        </div>
      );
      index = index + 1;
    });

    return result;
  },

  render: function() {
    let mainIconClasses = classNames('icon-main share', {'hide': this.state.isMainIconHide, 'clicked': this.state.isMainIconClicked});
    let cancelIconClasses = classNames('icon-sub close', {'clicked': this.state.isCancelIconClicked});

    return (
      <div className="sweet-toolbar">
        <div className={mainIconClasses} onClick={this._handleMainIconClick}>
          <IconMd.MdShare />
        </div>
        {this._genRows(this.props.initConfig)}
        <div className={cancelIconClasses} onClick={this._handleCancelIconClick}>
          <IconMd.MdClose/>
        </div>
      </div>
    );
  }
});
