import { b as createLucideIcon, R as React, c as clsx, g as getDefaultExportFromCjs, r as reactExports, j as jsxRuntimeExports, B as Button, T as Target, m as motion, U as Users, i as Search, d as TrendingUp, z as ue, o as Badge } from "./index--w3DYRFQ.js";
import { I as Input, S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-Bi2YwvFw.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-C-giT0DG.js";
import { C as ChartCard } from "./ChartCard-BEulRt6P.js";
import { P as PageHeader, D as Download, e as exportToCSV } from "./csvExport-DThDKCEu.js";
import { T as TrendingDown, S as StatCard, M as Minus } from "./StatCard-Dmm7jm2H.js";
import { a as mockPerformanceMetrics, m as mockBranchPerformance, b as mockLeaderboard } from "./mockPerformance-BYkWSlSF.js";
import { Z as Zap } from "./zap-BYVo_qIp.js";
import { W as filterProps, a5 as polarToCartesian, U as isFunction, ag as Dot, K as Layer, N as Animate, O as interpolateNumber, P as isEqual, Q as LabelList, V as Global, a1 as getValueByDataKey, ah as last, a6 as isNil, a2 as generateCategoricalChart, af as formatAxisMap, R as ResponsiveContainer, C as CartesianGrid, X as XAxis, Y as YAxis, T as Tooltip, B as Bar, a as Cell, L as Legend } from "./generateCategoricalChart-CVvru8ED.js";
import { B as BarChart } from "./BarChart-C9wnbT7l.js";
import { b as Polygon, P as PolarAngleAxis, a as PolarRadiusAxis } from "./PolarAngleAxis-Di9qdXjh.js";
import { M as Medal } from "./medal-pQMWa539.js";
import { A as Award } from "./award-CBS1kBw4.js";
import { L as LineChart, a as Line } from "./LineChart-D336VMeo.js";
import { A as AreaChart, a as Area } from "./AreaChart-BDsBOrRQ.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6", key: "17hqa7" }],
  ["path", { d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18", key: "lmptdp" }],
  ["path", { d: "M4 22h16", key: "57wxv0" }],
  ["path", { d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22", key: "1nw9bq" }],
  ["path", { d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22", key: "1np0yb" }],
  ["path", { d: "M18 2H6v7a6 6 0 0 0 12 0V2Z", key: "u46fv3" }]
];
const Trophy = createLucideIcon("trophy", __iconNode);
var _excluded$1 = ["cx", "cy", "innerRadius", "outerRadius", "gridType", "radialLines"];
function _typeof$1(o) {
  "@babel/helpers - typeof";
  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$1(o);
}
function _objectWithoutProperties$1(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null) return {};
  var target = {};
  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _extends$1() {
  _extends$1 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1.apply(this, arguments);
}
function ownKeys$1(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$1(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$1(Object(t), true).forEach(function(r2) {
      _defineProperty$1(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$1(obj, key, value) {
  key = _toPropertyKey$1(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey$1(t) {
  var i = _toPrimitive$1(t, "string");
  return "symbol" == _typeof$1(i) ? i : i + "";
}
function _toPrimitive$1(t, r) {
  if ("object" != _typeof$1(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$1(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var getPolygonPath = function getPolygonPath2(radius, cx, cy, polarAngles) {
  var path = "";
  polarAngles.forEach(function(angle, i) {
    var point = polarToCartesian(cx, cy, radius, angle);
    if (i) {
      path += "L ".concat(point.x, ",").concat(point.y);
    } else {
      path += "M ".concat(point.x, ",").concat(point.y);
    }
  });
  path += "Z";
  return path;
};
var PolarAngles = function PolarAngles2(props) {
  var cx = props.cx, cy = props.cy, innerRadius = props.innerRadius, outerRadius = props.outerRadius, polarAngles = props.polarAngles, radialLines = props.radialLines;
  if (!polarAngles || !polarAngles.length || !radialLines) {
    return null;
  }
  var polarAnglesProps = _objectSpread$1({
    stroke: "#ccc"
  }, filterProps(props, false));
  return /* @__PURE__ */ React.createElement("g", {
    className: "recharts-polar-grid-angle"
  }, polarAngles.map(function(entry) {
    var start = polarToCartesian(cx, cy, innerRadius, entry);
    var end = polarToCartesian(cx, cy, outerRadius, entry);
    return /* @__PURE__ */ React.createElement("line", _extends$1({}, polarAnglesProps, {
      key: "line-".concat(entry),
      x1: start.x,
      y1: start.y,
      x2: end.x,
      y2: end.y
    }));
  }));
};
var ConcentricCircle = function ConcentricCircle2(props) {
  var cx = props.cx, cy = props.cy, radius = props.radius, index = props.index;
  var concentricCircleProps = _objectSpread$1(_objectSpread$1({
    stroke: "#ccc"
  }, filterProps(props, false)), {}, {
    fill: "none"
  });
  return /* @__PURE__ */ React.createElement("circle", _extends$1({}, concentricCircleProps, {
    className: clsx("recharts-polar-grid-concentric-circle", props.className),
    key: "circle-".concat(index),
    cx,
    cy,
    r: radius
  }));
};
var ConcentricPolygon = function ConcentricPolygon2(props) {
  var radius = props.radius, index = props.index;
  var concentricPolygonProps = _objectSpread$1(_objectSpread$1({
    stroke: "#ccc"
  }, filterProps(props, false)), {}, {
    fill: "none"
  });
  return /* @__PURE__ */ React.createElement("path", _extends$1({}, concentricPolygonProps, {
    className: clsx("recharts-polar-grid-concentric-polygon", props.className),
    key: "path-".concat(index),
    d: getPolygonPath(radius, props.cx, props.cy, props.polarAngles)
  }));
};
var ConcentricPath = function ConcentricPath2(props) {
  var polarRadius = props.polarRadius, gridType = props.gridType;
  if (!polarRadius || !polarRadius.length) {
    return null;
  }
  return /* @__PURE__ */ React.createElement("g", {
    className: "recharts-polar-grid-concentric"
  }, polarRadius.map(function(entry, i) {
    var key = i;
    if (gridType === "circle") return /* @__PURE__ */ React.createElement(ConcentricCircle, _extends$1({
      key
    }, props, {
      radius: entry,
      index: i
    }));
    return /* @__PURE__ */ React.createElement(ConcentricPolygon, _extends$1({
      key
    }, props, {
      radius: entry,
      index: i
    }));
  }));
};
var PolarGrid = function PolarGrid2(_ref) {
  var _ref$cx = _ref.cx, cx = _ref$cx === void 0 ? 0 : _ref$cx, _ref$cy = _ref.cy, cy = _ref$cy === void 0 ? 0 : _ref$cy, _ref$innerRadius = _ref.innerRadius, innerRadius = _ref$innerRadius === void 0 ? 0 : _ref$innerRadius, _ref$outerRadius = _ref.outerRadius, outerRadius = _ref$outerRadius === void 0 ? 0 : _ref$outerRadius, _ref$gridType = _ref.gridType, gridType = _ref$gridType === void 0 ? "polygon" : _ref$gridType, _ref$radialLines = _ref.radialLines, radialLines = _ref$radialLines === void 0 ? true : _ref$radialLines, props = _objectWithoutProperties$1(_ref, _excluded$1);
  if (outerRadius <= 0) {
    return null;
  }
  return /* @__PURE__ */ React.createElement("g", {
    className: "recharts-polar-grid"
  }, /* @__PURE__ */ React.createElement(PolarAngles, _extends$1({
    cx,
    cy,
    innerRadius,
    outerRadius,
    gridType,
    radialLines
  }, props)), /* @__PURE__ */ React.createElement(ConcentricPath, _extends$1({
    cx,
    cy,
    innerRadius,
    outerRadius,
    gridType,
    radialLines
  }, props)));
};
PolarGrid.displayName = "PolarGrid";
function head(array) {
  return array && array.length ? array[0] : void 0;
}
var head_1 = head;
var first = head_1;
const first$1 = /* @__PURE__ */ getDefaultExportFromCjs(first);
var _excluded = ["key"];
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _callSuper(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct2() {
    return !!t;
  })();
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var Radar = /* @__PURE__ */ function(_PureComponent) {
  function Radar2() {
    var _this;
    _classCallCheck(this, Radar2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, Radar2, [].concat(args));
    _defineProperty(_this, "state", {
      isAnimationFinished: false
    });
    _defineProperty(_this, "handleAnimationEnd", function() {
      var onAnimationEnd = _this.props.onAnimationEnd;
      _this.setState({
        isAnimationFinished: true
      });
      if (isFunction(onAnimationEnd)) {
        onAnimationEnd();
      }
    });
    _defineProperty(_this, "handleAnimationStart", function() {
      var onAnimationStart = _this.props.onAnimationStart;
      _this.setState({
        isAnimationFinished: false
      });
      if (isFunction(onAnimationStart)) {
        onAnimationStart();
      }
    });
    _defineProperty(_this, "handleMouseEnter", function(e) {
      var onMouseEnter = _this.props.onMouseEnter;
      if (onMouseEnter) {
        onMouseEnter(_this.props, e);
      }
    });
    _defineProperty(_this, "handleMouseLeave", function(e) {
      var onMouseLeave = _this.props.onMouseLeave;
      if (onMouseLeave) {
        onMouseLeave(_this.props, e);
      }
    });
    return _this;
  }
  _inherits(Radar2, _PureComponent);
  return _createClass(Radar2, [{
    key: "renderDots",
    value: function renderDots(points) {
      var _this$props = this.props, dot = _this$props.dot, dataKey = _this$props.dataKey;
      var baseProps = filterProps(this.props, false);
      var customDotProps = filterProps(dot, true);
      var dots = points.map(function(entry, i) {
        var dotProps = _objectSpread(_objectSpread(_objectSpread({
          key: "dot-".concat(i),
          r: 3
        }, baseProps), customDotProps), {}, {
          dataKey,
          cx: entry.x,
          cy: entry.y,
          index: i,
          payload: entry
        });
        return Radar2.renderDotItem(dot, dotProps);
      });
      return /* @__PURE__ */ React.createElement(Layer, {
        className: "recharts-radar-dots"
      }, dots);
    }
  }, {
    key: "renderPolygonStatically",
    value: function renderPolygonStatically(points) {
      var _this$props2 = this.props, shape = _this$props2.shape, dot = _this$props2.dot, isRange = _this$props2.isRange, baseLinePoints = _this$props2.baseLinePoints, connectNulls = _this$props2.connectNulls;
      var radar;
      if (/* @__PURE__ */ React.isValidElement(shape)) {
        radar = /* @__PURE__ */ React.cloneElement(shape, _objectSpread(_objectSpread({}, this.props), {}, {
          points
        }));
      } else if (isFunction(shape)) {
        radar = shape(_objectSpread(_objectSpread({}, this.props), {}, {
          points
        }));
      } else {
        radar = /* @__PURE__ */ React.createElement(Polygon, _extends({}, filterProps(this.props, true), {
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave,
          points,
          baseLinePoints: isRange ? baseLinePoints : null,
          connectNulls
        }));
      }
      return /* @__PURE__ */ React.createElement(Layer, {
        className: "recharts-radar-polygon"
      }, radar, dot ? this.renderDots(points) : null);
    }
  }, {
    key: "renderPolygonWithAnimation",
    value: function renderPolygonWithAnimation() {
      var _this2 = this;
      var _this$props3 = this.props, points = _this$props3.points, isAnimationActive = _this$props3.isAnimationActive, animationBegin = _this$props3.animationBegin, animationDuration = _this$props3.animationDuration, animationEasing = _this$props3.animationEasing, animationId = _this$props3.animationId;
      var prevPoints = this.state.prevPoints;
      return /* @__PURE__ */ React.createElement(Animate, {
        begin: animationBegin,
        duration: animationDuration,
        isActive: isAnimationActive,
        easing: animationEasing,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "radar-".concat(animationId),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(_ref) {
        var t = _ref.t;
        var prevPointsDiffFactor = prevPoints && prevPoints.length / points.length;
        var stepData = points.map(function(entry, index) {
          var prev = prevPoints && prevPoints[Math.floor(index * prevPointsDiffFactor)];
          if (prev) {
            var _interpolatorX = interpolateNumber(prev.x, entry.x);
            var _interpolatorY = interpolateNumber(prev.y, entry.y);
            return _objectSpread(_objectSpread({}, entry), {}, {
              x: _interpolatorX(t),
              y: _interpolatorY(t)
            });
          }
          var interpolatorX = interpolateNumber(entry.cx, entry.x);
          var interpolatorY = interpolateNumber(entry.cy, entry.y);
          return _objectSpread(_objectSpread({}, entry), {}, {
            x: interpolatorX(t),
            y: interpolatorY(t)
          });
        });
        return _this2.renderPolygonStatically(stepData);
      });
    }
  }, {
    key: "renderPolygon",
    value: function renderPolygon() {
      var _this$props4 = this.props, points = _this$props4.points, isAnimationActive = _this$props4.isAnimationActive, isRange = _this$props4.isRange;
      var prevPoints = this.state.prevPoints;
      if (isAnimationActive && points && points.length && !isRange && (!prevPoints || !isEqual(prevPoints, points))) {
        return this.renderPolygonWithAnimation();
      }
      return this.renderPolygonStatically(points);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props, hide = _this$props5.hide, className = _this$props5.className, points = _this$props5.points, isAnimationActive = _this$props5.isAnimationActive;
      if (hide || !points || !points.length) {
        return null;
      }
      var isAnimationFinished = this.state.isAnimationFinished;
      var layerClass = clsx("recharts-radar", className);
      return /* @__PURE__ */ React.createElement(Layer, {
        className: layerClass
      }, this.renderPolygon(), (!isAnimationActive || isAnimationFinished) && LabelList.renderCallByParent(this.props, points));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.animationId !== prevState.prevAnimationId) {
        return {
          prevAnimationId: nextProps.animationId,
          curPoints: nextProps.points,
          prevPoints: prevState.curPoints
        };
      }
      if (nextProps.points !== prevState.curPoints) {
        return {
          curPoints: nextProps.points
        };
      }
      return null;
    }
  }, {
    key: "renderDotItem",
    value: function renderDotItem(option, props) {
      var dotItem;
      if (/* @__PURE__ */ React.isValidElement(option)) {
        dotItem = /* @__PURE__ */ React.cloneElement(option, props);
      } else if (isFunction(option)) {
        dotItem = option(props);
      } else {
        var key = props.key, dotProps = _objectWithoutProperties(props, _excluded);
        dotItem = /* @__PURE__ */ React.createElement(Dot, _extends({}, dotProps, {
          key,
          className: clsx("recharts-radar-dot", typeof option !== "boolean" ? option.className : "")
        }));
      }
      return dotItem;
    }
  }]);
}(reactExports.PureComponent);
_defineProperty(Radar, "displayName", "Radar");
_defineProperty(Radar, "defaultProps", {
  angleAxisId: 0,
  radiusAxisId: 0,
  hide: false,
  activeDot: true,
  dot: false,
  legendType: "rect",
  isAnimationActive: !Global.isSsr,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
});
_defineProperty(Radar, "getComposedData", function(_ref2) {
  var radiusAxis = _ref2.radiusAxis, angleAxis = _ref2.angleAxis, displayedData = _ref2.displayedData, dataKey = _ref2.dataKey, bandSize = _ref2.bandSize;
  var cx = angleAxis.cx, cy = angleAxis.cy;
  var isRange = false;
  var points = [];
  var angleBandSize = angleAxis.type !== "number" ? bandSize !== null && bandSize !== void 0 ? bandSize : 0 : 0;
  displayedData.forEach(function(entry, i) {
    var name = getValueByDataKey(entry, angleAxis.dataKey, i);
    var value = getValueByDataKey(entry, dataKey);
    var angle = angleAxis.scale(name) + angleBandSize;
    var pointValue = Array.isArray(value) ? last(value) : value;
    var radius = isNil(pointValue) ? void 0 : radiusAxis.scale(pointValue);
    if (Array.isArray(value) && value.length >= 2) {
      isRange = true;
    }
    points.push(_objectSpread(_objectSpread({}, polarToCartesian(cx, cy, radius, angle)), {}, {
      name,
      value,
      cx,
      cy,
      radius,
      angle,
      payload: entry
    }));
  });
  var baseLinePoints = [];
  if (isRange) {
    points.forEach(function(point) {
      if (Array.isArray(point.value)) {
        var baseValue = first$1(point.value);
        var radius = isNil(baseValue) ? void 0 : radiusAxis.scale(baseValue);
        baseLinePoints.push(_objectSpread(_objectSpread({}, point), {}, {
          radius
        }, polarToCartesian(cx, cy, radius, point.angle)));
      } else {
        baseLinePoints.push(point);
      }
    });
  }
  return {
    points,
    isRange,
    baseLinePoints
  };
});
var RadarChart = generateCategoricalChart({
  chartName: "RadarChart",
  GraphicalChild: Radar,
  axisComponents: [{
    axisType: "angleAxis",
    AxisComp: PolarAngleAxis
  }, {
    axisType: "radiusAxis",
    AxisComp: PolarRadiusAxis
  }],
  formatAxisMap,
  defaultProps: {
    layout: "centric",
    startAngle: 90,
    endAngle: -270,
    cx: "50%",
    cy: "50%",
    innerRadius: 0,
    outerRadius: "80%"
  }
});
const distributionData = [
  { range: "90–100", staff: 2 },
  { range: "80–89", staff: 5 },
  { range: "70–79", staff: 6 },
  { range: "60–69", staff: 3 },
  { range: "<60", staff: 1 }
];
const kpiRadarData = [
  { metric: "Task Completion", score: 82 },
  { metric: "Lead Conversion", score: 71 },
  { metric: "Attendance", score: 92 },
  { metric: "Target Achievement", score: 85 },
  { metric: "Customer Satisfaction", score: 78 }
];
const branchComparisonData = mockBranchPerformance.map((b) => ({
  name: b.branchName.split(" ")[0],
  score: b.score,
  tasks: b.taskCompletion,
  leads: Math.round(b.leadsConverted / 200 * 100),
  attendance: [95, 90, 88, 82, 91][mockBranchPerformance.indexOf(b)] ?? 88,
  target: Math.round(b.revenue / b.targetRevenue * 100)
}));
const trendMonths = [
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
  "Jan",
  "Feb",
  "Mar",
  "Apr"
];
const trendData = trendMonths.map((m, i) => ({
  month: m,
  overall: 78 + Math.round(Math.sin(i / 3) * 3 + i * 0.3),
  sales: 76 + Math.round(Math.sin(i / 2.5) * 4 + i * 0.2),
  finance: 80 + Math.round(Math.sin(i / 4) * 2 + i * 0.25),
  operations: 75 + Math.round(Math.cos(i / 3) * 3 + i * 0.3)
}));
const momData = trendMonths.map((m, i) => ({
  month: m,
  productivity: 74 + i * 0.5 + Math.round(Math.sin(i / 2) * 2)
}));
const DEPARTMENTS = [
  "All Departments",
  "Sales",
  "Finance",
  "Operations",
  "HR",
  "Marketing",
  "IT"
];
const BRANCHES_LIST = [
  "All Branches",
  "Mumbai Central",
  "Delhi NCR",
  "Bengaluru East",
  "Hyderabad West",
  "Chennai South",
  "Kolkata North"
];
const PERIOD_OPTIONS = [
  "This Week",
  "This Month",
  "This Quarter",
  "This Year"
];
const fullLeaderboard = mockLeaderboard.map((e, i) => {
  const dept = [
    "Sales",
    "Finance",
    "Sales",
    "Marketing",
    "HR",
    "Finance",
    "HR",
    "Sales",
    "Sales",
    "Operations"
  ][i] ?? "Operations";
  return {
    ...e,
    department: dept,
    tasks: [91, 90, 88, 85, 88, 78, 74, 91, 88, 68][i] ?? 80,
    leads: [78, 74, 65, 72, 76, 70, 62, 82, 76, 58][i] ?? 70,
    attendance: [98, 97, 96, 95, 95, 93, 91, 95, 90, 82][i] ?? 90,
    target: [94, 87, 92, 88, 86, 80, 76, 94, 86, 70][i] ?? 82
  };
});
function PodiumCard({
  position,
  name,
  score,
  department,
  isTop
}) {
  const configs = {
    1: {
      bg: "bg-amber-50 dark:bg-amber-900/10",
      border: "border-amber-200 dark:border-amber-800/40",
      icon: Trophy,
      iconColor: "text-amber-600",
      badge: "bg-amber-100 text-amber-700"
    },
    2: {
      bg: "bg-muted/30",
      border: "border-border",
      icon: Medal,
      iconColor: "text-muted-foreground",
      badge: "bg-muted text-muted-foreground"
    },
    3: {
      bg: "bg-orange-50 dark:bg-orange-900/10",
      border: "border-orange-200 dark:border-orange-800/40",
      icon: Award,
      iconColor: "text-orange-600",
      badge: "bg-orange-100 text-orange-700"
    }
  };
  const c = configs[position];
  const Icon = c.icon;
  const initials = name.split(" ").map((n) => n[0]).join("").slice(0, 2);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: isTop ? -8 : 8 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: (position - 1) * 0.1 },
      className: `rounded-2xl border shadow-card p-4 text-center flex flex-col items-center gap-2 ${c.bg} ${c.border} ${isTop ? "scale-105" : ""}`,
      "data-ocid": `performance.podium.${position}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `w-10 h-10 rounded-xl flex items-center justify-center ${c.badge}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `w-5 h-5 ${c.iconColor}` })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-sm ${c.badge}`,
            children: initials
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-display font-bold text-foreground", children: name.split(" ")[0] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: department })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-xl font-display font-black ${c.iconColor}`, children: score }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "span",
          {
            className: `text-[10px] font-semibold px-2 py-0.5 rounded-lg ${c.badge}`,
            children: [
              "#",
              position
            ]
          }
        )
      ]
    }
  );
}
function LowPerformerCard({
  name,
  score,
  improvement,
  index
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, x: 10 },
      animate: { opacity: 1, x: 0 },
      transition: { delay: index * 0.08 },
      className: "bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800/40 rounded-2xl p-3 flex items-center gap-3",
      "data-ocid": `performance.low_performer.${index + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-display font-bold text-red-600", children: name.split(" ").map((n) => n[0]).join("").slice(0, 2) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground truncate", children: name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-red-600 font-medium", children: [
            "Score: ",
            score
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-[10px] shrink-0", children: improvement })
      ]
    }
  );
}
function PerformancePage() {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  const [period, setPeriod] = reactExports.useState("This Month");
  const [search, setSearch] = reactExports.useState("");
  const [deptFilter, setDeptFilter] = reactExports.useState("All Departments");
  const [branchFilter, setBranchFilter] = reactExports.useState("All Branches");
  const sorted = [...mockPerformanceMetrics].sort((a, b) => a.rank - b.rank);
  const top3 = sorted.slice(0, 3);
  const bottom3 = sorted.slice(-3).reverse();
  const avgScore = Math.round(
    mockPerformanceMetrics.reduce((s, m) => s + m.productivityScore, 0) / mockPerformanceMetrics.length
  );
  const topScore = ((_a = sorted[0]) == null ? void 0 : _a.productivityScore) ?? 0;
  const lowestScore = ((_b = sorted[sorted.length - 1]) == null ? void 0 : _b.productivityScore) ?? 0;
  const filteredLeaderboard = fullLeaderboard.filter((e) => {
    const matchSearch = search === "" || e.name.toLowerCase().includes(search.toLowerCase());
    const matchDept = deptFilter === "All Departments" || e.department === deptFilter;
    const matchBranch = branchFilter === "All Branches" || e.branch === branchFilter;
    return matchSearch && matchDept && matchBranch;
  });
  function handleExportCSV() {
    const rows = filteredLeaderboard.map((e) => ({
      Rank: e.position,
      Name: e.name,
      Department: e.department,
      Branch: e.branch,
      Score: e.score,
      "Tasks %": e.tasks,
      "Leads %": e.leads,
      "Attendance %": e.attendance,
      "Target %": e.target,
      Period: period
    }));
    exportToCSV(rows, "performance_leaderboard");
    ue.success("Performance data exported to CSV");
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: "Performance Analytics",
        subtitle: "Staff and branch productivity, leaderboard, and trend analysis",
        breadcrumbs: [{ label: "Home" }, { label: "Performance" }],
        actions: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex rounded-xl overflow-hidden border border-border", children: ["This Month", "This Quarter", "This Year"].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setPeriod(p),
              "data-ocid": `performance.period_toggle.${p.toLowerCase().replace(/\s+/g, "_")}`,
              className: `px-3 py-1.5 text-xs font-semibold transition-smooth ${period === p ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted/60"}`,
              children: p
            },
            p
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "outline",
              size: "sm",
              onClick: handleExportCSV,
              className: "rounded-xl gap-1.5",
              "data-ocid": "performance.export_csv_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-3.5 h-3.5" }),
                "Export CSV"
              ]
            }
          )
        ] }),
        "data-ocid": "performance.header"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6", children: [
      {
        title: "Avg Performance",
        value: `${avgScore}`,
        icon: Zap,
        iconColor: "text-primary",
        change: 3
      },
      {
        title: "Top Performer",
        value: `${topScore}`,
        icon: Trophy,
        iconColor: "text-amber-600",
        change: 2
      },
      {
        title: "Lowest Score",
        value: `${lowestScore}`,
        icon: TrendingDown,
        iconColor: "text-red-500",
        change: -1
      },
      {
        title: "Team Target",
        value: "82%",
        icon: Target,
        iconColor: "text-green-600",
        change: 5
      }
    ].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: i * 0.07 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          StatCard,
          {
            title: s.title,
            value: s.value,
            change: s.change,
            icon: s.icon,
            iconColor: s.iconColor,
            "data-ocid": `performance.stat.${i + 1}`
          }
        )
      },
      s.title
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "overview", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        TabsList,
        {
          className: "mb-4 overflow-x-auto flex-wrap",
          "data-ocid": "performance.tabs",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "overview", "data-ocid": "performance.tab.overview", children: "Overview" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              TabsTrigger,
              {
                value: "leaderboard",
                "data-ocid": "performance.tab.leaderboard",
                children: "Leaderboard"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "branches", "data-ocid": "performance.tab.branches", children: "Branch Comparison" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "trends", "data-ocid": "performance.tab.trends", children: "Trends" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "overview", className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ChartCard,
            {
              title: "Performance Distribution",
              subtitle: "Staff count by score range",
              "data-ocid": "performance.distribution_chart",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 220, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                BarChart,
                {
                  data: distributionData,
                  margin: { top: 4, right: 8, left: 0, bottom: 0 },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      CartesianGrid,
                      {
                        strokeDasharray: "3 3",
                        vertical: false,
                        stroke: "oklch(0.91 0.01 0)"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      XAxis,
                      {
                        dataKey: "range",
                        tick: { fontSize: 11 },
                        axisLine: false,
                        tickLine: false
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      YAxis,
                      {
                        tick: { fontSize: 11 },
                        axisLine: false,
                        tickLine: false
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, {}),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Bar,
                      {
                        dataKey: "staff",
                        name: "Staff Count",
                        radius: [6, 6, 0, 0],
                        maxBarSize: 36,
                        children: distributionData.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Cell,
                          {
                            fill: d.range === "90–100" ? "oklch(0.55 0.15 155)" : d.range === "80–89" ? "oklch(0.42 0.08 265)" : d.range === "70–79" ? "oklch(0.60 0.10 185)" : d.range === "60–69" ? "oklch(0.68 0.18 75)" : "oklch(0.63 0.24 17)"
                          },
                          `cell-${d.range}`
                        ))
                      }
                    )
                  ]
                }
              ) })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ChartCard,
            {
              title: "KPI Radar",
              subtitle: "5 key performance metrics — org average",
              "data-ocid": "performance.kpi_radar",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 220, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                RadarChart,
                {
                  data: kpiRadarData,
                  margin: { top: 4, right: 20, left: 20, bottom: 4 },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(PolarGrid, { stroke: "oklch(0.91 0.01 0)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(PolarAngleAxis, { dataKey: "metric", tick: { fontSize: 10 } }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Radar,
                      {
                        name: "Score",
                        dataKey: "score",
                        stroke: "oklch(0.42 0.08 265)",
                        fill: "oklch(0.42 0.08 265)",
                        fillOpacity: 0.2,
                        strokeWidth: 2
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { formatter: (v) => [`${v}%`] })
                  ]
                }
              ) })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "bg-card border border-border rounded-2xl shadow-card p-5",
            "data-ocid": "performance.podium_section",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "w-4 h-4 text-amber-600" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-display font-semibold text-foreground", children: "Top Performers" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3 max-w-sm mx-auto", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  PodiumCard,
                  {
                    position: 2,
                    name: ((_c = top3[1]) == null ? void 0 : _c.userName) ?? "—",
                    score: ((_d = top3[1]) == null ? void 0 : _d.productivityScore) ?? 0,
                    department: ((_e = top3[1]) == null ? void 0 : _e.branchName) ?? "—"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  PodiumCard,
                  {
                    position: 1,
                    name: ((_f = top3[0]) == null ? void 0 : _f.userName) ?? "—",
                    score: ((_g = top3[0]) == null ? void 0 : _g.productivityScore) ?? 0,
                    department: ((_h = top3[0]) == null ? void 0 : _h.branchName) ?? "—",
                    isTop: true
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  PodiumCard,
                  {
                    position: 3,
                    name: ((_i = top3[2]) == null ? void 0 : _i.userName) ?? "—",
                    score: ((_j = top3[2]) == null ? void 0 : _j.productivityScore) ?? 0,
                    department: ((_k = top3[2]) == null ? void 0 : _k.branchName) ?? "—"
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "bg-card border border-border rounded-2xl shadow-card p-5",
            "data-ocid": "performance.low_performers_section",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-4 h-4 text-red-500" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-display font-semibold text-foreground", children: "Needs Attention" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "— bottom 3 performers" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3", children: bottom3.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                LowPerformerCard,
                {
                  name: m.userName,
                  score: m.productivityScore,
                  improvement: ["Lead Training", "Attendance", "Task Mgmt"][i] ?? "Review",
                  index: i
                },
                m.userId
              )) })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "leaderboard", className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl shadow-card p-4 flex flex-wrap items-end gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 min-w-[180px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                placeholder: "Search staff…",
                value: search,
                onChange: (e) => setSearch(e.target.value),
                className: "pl-8 h-8 text-xs",
                "data-ocid": "performance.leaderboard_search"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: period,
              onValueChange: (v) => setPeriod(v),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SelectTrigger,
                  {
                    className: "h-8 text-xs w-36",
                    "aria-label": "Filter by period",
                    "data-ocid": "performance.leaderboard_period_select",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: PERIOD_OPTIONS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: p, children: p }, p)) })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: deptFilter, onValueChange: setDeptFilter, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SelectTrigger,
              {
                className: "h-8 text-xs w-44",
                "aria-label": "Filter by department",
                "data-ocid": "performance.leaderboard_dept_select",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: DEPARTMENTS.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: d, children: d }, d)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: branchFilter, onValueChange: setBranchFilter, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SelectTrigger,
              {
                className: "h-8 text-xs w-44",
                "aria-label": "Filter by branch",
                "data-ocid": "performance.leaderboard_branch_select",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: BRANCHES_LIST.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: b, children: b }, b)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground self-end pb-1 ml-auto", children: [
            filteredLeaderboard.length,
            " staff"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "bg-card border border-border rounded-2xl shadow-card overflow-hidden",
            "data-ocid": "performance.leaderboard_table",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm min-w-[700px]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-muted/30 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: [
                "Rank",
                "Staff",
                "Department",
                "Branch",
                "Score",
                "Tasks %",
                "Leads %",
                "Attend %",
                "Target %",
                "Trend"
              ].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "th",
                {
                  className: "px-3 py-2.5 text-left text-xs font-semibold text-muted-foreground",
                  children: h
                },
                h
              )) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border", children: filteredLeaderboard.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "td",
                {
                  colSpan: 10,
                  className: "px-4 py-8 text-center text-sm text-muted-foreground",
                  "data-ocid": "performance.leaderboard_table.empty_state",
                  children: "No staff match the current filters"
                }
              ) }) : filteredLeaderboard.map((e, i) => {
                const isGreen = e.score >= 85;
                const isRed = e.score < 75;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "tr",
                  {
                    className: "hover:bg-muted/20 transition-smooth",
                    "data-ocid": `performance.leaderboard_table.item.${i + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: `w-7 h-7 rounded-xl flex items-center justify-center text-xs font-bold ${e.position === 1 ? "bg-amber-100 text-amber-700" : e.position === 2 ? "bg-muted text-foreground" : e.position === 3 ? "bg-orange-100 text-orange-600" : "border border-border text-muted-foreground"}`,
                          children: e.position === 1 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "w-3.5 h-3.5" }) : e.position === 2 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Medal, { className: "w-3.5 h-3.5" }) : e.position === 3 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-3.5 h-3.5" }) : e.position
                        }
                      ) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground", children: e.name }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 text-xs text-muted-foreground", children: e.department }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5 text-xs text-muted-foreground", children: e.branch.split(" ")[0] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: `text-sm font-display font-bold ${isGreen ? "text-green-600" : isRed ? "text-red-500" : "text-amber-600"}`,
                          children: e.score
                        }
                      ) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3 py-2.5 text-xs text-foreground", children: [
                        e.tasks,
                        "%"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3 py-2.5 text-xs text-foreground", children: [
                        e.leads,
                        "%"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3 py-2.5 text-xs text-foreground", children: [
                        e.attendance,
                        "%"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3 py-2.5 text-xs text-foreground", children: [
                        e.target,
                        "%"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2.5", children: e.change > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-3.5 h-3.5 text-green-500" }) : e.change < 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingDown, { className: "w-3.5 h-3.5 text-red-500" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "w-3.5 h-3.5 text-muted-foreground" }) })
                    ]
                  },
                  e.userId
                );
              }) })
            ] }) })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "branches", className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ChartCard,
          {
            title: "Branch Performance Comparison",
            subtitle: "5 metrics across all branches",
            "data-ocid": "performance.branch_comparison_chart",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 280, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              BarChart,
              {
                data: branchComparisonData,
                margin: { top: 4, right: 8, left: 0, bottom: 0 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    CartesianGrid,
                    {
                      strokeDasharray: "3 3",
                      vertical: false,
                      stroke: "oklch(0.91 0.01 0)"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    XAxis,
                    {
                      dataKey: "name",
                      tick: { fontSize: 11 },
                      axisLine: false,
                      tickLine: false
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    YAxis,
                    {
                      tick: { fontSize: 11 },
                      axisLine: false,
                      tickLine: false,
                      domain: [0, 100]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Bar,
                    {
                      dataKey: "score",
                      name: "Overall Score",
                      fill: "oklch(0.42 0.08 265)",
                      radius: [3, 3, 0, 0],
                      maxBarSize: 14
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Bar,
                    {
                      dataKey: "tasks",
                      name: "Task Completion",
                      fill: "oklch(0.60 0.10 185)",
                      radius: [3, 3, 0, 0],
                      maxBarSize: 14
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Bar,
                    {
                      dataKey: "leads",
                      name: "Lead Conversion",
                      fill: "oklch(0.68 0.18 75)",
                      radius: [3, 3, 0, 0],
                      maxBarSize: 14
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Bar,
                    {
                      dataKey: "attendance",
                      name: "Attendance",
                      fill: "oklch(0.55 0.15 155)",
                      radius: [3, 3, 0, 0],
                      maxBarSize: 14
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Bar,
                    {
                      dataKey: "target",
                      name: "Target %",
                      fill: "oklch(0.58 0.12 260)",
                      radius: [3, 3, 0, 0],
                      maxBarSize: 14
                    }
                  )
                ]
              }
            ) })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "bg-card border border-border rounded-2xl shadow-card overflow-hidden",
            "data-ocid": "performance.branch_comparison_table",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm min-w-[560px]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-muted/30 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: [
                "Branch",
                "Manager",
                "Avg Score",
                "Tasks %",
                "Leads %",
                "Rank",
                "Change"
              ].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "th",
                {
                  className: "px-4 py-2.5 text-left text-xs font-semibold text-muted-foreground",
                  children: h
                },
                h
              )) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border", children: mockBranchPerformance.sort((a, b) => a.rank - b.rank).map((b, i) => {
                const managers = [
                  "Sunita Reddy",
                  "Amit Patel",
                  "Pooja Verma",
                  "Nisha Thomas",
                  "Suresh Babu"
                ];
                const changes = [2, 0, -1, 1, 0];
                const ch = changes[i] ?? 0;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "tr",
                  {
                    className: "hover:bg-muted/20 transition-smooth",
                    "data-ocid": `performance.branch_comparison_table.item.${i + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 text-xs font-semibold text-foreground", children: b.branchName }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 text-xs text-muted-foreground", children: managers[i] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: `text-sm font-display font-bold ${b.score >= 90 ? "text-green-600" : b.score >= 85 ? "text-primary" : "text-amber-600"}`,
                          children: b.score
                        }
                      ) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-2.5 text-xs text-foreground", children: [
                        b.taskCompletion,
                        "%"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-2.5 text-xs text-foreground", children: [
                        Math.round(b.leadsConverted / 200 * 100),
                        "%"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "w-6 h-6 rounded-lg bg-muted flex items-center justify-center text-xs font-bold text-foreground", children: [
                        "#",
                        b.rank
                      ] }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "span",
                        {
                          className: `flex items-center gap-0.5 text-xs font-semibold ${ch > 0 ? "text-green-600" : ch < 0 ? "text-red-500" : "text-muted-foreground"}`,
                          children: [
                            ch > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-3.5 h-3.5" }) : ch < 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingDown, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "w-3.5 h-3.5" }),
                            ch !== 0 && `${Math.abs(ch)}`
                          ]
                        }
                      ) })
                    ]
                  },
                  b.branchId
                );
              }) })
            ] }) })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "trends", className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ChartCard,
          {
            title: "12-Month Performance Trend",
            subtitle: "Overall score + department breakdown",
            periods: ["12M", "6M", "3M"],
            "data-ocid": "performance.trend_chart",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 260, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              LineChart,
              {
                data: trendData,
                margin: { top: 4, right: 8, left: 0, bottom: 0 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    CartesianGrid,
                    {
                      strokeDasharray: "3 3",
                      vertical: false,
                      stroke: "oklch(0.91 0.01 0)"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    XAxis,
                    {
                      dataKey: "month",
                      tick: { fontSize: 11 },
                      axisLine: false,
                      tickLine: false
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    YAxis,
                    {
                      tick: { fontSize: 11 },
                      axisLine: false,
                      tickLine: false,
                      domain: [65, 95]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Line,
                    {
                      type: "monotone",
                      dataKey: "overall",
                      name: "Overall",
                      stroke: "oklch(0.42 0.08 265)",
                      strokeWidth: 2.5,
                      dot: { r: 3 }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Line,
                    {
                      type: "monotone",
                      dataKey: "sales",
                      name: "Sales",
                      stroke: "oklch(0.68 0.18 75)",
                      strokeWidth: 1.5,
                      dot: false,
                      strokeDasharray: "4 3"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Line,
                    {
                      type: "monotone",
                      dataKey: "finance",
                      name: "Finance",
                      stroke: "oklch(0.55 0.15 155)",
                      strokeWidth: 1.5,
                      dot: false,
                      strokeDasharray: "4 3"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Line,
                    {
                      type: "monotone",
                      dataKey: "operations",
                      name: "Operations",
                      stroke: "oklch(0.60 0.10 185)",
                      strokeWidth: 1.5,
                      dot: false,
                      strokeDasharray: "4 3"
                    }
                  )
                ]
              }
            ) })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ChartCard,
            {
              title: "Productivity Score Trend",
              subtitle: "Month-over-month org average",
              "data-ocid": "performance.productivity_trend",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 200, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                AreaChart,
                {
                  data: momData,
                  margin: { top: 4, right: 8, left: 0, bottom: 0 },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "prodGrad", x1: "0", y1: "0", x2: "0", y2: "1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "stop",
                        {
                          offset: "5%",
                          stopColor: "oklch(0.42 0.08 265)",
                          stopOpacity: 0.2
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "stop",
                        {
                          offset: "95%",
                          stopColor: "oklch(0.42 0.08 265)",
                          stopOpacity: 0
                        }
                      )
                    ] }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      CartesianGrid,
                      {
                        strokeDasharray: "3 3",
                        vertical: false,
                        stroke: "oklch(0.91 0.01 0)"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      XAxis,
                      {
                        dataKey: "month",
                        tick: { fontSize: 11 },
                        axisLine: false,
                        tickLine: false
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      YAxis,
                      {
                        tick: { fontSize: 11 },
                        axisLine: false,
                        tickLine: false,
                        domain: [70, 82]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, {}),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Area,
                      {
                        type: "monotone",
                        dataKey: "productivity",
                        name: "Productivity",
                        stroke: "oklch(0.42 0.08 265)",
                        strokeWidth: 2,
                        fill: "url(#prodGrad)",
                        dot: { r: 3 }
                      }
                    )
                  ]
                }
              ) })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-card border border-border rounded-2xl shadow-card p-5 space-y-3",
              "data-ocid": "performance.mom_summary",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-display font-semibold text-foreground", children: "Month-over-Month Summary" }),
                [
                  { metric: "Overall Score", prev: 78, curr: 80, unit: "" },
                  { metric: "Task Completion", prev: 80, curr: 83, unit: "%" },
                  { metric: "Lead Conversion", prev: 69, curr: 71, unit: "%" },
                  { metric: "Attendance Rate", prev: 91, curr: 92, unit: "%" },
                  { metric: "Target Achievement", prev: 84, curr: 87, unit: "%" }
                ].map((m, i) => {
                  const diff = m.curr - m.prev;
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "flex items-center gap-3",
                      "data-ocid": `performance.mom_summary.item.${i + 1}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground flex-1", children: m.metric }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-mono text-foreground", children: [
                          m.prev,
                          m.unit
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-1 rounded-full bg-muted overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "h-full bg-primary rounded-full",
                            style: { width: `${m.curr / 100 * 100}%` }
                          }
                        ) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-mono font-bold text-foreground", children: [
                          m.curr,
                          m.unit
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: `text-xs font-semibold w-10 text-right ${diff > 0 ? "text-green-600" : diff < 0 ? "text-red-500" : "text-muted-foreground"}`,
                            children: diff > 0 ? `+${diff}` : diff
                          }
                        )
                      ]
                    },
                    m.metric
                  );
                })
              ]
            }
          )
        ] })
      ] })
    ] })
  ] });
}
export {
  PerformancePage as default
};
