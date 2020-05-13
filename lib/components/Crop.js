'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.coordinateType = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ramda = require('ramda');

var _interactjs = require('interactjs');

var _interactjs2 = _interopRequireDefault(_interactjs);

var _Icons = require('./Icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Crop = function (_Component) {
  _inherits(Crop, _Component);

  function Crop() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Crop);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Crop.__proto__ || Object.getPrototypeOf(Crop)).call.apply(_ref, [this].concat(args))), _this), _this.handleResizeMove = function (e) {
      var _this$props = _this.props,
          index = _this$props.index,
          coordinate = _this$props.coordinate,
          _this$props$coordinat = _this$props.coordinate,
          x = _this$props$coordinat.x,
          y = _this$props$coordinat.y,
          coordinates = _this$props.coordinates,
          onResize = _this$props.onResize,
          onChange = _this$props.onChange;
      var _e$rect = e.rect,
          width = _e$rect.width,
          height = _e$rect.height;
      var _e$deltaRect = e.deltaRect,
          left = _e$deltaRect.left,
          top = _e$deltaRect.top;


      var nextCoordinate = _extends({}, coordinate, { x: x + left, y: y + top, width: width, height: height
      });
      var nextCoordinates = (0, _ramda.update)(index, nextCoordinate)(coordinates);
      if ((0, _ramda.is)(Function, onResize)) {
        onResize(nextCoordinate, index, nextCoordinates);
      }
      if ((0, _ramda.is)(Function, onChange)) {
        onChange(nextCoordinate, index, nextCoordinates);
      }
    }, _this.handleDragMove = function (e) {
      var _this$props2 = _this.props,
          index = _this$props2.index,
          coordinate = _this$props2.coordinate,
          _this$props2$coordina = _this$props2.coordinate,
          x = _this$props2$coordina.x,
          y = _this$props2$coordina.y,
          coordinates = _this$props2.coordinates,
          onDrag = _this$props2.onDrag,
          onChange = _this$props2.onChange;
      var dx = e.dx,
          dy = e.dy;

      var nextCoordinate = _extends({}, coordinate, { x: x + dx, y: y + dy });
      var nextCoordinates = (0, _ramda.update)(index, nextCoordinate)(coordinates);
      if ((0, _ramda.is)(Function, onDrag)) {
        onDrag(nextCoordinate, index, nextCoordinates);
      }

      if ((0, _ramda.is)(Function, onChange)) {
        onChange(nextCoordinate, index, nextCoordinates);
      }
    }, _this.handleDelete = function () {
      var _this$props3 = _this.props,
          index = _this$props3.index,
          coordinate = _this$props3.coordinate,
          onDelete = _this$props3.onDelete,
          coordinates = _this$props3.coordinates;

      var nextCoordinates = (0, _ramda.remove)(index, 1)(coordinates);
      if ((0, _ramda.is)(Function, onDelete)) {
        onDelete(coordinate, index, nextCoordinates);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Crop, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      (0, _interactjs2.default)(this.crop).draggable({}).resizable({
        edges: {
          left: true, right: true, bottom: true, top: true
        }
      }).on('dragmove', this.handleDragMove).on('resizemove', this.handleResizeMove);
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      // reduce uncessary update
      return !(0, _ramda.equals)(nextProps.coordinate, this.props.coordinate) || nextProps.index !== this.props.index;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      (0, _interactjs2.default)(this.crop).unset();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          coordinate = _props.coordinate,
          index = _props.index;

      return _react2.default.createElement(
        'div',
        {
          style: Crop.cropStyle(coordinate),
          ref: function ref(crop) {
            return _this2.crop = crop;
          }
        },
        _react2.default.createElement(_Icons.NumberIcon, { number: index + 1 }),
        _react2.default.createElement(_Icons.DeleteIcon, {
          onClick: this.handleDelete
        })
      );
    }
  }]);

  return Crop;
}(_react.Component);

Crop.cropStyle = function (coordinate) {
  var x = coordinate.x,
      y = coordinate.y,
      width = coordinate.width,
      height = coordinate.height;


  return {
    // border: '1px dotted rgba(153,153,153,1)',
    // background: 'rgba(153,153,153,0.3)',
    display: 'inline-block',
    position: 'absolute',
    width: width,
    height: height,
    top: y,
    left: x,

    boxShadow: '0 0 6px #000',
    background: '#8c8c8c',
    opacity: 0.6
  };
};

var coordinateType = exports.coordinateType = _propTypes2.default.shape({
  x: _propTypes2.default.number.isRequired,
  y: _propTypes2.default.number.isRequired,
  width: _propTypes2.default.number.isRequired,
  height: _propTypes2.default.number.isRequired
});

Crop.propTypes = {
  coordinate: coordinateType.isRequired,
  index: _propTypes2.default.number.isRequired,
  onResize: _propTypes2.default.func, // eslint-disable-line
  onDrag: _propTypes2.default.func, // eslint-disable-line
  onDelete: _propTypes2.default.func, // eslint-disable-line
  onChange: _propTypes2.default.func, // eslint-disable-line
  coordinates: _propTypes2.default.array // eslint-disable-line
};

exports.default = Crop;