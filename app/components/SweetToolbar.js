import React from 'react';
import classNames from 'classnames';

import ReactDOM from 'react-dom';
import * as IconFa from 'react-icons/lib/fa';
import * as IconMd from 'react-icons/lib/md';

require('../sass/SweetToolbar.sass');


export default React.createClass({
  getInitialState() {
    return {
      initConfigLen: this.props.initConfig.length,
      isMainIconHide: false,
      isMainIconClicked: false,
      isSubIconHide: true,
      isSubIconShow: false,
      isCancelIconClicked: false,
      isCancelIconShow: false
    };
  },

  componentWillMount() {
  },

  _handleMainIconClick: function () {
    console.log('Click Main icon');
    const that = this;

    this.setState({
      isMainIconClicked: true
    });

    setTimeout(function () {
      that.setState({
        isMainIconClicked: false,
        isMainIconHide: true,
        isSubIconHide: false,
        isSubIconShow: true
      });
    }, 520);

    setTimeout(function () {
      that.setState({
        isCancelIconShow: true
      });
    }, that.state.initConfigLen * 50 + 320);
  },

  _handleSubIconClick: function (clickFn) {
    console.log('click')
    if (typeof clickFn === 'function') { clickFn(); }
  },

  _handleCancelIconClick: function () {
    console.log('Click cancel icon');
    const that = this;

    this.setState({
      isCancelIconClicked: true
    });

    setTimeout(function () {
      that.setState({
        isMainIconHide: false,
        isSubIconHide: true,
        isSubIconShow: false,
        isCancelIconShow: false,
        isCancelIconClicked: false,
      });
    }, that.state.initConfigLen * 50 + 100)
  },

  _genRows: function (initConfig) {
    const that = this;
    let result = [];
    let index = 0;

    initConfig.forEach(function (config) {
      const defaultClasses = 'icon-sub sub-'+ index + ' ' + config.iconName;
      const Icon = IconFa[config.iconName];
      const style = {
        animationDuration: (index * 50 + 100) + 'ms'
      }
      let subIconClassed = classNames(defaultClasses, {'hide':that.state.isSubIconHide, 'show': that.state.isSubIconShow});

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
    let cancelIconClasses = classNames('icon-cancel close', {'show': this.state.isCancelIconShow, 'clicked': this.state.isCancelIconClicked});

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
