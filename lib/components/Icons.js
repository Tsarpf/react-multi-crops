'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NumberIcon = exports.DeleteIcon = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DeleteIcon = exports.DeleteIcon = function DeleteIcon(props) {
  return _react2.default.createElement(
    'div',
    _extends({}, props, {
      className: 'jsx-1413730563' + ' ' + (props.className != null && props.className || 'rmc-icon-container')
    }),
    _react2.default.createElement('div', {
      className: 'jsx-1413730563' + ' ' + 'rmc-remove'
    }),
    _react2.default.createElement(_style2.default, {
      styleId: '1413730563',
      css: '.rmc-icon-container.jsx-1413730563{width:6px;height:6px;cursor:pointer;float:right;background:#262626;opacity:0.8;}.rmc-remove.jsx-1413730563{color:white;position:absolute;margin-top:2px;}.rmc-remove.jsx-1413730563:hover{cursor:pointer;}.rmc-remove.jsx-1413730563:before{content:\'\';position:absolute;width:6px;height:1px;background-color:currentColor;-webkit-transform:rotate(45deg);-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}.rmc-remove.jsx-1413730563:after{content:\'\';position:absolute;width:6px;height:1px;background-color:currentColor;-webkit-transform:rotate(-45deg);-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);}'
    })
  );
};

var NumberIcon = exports.NumberIcon = function NumberIcon(_ref) {
  var number = _ref.number;
  return _react2.default.createElement(
    'div',
    {
      className: 'jsx-433829100' + ' ' + 'rmc-number'
    },
    number,
    _react2.default.createElement(_style2.default, {
      styleId: '433829100',
      css: '.rmc-number.jsx-433829100{width:6px;height:6px;float:left;font-size:4px;background:#262626;text-align:center;line-height:6px;color:white;opacity:0.8;}'
    })
  );
};

var number = _propTypes2.default.number;


NumberIcon.propTypes = {
  number: number
};

NumberIcon.defaultProps = {
  number: ''
};