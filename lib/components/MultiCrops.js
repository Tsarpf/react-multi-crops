'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ramda = require('ramda');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _shortid = require('shortid');

var _shortid2 = _interopRequireDefault(_shortid);

var _Crop = require('./Crop');

var _Crop2 = _interopRequireDefault(_Crop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var isValidPoint = function isValidPoint() {
  var point = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var strictNumber = function strictNumber(number) {
    return (0, _ramda.both)((0, _ramda.is)(Number), (0, _ramda.complement)((0, _ramda.equals)(NaN)))(number);
  };
  return strictNumber(point.x) && strictNumber(point.y);
};

var MultiCrops = function (_Component) {
  _inherits(MultiCrops, _Component);

  function MultiCrops() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MultiCrops);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MultiCrops.__proto__ || Object.getPrototypeOf(MultiCrops)).call.apply(_ref, [this].concat(args))), _this), _this.drawingIndex = -1, _this.pointA = {}, _this.id = _shortid2.default.generate(), _this.renderCrops = function (props) {
      var indexedMap = (0, _ramda.addIndex)(_ramda.map);
      return indexedMap(function (coor, index) {
        return _react2.default.createElement(_Crop2.default
        // improve performance when delet crop in middle array
        , _extends({ key: coor.id || index,
          index: index,
          coordinate: coor
        }, props));
      })(props.coordinates);
    }, _this.getCursorPosition = function (e) {
      var _this$container$getBo = _this.container.getBoundingClientRect(),
          left = _this$container$getBo.left,
          top = _this$container$getBo.top;

      return {
        x: e.clientX - left,
        y: e.clientY - top
      };
    }, _this.handleMouseDown = function (e) {
      var coordinates = _this.props.coordinates;

      if (e.target === _this.img || e.target === _this.container) {
        var _this$getCursorPositi = _this.getCursorPosition(e),
            x = _this$getCursorPositi.x,
            y = _this$getCursorPositi.y;

        _this.drawingIndex = coordinates.length;
        _this.pointA = { x: x, y: y };
        _this.id = _shortid2.default.generate();
      }
    }, _this.handleMouseMove = function (e) {
      var _this$props = _this.props,
          onDraw = _this$props.onDraw,
          onChange = _this$props.onChange,
          coordinates = _this$props.coordinates;
      var _this2 = _this,
          pointA = _this2.pointA;

      if (isValidPoint(pointA)) {
        var pointB = _this.getCursorPosition(e);

        // get the drawing coordinate
        var coordinate = {
          x: Math.min(pointA.x, pointB.x),
          y: Math.min(pointA.y, pointB.y),
          width: Math.abs(pointA.x - pointB.x),
          height: Math.abs(pointA.y - pointB.y),
          id: _this.id
        };
        var nextCoordinates = (0, _ramda.clone)(coordinates);
        nextCoordinates[_this.drawingIndex] = coordinate;
        if ((0, _ramda.is)(Function, onDraw)) {
          onDraw(coordinate, _this.drawingIndex, nextCoordinates);
        }
        if ((0, _ramda.is)(Function, onChange)) {
          onChange(coordinate, _this.drawingIndex, nextCoordinates);
        }
      }
    }, _this.handlMouseUp = function () {
      _this.pointA = {};
      if (_this.props.onMouseUp) {
        _this.props.onMouseUp();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MultiCrops, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          src = _props.src,
          width = _props.width,
          height = _props.height,
          onLoad = _props.onLoad;
      // const { clicked } = this.state

      return _react2.default.createElement(
        'div',
        {
          style: {
            display: 'inline-block',
            position: 'relative'
          },
          onMouseDown: this.handleMouseDown,
          onMouseMove: this.handleMouseMove,
          onMouseUp: this.handlMouseUp,
          ref: function ref(container) {
            return _this3.container = container;
          }
        },
        _react2.default.createElement('img', {
          ref: function ref(img) {
            return _this3.img = img;
          },
          src: src,
          width: width,
          height: height,
          onLoad: onLoad,
          alt: '',
          draggable: false
        }),
        this.renderCrops(this.props)
      );
    }
  }]);

  return MultiCrops;
}(_react.Component);

var string = _propTypes2.default.string,
    arrayOf = _propTypes2.default.arrayOf,
    number = _propTypes2.default.number,
    func = _propTypes2.default.func;


MultiCrops.propTypes = {
  coordinates: arrayOf(_Crop.coordinateType),
  src: string,
  width: number, // eslint-disable-line
  height: number, // eslint-disable-line
  onDraw: func, // eslint-disable-line
  onChange: func, // eslint-disable-line
  onLoad: func, // eslint-disable-line
  onMouseUp: func // eslint-disable-line
};

MultiCrops.defaultProps = {
  coordinates: [],
  src: ''
};

exports.default = MultiCrops;