import { g as getDefaultExportFromCjs, R as React, c as clsx, r as reactExports, b as useAuth, u as useNavigate, d as mockUsers, D as DollarSign, U as Users, T as Target, S as SquareCheckBig, j as jsxRuntimeExports, B as Button, m as motion, C as Clock } from "./index-CgV9Taym.js";
import { P as Progress } from "./progress-BS3oRTu6.js";
import { C as ChartCard } from "./ChartCard-DfiZ9ngf.js";
import { P as PageHeader } from "./PageHeader-CHVHFP_Q.js";
import { P as PriorityBadge } from "./PriorityBadge-C2Id1hb0.js";
import { S as StatCard } from "./StatCard-DkWGxI9F.js";
import { S as StatusBadge } from "./StatusBadge-BopRiVPx.js";
import { a as mockFinanceRecords } from "./mockFinance-Cb7hJvCp.js";
import { m as mockLeads } from "./mockLeads-Dc7n7Nj3.js";
import { m as mockTasks } from "./mockTasks-ZIylUAUd.js";
import { e as exportToCSV } from "./csvExport-CI-f4_Rc.js";
import { P as Plus } from "./plus-C9sMXHJA.js";
import { C as CalendarDays } from "./calendar-days-C9hU70Su.js";
import { D as Download } from "./download-CT_NJYb_.js";
import { e as eq_1, _ as _baseAssignValue, k as keys_1, i as isObject_1, b as _isPrototype, c as isArrayLike_1, d as _arrayLikeKeys, f as _root, g as _getSymbols, s as stubArray_1, h as _arrayPush, j as _getPrototype, l as _baseGetAllKeys, m as _Uint8Array, n as _Symbol, o as isObjectLike_1, p as _getTag, q as _nodeUtilExports, r as _baseUnary, t as _Stack, u as isBufferExports, v as isArray_1, w as _getAllKeys, x as _baseGet, y as _baseSlice, z as _castPath, A as _toKey, D as last_1, E as isPlainObject_1, F as _baseFlatten, G as _setToString, H as _overRest, I as _arrayMap, S as Shape, J as getPropsFromShapeOption, K as Layer, M as adaptEventsOfChild, N as Animate, O as interpolateNumber, P as isEqual, Q as LabelList, U as isFunction, V as Global, W as filterProps, Z as findAllByType, a as Cell, $ as isNumber, a0 as isString, a1 as getValueByDataKey, a2 as generateCategoricalChart, R as ResponsiveContainer, T as Tooltip, C as CartesianGrid, X as XAxis, Y as YAxis, L as Legend } from "./generateCategoricalChart-BdurIGga.js";
import { A as AreaChart, a as Area } from "./AreaChart-BvtTBl9w.js";
import "./card-BIrGk5lN.js";
import "./minus-D6KT2NO-.js";
import "./triangle-alert-t2GMGPuS.js";
import "./zap-D7uWetWS.js";
function arrayEach$1(array, iteratee) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}
var _arrayEach = arrayEach$1;
var baseAssignValue$1 = _baseAssignValue, eq = eq_1;
var objectProto$3 = Object.prototype;
var hasOwnProperty$3 = objectProto$3.hasOwnProperty;
function assignValue$2(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$3.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
    baseAssignValue$1(object, key, value);
  }
}
var _assignValue = assignValue$2;
var assignValue$1 = _assignValue, baseAssignValue = _baseAssignValue;
function copyObject$5(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index = -1, length = props.length;
  while (++index < length) {
    var key = props[index];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
    if (newValue === void 0) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue$1(object, key, newValue);
    }
  }
  return object;
}
var _copyObject = copyObject$5;
var copyObject$4 = _copyObject, keys$1 = keys_1;
function baseAssign$1(object, source) {
  return object && copyObject$4(source, keys$1(source), object);
}
var _baseAssign = baseAssign$1;
function nativeKeysIn$1(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}
var _nativeKeysIn = nativeKeysIn$1;
var isObject$2 = isObject_1, isPrototype$1 = _isPrototype, nativeKeysIn = _nativeKeysIn;
var objectProto$2 = Object.prototype;
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
function baseKeysIn$1(object) {
  if (!isObject$2(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype$1(object), result = [];
  for (var key in object) {
    if (!(key == "constructor" && (isProto || !hasOwnProperty$2.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}
var _baseKeysIn = baseKeysIn$1;
var arrayLikeKeys = _arrayLikeKeys, baseKeysIn = _baseKeysIn, isArrayLike = isArrayLike_1;
function keysIn$3(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}
var keysIn_1 = keysIn$3;
var copyObject$3 = _copyObject, keysIn$2 = keysIn_1;
function baseAssignIn$1(object, source) {
  return object && copyObject$3(source, keysIn$2(source), object);
}
var _baseAssignIn = baseAssignIn$1;
var _cloneBuffer = { exports: {} };
_cloneBuffer.exports;
(function(module, exports$1) {
  var root = _root;
  var freeExports = exports$1 && !exports$1.nodeType && exports$1;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var Buffer = moduleExports ? root.Buffer : void 0, allocUnsafe = Buffer ? Buffer.allocUnsafe : void 0;
  function cloneBuffer2(buffer, isDeep) {
    if (isDeep) {
      return buffer.slice();
    }
    var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
    buffer.copy(result);
    return result;
  }
  module.exports = cloneBuffer2;
})(_cloneBuffer, _cloneBuffer.exports);
var _cloneBufferExports = _cloneBuffer.exports;
function copyArray$1(source, array) {
  var index = -1, length = source.length;
  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}
var _copyArray = copyArray$1;
var copyObject$2 = _copyObject, getSymbols$1 = _getSymbols;
function copySymbols$1(source, object) {
  return copyObject$2(source, getSymbols$1(source), object);
}
var _copySymbols = copySymbols$1;
var arrayPush = _arrayPush, getPrototype$1 = _getPrototype, getSymbols = _getSymbols, stubArray = stubArray_1;
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbolsIn$2 = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype$1(object);
  }
  return result;
};
var _getSymbolsIn = getSymbolsIn$2;
var copyObject$1 = _copyObject, getSymbolsIn$1 = _getSymbolsIn;
function copySymbolsIn$1(source, object) {
  return copyObject$1(source, getSymbolsIn$1(source), object);
}
var _copySymbolsIn = copySymbolsIn$1;
var baseGetAllKeys = _baseGetAllKeys, getSymbolsIn = _getSymbolsIn, keysIn$1 = keysIn_1;
function getAllKeysIn$2(object) {
  return baseGetAllKeys(object, keysIn$1, getSymbolsIn);
}
var _getAllKeysIn = getAllKeysIn$2;
var objectProto$1 = Object.prototype;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
function initCloneArray$1(array) {
  var length = array.length, result = new array.constructor(length);
  if (length && typeof array[0] == "string" && hasOwnProperty$1.call(array, "index")) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}
var _initCloneArray = initCloneArray$1;
var Uint8Array = _Uint8Array;
function cloneArrayBuffer$3(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}
var _cloneArrayBuffer = cloneArrayBuffer$3;
var cloneArrayBuffer$2 = _cloneArrayBuffer;
function cloneDataView$1(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer$2(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
var _cloneDataView = cloneDataView$1;
var reFlags = /\w*$/;
function cloneRegExp$1(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}
var _cloneRegExp = cloneRegExp$1;
var Symbol$1 = _Symbol;
var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
function cloneSymbol$1(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}
var _cloneSymbol = cloneSymbol$1;
var cloneArrayBuffer$1 = _cloneArrayBuffer;
function cloneTypedArray$1(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer$1(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
var _cloneTypedArray = cloneTypedArray$1;
var cloneArrayBuffer = _cloneArrayBuffer, cloneDataView = _cloneDataView, cloneRegExp = _cloneRegExp, cloneSymbol = _cloneSymbol, cloneTypedArray = _cloneTypedArray;
var boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", mapTag$2 = "[object Map]", numberTag$1 = "[object Number]", regexpTag$1 = "[object RegExp]", setTag$2 = "[object Set]", stringTag$1 = "[object String]", symbolTag$1 = "[object Symbol]";
var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]", float32Tag$1 = "[object Float32Array]", float64Tag$1 = "[object Float64Array]", int8Tag$1 = "[object Int8Array]", int16Tag$1 = "[object Int16Array]", int32Tag$1 = "[object Int32Array]", uint8Tag$1 = "[object Uint8Array]", uint8ClampedTag$1 = "[object Uint8ClampedArray]", uint16Tag$1 = "[object Uint16Array]", uint32Tag$1 = "[object Uint32Array]";
function initCloneByTag$1(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag$1:
      return cloneArrayBuffer(object);
    case boolTag$1:
    case dateTag$1:
      return new Ctor(+object);
    case dataViewTag$1:
      return cloneDataView(object, isDeep);
    case float32Tag$1:
    case float64Tag$1:
    case int8Tag$1:
    case int16Tag$1:
    case int32Tag$1:
    case uint8Tag$1:
    case uint8ClampedTag$1:
    case uint16Tag$1:
    case uint32Tag$1:
      return cloneTypedArray(object, isDeep);
    case mapTag$2:
      return new Ctor();
    case numberTag$1:
    case stringTag$1:
      return new Ctor(object);
    case regexpTag$1:
      return cloneRegExp(object);
    case setTag$2:
      return new Ctor();
    case symbolTag$1:
      return cloneSymbol(object);
  }
}
var _initCloneByTag = initCloneByTag$1;
var isObject$1 = isObject_1;
var objectCreate = Object.create;
var baseCreate$1 = /* @__PURE__ */ function() {
  function object() {
  }
  return function(proto) {
    if (!isObject$1(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object();
    object.prototype = void 0;
    return result;
  };
}();
var _baseCreate = baseCreate$1;
var baseCreate = _baseCreate, getPrototype = _getPrototype, isPrototype = _isPrototype;
function initCloneObject$1(object) {
  return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
}
var _initCloneObject = initCloneObject$1;
var getTag$2 = _getTag, isObjectLike$1 = isObjectLike_1;
var mapTag$1 = "[object Map]";
function baseIsMap$1(value) {
  return isObjectLike$1(value) && getTag$2(value) == mapTag$1;
}
var _baseIsMap = baseIsMap$1;
var baseIsMap = _baseIsMap, baseUnary$1 = _baseUnary, nodeUtil$1 = _nodeUtilExports;
var nodeIsMap = nodeUtil$1 && nodeUtil$1.isMap;
var isMap$1 = nodeIsMap ? baseUnary$1(nodeIsMap) : baseIsMap;
var isMap_1 = isMap$1;
var getTag$1 = _getTag, isObjectLike = isObjectLike_1;
var setTag$1 = "[object Set]";
function baseIsSet$1(value) {
  return isObjectLike(value) && getTag$1(value) == setTag$1;
}
var _baseIsSet = baseIsSet$1;
var baseIsSet = _baseIsSet, baseUnary = _baseUnary, nodeUtil = _nodeUtilExports;
var nodeIsSet = nodeUtil && nodeUtil.isSet;
var isSet$1 = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
var isSet_1 = isSet$1;
var Stack = _Stack, arrayEach = _arrayEach, assignValue = _assignValue, baseAssign = _baseAssign, baseAssignIn = _baseAssignIn, cloneBuffer = _cloneBufferExports, copyArray = _copyArray, copySymbols = _copySymbols, copySymbolsIn = _copySymbolsIn, getAllKeys = _getAllKeys, getAllKeysIn$1 = _getAllKeysIn, getTag = _getTag, initCloneArray = _initCloneArray, initCloneByTag = _initCloneByTag, initCloneObject = _initCloneObject, isArray = isArray_1, isBuffer = isBufferExports, isMap = isMap_1, isObject = isObject_1, isSet = isSet_1, keys = keys_1, keysIn = keysIn_1;
var CLONE_DEEP_FLAG$1 = 1, CLONE_FLAT_FLAG$1 = 2, CLONE_SYMBOLS_FLAG$1 = 4;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", objectTag = "[object Object]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", weakMapTag = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
function baseClone$1(value, bitmask, customizer, key, object, stack) {
  var result, isDeep = bitmask & CLONE_DEEP_FLAG$1, isFlat = bitmask & CLONE_FLAT_FLAG$1, isFull = bitmask & CLONE_SYMBOLS_FLAG$1;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== void 0) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || isFunc && !object) {
      result = isFlat || isFunc ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  stack || (stack = new Stack());
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);
  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone$1(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function(subValue, key2) {
      result.set(key2, baseClone$1(subValue, bitmask, customizer, key2, value, stack));
    });
  }
  var keysFunc = isFull ? isFlat ? getAllKeysIn$1 : getAllKeys : isFlat ? keysIn : keys;
  var props = isArr ? void 0 : keysFunc(value);
  arrayEach(props || value, function(subValue, key2) {
    if (props) {
      key2 = subValue;
      subValue = value[key2];
    }
    assignValue(result, key2, baseClone$1(subValue, bitmask, customizer, key2, value, stack));
  });
  return result;
}
var _baseClone = baseClone$1;
var baseGet = _baseGet, baseSlice = _baseSlice;
function parent$1(object, path) {
  return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
}
var _parent = parent$1;
var castPath$1 = _castPath, last = last_1, parent = _parent, toKey = _toKey;
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function baseUnset$1(object, path) {
  path = castPath$1(path, object);
  var index = -1, length = path.length;
  if (!length) {
    return true;
  }
  var isRootPrimitive = object == null || typeof object !== "object" && typeof object !== "function";
  while (++index < length) {
    var key = path[index];
    if (typeof key !== "string") {
      continue;
    }
    if (key === "__proto__" && !hasOwnProperty.call(object, "__proto__")) {
      return false;
    }
    if (key === "constructor" && index + 1 < length && typeof path[index + 1] === "string" && path[index + 1] === "prototype") {
      if (isRootPrimitive && index === 0) {
        continue;
      }
      return false;
    }
  }
  var obj = parent(object, path);
  return obj == null || delete obj[toKey(last(path))];
}
var _baseUnset = baseUnset$1;
var isPlainObject = isPlainObject_1;
function customOmitClone$1(value) {
  return isPlainObject(value) ? void 0 : value;
}
var _customOmitClone = customOmitClone$1;
var baseFlatten = _baseFlatten;
function flatten$1(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}
var flatten_1 = flatten$1;
var flatten = flatten_1, overRest = _overRest, setToString = _setToString;
function flatRest$1(func) {
  return setToString(overRest(func, void 0, flatten), func + "");
}
var _flatRest = flatRest$1;
var arrayMap = _arrayMap, baseClone = _baseClone, baseUnset = _baseUnset, castPath = _castPath, copyObject = _copyObject, customOmitClone = _customOmitClone, flatRest = _flatRest, getAllKeysIn = _getAllKeysIn;
var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
var omit = flatRest(function(object, paths) {
  var result = {};
  if (object == null) {
    return result;
  }
  var isDeep = false;
  paths = arrayMap(paths, function(path) {
    path = castPath(path, object);
    isDeep || (isDeep = path.length > 1);
    return path;
  });
  copyObject(object, getAllKeysIn(object), result);
  if (isDeep) {
    result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
  }
  var length = paths.length;
  while (length--) {
    baseUnset(result, paths[length]);
  }
  return result;
});
var omit_1 = omit;
const omit$1 = /* @__PURE__ */ getDefaultExportFromCjs(omit_1);
function _typeof$1(o) {
  "@babel/helpers - typeof";
  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$1(o);
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
function typeGuardTrapezoidProps(option, props) {
  var xValue = "".concat(props.x || option.x);
  var x = parseInt(xValue, 10);
  var yValue = "".concat(props.y || option.y);
  var y = parseInt(yValue, 10);
  var heightValue = "".concat((props === null || props === void 0 ? void 0 : props.height) || (option === null || option === void 0 ? void 0 : option.height));
  var height = parseInt(heightValue, 10);
  return _objectSpread$1(_objectSpread$1(_objectSpread$1({}, props), getPropsFromShapeOption(option)), {}, {
    height,
    x,
    y
  });
}
function FunnelTrapezoid(props) {
  return /* @__PURE__ */ React.createElement(Shape, _extends$1({
    shapeType: "trapezoid",
    propTransformer: typeGuardTrapezoidProps
  }, props));
}
var _Funnel;
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = false;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
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
var Funnel = /* @__PURE__ */ function(_PureComponent) {
  function Funnel2() {
    var _this;
    _classCallCheck(this, Funnel2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, Funnel2, [].concat(args));
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
    return _this;
  }
  _inherits(Funnel2, _PureComponent);
  return _createClass(Funnel2, [{
    key: "isActiveIndex",
    value: function isActiveIndex(i) {
      var activeIndex = this.props.activeIndex;
      if (Array.isArray(activeIndex)) {
        return activeIndex.indexOf(i) !== -1;
      }
      return i === activeIndex;
    }
  }, {
    key: "renderTrapezoidsStatically",
    value: function renderTrapezoidsStatically(trapezoids) {
      var _this2 = this;
      var _this$props = this.props, shape = _this$props.shape, activeShape = _this$props.activeShape;
      return trapezoids.map(function(entry, i) {
        var trapezoidOptions = _this2.isActiveIndex(i) ? activeShape : shape;
        var trapezoidProps = _objectSpread(_objectSpread({}, entry), {}, {
          isActive: _this2.isActiveIndex(i),
          stroke: entry.stroke
        });
        return /* @__PURE__ */ React.createElement(Layer, _extends({
          className: "recharts-funnel-trapezoid"
        }, adaptEventsOfChild(_this2.props, entry, i), {
          key: "trapezoid-".concat(entry === null || entry === void 0 ? void 0 : entry.x, "-").concat(entry === null || entry === void 0 ? void 0 : entry.y, "-").concat(entry === null || entry === void 0 ? void 0 : entry.name, "-").concat(entry === null || entry === void 0 ? void 0 : entry.value),
          role: "img"
        }), /* @__PURE__ */ React.createElement(FunnelTrapezoid, _extends({
          option: trapezoidOptions
        }, trapezoidProps)));
      });
    }
  }, {
    key: "renderTrapezoidsWithAnimation",
    value: function renderTrapezoidsWithAnimation() {
      var _this3 = this;
      var _this$props2 = this.props, trapezoids = _this$props2.trapezoids, isAnimationActive = _this$props2.isAnimationActive, animationBegin = _this$props2.animationBegin, animationDuration = _this$props2.animationDuration, animationEasing = _this$props2.animationEasing, animationId = _this$props2.animationId;
      var prevTrapezoids = this.state.prevTrapezoids;
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
        key: "funnel-".concat(animationId),
        onAnimationStart: this.handleAnimationStart,
        onAnimationEnd: this.handleAnimationEnd
      }, function(_ref) {
        var t = _ref.t;
        var stepData = trapezoids.map(function(entry, index) {
          var prev = prevTrapezoids && prevTrapezoids[index];
          if (prev) {
            var _interpolatorX = interpolateNumber(prev.x, entry.x);
            var _interpolatorY = interpolateNumber(prev.y, entry.y);
            var _interpolatorUpperWidth = interpolateNumber(prev.upperWidth, entry.upperWidth);
            var _interpolatorLowerWidth = interpolateNumber(prev.lowerWidth, entry.lowerWidth);
            var _interpolatorHeight = interpolateNumber(prev.height, entry.height);
            return _objectSpread(_objectSpread({}, entry), {}, {
              x: _interpolatorX(t),
              y: _interpolatorY(t),
              upperWidth: _interpolatorUpperWidth(t),
              lowerWidth: _interpolatorLowerWidth(t),
              height: _interpolatorHeight(t)
            });
          }
          var interpolatorX = interpolateNumber(entry.x + entry.upperWidth / 2, entry.x);
          var interpolatorY = interpolateNumber(entry.y + entry.height / 2, entry.y);
          var interpolatorUpperWidth = interpolateNumber(0, entry.upperWidth);
          var interpolatorLowerWidth = interpolateNumber(0, entry.lowerWidth);
          var interpolatorHeight = interpolateNumber(0, entry.height);
          return _objectSpread(_objectSpread({}, entry), {}, {
            x: interpolatorX(t),
            y: interpolatorY(t),
            upperWidth: interpolatorUpperWidth(t),
            lowerWidth: interpolatorLowerWidth(t),
            height: interpolatorHeight(t)
          });
        });
        return /* @__PURE__ */ React.createElement(Layer, null, _this3.renderTrapezoidsStatically(stepData));
      });
    }
  }, {
    key: "renderTrapezoids",
    value: function renderTrapezoids() {
      var _this$props3 = this.props, trapezoids = _this$props3.trapezoids, isAnimationActive = _this$props3.isAnimationActive;
      var prevTrapezoids = this.state.prevTrapezoids;
      if (isAnimationActive && trapezoids && trapezoids.length && (!prevTrapezoids || !isEqual(prevTrapezoids, trapezoids))) {
        return this.renderTrapezoidsWithAnimation();
      }
      return this.renderTrapezoidsStatically(trapezoids);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props, hide = _this$props4.hide, trapezoids = _this$props4.trapezoids, className = _this$props4.className, isAnimationActive = _this$props4.isAnimationActive;
      var isAnimationFinished = this.state.isAnimationFinished;
      if (hide || !trapezoids || !trapezoids.length) {
        return null;
      }
      var layerClass = clsx("recharts-trapezoids", className);
      return /* @__PURE__ */ React.createElement(Layer, {
        className: layerClass
      }, this.renderTrapezoids(), (!isAnimationActive || isAnimationFinished) && LabelList.renderCallByParent(this.props, trapezoids));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.animationId !== prevState.prevAnimationId) {
        return {
          prevAnimationId: nextProps.animationId,
          curTrapezoids: nextProps.trapezoids,
          prevTrapezoids: prevState.curTrapezoids
        };
      }
      if (nextProps.trapezoids !== prevState.curTrapezoids) {
        return {
          curTrapezoids: nextProps.trapezoids
        };
      }
      return null;
    }
  }]);
}(reactExports.PureComponent);
_Funnel = Funnel;
_defineProperty(Funnel, "displayName", "Funnel");
_defineProperty(Funnel, "defaultProps", {
  stroke: "#fff",
  fill: "#808080",
  legendType: "rect",
  labelLine: true,
  hide: false,
  isAnimationActive: !Global.isSsr,
  animationBegin: 400,
  animationDuration: 1500,
  animationEasing: "ease",
  nameKey: "name",
  lastShapeType: "triangle"
});
_defineProperty(Funnel, "getRealFunnelData", function(item) {
  var _item$props = item.props, data = _item$props.data, children = _item$props.children;
  var presentationProps = filterProps(item.props, false);
  var cells = findAllByType(children, Cell);
  if (data && data.length) {
    return data.map(function(entry, index) {
      return _objectSpread(_objectSpread(_objectSpread({
        payload: entry
      }, presentationProps), entry), cells && cells[index] && cells[index].props);
    });
  }
  if (cells && cells.length) {
    return cells.map(function(cell) {
      return _objectSpread(_objectSpread({}, presentationProps), cell.props);
    });
  }
  return [];
});
_defineProperty(Funnel, "getRealWidthHeight", function(item, offset) {
  var customWidth = item.props.width;
  var width = offset.width, height = offset.height, left = offset.left, right = offset.right, top = offset.top, bottom = offset.bottom;
  var realHeight = height;
  var realWidth = width;
  if (isNumber(customWidth)) {
    realWidth = customWidth;
  } else if (isString(customWidth)) {
    realWidth = realWidth * parseFloat(customWidth) / 100;
  }
  return {
    realWidth: realWidth - left - right - 50,
    realHeight: realHeight - bottom - top,
    offsetX: (width - realWidth) / 2,
    offsetY: (height - realHeight) / 2
  };
});
_defineProperty(Funnel, "getComposedData", function(_ref2) {
  var item = _ref2.item, offset = _ref2.offset;
  var funnelData = _Funnel.getRealFunnelData(item);
  var _item$props2 = item.props, dataKey = _item$props2.dataKey, nameKey = _item$props2.nameKey, tooltipType = _item$props2.tooltipType, lastShapeType = _item$props2.lastShapeType, reversed = _item$props2.reversed;
  var left = offset.left, top = offset.top;
  var _Funnel$getRealWidthH = _Funnel.getRealWidthHeight(item, offset), realHeight = _Funnel$getRealWidthH.realHeight, realWidth = _Funnel$getRealWidthH.realWidth, offsetX = _Funnel$getRealWidthH.offsetX, offsetY = _Funnel$getRealWidthH.offsetY;
  var maxValue = Math.max.apply(null, funnelData.map(function(entry) {
    return getValueByDataKey(entry, dataKey, 0);
  }));
  var len = funnelData.length;
  var rowHeight = realHeight / len;
  var parentViewBox = {
    x: offset.left,
    y: offset.top,
    width: offset.width,
    height: offset.height
  };
  var trapezoids = funnelData.map(function(entry, i) {
    var rawVal = getValueByDataKey(entry, dataKey, 0);
    var name = getValueByDataKey(entry, nameKey, i);
    var val = rawVal;
    var nextVal;
    if (i !== len - 1) {
      nextVal = getValueByDataKey(funnelData[i + 1], dataKey, 0);
      if (nextVal instanceof Array) {
        var _nextVal = nextVal;
        var _nextVal2 = _slicedToArray(_nextVal, 1);
        nextVal = _nextVal2[0];
      }
    } else if (rawVal instanceof Array && rawVal.length === 2) {
      var _rawVal = _slicedToArray(rawVal, 2);
      val = _rawVal[0];
      nextVal = _rawVal[1];
    } else if (lastShapeType === "rectangle") {
      nextVal = val;
    } else {
      nextVal = 0;
    }
    var x = (maxValue - val) * realWidth / (2 * maxValue) + top + 25 + offsetX;
    var y = rowHeight * i + left + offsetY;
    var upperWidth = val / maxValue * realWidth;
    var lowerWidth = nextVal / maxValue * realWidth;
    var tooltipPayload = [{
      name,
      value: val,
      payload: entry,
      dataKey,
      type: tooltipType
    }];
    var tooltipPosition = {
      x: x + upperWidth / 2,
      y: y + rowHeight / 2
    };
    return _objectSpread(_objectSpread({
      x,
      y,
      width: Math.max(upperWidth, lowerWidth),
      upperWidth,
      lowerWidth,
      height: rowHeight,
      name,
      val,
      tooltipPayload,
      tooltipPosition
    }, omit$1(entry, "width")), {}, {
      payload: entry,
      parentViewBox,
      labelViewBox: {
        x: x + (upperWidth - lowerWidth) / 4,
        y,
        width: Math.abs(upperWidth - lowerWidth) / 2 + Math.min(upperWidth, lowerWidth),
        height: rowHeight
      }
    });
  });
  if (reversed) {
    trapezoids = trapezoids.map(function(entry, index) {
      var newY = entry.y - index * rowHeight + (len - 1 - index) * rowHeight;
      return _objectSpread(_objectSpread({}, entry), {}, {
        upperWidth: entry.lowerWidth,
        lowerWidth: entry.upperWidth,
        x: entry.x - (entry.lowerWidth - entry.upperWidth) / 2,
        y: entry.y - index * rowHeight + (len - 1 - index) * rowHeight,
        tooltipPosition: _objectSpread(_objectSpread({}, entry.tooltipPosition), {}, {
          y: newY + rowHeight / 2
        }),
        labelViewBox: _objectSpread(_objectSpread({}, entry.labelViewBox), {}, {
          y: newY
        })
      });
    });
  }
  return {
    trapezoids,
    data: funnelData
  };
});
var FunnelChart = generateCategoricalChart({
  chartName: "FunnelChart",
  GraphicalChild: Funnel,
  validateTooltipEventTypes: ["item"],
  defaultTooltipEventType: "item",
  axisComponents: [],
  defaultProps: {
    layout: "centric"
  }
});
const CHART_PRIMARY = "oklch(0.42 0.08 265)";
const CHART_SECONDARY = "oklch(0.60 0.10 185)";
const CHART_GREEN = "oklch(0.55 0.15 155)";
const CHART_GRID = "oklch(0.91 0.01 0)";
function BranchDashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const branchId = user.branchId;
  const branchStaff = mockUsers.filter(
    (u) => u.branchId === branchId && u.role === "staff"
  );
  const branchLeads = mockLeads.filter((l) => l.branchId === branchId);
  const branchTasks = mockTasks.filter((t) => t.branchId === branchId);
  const branchFinance = mockFinanceRecords.filter(
    (f) => f.branchId === branchId
  );
  const totalRevenue = branchFinance.reduce((s, f) => s + f.revenue, 0);
  const convertedLeads = branchLeads.filter(
    (l) => l.status === "Converted"
  ).length;
  const doneTasks = branchTasks.filter((t) => t.status === "Done").length;
  const totalBranchTasks = branchTasks.length;
  const taskCompletionPct = totalBranchTasks ? Math.round(doneTasks / totalBranchTasks * 100) : 0;
  const activeLeads = branchLeads.filter(
    (l) => l.status === "New" || l.status === "In Progress"
  ).length;
  const monthlyPerfData = branchFinance.slice(-8).map((f) => ({
    month: f.month,
    revenue: f.revenue,
    profit: f.profit,
    target: Math.round(f.revenue * 1.08)
  }));
  const funnelTotal = branchLeads.length || 1;
  const funnelData = [
    {
      name: "New Leads",
      value: branchLeads.filter((l) => l.status === "New").length + convertedLeads + branchLeads.filter((l) => l.status === "In Progress").length,
      fill: CHART_PRIMARY
    },
    {
      name: "In Progress",
      value: branchLeads.filter((l) => l.status === "In Progress").length + convertedLeads,
      fill: CHART_SECONDARY
    },
    { name: "Converted", value: convertedLeads, fill: CHART_GREEN }
  ];
  const upcomingTasks = [
    ...branchTasks,
    ...mockTasks.filter((t) => t.assignedToId === user.id)
  ].filter((t) => t.status !== "Done").sort(
    (a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
  ).slice(0, 5);
  const staffTargets = branchStaff.slice(0, 5).map((s) => ({
    ...s,
    target: 100,
    achieved: s.performanceScore
  }));
  const kpis = [
    {
      title: "Branch Revenue",
      value: `₹${(totalRevenue / 1e6).toFixed(2)}M`,
      change: 6,
      icon: DollarSign,
      iconColor: "text-green-600"
    },
    {
      title: "Staff Count",
      value: branchStaff.length || 18,
      change: 2,
      icon: Users,
      iconColor: "text-primary"
    },
    {
      title: "Active Leads",
      value: activeLeads || 42,
      change: 8,
      icon: Target,
      iconColor: "text-amber-600"
    },
    {
      title: "Task Completion",
      value: `${taskCompletionPct || 78}%`,
      change: 3,
      icon: SquareCheckBig,
      iconColor: "text-secondary"
    }
  ];
  const quickActions = [
    {
      label: "New Task",
      icon: Plus,
      href: "/tasks/new",
      ocid: "branch_dashboard.quick_action.new_task"
    },
    {
      label: "Request Leave",
      icon: CalendarDays,
      href: "/attendance/request",
      ocid: "branch_dashboard.quick_action.request_leave"
    }
  ];
  function handleExportCSV() {
    const exportData = kpis.map((k) => ({
      Metric: k.title,
      Value: k.value,
      "Change (%)": k.change,
      Branch: user.branchName
    }));
    exportToCSV(
      exportData,
      `branch-dashboard-${user.branchName.toLowerCase().replace(/\s+/g, "-")}`
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        title: `${user.branchName} Dashboard`,
        subtitle: `Branch performance overview — ${(/* @__PURE__ */ new Date()).toLocaleDateString("en-IN", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}`,
        breadcrumbs: [{ label: "Dashboard" }, { label: user.branchName }],
        actions: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
          quickActions.map((action) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "outline",
              size: "sm",
              onClick: () => navigate({ to: action.href }),
              className: "gap-1.5 text-xs min-h-[36px]",
              "data-ocid": action.ocid,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(action.icon, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: action.label })
              ]
            },
            action.label
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "outline",
              size: "sm",
              onClick: handleExportCSV,
              className: "gap-1.5 text-xs min-h-[36px]",
              "data-ocid": "branch_dashboard.export_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Export CSV" })
              ]
            }
          )
        ] }),
        "data-ocid": "branch_dashboard.header"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6", children: kpis.map((kpi, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: i * 0.08, duration: 0.35 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          StatCard,
          {
            title: kpi.title,
            value: kpi.value,
            change: kpi.change,
            icon: kpi.icon,
            iconColor: kpi.iconColor,
            "data-ocid": `branch_dashboard.kpi.${i + 1}`
          }
        )
      },
      kpi.title
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 mb-4 sm:hidden flex-wrap", children: quickActions.map((action) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => navigate({ to: action.href }),
        className: "flex items-center gap-1.5 px-3 py-2 rounded-lg bg-primary/10 text-primary text-xs font-semibold min-h-[44px] border border-primary/20",
        "data-ocid": `${action.ocid}_mobile`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(action.icon, { className: "w-3.5 h-3.5" }),
          action.label
        ]
      },
      action.label
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.38 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            ChartCard,
            {
              title: "Staff Targets",
              subtitle: "Top performers — target vs achieved",
              "data-ocid": "branch_dashboard.staff_targets",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 mt-1", children: [
                staffTargets.map((staff, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-center gap-3",
                    "data-ocid": `branch_dashboard.staff_targets.item.${i + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "img",
                        {
                          src: staff.avatar,
                          alt: staff.name,
                          className: "w-8 h-8 rounded-full border border-border shrink-0"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-foreground truncate", children: staff.name }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold text-primary ml-2 shrink-0", children: [
                            staff.achieved,
                            "%"
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: staff.achieved, className: "h-1.5" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground shrink-0 w-16 text-right", children: [
                        staff.achieved,
                        "/",
                        staff.target
                      ] })
                    ]
                  },
                  staff.id
                )),
                staffTargets.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground text-center py-4", children: "No staff data available" })
              ] })
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.44 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            ChartCard,
            {
              title: "Lead Conversion Funnel",
              subtitle: "New → In Progress → Converted",
              "data-ocid": "branch_dashboard.lead_funnel",
              children: [
                funnelData[0].value > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 200, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(FunnelChart, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Tooltip,
                    {
                      formatter: (v) => [v, "Leads"],
                      contentStyle: { fontSize: 11 }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Funnel, { dataKey: "value", data: funnelData, isAnimationActive: true, children: [
                    funnelData.map((entry) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: entry.fill }, entry.name)),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      LabelList,
                      {
                        position: "right",
                        fill: "oklch(0.18 0 0)",
                        stroke: "none",
                        dataKey: "name",
                        fontSize: 11
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      LabelList,
                      {
                        position: "center",
                        fill: "white",
                        stroke: "none",
                        dataKey: "value",
                        fontSize: 12,
                        fontWeight: 700
                      }
                    )
                  ] })
                ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 mt-2", children: ["New", "In Progress", "Converted"].map(
                  (status) => {
                    const count = branchLeads.filter(
                      (l) => l.status === status
                    ).length;
                    const pct = funnelTotal ? Math.round(count / funnelTotal * 100) : 0;
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        StatusBadge,
                        {
                          status,
                          className: "w-20 justify-center"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: pct, className: "h-2" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-foreground w-8 text-right", children: count })
                    ] }, status);
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-border", children: [
                  { label: "Total Leads", value: branchLeads.length },
                  { label: "Converted", value: convertedLeads },
                  {
                    label: "Conv. Rate",
                    value: `${branchLeads.length ? Math.round(convertedLeads / branchLeads.length * 100) : 0}%`
                  }
                ].map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "text-center p-2 rounded-xl bg-muted/40",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-display font-bold text-foreground", children: stat.value }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: stat.label })
                    ]
                  },
                  stat.label
                )) })
              ]
            }
          )
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          className: "md:col-span-1 lg:col-span-2",
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.5 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            ChartCard,
            {
              title: "Monthly Performance",
              subtitle: "Revenue, profit & target trend",
              "data-ocid": "branch_dashboard.monthly_performance",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 220, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                AreaChart,
                {
                  data: monthlyPerfData,
                  margin: { top: 4, right: 8, left: 0, bottom: 0 },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "linearGradient",
                        {
                          id: "revGradBranch",
                          x1: "0",
                          y1: "0",
                          x2: "0",
                          y2: "1",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "stop",
                              {
                                offset: "5%",
                                stopColor: CHART_PRIMARY,
                                stopOpacity: 0.18
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "stop",
                              {
                                offset: "95%",
                                stopColor: CHART_PRIMARY,
                                stopOpacity: 0
                              }
                            )
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "linearGradient",
                        {
                          id: "profGradBranch",
                          x1: "0",
                          y1: "0",
                          x2: "0",
                          y2: "1",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "stop",
                              {
                                offset: "5%",
                                stopColor: CHART_GREEN,
                                stopOpacity: 0.18
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "stop",
                              {
                                offset: "95%",
                                stopColor: CHART_GREEN,
                                stopOpacity: 0
                              }
                            )
                          ]
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      CartesianGrid,
                      {
                        strokeDasharray: "3 3",
                        vertical: false,
                        stroke: CHART_GRID
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
                        tickFormatter: (v) => `₹${(v / 1e5).toFixed(0)}L`
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Tooltip,
                      {
                        formatter: (v, name) => [
                          `₹${(v / 1e5).toFixed(1)}L`,
                          name
                        ],
                        contentStyle: { fontSize: 11 }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, { wrapperStyle: { fontSize: 11 } }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Area,
                      {
                        type: "monotone",
                        dataKey: "revenue",
                        name: "Revenue",
                        stroke: CHART_PRIMARY,
                        strokeWidth: 2,
                        fill: "url(#revGradBranch)"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Area,
                      {
                        type: "monotone",
                        dataKey: "profit",
                        name: "Profit",
                        stroke: CHART_GREEN,
                        strokeWidth: 2,
                        fill: "url(#profGradBranch)"
                      }
                    )
                  ]
                }
              ) })
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.56 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            ChartCard,
            {
              title: "Upcoming Tasks",
              subtitle: "Next 5 by due date",
              "data-ocid": "branch_dashboard.upcoming_tasks",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 mt-1", children: [
                upcomingTasks.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground text-center py-6", children: "No upcoming tasks" }),
                upcomingTasks.map((task, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "p-2.5 rounded-xl border border-border/60 bg-muted/20 hover:bg-muted/40 transition-smooth",
                    "data-ocid": `branch_dashboard.upcoming_tasks.item.${i + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2 mb-1.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground leading-snug line-clamp-2 flex-1", children: task.title }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(PriorityBadge, { priority: task.priority })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 flex-wrap", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "w-3 h-3 text-muted-foreground" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: new Date(task.dueDate).toLocaleDateString("en-IN", {
                          month: "short",
                          day: "numeric"
                        }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3 text-muted-foreground ml-1" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: task.status })
                      ] })
                    ]
                  },
                  task.id
                ))
              ] })
            }
          )
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.62 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          ChartCard,
          {
            title: "Staff Performance",
            subtitle: "All branch staff performance scores",
            "data-ocid": "branch_dashboard.staff_performance_table",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto mt-1 -mx-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs min-w-[420px]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2.5 px-2 font-semibold text-muted-foreground sticky left-0 bg-card z-10", children: "Staff" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2.5 px-2 font-semibold text-muted-foreground hidden sm:table-cell", children: "Role" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right py-2.5 px-2 font-semibold text-muted-foreground", children: "Score" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right py-2.5 px-2 font-semibold text-muted-foreground hidden md:table-cell", children: "Progress" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center py-2.5 px-2 font-semibold text-muted-foreground", children: "Status" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: branchStaff.slice(0, 8).map((staff, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "tr",
                {
                  className: "border-b border-border/50 hover:bg-muted/30 transition-smooth",
                  "data-ocid": `branch_dashboard.staff_performance_table.item.${i + 1}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-2 sticky left-0 bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "img",
                        {
                          src: staff.avatar,
                          alt: staff.name,
                          className: "w-6 h-6 rounded-full border border-border shrink-0"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground truncate max-w-[100px]", children: staff.name })
                    ] }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-2 text-muted-foreground hidden sm:table-cell capitalize", children: staff.role }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-2 text-right font-bold text-primary", children: staff.performanceScore }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-2 hidden md:table-cell", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-end gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-1.5 rounded-full bg-muted overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "h-full rounded-full bg-primary transition-all duration-500",
                          style: { width: `${staff.performanceScore}%` }
                        }
                      ) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground w-8", children: [
                        staff.performanceScore,
                        "%"
                      ] })
                    ] }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-2 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: staff.status }) })
                  ]
                },
                staff.id
              )) })
            ] }) })
          }
        )
      }
    )
  ] });
}
export {
  BranchDashboard as default
};
