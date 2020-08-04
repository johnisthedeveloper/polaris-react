import React__default, { useContext, useState, useEffect, useCallback, useRef, createRef, memo, useMemo, useLayoutEffect, useImperativeHandle, createContext, Component, Fragment, createElement } from 'react';
import { __rest } from 'tslib';
import { CaretDownMinor, HorizontalDotsMinor, TickSmallMinor, AlertMinor, CaretUpMinor, CircleCancelMinor, CancelSmallMinor, CircleInformationMajorFilled, FlagMajorTwotone, CircleDisabledMajorFilled, CircleDisabledMajorTwotone, CircleAlertMajorFilled, CircleAlertMajorTwotone, CircleInformationMajorTwotone, CircleTickMajorFilled, CircleTickMajorTwotone, ArrowLeftMinor, ChevronLeftMinor, MinusMinor, ChevronRightMinor, ArrowRightMinor, DragDropMajorMonotone, CircleAlertMajorMonotone, SearchMinor, ChevronUpMinor, ChevronDownMinor, InfoMinor, QuestionMarkMajorTwotone, MobileCancelMajorMonotone, ExternalSmallMinor, ArrowUpDownMinor, CalendarMinor, EnableSelectionMinor, MobileHamburgerMajorMonotone } from '@shopify/polaris-icons';
import { FOCUSABLE_SELECTOR, focusFirstFocusableNode, findFirstFocusableNode as findFirstFocusableNode$1 } from '@shopify/javascript-utilities/focus';
import { createPortal } from 'react-dom';
import { createUniqueIDFactory } from '@shopify/javascript-utilities/other';
import tokens, { durationBase, durationSlow } from '@shopify/polaris-tokens';
import { colorFactory } from '@shopify/polaris-tokens/dist-modern';
import { mergeConfigs } from '@shopify/polaris-tokens/dist-modern/utils';
import { config } from '@shopify/polaris-tokens/dist-modern/configs/base';
import { clamp as clamp$1 } from '@shopify/javascript-utilities/math';
import debounce from 'lodash/debounce';
import { addEventListener, removeEventListener } from '@shopify/javascript-utilities/events';
import { closest, nodeContainsDescendant } from '@shopify/javascript-utilities/dom';
import { getRectForNode, Rect } from '@shopify/javascript-utilities/geometry';
import { write, read } from '@shopify/javascript-utilities/fastdom';
import DefaultThemeColors from '@shopify/polaris-tokens/dist-modern/theme/base.json';
import createApp, { getShopOrigin, LifecycleHook } from '@shopify/app-bridge';
import isEqual from 'lodash/isEqual';
import hoistStatics from 'hoist-non-react-statics';
import { isSameDay, Months, Weekdays, getWeeksForMonth, getNewRange, isDateBefore, isDateAfter, isSameDate, dateIsSelected, dateIsInRange, getNextDisplayYear, getNextDisplayMonth, getPreviousDisplayYear, getPreviousDisplayMonth } from '@shopify/javascript-utilities/dates';
export { Months } from '@shopify/javascript-utilities/dates';
import { CSSTransition, TransitionGroup, Transition } from '@material-ui/react-transition-group';
import { Redirect, ButtonGroup as ButtonGroup$1, Button as Button$1, Modal as Modal$1, Loading as Loading$2, TitleBar, ResourcePicker as ResourcePicker$1, Toast as Toast$2 } from '@shopify/app-bridge/actions';

if (typeof window !== 'undefined') {
  window.Polaris = window.Polaris || {};
  window.Polaris.VERSION = '4.24.0';
}

var polarisVersion = '4.24.0';

var NEW_DESIGN_LANGUAGE_COLORS = ['base', 'subdued', 'critical', 'warning', 'highlight', 'success', 'primary'];
function isNewDesignLanguageColor(color) {
  return NEW_DESIGN_LANGUAGE_COLORS.includes(color);
}
var Key;

(function (Key) {
  Key[Key["Backspace"] = 8] = "Backspace";
  Key[Key["Tab"] = 9] = "Tab";
  Key[Key["Enter"] = 13] = "Enter";
  Key[Key["Shift"] = 16] = "Shift";
  Key[Key["Ctrl"] = 17] = "Ctrl";
  Key[Key["Alt"] = 18] = "Alt";
  Key[Key["Pause"] = 19] = "Pause";
  Key[Key["CapsLock"] = 20] = "CapsLock";
  Key[Key["Escape"] = 27] = "Escape";
  Key[Key["Space"] = 32] = "Space";
  Key[Key["PageUp"] = 33] = "PageUp";
  Key[Key["PageDown"] = 34] = "PageDown";
  Key[Key["End"] = 35] = "End";
  Key[Key["Home"] = 36] = "Home";
  Key[Key["LeftArrow"] = 37] = "LeftArrow";
  Key[Key["UpArrow"] = 38] = "UpArrow";
  Key[Key["RightArrow"] = 39] = "RightArrow";
  Key[Key["DownArrow"] = 40] = "DownArrow";
  Key[Key["Insert"] = 45] = "Insert";
  Key[Key["Delete"] = 46] = "Delete";
  Key[Key["Key0"] = 48] = "Key0";
  Key[Key["Key1"] = 49] = "Key1";
  Key[Key["Key2"] = 50] = "Key2";
  Key[Key["Key3"] = 51] = "Key3";
  Key[Key["Key4"] = 52] = "Key4";
  Key[Key["Key5"] = 53] = "Key5";
  Key[Key["Key6"] = 54] = "Key6";
  Key[Key["Key7"] = 55] = "Key7";
  Key[Key["Key8"] = 56] = "Key8";
  Key[Key["Key9"] = 57] = "Key9";
  Key[Key["KeyA"] = 65] = "KeyA";
  Key[Key["KeyB"] = 66] = "KeyB";
  Key[Key["KeyC"] = 67] = "KeyC";
  Key[Key["KeyD"] = 68] = "KeyD";
  Key[Key["KeyE"] = 69] = "KeyE";
  Key[Key["KeyF"] = 70] = "KeyF";
  Key[Key["KeyG"] = 71] = "KeyG";
  Key[Key["KeyH"] = 72] = "KeyH";
  Key[Key["KeyI"] = 73] = "KeyI";
  Key[Key["KeyJ"] = 74] = "KeyJ";
  Key[Key["KeyK"] = 75] = "KeyK";
  Key[Key["KeyL"] = 76] = "KeyL";
  Key[Key["KeyM"] = 77] = "KeyM";
  Key[Key["KeyN"] = 78] = "KeyN";
  Key[Key["KeyO"] = 79] = "KeyO";
  Key[Key["KeyP"] = 80] = "KeyP";
  Key[Key["KeyQ"] = 81] = "KeyQ";
  Key[Key["KeyR"] = 82] = "KeyR";
  Key[Key["KeyS"] = 83] = "KeyS";
  Key[Key["KeyT"] = 84] = "KeyT";
  Key[Key["KeyU"] = 85] = "KeyU";
  Key[Key["KeyV"] = 86] = "KeyV";
  Key[Key["KeyW"] = 87] = "KeyW";
  Key[Key["KeyX"] = 88] = "KeyX";
  Key[Key["KeyY"] = 89] = "KeyY";
  Key[Key["KeyZ"] = 90] = "KeyZ";
  Key[Key["LeftMeta"] = 91] = "LeftMeta";
  Key[Key["RightMeta"] = 92] = "RightMeta";
  Key[Key["Select"] = 93] = "Select";
  Key[Key["Numpad0"] = 96] = "Numpad0";
  Key[Key["Numpad1"] = 97] = "Numpad1";
  Key[Key["Numpad2"] = 98] = "Numpad2";
  Key[Key["Numpad3"] = 99] = "Numpad3";
  Key[Key["Numpad4"] = 100] = "Numpad4";
  Key[Key["Numpad5"] = 101] = "Numpad5";
  Key[Key["Numpad6"] = 102] = "Numpad6";
  Key[Key["Numpad7"] = 103] = "Numpad7";
  Key[Key["Numpad8"] = 104] = "Numpad8";
  Key[Key["Numpad9"] = 105] = "Numpad9";
  Key[Key["Multiply"] = 106] = "Multiply";
  Key[Key["Add"] = 107] = "Add";
  Key[Key["Subtract"] = 109] = "Subtract";
  Key[Key["Decimal"] = 110] = "Decimal";
  Key[Key["Divide"] = 111] = "Divide";
  Key[Key["F1"] = 112] = "F1";
  Key[Key["F2"] = 113] = "F2";
  Key[Key["F3"] = 114] = "F3";
  Key[Key["F4"] = 115] = "F4";
  Key[Key["F5"] = 116] = "F5";
  Key[Key["F6"] = 117] = "F6";
  Key[Key["F7"] = 118] = "F7";
  Key[Key["F8"] = 119] = "F8";
  Key[Key["F9"] = 120] = "F9";
  Key[Key["F10"] = 121] = "F10";
  Key[Key["F11"] = 122] = "F11";
  Key[Key["F12"] = 123] = "F12";
  Key[Key["NumLock"] = 144] = "NumLock";
  Key[Key["ScrollLock"] = 145] = "ScrollLock";
  Key[Key["Semicolon"] = 186] = "Semicolon";
  Key[Key["Equals"] = 187] = "Equals";
  Key[Key["Comma"] = 188] = "Comma";
  Key[Key["Dash"] = 189] = "Dash";
  Key[Key["Period"] = 190] = "Period";
  Key[Key["ForwardSlash"] = 191] = "ForwardSlash";
  Key[Key["GraveAccent"] = 192] = "GraveAccent";
  Key[Key["OpenBracket"] = 219] = "OpenBracket";
  Key[Key["BackSlash"] = 220] = "BackSlash";
  Key[Key["CloseBracket"] = 221] = "CloseBracket";
  Key[Key["SingleQuote"] = 222] = "SingleQuote";
})(Key || (Key = {}));

var TypeOf;

(function (TypeOf) {
  TypeOf["Undefined"] = "undefined";
  TypeOf["Object"] = "object";
  TypeOf["Boolean"] = "boolean";
  TypeOf["Number"] = "number";
  TypeOf["String"] = "string";
  TypeOf["Symbol"] = "symbol";
  TypeOf["Function"] = "function";
})(TypeOf || (TypeOf = {}));

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
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
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

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = o[Symbol.iterator]();
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function classNames() {
  for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
    classes[_key] = arguments[_key];
  }

  return classes.filter(Boolean).join(' ');
}
function variationName(name, value) {
  return "".concat(name).concat(value.charAt(0).toUpperCase()).concat(value.slice(1));
}

var FeaturesContext = React__default.createContext(undefined);

function useFeatures() {
  var features = useContext(FeaturesContext);

  if (!features) {
    throw new Error('No Features were provided.');
  }

  return features;
}

var I18nContext = React__default.createContext(undefined);

var MissingAppProviderError = /*#__PURE__*/function (_Error) {
  _inherits(MissingAppProviderError, _Error);

  var _super = _createSuper(MissingAppProviderError);

  function MissingAppProviderError() {
    var _this;

    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    _classCallCheck(this, MissingAppProviderError);

    _this = _super.call(this, "".concat(message ? "".concat(message, " ") : message, "Your application must be wrapped in an <AppProvider> component. See https://polaris.shopify.com/components/structure/app-provider for implementation instructions."));
    _this.name = 'MissingAppProviderError';
    return _this;
  }

  return MissingAppProviderError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

function useI18n() {
  var i18n = useContext(I18nContext);

  if (!i18n) {
    throw new MissingAppProviderError('No i18n was provided.');
  }

  return i18n;
}

var OBJECT_NOTATION_MATCHER = /\[(.*?)\]|(\w+)/g;
function get(obj, keypath, defaultValue) {
  if (obj == null) return undefined;
  var keys = Array.isArray(keypath) ? keypath : getKeypath(keypath);
  var acc = obj; // eslint-disable-next-line @typescript-eslint/prefer-for-of

  for (var i = 0; i < keys.length; i++) {
    var val = acc[keys[i]];
    if (val === undefined) return defaultValue;
    acc = val;
  }

  return acc;
}

function getKeypath(str) {
  var path = [];
  var result;

  while (result = OBJECT_NOTATION_MATCHER.exec(str)) {
    var _result = result,
        _result2 = _slicedToArray(_result, 3),
        first = _result2[1],
        second = _result2[2];

    path.push(first || second);
  }

  return path;
}

function merge() {
  var final = {};

  for (var _len = arguments.length, objs = new Array(_len), _key = 0; _key < _len; _key++) {
    objs[_key] = arguments[_key];
  }

  for (var _i = 0, _objs = objs; _i < _objs.length; _i++) {
    var obj = _objs[_i];
    final = mergeRecursively(final, obj);
  }

  return final;
}

function mergeRecursively(inputObjA, objB) {
  var objA = Array.isArray(inputObjA) ? _toConsumableArray(inputObjA) : Object.assign({}, inputObjA);

  for (var key in objB) {
    if (!Object.prototype.hasOwnProperty.call(objB, key)) {
      continue;
    } else if (isMergeableValue(objB[key]) && isMergeableValue(objA[key])) {
      objA[key] = mergeRecursively(objA[key], objB[key]);
    } else {
      objA[key] = objB[key];
    }
  }

  return objA;
}

function isMergeableValue(value) {
  return value !== null && typeof value === 'object';
}

var REPLACE_REGEX = /{([^}]*)}/g;
var I18n = /*#__PURE__*/function () {
  /**
   * @param translation A locale object or array of locale objects that overrides default translations. If specifying an array then your fallback language dictionaries should come first, followed by your primary language dictionary
   */
  function I18n(translation) {
    _classCallCheck(this, I18n);

    this.translation = {};
    this.translation = Array.isArray(translation) ? merge.apply(void 0, _toConsumableArray(translation)) : translation;
  }

  _createClass(I18n, [{
    key: "translate",
    value: function translate(id, replacements) {
      var text = get(this.translation, id, '');

      if (!text) {
        return '';
      }

      if (replacements) {
        return text.replace(REPLACE_REGEX, function (match) {
          var replacement = match.substring(1, match.length - 1);

          if (replacements[replacement] === undefined) {
            var replacementData = JSON.stringify(replacements);
            throw new Error("Error in translation for key '".concat(id, "'. No replacement found for key '").concat(replacement, "'. The following replacements were passed: '").concat(replacementData, "'"));
          } // This could be a string or a number, but JS doesn't mind which it gets
          // and can handle that cast internally. So let it, to save us calling
          // toString() on what's already a string in 90% of cases.


          return replacements[replacement];
        });
      }

      return text;
    }
  }, {
    key: "translationKeyExists",
    value: function translationKeyExists(path) {
      return Boolean(get(this.translation, path));
    }
  }]);

  return I18n;
}();

/**
 * useIsAfterInitialMount will trigger a re-render to provide
 * you with an updated value. Using this you enhance server-side
 * code that can only run on the client.
 * @returns MutableRefObject<T> - Returns a ref object with the
 * results from invoking initial value
 * @example
 * function ComponentExample({children}) {
 *  const isMounted = useIsAfterInitialMount();
 *  const content = isMounted ? children : null;
 *
 *  return <React.Fragment>{content}</React.Fragment>;
 * }
 */

function useIsAfterInitialMount() {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isAfterInitialMount = _useState2[0],
      setIsAfterInitialMount = _useState2[1];

  useEffect(function () {
    setIsAfterInitialMount(true);
  }, []);
  return isAfterInitialMount;
}

function Image(_a) {
  var sourceSet = _a.sourceSet,
      source = _a.source,
      crossOrigin = _a.crossOrigin,
      rest = __rest(_a, ["sourceSet", "source", "crossOrigin"]);

  var finalSourceSet = sourceSet ? sourceSet.map(function (_ref) {
    var subSource = _ref.source,
        descriptor = _ref.descriptor;
    return "".concat(subSource, " ").concat(descriptor);
  }).join(',') : null;
  return finalSourceSet ?
  /*#__PURE__*/
  // eslint-disable-next-line jsx-a11y/alt-text
  React__default.createElement("img", Object.assign({
    src: source,
    srcSet: finalSourceSet,
    crossOrigin: crossOrigin
  }, rest)) :
  /*#__PURE__*/
  // eslint-disable-next-line jsx-a11y/alt-text
  React__default.createElement("img", Object.assign({
    src: source
  }, rest, {
    crossOrigin: crossOrigin
  }));
}

var styles = {
  "Avatar": "Polaris-Avatar",
  "hidden": "Polaris-Avatar--hidden",
  "sizeSmall": "Polaris-Avatar--sizeSmall",
  "sizeMedium": "Polaris-Avatar--sizeMedium",
  "sizeLarge": "Polaris-Avatar--sizeLarge",
  "styleOne": "Polaris-Avatar--styleOne",
  "styleTwo": "Polaris-Avatar--styleTwo",
  "styleThree": "Polaris-Avatar--styleThree",
  "styleFour": "Polaris-Avatar--styleFour",
  "styleFive": "Polaris-Avatar--styleFive",
  "styleSix": "Polaris-Avatar--styleSix",
  "hasImage": "Polaris-Avatar--hasImage",
  "Image": "Polaris-Avatar__Image",
  "Initials": "Polaris-Avatar__Initials",
  "Svg": "Polaris-Avatar__Svg"
};

var Status;

(function (Status) {
  Status["Pending"] = "PENDING";
  Status["Loaded"] = "LOADED";
  Status["Errored"] = "ERRORED";
})(Status || (Status = {}));

var STYLE_CLASSES = ['one', 'two', 'three', 'four', 'five'];
function Avatar(_ref) {
  var name = _ref.name,
      source = _ref.source,
      initials = _ref.initials,
      customer = _ref.customer,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'medium' : _ref$size,
      accessibilityLabel = _ref.accessibilityLabel;
  var i18n = useI18n();

  var _useFeatures = useFeatures(),
      newDesignLanguage = _useFeatures.newDesignLanguage;

  var isAfterInitialMount = useIsAfterInitialMount();

  function styleClass(name) {
    var finalStyleClasses = newDesignLanguage ? STYLE_CLASSES : [].concat(STYLE_CLASSES, ['six']);
    return name ? finalStyleClasses[name.charCodeAt(0) % finalStyleClasses.length] : finalStyleClasses[0];
  }

  var _useState = useState(Status.Pending),
      _useState2 = _slicedToArray(_useState, 2),
      status = _useState2[0],
      setStatus = _useState2[1]; // If the source changes, set the status back to pending


  useEffect(function () {
    setStatus(Status.Pending);
  }, [source]);
  var handleError = useCallback(function () {
    setStatus(Status.Errored);
  }, []);
  var handleLoad = useCallback(function () {
    setStatus(Status.Loaded);
  }, []);
  var hasImage = source && status !== Status.Errored;
  var nameString = name || initials;
  var label;

  if (accessibilityLabel) {
    label = accessibilityLabel;
  } else if (name) {
    label = name;
  } else if (initials) {
    var splitInitials = initials.split('').join(' ');
    label = i18n.translate('Polaris.Avatar.labelWithInitials', {
      initials: splitInitials
    });
  } else {
    label = i18n.translate('Polaris.Avatar.label');
  }

  var className = classNames(styles.Avatar, size && styles[variationName('size', size)], !customer && styles[variationName('style', styleClass(nameString))], (hasImage || initials && initials.length === 0) && status !== Status.Loaded && styles.hidden, hasImage && styles.hasImage);
  var imageMarkUp = source && isAfterInitialMount && status !== Status.Errored ? /*#__PURE__*/React__default.createElement(Image, {
    className: styles.Image,
    source: source,
    alt: "",
    role: "presentation",
    onLoad: handleLoad,
    onError: handleError
  }) : null; // Use `dominant-baseline: central` instead of `dy` when Edge supports it.

  var verticalOffset = '0.35em';
  var avatarBody = customer || !initials ? /*#__PURE__*/React__default.createElement("path", {
    fill: "currentColor",
    d: "M8.28 27.5A14.95 14.95 0 0120 21.8c4.76 0 8.97 2.24 11.72 5.7a14.02 14.02 0 01-8.25 5.91 14.82 14.82 0 01-6.94 0 14.02 14.02 0 01-8.25-5.9zM13.99 12.78a6.02 6.02 0 1112.03 0 6.02 6.02 0 01-12.03 0z"
  }) : /*#__PURE__*/React__default.createElement("text", {
    x: "50%",
    y: "50%",
    dy: verticalOffset,
    fill: "currentColor",
    fontSize: "20",
    textAnchor: "middle"
  }, initials);
  var svgMarkup = !hasImage ? /*#__PURE__*/React__default.createElement("span", {
    className: styles.Initials
  }, /*#__PURE__*/React__default.createElement("svg", {
    className: styles.Svg,
    viewBox: "0 0 40 40"
  }, avatarBody)) : null;
  return /*#__PURE__*/React__default.createElement("span", {
    "aria-label": label,
    role: "img",
    className: className
  }, svgMarkup, imageMarkUp);
}

function isElementInViewport(element) {
  var _element$getBoundingC = element.getBoundingClientRect(),
      top = _element$getBoundingC.top,
      left = _element$getBoundingC.left,
      bottom = _element$getBoundingC.bottom,
      right = _element$getBoundingC.right;

  return top >= 0 && right <= window.innerWidth && bottom <= window.innerHeight && left >= 0;
}

var KEYBOARD_FOCUSABLE_SELECTORS = 'a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]:not([tabindex="-1"])';
function handleMouseUpByBlurring(_ref) {
  var currentTarget = _ref.currentTarget;
  currentTarget.blur();
}
function nextFocusableNode(node, filter) {
  var allFocusableElements = _toConsumableArray(document.querySelectorAll(FOCUSABLE_SELECTOR));

  var sliceLocation = allFocusableElements.indexOf(node) + 1;
  var focusableElementsAfterNode = allFocusableElements.slice(sliceLocation);

  var _iterator = _createForOfIteratorHelper(focusableElementsAfterNode),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var focusableElement = _step.value;

      if (isElementInViewport(focusableElement) && (!filter || filter && filter(focusableElement))) {
        return focusableElement;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return null;
} // Popover needs to be able to find its activator even if it is disabled, which FOCUSABLE_SELECTOR doesn't support.

function findFirstFocusableNode(element) {
  var focusableSelector = "a,button,frame,iframe,input:not([type=hidden]),select,textarea,*[tabindex]";

  if (matches(element, focusableSelector)) {
    return element;
  }

  return element.querySelector(focusableSelector);
}
function focusNextFocusableNode(node, filter) {
  var nextFocusable = nextFocusableNode(node, filter);

  if (nextFocusable && nextFocusable instanceof HTMLElement) {
    nextFocusable.focus();
    return true;
  }

  return false;
} // https://github.com/Shopify/javascript-utilities/blob/1e705564643d6fe7ffea5ebfbbf3e6b759a66c9b/src/focus.ts

function findFirstKeyboardFocusableNode(element) {
  var onlyDescendants = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (!onlyDescendants && matches(element, KEYBOARD_FOCUSABLE_SELECTORS)) {
    return element;
  }

  return element.querySelector(KEYBOARD_FOCUSABLE_SELECTORS);
}
function focusFirstKeyboardFocusableNode(element) {
  var onlyDescendants = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var firstFocusable = findFirstKeyboardFocusableNode(element, onlyDescendants);

  if (firstFocusable) {
    firstFocusable.focus();
    return true;
  }

  return false;
}
function findLastKeyboardFocusableNode(element) {
  var onlyDescendants = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (!onlyDescendants && matches(element, KEYBOARD_FOCUSABLE_SELECTORS)) {
    return element;
  }

  var allFocusable = element.querySelectorAll(KEYBOARD_FOCUSABLE_SELECTORS);
  return allFocusable[allFocusable.length - 1];
}
function focusLastKeyboardFocusableNode(element) {
  var onlyDescendants = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var lastFocusable = findLastKeyboardFocusableNode(element, onlyDescendants);

  if (lastFocusable) {
    lastFocusable.focus();
    return true;
  }

  return false;
}

function matches(node, selector) {
  if (node.matches) {
    return node.matches(selector);
  }

  var matches = (node.ownerDocument || document).querySelectorAll(selector);
  var i = matches.length;

  while (--i >= 0 && matches.item(i) !== node) {
    return i > -1;
  }
}

var scrollable = {
  props: {
    'data-polaris-scrollable': true
  },
  selector: '[data-polaris-scrollable]'
};
var overlay = {
  props: {
    'data-polaris-overlay': true
  },
  selector: '[data-polaris-overlay]'
};
var layer = {
  props: {
    'data-polaris-layer': true
  },
  selector: '[data-polaris-layer]'
};
var unstyled = {
  props: {
    'data-polaris-unstyled': true
  },
  selector: '[data-polaris-unstyled]'
};
var dataPolarisTopBar = {
  props: {
    'data-polaris-top-bar': true
  },
  selector: '[data-polaris-top-bar]'
};
var headerCell = {
  props: {
    'data-polaris-header-cell': true
  },
  selector: '[data-polaris-header-cell]'
};
var portal = {
  props: ['data-portal-id'],
  selector: '[data-portal-id]'
};
var DATA_ATTRIBUTE = {
  overlay,
  layer
};

var LinkContext = React__default.createContext(undefined);

function useLink() {
  return React__default.useContext(LinkContext);
}

// https://github.com/facebook/react/issues/16722
// but eslint-plugin-react doesn't know that just yet
// eslint-disable-next-line react/display-name

var UnstyledLink = /*#__PURE__*/React__default.memo( /*#__PURE__*/React__default.forwardRef(function UnstyledLink(props, _ref) {
  var LinkComponent = useLink();

  if (LinkComponent) {
    return /*#__PURE__*/React__default.createElement(LinkComponent, Object.assign({}, unstyled.props, props));
  }

  var external = props.external,
      url = props.url,
      rest = __rest(props, ["external", "url"]);

  var target = external ? '_blank' : undefined;
  var rel = external ? 'noopener noreferrer' : undefined;
  return /*#__PURE__*/React__default.createElement("a", Object.assign({
    target: target
  }, rest, {
    href: url,
    rel: rel
  }, unstyled.props));
}));

var styles$1 = {
  "Icon": "Polaris-Icon",
  "hasBackdrop": "Polaris-Icon--hasBackdrop",
  "isColored": "Polaris-Icon--isColored",
  "colorWhite": "Polaris-Icon--colorWhite",
  "newDesignLanguage": "Polaris-Icon--newDesignLanguage",
  "colorBlack": "Polaris-Icon--colorBlack",
  "colorSkyLighter": "Polaris-Icon--colorSkyLighter",
  "colorSkyLight": "Polaris-Icon--colorSkyLight",
  "colorSky": "Polaris-Icon--colorSky",
  "colorSkyDark": "Polaris-Icon--colorSkyDark",
  "colorInkLightest": "Polaris-Icon--colorInkLightest",
  "colorInkLighter": "Polaris-Icon--colorInkLighter",
  "colorInkLight": "Polaris-Icon--colorInkLight",
  "colorInk": "Polaris-Icon--colorInk",
  "colorBlueLighter": "Polaris-Icon--colorBlueLighter",
  "colorBlueLight": "Polaris-Icon--colorBlueLight",
  "colorBlue": "Polaris-Icon--colorBlue",
  "colorBlueDark": "Polaris-Icon--colorBlueDark",
  "colorBlueDarker": "Polaris-Icon--colorBlueDarker",
  "colorIndigoLighter": "Polaris-Icon--colorIndigoLighter",
  "colorIndigoLight": "Polaris-Icon--colorIndigoLight",
  "colorIndigo": "Polaris-Icon--colorIndigo",
  "colorIndigoDark": "Polaris-Icon--colorIndigoDark",
  "colorIndigoDarker": "Polaris-Icon--colorIndigoDarker",
  "colorTealLighter": "Polaris-Icon--colorTealLighter",
  "colorTealLight": "Polaris-Icon--colorTealLight",
  "colorTeal": "Polaris-Icon--colorTeal",
  "colorTealDark": "Polaris-Icon--colorTealDark",
  "colorTealDarker": "Polaris-Icon--colorTealDarker",
  "colorGreenLighter": "Polaris-Icon--colorGreenLighter",
  "colorGreen": "Polaris-Icon--colorGreen",
  "colorGreenDark": "Polaris-Icon--colorGreenDark",
  "colorYellowLighter": "Polaris-Icon--colorYellowLighter",
  "colorYellow": "Polaris-Icon--colorYellow",
  "colorYellowDark": "Polaris-Icon--colorYellowDark",
  "colorOrange": "Polaris-Icon--colorOrange",
  "colorOrangeDark": "Polaris-Icon--colorOrangeDark",
  "colorRedLighter": "Polaris-Icon--colorRedLighter",
  "colorRed": "Polaris-Icon--colorRed",
  "colorRedDark": "Polaris-Icon--colorRedDark",
  "colorPurple": "Polaris-Icon--colorPurple",
  "colorBase": "Polaris-Icon--colorBase",
  "colorSubdued": "Polaris-Icon--colorSubdued",
  "colorCritical": "Polaris-Icon--colorCritical",
  "colorWarning": "Polaris-Icon--colorWarning",
  "colorHighlight": "Polaris-Icon--colorHighlight",
  "colorSuccess": "Polaris-Icon--colorSuccess",
  "colorPrimary": "Polaris-Icon--colorPrimary",
  "Svg": "Polaris-Icon__Svg",
  "Img": "Polaris-Icon__Img",
  "Placeholder": "Polaris-Icon__Placeholder"
};

var COLORS_WITH_BACKDROPS = ['teal', 'tealDark', 'greenDark', 'redDark', 'yellowDark', 'ink', 'inkLighter'];
function Icon(_ref) {
  var source = _ref.source,
      color = _ref.color,
      backdrop = _ref.backdrop,
      accessibilityLabel = _ref.accessibilityLabel;
  var i18n = useI18n();

  var _useFeatures = useFeatures(),
      newDesignLanguage = _useFeatures.newDesignLanguage;

  var sourceType;

  if (typeof source === 'function') {
    sourceType = 'function';
  } else if (source === 'placeholder') {
    sourceType = 'placeholder';
  } else {
    sourceType = 'external';
  }

  if (color && backdrop && !COLORS_WITH_BACKDROPS.includes(color)) {
    // eslint-disable-next-line no-console
    console.warn(i18n.translate('Polaris.Icon.backdropWarning', {
      color,
      colorsWithBackDrops: COLORS_WITH_BACKDROPS.join(', ')
    }));
  }

  if (color && !newDesignLanguage && isNewDesignLanguageColor(color)) {
    // eslint-disable-next-line no-console
    console.warn('You have selected a color meant to be used in the new design language but new design language is not enabled.');
  }

  if (color && sourceType === 'external' && newDesignLanguage === true && isNewDesignLanguageColor(color)) {
    // eslint-disable-next-line no-console
    console.warn('Recoloring external SVGs is not supported with colors in the new design language. Set the intended color on your SVG instead.');
  }

  var className = classNames(styles$1.Icon, color && styles$1[variationName('color', color)], color && color !== 'white' && styles$1.isColored, backdrop && styles$1.hasBackdrop, newDesignLanguage && styles$1.newDesignLanguage);
  var SourceComponent = source;
  var contentMarkup = {
    function: /*#__PURE__*/React__default.createElement(SourceComponent, {
      className: styles$1.Svg,
      focusable: "false",
      "aria-hidden": "true"
    }),
    placeholder: /*#__PURE__*/React__default.createElement("div", {
      className: styles$1.Placeholder
    }),
    external: /*#__PURE__*/React__default.createElement("img", {
      className: styles$1.Img,
      src: "data:image/svg+xml;utf8,".concat(source),
      alt: "",
      "aria-hidden": "true"
    })
  };
  return /*#__PURE__*/React__default.createElement("span", {
    className: className,
    "aria-label": accessibilityLabel
  }, contentMarkup[sourceType]);
}

var styles$2 = {
  "VisuallyHidden": "Polaris-VisuallyHidden"
};

function VisuallyHidden(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React__default.createElement("span", {
    className: styles$2.VisuallyHidden
  }, children);
}

var styles$3 = {
  "Spinner": "Polaris-Spinner",
  "sizeSmall": "Polaris-Spinner--sizeSmall",
  "sizeLarge": "Polaris-Spinner--sizeLarge",
  "colorWhite": "Polaris-Spinner--colorWhite",
  "loading": "Polaris-Spinner--loading",
  "colorTeal": "Polaris-Spinner--colorTeal",
  "colorHighlight": "Polaris-Spinner--colorHighlight",
  "colorInkLightest": "Polaris-Spinner--colorInkLightest"
};

var COLORS_FOR_LARGE_SPINNER = ['teal', 'inkLightest', 'highlight'];
function Spinner(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'large' : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'teal' : _ref$color,
      accessibilityLabel = _ref.accessibilityLabel,
      hasFocusableParent = _ref.hasFocusableParent;

  var _useFeatures = useFeatures(),
      newDesignLanguage = _useFeatures.newDesignLanguage;

  var i18n = useI18n();
  var isAfterInitialMount = useIsAfterInitialMount();

  if (size === 'large' && !COLORS_FOR_LARGE_SPINNER.includes(color)) {
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.warn(i18n.translate('Polaris.Spinner.warningMessage', {
        color,
        size,
        colors: COLORS_FOR_LARGE_SPINNER.join(', ')
      }));
    } // eslint-disable-next-line no-param-reassign


    size = 'small';
  }

  var className = classNames(styles$3.Spinner, color && styles$3[variationName('color', color)], size && styles$3[variationName('size', size)], newDesignLanguage && styles$3.newDesignLanguage);
  var spinnerSVGMarkup = size === 'large' ? /*#__PURE__*/React__default.createElement("svg", {
    viewBox: "0 0 44 44",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M15.542 1.487A21.507 21.507 0 00.5 22c0 11.874 9.626 21.5 21.5 21.5 9.847 0 18.364-6.675 20.809-16.072a1.5 1.5 0 00-2.904-.756C37.803 34.755 30.473 40.5 22 40.5 11.783 40.5 3.5 32.217 3.5 22c0-8.137 5.3-15.247 12.942-17.65a1.5 1.5 0 10-.9-2.863z"
  })) : /*#__PURE__*/React__default.createElement("svg", {
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M7.229 1.173a9.25 9.25 0 1011.655 11.412 1.25 1.25 0 10-2.4-.698 6.75 6.75 0 11-8.506-8.329 1.25 1.25 0 10-.75-2.385z"
  }));
  var spanAttributes = Object.assign({}, !hasFocusableParent && {
    role: 'status'
  });
  var accessibilityLabelMarkup = (isAfterInitialMount || !hasFocusableParent) && /*#__PURE__*/React__default.createElement(VisuallyHidden, null, accessibilityLabel);
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("span", {
    className: className
  }, spinnerSVGMarkup), /*#__PURE__*/React__default.createElement("span", spanAttributes, accessibilityLabelMarkup));
}

var ThemeContext = React__default.createContext(undefined);

function useTheme() {
  var theme = useContext(ThemeContext);

  if (!theme) {
    throw new MissingAppProviderError('No Theme was provided.');
  }

  return theme;
}

function compose() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return fns.reduce(function (func, group) {
    return function () {
      return func(group.apply(void 0, arguments));
    };
  });
}

function rgbString(color) {
  var red = color.red,
      green = color.green,
      blue = color.blue;

  if ('alpha' in color) {
    return "rgba(".concat(red, ", ").concat(green, ", ").concat(blue, ", ").concat(color.alpha, ")");
  } else {
    return "rgb(".concat(red, ", ").concat(green, ", ").concat(blue, ")");
  }
}
var rgbaString = rgbString;
function rgbToHex(_ref) {
  var red = _ref.red,
      green = _ref.green,
      blue = _ref.blue;
  return "#".concat(componentToHex(red)).concat(componentToHex(green)).concat(componentToHex(blue));
}

function componentToHex(component) {
  var hex = component.toString(16);
  return hex.length === 1 ? "0".concat(hex) : hex;
}

function hsbToHex(color) {
  return rgbToHex(hsbToRgb(color));
}

function rgbFromHueAndChroma(hue, chroma) {
  var huePrime = hue / 60;
  var hueDelta = 1 - Math.abs(huePrime % 2 - 1);
  var intermediateValue = chroma * hueDelta;
  var red = 0;
  var green = 0;
  var blue = 0;

  if (huePrime >= 0 && huePrime <= 1) {
    red = chroma;
    green = intermediateValue;
    blue = 0;
  }

  if (huePrime >= 1 && huePrime <= 2) {
    red = intermediateValue;
    green = chroma;
    blue = 0;
  }

  if (huePrime >= 2 && huePrime <= 3) {
    red = 0;
    green = chroma;
    blue = intermediateValue;
  }

  if (huePrime >= 3 && huePrime <= 4) {
    red = 0;
    green = intermediateValue;
    blue = chroma;
  }

  if (huePrime >= 4 && huePrime <= 5) {
    red = intermediateValue;
    green = 0;
    blue = chroma;
  }

  if (huePrime >= 5 && huePrime <= 6) {
    red = chroma;
    green = 0;
    blue = intermediateValue;
  }

  return {
    red,
    green,
    blue
  };
}

function hsbToRgb(color) {
  var hue = color.hue,
      saturation = color.saturation,
      brightness = color.brightness,
      _color$alpha = color.alpha,
      alpha = _color$alpha === void 0 ? 1 : _color$alpha;
  var chroma = brightness * saturation;

  var _rgbFromHueAndChroma = rgbFromHueAndChroma(hue, chroma),
      red = _rgbFromHueAndChroma.red,
      green = _rgbFromHueAndChroma.green,
      blue = _rgbFromHueAndChroma.blue;

  var chromaBrightnessDelta = brightness - chroma;
  red += chromaBrightnessDelta;
  green += chromaBrightnessDelta;
  blue += chromaBrightnessDelta;
  return {
    red: Math.round(red * 255),
    green: Math.round(green * 255),
    blue: Math.round(blue * 255),
    alpha
  };
}
function hslToRgb(color) {
  var hue = color.hue,
      saturation = color.saturation,
      lightness = color.lightness,
      _color$alpha2 = color.alpha,
      alpha = _color$alpha2 === void 0 ? 1 : _color$alpha2;
  var chroma = (1 - Math.abs(2 * (lightness / 100) - 1)) * (saturation / 100);

  var _rgbFromHueAndChroma2 = rgbFromHueAndChroma(hue, chroma),
      red = _rgbFromHueAndChroma2.red,
      green = _rgbFromHueAndChroma2.green,
      blue = _rgbFromHueAndChroma2.blue;

  var lightnessVal = lightness / 100 - chroma / 2;
  red += lightnessVal;
  green += lightnessVal;
  blue += lightnessVal;
  return {
    red: Math.round(red * 255),
    green: Math.round(green * 255),
    blue: Math.round(blue * 255),
    alpha
  };
} // ref https://en.wikipedia.org/wiki/HSL_and_HSV

function rgbToHsbl(color) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'b';
  var r = color.red,
      g = color.green,
      b = color.blue,
      _color$alpha3 = color.alpha,
      alpha = _color$alpha3 === void 0 ? 1 : _color$alpha3;
  var red = r / 255;
  var green = g / 255;
  var blue = b / 255;
  var largestComponent = Math.max(red, green, blue);
  var smallestComponent = Math.min(red, green, blue);
  var delta = largestComponent - smallestComponent;
  var lightness = (largestComponent + smallestComponent) / 2;
  var saturation = 0;

  if (largestComponent === 0) {
    saturation = 0;
  } else if (type === 'b') {
    saturation = delta / largestComponent;
  } else if (type === 'l') {
    var baseSaturation = lightness > 0.5 ? delta / (2 - largestComponent - smallestComponent) : delta / (largestComponent + smallestComponent);
    saturation = isNaN(baseSaturation) ? 0 : baseSaturation;
  }

  var huePercentage = 0;

  switch (largestComponent) {
    case red:
      huePercentage = (green - blue) / delta + (green < blue ? 6 : 0);
      break;

    case green:
      huePercentage = (blue - red) / delta + 2;
      break;

    case blue:
      huePercentage = (red - green) / delta + 4;
  }

  var hue = Math.round(huePercentage / 6 * 360);
  return {
    hue: clamp$1(hue, 0, 360) || 0,
    saturation: parseFloat(clamp$1(saturation, 0, 1).toFixed(2)),
    brightness: parseFloat(clamp$1(largestComponent, 0, 1).toFixed(2)),
    lightness: parseFloat(lightness.toFixed(2)),
    alpha: parseFloat(alpha.toFixed(2))
  };
}

function rgbToHsb(color) {
  var _rgbToHsbl = rgbToHsbl(color, 'b'),
      hue = _rgbToHsbl.hue,
      saturation = _rgbToHsbl.saturation,
      brightness = _rgbToHsbl.brightness,
      _rgbToHsbl$alpha = _rgbToHsbl.alpha,
      alpha = _rgbToHsbl$alpha === void 0 ? 1 : _rgbToHsbl$alpha;

  return {
    hue,
    saturation,
    brightness,
    alpha
  };
}
function rgbToHsl(color) {
  var _rgbToHsbl2 = rgbToHsbl(color, 'l'),
      hue = _rgbToHsbl2.hue,
      rawSaturation = _rgbToHsbl2.saturation,
      rawLightness = _rgbToHsbl2.lightness,
      _rgbToHsbl2$alpha = _rgbToHsbl2.alpha,
      alpha = _rgbToHsbl2$alpha === void 0 ? 1 : _rgbToHsbl2$alpha;

  var saturation = rawSaturation * 100;
  var lightness = rawLightness * 100;
  return {
    hue,
    saturation,
    lightness,
    alpha
  };
}
function hexToRgb(color) {
  if (color.length === 4) {
    var repeatHex = function repeatHex(hex1, hex2) {
      return color.slice(hex1, hex2).repeat(2);
    };

    var _red = parseInt(repeatHex(1, 2), 16);

    var _green = parseInt(repeatHex(2, 3), 16);

    var _blue = parseInt(repeatHex(3, 4), 16);

    return {
      red: _red,
      green: _green,
      blue: _blue
    };
  }

  var red = parseInt(color.slice(1, 3), 16);
  var green = parseInt(color.slice(3, 5), 16);
  var blue = parseInt(color.slice(5, 7), 16);
  return {
    red,
    green,
    blue
  };
}
var ColorType;

(function (ColorType) {
  ColorType["Hex"] = "hex";
  ColorType["Rgb"] = "rgb";
  ColorType["Rgba"] = "rgba";
  ColorType["Hsl"] = "hsl";
  ColorType["Hsla"] = "hsla";
  ColorType["Default"] = "default";
})(ColorType || (ColorType = {}));

function getColorType(color) {
  if (color.includes('#')) {
    return ColorType.Hex;
  } else if (color.includes('rgb')) {
    return ColorType.Rgb;
  } else if (color.includes('rgba')) {
    return ColorType.Rgba;
  } else if (color.includes('hsl')) {
    return ColorType.Hsl;
  } else if (color.includes('hsla')) {
    return ColorType.Hsla;
  } else {
    if (process.env.NODE_ENV === 'development') {
      /* eslint-disable-next-line no-console */
      console.warn('Accepted colors formats are: hex, rgb, rgba, hsl and hsla');
    }

    return ColorType.Default;
  }
}

function hslToString(hslColor) {
  if (typeof hslColor === 'string') {
    return hslColor;
  }

  var _hslColor$alpha = hslColor.alpha,
      alpha = _hslColor$alpha === void 0 ? 1 : _hslColor$alpha,
      hue = hslColor.hue,
      lightness = hslColor.lightness,
      saturation = hslColor.saturation;
  return "hsla(".concat(hue, ", ").concat(saturation, "%, ").concat(lightness, "%, ").concat(alpha, ")");
}

function rgbToObject(color) {
  // eslint-disable-next-line @typescript-eslint/prefer-regexp-exec
  var colorMatch = color.match(/\(([^)]+)\)/);

  if (!colorMatch) {
    return {
      red: 0,
      green: 0,
      blue: 0,
      alpha: 0
    };
  }

  var _colorMatch$1$split = colorMatch[1].split(','),
      _colorMatch$1$split2 = _slicedToArray(_colorMatch$1$split, 4),
      red = _colorMatch$1$split2[0],
      green = _colorMatch$1$split2[1],
      blue = _colorMatch$1$split2[2],
      alpha = _colorMatch$1$split2[3];

  var objColor = {
    red: parseInt(red, 10),
    green: parseInt(green, 10),
    blue: parseInt(blue, 10),
    alpha: parseInt(alpha, 10) || 1
  };
  return objColor;
}

var hexToHsla = compose(rgbToHsl, hexToRgb);
var rbgStringToHsla = compose(rgbToHsl, rgbToObject);

function hslToObject(color) {
  // eslint-disable-next-line @typescript-eslint/prefer-regexp-exec
  var colorMatch = color.match(/\(([^)]+)\)/);

  if (!colorMatch) {
    return {
      hue: 0,
      saturation: 0,
      lightness: 0,
      alpha: 0
    };
  }

  var _colorMatch$1$split3 = colorMatch[1].split(','),
      _colorMatch$1$split4 = _slicedToArray(_colorMatch$1$split3, 4),
      hue = _colorMatch$1$split4[0],
      saturation = _colorMatch$1$split4[1],
      lightness = _colorMatch$1$split4[2],
      alpha = _colorMatch$1$split4[3];

  var objColor = {
    hue: parseInt(hue, 10),
    saturation: parseInt(saturation, 10),
    lightness: parseInt(lightness, 10),
    alpha: parseFloat(alpha) || 1
  };
  return objColor;
}

function colorToHsla(color) {
  var type = getColorType(color);

  switch (type) {
    case ColorType.Hex:
      return hexToHsla(color);

    case ColorType.Rgb:
    case ColorType.Rgba:
      return rbgStringToHsla(color);

    case ColorType.Hsla:
    case ColorType.Hsl:
      return hslToObject(color);

    case ColorType.Default:
    default:
      throw new Error('Accepted color formats are: hex, rgb, rgba, hsl and hsla');
  }
}

// implements: https://www.w3.org/WAI/ER/WD-AERT/#color-contrast
function isLight(_ref) {
  var red = _ref.red,
      green = _ref.green,
      blue = _ref.blue;
  var contrast = (red * 299 + green * 587 + blue * 114) / 1000;
  return contrast > 125;
}

function normalizeName(name) {
  return name.split(/(?=[A-Z])/).join('-').toLowerCase();
}
function constructColorName(baseName, property, suffix) {
  var name = normalizeName(baseName);
  var propertyName = property ? "-".concat(normalizeName(property)) : '';
  var constructedSuffix = suffix ? "-".concat(suffix) : '';
  return "--".concat(name).concat(propertyName).concat(constructedSuffix);
}

function lightenColor(color) {
  var lighten = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  if (typeof color === 'string') {
    return color;
  }

  var lightness = color.lightness;
  var nextLightness = lightness + lighten;
  return Object.assign(Object.assign({}, color), {
    lightness: clamp$1(nextLightness, 0, 100)
  });
}
function saturateColor(color) {
  var saturate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  if (typeof color === 'string') {
    return color;
  }

  var saturation = color.saturation;
  var nextSaturation = saturation + saturate;
  return Object.assign(Object.assign({}, color), {
    saturation: nextSaturation
  });
}
function createLightColor(color, lightness, saturation) {
  var lightenedColor = lightenColor(color, lightness);
  var saturatedColor = saturateColor(lightenedColor, -saturation);
  return saturatedColor;
}

var needsVariantList = ['topBar'];

function buildCustomProperties(themeConfig, newDesignLanguage, tokens) {
  var _themeConfig$colors = themeConfig.colors,
      colors = _themeConfig$colors === void 0 ? {} : _themeConfig$colors,
      colorScheme = themeConfig.colorScheme,
      config$1 = themeConfig.config,
      _themeConfig$frameOff = themeConfig.frameOffset,
      frameOffset = _themeConfig$frameOff === void 0 ? 0 : _themeConfig$frameOff;
  var mergedConfig = mergeConfigs(config, config$1 || {});
  return newDesignLanguage ? customPropertyTransformer(Object.assign(Object.assign(Object.assign({}, colorFactory(colors, colorScheme, mergedConfig)), tokens), {
    frameOffset: "".concat(frameOffset, "px")
  })) : Object.assign(Object.assign({}, buildLegacyColors(themeConfig)), customPropertyTransformer({
    frameOffset: "".concat(frameOffset, "px")
  }));
}
function buildThemeContext(themeConfig, cssCustomProperties) {
  var logo = themeConfig.logo,
      _themeConfig$colors2 = themeConfig.colors,
      colors = _themeConfig$colors2 === void 0 ? {} : _themeConfig$colors2,
      colorScheme = themeConfig.colorScheme;

  var topBar = colors.topBar,
      newDesignLanguageColors = __rest(colors, ["topBar"]);

  return {
    logo,
    cssCustomProperties: toString(cssCustomProperties),
    colors: newDesignLanguageColors,
    colorScheme
  };
}

function toString(obj) {
  if (obj) {
    return Object.entries(obj).map(function (pair) {
      return pair.join(':');
    }).join(';');
  } else {
    return undefined;
  }
}

function customPropertyTransformer(properties) {
  return Object.entries(properties).reduce(function (transformed, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    return Object.assign(Object.assign({}, transformed), {
      [toCssCustomPropertySyntax(key)]: value
    });
  }, {});
}

function toCssCustomPropertySyntax(camelCase) {
  return "--p-".concat(camelCase.replace(/([A-Z0-9])/g, '-$1').toLowerCase());
}

function buildLegacyColors(theme) {
  var colorPairs;
  var colors = theme && theme.colors && theme.colors.topBar ? theme.colors.topBar : {
    background: '#00848e',
    backgroundLighter: '#1d9ba4',
    color: '#f9fafb'
  };
  var colorKey = 'topBar';
  var colorKeys = Object.keys(colors);

  if (colorKeys.length > 1) {
    colorPairs = colorKeys.map(function (key) {
      return [constructColorName(colorKey, key), colors[key]];
    });
  } else {
    colorPairs = parseColors([colorKey, colors]);
  }

  return colorPairs.reduce(function (state, _ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        key = _ref4[0],
        value = _ref4[1];

    return Object.assign(Object.assign({}, state), {
      [key]: value
    });
  }, {});
}

function needsVariant(name) {
  return needsVariantList.includes(name);
}
var lightenToString = compose(hslToString, createLightColor);
function setTextColor(name) {
  var variant = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'dark';

  if (variant === 'light') {
    return [name, tokens.colorInk];
  }

  return [name, tokens.colorWhite];
}
function setBorderColor(name) {
  var variant = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'dark';

  if (variant === 'light') {
    return [name, tokens.colorInkLighter];
  }

  return [name, tokens.colorSkyDark];
}
function setTheme(color, baseName, key, variant) {
  var colorPairs = [];

  switch (variant) {
    case 'light':
      colorPairs.push(setTextColor(constructColorName(baseName, null, 'color'), 'light'));
      colorPairs.push(setBorderColor(constructColorName(baseName, null, 'border'), 'light'));
      colorPairs.push([constructColorName(baseName, key, 'lighter'), lightenToString(color, 7, -10)]);
      break;

    case 'dark':
      colorPairs.push(setTextColor(constructColorName(baseName, null, 'color'), 'dark'));
      colorPairs.push(setBorderColor(constructColorName(baseName, null, 'border'), 'dark'));
      colorPairs.push([constructColorName(baseName, key, 'lighter'), lightenToString(color, 15, 15)]);
      break;
  }

  return colorPairs;
}

function parseColors(_ref5) {
  var _ref6 = _slicedToArray(_ref5, 2),
      baseName = _ref6[0],
      colors = _ref6[1];

  var keys = Object.keys(colors);
  var colorPairs = [];

  for (var _i = 0, _keys = keys; _i < _keys.length; _i++) {
    var key = _keys[_i];
    colorPairs.push([constructColorName(baseName, key), colors[key]]);

    if (needsVariant(baseName)) {
      var hslColor = colorToHsla(colors[key]);

      if (typeof hslColor === 'string') {
        return colorPairs;
      }

      var rgbColor = hslToRgb(hslColor);

      if (isLight(rgbColor)) {
        colorPairs.push.apply(colorPairs, _toConsumableArray(setTheme(hslColor, baseName, key, 'light')));
      } else {
        colorPairs.push.apply(colorPairs, _toConsumableArray(setTheme(hslColor, baseName, key, 'dark')));
      }
    }
  }

  return colorPairs;
}

var BorderRadius = {
  borderRadiusBase: rem('4px'),
  borderRadiusWide: rem('8px')
};
var Shadow = {
  cardShadow: '0px 0px 5px var(--p-shadow-from-ambient-light), 0px 1px 2px var(--p-shadow-from-direct-light)',
  popoverShadow: '-1px 0px 20px var(--p-shadow-from-ambient-light), 0px 1px 5px var(--p-shadow-from-direct-light)',
  modalShadow: '0px 26px 80px var(--p-shadow-from-dim-light), 0px 0px 1px var(--p-shadow-from-dim-light)',
  topBarShadow: '0 2px 2px -1px var(--p-shadow-from-direct-light)'
};
var Overrides = {
  overrideNone: 'none',
  overrideTransparent: 'transparent',
  overrideOne: '1',
  overrideVisible: 'visible',
  overrideZero: '0',
  overrideLoadingZIndex: '514',
  buttonFontWeight: '500',
  nonNullContent: "''",
  choiceSize: rem('20px'),
  iconSize: rem('10px'),
  choiceMargin: rem('1px'),
  controlBorderWidth: rem('2px'),
  bannerBorderDefault: buildBannerBorder('--p-border-neutral-subdued'),
  bannerBorderSuccess: buildBannerBorder('--p-border-success-subdued'),
  bannerBorderHighlight: buildBannerBorder('--p-border-highlight-subdued'),
  bannerBorderWarning: buildBannerBorder('--p-border-warning-subdued'),
  bannerBorderCritical: buildBannerBorder('--p-border-critical-subdued'),
  badgeMixBlendMode: 'luminosity',
  thinBorderSubdued: "".concat(rem('1px'), " solid var(--p-border-subdued)"),
  textFieldSpinnerOffset: rem('2px'),
  textFieldFocusRingOffset: rem('-4px'),
  textFieldFocusRingBorderRadius: rem('7px'),
  buttonGroupItemSpacing: rem('2px'),
  topBarHeight: '68px',
  contextualSaveBarHeight: '64px',
  duration100: '100ms',
  duration150: '150ms',
  easeIn: 'cubic-bezier(0.5, 0.1, 1, 1)',
  ease: 'cubic-bezier(0.4, 0.22, 0.28, 1)',
  rangeSliderThumbSizeBase: rem('16px'),
  rangeSliderThumbSizeActive: rem('24px'),
  rangeSliderThumbScale: '1.5',
  badgeFontWeight: '500'
};
var Tokens = Object.assign(Object.assign(Object.assign({}, BorderRadius), Shadow), Overrides);

function rem(px) {
  var baseFontSize = 10;
  return "".concat(parseInt(px, 10) / baseFontSize, "rem");
}

function buildBannerBorder(cssVar) {
  return "inset 0 ".concat(rem('1px'), " 0 0 var(").concat(cssVar, "), inset 0 0 0 ").concat(rem('1px'), " var(").concat(cssVar, ")");
}

var getUniqueID = createUniqueIDFactory('portal-');
var Portal = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Portal, _React$PureComponent);

  var _super = _createSuper(Portal);

  function Portal() {
    var _this;

    _classCallCheck(this, Portal);

    _this = _super.apply(this, arguments);
    _this.state = {
      isMounted: false
    };
    _this.portalNode = null;
    _this.portalId = _this.props.idPrefix !== '' ? "".concat(_this.props.idPrefix, "-").concat(getUniqueID()) : getUniqueID();
    return _this;
  }

  _createClass(Portal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.portalNode = document.createElement('div');
      this.portalNode.setAttribute(portal.props[0], this.portalId);

      if (this.context != null) {
        var cssCustomProperties = this.context.cssCustomProperties;

        if (cssCustomProperties != null) {
          this.portalNode.setAttribute('style', cssCustomProperties);
        } else {
          this.portalNode.removeAttribute('style');
        }
      }

      document.body.appendChild(this.portalNode);
      this.setState({
        isMounted: true
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_, prevState) {
      var _this$props$onPortalC = this.props.onPortalCreated,
          onPortalCreated = _this$props$onPortalC === void 0 ? noop : _this$props$onPortalC;

      if (this.portalNode && this.context != null) {
        var _this$context = this.context,
            cssCustomProperties = _this$context.cssCustomProperties,
            textColor = _this$context.textColor;

        if (cssCustomProperties != null) {
          var style = "".concat(cssCustomProperties, ";color:").concat(textColor, ";");
          this.portalNode.setAttribute('style', style);
        } else {
          this.portalNode.removeAttribute('style');
        }
      }

      if (!prevState.isMounted && this.state.isMounted) {
        onPortalCreated();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.portalNode) {
        document.body.removeChild(this.portalNode);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return this.portalNode && this.state.isMounted ? /*#__PURE__*/createPortal(this.props.children, this.portalNode) : null;
    }
  }]);

  return Portal;
}(React__default.PureComponent);
Portal.defaultProps = {
  idPrefix: ''
};
Portal.contextType = ThemeContext;

function noop() {}

var UniqueIdFactoryContext = React__default.createContext(undefined);

/**
 * Returns a unique id that remains consistent across multiple re-renders of the
 * same hook
 * @param prefix Defines a prefix for the ID. You probably want to set this to
 *   the name of the component you're calling `useUniqueId` in.
 * @param overrideId Defines a fixed value to use instead of generating a unique
 *   ID. Useful for components that allow consumers to specify their own ID.
 */

function useUniqueId() {
  var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var overrideId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var idFactory = useContext(UniqueIdFactoryContext); // By using a ref to store the uniqueId for each invocation of the hook and
  // checking that it is not already populated we ensure that we don’t generate
  // a new ID on every re-render of a component.

  var uniqueIdRef = useRef(null);

  if (!idFactory) {
    throw new MissingAppProviderError('No UniqueIdFactory was provided.');
  } // If an override was specified, then use that instead of using a unique ID
  // Hooks can’t be called conditionally so this has to go after all use* calls


  if (overrideId) {
    return overrideId;
  } // If a unique id has not yet been generated, then get a new one


  if (!uniqueIdRef.current) {
    uniqueIdRef.current = idFactory.nextId(prefix);
  }

  return uniqueIdRef.current;
}

var UniqueIdFactory = /*#__PURE__*/function () {
  function UniqueIdFactory(idGeneratorFactory) {
    _classCallCheck(this, UniqueIdFactory);

    this.idGenerators = {};
    this.idGeneratorFactory = idGeneratorFactory;
  }

  _createClass(UniqueIdFactory, [{
    key: "nextId",
    value: function nextId(prefix) {
      if (!this.idGenerators[prefix]) {
        this.idGenerators[prefix] = this.idGeneratorFactory(prefix);
      }

      return this.idGenerators[prefix]();
    }
  }]);

  return UniqueIdFactory;
}();
function globalIdGeneratorFactory() {
  var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var index = 1;
  return function () {
    return "Polaris".concat(prefix).concat(index++);
  };
}

// `Component`. If `props` is passed, those will be added as props on the
// wrapped component. If `element` is null, the component is not wrapped.

function wrapWithComponent(element, Component, props) {
  if (element == null) {
    return null;
  }

  return isElementOfType(element, Component) ? element : /*#__PURE__*/React__default.createElement(Component, props, element);
} // In development, we compare based on the name of the function because
// React Hot Loader proxies React components in order to make updates. In
// production we can simply compare the components for equality.

var isComponent = process.env.NODE_ENV === 'development' ? hotReloadComponentCheck : function (AComponent, AnotherComponent) {
  return AComponent === AnotherComponent;
}; // Checks whether `element` is a React element of type `Component` (or one of
// the passed components, if `Component` is an array of React components).

function isElementOfType(element, Component) {
  if (element == null || ! /*#__PURE__*/React__default.isValidElement(element) || typeof element.type === 'string') {
    return false;
  }

  var type = element.type;
  var Components = Array.isArray(Component) ? Component : [Component];
  return Components.some(function (AComponent) {
    return typeof type !== 'string' && isComponent(AComponent, type);
  });
} // Returns all children that are valid elements as an array. Can optionally be
// filtered by passing `predicate`.

function elementChildren(children) {
  var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
    return true;
  };
  return React__default.Children.toArray(children).filter(function (child) {
    return /*#__PURE__*/React__default.isValidElement(child) && predicate(child);
  });
}
function ConditionalWrapper(_ref) {
  var condition = _ref.condition,
      wrapper = _ref.wrapper,
      children = _ref.children;
  return condition ? wrapper(children) : children;
}
function ConditionalRender(_ref2) {
  var condition = _ref2.condition,
      children = _ref2.children;
  return condition ? children : null;
}

function hotReloadComponentCheck(AComponent, AnotherComponent) {
  var componentName = AComponent.name;
  var anotherComponentName = AnotherComponent.displayName;
  return AComponent === AnotherComponent || Boolean(componentName) && componentName === anotherComponentName;
}

var StickyManagerContext = React__default.createContext(undefined);

function useStickyManager() {
  var stickyManager = useContext(StickyManagerContext);

  if (!stickyManager) {
    throw new MissingAppProviderError('No StickyManager was provided.');
  }

  return stickyManager;
}

var Breakpoints = {
  navigationBarCollapsed: '768px',
  stackedContent: '1043px'
};
var noWindowMatches = {
  media: '',
  addListener: noop$1,
  removeListener: noop$1,
  matches: false,
  onchange: noop$1,
  addEventListener: noop$1,
  removeEventListener: noop$1,
  dispatchEvent: function dispatchEvent(_) {
    return true;
  }
};

function noop$1() {}

function navigationBarCollapsed() {
  return typeof window === 'undefined' ? noWindowMatches : window.matchMedia("(max-width: ".concat(Breakpoints.navigationBarCollapsed, ")"));
}
function stackedContent() {
  return typeof window === 'undefined' ? noWindowMatches : window.matchMedia("(max-width: ".concat(Breakpoints.stackedContent, ")"));
}

var StickyManager = /*#__PURE__*/function () {
  function StickyManager(container) {
    var _this = this;

    _classCallCheck(this, StickyManager);

    this.stickyItems = [];
    this.stuckItems = [];
    this.container = null;
    this.topBarOffset = 0;
    this.handleResize = debounce(function () {
      _this.manageStickyItems();
    }, 40, {
      leading: true,
      trailing: true,
      maxWait: 40
    });
    this.handleScroll = debounce(function () {
      _this.manageStickyItems();
    }, 40, {
      leading: true,
      trailing: true,
      maxWait: 40
    });

    if (container) {
      this.setContainer(container);
    }
  }

  _createClass(StickyManager, [{
    key: "registerStickyItem",
    value: function registerStickyItem(stickyItem) {
      this.stickyItems.push(stickyItem);
    }
  }, {
    key: "unregisterStickyItem",
    value: function unregisterStickyItem(nodeToRemove) {
      var nodeIndex = this.stickyItems.findIndex(function (_ref) {
        var stickyNode = _ref.stickyNode;
        return nodeToRemove === stickyNode;
      });
      this.stickyItems.splice(nodeIndex, 1);
    }
  }, {
    key: "setContainer",
    value: function setContainer(el) {
      this.container = el;

      if (isDocument(el)) {
        this.setTopBarOffset(el);
      }

      addEventListener(this.container, 'scroll', this.handleScroll);
      addEventListener(window, 'resize', this.handleResize);
      this.manageStickyItems();
    }
  }, {
    key: "removeScrollListener",
    value: function removeScrollListener() {
      if (this.container) {
        removeEventListener(this.container, 'scroll', this.handleScroll);
        removeEventListener(window, 'resize', this.handleResize);
      }
    }
  }, {
    key: "manageStickyItems",
    value: function manageStickyItems() {
      var _this2 = this;

      if (this.stickyItems.length <= 0) {
        return;
      }

      var scrollTop = this.container ? scrollTopFor(this.container) : 0;
      var containerTop = getRectForNode(this.container).top + this.topBarOffset;
      this.stickyItems.forEach(function (stickyItem) {
        var handlePositioning = stickyItem.handlePositioning;

        var _this2$evaluateSticky = _this2.evaluateStickyItem(stickyItem, scrollTop, containerTop),
            sticky = _this2$evaluateSticky.sticky,
            top = _this2$evaluateSticky.top,
            left = _this2$evaluateSticky.left,
            width = _this2$evaluateSticky.width;

        _this2.updateStuckItems(stickyItem, sticky);

        handlePositioning(sticky, top, left, width);
      });
    }
  }, {
    key: "evaluateStickyItem",
    value: function evaluateStickyItem(stickyItem, scrollTop, containerTop) {
      var stickyNode = stickyItem.stickyNode,
          placeHolderNode = stickyItem.placeHolderNode,
          boundingElement = stickyItem.boundingElement,
          offset = stickyItem.offset,
          disableWhenStacked = stickyItem.disableWhenStacked;

      if (disableWhenStacked && stackedContent().matches) {
        return {
          sticky: false,
          top: 0,
          left: 0,
          width: 'auto'
        };
      }

      var stickyOffset = offset ? this.getOffset(stickyNode) + parseInt(tokens.spacingLoose, 10) : this.getOffset(stickyNode);
      var scrollPosition = scrollTop + stickyOffset;
      var placeHolderNodeCurrentTop = placeHolderNode.getBoundingClientRect().top - containerTop + scrollTop;
      var top = containerTop + stickyOffset;
      var width = placeHolderNode.getBoundingClientRect().width;
      var left = placeHolderNode.getBoundingClientRect().left;
      var sticky;

      if (boundingElement == null) {
        sticky = scrollPosition >= placeHolderNodeCurrentTop;
      } else {
        var stickyItemHeight = stickyNode.getBoundingClientRect().height;
        var stickyItemBottomPosition = boundingElement.getBoundingClientRect().bottom - stickyItemHeight + scrollTop - containerTop;
        sticky = scrollPosition >= placeHolderNodeCurrentTop && scrollPosition < stickyItemBottomPosition;
      }

      return {
        sticky,
        top,
        left,
        width
      };
    }
  }, {
    key: "updateStuckItems",
    value: function updateStuckItems(item, sticky) {
      var stickyNode = item.stickyNode;

      if (sticky && !this.isNodeStuck(stickyNode)) {
        this.addStuckItem(item);
      } else if (!sticky && this.isNodeStuck(stickyNode)) {
        this.removeStuckItem(item);
      }
    }
  }, {
    key: "addStuckItem",
    value: function addStuckItem(stickyItem) {
      this.stuckItems.push(stickyItem);
    }
  }, {
    key: "removeStuckItem",
    value: function removeStuckItem(stickyItem) {
      var nodeToRemove = stickyItem.stickyNode;
      var nodeIndex = this.stuckItems.findIndex(function (_ref2) {
        var stickyNode = _ref2.stickyNode;
        return nodeToRemove === stickyNode;
      });
      this.stuckItems.splice(nodeIndex, 1);
    }
  }, {
    key: "getOffset",
    value: function getOffset(node) {
      if (this.stuckItems.length === 0) {
        return 0;
      }

      var offset = 0;
      var count = 0;
      var stuckNodesLength = this.stuckItems.length;
      var nodeRect = getRectForNode(node);

      while (count < stuckNodesLength) {
        var stuckNode = this.stuckItems[count].stickyNode;

        if (stuckNode !== node) {
          var stuckNodeRect = getRectForNode(stuckNode);

          if (!horizontallyOverlaps(nodeRect, stuckNodeRect)) {
            offset += getRectForNode(stuckNode).height;
          }
        } else {
          break;
        }

        count++;
      }

      return offset;
    }
  }, {
    key: "isNodeStuck",
    value: function isNodeStuck(node) {
      var nodeFound = this.stuckItems.findIndex(function (_ref3) {
        var stickyNode = _ref3.stickyNode;
        return node === stickyNode;
      });
      return nodeFound >= 0;
    }
  }, {
    key: "setTopBarOffset",
    value: function setTopBarOffset(container) {
      var topbarElement = container.querySelector(":not(".concat(scrollable.selector, ") ").concat(dataPolarisTopBar.selector));
      this.topBarOffset = topbarElement ? topbarElement.clientHeight : 0;
    }
  }]);

  return StickyManager;
}();

function isDocument(node) {
  return node === document;
}

function scrollTopFor(container) {
  return isDocument(container) ? document.body.scrollTop || document.documentElement.scrollTop : container.scrollTop;
}

function horizontallyOverlaps(rect1, rect2) {
  var rect1Left = rect1.left;
  var rect1Right = rect1.left + rect1.width;
  var rect2Left = rect2.left;
  var rect2Right = rect2.left + rect2.width;
  return rect2Right < rect1Left || rect1Right < rect2Left;
}

var ScrollableContext = React__default.createContext(undefined);

function ScrollTo() {
  var anchorNode = useRef(null);
  var scrollToPosition = useContext(ScrollableContext);
  useEffect(function () {
    if (!scrollToPosition || !anchorNode.current) {
      return;
    }

    scrollToPosition(anchorNode.current.offsetTop);
  }, [scrollToPosition]);
  var id = useUniqueId("ScrollTo"); // eslint-disable-next-line jsx-a11y/anchor-is-valid

  return /*#__PURE__*/React__default.createElement("a", {
    id: id,
    ref: anchorNode
  });
}

var styles$4 = {
  "Scrollable": "Polaris-Scrollable",
  "horizontal": "Polaris-Scrollable--horizontal",
  "vertical": "Polaris-Scrollable--vertical",
  "verticalHasScrolling": "Polaris-Scrollable--verticalHasScrolling",
  "hasTopShadow": "Polaris-Scrollable--hasTopShadow",
  "hasBottomShadow": "Polaris-Scrollable--hasBottomShadow"
};

var MAX_SCROLL_DISTANCE = 100;
var DELTA_THRESHOLD = 0.2;
var DELTA_PERCENTAGE = 0.2;
var EVENTS_TO_LOCK = ['scroll', 'touchmove', 'wheel'];
var PREFERS_REDUCED_MOTION = prefersReducedMotion();
var Scrollable = /*#__PURE__*/function (_React$Component) {
  _inherits(Scrollable, _React$Component);

  var _super = _createSuper(Scrollable);

  function Scrollable() {
    var _this;

    _classCallCheck(this, Scrollable);

    _this = _super.apply(this, arguments);
    _this.state = {
      topShadow: false,
      bottomShadow: false,
      scrollPosition: 0,
      canScroll: false
    };
    _this.stickyManager = new StickyManager();
    _this.scrollArea = null;
    _this.handleResize = debounce(function () {
      _this.handleScroll();
    }, 50, {
      trailing: true
    });

    _this.setScrollArea = function (scrollArea) {
      _this.scrollArea = scrollArea;
    };

    _this.handleScroll = function () {
      var _assertThisInitialize = _assertThisInitialized(_this),
          scrollArea = _assertThisInitialize.scrollArea;

      var _this$props = _this.props,
          shadow = _this$props.shadow,
          onScrolledToBottom = _this$props.onScrolledToBottom;

      if (scrollArea == null) {
        return;
      }

      var scrollTop = scrollArea.scrollTop,
          clientHeight = scrollArea.clientHeight,
          scrollHeight = scrollArea.scrollHeight;
      var shouldBottomShadow = Boolean(shadow && !(scrollTop + clientHeight >= scrollHeight));
      var shouldTopShadow = Boolean(shadow && scrollTop > 0);
      var canScroll = scrollHeight > clientHeight;
      var hasScrolledToBottom = scrollHeight - scrollTop === clientHeight;

      if (canScroll && hasScrolledToBottom && onScrolledToBottom) {
        onScrolledToBottom();
      }

      _this.setState({
        topShadow: shouldTopShadow,
        bottomShadow: shouldBottomShadow,
        scrollPosition: scrollTop,
        canScroll
      });
    };

    _this.scrollHint = function () {
      var _assertThisInitialize2 = _assertThisInitialized(_this),
          scrollArea = _assertThisInitialize2.scrollArea;

      if (scrollArea == null) {
        return;
      }

      var clientHeight = scrollArea.clientHeight,
          scrollHeight = scrollArea.scrollHeight;

      if (PREFERS_REDUCED_MOTION || _this.state.scrollPosition > 0 || scrollHeight <= clientHeight) {
        return;
      }

      var scrollDistance = scrollHeight - clientHeight;

      _this.toggleLock();

      _this.setState({
        scrollPosition: scrollDistance > MAX_SCROLL_DISTANCE ? MAX_SCROLL_DISTANCE : scrollDistance
      }, function () {
        window.requestAnimationFrame(_this.scrollStep);
      });
    };

    _this.scrollStep = function () {
      _this.setState(function (_ref) {
        var scrollPosition = _ref.scrollPosition;
        var delta = scrollPosition * DELTA_PERCENTAGE;
        return {
          scrollPosition: delta < DELTA_THRESHOLD ? 0 : scrollPosition - delta
        };
      }, function () {
        if (_this.state.scrollPosition > 0) {
          window.requestAnimationFrame(_this.scrollStep);
        } else {
          _this.toggleLock(false);
        }
      });
    };

    _this.scrollToPosition = function (scrollY) {
      _this.setState({
        scrollPosition: scrollY
      });
    };

    return _this;
  }

  _createClass(Scrollable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (this.scrollArea == null) {
        return;
      }

      this.stickyManager.setContainer(this.scrollArea);
      addEventListener(this.scrollArea, 'scroll', function () {
        window.requestAnimationFrame(_this2.handleScroll);
      });
      addEventListener(window, 'resize', this.handleResize);
      window.requestAnimationFrame(function () {
        _this2.handleScroll();

        if (_this2.props.hint) {
          _this2.scrollHint();
        }
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.scrollArea == null) {
        return;
      }

      removeEventListener(this.scrollArea, 'scroll', this.handleScroll);
      removeEventListener(window, 'resize', this.handleResize);
      this.stickyManager.removeScrollListener();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var scrollPosition = this.state.scrollPosition;

      if (scrollPosition && this.scrollArea && scrollPosition > 0) {
        this.scrollArea.scrollTop = scrollPosition;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          topShadow = _this$state.topShadow,
          bottomShadow = _this$state.bottomShadow,
          canScroll = _this$state.canScroll;

      var _a = this.props,
          children = _a.children,
          className = _a.className,
          horizontal = _a.horizontal,
          _a$vertical = _a.vertical,
          vertical = _a$vertical === void 0 ? true : _a$vertical,
          shadow = _a.shadow,
          hint = _a.hint,
          onScrolledToBottom = _a.onScrolledToBottom,
          rest = __rest(_a, ["children", "className", "horizontal", "vertical", "shadow", "hint", "onScrolledToBottom"]);

      var finalClassName = classNames(className, styles$4.Scrollable, vertical && styles$4.vertical, horizontal && styles$4.horizontal, topShadow && styles$4.hasTopShadow, bottomShadow && styles$4.hasBottomShadow, vertical && canScroll && styles$4.verticalHasScrolling);
      return /*#__PURE__*/React__default.createElement(ScrollableContext.Provider, {
        value: this.scrollToPosition
      }, /*#__PURE__*/React__default.createElement(StickyManagerContext.Provider, {
        value: this.stickyManager
      }, /*#__PURE__*/React__default.createElement("div", Object.assign({
        className: finalClassName
      }, scrollable.props, rest, {
        ref: this.setScrollArea
      }), children)));
    }
  }, {
    key: "toggleLock",
    value: function toggleLock() {
      var shouldLock = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var scrollArea = this.scrollArea;

      if (scrollArea == null) {
        return;
      }

      EVENTS_TO_LOCK.forEach(function (eventName) {
        if (shouldLock) {
          addEventListener(scrollArea, eventName, prevent);
        } else {
          removeEventListener(scrollArea, eventName, prevent);
        }
      });
    }
  }], [{
    key: "forNode",
    value: function forNode(node) {
      var closestElement = closest(node, scrollable.selector);
      return closestElement instanceof HTMLElement ? closestElement : document;
    }
  }]);

  return Scrollable;
}(React__default.Component);
Scrollable.ScrollTo = ScrollTo;

function prevent(evt) {
  evt.preventDefault();
}

function prefersReducedMotion() {
  try {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  } catch (err) {
    return false;
  }
}

var styles$5 = {
  "Popover": "Polaris-Popover",
  "PopoverOverlay": "Polaris-Popover__PopoverOverlay",
  "PopoverOverlay-entering": "Polaris-Popover__PopoverOverlay--entering",
  "PopoverOverlay-open": "Polaris-Popover__PopoverOverlay--open",
  "PopoverOverlay-exiting": "Polaris-Popover__PopoverOverlay--exiting",
  "measuring": "Polaris-Popover--measuring",
  "fullWidth": "Polaris-Popover--fullWidth",
  "Content": "Polaris-Popover__Content",
  "positionedAbove": "Polaris-Popover--positionedAbove",
  "Wrapper": "Polaris-Popover__Wrapper",
  "Content-fullHeight": "Polaris-Popover__Content--fullHeight",
  "Content-fluidContent": "Polaris-Popover__Content--fluidContent",
  "Pane": "Polaris-Popover__Pane",
  "Pane-fixed": "Polaris-Popover__Pane--fixed",
  "Section": "Polaris-Popover__Section",
  "FocusTracker": "Polaris-Popover__FocusTracker"
};

function Section(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React__default.createElement("div", {
    className: styles$5.Section
  }, children);
}

function Pane(_ref) {
  var fixed = _ref.fixed,
      sectioned = _ref.sectioned,
      children = _ref.children,
      onScrolledToBottom = _ref.onScrolledToBottom;
  var className = classNames(styles$5.Pane, fixed && styles$5['Pane-fixed']);
  var content = sectioned ? wrapWithComponent(children, Section, {}) : children;
  return fixed ? /*#__PURE__*/React__default.createElement("div", {
    className: className
  }, content) : /*#__PURE__*/React__default.createElement(Scrollable, {
    hint: true,
    shadow: true,
    className: className,
    onScrolledToBottom: onScrolledToBottom
  }, content);
}

var EventListener = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(EventListener, _React$PureComponent);

  var _super = _createSuper(EventListener);

  function EventListener() {
    _classCallCheck(this, EventListener);

    return _super.apply(this, arguments);
  }

  _createClass(EventListener, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.attachListener();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_a) {
      var passive = _a.passive,
          detachProps = __rest(_a, ["passive"]);

      this.detachListener(detachProps);
      this.attachListener();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.detachListener();
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }, {
    key: "attachListener",
    value: function attachListener() {
      var _this$props = this.props,
          event = _this$props.event,
          handler = _this$props.handler,
          capture = _this$props.capture,
          passive = _this$props.passive;
      addEventListener(window, event, handler, {
        capture,
        passive
      });
    }
  }, {
    key: "detachListener",
    value: function detachListener(prevProps) {
      var _ref = prevProps || this.props,
          event = _ref.event,
          handler = _ref.handler,
          capture = _ref.capture;

      removeEventListener(window, event, handler, capture);
    }
  }]);

  return EventListener;
}(React__default.PureComponent);

function KeypressListener(_ref) {
  var keyCode = _ref.keyCode,
      handler = _ref.handler,
      _ref$keyEvent = _ref.keyEvent,
      keyEvent = _ref$keyEvent === void 0 ? 'keyup' : _ref$keyEvent;

  var handleKeyEvent = function handleKeyEvent(event) {
    if (event.keyCode === keyCode) {
      handler(event);
    }
  };

  useEffect(function () {
    addEventListener(document, keyEvent, handleKeyEvent);
    return function () {
      removeEventListener(document, keyEvent, handleKeyEvent);
    };
  });
  return null;
}

function calculateVerticalPosition(activatorRect, overlayRect, overlayMargins, scrollableContainerRect, containerRect, preferredPosition, fixed) {
  var activatorTop = activatorRect.top;
  var activatorBottom = activatorTop + activatorRect.height;
  var spaceAbove = activatorRect.top;
  var spaceBelow = containerRect.height - activatorRect.top - activatorRect.height;
  var desiredHeight = overlayRect.height;
  var verticalMargins = overlayMargins.activator + overlayMargins.container;
  var minimumSpaceToScroll = overlayMargins.container;
  var distanceToTopScroll = activatorRect.top - Math.max(scrollableContainerRect.top, 0);
  var distanceToBottomScroll = containerRect.top + Math.min(containerRect.height, scrollableContainerRect.top + scrollableContainerRect.height) - (activatorRect.top + activatorRect.height);
  var enoughSpaceFromTopScroll = distanceToTopScroll >= minimumSpaceToScroll;
  var enoughSpaceFromBottomScroll = distanceToBottomScroll >= minimumSpaceToScroll;
  var heightIfBelow = Math.min(spaceBelow, desiredHeight);
  var heightIfAbove = Math.min(spaceAbove, desiredHeight);
  var containerRectTop = fixed ? 0 : containerRect.top;
  var positionIfAbove = {
    height: heightIfAbove - verticalMargins,
    top: activatorTop + containerRectTop - heightIfAbove,
    positioning: 'above'
  };
  var positionIfBelow = {
    height: heightIfBelow - verticalMargins,
    top: activatorBottom + containerRectTop,
    positioning: 'below'
  };

  if (preferredPosition === 'above') {
    return (enoughSpaceFromTopScroll || distanceToTopScroll >= distanceToBottomScroll && !enoughSpaceFromBottomScroll) && (spaceAbove > desiredHeight || spaceAbove > spaceBelow) ? positionIfAbove : positionIfBelow;
  }

  if (preferredPosition === 'below') {
    return (enoughSpaceFromBottomScroll || distanceToBottomScroll >= distanceToTopScroll && !enoughSpaceFromTopScroll) && (spaceBelow > desiredHeight || spaceBelow > spaceAbove) ? positionIfBelow : positionIfAbove;
  }

  if (enoughSpaceFromTopScroll && enoughSpaceFromBottomScroll) {
    return spaceAbove > spaceBelow ? positionIfAbove : positionIfBelow;
  }

  return distanceToTopScroll > minimumSpaceToScroll ? positionIfAbove : positionIfBelow;
}
function calculateHorizontalPosition(activatorRect, overlayRect, containerRect, overlayMargins, preferredAlignment) {
  var maximum = containerRect.width - overlayRect.width;

  if (preferredAlignment === 'left') {
    return Math.min(maximum, Math.max(0, activatorRect.left - overlayMargins.horizontal));
  } else if (preferredAlignment === 'right') {
    var activatorRight = containerRect.width - (activatorRect.left + activatorRect.width);
    return Math.min(maximum, Math.max(0, activatorRight - overlayMargins.horizontal));
  }

  return Math.min(maximum, Math.max(0, activatorRect.center.x - overlayRect.width / 2));
}
function rectIsOutsideOfRect(inner, outer) {
  var center = inner.center;
  return center.y < outer.top || center.y > outer.top + outer.height;
}
function intersectionWithViewport(rect) {
  var viewport = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : windowRect();
  var top = Math.max(rect.top, 0);
  var left = Math.max(rect.left, 0);
  var bottom = Math.min(rect.top + rect.height, viewport.height);
  var right = Math.min(rect.left + rect.width, viewport.width);
  return new Rect({
    top,
    left,
    height: bottom - top,
    width: right - left
  });
}
function windowRect() {
  return new Rect({
    top: window.scrollY,
    left: window.scrollX,
    height: window.innerHeight,
    width: document.body.clientWidth
  });
}

var styles$6 = {
  "PositionedOverlay": "Polaris-PositionedOverlay",
  "fixed": "Polaris-PositionedOverlay--fixed",
  "calculating": "Polaris-PositionedOverlay--calculating"
};

var OBSERVER_CONFIG = {
  childList: true,
  subtree: true
};
var PositionedOverlay = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(PositionedOverlay, _React$PureComponent);

  var _super = _createSuper(PositionedOverlay);

  function PositionedOverlay(props) {
    var _this;

    _classCallCheck(this, PositionedOverlay);

    _this = _super.call(this, props);
    _this.state = {
      measuring: true,
      activatorRect: getRectForNode(_this.props.activator),
      right: undefined,
      left: undefined,
      top: 0,
      height: 0,
      width: null,
      positioning: 'below',
      zIndex: null,
      outsideScrollableContainer: false,
      lockPosition: false
    };
    _this.overlay = null;
    _this.scrollableContainer = null;

    _this.overlayDetails = function () {
      var _this$state = _this.state,
          measuring = _this$state.measuring,
          left = _this$state.left,
          right = _this$state.right,
          positioning = _this$state.positioning,
          height = _this$state.height,
          activatorRect = _this$state.activatorRect;
      return {
        measuring,
        left,
        right,
        desiredHeight: height,
        positioning,
        activatorRect
      };
    };

    _this.setOverlay = function (node) {
      _this.overlay = node;
    };

    _this.handleMeasurement = function () {
      var _this$state2 = _this.state,
          lockPosition = _this$state2.lockPosition,
          top = _this$state2.top;

      _this.observer.disconnect();

      _this.setState(function (_ref) {
        var left = _ref.left,
            top = _ref.top,
            right = _ref.right;
        return {
          left,
          right,
          top,
          height: 0,
          positioning: 'below',
          measuring: true
        };
      }, function () {
        if (_this.overlay == null || _this.scrollableContainer == null) {
          return;
        }

        var _this$props = _this.props,
            activator = _this$props.activator,
            _this$props$preferred = _this$props.preferredPosition,
            preferredPosition = _this$props$preferred === void 0 ? 'below' : _this$props$preferred,
            _this$props$preferred2 = _this$props.preferredAlignment,
            preferredAlignment = _this$props$preferred2 === void 0 ? 'center' : _this$props$preferred2,
            onScrollOut = _this$props.onScrollOut,
            fullWidth = _this$props.fullWidth,
            fixed = _this$props.fixed,
            _this$props$preferInp = _this$props.preferInputActivator,
            preferInputActivator = _this$props$preferInp === void 0 ? true : _this$props$preferInp;
        var preferredActivator = preferInputActivator ? activator.querySelector('input') || activator : activator;
        var activatorRect = getRectForNode(preferredActivator);
        var currentOverlayRect = getRectForNode(_this.overlay);
        var scrollableElement = isDocument$1(_this.scrollableContainer) ? document.body : _this.scrollableContainer;
        var scrollableContainerRect = getRectForNode(scrollableElement);
        var overlayRect = fullWidth ? Object.assign(Object.assign({}, currentOverlayRect), {
          width: activatorRect.width
        }) : currentOverlayRect; // If `body` is 100% height, it still acts as though it were not constrained to that size. This adjusts for that.

        if (scrollableElement === document.body) {
          scrollableContainerRect.height = document.body.scrollHeight;
        }

        var overlayMargins = _this.overlay.firstElementChild && _this.overlay.firstChild instanceof HTMLElement ? getMarginsForNode(_this.overlay.firstElementChild) : {
          activator: 0,
          container: 0,
          horizontal: 0
        };
        var containerRect = windowRect();
        var zIndexForLayer = getZIndexForLayerFromNode(activator);
        var zIndex = zIndexForLayer == null ? zIndexForLayer : zIndexForLayer + 1;
        var verticalPosition = calculateVerticalPosition(activatorRect, overlayRect, overlayMargins, scrollableContainerRect, containerRect, preferredPosition, fixed);
        var horizontalPosition = calculateHorizontalPosition(activatorRect, overlayRect, containerRect, overlayMargins, preferredAlignment);

        _this.setState({
          measuring: false,
          activatorRect: getRectForNode(activator),
          left: preferredAlignment !== 'right' ? horizontalPosition : undefined,
          right: preferredAlignment === 'right' ? horizontalPosition : undefined,
          top: lockPosition ? top : verticalPosition.top,
          lockPosition: Boolean(fixed),
          height: verticalPosition.height || 0,
          width: fullWidth ? overlayRect.width : null,
          positioning: verticalPosition.positioning,
          outsideScrollableContainer: onScrollOut != null && rectIsOutsideOfRect(activatorRect, intersectionWithViewport(scrollableContainerRect)),
          zIndex
        }, function () {
          if (!_this.overlay) return;

          _this.observer.observe(_this.overlay, OBSERVER_CONFIG);
        });
      });
    };

    _this.observer = new MutationObserver(_this.handleMeasurement);
    return _this;
  }

  _createClass(PositionedOverlay, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.scrollableContainer = Scrollable.forNode(this.props.activator);

      if (this.scrollableContainer && !this.props.fixed) {
        this.scrollableContainer.addEventListener('scroll', this.handleMeasurement);
      }

      this.handleMeasurement();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.scrollableContainer && !this.props.fixed) {
        this.scrollableContainer.removeEventListener('scroll', this.handleMeasurement);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this$state3 = this.state,
          outsideScrollableContainer = _this$state3.outsideScrollableContainer,
          top = _this$state3.top;
      var _this$props2 = this.props,
          onScrollOut = _this$props2.onScrollOut,
          active = _this$props2.active;

      if (active && onScrollOut != null && top !== 0 && outsideScrollableContainer) {
        onScrollOut();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state4 = this.state,
          left = _this$state4.left,
          right = _this$state4.right,
          top = _this$state4.top,
          zIndex = _this$state4.zIndex,
          width = _this$state4.width;
      var _this$props3 = this.props,
          render = _this$props3.render,
          fixed = _this$props3.fixed,
          propClassNames = _this$props3.classNames;
      var style = {
        top: top == null || isNaN(top) ? undefined : top,
        left: left == null || isNaN(left) ? undefined : left,
        right: right == null || isNaN(right) ? undefined : right,
        width: width == null || isNaN(width) ? undefined : width,
        zIndex: zIndex == null || isNaN(zIndex) ? undefined : zIndex
      };
      var className = classNames(styles$6.PositionedOverlay, fixed && styles$6.fixed, propClassNames);
      return /*#__PURE__*/React__default.createElement("div", {
        className: className,
        style: style,
        ref: this.setOverlay
      }, /*#__PURE__*/React__default.createElement(EventListener, {
        event: "resize",
        handler: this.handleMeasurement
      }), render(this.overlayDetails()));
    }
  }]);

  return PositionedOverlay;
}(React__default.PureComponent);

function getMarginsForNode(node) {
  var nodeStyles = window.getComputedStyle(node);
  return {
    activator: parseFloat(nodeStyles.marginTop || '0'),
    container: parseFloat(nodeStyles.marginBottom || '0'),
    horizontal: parseFloat(nodeStyles.marginLeft || '0')
  };
}

function getZIndexForLayerFromNode(node) {
  var layerNode = closest(node, layer.selector) || document.body;
  var zIndex = layerNode === document.body ? 'auto' : parseInt(window.getComputedStyle(layerNode).zIndex || '0', 10);
  return zIndex === 'auto' || isNaN(zIndex) ? null : zIndex;
}

function isDocument$1(node) {
  return node === document;
}

var PopoverCloseSource;

(function (PopoverCloseSource) {
  PopoverCloseSource[PopoverCloseSource["Click"] = 0] = "Click";
  PopoverCloseSource[PopoverCloseSource["EscapeKeypress"] = 1] = "EscapeKeypress";
  PopoverCloseSource[PopoverCloseSource["FocusOut"] = 2] = "FocusOut";
  PopoverCloseSource[PopoverCloseSource["ScrollOut"] = 3] = "ScrollOut";
})(PopoverCloseSource || (PopoverCloseSource = {}));

var TransitionStatus;

(function (TransitionStatus) {
  TransitionStatus["Entering"] = "entering";
  TransitionStatus["Entered"] = "entered";
  TransitionStatus["Exiting"] = "exiting";
  TransitionStatus["Exited"] = "exited";
})(TransitionStatus || (TransitionStatus = {}));

var PopoverOverlay = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(PopoverOverlay, _React$PureComponent);

  var _super = _createSuper(PopoverOverlay);

  function PopoverOverlay() {
    var _this;

    _classCallCheck(this, PopoverOverlay);

    _this = _super.apply(this, arguments);
    _this.state = {
      transitionStatus: _this.props.active ? TransitionStatus.Entering : TransitionStatus.Exited
    };
    _this.contentNode = /*#__PURE__*/createRef();

    _this.renderPopover = function (overlayDetails) {
      var measuring = overlayDetails.measuring,
          desiredHeight = overlayDetails.desiredHeight,
          positioning = overlayDetails.positioning;
      var _this$props = _this.props,
          id = _this$props.id,
          children = _this$props.children,
          sectioned = _this$props.sectioned,
          fullWidth = _this$props.fullWidth,
          fullHeight = _this$props.fullHeight,
          fluidContent = _this$props.fluidContent;
      var className = classNames(styles$5.Popover, positioning === 'above' && styles$5.positionedAbove, fullWidth && styles$5.fullWidth, measuring && styles$5.measuring);
      var contentStyles = measuring ? undefined : {
        height: desiredHeight
      };
      var contentClassNames = classNames(styles$5.Content, fullHeight && styles$5['Content-fullHeight'], fluidContent && styles$5['Content-fluidContent']);
      var content = /*#__PURE__*/React__default.createElement("div", {
        id: id,
        tabIndex: -1,
        className: contentClassNames,
        style: contentStyles,
        ref: _this.contentNode
      }, renderPopoverContent(children, {
        sectioned
      }));
      return /*#__PURE__*/React__default.createElement("div", Object.assign({
        className: className
      }, overlay.props), /*#__PURE__*/React__default.createElement(EventListener, {
        event: "click",
        handler: _this.handleClick
      }), /*#__PURE__*/React__default.createElement(EventListener, {
        event: "touchstart",
        handler: _this.handleClick
      }), /*#__PURE__*/React__default.createElement(KeypressListener, {
        keyCode: Key.Escape,
        handler: _this.handleEscape
      }), /*#__PURE__*/React__default.createElement("div", {
        className: styles$5.FocusTracker // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
        ,
        tabIndex: 0,
        onFocus: _this.handleFocusFirstItem
      }), /*#__PURE__*/React__default.createElement("div", {
        className: styles$5.Wrapper
      }, content), /*#__PURE__*/React__default.createElement("div", {
        className: styles$5.FocusTracker // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
        ,
        tabIndex: 0,
        onFocus: _this.handleFocusLastItem
      }));
    };

    _this.handleClick = function (event) {
      var target = event.target;

      var _assertThisInitialize = _assertThisInitialized(_this),
          contentNode = _assertThisInitialize.contentNode,
          _assertThisInitialize2 = _assertThisInitialize.props,
          activator = _assertThisInitialize2.activator,
          onClose = _assertThisInitialize2.onClose;

      var isDescendant = contentNode.current != null && nodeContainsDescendant(contentNode.current, target);
      var isActivatorDescendant = nodeContainsDescendant(activator, target);

      if (isDescendant || isActivatorDescendant || _this.state.transitionStatus !== TransitionStatus.Entered) {
        return;
      }

      onClose(PopoverCloseSource.Click);
    };

    _this.handleScrollOut = function () {
      _this.props.onClose(PopoverCloseSource.ScrollOut);
    };

    _this.handleEscape = function () {
      _this.props.onClose(PopoverCloseSource.EscapeKeypress);
    };

    _this.handleFocusFirstItem = function () {
      _this.props.onClose(PopoverCloseSource.FocusOut);
    };

    _this.handleFocusLastItem = function () {
      _this.props.onClose(PopoverCloseSource.FocusOut);
    };

    return _this;
  }

  _createClass(PopoverOverlay, [{
    key: "changeTransitionStatus",
    value: function changeTransitionStatus(transitionStatus, cb) {
      this.setState({
        transitionStatus
      }, cb); // Forcing a reflow to enable the animation

      this.contentNode.current && this.contentNode.current.getBoundingClientRect();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.active) {
        this.focusContent();
        this.changeTransitionStatus(TransitionStatus.Entered);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(oldProps) {
      var _this2 = this;

      if (this.props.active && !oldProps.active) {
        this.focusContent();
        this.changeTransitionStatus(TransitionStatus.Entering, function () {
          _this2.clearTransitionTimeout();

          _this2.enteringTimer = window.setTimeout(function () {
            _this2.setState({
              transitionStatus: TransitionStatus.Entered
            });
          }, durationBase);
        });
      }

      if (!this.props.active && oldProps.active) {
        this.changeTransitionStatus(TransitionStatus.Exiting, function () {
          _this2.clearTransitionTimeout();

          _this2.exitingTimer = window.setTimeout(function () {
            _this2.setState({
              transitionStatus: TransitionStatus.Exited
            });
          }, durationBase);
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.clearTransitionTimeout();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          active = _this$props2.active,
          activator = _this$props2.activator,
          fullWidth = _this$props2.fullWidth,
          _this$props2$preferre = _this$props2.preferredPosition,
          preferredPosition = _this$props2$preferre === void 0 ? 'below' : _this$props2$preferre,
          _this$props2$preferre2 = _this$props2.preferredAlignment,
          preferredAlignment = _this$props2$preferre2 === void 0 ? 'center' : _this$props2$preferre2,
          _this$props2$preferIn = _this$props2.preferInputActivator,
          preferInputActivator = _this$props2$preferIn === void 0 ? true : _this$props2$preferIn,
          fixed = _this$props2.fixed;
      var transitionStatus = this.state.transitionStatus;
      if (transitionStatus === TransitionStatus.Exited && !active) return null;
      var className = classNames(styles$5.PopoverOverlay, transitionStatus === TransitionStatus.Entering && styles$5['PopoverOverlay-entering'], transitionStatus === TransitionStatus.Entered && styles$5['PopoverOverlay-open'], transitionStatus === TransitionStatus.Exiting && styles$5['PopoverOverlay-exiting']);
      return /*#__PURE__*/React__default.createElement(PositionedOverlay, {
        fullWidth: fullWidth,
        active: active,
        activator: activator,
        preferInputActivator: preferInputActivator,
        preferredPosition: preferredPosition,
        preferredAlignment: preferredAlignment,
        render: this.renderPopover.bind(this),
        fixed: fixed,
        onScrollOut: this.handleScrollOut,
        classNames: className
      });
    }
  }, {
    key: "clearTransitionTimeout",
    value: function clearTransitionTimeout() {
      if (this.enteringTimer) {
        window.clearTimeout(this.enteringTimer);
      }

      if (this.exitingTimer) {
        window.clearTimeout(this.exitingTimer);
      }
    }
  }, {
    key: "focusContent",
    value: function focusContent() {
      var _this3 = this;

      if (this.props.preventAutofocus) {
        return;
      }

      if (this.contentNode == null) {
        return;
      }

      write(function () {
        if (_this3.contentNode.current == null) {
          return;
        }

        _this3.contentNode.current.focus({
          preventScroll: process.env.NODE_ENV === 'development'
        });
      });
    }
  }]);

  return PopoverOverlay;
}(React__default.PureComponent);

function renderPopoverContent(children, props) {
  var childrenArray = React__default.Children.toArray(children);

  if (isElementOfType(childrenArray[0], Pane)) {
    return childrenArray;
  }

  return wrapWithComponent(childrenArray, Pane, props);
}

function setActivatorAttributes(activator, _ref) {
  var id = _ref.id,
      _ref$active = _ref.active,
      active = _ref$active === void 0 ? false : _ref$active,
      ariaHaspopup = _ref.ariaHaspopup,
      _ref$activatorDisable = _ref.activatorDisabled,
      activatorDisabled = _ref$activatorDisable === void 0 ? false : _ref$activatorDisable;

  if (!activatorDisabled) {
    activator.tabIndex = activator.tabIndex || 0;
  }

  activator.setAttribute('aria-controls', id);
  activator.setAttribute('aria-owns', id);
  activator.setAttribute('aria-expanded', String(active));

  if (ariaHaspopup != null) {
    activator.setAttribute('aria-haspopup', String(ariaHaspopup));
  }
}

// subcomponents so explicitly state the subcomponents in the type definition.
// Letting this be implicit works in this project but fails in projects that use
// generated *.d.ts files.

var Popover = function Popover(_a) {
  var _a$activatorWrapper = _a.activatorWrapper,
      activatorWrapper = _a$activatorWrapper === void 0 ? 'div' : _a$activatorWrapper,
      children = _a.children,
      onClose = _a.onClose,
      activator = _a.activator,
      active = _a.active,
      fixed = _a.fixed,
      ariaHaspopup = _a.ariaHaspopup,
      _a$preferInputActivat = _a.preferInputActivator,
      preferInputActivator = _a$preferInputActivat === void 0 ? true : _a$preferInputActivat,
      rest = __rest(_a, ["activatorWrapper", "children", "onClose", "activator", "active", "fixed", "ariaHaspopup", "preferInputActivator"]);

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      activatorNode = _useState2[0],
      setActivatorNode = _useState2[1];

  var activatorContainer = useRef(null);
  var WrapperComponent = activatorWrapper;
  var id = useUniqueId('popover');
  var setAccessibilityAttributes = useCallback(function () {
    if (activatorContainer.current == null) {
      return;
    }

    var firstFocusable = findFirstFocusableNode(activatorContainer.current);
    var focusableActivator = firstFocusable || activatorContainer.current;
    var activatorDisabled = 'disabled' in focusableActivator && Boolean(focusableActivator.disabled);
    setActivatorAttributes(focusableActivator, {
      id,
      active,
      ariaHaspopup,
      activatorDisabled
    });
  }, [id, active, ariaHaspopup]);

  var handleClose = function handleClose(source) {
    onClose(source);

    if (activatorContainer.current == null) {
      return;
    }

    if ((source === PopoverCloseSource.FocusOut || source === PopoverCloseSource.EscapeKeypress) && activatorNode) {
      var focusableActivator = findFirstFocusableNode(activatorNode) || findFirstFocusableNode(activatorContainer.current) || activatorContainer.current;

      if (!focusNextFocusableNode(focusableActivator, isInPortal)) {
        focusableActivator.focus();
      }
    }
  };

  useEffect(function () {
    if (!activatorNode && activatorContainer.current) {
      setActivatorNode(activatorContainer.current.firstElementChild);
    } else if (activatorNode && activatorContainer.current && !activatorContainer.current.contains(activatorNode)) {
      setActivatorNode(activatorContainer.current.firstElementChild);
    }

    setAccessibilityAttributes();
  }, [activatorNode, setAccessibilityAttributes]);
  useEffect(function () {
    if (activatorNode && activatorContainer.current) {
      setActivatorNode(activatorContainer.current.firstElementChild);
    }

    setAccessibilityAttributes();
  }, [activatorNode, setAccessibilityAttributes]);
  var portal = activatorNode ? /*#__PURE__*/React__default.createElement(Portal, {
    idPrefix: "popover"
  }, /*#__PURE__*/React__default.createElement(PopoverOverlay, Object.assign({
    id: id,
    activator: activatorNode,
    preferInputActivator: preferInputActivator,
    onClose: handleClose,
    active: active,
    fixed: fixed
  }, rest), children)) : null;
  return /*#__PURE__*/React__default.createElement(WrapperComponent, {
    ref: activatorContainer
  }, React__default.Children.only(activator), portal);
};

function isInPortal(element) {
  var parentElement = element.parentElement;

  while (parentElement) {
    if (parentElement.matches(portal.selector)) return false;
    parentElement = parentElement.parentElement;
  }

  return true;
}

Popover.Pane = Pane;
Popover.Section = Section;

var styles$7 = {
  "Badge": "Polaris-Badge",
  "Pip": "Polaris-Badge__Pip",
  "sizeSmall": "Polaris-Badge--sizeSmall",
  "statusSuccess": "Polaris-Badge--statusSuccess",
  "Content": "Polaris-Badge__Content",
  "statusInfo": "Polaris-Badge--statusInfo",
  "statusAttention": "Polaris-Badge--statusAttention",
  "statusWarning": "Polaris-Badge--statusWarning",
  "statusCritical": "Polaris-Badge--statusCritical",
  "statusNew": "Polaris-Badge--statusNew",
  "progressIncomplete": "Polaris-Badge--progressIncomplete",
  "progressPartiallyComplete": "Polaris-Badge--progressPartiallyComplete",
  "progressComplete": "Polaris-Badge--progressComplete"
};

var PROGRESS_LABELS = {
  incomplete: 'incomplete',
  partiallyComplete: 'partiallyComplete',
  complete: 'complete'
};
var STATUS_LABELS = {
  info: 'info',
  success: 'success',
  warning: 'warning',
  critical: 'critical',
  attention: 'attention',
  new: 'new'
};
var DEFAULT_SIZE = 'medium';
function Badge(_ref) {
  var children = _ref.children,
      status = _ref.status,
      progress = _ref.progress,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? DEFAULT_SIZE : _ref$size;
  var i18n = useI18n();
  var className = classNames(styles$7.Badge, status && styles$7[variationName('status', status)], progress && styles$7[variationName('progress', progress)], size && size !== DEFAULT_SIZE && styles$7[variationName('size', size)]);
  var progressMarkup;

  switch (progress) {
    case PROGRESS_LABELS.incomplete:
      progressMarkup = i18n.translate('Polaris.Badge.PROGRESS_LABELS.incomplete');
      break;

    case PROGRESS_LABELS.partiallyComplete:
      progressMarkup = i18n.translate('Polaris.Badge.PROGRESS_LABELS.partiallyComplete');
      break;

    case PROGRESS_LABELS.complete:
      progressMarkup = i18n.translate('Polaris.Badge.PROGRESS_LABELS.complete');
      break;
  }

  var pipMarkup = progress ? /*#__PURE__*/React__default.createElement("span", {
    className: styles$7.Pip
  }, /*#__PURE__*/React__default.createElement(VisuallyHidden, null, progressMarkup)) : null;
  var statusMarkup;

  switch (status) {
    case STATUS_LABELS.info:
      statusMarkup = i18n.translate('Polaris.Badge.STATUS_LABELS.info');
      break;

    case STATUS_LABELS.success:
      statusMarkup = i18n.translate('Polaris.Badge.STATUS_LABELS.success');
      break;

    case STATUS_LABELS.warning:
      statusMarkup = i18n.translate('Polaris.Badge.STATUS_LABELS.warning');
      break;

    case STATUS_LABELS.critical:
      statusMarkup = i18n.translate('Polaris.Badge.STATUS_LABELS.critical');
      break;

    case STATUS_LABELS.attention:
      statusMarkup = i18n.translate('Polaris.Badge.STATUS_LABELS.attention');
      break;

    case STATUS_LABELS.new:
      statusMarkup = i18n.translate('Polaris.Badge.STATUS_LABELS.new');
      break;
  }

  var statusLabelMarkup = status ? /*#__PURE__*/React__default.createElement(VisuallyHidden, null, statusMarkup) : null;
  return /*#__PURE__*/React__default.createElement("span", {
    className: className
  }, statusLabelMarkup, pipMarkup, /*#__PURE__*/React__default.createElement("span", {
    className: styles$7.Content
  }, children));
}

var styles$8 = {
  "variationPositive": "Polaris-TextStyle--variationPositive",
  "variationNegative": "Polaris-TextStyle--variationNegative",
  "variationCode": "Polaris-TextStyle--variationCode",
  "variationStrong": "Polaris-TextStyle--variationStrong",
  "variationSubdued": "Polaris-TextStyle--variationSubdued"
};

var VariationValue;

(function (VariationValue) {
  VariationValue["Positive"] = "positive";
  VariationValue["Negative"] = "negative";
  VariationValue["Strong"] = "strong";
  VariationValue["Subdued"] = "subdued";
  VariationValue["Code"] = "code";
})(VariationValue || (VariationValue = {}));

function TextStyle(_ref) {
  var variation = _ref.variation,
      children = _ref.children;
  var className = classNames(variation && styles$8[variationName('variation', variation)], variation === VariationValue.Code && styles$8.code);
  var Element = variationElement(variation);
  return /*#__PURE__*/React__default.createElement(Element, {
    className: className
  }, children);
}

function variationElement(variation) {
  return variation === VariationValue.Code ? 'code' : 'span';
}

var styles$9 = {
  "ActionList": "Polaris-ActionList",
  "newDesignLanguage": "Polaris-ActionList--newDesignLanguage",
  "Section-withoutTitle": "Polaris-ActionList__Section--withoutTitle",
  "Actions": "Polaris-ActionList__Actions",
  "Section": "Polaris-ActionList__Section",
  "Title": "Polaris-ActionList__Title",
  "Item": "Polaris-ActionList__Item",
  "active": "Polaris-ActionList--active",
  "destructive": "Polaris-ActionList--destructive",
  "disabled": "Polaris-ActionList--disabled",
  "Image": "Polaris-ActionList__Image",
  "Content": "Polaris-ActionList__Content",
  "Text": "Polaris-ActionList__Text",
  "BadgeWrapper": "Polaris-ActionList__BadgeWrapper"
};

function Item(_ref) {
  var id = _ref.id,
      badge = _ref.badge,
      content = _ref.content,
      accessibilityLabel = _ref.accessibilityLabel,
      helpText = _ref.helpText,
      url = _ref.url,
      onAction = _ref.onAction,
      icon = _ref.icon,
      image = _ref.image,
      disabled = _ref.disabled,
      external = _ref.external,
      destructive = _ref.destructive,
      ellipsis = _ref.ellipsis,
      active = _ref.active,
      role = _ref.role;

  var _useFeatures = useFeatures(),
      newDesignLanguage = _useFeatures.newDesignLanguage;

  var className = classNames(styles$9.Item, disabled && styles$9.disabled, destructive && styles$9.destructive, active && styles$9.active, newDesignLanguage && styles$9.newDesignLanguage);
  var imageElement = null;

  if (icon) {
    imageElement = /*#__PURE__*/React__default.createElement("div", {
      className: styles$9.Image
    }, /*#__PURE__*/React__default.createElement(Icon, {
      source: icon
    }));
  } else if (image) {
    imageElement = /*#__PURE__*/React__default.createElement("div", {
      role: "presentation",
      className: styles$9.Image,
      style: {
        backgroundImage: "url(".concat(image)
      }
    });
  }

  var contentText = ellipsis && content ? "".concat(content, "\u2026") : content;
  var contentMarkup = helpText ? /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("div", null, contentText), /*#__PURE__*/React__default.createElement(TextStyle, {
    variation: "subdued"
  }, helpText)) : contentText;
  var badgeMarkup = badge && /*#__PURE__*/React__default.createElement("span", {
    className: styles$9.BadgeWrapper
  }, /*#__PURE__*/React__default.createElement(Badge, {
    status: badge.status
  }, badge.content));
  var textMarkup = imageElement ? /*#__PURE__*/React__default.createElement("div", {
    className: styles$9.Text
  }, contentMarkup) : contentMarkup;
  var contentElement = /*#__PURE__*/React__default.createElement("div", {
    className: styles$9.Content
  }, imageElement, textMarkup, badgeMarkup);
  var scrollMarkup = active ? /*#__PURE__*/React__default.createElement(Scrollable.ScrollTo, null) : null;
  var control = url ? /*#__PURE__*/React__default.createElement(UnstyledLink, {
    id: id,
    url: url,
    className: className,
    external: external,
    "aria-label": accessibilityLabel,
    onClick: onAction
  }, contentElement) : /*#__PURE__*/React__default.createElement("button", {
    id: id,
    type: "button",
    className: className,
    disabled: disabled,
    "aria-label": accessibilityLabel,
    onClick: onAction
  }, contentElement);
  return /*#__PURE__*/React__default.createElement("li", {
    role: role,
    "aria-selected": active
  }, scrollMarkup, control);
}

function Section$1(_ref) {
  var section = _ref.section,
      hasMultipleSections = _ref.hasMultipleSections,
      actionRole = _ref.actionRole,
      onActionAnyItem = _ref.onActionAnyItem;

  var handleAction = function handleAction(itemOnAction) {
    return function () {
      if (itemOnAction) {
        itemOnAction();
      }

      if (onActionAnyItem) {
        onActionAnyItem();
      }
    };
  };

  var actionMarkup = section.items.map(function (_a, index) {
    var content = _a.content,
        helpText = _a.helpText,
        onAction = _a.onAction,
        item = __rest(_a, ["content", "helpText", "onAction"]);

    return /*#__PURE__*/React__default.createElement(Item, Object.assign({
      key: "".concat(content, "-").concat(index),
      content: content,
      helpText: helpText,
      role: actionRole,
      onAction: handleAction(onAction)
    }, item));
  });
  var className = section.title ? undefined : styles$9['Section-withoutTitle'];
  var titleMarkup = section.title ? /*#__PURE__*/React__default.createElement("p", {
    className: styles$9.Title
  }, section.title) : null;
  var sectionRole = actionRole === 'option' ? 'presentation' : undefined;
  var sectionMarkup = /*#__PURE__*/React__default.createElement("div", {
    className: className
  }, titleMarkup, /*#__PURE__*/React__default.createElement("ul", {
    className: styles$9.Actions,
    role: sectionRole
  }, actionMarkup));
  return hasMultipleSections ? /*#__PURE__*/React__default.createElement("li", {
    className: styles$9.Section
  }, sectionMarkup) : sectionMarkup;
}

function ActionList(_ref) {
  var items = _ref.items,
      _ref$sections = _ref.sections,
      sections = _ref$sections === void 0 ? [] : _ref$sections,
      actionRole = _ref.actionRole,
      onActionAnyItem = _ref.onActionAnyItem;
  var finalSections = [];

  if (items) {
    finalSections = [{
      items
    }].concat(_toConsumableArray(sections));
  } else if (sections) {
    finalSections = sections;
  }

  var _useFeatures = useFeatures(),
      newDesignLanguage = _useFeatures.newDesignLanguage;

  var className = classNames(styles$9.ActionList, newDesignLanguage && styles$9.newDesignLanguage);
  var hasMultipleSections = finalSections.length > 1; // Type asserting to any is required for TS3.2 but can be removed when we update to 3.3
  // see https://github.com/Microsoft/TypeScript/issues/28768

  var Element = hasMultipleSections ? 'ul' : 'div';
  var sectionMarkup = finalSections.map(function (section, index) {
    return section.items.length > 0 ? /*#__PURE__*/React__default.createElement(Section$1, {
      key: section.title || index,
      section: section,
      hasMultipleSections: hasMultipleSections,
      actionRole: actionRole,
      onActionAnyItem: onActionAnyItem
    }) : null;
  });
  return /*#__PURE__*/React__default.createElement(Element, {
    className: className
  }, sectionMarkup);
}

var styles$a = {
  "Button": "Polaris-Button",
  "newDesignLanguage": "Polaris-Button--newDesignLanguage",
  "pressed": "Polaris-Button--pressed",
  "disabled": "Polaris-Button--disabled",
  "connectedDisclosure": "Polaris-Button--connectedDisclosure",
  "Content": "Polaris-Button__Content",
  "textAlignLeft": "Polaris-Button--textAlignLeft",
  "textAlignCenter": "Polaris-Button--textAlignCenter",
  "textAlignRight": "Polaris-Button--textAlignRight",
  "Icon": "Polaris-Button__Icon",
  "Spinner": "Polaris-Button__Spinner",
  "primary": "Polaris-Button--primary",
  "destructive": "Polaris-Button--destructive",
  "outline": "Polaris-Button--outline",
  "loading": "Polaris-Button--loading",
  "plain": "Polaris-Button--plain",
  "iconOnly": "Polaris-Button--iconOnly",
  "fullWidth": "Polaris-Button--fullWidth",
  "sizeSlim": "Polaris-Button--sizeSlim",
  "sizeLarge": "Polaris-Button--sizeLarge",
  "monochrome": "Polaris-Button--monochrome",
  "Text": "Polaris-Button__Text",
  "DisclosureIcon": "Polaris-Button__DisclosureIcon",
  "DisclosureIconFacingUp": "Polaris-Button__DisclosureIconFacingUp",
  "ConnectedDisclosureWrapper": "Polaris-Button__ConnectedDisclosureWrapper",
  "ConnectedDisclosure": "Polaris-Button__ConnectedDisclosure"
};

var DEFAULT_SIZE$1 = 'medium';
function Button(_ref) {
  var id = _ref.id,
      url = _ref.url,
      disabled = _ref.disabled,
      loading = _ref.loading,
      children = _ref.children,
      accessibilityLabel = _ref.accessibilityLabel,
      ariaControls = _ref.ariaControls,
      ariaExpanded = _ref.ariaExpanded,
      ariaPressed = _ref.ariaPressed,
      onClick = _ref.onClick,
      onFocus = _ref.onFocus,
      onBlur = _ref.onBlur,
      onKeyDown = _ref.onKeyDown,
      onKeyPress = _ref.onKeyPress,
      onKeyUp = _ref.onKeyUp,
      onMouseEnter = _ref.onMouseEnter,
      onTouchStart = _ref.onTouchStart,
      external = _ref.external,
      download = _ref.download,
      icon = _ref.icon,
      primary = _ref.primary,
      outline = _ref.outline,
      destructive = _ref.destructive,
      disclosure = _ref.disclosure,
      plain = _ref.plain,
      monochrome = _ref.monochrome,
      submit = _ref.submit,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? DEFAULT_SIZE$1 : _ref$size,
      textAlign = _ref.textAlign,
      fullWidth = _ref.fullWidth,
      pressed = _ref.pressed,
      connectedDisclosure = _ref.connectedDisclosure;

  var _useFeatures = useFeatures(),
      newDesignLanguage = _useFeatures.newDesignLanguage;

  var hasGivenDeprecationWarning = useRef(false);

  if (ariaPressed && !hasGivenDeprecationWarning.current) {
    // eslint-disable-next-line no-console
    console.warn('Deprecation: The ariaPressed prop has been replaced with pressed');
    hasGivenDeprecationWarning.current = true;
  }

  var i18n = useI18n();
  var isDisabled = disabled || loading;
  var className = classNames(styles$a.Button, newDesignLanguage && styles$a.newDesignLanguage, primary && styles$a.primary, outline && styles$a.outline, destructive && styles$a.destructive, isDisabled && styles$a.disabled, loading && styles$a.loading, plain && styles$a.plain, pressed && !disabled && !url && styles$a.pressed, monochrome && styles$a.monochrome, size && size !== DEFAULT_SIZE$1 && styles$a[variationName('size', size)], textAlign && styles$a[variationName('textAlign', textAlign)], fullWidth && styles$a.fullWidth, icon && children == null && styles$a.iconOnly, connectedDisclosure && styles$a.connectedDisclosure);
  var disclosureIcon = /*#__PURE__*/React__default.createElement(Icon, {
    source: loading ? 'placeholder' : CaretDownMinor
  });
  var disclosureIconMarkup = disclosure ? /*#__PURE__*/React__default.createElement("span", {
    className: styles$a.Icon
  }, /*#__PURE__*/React__default.createElement("div", {
    className: classNames(styles$a.DisclosureIcon, disclosure === 'up' && styles$a.DisclosureIconFacingUp)
  }, disclosureIcon)) : null;
  var iconMarkup;

  if (icon) {
    var iconInner = isIconSource(icon) ? /*#__PURE__*/React__default.createElement(Icon, {
      source: loading ? 'placeholder' : icon
    }) : icon;
    iconMarkup = /*#__PURE__*/React__default.createElement("span", {
      className: styles$a.Icon
    }, iconInner);
  }

  var childMarkup = children ? /*#__PURE__*/React__default.createElement("span", {
    className: styles$a.Text
  }, children) : null;
  var spinnerColor = primary || destructive ? 'white' : 'inkLightest';
  var spinnerSVGMarkup = loading ? /*#__PURE__*/React__default.createElement("span", {
    className: styles$a.Spinner
  }, /*#__PURE__*/React__default.createElement(Spinner, {
    size: "small",
    color: spinnerColor,
    accessibilityLabel: i18n.translate('Polaris.Button.spinnerAccessibilityLabel')
  })) : null;
  var content = iconMarkup || disclosureIconMarkup ? /*#__PURE__*/React__default.createElement("span", {
    className: styles$a.Content
  }, spinnerSVGMarkup, iconMarkup, childMarkup, disclosureIconMarkup) : /*#__PURE__*/React__default.createElement("span", {
    className: styles$a.Content
  }, spinnerSVGMarkup, childMarkup);
  var type = submit ? 'submit' : 'button';
  var ariaPressedStatus = pressed !== undefined ? pressed : ariaPressed;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      disclosureActive = _useState2[0],
      setDisclosureActive = _useState2[1];

  var toggleDisclosureActive = useCallback(function () {
    setDisclosureActive(function (disclosureActive) {
      return !disclosureActive;
    });
  }, []);
  var connectedDisclosureMarkup;

  if (connectedDisclosure) {
    var connectedDisclosureClassName = classNames(styles$a.Button, primary && styles$a.primary, outline && styles$a.outline, size && size !== DEFAULT_SIZE$1 && styles$a[variationName('size', size)], textAlign && styles$a[variationName('textAlign', textAlign)], destructive && styles$a.destructive, connectedDisclosure.disabled && styles$a.disabled, styles$a.iconOnly, styles$a.ConnectedDisclosure, newDesignLanguage && styles$a.newDesignLanguage);
    var defaultLabel = i18n.translate('Polaris.Button.connectedDisclosureAccessibilityLabel');
    var _disabled = connectedDisclosure.disabled,
        _connectedDisclosure$ = connectedDisclosure.accessibilityLabel,
        disclosureLabel = _connectedDisclosure$ === void 0 ? defaultLabel : _connectedDisclosure$;
    var connectedDisclosureActivator = /*#__PURE__*/React__default.createElement("button", {
      type: "button",
      className: connectedDisclosureClassName,
      disabled: _disabled,
      "aria-label": disclosureLabel,
      onClick: toggleDisclosureActive,
      onMouseUp: handleMouseUpByBlurring
    }, /*#__PURE__*/React__default.createElement("span", {
      className: styles$a.Icon
    }, /*#__PURE__*/React__default.createElement(Icon, {
      source: CaretDownMinor
    })));
    connectedDisclosureMarkup = /*#__PURE__*/React__default.createElement(Popover, {
      active: disclosureActive,
      onClose: toggleDisclosureActive,
      activator: connectedDisclosureActivator,
      preferredAlignment: "right"
    }, /*#__PURE__*/React__default.createElement(ActionList, {
      items: connectedDisclosure.actions,
      onActionAnyItem: toggleDisclosureActive
    }));
  }

  var buttonMarkup;

  if (url) {
    buttonMarkup = isDisabled ?
    /*#__PURE__*/
    // Render an `<a>` so toggling disabled/enabled state changes only the
    // `href` attribute instead of replacing the whole element.
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    React__default.createElement("a", {
      id: id,
      className: className,
      "aria-label": accessibilityLabel
    }, content) : /*#__PURE__*/React__default.createElement(UnstyledLink, {
      id: id,
      url: url,
      external: external,
      download: download,
      onClick: onClick,
      onFocus: onFocus,
      onBlur: onBlur,
      onMouseUp: handleMouseUpByBlurring,
      onMouseEnter: onMouseEnter,
      onTouchStart: onTouchStart,
      className: className,
      "aria-label": accessibilityLabel
    }, content);
  } else {
    buttonMarkup = /*#__PURE__*/React__default.createElement("button", {
      id: id,
      type: type,
      onClick: onClick,
      onFocus: onFocus,
      onBlur: onBlur,
      onKeyDown: onKeyDown,
      onKeyUp: onKeyUp,
      onKeyPress: onKeyPress,
      onMouseUp: handleMouseUpByBlurring,
      onMouseEnter: onMouseEnter,
      onTouchStart: onTouchStart,
      className: className,
      disabled: isDisabled,
      "aria-label": accessibilityLabel,
      "aria-controls": ariaControls,
      "aria-expanded": ariaExpanded,
      "aria-pressed": ariaPressedStatus,
      role: loading ? 'alert' : undefined,
      "aria-busy": loading ? true : undefined
    }, content);
  }

  return connectedDisclosureMarkup ? /*#__PURE__*/React__default.createElement("div", {
    className: styles$a.ConnectedDisclosureWrapper
  }, buttonMarkup, connectedDisclosureMarkup) : buttonMarkup;
}

function isIconSource(x) {
  return typeof x === 'string' || typeof x === 'object' && x.body || typeof x === 'function';
}

function buttonsFrom(actions) {
  var overrides = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (Array.isArray(actions)) {
    return actions.map(function (action, index) {
      return buttonFrom(action, overrides, index);
    });
  } else {
    var action = actions;
    return buttonFrom(action, overrides);
  }
}
function buttonFrom(_a, overrides, key) {
  var content = _a.content,
      onAction = _a.onAction,
      action = __rest(_a, ["content", "onAction"]);

  return /*#__PURE__*/React__default.createElement(Button, Object.assign({
    key: key,
    onClick: onAction
  }, action, overrides), content);
}

/**
 * Returns a stateful value, and a set of memoized functions to toggle it,
 * set it to true and set it to false
 */

function useToggle(initialState) {
  var _useState = useState(initialState),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setState = _useState2[1];

  return {
    value,
    toggle: useCallback(function () {
      return setState(function (state) {
        return !state;
      });
    }, []),
    setTrue: useCallback(function () {
      return setState(true);
    }, []),
    setFalse: useCallback(function () {
      return setState(false);
    }, [])
  };
}

var WithinContentContext = React__default.createContext(false);

var styles$b = {
  "ButtonGroup": "Polaris-ButtonGroup",
  "Item": "Polaris-ButtonGroup__Item",
  "Item-plain": "Polaris-ButtonGroup__Item--plain",
  "segmented": "Polaris-ButtonGroup--segmented",
  "Item-focused": "Polaris-ButtonGroup__Item--focused",
  "fullWidth": "Polaris-ButtonGroup--fullWidth"
};

function Item$1(_ref) {
  var button = _ref.button;

  var _useToggle = useToggle(false),
      focused = _useToggle.value,
      forceTrueFocused = _useToggle.setTrue,
      forceFalseFocused = _useToggle.setFalse;

  var className = classNames(styles$b.Item, focused && styles$b['Item-focused'], button.props.plain && styles$b['Item-plain']);
  return /*#__PURE__*/React__default.createElement("div", {
    className: className,
    onFocus: forceTrueFocused,
    onBlur: forceFalseFocused
  }, button);
}

function ButtonGroup(_ref) {
  var children = _ref.children,
      segmented = _ref.segmented,
      fullWidth = _ref.fullWidth,
      connectedTop = _ref.connectedTop;
  var className = classNames(styles$b.ButtonGroup, segmented && styles$b.segmented, fullWidth && styles$b.fullWidth);
  var contents = elementChildren(children).map(function (child, index) {
    return /*#__PURE__*/React__default.createElement(Item$1, {
      button: child,
      key: index
    });
  });
  return /*#__PURE__*/React__default.createElement("div", {
    className: className,
    "data-buttongroup-segmented": segmented,
    "data-buttongroup-connected-top": connectedTop,
    "data-buttongroup-full-width": fullWidth
  }, contents);
}

var styles$c = {
  "Stack": "Polaris-Stack",
  "Item": "Polaris-Stack__Item",
  "noWrap": "Polaris-Stack--noWrap",
  "spacingNone": "Polaris-Stack--spacingNone",
  "spacingExtraTight": "Polaris-Stack--spacingExtraTight",
  "spacingTight": "Polaris-Stack--spacingTight",
  "spacingLoose": "Polaris-Stack--spacingLoose",
  "spacingExtraLoose": "Polaris-Stack--spacingExtraLoose",
  "distributionLeading": "Polaris-Stack--distributionLeading",
  "distributionTrailing": "Polaris-Stack--distributionTrailing",
  "distributionCenter": "Polaris-Stack--distributionCenter",
  "distributionEqualSpacing": "Polaris-Stack--distributionEqualSpacing",
  "distributionFill": "Polaris-Stack--distributionFill",
  "distributionFillEvenly": "Polaris-Stack--distributionFillEvenly",
  "alignmentLeading": "Polaris-Stack--alignmentLeading",
  "alignmentTrailing": "Polaris-Stack--alignmentTrailing",
  "alignmentCenter": "Polaris-Stack--alignmentCenter",
  "alignmentFill": "Polaris-Stack--alignmentFill",
  "alignmentBaseline": "Polaris-Stack--alignmentBaseline",
  "vertical": "Polaris-Stack--vertical",
  "Item-fill": "Polaris-Stack__Item--fill"
};

function Item$2(_ref) {
  var children = _ref.children,
      fill = _ref.fill;
  var className = classNames(styles$c.Item, fill && styles$c['Item-fill']);
  return /*#__PURE__*/React__default.createElement("div", {
    className: className
  }, children);
}

var Stack = /*#__PURE__*/memo(function Stack(_ref) {
  var children = _ref.children,
      vertical = _ref.vertical,
      spacing = _ref.spacing,
      distribution = _ref.distribution,
      alignment = _ref.alignment,
      wrap = _ref.wrap;
  var className = classNames(styles$c.Stack, vertical && styles$c.vertical, spacing && styles$c[variationName('spacing', spacing)], distribution && styles$c[variationName('distribution', distribution)], alignment && styles$c[variationName('alignment', alignment)], wrap === false && styles$c.noWrap);
  var itemMarkup = elementChildren(children).map(function (child, index) {
    var props = {
      key: index
    };
    return wrapWithComponent(child, Item$2, props);
  });
  return /*#__PURE__*/React__default.createElement("div", {
    className: className
  }, itemMarkup);
});
Stack.Item = Item$2;

var styles$d = {
  "Heading": "Polaris-Heading"
};

function Heading(_ref) {
  var _ref$element = _ref.element,
      Element = _ref$element === void 0 ? 'h2' : _ref$element,
      children = _ref.children;
  return /*#__PURE__*/React__default.createElement(Element, {
    className: styles$d.Heading
  }, children);
}

var styles$e = {
  "Card": "Polaris-Card",
  "subdued": "Polaris-Card--subdued",
  "Header": "Polaris-Card__Header",
  "Section": "Polaris-Card__Section",
  "Section-fullWidth": "Polaris-Card__Section--fullWidth",
  "Section-subdued": "Polaris-Card__Section--subdued",
  "SectionHeader": "Polaris-Card__SectionHeader",
  "Subsection": "Polaris-Card__Subsection",
  "Footer": "Polaris-Card__Footer",
  "LeftJustified": "Polaris-Card__LeftJustified"
};

function Header(_ref) {
  var children = _ref.children,
      title = _ref.title,
      actions = _ref.actions;
  var actionMarkup = actions ? /*#__PURE__*/React__default.createElement(ButtonGroup, null, buttonsFrom(actions, {
    plain: true
  })) : null;
  var titleMarkup = /*#__PURE__*/React__default.isValidElement(title) ? title : /*#__PURE__*/React__default.createElement(Heading, null, title);
  var headingMarkup = actionMarkup || children ? /*#__PURE__*/React__default.createElement(Stack, {
    alignment: "baseline"
  }, /*#__PURE__*/React__default.createElement(Stack.Item, {
    fill: true
  }, titleMarkup), actionMarkup, children) : titleMarkup;
  return /*#__PURE__*/React__default.createElement("div", {
    className: styles$e.Header
  }, headingMarkup);
}

var styles$f = {
  "Subheading": "Polaris-Subheading"
};

function Subheading(_ref) {
  var _ref$element = _ref.element,
      Element = _ref$element === void 0 ? 'h3' : _ref$element,
      children = _ref.children;
  var ariaLabel = typeof children === 'string' ? children : undefined;
  return /*#__PURE__*/React__default.createElement(Element, {
    "aria-label": ariaLabel,
    className: styles$f.Subheading
  }, children);
}

function Section$2(_ref) {
  var children = _ref.children,
      title = _ref.title,
      subdued = _ref.subdued,
      fullWidth = _ref.fullWidth,
      actions = _ref.actions;
  var className = classNames(styles$e.Section, subdued && styles$e['Section-subdued'], fullWidth && styles$e['Section-fullWidth']);
  var actionMarkup = actions ? /*#__PURE__*/React__default.createElement(ButtonGroup, null, buttonsFrom(actions, {
    plain: true
  })) : null;
  var titleMarkup = typeof title === 'string' ? /*#__PURE__*/React__default.createElement(Subheading, null, title) : title;
  var titleAreaMarkup = titleMarkup || actionMarkup ? /*#__PURE__*/React__default.createElement("div", {
    className: styles$e.SectionHeader
  }, actionMarkup ? /*#__PURE__*/React__default.createElement(Stack, {
    alignment: "baseline"
  }, /*#__PURE__*/React__default.createElement(Stack.Item, {
    fill: true
  }, titleMarkup), actionMarkup) : titleMarkup) : null;
  return /*#__PURE__*/React__default.createElement("div", {
    className: className
  }, titleAreaMarkup, children);
}

function Subsection(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React__default.createElement("div", {
    className: styles$e.Subsection
  }, children);
}

// subcomponents so explicitly state the subcomponents in the type definition.
// Letting this be implicit works in this project but fails in projects that use
// generated *.d.ts files.

var Card = function Card(_ref) {
  var children = _ref.children,
      title = _ref.title,
      subdued = _ref.subdued,
      sectioned = _ref.sectioned,
      actions = _ref.actions,
      primaryFooterAction = _ref.primaryFooterAction,
      secondaryFooterActions = _ref.secondaryFooterActions,
      secondaryFooterActionsDisclosureText = _ref.secondaryFooterActionsDisclosureText,
      _ref$footerActionAlig = _ref.footerActionAlignment,
      footerActionAlignment = _ref$footerActionAlig === void 0 ? 'right' : _ref$footerActionAlig;
  var i18n = useI18n();

  var _useToggle = useToggle(false),
      secondaryActionsPopoverOpen = _useToggle.value,
      toggleSecondaryActionsPopoverOpen = _useToggle.toggle;

  var className = classNames(styles$e.Card, subdued && styles$e.subdued);
  var headerMarkup = title || actions ? /*#__PURE__*/React__default.createElement(Header, {
    actions: actions,
    title: title
  }) : null;
  var content = sectioned ? /*#__PURE__*/React__default.createElement(Section$2, null, children) : children;
  var primaryFooterActionMarkup = primaryFooterAction ? buttonFrom(primaryFooterAction, {
    primary: true
  }) : null;
  var secondaryFooterActionsMarkup = null;

  if (secondaryFooterActions && secondaryFooterActions.length) {
    if (secondaryFooterActions.length === 1) {
      secondaryFooterActionsMarkup = buttonFrom(secondaryFooterActions[0]);
    } else {
      secondaryFooterActionsMarkup = /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(Popover, {
        active: secondaryActionsPopoverOpen,
        activator: /*#__PURE__*/React__default.createElement(Button, {
          disclosure: true,
          onClick: toggleSecondaryActionsPopoverOpen
        }, secondaryFooterActionsDisclosureText || i18n.translate('Polaris.Common.more')),
        onClose: toggleSecondaryActionsPopoverOpen
      }, /*#__PURE__*/React__default.createElement(ActionList, {
        items: secondaryFooterActions
      })));
    }
  }

  var footerMarkup = primaryFooterActionMarkup || secondaryFooterActionsMarkup ? /*#__PURE__*/React__default.createElement("div", {
    className: classNames(styles$e.Footer, footerActionAlignment === 'left' && styles$e.LeftJustified)
  }, footerActionAlignment === 'right' ? /*#__PURE__*/React__default.createElement(ButtonGroup, null, secondaryFooterActionsMarkup, primaryFooterActionMarkup) : /*#__PURE__*/React__default.createElement(ButtonGroup, null, primaryFooterActionMarkup, secondaryFooterActionsMarkup)) : null;
  return /*#__PURE__*/React__default.createElement(WithinContentContext.Provider, {
    value: true
  }, /*#__PURE__*/React__default.createElement("div", {
    className: className
  }, headerMarkup, content, footerMarkup));
};
Card.Header = Header;
Card.Section = Section$2;
Card.Subsection = Subsection;

var styles$g = {
  "SettingAction": "Polaris-SettingAction",
  "Setting": "Polaris-SettingAction__Setting",
  "Action": "Polaris-SettingAction__Action"
};

function SettingAction(_ref) {
  var action = _ref.action,
      children = _ref.children;
  return /*#__PURE__*/React__default.createElement("div", {
    className: styles$g.SettingAction
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles$g.Setting
  }, children), /*#__PURE__*/React__default.createElement("div", {
    className: styles$g.Action
  }, action));
}

var styles$h = {
  "TermsOfService": "Polaris-AccountConnection__TermsOfService",
  "Content": "Polaris-AccountConnection__Content"
};

function AccountConnection(_ref) {
  var _ref$connected = _ref.connected,
      connected = _ref$connected === void 0 ? false : _ref$connected,
      action = _ref.action,
      avatarUrl = _ref.avatarUrl,
      _ref$accountName = _ref.accountName,
      accountName = _ref$accountName === void 0 ? '' : _ref$accountName,
      title = _ref.title,
      details = _ref.details,
      termsOfService = _ref.termsOfService;
  var initials = accountName ? accountName.split(/\s+/).map(function (name) {
    return name[0];
  }).join('') : undefined;
  var avatarMarkup = connected ? /*#__PURE__*/React__default.createElement(Avatar, {
    accessibilityLabel: "",
    name: accountName,
    initials: initials,
    source: avatarUrl
  }) : null;
  var titleMarkup = null;

  if (title) {
    titleMarkup = /*#__PURE__*/React__default.createElement("div", null, title);
  } else if (accountName) {
    titleMarkup = /*#__PURE__*/React__default.createElement("div", null, accountName);
  }

  var detailsMarkup = details ? /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(TextStyle, {
    variation: "subdued"
  }, details)) : null;
  var termsOfServiceMarkup = termsOfService ? /*#__PURE__*/React__default.createElement("div", {
    className: styles$h.TermsOfService
  }, termsOfService) : null;
  var actionElement = action ? buttonFrom(action, {
    primary: !connected
  }) : null;
  return /*#__PURE__*/React__default.createElement(Card, {
    sectioned: true
  }, /*#__PURE__*/React__default.createElement(SettingAction, {
    action: actionElement
  }, /*#__PURE__*/React__default.createElement(Stack, null, avatarMarkup, /*#__PURE__*/React__default.createElement(Stack.Item, {
    fill: true
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles$h.Content
  }, titleMarkup, detailsMarkup)))), termsOfServiceMarkup);
}

function sortAndOverrideActionOrder(actions) {
  var actionsWithOverrides = actions.filter(function (action) {
    return action.index !== undefined;
  });

  if (actionsWithOverrides.length === 0) {
    return actions;
  }

  var sortedActionsWithOverrides = actionsWithOverrides.sort(function (_ref, _ref2) {
    var indexA = _ref.index;
    var indexB = _ref2.index;
    return indexA - indexB;
  });
  var actionsWithoutOverrides = actions.filter(function (action) {
    return action.index === undefined;
  });

  var overriddenActions = _toConsumableArray(actionsWithoutOverrides);

  sortedActionsWithOverrides.forEach(function (action) {
    overriddenActions.splice(action.index, 0, action);
  });
  return overriddenActions;
}

var styles$i = {
  "MenuAction": "Polaris-ActionMenu-MenuAction",
  "IconWrapper": "Polaris-ActionMenu-MenuAction__IconWrapper",
  "disabled": "Polaris-ActionMenu-MenuAction--disabled",
  "ContentWrapper": "Polaris-ActionMenu-MenuAction__ContentWrapper"
};

function MenuAction(_ref) {
  var content = _ref.content,
      accessibilityLabel = _ref.accessibilityLabel,
      url = _ref.url,
      external = _ref.external,
      icon = _ref.icon,
      disclosure = _ref.disclosure,
      disabled = _ref.disabled,
      onAction = _ref.onAction;
  var iconMarkup = icon && /*#__PURE__*/React__default.createElement("span", {
    className: styles$i.IconWrapper
  }, /*#__PURE__*/React__default.createElement(Icon, {
    source: icon
  }));
  var disclosureIconMarkup = disclosure && /*#__PURE__*/React__default.createElement("span", {
    className: styles$i.IconWrapper
  }, /*#__PURE__*/React__default.createElement(Icon, {
    source: CaretDownMinor
  }));
  var contentMarkup = iconMarkup || disclosureIconMarkup ? /*#__PURE__*/React__default.createElement("span", {
    className: styles$i.ContentWrapper
  }, iconMarkup, /*#__PURE__*/React__default.createElement("span", {
    className: styles$i.Content
  }, content), disclosureIconMarkup) : content;
  var menuActionClassNames = classNames(styles$i.MenuAction, disabled && styles$i.disabled);

  if (url) {
    return /*#__PURE__*/React__default.createElement(UnstyledLink, {
      className: menuActionClassNames,
      url: url,
      external: external,
      "aria-label": accessibilityLabel,
      onMouseUp: handleMouseUpByBlurring
    }, contentMarkup);
  }

  return /*#__PURE__*/React__default.createElement("button", {
    type: "button",
    className: menuActionClassNames,
    disabled: disabled,
    "aria-label": accessibilityLabel,
    onClick: onAction,
    onMouseUp: handleMouseUpByBlurring
  }, contentMarkup);
}

var styles$j = {
  "Details": "Polaris-ActionMenu-MenuGroup__Details"
};

function MenuGroup(_ref) {
  var accessibilityLabel = _ref.accessibilityLabel,
      active = _ref.active,
      actions = _ref.actions,
      details = _ref.details,
      title = _ref.title,
      icon = _ref.icon,
      onClose = _ref.onClose,
      onOpen = _ref.onOpen;

  var _useFeatures = useFeatures(),
      newDesignLanguage = _useFeatures.newDesignLanguage;

  var handleClose = useCallback(function () {
    onClose(title);
  }, [onClose, title]);
  var handleOpen = useCallback(function () {
    onOpen(title);
  }, [onOpen, title]);

  if (!actions.length) {
    return null;
  }

  var popoverActivator = newDesignLanguage ? /*#__PURE__*/React__default.createElement(Button, {
    disclosure: true,
    icon: icon,
    accessibilityLabel: accessibilityLabel,
    onClick: handleOpen
  }, title) : /*#__PURE__*/React__default.createElement(MenuAction, {
    disclosure: true,
    content: title,
    icon: icon,
    accessibilityLabel: accessibilityLabel,
    onAction: handleOpen
  });
  return /*#__PURE__*/React__default.createElement(Popover, {
    active: Boolean(active),
    activator: popoverActivator,
    preferredAlignment: "left",
    onClose: handleClose
  }, /*#__PURE__*/React__default.createElement(ActionList, {
    items: actions,
    onActionAnyItem: handleClose
  }), details && /*#__PURE__*/React__default.createElement("div", {
    className: styles$j.Details
  }, details));
}

var styles$k = {
  "RollupActivator": "Polaris-ActionMenu-RollupActions__RollupActivator"
};

function RollupActions(_ref) {
  var _ref$items = _ref.items,
      items = _ref$items === void 0 ? [] : _ref$items,
      _ref$sections = _ref.sections,
      sections = _ref$sections === void 0 ? [] : _ref$sections;
  var i18n = useI18n();

  var _useFeatures = useFeatures(),
      newDesignLanguage = _useFeatures.newDesignLanguage;

  var _useToggle = useToggle(false),
      rollupOpen = _useToggle.value,
      toggleRollupOpen = _useToggle.toggle;

  if (items.length === 0 && sections.length === 0) {
    return null;
  }

  var activatorMarkup = /*#__PURE__*/React__default.createElement("div", {
    className: styles$k.RollupActivator
  }, /*#__PURE__*/React__default.createElement(Button, {
    plain: !newDesignLanguage,
    icon: HorizontalDotsMinor,
    accessibilityLabel: i18n.translate('Polaris.ActionMenu.RollupActions.rollupButton'),
    onClick: toggleRollupOpen
  }));
  return /*#__PURE__*/React__default.createElement(Popover, {
    active: rollupOpen,
    activator: activatorMarkup,
    preferredAlignment: "right",
    onClose: toggleRollupOpen
  }, /*#__PURE__*/React__default.createElement(ActionList, {
    items: items,
    sections: sections,
    onActionAnyItem: toggleRollupOpen
  }));
}

var styles$l = {
  "ActionMenu": "Polaris-ActionMenu",
  "rollup": "Polaris-ActionMenu--rollup",
  "ActionsLayout": "Polaris-ActionMenu__ActionsLayout"
};

var ActionMenu = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(ActionMenu, _React$PureComponent);

  var _super = _createSuper(ActionMenu);

  function ActionMenu() {
    var _this;

    _classCallCheck(this, ActionMenu);

    _this = _super.apply(this, arguments);
    _this.state = {
      activeMenuGroup: undefined
    };

    _this.renderActions = function () {
      var _ref = _this.context || {},
          newDesignLanguage = _ref.newDesignLanguage;

      var _this$props = _this.props,
          _this$props$actions = _this$props.actions,
          actions = _this$props$actions === void 0 ? [] : _this$props$actions,
          _this$props$groups = _this$props.groups,
          groups = _this$props$groups === void 0 ? [] : _this$props$groups;
      var activeMenuGroup = _this.state.activeMenuGroup;
      var menuActions = [].concat(_toConsumableArray(actions), _toConsumableArray(groups));
      var overriddenActions = sortAndOverrideActionOrder(menuActions);
      var actionMarkup = overriddenActions.map(function (action, index) {
        if ('title' in action) {
          var title = action.title,
              _actions = action.actions,
              _rest = __rest(action, ["title", "actions"]);

          return _actions.length > 0 ? /*#__PURE__*/React__default.createElement(MenuGroup, Object.assign({
            key: "MenuGroup-".concat(index),
            title: title,
            active: title === activeMenuGroup,
            actions: _actions
          }, _rest, {
            onOpen: _this.handleMenuGroupToggle,
            onClose: _this.handleMenuGroupClose
          })) : null;
        }

        var content = action.content,
            rest = __rest(action, ["content"]);

        return newDesignLanguage ? /*#__PURE__*/React__default.createElement(Button, Object.assign({
          key: index
        }, rest), content) : /*#__PURE__*/React__default.createElement(MenuAction, Object.assign({
          key: "MenuAction-".concat(index),
          content: content
        }, rest));
      });
      return /*#__PURE__*/React__default.createElement("div", {
        className: styles$l.ActionsLayout
      }, newDesignLanguage ? /*#__PURE__*/React__default.createElement(ButtonGroup, null, actionMarkup) : actionMarkup);
    };

    _this.handleMenuGroupToggle = function (group) {
      _this.setState(function (_ref2) {
        var activeMenuGroup = _ref2.activeMenuGroup;
        return {
          activeMenuGroup: activeMenuGroup ? undefined : group
        };
      });
    };

    _this.handleMenuGroupClose = function () {
      _this.setState({
        activeMenuGroup: undefined
      });
    };

    return _this;
  }

  _createClass(ActionMenu, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          _this$props2$actions = _this$props2.actions,
          actions = _this$props2$actions === void 0 ? [] : _this$props2$actions,
          _this$props2$groups = _this$props2.groups,
          groups = _this$props2$groups === void 0 ? [] : _this$props2$groups,
          rollup = _this$props2.rollup;

      if (actions.length === 0 && groups.length === 0) {
        return null;
      }

      var actionMenuClassNames = classNames(styles$l.ActionMenu, rollup && styles$l.rollup);
      var rollupSections = groups.map(function (group) {
        return convertGroupToSection(group);
      });
      return /*#__PURE__*/React__default.createElement("div", {
        className: actionMenuClassNames
      }, rollup ? /*#__PURE__*/React__default.createElement(RollupActions, {
        items: actions,
        sections: rollupSections
      }) : this.renderActions());
    }
  }]);

  return ActionMenu;
}(React__default.PureComponent);
ActionMenu.contextType = FeaturesContext;
function hasGroupsWithActions() {
  var groups = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return groups.length === 0 ? false : groups.some(function (group) {
    return group.actions.length > 0;
  });
}

function convertGroupToSection(_ref3) {
  var title = _ref3.title,
      actions = _ref3.actions;
  return {
    title,
    items: actions
  };
}

function ThemeProvider(_ref) {
  var themeConfig = _ref.theme,
      children = _ref.children;

  var _useFeatures = useFeatures(),
      newDesignLanguage = _useFeatures.newDesignLanguage;

  var parentContext = useContext(ThemeContext);
  var isParentThemeProvider = parentContext === undefined;
  var parentColorScheme = parentContext && parentContext.colorScheme && parentContext.colorScheme;
  var parentColors = parentContext && parentContext.colors && parentContext.colors;

  var colors = themeConfig.colors,
      colorScheme = themeConfig.colorScheme,
      rest = __rest(themeConfig, ["colors", "colorScheme"]);

  var processedThemeConfig = Object.assign(Object.assign(Object.assign({}, rest), {
    colorScheme: getColorScheme(colorScheme, parentColorScheme)
  }), {
    colors: Object.assign(Object.assign(Object.assign({}, isParentThemeProvider && DefaultThemeColors), parentColors != null && parentColors), colors)
  });
  var customProperties = useMemo(function () {
    return buildCustomProperties(processedThemeConfig, newDesignLanguage, Tokens);
  }, [processedThemeConfig, newDesignLanguage]);
  var theme = useMemo(function () {
    return buildThemeContext(processedThemeConfig, newDesignLanguage ? customProperties : undefined);
  }, [customProperties, processedThemeConfig, newDesignLanguage]); // We want these values to be empty string instead of `undefined` when not set.
  // Otherwise, setting a style property to `undefined` does not remove it from the DOM.

  var backgroundColor = customProperties['--p-background'] || '';
  var color = customProperties['--p-text'] || '';
  useEffect(function () {
    if (isParentThemeProvider) {
      document.body.style.backgroundColor = backgroundColor;
      document.body.style.color = color;
    }
  }, [backgroundColor, color, isParentThemeProvider]);
  var style = Object.assign(Object.assign({}, customProperties), !isParentThemeProvider && {
    color
  });
  return /*#__PURE__*/React__default.createElement(ThemeContext.Provider, {
    value: Object.assign(Object.assign({}, theme), {
      textColor: color
    })
  }, /*#__PURE__*/React__default.createElement("div", {
    style: style
  }, children));
}

function isInverseColorScheme(colorScheme) {
  return colorScheme === 'inverse';
}

function getColorScheme(colorScheme, parentColorScheme) {
  if (colorScheme == null) {
    return parentColorScheme || 'light';
  } else if (isInverseColorScheme(colorScheme)) {
    return parentColorScheme === 'dark' || parentColorScheme === undefined ? 'light' : 'dark';
  } else {
    return colorScheme;
  }
}

var MediaQueryContext = React__default.createContext(undefined);

function useMediaQuery() {
  var mediaQuery = useContext(MediaQueryContext);

  if (!mediaQuery) {
    throw new Error('No mediaQuery was provided. Your application must be wrapped in an <AppProvider> component. See https://polaris.shopify.com/components/structure/app-provider for implementation instructions.');
  }

  return mediaQuery;
}

var MediaQueryProvider = function MediaQueryProvider(_ref) {
  var children = _ref.children;

  var _useState = useState(navigationBarCollapsed().matches),
      _useState2 = _slicedToArray(_useState, 2),
      isNavigationCollapsed = _useState2[0],
      setIsNavigationCollapsed = _useState2[1];

  var handleResize = useCallback(debounce(function () {
    if (isNavigationCollapsed !== navigationBarCollapsed().matches) {
      setIsNavigationCollapsed(!isNavigationCollapsed);
    }
  }, 40, {
    trailing: true,
    leading: true,
    maxWait: 40
  }), [isNavigationCollapsed]);
  useEffect(function () {
    setIsNavigationCollapsed(navigationBarCollapsed().matches);
  }, []);
  return /*#__PURE__*/React__default.createElement(MediaQueryContext.Provider, {
    value: {
      isNavigationCollapsed
    }
  }, /*#__PURE__*/React__default.createElement(EventListener, {
    event: "resize",
    handler: handleResize
  }), children);
};

var FocusManagerContext = React__default.createContext(undefined);

function useFocusManager() {
  var focusManager = useContext(FocusManagerContext);
  var id = useUniqueId();

  if (!focusManager) {
    throw new MissingAppProviderError('No FocusManager was provided.');
  }

  var trapFocusList = focusManager.trapFocusList,
      addFocusItem = focusManager.add,
      removeFocusItem = focusManager.remove;
  var canSafelyFocus = trapFocusList[0] === id;
  var value = useMemo(function () {
    return {
      canSafelyFocus
    };
  }, [canSafelyFocus]);
  useEffect(function () {
    addFocusItem(id);
    return function () {
      removeFocusItem(id);
    };
  }, [addFocusItem, id, removeFocusItem]);
  return value;
}

function FocusManager(_ref) {
  var children = _ref.children;

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      trapFocusList = _useState2[0],
      setTrapFocusList = _useState2[1];

  var add = useCallback(function (id) {
    setTrapFocusList(function (list) {
      return [].concat(_toConsumableArray(list), [id]);
    });
  }, []);
  var remove = useCallback(function (id) {
    var removed = true;
    setTrapFocusList(function (list) {
      var clone = _toConsumableArray(list);

      var index = clone.indexOf(id);

      if (index === -1) {
        removed = false;
      } else {
        clone.splice(index, 1);
      }

      return clone;
    });
    return removed;
  }, []);
  var value = useMemo(function () {
    return {
      trapFocusList,
      add,
      remove
    };
  }, [add, trapFocusList, remove]);
  return /*#__PURE__*/React__default.createElement(FocusManagerContext.Provider, {
    value: value
  }, children);
}

var ScrollLockManagerContext = React__default.createContext(undefined);

function useScrollLockManager() {
  var scrollLockManager = useContext(ScrollLockManagerContext);

  if (!scrollLockManager) {
    throw new MissingAppProviderError('No ScrollLockManager was provided.');
  }

  return scrollLockManager;
}

var isServer = typeof window === 'undefined' || typeof document === 'undefined';

var SCROLL_LOCKING_ATTRIBUTE = 'data-lock-scrolling';
var SCROLL_LOCKING_WRAPPER_ATTRIBUTE = 'data-lock-scrolling-wrapper';
var scrollPosition = 0;
var ScrollLockManager = /*#__PURE__*/function () {
  function ScrollLockManager() {
    _classCallCheck(this, ScrollLockManager);

    this.scrollLocks = 0;
    this.locked = false;
  }

  _createClass(ScrollLockManager, [{
    key: "registerScrollLock",
    value: function registerScrollLock() {
      this.scrollLocks += 1;
      this.handleScrollLocking();
    }
  }, {
    key: "unregisterScrollLock",
    value: function unregisterScrollLock() {
      this.scrollLocks -= 1;
      this.handleScrollLocking();
    }
  }, {
    key: "handleScrollLocking",
    value: function handleScrollLocking() {
      if (isServer) return;
      var scrollLocks = this.scrollLocks;
      var _document = document,
          body = _document.body;
      var wrapper = body.firstElementChild;

      if (scrollLocks === 0) {
        body.removeAttribute(SCROLL_LOCKING_ATTRIBUTE);

        if (wrapper) {
          wrapper.removeAttribute(SCROLL_LOCKING_WRAPPER_ATTRIBUTE);
        }

        window.scroll(0, scrollPosition);
        this.locked = false;
      } else if (scrollLocks > 0 && !this.locked) {
        scrollPosition = window.pageYOffset;
        body.setAttribute(SCROLL_LOCKING_ATTRIBUTE, '');

        if (wrapper) {
          wrapper.setAttribute(SCROLL_LOCKING_WRAPPER_ATTRIBUTE, '');
          wrapper.scrollTop = scrollPosition;
        }

        this.locked = true;
      }
    }
  }, {
    key: "resetScrollPosition",
    value: function resetScrollPosition() {
      scrollPosition = 0;
    }
  }]);

  return ScrollLockManager;
}();

var AppBridgeContext = React__default.createContext(undefined);

function useAppBridge() {
  return useContext(AppBridgeContext);
}

function createAppBridge(_ref) {
  var apiKey = _ref.apiKey,
      shopOrigin = _ref.shopOrigin,
      forceRedirect = _ref.forceRedirect;
  var appBridge = apiKey ? createApp({
    apiKey,
    shopOrigin: shopOrigin || getShopOrigin(),
    forceRedirect
  }) : undefined;

  if (appBridge !== undefined) {
    // eslint-disable-next-line no-console
    console.warn('Deprecation: Using `apiKey` and `shopOrigin` on `AppProvider` to initialize the Shopify App Bridge is deprecated. Support for this will be removed in v5.0. Use `Provider` from `@shopify/app-bridge-react` instead: https://help.shopify.com/en/api/embedded-apps/app-bridge/react-components/provider');
  }

  if (appBridge && appBridge.hooks) {
    appBridge.hooks.set(LifecycleHook.DispatchAction, setClientInterfaceHook);
  }

  return appBridge;
}
var setClientInterfaceHook = function setClientInterfaceHook(next) {
  return function (action) {
    action.clientInterface = {
      name: '@shopify/polaris',
      version: polarisVersion
    };
    return next(action);
  };
};

var AppProvider = /*#__PURE__*/function (_React$Component) {
  _inherits(AppProvider, _React$Component);

  var _super = _createSuper(AppProvider);

  function AppProvider(props) {
    var _this;

    _classCallCheck(this, AppProvider);

    _this = _super.call(this, props);
    _this.stickyManager = new StickyManager();
    _this.scrollLockManager = new ScrollLockManager();
    _this.uniqueIdFactory = new UniqueIdFactory(globalIdGeneratorFactory);
    var _this$props = _this.props,
        i18n = _this$props.i18n,
        apiKey = _this$props.apiKey,
        shopOrigin = _this$props.shopOrigin,
        forceRedirect = _this$props.forceRedirect,
        linkComponent = _this$props.linkComponent; // eslint-disable-next-line react/state-in-constructor

    _this.state = {
      link: linkComponent,
      intl: new I18n(i18n),
      appBridge: createAppBridge({
        shopOrigin,
        apiKey,
        forceRedirect
      })
    };
    return _this;
  }

  _createClass(AppProvider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (document != null) {
        this.stickyManager.setContainer(document);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_ref) {
      var prevI18n = _ref.i18n,
          prevLinkComponent = _ref.linkComponent,
          prevApiKey = _ref.apiKey,
          prevShopOrigin = _ref.shopOrigin,
          prevForceRedirect = _ref.forceRedirect;
      var _this$props2 = this.props,
          i18n = _this$props2.i18n,
          linkComponent = _this$props2.linkComponent,
          apiKey = _this$props2.apiKey,
          shopOrigin = _this$props2.shopOrigin,
          forceRedirect = _this$props2.forceRedirect;

      if (i18n === prevI18n && linkComponent === prevLinkComponent && apiKey === prevApiKey && shopOrigin === prevShopOrigin && forceRedirect === prevForceRedirect) {
        return;
      } // eslint-disable-next-line react/no-did-update-set-state


      this.setState({
        link: linkComponent,
        intl: new I18n(i18n),
        appBridge: createAppBridge({
          shopOrigin,
          apiKey,
          forceRedirect
        })
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          _this$props3$theme = _this$props3.theme,
          theme = _this$props3$theme === void 0 ? {} : _this$props3$theme,
          children = _this$props3.children;
      var _this$state = this.state,
          intl = _this$state.intl,
          appBridge = _this$state.appBridge,
          link = _this$state.link;
      var features = Object.assign({
        newDesignLanguage: false
      }, this.props.features);
      return /*#__PURE__*/React__default.createElement(FeaturesContext.Provider, {
        value: features
      }, /*#__PURE__*/React__default.createElement(I18nContext.Provider, {
        value: intl
      }, /*#__PURE__*/React__default.createElement(ScrollLockManagerContext.Provider, {
        value: this.scrollLockManager
      }, /*#__PURE__*/React__default.createElement(StickyManagerContext.Provider, {
        value: this.stickyManager
      }, /*#__PURE__*/React__default.createElement(UniqueIdFactoryContext.Provider, {
        value: this.uniqueIdFactory
      }, /*#__PURE__*/React__default.createElement(AppBridgeContext.Provider, {
        value: appBridge
      }, /*#__PURE__*/React__default.createElement(LinkContext.Provider, {
        value: link
      }, /*#__PURE__*/React__default.createElement(ThemeProvider, {
        theme: theme
      }, /*#__PURE__*/React__default.createElement(MediaQueryProvider, null, /*#__PURE__*/React__default.createElement(FocusManager, null, children))))))))));
    }
  }]);

  return AppProvider;
}(React__default.Component);

function arraysAreEqual(firstArray, secondArray, comparator) {
  if (firstArray.length !== secondArray.length) {
    return false;
  }

  return firstArray.every(function (firstItem, index) {
    var secondItem = secondArray[index];

    if (comparator != null) {
      return comparator(firstItem, secondItem);
    }

    return firstItem === secondItem;
  });
}

/**
 * Allows for custom or deep comparison of a dependency list. Useful to keep a consistent dependency
 * list across reference changes.
 * @param dependencies A dependency array similar to React.useEffect/React.useCallback/React.useMemo
 * @param comparator An optional function to compare dependencies that'll default to a deep comparison
 * @returns A dependency list
 * @see {@link https://github.com/Shopify/polaris-react/blob/master/src/utilities/use-deep-effect.tsx}
 * @see {@link https://github.com/Shopify/polaris-react/blob/master/src/utilities/use-deep-callback.tsx}
 * @example
 * function useDeepEffectExample(callback, dependencies, customCompare) {
 *  useEffect(callback, useDeepCompareRef(dependencies, customCompare));
 * }
 */

function useDeepCompareRef(dependencies) {
  var comparator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : isEqual;
  var dependencyList = useRef(dependencies);

  if (!comparator(dependencyList.current, dependencies)) {
    dependencyList.current = dependencies;
  }

  return dependencyList.current;
}

/**
 * A replacement for React.useEffect that'll allow for custom and deep
 * compares of the dependency list.
 * @see {@link https://reactjs.org/docs/hooks-reference.html#useeffect}
 * @param callback Accepts a callback that's forwarded to React.useEffect
 * @param dependencies A dependency array similar to React.useEffect however it utilizes a deep compare
 * @param customCompare Opportunity to provide a custom compare function
 * @example
 * function ComponentExample() {
 *  const [, forceUpdate] = useState();
 *  const obj = {a: 1};
 *
 *  useDeepEffect(() => {
 *    console.log('useDeepEffect invocation');
 *    forceUpdate(obj);
 *  }, [obj]);
 *
 *  return null;
 * }
 */

function useDeepEffect(callback, dependencies, customCompare) {
  useEffect(callback, useDeepCompareRef(dependencies, customCompare));
}

var styles$m = {
  "Checkbox": "Polaris-OptionList-Checkbox",
  "Input": "Polaris-OptionList-Checkbox__Input",
  "newDesignLanguage": "Polaris-OptionList-Checkbox--newDesignLanguage",
  "Backdrop": "Polaris-OptionList-Checkbox__Backdrop",
  "Icon": "Polaris-OptionList-Checkbox__Icon",
  "active": "Polaris-OptionList-Checkbox--active",
  "keyFocused": "Polaris-OptionList-Checkbox--keyFocused",
  "Input-indeterminate": "Polaris-OptionList-Checkbox__Input--indeterminate",
  "hover": "Polaris-OptionList-Checkbox--hover"
};

function Checkbox(_ref) {
  var idProp = _ref.id,
      _ref$checked = _ref.checked,
      checked = _ref$checked === void 0 ? false : _ref$checked,
      disabled = _ref.disabled,
      active = _ref.active,
      onChange = _ref.onChange,
      name = _ref.name,
      value = _ref.value,
      role = _ref.role;
  var id = useUniqueId('Checkbox', idProp);

  var _useFeatures = useFeatures(),
      newDesignLanguage = _useFeatures.newDesignLanguage;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      keyFocused = _useState2[0],
      setKeyFocused = _useState2[1];

  var className = classNames(styles$m.Checkbox, active && styles$m.active, newDesignLanguage && styles$m.newDesignLanguage);

  var handleBlur = function handleBlur() {
    setKeyFocused(false);
  };

  var handleKeyUp = function handleKeyUp() {
    !keyFocused && setKeyFocused(true);
  };

  var inputClassName = classNames(styles$m.Input, newDesignLanguage && keyFocused && styles$m.keyFocused);
  return /*#__PURE__*/React__default.createElement("div", {
    className: className
  }, /*#__PURE__*/React__default.createElement("input", {
    id: id,
    name: name,
    value: value,
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    className: inputClassName,
    "aria-checked": checked,
    onChange: onChange,
    onBlur: handleBlur,
    onKeyUp: handleKeyUp,
    role: role
  }), /*#__PURE__*/React__default.createElement("div", {
    className: styles$m.Backdrop
  }), /*#__PURE__*/React__default.createElement("div", {
    className: styles$m.Icon
  }, /*#__PURE__*/React__default.createElement(Icon, {
    source: TickSmallMinor
  })));
}

var styles$n = {
  "Option": "Polaris-OptionList-Option",
  "SingleSelectOption": "Polaris-OptionList-Option__SingleSelectOption",
  "disabled": "Polaris-OptionList-Option--disabled",
  "Media": "Polaris-OptionList-Option__Media",
  "Label": "Polaris-OptionList-Option__Label",
  "Checkbox": "Polaris-OptionList-Option__Checkbox",
  "newDesignLanguage": "Polaris-OptionList-Option--newDesignLanguage",
  "focused": "Polaris-OptionList-Option--focused",
  "select": "Polaris-OptionList-Option--select",
  "active": "Polaris-OptionList-Option--active"
};

function Option(_ref) {
  var label = _ref.label,
      value = _ref.value,
      id = _ref.id,
      select = _ref.select,
      active = _ref.active,
      allowMultiple = _ref.allowMultiple,
      disabled = _ref.disabled,
      role = _ref.role,
      media = _ref.media,
      onClick = _ref.onClick,
      section = _ref.section,
      index = _ref.index;

  var _useToggle = useToggle(false),
      focused = _useToggle.value,
      toggleFocused = _useToggle.toggle;

  var _useFeatures = useFeatures(),
      newDesignLanguage = _useFeatures.newDesignLanguage;

  var handleClick = useCallback(function () {
    if (disabled) {
      return;
    }

    onClick(section, index);
  }, [disabled, index, onClick, section]);
  var mediaMarkup = media ? /*#__PURE__*/React__default.createElement("div", {
    className: styles$n.Media
  }, media) : null;
  var singleSelectClassName = classNames(styles$n.SingleSelectOption, focused && styles$n.focused, disabled && styles$n.disabled, select && styles$n.select, active && styles$n.active);
  var multiSelectClassName = classNames(styles$n.Label, disabled && styles$n.disabled, active && styles$n.active, newDesignLanguage && select && styles$n.select);
  var checkBoxRole = role === 'option' ? 'presentation' : undefined;
  var optionMarkup = allowMultiple ? /*#__PURE__*/React__default.createElement("label", {
    htmlFor: id,
    className: multiSelectClassName
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles$n.Checkbox
  }, /*#__PURE__*/React__default.createElement(Checkbox, {
    id: id,
    value: value,
    checked: select,
    active: active,
    disabled: disabled,
    onChange: handleClick,
    role: checkBoxRole
  })), mediaMarkup, label) : /*#__PURE__*/React__default.createElement("button", {
    id: id,
    type: "button",
    className: singleSelectClassName,
    onClick: handleClick,
    disabled: disabled,
    onFocus: toggleFocused,
    onBlur: toggleFocused
  }, mediaMarkup, label);
  var scrollMarkup = active ? /*#__PURE__*/React__default.createElement(Scrollable.ScrollTo, null) : null;
  var optionClassName = classNames(styles$n.Option, newDesignLanguage && styles$n.newDesignLanguage);
  return /*#__PURE__*/React__default.createElement("li", {
    key: id,
    className: optionClassName,
    tabIndex: -1,
    "aria-selected": active,
    role: role
  }, scrollMarkup, optionMarkup);
}

var styles$o = {
  "OptionList": "Polaris-OptionList",
  "newDesignLanguage": "Polaris-OptionList--newDesignLanguage",
  "Options": "Polaris-OptionList__Options",
  "Title": "Polaris-OptionList__Title"
};

function OptionList(_ref) {
  var options = _ref.options,
      sections = _ref.sections,
      title = _ref.title,
      selected = _ref.selected,
      allowMultiple = _ref.allowMultiple,
      role = _ref.role,
      optionRole = _ref.optionRole,
      onChange = _ref.onChange,
      idProp = _ref.id;

  var _useState = useState(createNormalizedOptions(options, sections, title)),
      _useState2 = _slicedToArray(_useState, 2),
      normalizedOptions = _useState2[0],
      setNormalizedOptions = _useState2[1];

  var id = useUniqueId('OptionList', idProp);

  var _useFeatures = useFeatures(),
      newDesignLanguage = _useFeatures.newDesignLanguage;

  useDeepEffect(function () {
    setNormalizedOptions(createNormalizedOptions(options || [], sections || [], title));
  }, [options, sections, title], optionArraysAreEqual);
  var handleClick = useCallback(function (sectionIndex, optionIndex) {
    var selectedValue = normalizedOptions[sectionIndex].options[optionIndex].value;
    var foundIndex = selected.indexOf(selectedValue);

    if (allowMultiple) {
      var newSelection = foundIndex === -1 ? [selectedValue].concat(_toConsumableArray(selected)) : [].concat(_toConsumableArray(selected.slice(0, foundIndex)), _toConsumableArray(selected.slice(foundIndex + 1, selected.length)));
      onChange(newSelection);
      return;
    }

    onChange([selectedValue]);
  }, [normalizedOptions, selected, allowMultiple, onChange]);
  var optionsExist = normalizedOptions.length > 0;
  var optionsMarkup = optionsExist ? normalizedOptions.map(function (_ref2, sectionIndex) {
    var title = _ref2.title,
        options = _ref2.options;
    var titleMarkup = title ? /*#__PURE__*/React__default.createElement("p", {
      className: styles$o.Title,
      role: role
    }, title) : null;
    var optionsMarkup = options && options.map(function (option, optionIndex) {
      var isSelected = selected.includes(option.value);
      var optionId = option.id || "".concat(id, "-").concat(sectionIndex, "-").concat(optionIndex);
      return /*#__PURE__*/React__default.createElement(Option, Object.assign({}, option, {
        key: optionId,
        id: optionId,
        section: sectionIndex,
        index: optionIndex,
        onClick: handleClick,
        select: isSelected,
        allowMultiple: allowMultiple,
        role: optionRole
      }));
    });
    return /*#__PURE__*/React__default.createElement("li", {
      key: title || "noTitle-".concat(sectionIndex)
    }, titleMarkup, /*#__PURE__*/React__default.createElement("ul", {
      className: styles$o.Options,
      id: "".concat(id, "-").concat(sectionIndex),
      role: role,
      "aria-multiselectable": allowMultiple
    }, optionsMarkup));
  }) : null;
  var optionListClassName = classNames(styles$o.OptionList, newDesignLanguage && styles$o.newDesignLanguage);
  return /*#__PURE__*/React__default.createElement("ul", {
    className: optionListClassName,
    role: role
  }, optionsMarkup);
}

function createNormalizedOptions(options, sections, title) {
  if (options == null) {
    var section = {
      options: [],
      title
    };
    return sections == null ? [] : [section].concat(_toConsumableArray(sections));
  }

  if (sections == null) {
    return [{
      title,
      options
    }];
  }

  return [{
    title,
    options
  }].concat(_toConsumableArray(sections));
}

function isSection(arr) {
  return typeof arr[0] === 'object' && Object.prototype.hasOwnProperty.call(arr[0], 'options');
}

function optionArraysAreEqual(firstArray, secondArray) {
  if (isSection(firstArray) && isSection(secondArray)) {
    return arraysAreEqual(firstArray, secondArray, testSectionsPropEquality);
  }

  return arraysAreEqual(firstArray, secondArray);
}

function testSectionsPropEquality(previousSection, currentSection) {
  var previousOptions = previousSection.options;
  var currentOptions = currentSection.options;
  var optionsAreEqual = arraysAreEqual(previousOptions, currentOptions);
  var titlesAreEqual = previousSection.title === currentSection.title;
  return optionsAreEqual && titlesAreEqual;
}

var ComboBoxContext = React__default.createContext({});

var styles$p = {
  "EmptyState": "Polaris-Autocomplete-ComboBox__EmptyState"
};

function ComboBox(_ref) {
  var idProp = _ref.id,
      options = _ref.options,
      selected = _ref.selected,
      textField = _ref.textField,
      preferredPosition = _ref.preferredPosition,
      listTitle = _ref.listTitle,
      allowMultiple = _ref.allowMultiple,
      actionsBefore = _ref.actionsBefore,
      actionsAfter = _ref.actionsAfter,
      contentBefore = _ref.contentBefore,
      contentAfter = _ref.contentAfter,
      emptyState = _ref.emptyState,
      onSelect = _ref.onSelect,
      onEndReached = _ref.onEndReached;

  var _useState = useState(-1),
      _useState2 = _slicedToArray(_useState, 2),
      selectedIndex = _useState2[0],
      setSelectedIndex = _useState2[1];

  var _useState3 = useState(selected),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedOptions = _useState4[0],
      setSelectedOptions = _useState4[1];

  var _useState5 = useState([]),
      _useState6 = _slicedToArray(_useState5, 2),
      navigableOptions = _useState6[0],
      setNavigableOptions = _useState6[1];

  var _useToggle = useToggle(false),
      popoverActive = _useToggle.value,
      forcePopoverActiveTrue = _useToggle.setTrue,
      forcePopoverActiveFalse = _useToggle.setFalse;

  var id = useUniqueId('ComboBox', idProp);
  var getActionsWithIds = useCallback(function (actions, before) {
    if (before) {
      return navigableOptions.slice(0, actions.length);
    }

    return navigableOptions.slice(-actions.length);
  }, [navigableOptions]);
  var visuallyUpdateSelectedOption = useCallback(function (newOption, oldOption) {
    if (oldOption) {
      oldOption.active = false;
    }

    if (newOption) {
      newOption.active = true;
    }
  }, []);
  var resetVisuallySelectedOptions = useCallback(function () {
    setSelectedIndex(-1);
    navigableOptions.forEach(function (option) {
      option.active = false;
    });
  }, [navigableOptions]);
  var selectOptionAtIndex = useCallback(function (newOptionIndex) {
    if (navigableOptions.length === 0) {
      return;
    }

    var oldSelectedOption = navigableOptions[selectedIndex];
    var newSelectedOption = navigableOptions[newOptionIndex];
    visuallyUpdateSelectedOption(newSelectedOption, oldSelectedOption);
    setSelectedIndex(newOptionIndex);
  }, [navigableOptions, selectedIndex, visuallyUpdateSelectedOption]);
  var selectNextOption = useCallback(function () {
    if (navigableOptions.length === 0) {
      return;
    }

    var newIndex = selectedIndex;

    if (selectedIndex + 1 >= navigableOptions.length) {
      newIndex = 0;
    } else {
      newIndex++;
    }

    selectOptionAtIndex(newIndex);
  }, [navigableOptions, selectOptionAtIndex, selectedIndex]);
  var selectPreviousOption = useCallback(function () {
    if (navigableOptions.length === 0) {
      return;
    }

    var newIndex = selectedIndex;

    if (selectedIndex <= 0) {
      newIndex = navigableOptions.length - 1;
    } else {
      newIndex--;
    }

    selectOptionAtIndex(newIndex);
  }, [navigableOptions, selectOptionAtIndex, selectedIndex]);
  var selectOptions = useCallback(function (selected) {
    selected && onSelect(selected);

    if (!allowMultiple) {
      resetVisuallySelectedOptions();
      forcePopoverActiveFalse();
    }
  }, [allowMultiple, forcePopoverActiveFalse, onSelect, resetVisuallySelectedOptions]);
  var handleSelection = useCallback(function (newSelected) {
    var newlySelectedOptions = selected;

    if (selected.includes(newSelected)) {
      newlySelectedOptions.splice(newlySelectedOptions.indexOf(newSelected), 1);
    } else if (allowMultiple) {
      newlySelectedOptions.push(newSelected);
    } else {
      newlySelectedOptions = [newSelected];
    }

    selectOptions(newlySelectedOptions);
  }, [allowMultiple, selectOptions, selected]);
  var handleEnter = useCallback(function (event) {
    if (event.keyCode !== Key.Enter) {
      return;
    }

    if (popoverActive && selectedIndex > -1) {
      var selectedOption = navigableOptions[selectedIndex];

      if (isOption(selectedOption)) {
        event.preventDefault();
        handleSelection(selectedOption.value);
      } else {
        selectedOption.onAction && selectedOption.onAction();
      }
    }
  }, [handleSelection, navigableOptions, popoverActive, selectedIndex]);
  var handleBlur = useCallback(function () {
    forcePopoverActiveFalse();
    resetVisuallySelectedOptions();
  }, [forcePopoverActiveFalse, resetVisuallySelectedOptions]);
  var activatePopover = useCallback(function () {
    !popoverActive && forcePopoverActiveTrue();
  }, [forcePopoverActiveTrue, popoverActive]);
  var updateIndexOfSelectedOption = useCallback(function (newOptions) {
    var selectedOption = navigableOptions[selectedIndex];

    if (selectedOption && newOptions.includes(selectedOption)) {
      selectOptionAtIndex(newOptions.indexOf(selectedOption));
    } else if (selectedIndex > newOptions.length - 1) {
      resetVisuallySelectedOptions();
    } else {
      selectOptionAtIndex(selectedIndex);
    }
  }, [navigableOptions, resetVisuallySelectedOptions, selectOptionAtIndex, selectedIndex]);
  useEffect(function () {
    if (selectedOptions !== selected) {
      setSelectedOptions(selected);
    }
  }, [selected, selectedOptions]);
  useEffect(function () {
    var newNavigableOptions = [];

    if (actionsBefore) {
      newNavigableOptions = newNavigableOptions.concat(actionsBefore);
    }

    if (options) {
      newNavigableOptions = newNavigableOptions.concat(options);
    }

    if (actionsAfter) {
      newNavigableOptions = newNavigableOptions.concat(actionsAfter);
    }

    newNavigableOptions = assignOptionIds(newNavigableOptions, id);
    setNavigableOptions(newNavigableOptions);
  }, [actionsAfter, actionsBefore, id, options]);
  useEffect(function () {
    updateIndexOfSelectedOption(navigableOptions);
  }, [navigableOptions, updateIndexOfSelectedOption]);
  var actionsBeforeMarkup;

  if (actionsBefore && actionsBefore.length > 0) {
    actionsBeforeMarkup = /*#__PURE__*/React__default.createElement(ActionList, {
      actionRole: "option",
      items: getActionsWithIds(actionsBefore, true)
    });
  }

  var actionsAfterMarkup;

  if (actionsAfter && actionsAfter.length > 0) {
    actionsAfterMarkup = /*#__PURE__*/React__default.createElement(ActionList, {
      actionRole: "option",
      items: getActionsWithIds(actionsAfter)
    });
  }

  var optionsMarkup = options.length > 0 && /*#__PURE__*/React__default.createElement(OptionList, {
    role: "presentation",
    optionRole: "option",
    options: filterForOptions(navigableOptions),
    onChange: selectOptions,
    selected: selectedOptions,
    title: listTitle,
    allowMultiple: allowMultiple
  });
  var emptyStateMarkup = !actionsAfter && !actionsBefore && !contentAfter && !contentBefore && options.length === 0 && emptyState && /*#__PURE__*/React__default.createElement("div", {
    className: styles$p.EmptyState
  }, emptyState);
  var selectedOptionId = selectedIndex > -1 ? "".concat(id, "-").concat(selectedIndex) : undefined;
  var context = {
    id,
    selectedOptionId
  };
  return /*#__PURE__*/React__default.createElement(ComboBoxContext.Provider, {
    value: context
  }, /*#__PURE__*/React__default.createElement("div", {
    onClick: activatePopover,
    onKeyDown: activatePopover,
    role: "combobox",
    "aria-expanded": popoverActive,
    "aria-owns": id,
    "aria-controls": id,
    "aria-haspopup": true,
    onFocus: forcePopoverActiveTrue,
    onBlur: handleBlur,
    tabIndex: options.length === 0 ? -1 : 0
  }, /*#__PURE__*/React__default.createElement(KeypressListener, {
    keyCode: Key.DownArrow,
    handler: selectNextOption
  }), /*#__PURE__*/React__default.createElement(KeypressListener, {
    keyCode: Key.UpArrow,
    handler: selectPreviousOption
  }), /*#__PURE__*/React__default.createElement(EventListener, {
    event: "keydown",
    handler: handleEnter
  }), /*#__PURE__*/React__default.createElement(KeypressListener, {
    keyCode: Key.Escape,
    handler: forcePopoverActiveFalse
  }), /*#__PURE__*/React__default.createElement(Popover, {
    activator: textField,
    active: popoverActive,
    onClose: forcePopoverActiveFalse,
    preferredPosition: preferredPosition,
    fullWidth: true,
    preventAutofocus: true
  }, /*#__PURE__*/React__default.createElement(Popover.Pane, {
    onScrolledToBottom: onEndReached
  }, /*#__PURE__*/React__default.createElement("div", {
    id: id,
    role: "listbox",
    "aria-multiselectable": allowMultiple
  }, contentBefore, actionsBeforeMarkup, optionsMarkup, actionsAfterMarkup, contentAfter, emptyStateMarkup)))));
}

function assignOptionIds(options, id) {
  return options.map(function (option, optionIndex) {
    return Object.assign(Object.assign({}, option), {
      id: "".concat(id, "-").concat(optionIndex)
    });
  });
}

function isOption(navigableOption) {
  return 'value' in navigableOption && navigableOption.value !== undefined;
}

function filterForOptions(mixedArray) {
  return mixedArray.filter(isOption);
}

var styles$q = {
  "Label": "Polaris-Label",
  "hidden": "Polaris-Label--hidden",
  "Text": "Polaris-Label__Text"
};

function labelID(id) {
  return "".concat(id, "Label");
}
function Label(_ref) {
  var children = _ref.children,
      id = _ref.id,
      hidden = _ref.hidden;
  var className = classNames(styles$q.Label, hidden && styles$q.hidden);
  return /*#__PURE__*/React__default.createElement("div", {
    className: className
  }, /*#__PURE__*/React__default.createElement("label", {
    id: labelID(id),
    htmlFor: id,
    className: styles$q.Text
  }, children));
}

var styles$r = {
  "InlineError": "Polaris-InlineError",
  "Icon": "Polaris-InlineError__Icon"
};

function InlineError(_ref) {
  var message = _ref.message,
      fieldID = _ref.fieldID;

  if (!message) {
    return null;
  }

  return /*#__PURE__*/React__default.createElement("div", {
    id: errorTextID(fieldID),
    className: styles$r.InlineError
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles$r.Icon
  }, /*#__PURE__*/React__default.createElement(Icon, {
    source: AlertMinor
  })), message);
}
function errorTextID(id) {
  return "".concat(id, "Error");
}

var styles$s = {
  "hidden": "Polaris-Labelled--hidden",
  "LabelWrapper": "Polaris-Labelled__LabelWrapper",
  "HelpText": "Polaris-Labelled__HelpText",
  "Error": "Polaris-Labelled__Error",
  "Action": "Polaris-Labelled__Action"
};

function Labelled(_a) {
  var id = _a.id,
      label = _a.label,
      error = _a.error,
      action = _a.action,
      helpText = _a.helpText,
      children = _a.children,
      labelHidden = _a.labelHidden,
      rest = __rest(_a, ["id", "label", "error", "action", "helpText", "children", "labelHidden"]);

  var className = classNames(labelHidden && styles$s.hidden);
  var actionMarkup = action ? /*#__PURE__*/React__default.createElement("div", {
    className: styles$s.Action
  }, buttonFrom(action, {
    plain: true
  })) : null;
  var helpTextMarkup = helpText ? /*#__PURE__*/React__default.createElement("div", {
    className: styles$s.HelpText,
    id: helpTextID(id)
  }, helpText) : null;
  var errorMarkup = error && typeof error !== 'boolean' && /*#__PURE__*/React__default.createElement("div", {
    className: styles$s.Error
  }, /*#__PURE__*/React__default.createElement(InlineError, {
    message: error,
    fieldID: id
  }));
  var labelMarkup = label ? /*#__PURE__*/React__default.createElement("div", {
    className: styles$s.LabelWrapper
  }, /*#__PURE__*/React__default.createElement(Label, Object.assign({
    id: id
  }, rest, {
    hidden: false
  }), label), actionMarkup) : null;
  return /*#__PURE__*/React__default.createElement("div", {
    className: className
  }, labelMarkup, children, errorMarkup, helpTextMarkup);
}
function helpTextID(id) {
  return "".concat(id, "HelpText");
}

var styles$t = {
  "Connected": "Polaris-Connected",
  "Item": "Polaris-Connected__Item",
  "Item-primary": "Polaris-Connected__Item--primary",
  "Item-connection": "Polaris-Connected__Item--connection",
  "Item-focused": "Polaris-Connected__Item--focused"
};

var Item$3 = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Item, _React$PureComponent);

  var _super = _createSuper(Item);

  function Item() {
    var _this;

    _classCallCheck(this, Item);

    _this = _super.apply(this, arguments);
    _this.state = {
      focused: false
    };

    _this.handleBlur = function () {
      _this.setState({
        focused: false
      });
    };

    _this.handleFocus = function () {
      _this.setState({
        focused: true
      });
    };

    return _this;
  }

  _createClass(Item, [{
    key: "render",
    value: function render() {
      var focused = this.state.focused;
      var _this$props = this.props,
          children = _this$props.children,
          position = _this$props.position;
      var className = classNames(styles$t.Item, focused && styles$t['Item-focused'], position === 'primary' ? styles$t['Item-primary'] : styles$t['Item-connection']);
      return /*#__PURE__*/React__default.createElement("div", {
        onBlur: this.handleBlur,
        onFocus: this.handleFocus,
        className: className
      }, children);
    }
  }]);

  return Item;
}(React__default.PureComponent);

function Connected(_ref) {
  var children = _ref.children,
      left = _ref.left,
      right = _ref.right;
  var leftConnectionMarkup = left ? /*#__PURE__*/React__default.createElement(Item$3, {
    position: "left"
  }, left) : null;
  var rightConnectionMarkup = right ? /*#__PURE__*/React__default.createElement(Item$3, {
    position: "right"
  }, right) : null;
  return /*#__PURE__*/React__default.createElement("div", {
    className: styles$t.Connected
  }, leftConnectionMarkup, /*#__PURE__*/React__default.createElement(Item$3, {
    position: "primary"
  }, children), rightConnectionMarkup);
}

var styles$u = {
  "TextField": "Polaris-TextField",
  "multiline": "Polaris-TextField--multiline",
  "Input": "Polaris-TextField__Input",
  "hasValue": "Polaris-TextField--hasValue",
  "focus": "Polaris-TextField--focus",
  "Backdrop": "Polaris-TextField__Backdrop",
  "error": "Polaris-TextField--error",
  "readOnly": "Polaris-TextField--readOnly",
  "disabled": "Polaris-TextField--disabled",
  "Prefix": "Polaris-TextField__Prefix",
  "Input-hasClearButton": "Polaris-TextField__Input--hasClearButton",
  "Input-suffixed": "Polaris-TextField__Input--suffixed",
  "Input-alignRight": "Polaris-TextField__Input--alignRight",
  "Input-alignLeft": "Polaris-TextField__Input--alignLeft",
  "Input-alignCenter": "Polaris-TextField__Input--alignCenter",
  "Suffix": "Polaris-TextField__Suffix",
  "CharacterCount": "Polaris-TextField__CharacterCount",
  "AlignFieldBottom": "Polaris-TextField__AlignFieldBottom",
  "ClearButton": "Polaris-TextField__ClearButton",
  "Spinner": "Polaris-TextField__Spinner",
  "SpinnerIcon": "Polaris-TextField__SpinnerIcon",
  "Resizer": "Polaris-TextField__Resizer",
  "DummyInput": "Polaris-TextField__DummyInput",
  "Segment": "Polaris-TextField__Segment",
  "newDesignLanguage": "Polaris-TextField--newDesignLanguage",
  "Backdrop-connectedLeft": "Polaris-TextField__Backdrop--connectedLeft",
  "Backdrop-connectedRight": "Polaris-TextField__Backdrop--connectedRight"
};

function Resizer(_ref) {
  var contents = _ref.contents,
      _ref$currentHeight = _ref.currentHeight,
      currentHeightProp = _ref$currentHeight === void 0 ? null : _ref$currentHeight,
      minimumLines = _ref.minimumLines,
      onHeightChange = _ref.onHeightChange;
  var contentNode = useRef(null);
  var minimumLinesNode = useRef(null);
  var animationFrame = useRef();
  var currentHeight = useRef(currentHeightProp);

  if (currentHeightProp !== currentHeight.current) {
    currentHeight.current = currentHeightProp;
  }

  useEffect(function () {
    return function () {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, []);
  var minimumLinesMarkup = minimumLines ? /*#__PURE__*/React__default.createElement("div", {
    ref: minimumLinesNode,
    className: styles$u.DummyInput,
    dangerouslySetInnerHTML: {
      __html: getContentsForMinimumLines(minimumLines)
    }
  }) : null;
  var handleHeightCheck = useCallback(function () {
    if (animationFrame.current) {
      cancelAnimationFrame(animationFrame.current);
    }

    animationFrame.current = requestAnimationFrame(function () {
      if (!contentNode.current || !minimumLinesNode.current) {
        return;
      }

      var newHeight = Math.max(contentNode.current.offsetHeight, minimumLinesNode.current.offsetHeight);

      if (newHeight !== currentHeight.current) {
        onHeightChange(newHeight);
      }
    });
  }, [onHeightChange]);
  useLayoutEffect(function () {
    handleHeightCheck();
  });
  return /*#__PURE__*/React__default.createElement("div", {
    "aria-hidden": true,
    className: styles$u.Resizer
  }, /*#__PURE__*/React__default.createElement(EventListener, {
    event: "resize",
    handler: handleHeightCheck
  }), /*#__PURE__*/React__default.createElement("div", {
    ref: contentNode,
    className: styles$u.DummyInput,
    dangerouslySetInnerHTML: {
      __html: getFinalContents(contents)
    }
  }), minimumLinesMarkup);
}
var ENTITIES_TO_REPLACE = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '\n': '<br>',
  '\r': ''
};
var REPLACE_REGEX$1 = new RegExp("[".concat(Object.keys(ENTITIES_TO_REPLACE).join(), "]"), 'g');

function replaceEntity(entity) {
  return ENTITIES_TO_REPLACE[entity];
}

function getContentsForMinimumLines(minimumLines) {
  var content = '';

  for (var line = 0; line < minimumLines; line++) {
    content += '<br>';
  }

  return content;
}

function getFinalContents(contents) {
  return contents ? "".concat(contents.replace(REPLACE_REGEX$1, replaceEntity), "<br>") : '<br>';
}

function Spinner$1(_ref) {
  var onChange = _ref.onChange,
      onClick = _ref.onClick,
      onMouseDown = _ref.onMouseDown,
      onMouseUp = _ref.onMouseUp;

  function handleStep(step) {
    return function () {
      return onChange(step);
    };
  }

  function handleMouseDown(onChange) {
    return function (event) {
      if (event.button !== 0) return;
      onMouseDown(onChange);
    };
  }

  return /*#__PURE__*/React__default.createElement("div", {
    className: styles$u.Spinner,
    onClick: onClick,
    "aria-hidden": true
  }, /*#__PURE__*/React__default.createElement("div", {
    role: "button",
    className: styles$u.Segment,
    tabIndex: -1,
    onClick: handleStep(1),
    onMouseDown: handleMouseDown(handleStep(1)),
    onMouseUp: onMouseUp
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles$u.SpinnerIcon
  }, /*#__PURE__*/React__default.createElement(Icon, {
    source: CaretUpMinor
  }))), /*#__PURE__*/React__default.createElement("div", {
    role: "button",
    className: styles$u.Segment,
    tabIndex: -1,
    onClick: handleStep(-1),
    onMouseDown: handleMouseDown(handleStep(-1)),
    onMouseUp: onMouseUp
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles$u.SpinnerIcon
  }, /*#__PURE__*/React__default.createElement(Icon, {
    source: CaretDownMinor
  }))));
}

function TextField(_ref) {
  var prefix = _ref.prefix,
      suffix = _ref.suffix,
      placeholder = _ref.placeholder,
      value = _ref.value,
      helpText = _ref.helpText,
      label = _ref.label,
      labelAction = _ref.labelAction,
      labelHidden = _ref.labelHidden,
      disabled = _ref.disabled,
      clearButton = _ref.clearButton,
      readOnly = _ref.readOnly,
      autoFocus = _ref.autoFocus,
      focused = _ref.focused,
      multiline = _ref.multiline,
      error = _ref.error,
      connectedRight = _ref.connectedRight,
      connectedLeft = _ref.connectedLeft,
      type = _ref.type,
      name = _ref.name,
      idProp = _ref.id,
      role = _ref.role,
      step = _ref.step,
      autoComplete = _ref.autoComplete,
      max = _ref.max,
      maxLength = _ref.maxLength,
      min = _ref.min,
      minLength = _ref.minLength,
      pattern = _ref.pattern,
      spellCheck = _ref.spellCheck,
      ariaOwns = _ref.ariaOwns,
      ariaControls = _ref.ariaControls,
      ariaActiveDescendant = _ref.ariaActiveDescendant,
      ariaAutocomplete = _ref.ariaAutocomplete,
      showCharacterCount = _ref.showCharacterCount,
      align = _ref.align,
      onClearButtonClick = _ref.onClearButtonClick,
      onChange = _ref.onChange,
      onFocus = _ref.onFocus,
      onBlur = _ref.onBlur;
  var i18n = useI18n();

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      height = _useState2[0],
      setHeight = _useState2[1];

  var _useState3 = useState(Boolean(focused)),
      _useState4 = _slicedToArray(_useState3, 2),
      focus = _useState4[0],
      setFocus = _useState4[1];

  var isAfterInitial = useIsAfterInitialMount();
  var id = useUniqueId('TextField', idProp);
  var inputRef = useRef(null);
  var prefixRef = useRef(null);
  var suffixRef = useRef(null);
  var buttonPressTimer = useRef();
  useEffect(function () {
    var input = inputRef.current;
    if (!input || focused === undefined) return;
    focused ? input.focus() : input.blur();
  }, [focused]);

  var _useFeatures = useFeatures(),
      newDesignLanguage = _useFeatures.newDesignLanguage; // Use a typeof check here as Typescript mostly protects us from non-stringy
  // values but overzealous usage of `any` in consuming apps means people have
  // been known to pass a number in, so make it clear that doesn't work.


  var normalizedValue = typeof value === 'string' ? value : '';
  var normalizedStep = step != null ? step : 1;
  var normalizedMax = max != null ? max : Infinity;
  var normalizedMin = min != null ? min : -Infinity;
  var className = classNames(styles$u.TextField, Boolean(normalizedValue) && styles$u.hasValue, disabled && styles$u.disabled, readOnly && styles$u.readOnly, error && styles$u.error, multiline && styles$u.multiline, focus && styles$u.focus, newDesignLanguage && styles$u.newDesignLanguage);
  var inputType = type === 'currency' ? 'text' : type;
  var prefixMarkup = prefix ? /*#__PURE__*/React__default.createElement("div", {
    className: styles$u.Prefix,
    id: "".concat(id, "Prefix"),
    ref: prefixRef
  }, prefix) : null;
  var suffixMarkup = suffix ? /*#__PURE__*/React__default.createElement("div", {
    className: styles$u.Suffix,
    id: "".concat(id, "Suffix"),
    ref: suffixRef
  }, suffix) : null;
  var characterCountMarkup = null;

  if (showCharacterCount) {
    var characterCount = normalizedValue.length;
    var characterCountLabel = maxLength ? i18n.translate('Polaris.TextField.characterCountWithMaxLength', {
      count: characterCount,
      limit: maxLength
    }) : i18n.translate('Polaris.TextField.characterCount', {
      count: characterCount
    });
    var characterCountClassName = classNames(styles$u.CharacterCount, multiline && styles$u.AlignFieldBottom);
    var characterCountText = !maxLength ? characterCount : "".concat(characterCount, "/").concat(maxLength);
    characterCountMarkup = /*#__PURE__*/React__default.createElement("div", {
      id: "".concat(id, "CharacterCounter"),
      className: characterCountClassName,
      "aria-label": characterCountLabel,
      "aria-live": focus ? 'polite' : 'off',
      "aria-atomic": "true"
    }, characterCountText);
  }

  var clearButtonMarkup = clearButton && normalizedValue !== '' ? /*#__PURE__*/React__default.createElement("button", {
    type: "button",
    className: styles$u.ClearButton,
    onClick: handleClearButtonPress,
    disabled: disabled
  }, /*#__PURE__*/React__default.createElement(VisuallyHidden, null, i18n.translate('Polaris.Common.clear')), /*#__PURE__*/React__default.createElement(Icon, {
    source: CircleCancelMinor,
    color: "inkLightest"
  })) : null;
  var handleNumberChange = useCallback(function (steps) {
    if (onChange == null) {
      return;
    } // Returns the length of decimal places in a number


    var dpl = function dpl(num) {
      return (num.toString().split('.')[1] || []).length;
    };

    var numericValue = value ? parseFloat(value) : 0;

    if (isNaN(numericValue)) {
      return;
    } // Making sure the new value has the same length of decimal places as the
    // step / value has.


    var decimalPlaces = Math.max(dpl(numericValue), dpl(normalizedStep));
    var newValue = Math.min(Number(normalizedMax), Math.max(numericValue + steps * normalizedStep, Number(normalizedMin)));
    onChange(String(newValue.toFixed(decimalPlaces)), id);
  }, [id, normalizedMax, normalizedMin, onChange, normalizedStep, value]);
  var handleButtonRelease = useCallback(function () {
    clearTimeout(buttonPressTimer.current);
  }, []);
  var handleButtonPress = useCallback(function (onChange) {
    var minInterval = 50;
    var decrementBy = 10;
    var interval = 200;

    var onChangeInterval = function onChangeInterval() {
      if (interval > minInterval) interval -= decrementBy;
      onChange();
      buttonPressTimer.current = window.setTimeout(onChangeInterval, interval);
    };

    buttonPressTimer.current = window.setTimeout(onChangeInterval, interval);
    addEventListener(document, 'mouseup', handleButtonRelease, {
      once: true
    });
  }, [handleButtonRelease]);
  var spinnerMarkup = type === 'number' && !disabled && !readOnly ? /*#__PURE__*/React__default.createElement(Spinner$1, {
    onChange: handleNumberChange,
    onMouseDown: handleButtonPress,
    onMouseUp: handleButtonRelease
  }) : null;
  var style = multiline && height ? {
    height
  } : null;
  var handleExpandingResize = useCallback(function (height) {
    setHeight(height);
  }, []);
  var resizer = multiline && isAfterInitial ? /*#__PURE__*/React__default.createElement(Resizer, {
    contents: normalizedValue || placeholder,
    currentHeight: height,
    minimumLines: typeof multiline === 'number' ? multiline : 1,
    onHeightChange: handleExpandingResize
  }) : null;
  var describedBy = [];

  if (error) {
    describedBy.push("".concat(id, "Error"));
  }

  if (helpText) {
    describedBy.push(helpTextID(id));
  }

  if (showCharacterCount) {
    describedBy.push("".concat(id, "CharacterCounter"));
  }

  var labelledBy = [];

  if (prefix) {
    labelledBy.push("".concat(id, "Prefix"));
  }

  if (suffix) {
    labelledBy.push("".concat(id, "Suffix"));
  }

  labelledBy.unshift(labelID(id));
  var inputClassName = classNames(styles$u.Input, align && styles$u[variationName('Input-align', align)], suffix && styles$u['Input-suffixed'], clearButton && styles$u['Input-hasClearButton']);
  var input = /*#__PURE__*/React__default.createElement(multiline ? 'textarea' : 'input', {
    name,
    id,
    disabled,
    readOnly,
    role,
    autoFocus,
    value: normalizedValue,
    placeholder,
    onFocus,
    onBlur,
    onKeyPress: handleKeyPress,
    style,
    autoComplete: normalizeAutoComplete(autoComplete),
    className: inputClassName,
    onChange: handleChange,
    ref: inputRef,
    min,
    max,
    step,
    minLength,
    maxLength,
    spellCheck,
    pattern,
    type: inputType,
    'aria-describedby': describedBy.length ? describedBy.join(' ') : undefined,
    'aria-labelledby': labelledBy.join(' '),
    'aria-invalid': Boolean(error),
    'aria-owns': ariaOwns,
    'aria-activedescendant': ariaActiveDescendant,
    'aria-autocomplete': ariaAutocomplete,
    'aria-controls': ariaControls,
    'aria-multiline': normalizeAriaMultiline(multiline)
  });
  var backdropClassName = classNames(styles$u.Backdrop, newDesignLanguage && connectedLeft && styles$u['Backdrop-connectedLeft'], newDesignLanguage && connectedRight && styles$u['Backdrop-connectedRight']);
  return /*#__PURE__*/React__default.createElement(Labelled, {
    label: label,
    id: id,
    error: error,
    action: labelAction,
    labelHidden: labelHidden,
    helpText: helpText
  }, /*#__PURE__*/React__default.createElement(Connected, {
    left: connectedLeft,
    right: connectedRight
  }, /*#__PURE__*/React__default.createElement("div", {
    className: className,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onClick: handleClick
  }, prefixMarkup, input, suffixMarkup, characterCountMarkup, clearButtonMarkup, spinnerMarkup, /*#__PURE__*/React__default.createElement("div", {
    className: backdropClassName
  }), resizer)));

  function handleClearButtonPress() {
    onClearButtonClick && onClearButtonClick(id);
  }

  function handleKeyPress(event) {
    var key = event.key,
        which = event.which;
    var numbersSpec = /[\d.eE+-]$/;

    if (type !== 'number' || which === Key.Enter || numbersSpec.test(key)) {
      return;
    }

    event.preventDefault();
  }

  function containsAffix(target) {
    return target instanceof HTMLElement && (prefixRef.current && prefixRef.current.contains(target) || suffixRef.current && suffixRef.current.contains(target));
  }

  function handleChange(event) {
    onChange && onChange(event.currentTarget.value, id);
  }

  function handleFocus(_ref2) {
    var target = _ref2.target;

    if (containsAffix(target)) {
      return;
    }

    setFocus(true);
  }

  function handleBlur() {
    setFocus(false);
  }

  function handleClick(_ref3) {
    var target = _ref3.target;

    if (containsAffix(target)) {
      return;
    }

    inputRef.current && inputRef.current.focus();
  }
}

function normalizeAutoComplete(autoComplete) {
  if (autoComplete === true) {
    return 'on';
  } else if (autoComplete === false) {
    return 'off';
  } else {
    return autoComplete;
  }
}

function normalizeAriaMultiline(multiline) {
  switch (typeof multiline) {
    case 'undefined':
      return false;

    case 'boolean':
      return multiline;

    case 'number':
      return Boolean(multiline > 0);
  }
}

function TextField$1(props) {
  return /*#__PURE__*/React__default.createElement(ComboBoxContext.Consumer, null, function (_ref) {
    var selectedOptionId = _ref.selectedOptionId,
        comboBoxId = _ref.comboBoxId;
    return /*#__PURE__*/React__default.createElement(TextField, Object.assign({}, props, {
      autoComplete: false,
      ariaAutocomplete: "list",
      ariaActiveDescendant: selectedOptionId,
      ariaControls: comboBoxId
    }));
  });
}

var styles$v = {
  "Loading": "Polaris-Autocomplete__Loading"
};

// subcomponents so explicitly state the subcomponents in the type definition.
// Letting this be implicit works in this project but fails in projects that use
// generated *.d.ts files.

var Autocomplete = function Autocomplete(_ref) {
  var id = _ref.id,
      options = _ref.options,
      selected = _ref.selected,
      textField = _ref.textField,
      preferredPosition = _ref.preferredPosition,
      listTitle = _ref.listTitle,
      allowMultiple = _ref.allowMultiple,
      loading = _ref.loading,
      actionBefore = _ref.actionBefore,
      willLoadMoreResults = _ref.willLoadMoreResults,
      emptyState = _ref.emptyState,
      onSelect = _ref.onSelect,
      onLoadMoreResults = _ref.onLoadMoreResults;
  var i18n = useI18n();
  var spinnerMarkup = loading ? /*#__PURE__*/React__default.createElement("div", {
    className: styles$v.Loading
  }, /*#__PURE__*/React__default.createElement(Spinner, {
    size: "small",
    accessibilityLabel: i18n.translate('Polaris.Autocomplete.spinnerAccessibilityLabel')
  })) : null;
  var conditionalOptions = loading && !willLoadMoreResults ? [] : options;
  var conditionalAction = actionBefore && actionBefore !== [] ? [actionBefore] : undefined;
  return /*#__PURE__*/React__default.createElement(ComboBox, {
    id: id,
    options: conditionalOptions,
    selected: selected,
    textField: textField,
    preferredPosition: preferredPosition,
    listTitle: listTitle,
    allowMultiple: allowMultiple,
    contentAfter: spinnerMarkup,
    actionsBefore: conditionalAction,
    onSelect: onSelect,
    onEndReached: onLoadMoreResults,
    emptyState: emptyState
  });
};
Autocomplete.ComboBox = ComboBox;
Autocomplete.TextField = TextField$1;

// in the styleguide works without warnings about unfound props

function ScrollLock(_) {
  var scrollLockManager = useScrollLockManager();
  useEffect(function () {
    scrollLockManager.registerScrollLock();
    return function () {
      scrollLockManager.unregisterScrollLock();
    };
  }, [scrollLockManager]);
  return null;
}

var styles$w = {
  "Backdrop": "Polaris-Backdrop",
  "fade-in": "Polaris-Backdrop__fade--in",
  "transparent": "Polaris-Backdrop--transparent",
  "belowNavigation": "Polaris-Backdrop--belowNavigation"
};

function Backdrop(props) {
  var onClick = props.onClick,
      onTouchStart = props.onTouchStart,
      belowNavigation = props.belowNavigation,
      transparent = props.transparent;
  var className = classNames(styles$w.Backdrop, belowNavigation && styles$w.belowNavigation, transparent && styles$w.transparent);
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(ScrollLock, null), /*#__PURE__*/React__default.createElement("div", {
    className: className,
    onClick: onClick,
    onTouchStart: onTouchStart
  }));
}

var BannerContext = React__default.createContext(false);

var styles$x = {
  "Banner": "Polaris-Banner",
  "withinContentContainer": "Polaris-Banner--withinContentContainer",
  "newDesignLanguage": "Polaris-Banner--newDesignLanguage",
  "ContentWrapper": "Polaris-Banner__ContentWrapper",
  "keyFocused": "Polaris-Banner--keyFocused",
  "statusSuccess": "Polaris-Banner--statusSuccess",
  "statusInfo": "Polaris-Banner--statusInfo",
  "statusWarning": "Polaris-Banner--statusWarning",
  "statusCritical": "Polaris-Banner--statusCritical",
  "Ribbon": "Polaris-Banner__Ribbon",
  "Actions": "Polaris-Banner__Actions",
  "Dismiss": "Polaris-Banner__Dismiss",
  "withinPage": "Polaris-Banner--withinPage",
  "hasDismiss": "Polaris-Banner--hasDismiss",
  "Heading": "Polaris-Banner__Heading",
  "Content": "Polaris-Banner__Content",
  "PrimaryAction": "Polaris-Banner__PrimaryAction",
  "SecondaryAction": "Polaris-Banner__SecondaryAction",
  "Text": "Polaris-Banner__Text"
};

var Banner = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Banner, _React$PureComponent);

  var _super = _createSuper(Banner);

  function Banner() {
    var _this;

    _classCallCheck(this, Banner);

    _this = _super.apply(this, arguments);
    _this.state = {
      showFocus: false
    };
    _this.wrapper = /*#__PURE__*/React__default.createRef();
    return _this;
  }

  _createClass(Banner, [{
    key: "focus",
    value: function focus() {
      this.wrapper.current && this.wrapper.current.focus();
      this.setState({
        showFocus: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _ref = this.context || {},
          newDesignLanguage = _ref.newDesignLanguage;

      var showFocus = this.state.showFocus;

      var handleKeyUp = function handleKeyUp(evt) {
        if (evt.target === _this2.wrapper.current) {
          _this2.setState({
            showFocus: true
          });
        }
      };

      var handleBlur = function handleBlur() {
        _this2.setState({
          showFocus: false
        });
      };

      var handleMouseUp = function handleMouseUp(_ref2) {
        var currentTarget = _ref2.currentTarget;
        var showFocus = _this2.state.showFocus;
        currentTarget.blur();
        showFocus && _this2.setState({
          showFocus: false
        });
      };

      return /*#__PURE__*/React__default.createElement(BannerContext.Provider, {
        value: true
      }, /*#__PURE__*/React__default.createElement(WithinContentContext.Consumer, null, function (withinContentContainer) {
        var _this2$props = _this2.props,
            icon = _this2$props.icon,
            action = _this2$props.action,
            secondaryAction = _this2$props.secondaryAction,
            title = _this2$props.title,
            children = _this2$props.children,
            status = _this2$props.status,
            onDismiss = _this2$props.onDismiss,
            stopAnnouncements = _this2$props.stopAnnouncements;
        var color;
        var defaultIcon;
        var ariaRoleType = 'status';

        switch (status) {
          case 'success':
            color = newDesignLanguage ? 'success' : 'greenDark';
            defaultIcon = newDesignLanguage ? CircleTickMajorFilled : CircleTickMajorTwotone;
            break;

          case 'info':
            color = newDesignLanguage ? 'highlight' : 'tealDark';
            defaultIcon = newDesignLanguage ? CircleInformationMajorFilled : CircleInformationMajorTwotone;
            break;

          case 'warning':
            color = newDesignLanguage ? 'warning' : 'yellowDark';
            defaultIcon = newDesignLanguage ? CircleAlertMajorFilled : CircleAlertMajorTwotone;
            ariaRoleType = 'alert';
            break;

          case 'critical':
            color = newDesignLanguage ? 'critical' : 'redDark';
            defaultIcon = newDesignLanguage ? CircleDisabledMajorFilled : CircleDisabledMajorTwotone;
            ariaRoleType = 'alert';
            break;

          default:
            color = newDesignLanguage ? 'base' : 'inkLighter';
            defaultIcon = newDesignLanguage ? CircleInformationMajorFilled : FlagMajorTwotone;
        }

        var className = classNames(styles$x.Banner, status && styles$x[variationName('status', status)], onDismiss && styles$x.hasDismiss, showFocus && styles$x.keyFocused, withinContentContainer ? styles$x.withinContentContainer : styles$x.withinPage, newDesignLanguage && styles$x.newDesignLanguage);
        var id = uniqueID();
        var iconName = icon || defaultIcon;
        var headingMarkup = null;
        var headingID;

        if (title) {
          headingID = "".concat(id, "Heading");
          headingMarkup = /*#__PURE__*/React__default.createElement("div", {
            className: styles$x.Heading,
            id: headingID
          }, /*#__PURE__*/React__default.createElement(Heading, {
            element: "p"
          }, title));
        }

        var buttonSizeValue = withinContentContainer ? 'slim' : undefined;
        var secondaryActionMarkup = secondaryAction ? secondaryActionFrom(secondaryAction) : null;
        var actionMarkup = action ? /*#__PURE__*/React__default.createElement("div", {
          className: styles$x.Actions
        }, /*#__PURE__*/React__default.createElement(ButtonGroup, null, /*#__PURE__*/React__default.createElement("div", {
          className: styles$x.PrimaryAction
        }, buttonFrom(action, {
          outline: true,
          size: buttonSizeValue
        })), secondaryActionMarkup)) : null;
        var contentMarkup = null;
        var contentID;

        if (children || actionMarkup) {
          contentID = "".concat(id, "Content");
          contentMarkup = /*#__PURE__*/React__default.createElement("div", {
            className: styles$x.Content,
            id: contentID
          }, children, actionMarkup);
        }

        var dismissButton = onDismiss ? /*#__PURE__*/React__default.createElement("div", {
          className: styles$x.Dismiss
        }, /*#__PURE__*/React__default.createElement(Button, {
          plain: true,
          icon: CancelSmallMinor,
          onClick: onDismiss,
          accessibilityLabel: "Dismiss notification"
        })) : null;
        return /*#__PURE__*/React__default.createElement("div", {
          className: className // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
          ,
          tabIndex: 0,
          ref: _this2.wrapper,
          role: ariaRoleType,
          "aria-live": stopAnnouncements ? 'off' : 'polite',
          onMouseUp: handleMouseUp,
          onKeyUp: handleKeyUp,
          onBlur: handleBlur,
          "aria-labelledby": headingID,
          "aria-describedby": contentID
        }, dismissButton, /*#__PURE__*/React__default.createElement("div", {
          className: styles$x.Ribbon
        }, /*#__PURE__*/React__default.createElement(Icon, {
          source: iconName,
          color: color,
          backdrop: !newDesignLanguage
        })), /*#__PURE__*/React__default.createElement("div", {
          className: styles$x.ContentWrapper
        }, headingMarkup, contentMarkup));
      }));
    }
  }]);

  return Banner;
}(React__default.PureComponent);
Banner.contextType = FeaturesContext;
var index = 1;

function uniqueID() {
  return "Banner".concat(index++);
}

function secondaryActionFrom(action) {
  if (action.url) {
    return /*#__PURE__*/React__default.createElement(UnstyledLink, {
      className: styles$x.SecondaryAction,
      url: action.url,
      external: action.external
    }, /*#__PURE__*/React__default.createElement("span", {
      className: styles$x.Text
    }, action.content));
  }

  return /*#__PURE__*/React__default.createElement("button", {
    className: styles$x.SecondaryAction,
    onClick: action.onAction
  }, /*#__PURE__*/React__default.createElement("span", {
    className: styles$x.Text
  }, action.content));
}

var styles$y = {
  "Breadcrumb": "Polaris-Breadcrumbs__Breadcrumb",
  "newDesignLanguage": "Polaris-Breadcrumbs--newDesignLanguage",
  "Icon": "Polaris-Breadcrumbs__Icon",
  "ContentWrapper": "Polaris-Breadcrumbs__ContentWrapper",
  "Content": "Polaris-Breadcrumbs__Content"
};

var Breadcrumbs = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Breadcrumbs, _React$PureComponent);

  var _super = _createSuper(Breadcrumbs);

  function Breadcrumbs() {
    _classCallCheck(this, Breadcrumbs);

    return _super.apply(this, arguments);
  }

  _createClass(Breadcrumbs, [{
    key: "render",
    value: function render() {
      var _ref = this.context || {},
          newDesignLanguage = _ref.newDesignLanguage;

      var breadcrumbs = this.props.breadcrumbs;
      var breadcrumb = breadcrumbs[breadcrumbs.length - 1];

      if (breadcrumb == null) {
        return null;
      }

      var content = breadcrumb.content;
      var contentMarkup = /*#__PURE__*/React__default.createElement("span", {
        className: styles$y.ContentWrapper
      }, /*#__PURE__*/React__default.createElement("span", {
        className: styles$y.Icon
      }, /*#__PURE__*/React__default.createElement(Icon, {
        source: newDesignLanguage ? ArrowLeftMinor : ChevronLeftMinor
      })), newDesignLanguage ? null : /*#__PURE__*/React__default.createElement("span", {
        className: styles$y.Content
      }, content));
      var breadcrumbClassNames = classNames(styles$y.Breadcrumb, newDesignLanguage && styles$y.newDesignLanguage);
      var breadcrumbMarkup = 'url' in breadcrumb ? /*#__PURE__*/React__default.createElement(UnstyledLink, {
        key: content,
        url: breadcrumb.url,
        className: breadcrumbClassNames,
        onMouseUp: handleMouseUpByBlurring,
        "aria-label": breadcrumb.accessibilityLabel
      }, contentMarkup) : /*#__PURE__*/React__default.createElement("button", {
        key: content,
        className: breadcrumbClassNames,
        onClick: breadcrumb.onAction,
        onMouseUp: handleMouseUpByBlurring,
        type: "button",
        "aria-label": breadcrumb.accessibilityLabel
      }, contentMarkup);
      return /*#__PURE__*/React__default.createElement("nav", {
        role: "navigation"
      }, breadcrumbMarkup);
    }
  }]);

  return Breadcrumbs;
}(React__default.PureComponent);
Breadcrumbs.contextType = FeaturesContext;

var styles$z = {
  "TextContainer": "Polaris-TextContainer",
  "spacingTight": "Polaris-TextContainer--spacingTight",
  "spacingLoose": "Polaris-TextContainer--spacingLoose"
};

function TextContainer(_ref) {
  var spacing = _ref.spacing,
      children = _ref.children;
  var className = classNames(styles$z.TextContainer, spacing && styles$z[variationName('spacing', spacing)]);
  return /*#__PURE__*/React__default.createElement("div", {
    className: className
  }, children);
}

var styles$A = {
  "CalloutCard": "Polaris-CalloutCard",
  "Image": "Polaris-CalloutCard__Image",
  "DismissImage": "Polaris-CalloutCard__DismissImage",
  "Content": "Polaris-CalloutCard__Content",
  "Title": "Polaris-CalloutCard__Title",
  "Buttons": "Polaris-CalloutCard__Buttons",
  "Container": "Polaris-CalloutCard__Container",
  "Dismiss": "Polaris-CalloutCard__Dismiss"
};

function CalloutCard(_ref) {
  var title = _ref.title,
      children = _ref.children,
      illustration = _ref.illustration,
      primaryAction = _ref.primaryAction,
      secondaryAction = _ref.secondaryAction,
      onDismiss = _ref.onDismiss;
  var primaryActionMarkup = buttonFrom(primaryAction);
  var secondaryActionMarkup = secondaryAction ? buttonFrom(secondaryAction, {
    plain: true
  }) : null;
  var buttonMarkup = secondaryActionMarkup ? /*#__PURE__*/React__default.createElement(ButtonGroup, null, primaryActionMarkup, secondaryActionMarkup) : primaryActionMarkup;
  var dismissButton = onDismiss ? /*#__PURE__*/React__default.createElement("div", {
    className: styles$A.Dismiss
  }, /*#__PURE__*/React__default.createElement(Button, {
    plain: true,
    icon: CancelSmallMinor,
    onClick: onDismiss,
    accessibilityLabel: "Dismiss card"
  })) : null;
  var imageClassName = classNames(styles$A.Image, onDismiss && styles$A.DismissImage);
  return /*#__PURE__*/React__default.createElement(Card, null, /*#__PURE__*/React__default.createElement("div", {
    className: styles$A.Container
  }, dismissButton, /*#__PURE__*/React__default.createElement(Card.Section, null, /*#__PURE__*/React__default.createElement("div", {
    className: styles$A.CalloutCard
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles$A.Content
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles$A.Title
  }, /*#__PURE__*/React__default.createElement(Heading, null, title)), /*#__PURE__*/React__default.createElement(TextContainer, null, children), /*#__PURE__*/React__default.createElement("div", {
    className: styles$A.Buttons
  }, buttonMarkup)), /*#__PURE__*/React__default.createElement(Image, {
    alt: "",
    className: imageClassName,
    source: illustration
  })))));
}

var styles$B = {
  "Caption": "Polaris-Caption"
};

function Caption(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React__default.createElement("p", {
    className: styles$B.Caption
  }, children);
}

var styles$C = {
  "Choice": "Polaris-Choice",
  "labelHidden": "Polaris-Choice--labelHidden",
  "Label": "Polaris-Choice__Label",
  "Control": "Polaris-Choice__Control",
  "disabled": "Polaris-Choice--disabled",
  "Descriptions": "Polaris-Choice__Descriptions",
  "HelpText": "Polaris-Choice__HelpText"
};

function Choice(_ref) {
  var id = _ref.id,
      label = _ref.label,
      disabled = _ref.disabled,
      error = _ref.error,
      children = _ref.children,
      labelHidden = _ref.labelHidden,
      helpText = _ref.helpText,
      onClick = _ref.onClick,
      onMouseOut = _ref.onMouseOut,
      onMouseOver = _ref.onMouseOver;
  var className = classNames(styles$C.Choice, labelHidden && styles$C.labelHidden, disabled && styles$C.disabled);
  var labelMarkup = /*#__PURE__*/React__default.createElement("label", {
    className: className,
    htmlFor: id,
    onClick: onClick,
    onMouseOver: onMouseOver,
    onMouseOut: onMouseOut
  }, /*#__PURE__*/React__default.createElement("span", {
    className: styles$C.Control
  }, children), /*#__PURE__*/React__default.createElement("span", {
    className: styles$C.Label
  }, label));
  var helpTextMarkup = helpText ? /*#__PURE__*/React__default.createElement("div", {
    className: styles$C.HelpText,
    id: helpTextID$1(id)
  }, helpText) : null;
  var errorMarkup = error && typeof error !== 'boolean' && /*#__PURE__*/React__default.createElement("div", {
    className: styles$C.Error
  }, /*#__PURE__*/React__default.createElement(InlineError, {
    message: error,
    fieldID: id
  }));
  var descriptionMarkup = helpTextMarkup || errorMarkup ? /*#__PURE__*/React__default.createElement("div", {
    className: styles$C.Descriptions
  }, errorMarkup, helpTextMarkup) : null;
  return descriptionMarkup ? /*#__PURE__*/React__default.createElement("div", null, labelMarkup, descriptionMarkup) : labelMarkup;
}
function helpTextID$1(id) {
  return "".concat(id, "HelpText");
}

var styles$D = {
  "Checkbox": "Polaris-Checkbox",
  "Input": "Polaris-Checkbox__Input",
  "newDesignLanguage": "Polaris-Checkbox--newDesignLanguage",
  "Backdrop": "Polaris-Checkbox__Backdrop",
  "Input-indeterminate": "Polaris-Checkbox__Input--indeterminate",
  "Icon": "Polaris-Checkbox__Icon",
  "keyFocused": "Polaris-Checkbox--keyFocused",
  "hover": "Polaris-Checkbox--hover",
  "error": "Polaris-Checkbox--error"
};

var Checkbox$1 = /*#__PURE__*/React__default.forwardRef(function Checkbox(_ref, ref) {
  var ariaDescribedByProp = _ref.ariaDescribedBy,
      label = _ref.label,
      labelHidden = _ref.labelHidden,
      _ref$checked = _ref.checked,
      checked = _ref$checked === void 0 ? false : _ref$checked,
      helpText = _ref.helpText,
      disabled = _ref.disabled,
      idProp = _ref.id,
      name = _ref.name,
      value = _ref.value,
      error = _ref.error,
      onChange = _ref.onChange,
      onFocus = _ref.onFocus,
      onBlur = _ref.onBlur;
  var inputNode = useRef(null);

  var _useFeatures = useFeatures(),
      newDesignLanguage = _useFeatures.newDesignLanguage;

  var id = useUniqueId('Checkbox', idProp);

  var _useToggle = useToggle(false),
      mouseOver = _useToggle.value,
      handleMouseOver = _useToggle.setTrue,
      handleMouseOut = _useToggle.setFalse;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      keyFocused = _useState2[0],
      setKeyFocused = _useState2[1];

  useImperativeHandle(ref, function () {
    return {
      focus: function focus() {
        if (inputNode.current) {
          inputNode.current.focus();
        }
      }
    };
  });

  var handleBlur = function handleBlur() {
    onBlur && onBlur();
    setKeyFocused(false);
  };

  var handleInput = function handleInput() {
    if (onChange == null || inputNode.current == null || disabled) {
      return;
    }

    onChange(!inputNode.current.checked, id);
    inputNode.current.focus();
  };

  var handleKeyUp = function handleKeyUp(event) {
    var keyCode = event.keyCode;
    !keyFocused && setKeyFocused(true);

    if (keyCode === Key.Space) {
      handleInput();
    }
  };

  var describedBy = [];

  if (error && typeof error !== 'boolean') {
    describedBy.push(errorTextID(id));
  }

  if (helpText) {
    describedBy.push(helpTextID$1(id));
  }

  if (ariaDescribedByProp) {
    describedBy.push(ariaDescribedByProp);
  }

  var ariaDescribedBy = describedBy.length ? describedBy.join(' ') : undefined;
  var wrapperClassName = classNames(styles$D.Checkbox, error && styles$D.error, newDesignLanguage && styles$D.newDesignLanguage);
  var backdropClassName = classNames(styles$D.Backdrop, mouseOver && styles$D.hover);
  var isIndeterminate = checked === 'indeterminate';
  var isChecked = !isIndeterminate && Boolean(checked);
  var indeterminateAttributes = isIndeterminate ? {
    indeterminate: 'true',
    'aria-checked': 'mixed'
  } : {
    'aria-checked': isChecked
  };
  var iconSource = isIndeterminate ? MinusMinor : TickSmallMinor;
  var inputClassName = classNames(styles$D.Input, isIndeterminate && styles$D['Input-indeterminate'], newDesignLanguage && keyFocused && styles$D.keyFocused);
  return (
    /*#__PURE__*/

    /* eslint-disable jsx-a11y/no-redundant-roles */
    React__default.createElement(Choice, {
      id: id,
      label: label,
      labelHidden: labelHidden,
      helpText: helpText,
      error: error,
      disabled: disabled,
      onClick: handleInput,
      onMouseOver: handleMouseOver,
      onMouseOut: handleMouseOut
    }, /*#__PURE__*/React__default.createElement("span", {
      className: wrapperClassName
    }, /*#__PURE__*/React__default.createElement("input", Object.assign({
      onKeyUp: handleKeyUp,
      ref: inputNode,
      id: id,
      name: name,
      value: value,
      type: "checkbox",
      checked: isChecked,
      disabled: disabled,
      className: inputClassName,
      onFocus: onFocus,
      onBlur: handleBlur,
      onClick: stopPropagation,
      onChange: noop$2,
      "aria-invalid": error != null,
      "aria-describedby": ariaDescribedBy,
      role: "checkbox"
    }, indeterminateAttributes)), /*#__PURE__*/React__default.createElement("span", {
      className: backdropClassName
    }), /*#__PURE__*/React__default.createElement("span", {
      className: styles$D.Icon
    }, /*#__PURE__*/React__default.createElement(Icon, {
      source: iconSource
    }))))
    /* eslint-enable jsx-a11y/no-redundant-roles */

  );
});

function noop$2() {}

function stopPropagation(event) {
  event.stopPropagation();
}

var styles$E = {
  "RadioButton": "Polaris-RadioButton",
  "Input": "Polaris-RadioButton__Input",
  "newDesignLanguage": "Polaris-RadioButton--newDesignLanguage",
  "Backdrop": "Polaris-RadioButton__Backdrop",
  "Icon": "Polaris-RadioButton__Icon",
  "hover": "Polaris-RadioButton--hover",
  "keyFocused": "Polaris-RadioButton--keyFocused"
};

function RadioButton(_ref) {
  var ariaDescribedByProp = _ref.ariaDescribedBy,
      label = _ref.label,
      labelHidden = _ref.labelHidden,
      helpText = _ref.helpText,
      checked = _ref.checked,
      disabled = _ref.disabled,
      onChange = _ref.onChange,
      onFocus = _ref.onFocus,
      onBlur = _ref.onBlur,
      idProp = _ref.id,
      nameProp = _ref.name,
      value = _ref.value;
  var id = useUniqueId('RadioButton', idProp);
  var name = nameProp || id;
  var inputNode = useRef(null);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      keyFocused = _useState2[0],
      setKeyFocused = _useState2[1];

  var _useFeatures = useFeatures(),
      newDesignLanguage = _useFeatures.newDesignLanguage;

  var _useToggle = useToggle(false),
      mouseOver = _useToggle.value,
      handleMouseOver = _useToggle.setTrue,
      handleMouseOut = _useToggle.setFalse;

  var handleKeyUp = function handleKeyUp() {
    !keyFocused && setKeyFocused(true);
  };

  var handleBlur = function handleBlur() {
    onBlur && onBlur();
    setKeyFocused(false);
  };

  function handleChange(_ref2) {
    var currentTarget = _ref2.currentTarget;
    onChange && onChange(currentTarget.checked, id);
  }

  var describedBy = [];

  if (helpText) {
    describedBy.push(helpTextID$1(id));
  }

  if (ariaDescribedByProp) {
    describedBy.push(ariaDescribedByProp);
  }

  var ariaDescribedBy = describedBy.length ? describedBy.join(' ') : undefined;
  var inputClassName = classNames(styles$E.Input, newDesignLanguage && keyFocused && styles$E.keyFocused);
  var wrapperClassName = classNames(styles$E.RadioButton, newDesignLanguage && styles$E.newDesignLanguage);
  var iconMarkup = !newDesignLanguage && /*#__PURE__*/React__default.createElement("span", {
    className: styles$E.Icon
  });
  var backdropClassName = classNames(styles$E.Backdrop, mouseOver && styles$E.hover);
  return /*#__PURE__*/React__default.createElement(Choice, {
    label: label,
    labelHidden: labelHidden,
    disabled: disabled,
    id: id,
    helpText: helpText,
    onMouseOver: handleMouseOver,
    onMouseOut: handleMouseOut
  }, /*#__PURE__*/React__default.createElement("span", {
    className: wrapperClassName
  }, /*#__PURE__*/React__default.createElement("input", {
    id: id,
    name: name,
    value: value,
    type: "radio",
    checked: checked,
    disabled: disabled,
    className: inputClassName,
    onChange: handleChange,
    onFocus: onFocus,
    onKeyUp: handleKeyUp,
    onBlur: handleBlur,
    "aria-describedby": ariaDescribedBy,
    ref: inputNode
  }), /*#__PURE__*/React__default.createElement("span", {
    className: backdropClassName
  }), iconMarkup));
}

var styles$F = {
  "ChoiceList": "Polaris-ChoiceList",
  "titleHidden": "Polaris-ChoiceList--titleHidden",
  "Title": "Polaris-ChoiceList__Title",
  "Choices": "Polaris-ChoiceList__Choices",
  "ChoiceChildren": "Polaris-ChoiceList__ChoiceChildren",
  "ChoiceError": "Polaris-ChoiceList__ChoiceError"
};

function ChoiceList(_ref) {
  var title = _ref.title,
      titleHidden = _ref.titleHidden,
      allowMultiple = _ref.allowMultiple,
      choices = _ref.choices,
      selected = _ref.selected,
      _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? noop$3 : _ref$onChange,
      error = _ref.error,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      nameProp = _ref.name;
  // Type asserting to any is required for TS3.2 but can be removed when we update to 3.3
  // see https://github.com/Microsoft/TypeScript/issues/28768
  var ControlComponent = allowMultiple ? Checkbox$1 : RadioButton;
  var name = useUniqueId('ChoiceList', nameProp);
  var finalName = allowMultiple ? "".concat(name, "[]") : name;
  var className = classNames(styles$F.ChoiceList, titleHidden && styles$F.titleHidden);
  var titleMarkup = title ? /*#__PURE__*/React__default.createElement("legend", {
    className: styles$F.Title
  }, title) : null;
  var choicesMarkup = choices.map(function (choice) {
    var value = choice.value,
        label = choice.label,
        helpText = choice.helpText,
        choiceDisabled = choice.disabled,
        describedByError = choice.describedByError;

    function handleChange(checked) {
      onChange(updateSelectedChoices(choice, checked, selected, allowMultiple), name);
    }

    var isSelected = choiceIsSelected(choice, selected);
    var renderedChildren = choice.renderChildren ? choice.renderChildren(isSelected) : null;
    var children = renderedChildren ? /*#__PURE__*/React__default.createElement("div", {
      className: styles$F.ChoiceChildren
    }, renderedChildren) : null;
    return /*#__PURE__*/React__default.createElement("li", {
      key: value
    }, /*#__PURE__*/React__default.createElement(ControlComponent, {
      name: finalName,
      value: value,
      label: label,
      disabled: choiceDisabled || disabled,
      checked: choiceIsSelected(choice, selected),
      helpText: helpText,
      onChange: handleChange,
      ariaDescribedBy: error && describedByError ? errorTextID(finalName) : null
    }), children);
  });
  var errorMarkup = error && /*#__PURE__*/React__default.createElement("div", {
    className: styles$F.ChoiceError
  }, /*#__PURE__*/React__default.createElement(InlineError, {
    message: error,
    fieldID: finalName
  }));
  return /*#__PURE__*/React__default.createElement("fieldset", {
    className: className,
    id: finalName,
    "aria-invalid": error != null
  }, titleMarkup, /*#__PURE__*/React__default.createElement("ul", {
    className: styles$F.Choices
  }, choicesMarkup), errorMarkup);
}

function noop$3() {}

function choiceIsSelected(_ref2, selected) {
  var value = _ref2.value;
  return selected.includes(value);
}

function updateSelectedChoices(_ref3, checked, selected) {
  var value = _ref3.value;
  var allowMultiple = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (checked) {
    return allowMultiple ? [].concat(_toConsumableArray(selected), [value]) : [value];
  }

  return selected.filter(function (selectedChoice) {
    return selectedChoice !== value;
  });
}

var styles$G = {
  "Collapsible": "Polaris-Collapsible",
  "animating": "Polaris-Collapsible--animating",
  "open": "Polaris-Collapsible--open",
  "fullyOpen": "Polaris-Collapsible--fullyOpen"
};

var ParentCollapsibleExpandingContext = createContext(false);

var CollapsibleInner = /*#__PURE__*/function (_React$Component) {
  _inherits(CollapsibleInner, _React$Component);

  var _super = _createSuper(CollapsibleInner);

  function CollapsibleInner() {
    var _this;

    _classCallCheck(this, CollapsibleInner);

    _this = _super.apply(this, arguments);
    _this.state = {
      height: null,
      animationState: 'idle',
      // eslint-disable-next-line react/no-unused-state
      open: _this.props.open
    };
    _this.node = /*#__PURE__*/createRef();
    _this.heightNode = /*#__PURE__*/createRef();

    _this.handleTransitionEnd = function (event) {
      var target = event.target;

      if (target === _this.node.current) {
        _this.setState({
          animationState: 'idle',
          height: null
        });
      }
    };

    return _this;
  }

  _createClass(CollapsibleInner, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(_ref) {
      var _this2 = this;

      var wasOpen = _ref.open;
      var animationState = this.state.animationState;
      var parentCollapsibleExpanding = this.context;

      if (parentCollapsibleExpanding && animationState !== 'idle') {
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({
          animationState: 'idle'
        });
        return;
      }

      read(function () {
        var heightNode = _this2.heightNode.current;

        switch (animationState) {
          case 'idle':
            break;

          case 'measuring':
            _this2.setState({
              animationState: wasOpen ? 'closingStart' : 'openingStart',
              height: wasOpen && heightNode ? heightNode.scrollHeight : 0
            });

            break;

          case 'closingStart':
            _this2.setState({
              animationState: 'closing',
              height: 0
            });

            break;

          case 'openingStart':
            _this2.setState({
              animationState: 'opening',
              height: heightNode ? heightNode.scrollHeight : 0
            });

        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          open = _this$props.open,
          children = _this$props.children,
          transition = _this$props.transition;
      var _this$state = this.state,
          animationState = _this$state.animationState,
          height = _this$state.height;
      var parentCollapsibleExpanding = this.context;
      var animating = animationState !== 'idle';
      var wrapperClassName = classNames(styles$G.Collapsible, open && styles$G.open, animating && styles$G.animating, !animating && open && styles$G.fullyOpen);
      var displayHeight = collapsibleHeight(open, animationState, height);
      var content = animating || open ? children : null;
      var transitionProperties = transition ? {
        transitionDuration: "".concat(transition.duration),
        transitionTimingFunction: "".concat(transition.timingFunction)
      } : null;
      return /*#__PURE__*/React__default.createElement(ParentCollapsibleExpandingContext.Provider, {
        value: parentCollapsibleExpanding || open && animationState !== 'idle'
      }, /*#__PURE__*/React__default.createElement("div", {
        id: id,
        "aria-hidden": !open,
        style: Object.assign({
          maxHeight: "".concat(displayHeight)
        }, transitionProperties),
        className: wrapperClassName,
        ref: this.node,
        onTransitionEnd: this.handleTransitionEnd
      }, /*#__PURE__*/React__default.createElement("div", {
        ref: this.heightNode
      }, content)));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref2, _ref3) {
      var willOpen = _ref2.open;
      var open = _ref3.open,
          prevAnimationState = _ref3.animationState;
      var nextAnimationState = prevAnimationState;

      if (open !== willOpen) {
        nextAnimationState = 'measuring';
      }

      return {
        animationState: nextAnimationState,
        open: willOpen
      };
    }
  }]);

  return CollapsibleInner;
}(React__default.Component);

CollapsibleInner.contextType = ParentCollapsibleExpandingContext;

function collapsibleHeight(open, animationState, height) {
  if (animationState === 'idle' && open) {
    return open ? 'none' : undefined;
  }

  if (animationState === 'measuring') {
    return open ? undefined : 'none';
  }

  return "".concat(height || 0, "px");
}

var Collapsible = CollapsibleInner;

var styles$H = {
  "ColorPicker": "Polaris-ColorPicker",
  "MainColor": "Polaris-ColorPicker__MainColor",
  "Dragger": "Polaris-ColorPicker__Dragger",
  "ColorLayer": "Polaris-ColorPicker__ColorLayer",
  "HuePicker": "Polaris-ColorPicker__HuePicker",
  "AlphaPicker": "Polaris-ColorPicker__AlphaPicker",
  "Slidable": "Polaris-ColorPicker__Slidable"
};

var isDragging = false; // Required to solve a bug causing the underlying page/container to scroll
// while trying to drag the ColorPicker controls.
// This must be called as soon as possible to properly prevent the event.
// `passive: false` must also be set, as it seems webkit has changed the "default" behaviour
// https://bugs.webkit.org/show_bug.cgi?id=182521

if (!isServer) {
  window.addEventListener('touchmove', function (event) {
    if (!isDragging) {
      return;
    }

    event.preventDefault();
  }, {
    passive: false
  });
}

var Slidable = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Slidable, _React$PureComponent);

  var _super = _createSuper(Slidable);

  function Slidable() {
    var _this;

    _classCallCheck(this, Slidable);

    _this = _super.apply(this, arguments);
    _this.state = {
      dragging: false
    };
    _this.node = null;
    _this.draggerNode = null;

    _this.setDraggerNode = function (node) {
      _this.draggerNode = node;
    };

    _this.setNode = function (node) {
      _this.node = node;
    };

    _this.startDrag = function (event) {
      if (isMouseDownEvent(event)) {
        _this.handleDraggerMove(event.clientX, event.clientY);
      }

      isDragging = true;

      _this.setState({
        dragging: true
      });
    };

    _this.handleDragEnd = function () {
      isDragging = false;

      _this.setState({
        dragging: false
      });
    };

    _this.handleMove = function (event) {
      event.stopImmediatePropagation();
      event.stopPropagation();

      if (event.cancelable) {
        event.preventDefault();
      }

      if (isMouseMoveEvent(event)) {
        _this.handleDraggerMove(event.clientX, event.clientY);

        return;
      }

      _this.handleDraggerMove(event.touches[0].clientX, event.touches[0].clientY);
    };

    _this.handleDraggerMove = function (x, y) {
      if (_this.node == null) {
        return;
      }

      var onChange = _this.props.onChange;

      var rect = _this.node.getBoundingClientRect();

      var offsetX = x - rect.left;
      var offsetY = y - rect.top;
      onChange({
        x: offsetX,
        y: offsetY
      });
    };

    return _this;
  }

  _createClass(Slidable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var onDraggerHeight = this.props.onDraggerHeight;

      if (onDraggerHeight == null) {
        return;
      }

      var draggerNode = this.draggerNode;

      if (draggerNode == null) {
        return;
      }

      onDraggerHeight(draggerNode.clientWidth);

      if (process.env.NODE_ENV === 'development') {
        setTimeout(function () {
          onDraggerHeight(draggerNode.clientWidth);
        }, 0);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var dragging = this.state.dragging;
      var _this$props = this.props,
          _this$props$draggerX = _this$props.draggerX,
          draggerX = _this$props$draggerX === void 0 ? 0 : _this$props$draggerX,
          _this$props$draggerY = _this$props.draggerY,
          draggerY = _this$props$draggerY === void 0 ? 0 : _this$props$draggerY;
      var draggerPositioning = {
        transform: "translate3d(".concat(draggerX, "px, ").concat(draggerY, "px, 0)")
      };
      var moveListener = dragging ? /*#__PURE__*/React__default.createElement(EventListener, {
        event: "mousemove",
        handler: this.handleMove,
        passive: false
      }) : null;
      var touchMoveListener = dragging ? /*#__PURE__*/React__default.createElement(EventListener, {
        event: "touchmove",
        handler: this.handleMove,
        passive: false
      }) : null;
      var endDragListener = dragging ? /*#__PURE__*/React__default.createElement(EventListener, {
        event: "mouseup",
        handler: this.handleDragEnd
      }) : null;
      var touchEndListener = dragging ? /*#__PURE__*/React__default.createElement(EventListener, {
        event: "touchend",
        handler: this.handleDragEnd
      }) : null;
      var touchCancelListener = dragging ? /*#__PURE__*/React__default.createElement(EventListener, {
        event: "touchcancel",
        handler: this.handleDragEnd
      }) : null;
      return /*#__PURE__*/React__default.createElement("div", {
        ref: this.setNode,
        className: styles$H.Slidable,
        onMouseDown: this.startDrag,
        onTouchStart: this.startDrag
      }, endDragListener, moveListener, touchMoveListener, touchEndListener, touchCancelListener, /*#__PURE__*/React__default.createElement("div", {
        style: draggerPositioning,
        className: styles$H.Dragger,
        ref: this.setDraggerNode
      }));
    }
  }]);

  return Slidable;
}(React__default.PureComponent);

function isMouseMoveEvent(event) {
  return event.type === 'mousemove';
}

function isMouseDownEvent(event) {
  return event.type === 'mousedown';
}

var VERTICAL_PADDING = 13;
function calculateDraggerY(alpha, sliderHeight, draggerHeight) {
  var offset = offsetForAlpha(alpha, sliderHeight, draggerHeight);
  return clamp$1(offset, 0, sliderHeight);
}
function alphaForDraggerY(y, sliderHeight) {
  var offsetY = clamp$1(y, 0, sliderHeight);
  return alphaForOffset(offsetY, sliderHeight);
}
function alphaForOffset(offset, sliderHeight) {
  var selectionHeight = offset - VERTICAL_PADDING;
  var slidableArea = sliderHeight - VERTICAL_PADDING * 2;
  return clamp$1(1 - selectionHeight / slidableArea, 0, 1);
}

function offsetForAlpha(alpha, sliderHeight, draggerHeight) {
  var slidableArea = sliderHeight - (draggerHeight + VERTICAL_PADDING);
  return clamp$1((1 - alpha) * slidableArea + VERTICAL_PADDING, 0, sliderHeight - draggerHeight);
}

var AlphaPicker = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(AlphaPicker, _React$PureComponent);

  var _super = _createSuper(AlphaPicker);

  function AlphaPicker() {
    var _this;

    _classCallCheck(this, AlphaPicker);

    _this = _super.apply(this, arguments);
    _this.state = {
      sliderHeight: 0,
      draggerHeight: 0
    };

    _this.setSliderHeight = function (node) {
      if (node == null) {
        return;
      }

      _this.setState({
        sliderHeight: node.clientHeight
      });

      if (process.env.NODE_ENV === 'development') {
        setTimeout(function () {
          _this.setState({
            sliderHeight: node.clientHeight
          });
        }, 0);
      }
    };

    _this.setDraggerHeight = function (height) {
      _this.setState({
        draggerHeight: height
      });
    };

    _this.handleChange = function (_ref) {
      var y = _ref.y;
      var onChange = _this.props.onChange;
      var sliderHeight = _this.state.sliderHeight;
      var alpha = alphaForDraggerY(y, sliderHeight);
      onChange(alpha);
    };

    return _this;
  }

  _createClass(AlphaPicker, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          color = _this$props.color,
          alpha = _this$props.alpha;
      var _this$state = this.state,
          sliderHeight = _this$state.sliderHeight,
          draggerHeight = _this$state.draggerHeight;
      var draggerY = calculateDraggerY(alpha, sliderHeight, draggerHeight);
      var background = alphaGradientForColor(color);
      return /*#__PURE__*/React__default.createElement("div", {
        className: styles$H.AlphaPicker,
        ref: this.setSliderHeight
      }, /*#__PURE__*/React__default.createElement("div", {
        className: styles$H.ColorLayer,
        style: {
          background
        }
      }), /*#__PURE__*/React__default.createElement(Slidable, {
        draggerY: draggerY,
        draggerX: 0,
        onChange: this.handleChange,
        onDraggerHeight: this.setDraggerHeight
      }));
    }
  }]);

  return AlphaPicker;
}(React__default.PureComponent);

function alphaGradientForColor(color) {
  var _hsbToRgb = hsbToRgb(color),
      red = _hsbToRgb.red,
      green = _hsbToRgb.green,
      blue = _hsbToRgb.blue;

  var rgb = "".concat(red, ", ").concat(green, ", ").concat(blue);
  return "linear-gradient(to top, rgba(".concat(rgb, ", 0) 18px, rgba(").concat(rgb, ", 1) calc(100% - 18px))");
}

var VERTICAL_PADDING$1 = 13;
function calculateDraggerY$1(hue, sliderHeight, draggerHeight) {
  var offset = offsetForHue(hue, sliderHeight, draggerHeight);
  return clamp$1(offset, 0, sliderHeight);
}
function hueForDraggerY(y, sliderHeight) {
  var offsetY = clamp$1(y, 0, sliderHeight);
  return hueForOffset(offsetY, sliderHeight);
}

function hueForOffset(offset, sliderHeight) {
  var selectionHeight = offset - VERTICAL_PADDING$1;
  var slidableArea = sliderHeight - VERTICAL_PADDING$1 * 2;
  return clamp$1(selectionHeight / slidableArea * 360, 0, 360);
}

function offsetForHue(hue, sliderHeight, draggerHeight) {
  var slidableArea = sliderHeight - (draggerHeight + VERTICAL_PADDING$1);
  return clamp$1(hue / 360 * slidableArea + VERTICAL_PADDING$1, 0, sliderHeight - draggerHeight);
}

var HuePicker = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(HuePicker, _React$PureComponent);

  var _super = _createSuper(HuePicker);

  function HuePicker() {
    var _this;

    _classCallCheck(this, HuePicker);

    _this = _super.apply(this, arguments);
    _this.state = {
      sliderHeight: 0,
      draggerHeight: 0
    };

    _this.setSliderHeight = function (node) {
      if (node == null) {
        return;
      }

      _this.setState({
        sliderHeight: node.clientHeight
      });

      if (process.env.NODE_ENV === 'development') {
        setTimeout(function () {
          _this.setState({
            sliderHeight: node.clientHeight
          });
        }, 0);
      }
    };

    _this.setDraggerHeight = function (height) {
      _this.setState({
        draggerHeight: height
      });
    };

    _this.handleChange = function (_ref) {
      var y = _ref.y;
      var onChange = _this.props.onChange;
      var sliderHeight = _this.state.sliderHeight;
      var hue = hueForDraggerY(y, sliderHeight);
      onChange(hue);
    };

    return _this;
  }

  _createClass(HuePicker, [{
    key: "render",
    value: function render() {
      var hue = this.props.hue;
      var _this$state = this.state,
          sliderHeight = _this$state.sliderHeight,
          draggerHeight = _this$state.draggerHeight;
      var draggerY = calculateDraggerY$1(hue, sliderHeight, draggerHeight);
      return /*#__PURE__*/React__default.createElement("div", {
        className: styles$H.HuePicker,
        ref: this.setSliderHeight
      }, /*#__PURE__*/React__default.createElement(Slidable, {
        draggerY: draggerY,
        draggerX: 0,
        onChange: this.handleChange,
        onDraggerHeight: this.setDraggerHeight
      }));
    }
  }]);

  return HuePicker;
}(React__default.PureComponent);

var ColorPicker = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(ColorPicker, _React$PureComponent);

  var _super = _createSuper(ColorPicker);

  function ColorPicker() {
    var _this;

    _classCallCheck(this, ColorPicker);

    _this = _super.apply(this, arguments);
    _this.state = {
      pickerSize: 0
    };
    _this.colorNode = null;

    _this.setColorNode = function (node) {
      _this.colorNode = node;
    };

    _this.handleHueChange = function (hue) {
      var _this$props = _this.props,
          _this$props$color = _this$props.color,
          brightness = _this$props$color.brightness,
          saturation = _this$props$color.saturation,
          _this$props$color$alp = _this$props$color.alpha,
          alpha = _this$props$color$alp === void 0 ? 1 : _this$props$color$alp,
          onChange = _this$props.onChange;
      onChange({
        hue,
        brightness,
        saturation,
        alpha
      });
    };

    _this.handleAlphaChange = function (alpha) {
      var _this$props2 = _this.props,
          _this$props2$color = _this$props2.color,
          hue = _this$props2$color.hue,
          brightness = _this$props2$color.brightness,
          saturation = _this$props2$color.saturation,
          onChange = _this$props2.onChange;
      onChange({
        hue,
        brightness,
        saturation,
        alpha
      });
    };

    _this.handleDraggerMove = function (_ref) {
      var x = _ref.x,
          y = _ref.y;
      var pickerSize = _this.state.pickerSize;
      var _this$props3 = _this.props,
          _this$props3$color = _this$props3.color,
          hue = _this$props3$color.hue,
          _this$props3$color$al = _this$props3$color.alpha,
          alpha = _this$props3$color$al === void 0 ? 1 : _this$props3$color$al,
          onChange = _this$props3.onChange;
      var saturation = clamp$1(x / pickerSize, 0, 1);
      var brightness = clamp$1(1 - y / pickerSize, 0, 1);
      onChange({
        hue,
        saturation,
        brightness,
        alpha
      });
    };

    _this.handlePickerDrag = function (event) {
      // prevents external elements from being selected
      event.preventDefault();
    };

    return _this;
  }

  _createClass(ColorPicker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var colorNode = this.colorNode;

      if (colorNode == null) {
        return;
      }

      this.setState({
        pickerSize: colorNode.clientWidth
      });

      if (process.env.NODE_ENV === 'development') {
        setTimeout(function () {
          _this2.setState({
            pickerSize: colorNode.clientWidth
          });
        }, 0);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          id = _this$props4.id,
          color = _this$props4.color,
          allowAlpha = _this$props4.allowAlpha;
      var hue = color.hue,
          saturation = color.saturation,
          brightness = color.brightness,
          providedAlpha = color.alpha;
      var pickerSize = this.state.pickerSize;
      var alpha = providedAlpha != null && allowAlpha ? providedAlpha : 1;

      var _hsbToRgb = hsbToRgb({
        hue,
        saturation: 1,
        brightness: 1
      }),
          red = _hsbToRgb.red,
          green = _hsbToRgb.green,
          blue = _hsbToRgb.blue;

      var colorString = "rgba(".concat(red, ", ").concat(green, ", ").concat(blue, ", ").concat(alpha, ")");
      var draggerX = clamp$1(saturation * pickerSize, 0, pickerSize);
      var draggerY = clamp$1(pickerSize - brightness * pickerSize, 0, pickerSize);
      var alphaSliderMarkup = allowAlpha ? /*#__PURE__*/React__default.createElement(AlphaPicker, {
        alpha: alpha,
        color: color,
        onChange: this.handleAlphaChange
      }) : null;
      return /*#__PURE__*/React__default.createElement("div", {
        className: styles$H.ColorPicker,
        id: id,
        onMouseDown: this.handlePickerDrag
      }, /*#__PURE__*/React__default.createElement("div", {
        ref: this.setColorNode,
        className: styles$H.MainColor
      }, /*#__PURE__*/React__default.createElement("div", {
        className: styles$H.ColorLayer,
        style: {
          backgroundColor: colorString
        }
      }), /*#__PURE__*/React__default.createElement(Slidable, {
        onChange: this.handleDraggerMove,
        draggerX: draggerX,
        draggerY: draggerY
      })), /*#__PURE__*/React__default.createElement(HuePicker, {
        hue: hue,
        onChange: this.handleHueChange
      }), alphaSliderMarkup);
    }
  }]);

  return ColorPicker;
}(React__default.PureComponent);

var FrameContext = React__default.createContext(undefined);

var defaultFrame = {
  showToast: noop$4,
  hideToast: noop$4,
  setContextualSaveBar: noop$4,
  removeContextualSaveBar: noop$4,
  startLoading: noop$4,
  stopLoading: noop$4
};
function useFrame() {
  var frame = useContext(FrameContext);
  var appBridge = useAppBridge();

  if (!frame && !appBridge) {
    throw new Error('No Frame context was provided. Your component must be wrapped in a <Frame> component, or be used within an embedded application by setting the apiKey and shopOrigin properties on <AppProvider>. See https://polaris.shopify.com/components/structure/frame for implementation instructions.');
  } // This makes sure the useFrame hook always returns a FrameContext object, never undefined


  if (appBridge || !frame) {
    return defaultFrame;
  }

  return frame;
}

function noop$4() {}

var ContextualSaveBar = /*#__PURE__*/React__default.memo(function ContextualSaveBar(_ref) {
  var message = _ref.message,
      saveAction = _ref.saveAction,
      discardAction = _ref.discardAction,
      alignContentFlush = _ref.alignContentFlush,
      fullWidth = _ref.fullWidth;

  var _useFrame = useFrame(),
      setContextualSaveBar = _useFrame.setContextualSaveBar,
      removeContextualSaveBar = _useFrame.removeContextualSaveBar;

  React__default.useEffect(function () {
    setContextualSaveBar({
      message,
      saveAction,
      discardAction,
      alignContentFlush,
      fullWidth
    });
  }, [message, saveAction, discardAction, alignContentFlush, setContextualSaveBar, fullWidth]);
  React__default.useEffect(function () {
    return removeContextualSaveBar;
  }, [removeContextualSaveBar]);
  return null;
});

function withAppProvider() {
  return function addProvider(WrappedComponent) {
    var WithAppProvider = function WithAppProvider(props) {
      var polaris = {
        intl: useI18n(),
        stickyManager: useStickyManager(),
        appBridge: useAppBridge(),
        mediaQuery: useMediaQuery()
      };
      return /*#__PURE__*/React__default.createElement(WrappedComponent, Object.assign({}, props, {
        polaris: polaris
      }));
    };

    WithAppProvider.displayName = "WithAppProvider(".concat(getDisplayName(WrappedComponent), ")");
    var FinalComponent = hoistStatics(WithAppProvider, WrappedComponent);
    return FinalComponent;
  };
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

var styles$I = {
  "DataTable": "Polaris-DataTable",
  "condensed": "Polaris-DataTable--condensed",
  "Navigation": "Polaris-DataTable__Navigation",
  "Pip": "Polaris-DataTable__Pip",
  "Pip-visible": "Polaris-DataTable__Pip--visible",
  "ScrollContainer": "Polaris-DataTable__ScrollContainer",
  "Table": "Polaris-DataTable__Table",
  "TableRow": "Polaris-DataTable__TableRow",
  "Cell": "Polaris-DataTable__Cell",
  "Cell-firstColumn": "Polaris-DataTable__Cell--firstColumn",
  "Cell-numeric": "Polaris-DataTable__Cell--numeric",
  "Cell-truncated": "Polaris-DataTable__Cell--truncated",
  "Cell-header": "Polaris-DataTable__Cell--header",
  "Cell-sortable": "Polaris-DataTable__Cell--sortable",
  "Cell-verticalAlignTop": "Polaris-DataTable__Cell--verticalAlignTop",
  "Cell-verticalAlignBottom": "Polaris-DataTable__Cell--verticalAlignBottom",
  "Cell-verticalAlignMiddle": "Polaris-DataTable__Cell--verticalAlignMiddle",
  "Cell-verticalAlignBaseline": "Polaris-DataTable__Cell--verticalAlignBaseline",
  "Icon": "Polaris-DataTable__Icon",
  "Heading": "Polaris-DataTable__Heading",
  "Heading-left": "Polaris-DataTable__Heading--left",
  "Cell-sorted": "Polaris-DataTable__Cell--sorted",
  "Cell-total": "Polaris-DataTable__Cell--total",
  "Cell-total-footer": "Polaris-DataTable--cellTotalFooter",
  "Footer": "Polaris-DataTable__Footer"
};

function Cell(_ref) {
  var content = _ref.content,
      contentType = _ref.contentType,
      firstColumn = _ref.firstColumn,
      truncate = _ref.truncate,
      header = _ref.header,
      total = _ref.total,
      totalInFooter = _ref.totalInFooter,
      sorted = _ref.sorted,
      sortable = _ref.sortable,
      sortDirection = _ref.sortDirection,
      _ref$verticalAlign = _ref.verticalAlign,
      verticalAlign = _ref$verticalAlign === void 0 ? 'top' : _ref$verticalAlign,
      _ref$defaultSortDirec = _ref.defaultSortDirection,
      defaultSortDirection = _ref$defaultSortDirec === void 0 ? 'ascending' : _ref$defaultSortDirec,
      onSort = _ref.onSort;
  var i18n = useI18n();
  var numeric = contentType === 'numeric';
  var className = classNames(styles$I.Cell, styles$I["Cell-".concat(variationName('verticalAlign', verticalAlign))], firstColumn && styles$I['Cell-firstColumn'], firstColumn && truncate && styles$I['Cell-truncated'], header && styles$I['Cell-header'], total && styles$I['Cell-total'], totalInFooter && styles$I['Cell-total-footer'], numeric && styles$I['Cell-numeric'], sortable && styles$I['Cell-sortable'], sorted && styles$I['Cell-sorted']);
  var headerClassName = classNames(header && styles$I.Heading, header && contentType === 'text' && styles$I['Heading-left']);
  var iconClassName = classNames(sortable && styles$I.Icon);
  var direction = sorted && sortDirection ? sortDirection : defaultSortDirection;
  var source = direction === 'descending' ? CaretDownMinor : CaretUpMinor;
  var oppositeDirection = sortDirection === 'ascending' ? 'descending' : 'ascending';
  var sortAccessibilityLabel = i18n.translate('Polaris.DataTable.sortAccessibilityLabel', {
    direction: sorted ? oppositeDirection : direction
  });
  var iconMarkup = /*#__PURE__*/React__default.createElement("span", {
    className: iconClassName
  }, /*#__PURE__*/React__default.createElement(Icon, {
    source: source,
    accessibilityLabel: sortAccessibilityLabel
  }));
  var sortableHeadingContent = /*#__PURE__*/React__default.createElement("button", {
    className: headerClassName,
    onClick: onSort
  }, iconMarkup, content);
  var columnHeadingContent = sortable ? sortableHeadingContent : content;
  var headingMarkup = header ? /*#__PURE__*/React__default.createElement("th", Object.assign({}, headerCell.props, {
    className: className,
    scope: "col",
    "aria-sort": sortDirection
  }), columnHeadingContent) : /*#__PURE__*/React__default.createElement("th", {
    className: className,
    scope: "row"
  }, content);
  var cellMarkup = header || firstColumn ? headingMarkup : /*#__PURE__*/React__default.createElement("td", {
    className: className
  }, content);
  return cellMarkup;
}

function Navigation(_ref) {
  var columnVisibilityData = _ref.columnVisibilityData,
      isScrolledFarthestLeft = _ref.isScrolledFarthestLeft,
      isScrolledFarthestRight = _ref.isScrolledFarthestRight,
      navigateTableLeft = _ref.navigateTableLeft,
      navigateTableRight = _ref.navigateTableRight;
  var i18n = useI18n();
  var pipMarkup = columnVisibilityData.map(function (column, index) {
    var className = classNames(styles$I.Pip, column.isVisible && styles$I['Pip-visible']);
    return /*#__PURE__*/React__default.createElement("div", {
      className: className,
      key: "pip-".concat(index)
    });
  });
  var leftA11yLabel = i18n.translate('Polaris.DataTable.navAccessibilityLabel', {
    direction: 'left'
  });
  var rightA11yLabel = i18n.translate('Polaris.DataTable.navAccessibilityLabel', {
    direction: 'right'
  });
  return /*#__PURE__*/React__default.createElement("div", {
    className: styles$I.Navigation
  }, /*#__PURE__*/React__default.createElement(Button, {
    plain: true,
    icon: ChevronLeftMinor,
    disabled: isScrolledFarthestLeft,
    accessibilityLabel: leftA11yLabel,
    onClick: navigateTableLeft
  }), pipMarkup, /*#__PURE__*/React__default.createElement(Button, {
    plain: true,
    icon: ChevronRightMinor,
    disabled: isScrolledFarthestRight,
    accessibilityLabel: rightA11yLabel,
    onClick: navigateTableRight
  }));
}

function measureColumn(tableData) {
  return function (column, index) {
    var firstVisibleColumnIndex = tableData.firstVisibleColumnIndex,
        tableStart = tableData.tableLeftVisibleEdge,
        tableEnd = tableData.tableRightVisibleEdge;
    var leftEdge = column.offsetLeft;
    var rightEdge = leftEdge + column.offsetWidth;
    var isVisibleLeft = isEdgeVisible(leftEdge, tableStart, tableEnd);
    var isVisibleRight = isEdgeVisible(rightEdge, tableStart, tableEnd);
    var isVisible = isVisibleLeft || isVisibleRight;

    if (isVisible) {
      tableData.firstVisibleColumnIndex = Math.min(firstVisibleColumnIndex, index);
    }

    return {
      leftEdge,
      rightEdge,
      isVisible
    };
  };
}
function isEdgeVisible(position, start, end) {
  var minVisiblePixels = 30;
  return position >= start + minVisiblePixels && position <= end - minVisiblePixels;
}
function getPrevAndCurrentColumns(tableData, columnData) {
  var firstVisibleColumnIndex = tableData.firstVisibleColumnIndex;
  var previousColumnIndex = Math.max(firstVisibleColumnIndex - 1, 0);
  var previousColumn = columnData[previousColumnIndex];
  var currentColumn = columnData[firstVisibleColumnIndex];
  return {
    previousColumn,
    currentColumn
  };
}

var DataTableInner = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(DataTableInner, _React$PureComponent);

  var _super = _createSuper(DataTableInner);

  function DataTableInner() {
    var _this;

    _classCallCheck(this, DataTableInner);

    _this = _super.apply(this, arguments);
    _this.state = {
      condensed: false,
      columnVisibilityData: [],
      isScrolledFarthestLeft: true,
      isScrolledFarthestRight: false
    };
    _this.dataTable = /*#__PURE__*/React__default.createRef();
    _this.scrollContainer = /*#__PURE__*/React__default.createRef();
    _this.table = /*#__PURE__*/React__default.createRef();
    _this.handleResize = debounce(function () {
      var _assertThisInitialize = _assertThisInitialized(_this),
          table = _assertThisInitialize.table.current,
          scrollContainer = _assertThisInitialize.scrollContainer.current;

      var condensed = false;

      if (table && scrollContainer) {
        condensed = table.scrollWidth > scrollContainer.clientWidth;
      }

      _this.setState(Object.assign({
        condensed
      }, _this.calculateColumnVisibilityData(condensed)));
    });

    _this.calculateColumnVisibilityData = function (condensed) {
      var _assertThisInitialize2 = _assertThisInitialized(_this),
          table = _assertThisInitialize2.table.current,
          scrollContainer = _assertThisInitialize2.scrollContainer.current,
          dataTable = _assertThisInitialize2.dataTable.current;

      if (condensed && table && scrollContainer && dataTable) {
        var headerCells = table.querySelectorAll(headerCell.selector);

        if (headerCells.length > 0) {
          var firstVisibleColumnIndex = headerCells.length - 1;
          var tableLeftVisibleEdge = scrollContainer.scrollLeft;
          var tableRightVisibleEdge = scrollContainer.scrollLeft + dataTable.offsetWidth;
          var tableData = {
            firstVisibleColumnIndex,
            tableLeftVisibleEdge,
            tableRightVisibleEdge
          };

          var columnVisibilityData = _toConsumableArray(headerCells).map(measureColumn(tableData));

          var lastColumn = columnVisibilityData[columnVisibilityData.length - 1];
          return Object.assign(Object.assign({
            columnVisibilityData
          }, getPrevAndCurrentColumns(tableData, columnVisibilityData)), {
            isScrolledFarthestLeft: tableLeftVisibleEdge === 0,
            isScrolledFarthestRight: lastColumn.rightEdge <= tableRightVisibleEdge
          });
        }
      }

      return {
        columnVisibilityData: [],
        previousColumn: undefined,
        currentColumn: undefined
      };
    };

    _this.scrollListener = function () {
      _this.setState(function (prevState) {
        return Object.assign({}, _this.calculateColumnVisibilityData(prevState.condensed));
      });
    };

    _this.navigateTable = function (direction) {
      var _this$state = _this.state,
          currentColumn = _this$state.currentColumn,
          previousColumn = _this$state.previousColumn;
      var scrollContainer = _this.scrollContainer.current;

      var handleScroll = function handleScroll() {
        if (!currentColumn || !previousColumn) {
          return;
        }

        if (scrollContainer) {
          scrollContainer.scrollLeft = direction === 'right' ? currentColumn.rightEdge : previousColumn.leftEdge;
          requestAnimationFrame(function () {
            _this.setState(function (prevState) {
              return Object.assign({}, _this.calculateColumnVisibilityData(prevState.condensed));
            });
          });
        }
      };

      return handleScroll;
    };

    _this.renderHeadings = function (heading, headingIndex) {
      var _this$props = _this.props,
          sortable = _this$props.sortable,
          _this$props$truncate = _this$props.truncate,
          truncate = _this$props$truncate === void 0 ? false : _this$props$truncate,
          columnContentTypes = _this$props.columnContentTypes,
          defaultSortDirection = _this$props.defaultSortDirection,
          _this$props$initialSo = _this$props.initialSortColumnIndex,
          initialSortColumnIndex = _this$props$initialSo === void 0 ? 0 : _this$props$initialSo,
          verticalAlign = _this$props.verticalAlign;
      var _this$state2 = _this.state,
          _this$state2$sortDire = _this$state2.sortDirection,
          sortDirection = _this$state2$sortDire === void 0 ? defaultSortDirection : _this$state2$sortDire,
          _this$state2$sortedCo = _this$state2.sortedColumnIndex,
          sortedColumnIndex = _this$state2$sortedCo === void 0 ? initialSortColumnIndex : _this$state2$sortedCo;
      var sortableHeadingProps;
      var id = "heading-cell-".concat(headingIndex);

      if (sortable) {
        var isSortable = sortable[headingIndex];
        var isSorted = isSortable && sortedColumnIndex === headingIndex;
        var direction = isSorted ? sortDirection : 'none';
        sortableHeadingProps = {
          defaultSortDirection,
          sorted: isSorted,
          sortable: isSortable,
          sortDirection: direction,
          onSort: _this.defaultOnSort(headingIndex)
        };
      }

      return /*#__PURE__*/React__default.createElement(Cell, Object.assign({
        header: true,
        key: id,
        content: heading,
        contentType: columnContentTypes[headingIndex],
        firstColumn: headingIndex === 0,
        truncate: truncate
      }, sortableHeadingProps, {
        verticalAlign: verticalAlign
      }));
    };

    _this.totalsRowHeading = function () {
      var _this$props2 = _this.props,
          intl = _this$props2.polaris.intl,
          totals = _this$props2.totals,
          totalsName = _this$props2.totalsName;
      var totalsLabel = totalsName ? totalsName : {
        singular: intl.translate('Polaris.DataTable.totalRowHeading'),
        plural: intl.translate('Polaris.DataTable.totalsRowHeading')
      };
      return totals && totals.filter(function (total) {
        return total !== '';
      }).length > 1 ? totalsLabel.plural : totalsLabel.singular;
    };

    _this.renderTotals = function (total, index) {
      var id = "totals-cell-".concat(index);
      var _this$props3 = _this.props,
          _this$props3$truncate = _this$props3.truncate,
          truncate = _this$props3$truncate === void 0 ? false : _this$props3$truncate,
          verticalAlign = _this$props3.verticalAlign;
      var content;
      var contentType;

      if (index === 0) {
        content = _this.totalsRowHeading();
      }

      if (total !== '' && index > 0) {
        contentType = 'numeric';
        content = total;
      }

      var totalInFooter = _this.props.showTotalsInFooter;
      return /*#__PURE__*/React__default.createElement(Cell, {
        total: true,
        totalInFooter: totalInFooter,
        firstColumn: index === 0,
        key: id,
        content: content,
        contentType: contentType,
        truncate: truncate,
        verticalAlign: verticalAlign
      });
    };

    _this.defaultRenderRow = function (row, index) {
      var className = classNames(styles$I.TableRow);
      var _this$props4 = _this.props,
          columnContentTypes = _this$props4.columnContentTypes,
          _this$props4$truncate = _this$props4.truncate,
          truncate = _this$props4$truncate === void 0 ? false : _this$props4$truncate,
          verticalAlign = _this$props4.verticalAlign;
      return /*#__PURE__*/React__default.createElement("tr", {
        key: "row-".concat(index),
        className: className
      }, row.map(function (content, cellIndex) {
        var id = "cell-".concat(cellIndex, "-row-").concat(index);
        return /*#__PURE__*/React__default.createElement(Cell, {
          key: id,
          content: content,
          contentType: columnContentTypes[cellIndex],
          firstColumn: cellIndex === 0,
          truncate: truncate,
          verticalAlign: verticalAlign
        });
      }));
    };

    _this.defaultOnSort = function (headingIndex) {
      var _this$props5 = _this.props,
          onSort = _this$props5.onSort,
          _this$props5$defaultS = _this$props5.defaultSortDirection,
          defaultSortDirection = _this$props5$defaultS === void 0 ? 'ascending' : _this$props5$defaultS,
          initialSortColumnIndex = _this$props5.initialSortColumnIndex;
      var _this$state3 = _this.state,
          _this$state3$sortDire = _this$state3.sortDirection,
          sortDirection = _this$state3$sortDire === void 0 ? defaultSortDirection : _this$state3$sortDire,
          _this$state3$sortedCo = _this$state3.sortedColumnIndex,
          sortedColumnIndex = _this$state3$sortedCo === void 0 ? initialSortColumnIndex : _this$state3$sortedCo;
      var newSortDirection = defaultSortDirection;

      if (sortedColumnIndex === headingIndex) {
        newSortDirection = sortDirection === 'ascending' ? 'descending' : 'ascending';
      }

      var handleSort = function handleSort() {
        _this.setState({
          sortDirection: newSortDirection,
          sortedColumnIndex: headingIndex
        }, function () {
          if (onSort) {
            onSort(headingIndex, newSortDirection);
          }
        });
      };

      return handleSort;
    };

    return _this;
  }

  _createClass(DataTableInner, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      // We need to defer the calculation in development so the styles have time to be injected.
      if (process.env.NODE_ENV === 'development') {
        setTimeout(function () {
          _this2.handleResize();
        }, 10);
      } else {
        this.handleResize();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (isEqual(prevProps, this.props)) {
        return;
      }

      this.handleResize();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props6 = this.props,
          headings = _this$props6.headings,
          totals = _this$props6.totals,
          showTotalsInFooter = _this$props6.showTotalsInFooter,
          rows = _this$props6.rows,
          footerContent = _this$props6.footerContent,
          _this$props6$hideScro = _this$props6.hideScrollIndicator,
          hideScrollIndicator = _this$props6$hideScro === void 0 ? false : _this$props6$hideScro;
      var _this$state4 = this.state,
          condensed = _this$state4.condensed,
          columnVisibilityData = _this$state4.columnVisibilityData,
          isScrolledFarthestLeft = _this$state4.isScrolledFarthestLeft,
          isScrolledFarthestRight = _this$state4.isScrolledFarthestRight;
      var className = classNames(styles$I.DataTable, condensed && styles$I.condensed);
      var wrapperClassName = classNames(styles$I.TableWrapper, condensed && styles$I.condensed);
      var headingMarkup = /*#__PURE__*/React__default.createElement("tr", null, headings.map(this.renderHeadings));
      var totalsMarkup = totals ? /*#__PURE__*/React__default.createElement("tr", null, totals.map(this.renderTotals)) : null;
      var bodyMarkup = rows.map(this.defaultRenderRow);
      var footerMarkup = footerContent ? /*#__PURE__*/React__default.createElement("div", {
        className: styles$I.Footer
      }, footerContent) : null;
      var headerTotalsMarkup = !showTotalsInFooter ? totalsMarkup : null;
      var footerTotalsMarkup = showTotalsInFooter ? /*#__PURE__*/React__default.createElement("tfoot", null, totalsMarkup) : null;
      var navigationMarkup = hideScrollIndicator ? null : /*#__PURE__*/React__default.createElement(Navigation, {
        columnVisibilityData: columnVisibilityData,
        isScrolledFarthestLeft: isScrolledFarthestLeft,
        isScrolledFarthestRight: isScrolledFarthestRight,
        navigateTableLeft: this.navigateTable('left'),
        navigateTableRight: this.navigateTable('right')
      });
      return /*#__PURE__*/React__default.createElement("div", {
        className: wrapperClassName
      }, navigationMarkup, /*#__PURE__*/React__default.createElement("div", {
        className: className,
        ref: this.dataTable
      }, /*#__PURE__*/React__default.createElement("div", {
        className: styles$I.ScrollContainer,
        ref: this.scrollContainer
      }, /*#__PURE__*/React__default.createElement(EventListener, {
        event: "resize",
        handler: this.handleResize
      }), /*#__PURE__*/React__default.createElement(EventListener, {
        capture: true,
        event: "scroll",
        handler: this.scrollListener
      }), /*#__PURE__*/React__default.createElement("table", {
        className: styles$I.Table,
        ref: this.table
      }, /*#__PURE__*/React__default.createElement("thead", null, headingMarkup, headerTotalsMarkup), /*#__PURE__*/React__default.createElement("tbody", null, bodyMarkup), footerTotalsMarkup)), footerMarkup));
    }
  }]);

  return DataTableInner;
}(React__default.PureComponent);

var DataTable = withAppProvider()(DataTableInner);

function monthName(month) {
  switch (month) {
    case 0:
      return 'january';

    case 1:
      return 'february';

    case 2:
      return 'march';

    case 3:
      return 'april';

    case 4:
      return 'may';

    case 5:
      return 'june';

    case 6:
      return 'july';

    case 7:
      return 'august';

    case 8:
      return 'september';

    case 9:
      return 'october';

    case 10:
      return 'november';

    case 11:
      return 'december';
  }
}
function weekdayName(weekday) {
  switch (weekday) {
    case 0:
      return 'sunday';

    case 1:
      return 'monday';

    case 2:
      return 'tuesday';

    case 3:
      return 'wednesday';

    case 4:
      return 'thursday';

    case 5:
      return 'friday';

    case 6:
      return 'saturday';
  }
}

var styles$J = {
  "DatePicker": "Polaris-DatePicker",
  "MonthContainer": "Polaris-DatePicker__MonthContainer",
  "Month": "Polaris-DatePicker__Month",
  "Month-current": "Polaris-DatePicker__Month--current",
  "Week": "Polaris-DatePicker__Week",
  "WeekHeadings": "Polaris-DatePicker__WeekHeadings",
  "Day": "Polaris-DatePicker__Day",
  "EmptyDay": "Polaris-DatePicker__EmptyDay",
  "Day-today": "Polaris-DatePicker__Day--today",
  "Day-inRange": "Polaris-DatePicker__Day--inRange",
  "Day-selected": "Polaris-DatePicker__Day--selected",
  "Day-disabled": "Polaris-DatePicker__Day--disabled",
  "Weekday": "Polaris-DatePicker__Weekday",
  "Weekday-current": "Polaris-DatePicker__Weekday--current",
  "Header": "Polaris-DatePicker__Header",
  "Title": "Polaris-DatePicker__Title",
  "newDesignLanguage": "Polaris-DatePicker--newDesignLanguage",
  "Day-firstInRange": "Polaris-DatePicker__Day--firstInRange",
  "Day-hasRange": "Polaris-DatePicker__Day--hasRange",
  "Day-hoverRight": "Polaris-DatePicker__Day--hoverRight",
  "Day-lastInRange": "Polaris-DatePicker__Day--lastInRange"
};

var Day = /*#__PURE__*/memo(function Day(_ref) {
  var day = _ref.day,
      focused = _ref.focused,
      onClick = _ref.onClick,
      _ref$onHover = _ref.onHover,
      onHover = _ref$onHover === void 0 ? noop$5 : _ref$onHover,
      _ref$onFocus = _ref.onFocus,
      _onFocus = _ref$onFocus === void 0 ? noop$5 : _ref$onFocus,
      selected = _ref.selected,
      inRange = _ref.inRange,
      inHoveringRange = _ref.inHoveringRange,
      disabled = _ref.disabled,
      lastDayOfMonth = _ref.lastDayOfMonth,
      isLastSelectedDay = _ref.isLastSelectedDay,
      isFirstSelectedDay = _ref.isFirstSelectedDay,
      isHoveringRight = _ref.isHoveringRight,
      rangeIsDifferent = _ref.rangeIsDifferent;

  var i18n = useI18n();
  var dayNode = useRef(null);
  var hoverValue = lastDayOfMonth || day;
  useEffect(function () {
    if (focused && dayNode.current) {
      dayNode.current.focus();
    }
  }, [focused]);

  if (!day) {
    return /*#__PURE__*/React__default.createElement("div", {
      className: styles$J.EmptyDay,
      onMouseOver: function onMouseOver() {
        return onHover(hoverValue);
      }
    });
  }

  var handleClick = onClick && !disabled ? onClick.bind(null, day) : noop$5;
  var today = isSameDay(new Date(), day);
  var className = classNames(styles$J.Day, selected && styles$J['Day-selected'], disabled && styles$J['Day-disabled'], today && styles$J['Day-today'], (inRange || inHoveringRange) && !disabled && styles$J['Day-inRange'], isLastSelectedDay && styles$J['Day-lastInRange'], isFirstSelectedDay && styles$J['Day-firstInRange'], isHoveringRight && styles$J['Day-hoverRight'], rangeIsDifferent && styles$J['Day-hasRange']);
  var date = day.getDate();
  var tabIndex = (focused || selected || today || date === 1) && !disabled ? 0 : -1;
  var ariaLabel = ["".concat(today ? i18n.translate('Polaris.DatePicker.today') : ''), "".concat(Months[day.getMonth()], " "), "".concat(date, " "), "".concat(day.getFullYear())].join('');
  return /*#__PURE__*/React__default.createElement("button", {
    onFocus: function onFocus() {
      return _onFocus(day);
    },
    type: "button",
    ref: dayNode,
    tabIndex: tabIndex,
    className: className,
    onMouseOver: function onMouseOver() {
      return onHover(hoverValue);
    },
    onClick: handleClick,
    "aria-label": ariaLabel,
    "aria-selected": selected,
    "aria-disabled": disabled,
    role: "gridcell"
  }, date);
});

function noop$5() {}

var Weekday = /*#__PURE__*/memo(function Weekday(_ref) {
  var label = _ref.label,
      title = _ref.title,
      current = _ref.current;
  var className = classNames(styles$J.Weekday, current && styles$J['Weekday-current']);
  return /*#__PURE__*/React__default.createElement("div", {
    "aria-label": Weekdays[label],
    className: className
  }, title);
});

var WEEKDAYS = [Weekdays.Sunday, Weekdays.Monday, Weekdays.Tuesday, Weekdays.Wednesday, Weekdays.Thursday, Weekdays.Friday, Weekdays.Saturday];
function Month(_ref) {
  var focusedDate = _ref.focusedDate,
      selected = _ref.selected,
      hoverDate = _ref.hoverDate,
      disableDatesBefore = _ref.disableDatesBefore,
      disableDatesAfter = _ref.disableDatesAfter,
      allowRange = _ref.allowRange,
      _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? noop$6 : _ref$onChange,
      _ref$onHover = _ref.onHover,
      onHover = _ref$onHover === void 0 ? noop$6 : _ref$onHover,
      _ref$onFocus = _ref.onFocus,
      onFocus = _ref$onFocus === void 0 ? noop$6 : _ref$onFocus,
      month = _ref.month,
      year = _ref.year,
      weekStartsOn = _ref.weekStartsOn;
  var i18n = useI18n();
  var isInHoveringRange = allowRange ? hoveringDateIsInRange : function () {
    return false;
  };
  var now = new Date();
  var current = now.getMonth() === month && now.getFullYear() === year;
  var className = classNames(styles$J.Title, current && styles$J['Month-current']);
  var weeks = useMemo(function () {
    return getWeeksForMonth(month, year, weekStartsOn);
  }, [month, weekStartsOn, year]);
  var weekdays = getWeekdaysOrdered(weekStartsOn).map(function (weekday) {
    return /*#__PURE__*/React__default.createElement(Weekday, {
      key: weekday,
      title: i18n.translate("Polaris.DatePicker.daysAbbreviated.".concat(weekdayName(weekday))),
      current: current && new Date().getDay() === weekday,
      label: weekday
    });
  });
  var handleDateClick = useCallback(function (selectedDate) {
    onChange(getNewRange(allowRange ? selected : undefined, selectedDate));
  }, [allowRange, onChange, selected]);
  var lastDayOfMonth = useMemo(function () {
    return new Date(year, month + 1, 0);
  }, [month, year]);

  function renderWeek(day, dayIndex) {
    if (day == null) {
      return /*#__PURE__*/React__default.createElement(Day, {
        key: dayIndex,
        onHover: onHover,
        lastDayOfMonth: lastDayOfMonth
      });
    }

    var disabled = disableDatesBefore && isDateBefore(day, disableDatesBefore) || disableDatesAfter && isDateAfter(day, disableDatesAfter);
    var isFirstSelectedDay = allowRange && selected && isDateStart(day, selected);
    var isLastSelectedDay = allowRange && selected && (!isSameDate(selected.start, selected.end) && isDateEnd(day, selected) || hoverDate && isSameDate(selected.start, selected.end) && isDateAfter(hoverDate, selected.start) && isSameDay(day, hoverDate) && !isFirstSelectedDay);
    var rangeIsDifferent = !(selected && isSameDate(selected.start, selected.end));
    var isHoveringRight = hoverDate && isDateBefore(day, hoverDate);
    return /*#__PURE__*/React__default.createElement(Day, {
      focused: focusedDate != null && isSameDay(day, focusedDate),
      day: day,
      key: dayIndex,
      onFocus: onFocus,
      onClick: handleDateClick,
      onHover: onHover,
      selected: selected != null && dateIsSelected(day, selected),
      inRange: selected != null && dateIsInRange(day, selected),
      disabled: disabled,
      inHoveringRange: selected != null && hoverDate != null && isInHoveringRange(day, selected, hoverDate),
      isLastSelectedDay: isLastSelectedDay,
      isFirstSelectedDay: isFirstSelectedDay,
      isHoveringRight: isHoveringRight,
      rangeIsDifferent: rangeIsDifferent
    });
  }

  var weeksMarkup = weeks.map(function (week, index) {
    return /*#__PURE__*/React__default.createElement("div", {
      role: "row",
      className: styles$J.Week,
      key: index
    }, week.map(renderWeek));
  });
  return /*#__PURE__*/React__default.createElement("div", {
    role: "grid",
    className: styles$J.Month
  }, /*#__PURE__*/React__default.createElement("div", {
    className: className
  }, i18n.translate("Polaris.DatePicker.months.".concat(monthName(month))), " ", year), /*#__PURE__*/React__default.createElement("div", {
    role: "rowheader",
    className: styles$J.WeekHeadings
  }, weekdays), weeksMarkup);
}

function noop$6() {}

function hoveringDateIsInRange(day, range, hoverEndDate) {
  if (day == null) {
    return false;
  }

  var start = range.start,
      end = range.end;
  return Boolean(isSameDay(start, end) && day > start && day <= hoverEndDate);
}

function getWeekdaysOrdered(weekStartsOn) {
  var weekDays = [].concat(WEEKDAYS);
  var restOfDays = weekDays.splice(weekStartsOn);
  return [].concat(_toConsumableArray(restOfDays), _toConsumableArray(weekDays));
}

function isDateEnd(day, range) {
  if (day == null) return false;
  var end = range.end;
  return Boolean(end && isSameDay(end, day));
}

function isDateStart(day, range) {
  if (day == null) return false;
  var start = range.start;
  return Boolean(start && isSameDay(start, day));
}

function DatePicker(_ref) {
  var id = _ref.id,
      selected = _ref.selected,
      month = _ref.month,
      year = _ref.year,
      allowRange = _ref.allowRange,
      multiMonth = _ref.multiMonth,
      disableDatesBefore = _ref.disableDatesBefore,
      disableDatesAfter = _ref.disableDatesAfter,
      _ref$weekStartsOn = _ref.weekStartsOn,
      weekStartsOn = _ref$weekStartsOn === void 0 ? Weekdays.Sunday : _ref$weekStartsOn,
      onMonthChange = _ref.onMonthChange,
      _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? noop$7 : _ref$onChange;
  var i18n = useI18n();

  var _useFeatures = useFeatures(),
      newDesignLanguage = _useFeatures.newDesignLanguage;

  var _useState = useState(undefined),
      _useState2 = _slicedToArray(_useState, 2),
      hoverDate = _useState2[0],
      setHoverDate = _useState2[1];

  var _useState3 = useState(undefined),
      _useState4 = _slicedToArray(_useState3, 2),
      focusDate = _useState4[0],
      setFocusDate = _useState4[1];

  useEffect(function () {
    setFocusDate(undefined);
  }, [selected]);
  var handleFocus = useCallback(function (date) {
    setFocusDate(date);
  }, []);
  var setFocusDateAndHandleMonthChange = useCallback(function (date) {
    if (onMonthChange) {
      onMonthChange(date.getMonth(), date.getFullYear());
    }

    setHoverDate(date);
    setFocusDate(date);
  }, [onMonthChange]);
  var handleDateSelection = useCallback(function (range) {
    var end = range.end;
    setHoverDate(end);
    setFocusDate(new Date(end));
    onChange(range);
  }, [onChange]);
  var handleMonthChangeClick = useCallback(function (month, year) {
    if (!onMonthChange) {
      return;
    }

    setFocusDate(undefined);
    onMonthChange(month, year);
  }, [onMonthChange]);
  var handleHover = useCallback(function (date) {
    setHoverDate(date);
  }, []);
  var handleKeyUp = useCallback(function (event) {
    var key = event.key;
    var range = deriveRange(selected);
    var focusedDate = focusDate || range && range.start;

    if (focusedDate == null) {
      return;
    }

    if (key === 'ArrowUp') {
      var previousWeek = new Date(focusedDate);
      previousWeek.setDate(focusedDate.getDate() - 7);

      if (!(disableDatesBefore && isDateBefore(previousWeek, disableDatesBefore))) {
        setFocusDateAndHandleMonthChange(previousWeek);
      }
    }

    if (key === 'ArrowDown') {
      var nextWeek = new Date(focusedDate);
      nextWeek.setDate(focusedDate.getDate() + 7);

      if (!(disableDatesAfter && isDateAfter(nextWeek, disableDatesAfter))) {
        setFocusDateAndHandleMonthChange(nextWeek);
      }
    }

    if (key === 'ArrowRight') {
      var tomorrow = new Date(focusedDate);
      tomorrow.setDate(focusedDate.getDate() + 1);

      if (!(disableDatesAfter && isDateAfter(tomorrow, disableDatesAfter))) {
        setFocusDateAndHandleMonthChange(tomorrow);
      }
    }

    if (key === 'ArrowLeft') {
      var yesterday = new Date(focusedDate);
      yesterday.setDate(focusedDate.getDate() - 1);

      if (!(disableDatesBefore && isDateBefore(yesterday, disableDatesBefore))) {
        setFocusDateAndHandleMonthChange(yesterday);
      }
    }
  }, [disableDatesAfter, disableDatesBefore, focusDate, selected, setFocusDateAndHandleMonthChange]);
  var showNextYear = getNextDisplayYear(month, year);
  var showNextMonth = getNextDisplayMonth(month);
  var showNextToNextYear = getNextDisplayYear(showNextMonth, showNextYear);
  var showNextToNextMonth = getNextDisplayMonth(showNextMonth);
  var showPreviousYear = getPreviousDisplayYear(month, year);
  var showPreviousMonth = getPreviousDisplayMonth(month);
  var previousMonthName = i18n.translate("Polaris.DatePicker.months.".concat(monthName(showPreviousMonth)));
  var nextMonth = multiMonth ? i18n.translate("Polaris.DatePicker.months.".concat(monthName(showNextToNextMonth))) : i18n.translate("Polaris.DatePicker.months.".concat(monthName(showNextMonth)));
  var nextYear = multiMonth ? showNextToNextYear : showNextYear;
  var monthIsSelected = useMemo(function () {
    return deriveRange(selected);
  }, [selected]);
  var secondDatePicker = multiMonth ? /*#__PURE__*/React__default.createElement(Month, {
    onFocus: handleFocus,
    focusedDate: focusDate,
    month: showNextMonth,
    year: showNextYear,
    selected: monthIsSelected,
    hoverDate: hoverDate,
    onChange: handleDateSelection,
    onHover: handleHover,
    disableDatesBefore: disableDatesBefore,
    disableDatesAfter: disableDatesAfter,
    allowRange: allowRange,
    weekStartsOn: weekStartsOn
  }) : null;
  var datePickerClassName = classNames(styles$J.DatePicker, newDesignLanguage && styles$J.newDesignLanguage);
  return /*#__PURE__*/React__default.createElement("div", {
    id: id,
    className: datePickerClassName,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles$J.Header
  }, /*#__PURE__*/React__default.createElement(Button, {
    plain: true,
    icon: ArrowLeftMinor,
    accessibilityLabel: i18n.translate('Polaris.DatePicker.previousMonth', {
      previousMonthName,
      showPreviousYear
    }),
    onClick: function onClick() {
      return handleMonthChangeClick(showPreviousMonth, showPreviousYear);
    }
  }), /*#__PURE__*/React__default.createElement(Button, {
    plain: true,
    icon: ArrowRightMinor,
    accessibilityLabel: i18n.translate('Polaris.DatePicker.nextMonth', {
      nextMonth,
      nextYear
    }),
    onClick: function onClick() {
      return handleMonthChangeClick(showNextMonth, showNextYear);
    }
  })), /*#__PURE__*/React__default.createElement("div", {
    className: styles$J.MonthContainer
  }, /*#__PURE__*/React__default.createElement(Month, {
    onFocus: handleFocus,
    focusedDate: focusDate,
    month: month,
    year: year,
    selected: deriveRange(selected),
    hoverDate: hoverDate,
    onChange: handleDateSelection,
    onHover: handleHover,
    disableDatesBefore: disableDatesBefore,
    disableDatesAfter: disableDatesAfter,
    allowRange: allowRange,
    weekStartsOn: weekStartsOn
  }), secondDatePicker));
}

function noop$7() {}

function handleKeyDown(event) {
  var key = event.key;

  if (key === 'ArrowUp' || key === 'ArrowDown' || key === 'ArrowLeft' || key === 'ArrowRight') {
    event.preventDefault();
    event.stopPropagation();
  }
}

function deriveRange(selected) {
  return selected instanceof Date ? {
    start: selected,
    end: selected
  } : selected;
}

var styles$K = {
  "DescriptionList": "Polaris-DescriptionList",
  "Term": "Polaris-DescriptionList__Term",
  "Description": "Polaris-DescriptionList__Description"
};

var getUniqueTermKey = createUniqueIDFactory("Term");
var getUniqueDescriptionKey = createUniqueIDFactory("Description");
function DescriptionList(_ref) {
  var items = _ref.items;
  var terms = items.reduce(function (allTerms, _ref2) {
    var term = _ref2.term,
        description = _ref2.description;
    return [].concat(_toConsumableArray(allTerms), [/*#__PURE__*/React__default.createElement("dt", {
      key: getUniqueTermKey(),
      className: styles$K.Term
    }, term), /*#__PURE__*/React__default.createElement("dd", {
      key: getUniqueDescriptionKey(),
      className: styles$K.Description
    }, description)]);
  }, []);
  return /*#__PURE__*/React__default.createElement("dl", {
    className: styles$K.DescriptionList
  }, terms);
}

var styles$L = {
  "DisplayText": "Polaris-DisplayText",
  "sizeSmall": "Polaris-DisplayText--sizeSmall",
  "sizeMedium": "Polaris-DisplayText--sizeMedium",
  "sizeLarge": "Polaris-DisplayText--sizeLarge",
  "sizeExtraLarge": "Polaris-DisplayText--sizeExtraLarge"
};

function DisplayText(_ref) {
  var _ref$element = _ref.element,
      Element = _ref$element === void 0 ? 'p' : _ref$element,
      children = _ref.children,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'medium' : _ref$size;
  var className = classNames(styles$L.DisplayText, size && styles$L[variationName('size', size)]);
  return /*#__PURE__*/React__default.createElement(Element, {
    className: className
  }, children);
}

function capitalize() {
  var word = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var wordLower = word.toLowerCase();
  return wordLower.charAt(0).toUpperCase() + wordLower.slice(1);
}

/**
 * Similarly to the life-cycle method componentDidMount, useComponentDidMount
 * will be invoked after the component has mounted, and only the initial mount.
 * @param callback Defines a callback to invoke once the component has
 * initially mounted.
 * @example
 * function Playground({active}) {
 *  useComponentDidMount(() => {
 *    if (active) {
 *      console.warning(`Component has mounted.`);
 *    }
 *  });
 *
 *  return null;
 * }
 */

function useComponentDidMount(callback) {
  var isAfterInitialMount = useIsAfterInitialMount();
  var hasInvokedLifeCycle = useRef(false);

  if (isAfterInitialMount && !hasInvokedLifeCycle.current) {
    hasInvokedLifeCycle.current = true;
    return callback();
  }
}

var fileUpload = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjggMTI4Ij48cGF0aCBkPSJNNjkuODEgMTI0LjQzYTEuMzkgMS4zOSAwIDAxLS41Ny0uMTIgMS40MyAxLjQzIDAgMDEtLjQ5LS4zMiAxLjUyIDEuNTIgMCAwMS0uNDQtMS4wNiAxLjUgMS41IDAgMDEuNDQtMS4wNiAxLjUzIDEuNTMgMCAwMTEuMzUtLjQyIDEuMzEgMS4zMSAwIDAxLjI4LjA5IDEuMDggMS4wOCAwIDAxLjI2LjE0IDEuMDYgMS4wNiAwIDAxLjIzLjE5IDEuMzcgMS4zNyAwIDAxLjE5LjIyIDEuMjYgMS4yNiAwIDAxLjEzLjI2IDEuNDkgMS40OSAwIDAxLS4zMiAxLjY0IDEuMzQgMS4zNCAwIDAxLS40OS4zMiAxLjM5IDEuMzkgMCAwMS0uNTcuMTJ6bS05LjcxLTEuNWExLjUgMS41IDAgMDExLjUtMS41IDEuNSAxLjUgMCAwMTEuNSAxLjUgMS41MSAxLjUxIDAgMDEtMS41IDEuNSAxLjUgMS41IDAgMDEtMS41LTEuNXptLTguMjIgMGExLjUgMS41IDAgMDExLjUtMS41IDEuNSAxLjUgMCAwMTEuNSAxLjUgMS41IDEuNSAwIDAxLTEuNSAxLjUgMS41IDEuNSAwIDAxLTEuNS0xLjV6bS04LjIyIDBhMS41IDEuNSAwIDAxMS41LTEuNSAxLjUxIDEuNTEgMCAwMTEuNTEgMS41IDEuNTEgMS41MSAwIDAxLTEuNTEgMS41IDEuNTEgMS41MSAwIDAxLTEuNS0xLjV6bS04LjIxIDBhMS41IDEuNSAwIDAxMS41LTEuNSAxLjUgMS41IDAgMDExLjUgMS41IDEuNSAxLjUgMCAwMS0xLjUgMS41IDEuNSAxLjUgMCAwMS0xLjUtMS41em0tOC4yMiAwYTEuNSAxLjUgMCAwMTEuNS0xLjUgMS41MSAxLjUxIDAgMDExLjUxIDEuNSAxLjUxIDEuNTEgMCAwMS0xLjUxIDEuNSAxLjUxIDEuNTEgMCAwMS0xLjUtMS41em0tOC4yMSAwYTEuNSAxLjUgMCAwMTEuNS0xLjUgMS41IDEuNSAwIDAxMS41IDEuNSAxLjUgMS41IDAgMDEtMS41IDEuNSAxLjUgMS41IDAgMDEtMS41Mi0xLjV6bS04LjIyIDBhMS41IDEuNSAwIDAxMS41LTEuNSAxLjUxIDEuNTEgMCAwMTEuNTEgMS41IDEuNTEgMS41MSAwIDAxLTEuNTEgMS41IDEuNSAxLjUgMCAwMS0xLjUtMS41em0tNi43MSAxLjVBMS41IDEuNSAwIDAxMyAxMjRhMS40NyAxLjQ3IDAgMDEtLjQ0LTEuMDYgMS41MyAxLjUzIDAgMDEwLS4zYzAtLjA5IDAtLjE5LjA4LS4yOGEyLjE1IDIuMTUgMCAwMS4xNC0uMjYgMS4zNyAxLjM3IDAgMDEuMTktLjIyIDEuMDYgMS4wNiAwIDAxLjIzLS4xOSAxLjA4IDEuMDggMCAwMS4yNi0uMTQgMS4zMSAxLjMxIDAgMDEuMjgtLjA5IDEuODggMS44OCAwIDAxLjU4IDAgMS4zMSAxLjMxIDAgMDEuMjguMDkgMS4zIDEuMyAwIDAxLjI2LjE0IDEuMzcgMS4zNyAwIDAxLjIzLjE5IDEuMzcgMS4zNyAwIDAxLjE5LjIyIDEuMjYgMS4yNiAwIDAxLjEzLjI2IDEuNDEgMS40MSAwIDAxLjEyLjU4IDEuNTYgMS41NiAwIDAxLS4xMS41NyAxLjYzIDEuNjMgMCAwMS0uMzMuNDkgMS41IDEuNSAwIDAxLTEgLjQzem0tMS41LTkuNWExLjUgMS41IDAgMDExLjUtMS41IDEuNSAxLjUgMCAwMTEuNSAxLjUgMS41IDEuNSAwIDAxLTEuNSAxLjUgMS41IDEuNSAwIDAxLTEuNS0xLjV6bTAtOGExLjUgMS41IDAgMDExLjUtMS41IDEuNSAxLjUgMCAwMTEuNSAxLjUgMS41IDEuNSAwIDAxLTEuNSAxLjUgMS41IDEuNSAwIDAxLTEuNS0xLjV6bTAtOGExLjUgMS41IDAgMDExLjUtMS41IDEuNSAxLjUgMCAwMTEuNSAxLjUgMS41IDEuNSAwIDAxLTEuNSAxLjUgMS41IDEuNSAwIDAxLTEuNS0xLjQ5em0wLThhMS41IDEuNSAwIDAxMS41LTEuNSAxLjUgMS41IDAgMDExLjUgMS41IDEuNSAxLjUgMCAwMS0xLjUgMS41IDEuNSAxLjUgMCAwMS0xLjUtMS40OXptMC04YTEuNSAxLjUgMCAwMTEuNS0xLjVBMS41IDEuNSAwIDAxNS41OSA4M2ExLjUgMS41IDAgMDEtMS41IDEuNSAxLjUgMS41IDAgMDEtMS41LTEuNXptMC04YTEuNSAxLjUgMCAwMTEuNS0xLjVBMS41IDEuNSAwIDAxNS41OSA3NWExLjUgMS41IDAgMDEtMS41IDEuNSAxLjUgMS41IDAgMDEtMS41LTEuNXptMC04YTEuNSAxLjUgMCAwMTEuNS0xLjVBMS41IDEuNSAwIDAxNS41OSA2N2ExLjUxIDEuNTEgMCAwMS0xLjUgMS41MUExLjUxIDEuNTEgMCAwMTIuNTkgNjd6bTAtOGExLjUgMS41IDAgMDExLjUtMS41QTEuNSAxLjUgMCAwMTUuNTkgNTlhMS41IDEuNSAwIDAxLTEuNSAxLjUgMS41IDEuNSAwIDAxLTEuNS0xLjV6bTAtOGExLjUxIDEuNTEgMCAwMTEuNS0xLjUxQTEuNTEgMS41MSAwIDAxNS41OSA1MWExLjUgMS41IDAgMDEtMS41IDEuNSAxLjUgMS41IDAgMDEtMS41LTEuNXptMS41LTYuNDZBMS41IDEuNSAwIDAxMi41OSA0M2ExLjM2IDEuMzYgMCAwMTAtLjI5IDIuMjkgMi4yOSAwIDAxLjA4LS4yOCAyLjE1IDIuMTUgMCAwMS4xNC0uMjYgMS41NyAxLjU3IDAgMDEuNDItLjQyIDIgMiAwIDAxLjI1LS4xNGwuMjktLjA4YTEuNSAxLjUgMCAwMTEuMzUuNDEgMS40NSAxLjQ1IDAgMDEuMTkuMjMgMS4yNiAxLjI2IDAgMDEuMTMuMjYgMS4zMSAxLjMxIDAgMDEuMDkuMjggMS4zNiAxLjM2IDAgMDEwIC4yOSAxLjUyIDEuNTIgMCAwMS0uMzggMSAyLjExIDIuMTEgMCAwMS0uMjMuMTkgMS4yNiAxLjI2IDAgMDEtLjI2LjEzIDEuMzEgMS4zMSAwIDAxLS4yOC4wOSAxLjQzIDEuNDMgMCAwMS0uMjkuMDZ6TTYwLjEgNDNhMS41IDEuNSAwIDAxMS41LTEuNSAxLjUgMS41IDAgMDExLjUgMS41IDEuNSAxLjUgMCAwMS0xLjUgMS41IDEuNSAxLjUgMCAwMS0xLjUtMS41em0tOC4yMiAwYTEuNSAxLjUgMCAwMTEuNS0xLjUgMS41IDEuNSAwIDAxMS41IDEuNSAxLjUgMS41IDAgMDEtMS41IDEuNSAxLjUgMS41IDAgMDEtMS41LTEuNXptLTguMjIgMGExLjUgMS41IDAgMDExLjUtMS41IDEuNTEgMS41MSAwIDAxMS41MSAxLjUgMS41MSAxLjUxIDAgMDEtMS41MSAxLjUgMS41IDEuNSAwIDAxLTEuNS0xLjV6bS04LjIxIDBhMS41IDEuNSAwIDAxMS41LTEuNSAxLjUgMS41IDAgMDExLjUgMS41IDEuNSAxLjUgMCAwMS0xLjUgMS41IDEuNSAxLjUgMCAwMS0xLjUtMS41em0tOC4yMiAwYTEuNSAxLjUgMCAwMTEuNS0xLjUgMS41IDEuNSAwIDAxMS41IDEuNSAxLjUgMS41IDAgMDEtMS41IDEuNSAxLjUgMS41IDAgMDEtMS41LTEuNXpNMTkgNDNhMS41IDEuNSAwIDAxMS41LTEuNUExLjUgMS41IDAgMDEyMiA0M2ExLjUgMS41IDAgMDEtMS41IDEuNUExLjUgMS41IDAgMDExOSA0M3ptLTguMiAwYTEuNSAxLjUgMCAwMTEuNS0xLjUgMS41IDEuNSAwIDAxMS41IDEuNSAxLjUgMS41IDAgMDEtMS41IDEuNSAxLjUgMS41IDAgMDEtMS41LTEuNXptNTkuMDEgMS40N2ExLjUgMS41IDAgMDEtMS4wNi0uNDcgMS41MiAxLjUyIDAgMDEtLjQ0LTEgMS41IDEuNSAwIDAxMS43OS0xLjVsLjI4LjA4LjI2LjE0YTIuMTEgMi4xMSAwIDAxLjIzLjE5IDEuNSAxLjUgMCAwMS40NCAxLjA5IDEuNTIgMS41MiAwIDAxLS40NCAxIDIuMTEgMi4xMSAwIDAxLS4yMy4xOSAxLjI2IDEuMjYgMCAwMS0uMjYuMTMgMS4zMSAxLjMxIDAgMDEtLjI4LjA5IDEuMzYgMS4zNiAwIDAxLS4yOS4wNnptLTEuNSA3MC40NmExLjUgMS41IDAgMDExLjUtMS41IDEuNSAxLjUgMCAwMTEuNSAxLjUgMS41IDEuNSAwIDAxLTEuNSAxLjUgMS41IDEuNSAwIDAxLTEuNS0xLjV6bTAtOGExLjUgMS41IDAgMDExLjUtMS41IDEuNSAxLjUgMCAwMTEuNSAxLjUgMS41IDEuNSAwIDAxLTEuNSAxLjUgMS41IDEuNSAwIDAxLTEuNS0xLjV6bTAtOGExLjUgMS41IDAgMDExLjUtMS41IDEuNSAxLjUgMCAwMTEuNSAxLjUgMS41IDEuNSAwIDAxLTEuNSAxLjUgMS41IDEuNSAwIDAxLTEuNS0xLjQ5em0wLThhMS41IDEuNSAwIDAxMS41LTEuNSAxLjUgMS41IDAgMDExLjUgMS41IDEuNSAxLjUgMCAwMS0xLjUgMS41IDEuNSAxLjUgMCAwMS0xLjUtMS40OXptMC04YTEuNSAxLjUgMCAwMTEuNS0xLjUgMS41IDEuNSAwIDAxMS41IDEuNSAxLjUgMS41IDAgMDEtMS41IDEuNSAxLjUgMS41IDAgMDEtMS41LTEuNDN6bTAtOGExLjUgMS41IDAgMDExLjUtMS41IDEuNSAxLjUgMCAwMTEuNSAxLjUgMS41IDEuNSAwIDAxLTEuNSAxLjUgMS41IDEuNSAwIDAxLTEuNS0xLjQzem0wLThhMS41IDEuNSAwIDAxMS41LTEuNSAxLjUgMS41IDAgMDExLjUgMS41IDEuNSAxLjUgMCAwMS0xLjUgMS40OSAxLjUgMS41IDAgMDEtMS41LTEuNDJ6bTAtOGExLjUgMS41IDAgMDExLjUtMS41IDEuNSAxLjUgMCAwMTEuNSAxLjUgMS41IDEuNSAwIDAxLTEuNSAxLjUgMS41IDEuNSAwIDAxLTEuNS0xLjQzem0wLThhMS41IDEuNSAwIDAxMS41LTEuNSAxLjUgMS41IDAgMDExLjUgMS41IDEuNSAxLjUgMCAwMS0xLjUgMS41IDEuNSAxLjUgMCAwMS0xLjUtMS40M3oiIGZpbGw9IiNkZWU0ZjUiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMjYuNjcgMy41N2g3OS40MXY5Ni42MUgyNi42N3oiLz48cGF0aCBkPSJNMTA2LjkyIDEwMUg5MS43OGMtMS42NCAwLTMuMjQuMTUtNC45LjE4cy0zLjM5LS4wNS01LjExLS4xM2MtLjg1IDAtMS43LS4wNi0yLjU0IDBzLTEuNjcgMC0yLjQ5IDBsLTkuOTEuMjljLTMuMzIuMDgtNi42Mi4yNC0xMCAuMjZzLTYuNzgtLjI3LTEwLjExLS4xOWMtNi42My40Mi0xMy40LjE2LTIwLjA3IDBoLS4wOGExLjEgMS4xIDAgMDEtMS4wNy0xLjEzYy4wOC0yIC4wNi00IC4wOC02czAtNCAwLTYtLjE5LTQtLjIzLTYgLjE1LTQgLjI4LTZhMjEuNiAyMS42IDAgMDAwLTMgMjcuODYgMjcuODYgMCAwMS0uMTQtM3YtNmwuMTMtMTIuMDh2LTEybC4zMy02YTUzIDUzIDAgMDAtLjEzLTZjLS4yMy00IC4xMi04IC4yNi0xMi4wOGwuMDYtM3YtM2wtLjA4LTZBLjU1LjU1IDAgMDEyNi42NCAzYzMuMy0uMSA2LjYxIDAgOS45MiAwczYuNjIgMCA5LjkzLjA2YzEuNjUgMCAzLjMxLjA2IDUgLjA3SDU0bDIuNDgtLjA4IDkuOTMtLjMzQzczIDIuNTQgNzkuNiAyLjQgODYuMjIgMi40M2MzLjMxLjA3IDYuNjIuMyA5LjkzLjI0bDkuOTItLjI2YTEuMTMgMS4xMyAwIDAxMS4xNiAxLjF2LjA2bC4xOCA2LjFjMCAyLS4xMSA0LjA2LS4xNiA2LjA4IDAgNC4wNi4yMiA4LjE2LjEzIDEyLjIyIDAgMi0uMjYgNC0uMzMgNi0uMDYgMSAwIDIgMCAzdjYuMDZsLS4xMiAzYTQ2Ljc1IDQ2Ljc1IDAgMDAuMDkgNi4xM2MuMjEgNC4xNi0uMjEgOC0uMiAxMi4wOC0uMTcgNCAuMTMgOC4yIDAgMTIuMjEgMCAyLS4xNSA0LS4xNiA2cy4wNyA0LjExLjEzIDYuMTlsLjA4IDMuMTJ2My4wNmMuMDYgMi4xOC4xMyA0LjE4LjA1IDYuMTh6bS0xLjctMS42OVY4Ny4zN2MwLTIgLjA4LTMuOTMuMDYtNS45M3MtLjItNC4xMy0uMjYtNi4xNWMtLjE1LTQuMDguMjItNy44MyAwLTExLjkzLS4wNi0yLS4xNi00LjA2LS4yNy02LjFhNDMuODkgNDMuODkgMCAwMTAtNiAzMS4xNCAzMS4xNCAwIDAwLjE2LTUuOSA0NC43NSA0NC43NSAwIDAxLS4wOS02IDU4LjQ1IDU4LjQ1IDAgMDAuMTgtNS44NmMwLTItLjI3LTQuMDUtLjI4LTZzMC00IC4xMS01Ljk1LjE1LTQgLjE0LTYtLjE5LTQtLjE2LTZsLjE0LTYgMS4xMSAxLjExYy0zLjMxLS4wNy02LjYxLS4xOS05LjkyLS4xOHMtNi42Mi4zLTkuOTMuNDNDNzkuNiA1LjA2IDczIDUgNjYuMzcgNC44M2MtMS42NiAwLTMuMzEtLjEtNS0uMTdsLTUtLjI5Yy0zLjMxLS4xOC02LjYxIDAtOS45Mi4xMy02LjYyLjIyLTEzLjI0LjM5LTE5Ljg1LjI3bDEuMi0xLjItLjI4IDZ2M2wuMSAzYy4yMiA0IC44MyA4LjA2LjM3IDEyLjA4LS4xMSAxLS4yNyAyLS4zNCAzczAgMiAwIDNjLjExIDIgLjQxIDQgLjUgNnYzbC0uMDcgMy0uMTQgNkwyOCA2NGwtLjA2IDZhMjIgMjIgMCAwMS0uMiAzIDIwLjE4IDIwLjE4IDAgMDAtLjA4IDNjLjA5IDIgLjI4IDQgLjE5IDZsLS4yNyA2Yy0uMDYgNC0uMTQgOC4wNS0uMTMgMTIuMDhsLS43NC0uNzVoOS44NWMzLjI4IDAgNi41OC4wOCA5Ljg2LjA2czYuNTEtLjI1IDkuNzYtLjI5IDYuNTcuMSA5Ljg3LjE0bDkuOTEuMTloNC44OWMxLjU5IDAgMy4xOC0uMTQgNC44Mi0uMTRzMy4zNC4xMSA1IC4xNGw0Ljg2LS4wNmMzLjE3LS4wNSA2LjQ3LS4wMiA5LjY5LS4wNHoiIGZpbGw9IiNmZmYiLz48ZyBvcGFjaXR5PSIuNSIgZmlsbD0iI2RlZTRmNSI+PHBhdGggZD0iTTI2LjY3IDMuNTdoNzkuNDF2OTYuNjFIMjYuNjd6Ii8+PHBhdGggZD0iTTEwNi45MiAxMDFIOTEuNzhjLTEuNjQgMC0zLjI0LjE1LTQuOS4xOHMtMy4zOS0uMDUtNS4xMS0uMTNjLS44NSAwLTEuNy0uMDYtMi41NCAwcy0xLjY3IDAtMi40OSAwbC05LjkxLjI5Yy0zLjMyLjA4LTYuNjIuMjQtMTAgLjI2cy02Ljc4LS4yNy0xMC4xMS0uMTljLTYuNjMuNDItMTMuNC4xNi0yMC4wNyAwaC0uMDhhMS4xIDEuMSAwIDAxLTEuMDctMS4xM2MuMDgtMiAuMDYtNCAuMDgtNnMwLTQgMC02LS4xOS00LS4yMy02IC4xNS00IC4yOC02YTIxLjYgMjEuNiAwIDAwMC0zIDI3Ljg2IDI3Ljg2IDAgMDEtLjE0LTN2LTZsLjEzLTEyLjA4di0xMmwuMzMtNmE1MyA1MyAwIDAwLS4xMy02Yy0uMjMtNCAuMTItOCAuMjYtMTIuMDhsLjA2LTN2LTNsLS4wOC02QS41NS41NSAwIDAxMjYuNjQgM2MzLjMtLjEgNi42MSAwIDkuOTIgMHM2LjYyIDAgOS45My4wNmMxLjY1IDAgMy4zMS4wNiA1IC4wN0g1NGwyLjQ4LS4wOCA5LjkzLS4zM0M3MyAyLjU0IDc5LjYgMi40IDg2LjIyIDIuNDNjMy4zMS4wNyA2LjYyLjMgOS45My4yNGw5LjkyLS4yNmExLjEzIDEuMTMgMCAwMTEuMTYgMS4xdi4wNmwuMTggNi4xYzAgMi0uMTEgNC4wNi0uMTYgNi4wOCAwIDQuMDYuMjIgOC4xNi4xMyAxMi4yMiAwIDItLjI2IDQtLjMzIDYtLjA2IDEgMCAyIDAgM3Y2LjA2bC0uMTIgM2E0Ni43NSA0Ni43NSAwIDAwLjA5IDYuMTNjLjIxIDQuMTYtLjIxIDgtLjIgMTIuMDgtLjE3IDQgLjEzIDguMiAwIDEyLjIxIDAgMi0uMTUgNC0uMTYgNnMuMDcgNC4xMS4xMyA2LjE5bC4wOCAzLjEydjMuMDZjLjA2IDIuMTguMTMgNC4xOC4wNSA2LjE4em0tMS43LTEuNjlWODcuMzdjMC0yIC4wOC0zLjkzLjA2LTUuOTNzLS4yLTQuMTMtLjI2LTYuMTVjLS4xNS00LjA4LjIyLTcuODMgMC0xMS45My0uMDYtMi0uMTYtNC4wNi0uMjctNi4xYTQzLjg5IDQzLjg5IDAgMDEwLTYgMzEuMTQgMzEuMTQgMCAwMC4xNi01LjkgNDQuNzUgNDQuNzUgMCAwMS0uMDktNiA1OC40NSA1OC40NSAwIDAwLjE4LTUuODZjMC0yLS4yNy00LjA1LS4yOC02czAtNCAuMTEtNS45NS4xNS00IC4xNC02LS4xOS00LS4xNi02bC4xNC02IDEuMTEgMS4xMWMtMy4zMS0uMDctNi42MS0uMTktOS45Mi0uMThzLTYuNjIuMy05LjkzLjQzQzc5LjYgNS4wNiA3MyA1IDY2LjM3IDQuODNjLTEuNjYgMC0zLjMxLS4xLTUtLjE3bC01LS4yOWMtMy4zMS0uMTgtNi42MSAwLTkuOTIuMTMtNi42Mi4yMi0xMy4yNC4zOS0xOS44NS4yN2wxLjItMS4yLS4yOCA2djNsLjEgM2MuMjIgNCAuODMgOC4wNi4zNyAxMi4wOC0uMTEgMS0uMjcgMi0uMzQgM3MwIDIgMCAzYy4xMSAyIC40MSA0IC41IDZ2M2wtLjA3IDMtLjE0IDZMMjggNjRsLS4wNiA2YTIyIDIyIDAgMDEtLjIgMyAyMC4xOCAyMC4xOCAwIDAwLS4wOCAzYy4wOSAyIC4yOCA0IC4xOSA2bC0uMjcgNmMtLjA2IDQtLjE0IDguMDUtLjEzIDEyLjA4bC0uNzQtLjc1aDkuODVjMy4yOCAwIDYuNTguMDggOS44Ni4wNnM2LjUxLS4yNSA5Ljc2LS4yOSA2LjU3LjEgOS44Ny4xNGw5LjkxLjE5aDQuODljMS41OSAwIDMuMTgtLjE0IDQuODItLjE0czMuMzQuMTEgNSAuMTRsNC44Ni0uMDZjMy4xNy0uMDUgNi40Ny0uMDIgOS42OS0uMDR6Ii8+PC9nPjxyZWN0IHg9IjM4LjgiIHk9IjE2LjE3IiB3aWR0aD0iMjEuOTYiIGhlaWdodD0iMjMuMzMiIHJ4PSIxMC43MSIgcnk9IjEwLjcxIiBmaWxsPSIjZGVlNGY1Ii8+PHBhdGggZD0iTTUwLjA1IDQwLjI5YTExLjc4IDExLjc4IDAgMDEtNC43LS44MmMtLjcyLS4zNS0xLjQzLS43Mi0yLjE1LTEuMDktLjM1LS4xOS0uNjgtLjQzLTEtLjY0cy0uNjUtLjUtMS0uNzZhMTEuNDUgMTEuNDUgMCAwMS0zLjI3LTguODdMMzggMjdjMC0uMzkgMC0uOC4wNy0xLjJzLjE0LS44LjIyLTEuMmwuMzQtMS4xNmExMC42OCAxMC42OCAwIDAxMi41MS00IDE1LjUxIDE1LjUxIDAgMDExLjc2LTEuNTggMTAuMTggMTAuMTggMCAwMTIuMDYtMS4xNiAxMy42MyAxMy42MyAwIDAxNC41OC0uOTUgMTEuODUgMTEuODUgMCAwMTQuNTguODEgMTIuMjkgMTIuMjkgMCAwMTQgMi40MSAxMS43NSAxMS43NSAwIDAxMy40NiA4LjY1IDEyLjYxIDEyLjYxIDAgMDEtMyA4LjgyIDcuNTcgNy41NyAwIDAxLS44OS44MSA4LjQ2IDguNDYgMCAwMS0xIC43MiAxMi40MiAxMi40MiAwIDAxLTIgMS4yMyAxMS4xNCAxMS4xNCAwIDAxLTQuNjQgMS4wOXptMC0xLjU4YTkuNjkgOS42OSAwIDAwNC0uOTIgOS4zMiA5LjMyIDAgMDAxLjc3LTEuMDYgNS4xMiA1LjEyIDAgMDAuNzYtLjcxIDcuMDcgNy4wNyAwIDAwLjY3LS43OCAxMS4xNSAxMS4xNSAwIDAwMi4wOS0zLjQ5bC4zLTEgLjE2LTEgLjA3LTF2LTEuMThjMC0uMzguMDUtLjc2IDAtMS4xYTYuMTUgNi4xNSAwIDAwMC0xIDYgNiAwIDAwLS41My0yQTEwLjE5IDEwLjE5IDAgMDA1Ny4wNSAyMGMtLjUxLS40Ny0xLjA3LS44Ni0xLjU3LTEuMzZhNC40NCA0LjQ0IDAgMDAtMS44Mi0xIDYuMDcgNi4wNyAwIDAwLTEtLjI1IDYuMTQgNi4xNCAwIDAwLTEtLjEyYy0uNzEtLjA4LTEuMzMgMC0yLjExIDBoLTFhOC42MSA4LjYxIDAgMDAtMSAuMTIgOS4zOCA5LjM4IDAgMDAtMiAuNjggMTEuMzIgMTEuMzIgMCAwMC0xLjc5IDEgNSA1IDAgMDAtLjgzLjYybC0uMzkuMzUtLjMyLjRhMjUuMzUgMjUuMzUgMCAwMC0yLjExIDMuNTUgNi40OCA2LjQ4IDAgMDAtLjMyIDFjLS4wNS4zNC0uMTEuNjktLjE1IDFMMzkuNDYgMjdsLS4xIDEuMTNhOS4zOCA5LjM4IDAgMDAzIDcuNzFjLjI0LjI1LjUuNDkuNzUuNzRzLjU0LjQ1LjgzLjY2YTUuNTkgNS41OSAwIDAwMS45LjkyIDExLjIzIDExLjIzIDAgMDA0LjIxLjU1eiIgZmlsbD0iI2RlZTRmNSIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik00OS43NyAyNy44NGgyOC42OHYzMC40N0g0OS43N3oiLz48cGF0aCBkPSJNNzkgNTguODdjLTIuNDMuMDUtNS0uMTMtNy4zMS4wN2E0MS40MiA0MS40MiAwIDAwLTcuMjYuMTggMjQuODcgMjQuODcgMCAwMS0zLjY3IDAgMTYgMTYgMCAwMC0zLjY3LjA1Yy0yLjQzLjE2LTQuOTItLjItNy4zNC0uMjFhLjY3LjY3IDAgMDEtLjY3LS42OHYtMS45MWMwLS42NC0uMS0xLjI3LS4xNS0xLjktLjE1LTEuMjcuNDQtMi41NC4wOC0zLjgxIDAtMi41NC4xLTUuMDguMS03LjYyYTMyLjMxIDMyLjMxIDAgMDEuMDktMy44MSAxNS4yNiAxNS4yNiAwIDAwLjE4LTEuOWMwLS42NC0uMTMtMS4yNy0uMTYtMS45MSAwLTEuMjYuMTUtMi41My4yMy0zLjhzMC0yLjU0LS4wNS0zLjgxYS4zNi4zNiAwIDAxLjM0LS4zN2MxLjItLjA2IDIuMzkgMCAzLjU5IDBzMi4zOSAwIDMuNTguMDZjMi4zOS4xNiA0Ljc4LS4yMyA3LjE3LS4yOWE4Ni4xIDg2LjEgMCAwMTMuNTktLjEzIDI1LjE5IDI1LjE5IDAgMDEzLjU4LjA5IDYzLjYyIDYzLjYyIDAgMDA3LjItLjE3Ljg3Ljg3IDAgMDEuODkuODN2LjA2YTE4IDE4IDAgMDEtLjEgMS45NCAxOCAxOCAwIDAwMCAxLjk0IDE1LjYxIDE1LjYxIDAgMDEtLjEyIDMuODcgMzguMyAzOC4zIDAgMDAtLjA2IDMuODcgMTMuMiAxMy4yIDAgMDAtLjExIDEuOSAxOS42NCAxOS42NCAwIDAxLjE1IDJjLS4wNiAxLjI3LS4yMiAyLjQ5LS4yMiAzLjc3cy4xNiAyLjY5IDAgMy45MWEyMS4wOCAyMS4wOCAwIDAwMCAzLjg5djJjMCAuNjYuMTIgMS4yNi4xMiAxLjg5em0tMS4xMy0xLjEzdi0zLjcxYTE4LjY0IDE4LjY0IDAgMDAtLjA4LTMuNzggMzUuNSAzNS41IDAgMDEwLTMuNzJjMC0xLjI1LS4yMy0yLjU5LS4yOC0zLjg0YTguNjcgOC42NyAwIDAxLjIxLTEuNzggMTEuMjggMTEuMjggMCAwMC0uMTItMS45IDguNTQgOC41NCAwIDAxLjEtMS44MyA3LjgyIDcuODIgMCAwMDAtMS44NyAxNC4yMSAxNC4yMSAwIDAxMC0zLjc0IDE0LjM5IDE0LjM5IDAgMDAuMDYtMS44NmMwLS42My0uMTEtMS4yNS0uMDktMS44N2wuODMuODNjLTIuMzkgMC00Ljc4LS40LTcuMTctLjA4YTIxLjQ5IDIxLjQ5IDAgMDEtMy41OC4xOUg2NS45bC0xLjc5LS4wN2MtMi4zOSAwLTQuNzgtLjY0LTcuMTctLjI5YTY4LjY5IDY4LjY5IDAgMDEtNy4xNy4yMmwuOC0uOGEyMi4wOSAyMi4wOSAwIDAwLS4xNiAzLjgxIDIyLjMzIDIyLjMzIDAgMDEuMzcgMy44IDE2IDE2IDAgMDAtLjM1IDEuOTEgOC44NiA4Ljg2IDAgMDAuMjYgMS45IDE2LjE5IDE2LjE5IDAgMDEwIDMuODFjLS4xMSAyLjU0IDAgNS4wOC0uMTcgNy42Mi0uNDIgMS4yNy4xMyAyLjU0IDAgMy44MWwtLjE4IDEuOS0uMDUgMS45MS0uNTMtLjUzYzIuMzcuMDkgNC43MSAwIDcuMDggMGEyMi41NyAyMi41NyAwIDAwMy41LS4xIDI1LjQ4IDI1LjQ4IDAgMDEzLjUgMCA0NSA0NSAwIDAwNy4wNS4wNmMyLjQ3LjE3IDQuNjYtLjAzIDcgMHoiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNODMuNzEgNDEuMTlMNzQgNTkuMjhsMjEuNDYtLjY3LTExLjE1LTE3LjQ1YS4zNC4zNCAwIDAwLS42LjAzeiIgZmlsbD0iI2RlZTRmNSIvPjxwYXRoIGQ9Ik04NC40IDQxLjU2Yy0uODIgMS41LTEuNTkgMy0yLjQ5IDQuNDhsLTEgMi4zN2MtLjM1Ljc4LS43NSAxLjUzLTEuMTcgMi4yOGwtMi41MiA0LjQ3Yy0uODEgMS41LTEuNjcgMy0yLjU0IDQuNDVsLS42NS0xYzEuNzkgMCAzLjU4LjE0IDUuMzcgMHMzLjU4IDAgNS4zNy0uMDkgMy41NyAwIDUuMzYtLjEyYTUzLjUxIDUzLjUxIDAgMDE1LjM2LS40M2wtLjU1IDEtMS40OS0yLjIzYy0uNTItLjc0LTEtMS40Ny0xLjUyLTIuMjJDOTEgNTMgOTAuMTMgNTEuNDMgODkuMSA1MGMtLjQ4LS43Ni0xLTEuNDgtMS40NS0yLjI2cy0uODUtMS41OC0xLjM2LTIuMzEtMS0xLjQ5LTEuNTEtMi4yMkw4NCA0Mi4wOGwtLjMxLS40NmEuNDQuNDQgMCAwMC43MS0uMDZ6bS0xLjQtLjc0YTEuMTMgMS4xMyAwIDAxLjg1LS42IDEuMTUgMS4xNSAwIDAxMSAuMzYgMiAyIDAgMDEuMTcuMjRsLjA5LjE0LjE5LjI4LjczIDEuMTIgMS40OCAyLjI0Yy40Ny43NiAxLjA2IDEuNDQgMS41OCAyLjE3cy45NCAxLjUyIDEuNDEgMi4yOGMuODkgMS41NiAxLjg2IDMuMDYgMi43OCA0LjYuNDQuNzguODUgMS41OCAxLjM0IDIuMzNsMS41MyAyLjJhLjc4Ljc4IDAgMDEtLjIgMS4wOC43NS43NSAwIDAxLS4zOC4xM2gtLjA2YTI0LjcyIDI0LjcyIDAgMDEtNS4zNy4wN2MtMS43OS4wNy0zLjU3LjUyLTUuMzYuNDRhMTcuMjYgMTcuMjYgMCAwMC0yLjY5IDBjLS44OS4wNi0xLjc4LjA3LTIuNjguMDgtMS43OS0uMTUtMy41Ny40MS01LjM2LjE0aC0uMjVhLjguOCAwIDAxLS42Ny0uOTIuNjkuNjkgMCAwMS4xMi0uMzJsLjc1LTEuMDkuNi0xLjEzYy40NS0uNzMuOTMtMS40NCAxLjQtMi4xNS44OS0xLjQ3IDEuNi0zIDIuMzQtNC41Ny4zNi0uNzguNzItMS41NSAxLjE0LTIuM2wxLjMtMi4yMWMuNjYtMS41OCAxLjQ4LTMuMDggMi4yMi00LjYxem0xNC43NiAzNi42OUg4NmExIDEgMCAwMTAtMmgxMS43NmExIDEgMCAwMTAgMnptLTIwLjE2IDBIMzVhMSAxIDAgMDEwLTJoNDIuNmExIDEgMCAwMTAgMnpNOTggODguMTRINjkuMzFhMSAxIDAgMDEwLTJIOThhMSAxIDAgMDEwIDJ6bS0zNy4yNSAwSDM1YTEgMSAwIDAxMC0yaDI1Ljc1YTEgMSAwIDAxMCAyeiIgZmlsbD0iI2RlZTRmNSIvPjxjaXJjbGUgY3g9IjEwNy40MSIgY3k9IjEwNi40MyIgcj0iMTgiIGZpbGw9IiNkZWU0ZjUiIHN0cm9rZT0iI2RlZTRmNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjMiLz48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIzIiBkPSJNMTA3LjQxIDk2Ljg0djE5LjE4bTcuMTgtOS41OWwtNy4xOC05LjU5LTcuMTggOS41OSIvPjwvc3ZnPgo=';

var imageUpload = 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI5IDEwOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik02OC43OCAxMDYuMjVhMS41MiAxLjUyIDAgMDEtMS4wNi0uNDQgMS41NCAxLjU0IDAgMDEtLjMyLS40OSAxLjM5IDEuMzkgMCAwMS0uMTItLjU3IDEuNDEgMS40MSAwIDAxLjEyLS41OC45NC45NCAwIDAxLjE0LS4yNiAxIDEgMCAwMS4xOC0uMjIgMS41NCAxLjU0IDAgMDEyLjEyIDAgMS41IDEuNSAwIDAxLTEuMDYgMi41NnptLTkuNzgtMS41YTEuNSAxLjUgMCAxMTMgMCAxLjUgMS41IDAgMDEtMyAwem0tOC4zMSAwYTEuNSAxLjUgMCAwMTMgMCAxLjUxIDEuNTEgMCAwMS0xLjUgMS41IDEuNSAxLjUgMCAwMS0xLjUzLTEuNWguMDN6bS04LjMyIDBhMS41IDEuNSAwIDExMS41IDEuNSAxLjUgMS41IDAgMDEtMS41My0xLjVoLjAzem0tOC4zMSAwYTEuNSAxLjUgMCAxMTEuNSAxLjUgMS41IDEuNSAwIDAxLTEuNTYtMS41aC4wNnptLTguMzEgMGExLjUgMS41IDAgMTExLjUgMS41IDEuNSAxLjUgMCAwMS0xLjUzLTEuNWguMDN6bS04LjMyIDBhMS41IDEuNSAwIDExMS41IDEuNSAxLjUxIDEuNTEgMCAwMS0xLjUzLTEuNWguMDN6bS04LjMxIDBhMS41IDEuNSAwIDExMS41IDEuNSAxLjUgMS41IDAgMDEtMS41My0xLjVoLjAzem0tNi44NCAxLjVhMS41IDEuNSAwIDAxLTEuMDYtLjQ0IDEuNSAxLjUgMCAwMTAtMi4xMiAxLjA2IDEuMDYgMCAwMS4yMy0uMTkgMS4wOCAxLjA4IDAgMDEuMjYtLjE0IDEuMzEgMS4zMSAwIDAxLjI4LS4wOSAxLjg4IDEuODggMCAwMS41OCAwIDEuMzEgMS4zMSAwIDAxLjI4LjA5IDEuMyAxLjMgMCAwMS4yNi4xNCAxLjM3IDEuMzcgMCAwMS4yMy4xOSAxLjUgMS41IDAgMDEuNDQgMS4wNiAxLjUgMS41IDAgMDEtMS41IDEuNXptLTEuNS05LjQzYTEuNSAxLjUgMCAxMTMgMCAxLjUgMS41IDAgMDEtMyAwem0wLTcuOTJhMS41IDEuNSAwIDExMyAwIDEuNSAxLjUgMCAwMS0zIDB6bTAtNy45MmExLjUgMS41IDAgMTEzIC4wMiAxLjUgMS41IDAgMDEtMyAwdi0uMDJ6bTAtNy45M2ExLjUgMS41IDAgMTEzIDAgMS41IDEuNSAwIDAxLTMgMHptMC03LjkyYTEuNSAxLjUgMCAxMTMgMCAxLjUgMS41IDAgMDEtMyAwem0wLTcuOTNhMS41IDEuNSAwIDExMyAwIDEuNSAxLjUgMCAwMS0zIDB6bTAtNy45MmExLjUgMS41IDAgMTEzIDAgMS41IDEuNSAwIDAxLTMgMHptMS41LTYuNDJhMS41IDEuNSAwIDAxLTEuMDYtMi41NiAxLjA2IDEuMDYgMCAwMS4yMy0uMTkgMS41OSAxLjU5IDAgMDEuMjYtLjExbC4yOS0uMTFhMS40MiAxLjQyIDAgMDEuNTggMGwuMjguMDguMjYuMTRhMS4zNyAxLjM3IDAgMDEuMjMuMTkgMS41IDEuNSAwIDAxLTEuMDYgMi41NmgtLjAxek01OSA0MS4zNmExLjUgMS41IDAgMTEzIDAgMS41IDEuNSAwIDAxLTMgMHptLTguMzEgMGExLjUgMS41IDAgMTExLjUgMS41IDEuNSAxLjUgMCAwMS0xLjUzLTEuNWguMDN6bS04LjMyIDBhMS41IDEuNSAwIDExMS41IDEuNSAxLjUgMS41IDAgMDEtMS41My0xLjVoLjAzem0tOC4zMSAwYTEuNSAxLjUgMCAxMTEuNSAxLjUgMS41IDEuNSAwIDAxLTEuNTYtMS41aC4wNnptLTguMzEgMGExLjUgMS41IDAgMTExLjUgMS41IDEuNSAxLjUgMCAwMS0xLjUzLTEuNWguMDN6bS04LjMyIDBhMS41IDEuNSAwIDExMS41IDEuNSAxLjUgMS41IDAgMDEtMS41My0xLjVoLjAzem0tOC4zMSAwYTEuNSAxLjUgMCAxMTEuNSAxLjUgMS41IDEuNSAwIDAxLTEuNTMtMS41aC4wM3ptNTkuNjYgMS41YTEuNDkgMS40OSAwIDAxLTEuMzgtMi4wOCAxLjEgMS4xIDAgMDEuMTQtLjI2IDEuMjQgMS4yNCAwIDAxLjE4LS4yMiAxLjUyIDEuNTIgMCAwMTEuMzYtLjQxbC4yOC4wOGEyIDIgMCAwMS4yNS4xNCAxLjA2IDEuMDYgMCAwMS4yMy4xOSAxLjMgMS4zIDAgMDEuMTkuMjJjMCAuMDkuMS4xNy4xNC4yNmExLjQ3IDEuNDcgMCAwMS4wOC4yOCAxLjUgMS41IDAgMDEtLjQxIDEuMzYgMSAxIDAgMDEtLjIzLjE4IDEuMjMgMS4yMyAwIDAxLS4yNS4xNCAxLjQxIDEuNDEgMCAwMS0uNTguMTJ6bS0xLjUgNTMuOTZhMS41IDEuNSAwIDExMyAwIDEuNSAxLjUgMCAwMS0zIDB6bTAtNy45MmExLjUgMS41IDAgMTEzIDAgMS41IDEuNSAwIDAxLTMgMHptMC03LjkyYzAtLjgzLjY3LTEuNTA1IDEuNS0xLjUxYTEuNTEgMS41MSAwIDAxMS41IDEuNTMgMS41IDEuNSAwIDAxLTMgMHYtLjAyem0wLTcuOTNhMS41IDEuNSAwIDExMyAwIDEuNSAxLjUgMCAwMS0zIDB6bTAtNy45MmExLjUgMS41IDAgMTEzIDAgMS41IDEuNSAwIDAxLTMgMHptMC03LjkzYTEuNSAxLjUgMCAxMTMgMCAxLjUgMS41IDAgMDEtMyAwem0wLTcuOTJhMS41IDEuNSAwIDExMyAwIDEuNSAxLjUgMCAwMS0zIDB6IiBmaWxsPSIjREVFNEY1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0xNy42NCAxLjk4aDkxLjI2djg3LjU1SDE3LjY0eiIvPjxwYXRoIGQ9Ik0xMDkuNzUgOTAuMzhIOTguMTZjLTEuOTIgMC0zLjg4LS4wNi01LjczIDAtLjk0IDAtMS44NS4xLTIuODEuMWgtMi45MWMtMi0uMDctMy45NS0uMTctNS44Ni0uMTZsLTUuNjguMTUtMTEuMzguMzNjLTEuOTEgMC0zLjgxLjEzLTUuNzUuMXMtMy44OS0uMTMtNS44My0uMTdjLTEuOTQtLjA0LTMuODUgMC01Ljc1LjA2cy0zLjgxLjE3LTUuNzMuMTljLTMuODctLjA3LTcuNzItLjE0LTExLjU4LS4yNmwtMi44OC0uMDhoLTguNjNhMSAxIDAgMDEtMS0xYzAtMy42NS0uMzktNy4yOS0uMTctMTAuOTRhNDUuNSA0NS41IDAgMDAuMjMtNS40N2MtLjA2LS45MS0uMTctMS44My0uMTgtMi43NC0uMDEtLjkxIDAtMS44MiAwLTIuNzMgMC03LjMuMjEtMTQuNi4xNi0yMS44OVY0MC40YzAtMS44Mi4xNy0zLjY1LjI1LTUuNDguMDgtMS44My4xOS0zLjY0LjEzLTUuNDctLjA2LTEuODMtLjI0LTMuNjQtLjIzLTUuNDcgMC0zLjY1LjMtNy4yOS4zNy0xMC45NC4wNy0zLjY1IDAtNy4zLS4wOC0xMC45NSAwLS4zLjI0LS41NDUuNTQtLjU1IDMuOC0uMDkgNy42MSAwIDExLjQxIDBzNy42IDAgMTEuNDEuMTFjMS45IDAgMy44LjA1IDUuNyAwbDUuNy0uMThjMy44MS0uMTYgNy42MS0uMjQgMTEuNDEtLjMzIDMuOC0uMDkgNy42LS4xMiAxMS40MS0uMTggMy44MS0uMDYgNy42LjIxIDExLjQuMjYgMy44LjA1IDcuNjEtLjE2IDExLjQxLS4yNCAzLjgtLjA4IDcuNjEtLjMzIDExLjQxLS4xaC4wOEExLjE5IDEuMTkgMCAwMTExMC4xMyAyYzAgLjkzLS4wNiAxLjg1LS4wNyAyLjc3bC4wNiAyLjc2LjExIDUuNTRjMCAxLjg1IDAgMy42OS0uMTIgNS41Mi0uMTIgMS44My0uMjYgMy42NC0uMjcgNS40OCAwIDMuNjguMTYgNy40MS0uMDkgMTFhNDUuMjEgNDUuMjEgMCAwMC4xMSA1LjU2IDUzLjcyIDUzLjcyIDAgMDEwIDUuNTNjLS4xNiAzLjYyLS4yNSA3LjI1LS4yNiAxMC45My0uMDEgMy42OC4xNyA3LjQ3IDAgMTEtLjE3IDMuNTMgMCA3LjM0LjA4IDExLjExLjA2IDEuOSAwIDMuNzMuMDYgNS41OS4wNiAxLjg2LjAzIDMuNzcuMDEgNS41OXptLTEuNy0xLjdWNzcuODdjLjA2LTMuNTUuMTgtNy4wOC0uMDYtMTAuODUtLjEtMS44Ny0uMTktMy43Mi0uMTctNS41MWwuMTEtNS4zNGMwLTMuNi0uMTgtNy4zLS4zNy0xMWEzNi44OSAzNi44OSAwIDAxMC01LjM3IDMwLjUyIDMwLjUyIDAgMDAuMTgtNS4zNSA1MCA1MCAwIDAxLS4xNi01LjQ1YzAtMS43OC4yMy0zLjU1LjIzLTUuMzZ2LTIuNzJsLS4xNi0yLjczYy0uMTItMS44Mi0uMTItMy42Mi0uMDktNS40MmwuMTctNS40LjA4LTIuN1YxLjk1bDEuMTQgMS4xNWMtNy42MS4zMi0xNS4yMS0uMzktMjIuODItLjE4LTEuOSAwLTMuOC4xOS01LjcuMjktLjk1LjA3LTEuOS4xLTIuODUuMTMtLjk1LjAzLTEuOS4wNS0yLjg1IDAtMy44MSAwLTcuNjEuMDUtMTEuNDEtLjA3LTMuOC0uMTItNy42LS4wOS0xMS40MS0uMzNhOTQuMyA5NC4zIDAgMDAtMTEuNC0uMmMtNy42MS4zMi0xNS4yMS40OC0yMi44Mi4zOEwxOC44NCAyYy0uMTQgMy42NS0uNDEgNy4zLS4yNSAxMSAuMTYgMy43LjU4IDcuMjkuNTkgMTAuOTQgMCAxLjgzLS4zNCAzLjY1LS41IDUuNDdhMjAuODkgMjAuODkgMCAwMDAgMi43NGMwIC45MS4xIDEuODIuMTggMi43M2E1MC40MSA1MC40MSAwIDAxLjM2IDUuNDhjLjA1IDEuODItLjA1IDMuNjQtLjA4IDUuNDdsLS4xNCA1LjR2NS40N2wtLjA4IDExdjIuNzNjMCAuOTEtLjE2IDEuODMtLjI0IDIuNzRhNDMuNDUgNDMuNDUgMCAwMC4xNCA1LjQ3Yy4xNyAzLjY1LS4yNCA3LjI5LS4yOCAxMC45NGwtLjg0LS44NGM3LjU2LjE1IDE1LjEyLjA4IDIyLjY3LjA2bDUuNjcuMDZjMS44OSAwIDMuNzkgMCA1LjY1LS4wN2w1LjU5LS4xOWg1LjY2bDExLjQuMiA1LjcuMDljMS44OSAwIDMuNzItLjEgNS41NS0uMTcgMS44My0uMDcgMy43MyAwIDUuNjcgMGg1LjY2YzMuNjMtLjAzIDcuNC0uMDIgMTEuMTMtLjA0eiIgZmlsbD0iI0RFRTRGNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PGcgb3BhY2l0eT0iLjUiIGZpbGw9IiNERUU0RjUiIGZpbGwtcnVsZT0ibm9uemVybyI+PHBhdGggZD0iTTI1LjkgOS45aDc0Ljc1djcxLjcxSDI1Ljl6Ii8+PHBhdGggZD0iTTEwMS4yMSA4Mi4xOEg4Ny4wNmMtMS41MiAwLTMuMDguMS00LjY5IDAtMS42MS0uMS0zLjIxLS4wOS00Ljc3LS4wOGwtNC42NS4xLTkuMzQuMjJjLTMuMDkuMTItNi4yOSAwLTkuNDUgMC0xLjU4LS4wNi0zLjE0IDAtNC43IDBsLTQuNy4xMWMtNi4zMS0uMDctMTIuNi0uMjktMTguODYtLjI1YS43LjcgMCAwMS0uNzEtLjY5YzAtMy0uMjQtNi0uMTEtOWE0NC43MSA0NC43MSAwIDAwLjE2LTQuNDhjMC0uNzUtLjEyLTEuNS0uMTItMi4yNHYtMi4xOGMwLTYgLjE0LTEyIC4xMS0xNy45My0uMDMtNS45My41Ny0xMS45NS4xLTE3LjkzbC4yNC05Yy4wNi0zIDAtNi0uMDUtOSAwLS4yLjE2LS4zNjUuMzYtLjM3IDMuMTEtLjA2IDYuMjIgMCA5LjM0IDBzNi4yMyAwIDkuMzQuMDdoNC42N2w0LjY4LS4xMmMzLjExLS4xIDYuMjMtLjE2IDkuMzQtLjIyIDMuMTEtLjA2IDYuMjMtLjA3IDkuMzQtLjExIDMuMTEtLjA0IDYuMjMuMTEgOS4zNS4xNSAzLjEyLjA0IDYuMjMtLjA5IDkuMzQtLjE0IDMuMTEtLjA1IDYuMjMtLjE5IDkuMzQtLjA3aC4wNmEuODEuODEgMCAwMS43Ny44MnY0LjUybC4wNiA0LjUzYzAgMS41MSAwIDMtLjA4IDQuNTEtLjA4IDEuNTEtLjE0IDMtLjE3IDQuNDkgMCAzIC4xIDYgMCA5LS4wNyAxLjQ4IDAgMyAuMDYgNC41My4wNiAxLjUzIDAgMyAwIDQuNTMtLjEgMy0uMTYgNS45NC0uMTcgOC45NS0uMDEgMy4wMS4xMSA2LjA5IDAgOXMwIDYgLjA1IDkuMDggMCA2LjE3LjAxIDkuMnptLTEuMTMtMS4xM3YtOC44OGMwLTIuODguMS01Ljg1IDAtOC45LS4xLTMuMDUtLjA5LTYgMC04LjkuMDktMi45LS4xMS02LS4yNC05YTQwLjYzIDQwLjYzIDAgMDEwLTQuNDIgMzIgMzIgMCAwMC4xMi00LjRjLS4yNS0zIDAtNS45MSAwLTguODcgMC0yLjk2LS4zMy02LS4xOC04LjkxbC4xLTQuNDRWOS44OGwuNzcuNzdjLTMuMTEuMTItNi4yMiAwLTkuMzQgMHMtNi4yMy0uMTItOS4zNC0uMDhjLTMuMTEuMDQtNi4yMy4zMy05LjM1LjMtMy4xMi0uMDMtNi4yMyAwLTkuMzQgMC0zLjExIDAtNi4yMy0uMDgtOS4zNC0uMjNsLTQuNjgtLjE3Yy0xLjU1LS4wNS0zLjExIDAtNC42NyAwLTYuMjMuMjItMTIuNDYuMzItMTguNjguMjVsLjgtLjhjLS4xIDMtLjI4IDYtLjE3IDkgLjExIDMgLjM5IDYgLjM5IDkgMCAxLjUtLjIyIDMtLjMyIDQuNDhhMzEuODkgMzEuODkgMCAwMC4xIDQuNDggNzAuNjkgNzAuNjkgMCAwMS4xOCA5Yy0uMTUgNi0uMDcgMTEuOTUtLjE1IDE3LjkzdjIuMjRjMCAuNzQtLjExIDEuNDktLjE2IDIuMjRhNDEuODcgNDEuODcgMCAwMC4wOSA0LjQ4Yy4xIDMtLjE1IDYtLjE4IDlsLS41Ni0uNTZjNi4xOS4xIDEyLjM5IDAgMTguNTggMCAzLjEgMCA2LjIzLjExIDkuMjkgMCAzLjA2LS4xMSA2LjEyLS4yIDkuMjQtLjExbDkuMzQuMTQgNC42Ny4wNiA0LjU3LS4xYzEuNTEtLjA2IDMuMDcgMCA0LjY1IDBoNC42NGMzLjAxLS4xNSA2LjA5LS4xNCA5LjE3LS4xNXoiLz48L2c+PHJlY3QgZmlsbD0iI0RFRTRGNSIgZmlsbC1ydWxlPSJub256ZXJvIiB4PSIzNC42NyIgeT0iMjMuMTEiIHdpZHRoPSIyMi4xNSIgaGVpZ2h0PSIyNC41MiIgcng9IjExLjAyIi8+PHBhdGggZD0iTTQ1Ljc5IDQ4YTEyLjA3IDEyLjA3IDAgMDEtOC42MS0zLjcgMTEuMTEgMTEuMTEgMCAwMS0yLjQyLTQuMTZjLS4xMi0uMzktLjItLjc5LS4zLTEuMTgtLjEtLjM5LS4xMi0uNzktLjE4LTEuMTlsLS4wNS0xLjIxdi0xLjE0YzAtLjc3IDAtMS41NS4wNy0yLjM2IDAtLjQuMTMtLjguMTktMS4xOWwuMzItMS4xNmExMS4wNiAxMS4wNiAwIDAxMi40My00LjA4IDExLjM5IDExLjM5IDAgMDEzLjgyLTIuNzggMTIuMjcgMTIuMjcgMCAwMTQuNjItMSAxMS4yNSAxMS4yNSAwIDAxNC42MSAxIDEyIDEyIDAgMDEzLjg4IDIuNjkgMTEuNDEgMTEuNDEgMCAwMTIuNDMgNC4wOWMuMTMuMzcuMjIuNzcuMzIgMS4xNS4xLjM4LjE0Ljc5LjIxIDEuMTlsLjA3IDEuMTl2MS4xN2MwIC43NyAwIDEuNTUtLjA5IDIuMzUtLjA1LjQtLjEzLjgtLjE5IDEuMTlMNTYuNjQgNDBhMTAuODcgMTAuODcgMCAwMS0yLjM1IDQuMTQgNy40OCA3LjQ4IDAgMDEtLjg2LjgzIDguMjYgOC4yNiAwIDAxLS45NC43NEExMC45MiAxMC45MiAwIDAxNTAuNDQgNDdhMTEuNjIgMTEuNjIgMCAwMS00LjY1IDF6bTAtLjc5YTEwLjI5IDEwLjI5IDAgMDA3Ljg2LTMuNjQgMTEuMjMgMTEuMjMgMCAwMDIuMjItMy44MSAxMyAxMyAwIDAwLjUzLTQuNDZ2LTIuMjljLS4wNi0uMzctLjA5LS43NC0uMTYtMS4xMS0uMDctLjM3LS4xOS0uNzMtLjMxLTEuMDhhMTAuNjkgMTAuNjkgMCAwMC0yLjMtMy44MiAxMC40OCAxMC40OCAwIDAwLTMuNTctMi42NSAxMS4yNyAxMS4yNyAwIDAwLTQuMzctLjc4aC0xLjExYTEwLjYgMTAuNiAwIDAwLTEuMTEuMTYgMTEgMTEgMCAwMC0yLjEuNzEgMTAuMjggMTAuMjggMCAwMC0zLjU4IDIuNjEgMTQuMTIgMTQuMTIgMCAwMC0yLjIzIDMuODMgMTAuMjIgMTAuMjIgMCAwMC0uMzEgMS4xMmMwIC4zNy0uMTIuNzQtLjE2IDEuMTEtLjA4Ljc0LS4xMiAxLjUxLS4xNCAyLjI5YTEwLjU3IDEwLjU3IDAgMDAyLjg0IDguMzQgMTAuMjMgMTAuMjMgMCAwMDggMy40OXYtLjAyeiIgZmlsbD0iI0RFRTRGNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNNDUuNzQgMzUuMzdoMjguOTN2MzIuMDJINDUuNzR6Ii8+PHBhdGggZD0iTTc1IDY3LjY3Yy0yLjQzIDAtNC45NC0uMDYtNy4zIDAtMi41MS0uMTEtNC44NyAwLTcuMjkuMDctMS4yMSAwLTIuNDEuMDktMy42NSAwLTEuMjQtLjA5LTIuNDYtLjA3LTMuNjYgMC0yLjQzLjEyLTQuODktLjA3LTcuMzItLjA3YS4zNi4zNiAwIDAxLS4zNi0uMzZ2LTRjMC0xLjMzLjEyLTIuNjcgMC00LS4wOC0yLjY2IDAtNS4zMyAwLTh2LTRsLjA5LTJjMC0uNjcgMC0xLjM0LS4wNi0yIDAtMS4zMy4wNi0yLjY2LjA5LTQgLjAzLTEuMzQgMC0yLjY3IDAtNGEuMi4yIDAgMDEuMTktLjE5aDcuMjNjMi40MS4wOCA0LjgzLS4xIDcuMjQtLjEyaDcuMjRjMi40MS4xMSA0LjgyIDAgNy4yMy0uMDhhLjQyLjQyIDAgMDEuNDMuNGMuMDcgMS4zNS0uMDkgMi42OSAwIDRzLjA3IDIuNzEgMCA0LS4wNyAyLjY3IDAgNGwtLjA3IDItLjAzIDIuMmMwIDEuMzQtLjEgMi42NS0uMTEgNC0uMDEgMS4zNS4wOCAyLjc0IDAgNGwtLjA1IDIgLjA1IDIuMDZDNzUgNjUgNzUgNjYuMzEgNzUgNjcuNjd6bS0uNTctLjU2di02bC0uMDctMmMtLjA5LTEuMzcgMC0yLjYxIDAtNGwtLjE0LTRjMC0uNjYuMTMtMS4yNy4xMi0xLjk0LS4wMS0uNjctLjA2LTEuMzQtLjA4LTJhMzcuMTIgMzcuMTIgMCAwMDAtNGMtLjA5LTEuMzQgMC0yLjY0IDAtNCAwLTEuMzYtLjA3LTIuNjUgMC00bC40LjRjLTIuNDEgMC00LjgyLS4xNi03LjIzIDBsLTEuODEuMDdINjAuMmMtMi40MSAwLTQuODMtLjI5LTcuMjQtLjEzLTIuNDEuMTYtNC44Mi4xNi03LjIzLjFsLjM5LS4zOWMwIDEuMzMtLjE0IDIuNjctLjA2IDQgLjA4IDEuMzMuMjMgMi42Ny4xNiA0YTE5LjQzIDE5LjQzIDAgMDAtLjE2IDJjMCAuNjYuMDkgMS4zMy4xNCAyIC4xMiAxLjMzIDAgMi42NiAwIDQtLjA2IDIuNjcgMCA1LjM0LS4xMiA4LS4wOSAxLjM0LjEyIDIuNjcgMCA0cy0uMDcgMi42Ny0uMDkgNGwtLjI2LS4yNWg3LjE5YzEuMiAwIDIuMzkgMCAzLjU3LS4wNyAxLjE4LS4wNyAyLjM4IDAgMy41OCAwIDIuNCAwIDQuODUuMTMgNy4xNyAwIDIuNDUuMjkgNC43Ni4xOSA3LjE1LjIxaC4wNHoiIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik04MCA0OS40bC05Ljc2IDE5IDIxLjY1LS43LTExLjMxLTE4LjMzYS4zMy4zMyAwIDAwLS41OC4wM3oiIGZpbGw9IiNERUU0RjUiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik04MC4zMyA0OS41OGMtLjgyIDEuNTgtMS42MiAzLjE3LTIuNDggNC43M2wtMS4xMiAyLjQzLTEuMiAyLjM4Yy0xLjY4IDMuMTUtMy4yOSA2LjMyLTUgOS40NWwtLjMzLS41MmMxLjggMCAzLjYxIDAgNS40Mi0uMDlzMy42MSAwIDUuNDEtLjEzYzEuOC0uMTMgMy42MS0uMDkgNS40MS0uMTYgMS44LS4wNyAzLjYxLS4yMyA1LjQxLS4zbC0uMjcuNTEtMy00LjcxYy0xLTEuNTgtMS44Ny0zLjItMi44OC00Ljc2LS40OS0uNzktMS0xLjU3LTEuNDctMi4zN3MtLjkxLTEuNjItMS40Mi0yLjRsLTEuNDgtMi4zNS0uNzUtMS4xOC0uMzUtLjU0LjEuMDF6bS0uNy0uMzZhLjc0Ljc0IDAgMDEuNTctLjQxLjcxLjcxIDAgMDEuNjYuMjdjLjE5LjI3LjI3LjQxLjQuNjNsLjc0IDEuMTggMS40OCAyLjM2Yy40OC44IDEgMS41NSAxLjUyIDIuMzQuNTIuNzkgMSAxLjU5IDEuNDQgMi4zOGwyLjg2IDQuNzhhNjUuMzUgNjUuMzUgMCAwMDEuNDEgMi40bDEuNSAyLjM1YS4zOC4zOCAwIDAxLS4xMi41NC4zMy4zMyAwIDAxLS4xOS4wNmwtMi43MS4xM2MtLjkuMDgtMS44MSAwLTIuNzEgMC0xLjguMDktMy42LjI5LTUuNDEuMzEtMS44MS4wMi0zLjYxLjEzLTUuNDEuMTQtMS44LjAxLTMuNjEuMjYtNS40Mi4xN2EuNDMuNDMgMCAwMS0uNDEtLjQ1LjQ2LjQ2IDAgMDEwLS4yYy40NS0uNzcuOS0xLjU0IDEuMjktMi4zNC4zOS0uOC44OC0xLjU1IDEuMy0yLjMzLjg4LTEuNTMgMS41OC0zLjE3IDIuNDEtNC43N0w3NiA1Ni4zNyA3Ny4yNyA1NGMuNzMtMS42IDEuNTctMy4xOSAyLjM2LTQuNzh6IiBmaWxsPSIjREVFNEY1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48Y2lyY2xlIGZpbGw9IiNERUU0RjUiIGZpbGwtcnVsZT0ibm9uemVybyIgY3g9IjEwOC42NCIgY3k9Ijg4LjI1IiByPSIxOS41Ii8+PHBhdGggZD0iTTEwOC42NCA3OC42NnYxOS4xOG03LjE4LTkuNTlsLTcuMTgtOS41OS03LjE4IDkuNTkiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L2c+PC9zdmc+Cg==';

var DropZoneContext = React__default.createContext({
  disabled: false,
  focused: false,
  size: 'extraLarge',
  type: 'file',
  measuring: false
});

var styles$M = {
  "FileUpload": "Polaris-DropZone-FileUpload",
  "Button": "Polaris-DropZone-FileUpload__Button",
  "newDesignLanguage": "Polaris-DropZone-FileUpload--newDesignLanguage",
  "pressed": "Polaris-DropZone-FileUpload--pressed",
  "disabled": "Polaris-DropZone-FileUpload--disabled",
  "focused": "Polaris-DropZone-FileUpload--focused",
  "sizeSlim": "Polaris-DropZone-FileUpload--sizeSlim",
  "ActionTitle": "Polaris-DropZone-FileUpload__ActionTitle",
  "ActionTitle-disabled": "Polaris-DropZone-FileUpload__ActionTitle--disabled",
  "ActionTitle-focused": "Polaris-DropZone-FileUpload__ActionTitle--focused",
  "Image": "Polaris-DropZone-FileUpload__Image",
  "sizeExtraLarge": "Polaris-DropZone-FileUpload--sizeExtraLarge",
  "sizeLarge": "Polaris-DropZone-FileUpload--sizeLarge"
};

function FileUpload(props) {
  var i18n = useI18n();

  var _useFeatures = useFeatures(),
      newDesignLanguage = _useFeatures.newDesignLanguage;

  var _useContext = useContext(DropZoneContext),
      size = _useContext.size,
      measuring = _useContext.measuring,
      type = _useContext.type,
      focused = _useContext.focused,
      disabled = _useContext.disabled;

  var suffix = capitalize(type);
  var _props$actionTitle = props.actionTitle,
      actionTitle = _props$actionTitle === void 0 ? i18n.translate("Polaris.DropZone.FileUpload.actionTitle".concat(suffix)) : _props$actionTitle,
      _props$actionHint = props.actionHint,
      actionHint = _props$actionHint === void 0 ? i18n.translate("Polaris.DropZone.FileUpload.actionHint".concat(suffix)) : _props$actionHint;
  var imageClasses = classNames(styles$M.Image, size && size === 'extraLarge' && styles$M.sizeExtraLarge, size && size === 'large' && styles$M.sizeLarge);
  var buttonStyles = size === 'extraLarge' || size === 'large' ? classNames(styles$M.Button, newDesignLanguage && styles$M.newDesignLanguage, size && size !== 'extraLarge' && styles$M.slim, focused && styles$M.focused, disabled && styles$M.disabled) : null;
  var buttonMarkup = (size === 'extraLarge' || size === 'large') && buttonStyles ? /*#__PURE__*/React__default.createElement("div", {
    className: buttonStyles
  }, actionTitle) : null;
  var extraLargeView = size === 'extraLarge' ? /*#__PURE__*/React__default.createElement(Stack, {
    vertical: true
  }, type === 'file' && /*#__PURE__*/React__default.createElement("img", {
    className: imageClasses,
    src: fileUpload,
    alt: ""
  }), type === 'image' && /*#__PURE__*/React__default.createElement("img", {
    className: imageClasses,
    src: imageUpload,
    alt: ""
  }), buttonMarkup, /*#__PURE__*/React__default.createElement(TextStyle, {
    variation: "subdued"
  }, actionHint)) : null;
  var largeView = size === 'large' ? /*#__PURE__*/React__default.createElement(Stack, {
    vertical: true,
    spacing: "tight"
  }, type === 'file' && /*#__PURE__*/React__default.createElement("img", {
    className: imageClasses,
    src: fileUpload,
    alt: ""
  }), type === 'image' && /*#__PURE__*/React__default.createElement("img", {
    className: imageClasses,
    src: imageUpload,
    alt: ""
  }), buttonMarkup, /*#__PURE__*/React__default.createElement(Caption, null, /*#__PURE__*/React__default.createElement(TextStyle, {
    variation: "subdued"
  }, actionHint))) : null;
  var actionTitleClassName = classNames(styles$M.ActionTitle, focused && !disabled && styles$M['ActionTitle-focused'], disabled && styles$M['ActionTitle-disabled']);
  var actionTitleMarkup = /*#__PURE__*/React__default.createElement("div", {
    className: actionTitleClassName
  }, actionTitle);
  var mediumView = size === 'medium' ? /*#__PURE__*/React__default.createElement(Stack, {
    vertical: true,
    spacing: "tight"
  }, actionTitleMarkup, /*#__PURE__*/React__default.createElement(Caption, null, /*#__PURE__*/React__default.createElement(TextStyle, {
    variation: "subdued"
  }, actionHint))) : null;
  var smallView = size === 'small' ? /*#__PURE__*/React__default.createElement(Stack, {
    vertical: true,
    spacing: "tight"
  }, /*#__PURE__*/React__default.createElement(Icon, {
    source: DragDropMajorMonotone,
    color: "inkLightest"
  })) : null;
  var fileUploadClassName = classNames(styles$M.FileUpload, newDesignLanguage && styles$M.newDesignLanguage, measuring && styles$M.measuring);
  return /*#__PURE__*/React__default.createElement("div", {
    className: fileUploadClassName
  }, smallView, mediumView, largeView, extraLargeView);
}

var dragEvents = ['dragover', 'dragenter', 'drop'];
function fileAccepted(file, accept) {
  return file.type === 'application/x-moz-file' || accepts(file, accept);
}
function getDataTransferFiles(event) {
  if (isDragEvent(event) && event.dataTransfer) {
    var dt = event.dataTransfer;

    if (dt.files && dt.files.length) {
      return Array.from(dt.files);
    } else if (dt.items && dt.items.length) {
      // Chrome is the only browser that allows to read the file list on drag
      // events and uses `items` instead of `files` in this case.
      return Array.from(dt.items);
    }
  } else if (isChangeEvent(event) && event.target.files) {
    // Return files from even when a file was selected from an upload dialog
    return Array.from(event.target.files);
  }

  return [];
}

function accepts(file, acceptedFiles) {
  if (file && acceptedFiles) {
    var fileName = file.name || '';
    var mimeType = file.type || '';
    var baseMimeType = mimeType.replace(/\/.*$/, '');
    var acceptedFilesArray = Array.isArray(acceptedFiles) ? acceptedFiles : acceptedFiles.split(',');
    return acceptedFilesArray.some(function (type) {
      var validType = type.trim();

      if (validType.startsWith('.')) {
        return fileName.toLowerCase().endsWith(validType.toLowerCase());
      } else if (validType.endsWith('/*')) {
        // This is something like a image/* mime type
        return baseMimeType === validType.replace(/\/.*$/, '');
      }

      return mimeType === validType;
    });
  }

  return true;
}

function isDragEvent(event) {
  return dragEvents.indexOf(event.type) > 0;
}

function isChangeEvent(event) {
  return Object.prototype.hasOwnProperty.call(event, 'target');
}

var styles$N = {
  "DropZone": "Polaris-DropZone",
  "hasOutline": "Polaris-DropZone--hasOutline",
  "isDisabled": "Polaris-DropZone--isDisabled",
  "newDesignLanguage": "Polaris-DropZone--newDesignLanguage",
  "focused": "Polaris-DropZone--focused",
  "isDragging": "Polaris-DropZone--isDragging",
  "sizeExtraLarge": "Polaris-DropZone--sizeExtraLarge",
  "sizeLarge": "Polaris-DropZone--sizeLarge",
  "sizeMedium": "Polaris-DropZone--sizeMedium",
  "sizeSmall": "Polaris-DropZone--sizeSmall",
  "measuring": "Polaris-DropZone--measuring",
  "Container": "Polaris-DropZone__Container",
  "Overlay": "Polaris-DropZone__Overlay",
  "hasError": "Polaris-DropZone--hasError"
};

// subcomponents so explicitly state the subcomponents in the type definition.
// Letting this be implicit works in this project but fails in projects that use
// generated *.d.ts files.

var DropZone = function DropZone(_ref) {
  var dropOnPage = _ref.dropOnPage,
      label = _ref.label,
      labelAction = _ref.labelAction,
      labelHidden = _ref.labelHidden,
      children = _ref.children,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$outline = _ref.outline,
      outline = _ref$outline === void 0 ? true : _ref$outline,
      accept = _ref.accept,
      active = _ref.active,
      _ref$overlay = _ref.overlay,
      overlay = _ref$overlay === void 0 ? true : _ref$overlay,
      _ref$allowMultiple = _ref.allowMultiple,
      allowMultiple = _ref$allowMultiple === void 0 ? true : _ref$allowMultiple,
      overlayText = _ref.overlayText,
      errorOverlayText = _ref.errorOverlayText,
      idProp = _ref.id,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'file' : _ref$type,
      onClick = _ref.onClick,
      error = _ref.error,
      openFileDialog = _ref.openFileDialog,
      onFileDialogClose = _ref.onFileDialogClose,
      customValidator = _ref.customValidator,
      onDrop = _ref.onDrop,
      onDropAccepted = _ref.onDropAccepted,
      onDropRejected = _ref.onDropRejected,
      onDragEnter = _ref.onDragEnter,
      onDragOver = _ref.onDragOver,
      onDragLeave = _ref.onDragLeave;

  var _useFeatures = useFeatures(),
      newDesignLanguage = _useFeatures.newDesignLanguage;

  var node = useRef(null);
  var dragTargets = useRef([]);
  var adjustSize = useCallback(debounce(function () {
    if (!node.current) {
      return;
    }

    var size = 'extraLarge';
    var width = node.current.getBoundingClientRect().width;

    if (width < 100) {
      size = 'small';
    } else if (width < 160) {
      size = 'medium';
    } else if (width < 300) {
      size = 'large';
    }

    setSize(size);
    measuring && setMeasuring(false);
  }, 50, {
    trailing: true
  }), []);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      dragging = _useState2[0],
      setDragging = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      internalError = _useState4[0],
      setInternalError = _useState4[1];

  var _useToggle = useToggle(false),
      focused = _useToggle.value,
      handleFocus = _useToggle.setTrue,
      handleBlur = _useToggle.setFalse;

  var _useState5 = useState('extraLarge'),
      _useState6 = _slicedToArray(_useState5, 2),
      size = _useState6[0],
      setSize = _useState6[1];

  var _useState7 = useState(true),
      _useState8 = _slicedToArray(_useState7, 2),
      measuring = _useState8[0],
      setMeasuring = _useState8[1];

  var i18n = useI18n();
  var getValidatedFiles = useCallback(function (files) {
    var acceptedFiles = [];
    var rejectedFiles = [];
    Array.from(files).forEach(function (file) {
      !fileAccepted(file, accept) || customValidator && !customValidator(file) ? rejectedFiles.push(file) : acceptedFiles.push(file);
    });

    if (!allowMultiple) {
      acceptedFiles.splice(1, acceptedFiles.length);
      rejectedFiles.push.apply(rejectedFiles, _toConsumableArray(acceptedFiles.slice(1)));
    }

    return {
      files,
      acceptedFiles,
      rejectedFiles
    };
  }, [accept, allowMultiple, customValidator]);
  var handleDrop = useCallback(function (event) {
    stopEvent(event);
    if (disabled) return;
    var fileList = getDataTransferFiles(event);

    var _getValidatedFiles = getValidatedFiles(fileList),
        files = _getValidatedFiles.files,
        acceptedFiles = _getValidatedFiles.acceptedFiles,
        rejectedFiles = _getValidatedFiles.rejectedFiles;

    dragTargets.current = [];
    setDragging(false);
    setInternalError(rejectedFiles.length > 0);
    onDrop && onDrop(files, acceptedFiles, rejectedFiles);
    onDropAccepted && acceptedFiles.length && onDropAccepted(acceptedFiles);
    onDropRejected && rejectedFiles.length && onDropRejected(rejectedFiles);
    event.target.value = '';
  }, [disabled, getValidatedFiles, onDrop, onDropAccepted, onDropRejected]);
  var handleDragEnter = useCallback(function (event) {
    stopEvent(event);
    if (disabled) return;
    var fileList = getDataTransferFiles(event);

    if (event.target && !dragTargets.current.includes(event.target)) {
      dragTargets.current.push(event.target);
    }

    if (dragging) return;

    var _getValidatedFiles2 = getValidatedFiles(fileList),
        rejectedFiles = _getValidatedFiles2.rejectedFiles;

    setDragging(true);
    setInternalError(rejectedFiles.length > 0);
    onDragEnter && onDragEnter();
  }, [disabled, dragging, getValidatedFiles, onDragEnter]);
  var handleDragOver = useCallback(function (event) {
    stopEvent(event);
    if (disabled) return;
    onDragOver && onDragOver();
  }, [disabled, onDragOver]);
  var handleDragLeave = useCallback(function (event) {
    event.preventDefault();
    if (disabled) return;
    dragTargets.current = dragTargets.current.filter(function (el) {
      var compareNode = dropOnPage && !isServer ? document : node.current;
      return el !== event.target && compareNode && compareNode.contains(el);
    });
    if (dragTargets.current.length > 0) return;
    setDragging(false);
    setInternalError(false);
    onDragLeave && onDragLeave();
  }, [dropOnPage, disabled, onDragLeave]);
  useEffect(function () {
    var dropNode = dropOnPage ? document : node.current;
    if (!dropNode) return;
    addEventListener(dropNode, 'drop', handleDrop);
    addEventListener(dropNode, 'dragover', handleDragOver);
    addEventListener(dropNode, 'dragenter', handleDragEnter);
    addEventListener(dropNode, 'dragleave', handleDragLeave);
    addEventListener(window, 'resize', adjustSize);
    return function () {
      removeEventListener(dropNode, 'drop', handleDrop);
      removeEventListener(dropNode, 'dragover', handleDragOver);
      removeEventListener(dropNode, 'dragenter', handleDragEnter);
      removeEventListener(dropNode, 'dragleave', handleDragLeave);
      removeEventListener(window, 'resize', adjustSize);
    };
  }, [dropOnPage, handleDrop, handleDragOver, handleDragEnter, handleDragLeave, adjustSize]);
  useComponentDidMount(function () {
    adjustSize();
  });
  var id = useUniqueId('DropZone', idProp);
  var suffix = capitalize(type);
  var overlayTextWithDefault = overlayText === undefined ? i18n.translate("Polaris.DropZone.overlayText".concat(suffix)) : overlayText;
  var errorOverlayTextWithDefault = errorOverlayText === undefined ? i18n.translate("Polaris.DropZone.errorOverlayText".concat(suffix)) : errorOverlayText;
  var inputAttributes = {
    id,
    accept,
    disabled,
    type: 'file',
    multiple: allowMultiple,
    onChange: handleDrop,
    onFocus: handleFocus,
    onBlur: handleBlur
  };
  var classes = classNames(styles$N.DropZone, outline && styles$N.hasOutline, focused && styles$N.focused, (active || dragging) && styles$N.isDragging, disabled && styles$N.isDisabled, newDesignLanguage && styles$N.newDesignLanguage, (internalError || error) && styles$N.hasError, styles$N[variationName('size', size)], measuring && styles$N.measuring);
  var dragOverlay = (active || dragging) && (!internalError || !error) && overlay && overlayMarkup(DragDropMajorMonotone, 'indigo', overlayTextWithDefault);
  var dragErrorOverlay = dragging && (internalError || error) && overlayMarkup(CircleAlertMajorMonotone, 'red', errorOverlayTextWithDefault);
  var labelValue = label || i18n.translate('Polaris.DropZone.FileUpload.label');
  var labelHiddenValue = label ? labelHidden : true;
  var context = useMemo(function () {
    return {
      disabled,
      focused,
      size,
      type: type || 'file',
      measuring
    };
  }, [disabled, focused, measuring, size, type]);
  return /*#__PURE__*/React__default.createElement(DropZoneContext.Provider, {
    value: context
  }, /*#__PURE__*/React__default.createElement(Labelled, {
    id: id,
    label: labelValue,
    action: labelAction,
    labelHidden: labelHiddenValue
  }, /*#__PURE__*/React__default.createElement("div", {
    ref: node,
    className: classes,
    "aria-disabled": disabled,
    onClick: handleClick,
    onDragStart: stopEvent
  }, dragOverlay, dragErrorOverlay, /*#__PURE__*/React__default.createElement("div", {
    className: styles$N.Container
  }, children), /*#__PURE__*/React__default.createElement(VisuallyHidden, null, /*#__PURE__*/React__default.createElement(DropZoneInput, Object.assign({}, inputAttributes, {
    openFileDialog: openFileDialog,
    onFileDialogClose: onFileDialogClose
  }))))));

  function overlayMarkup(icon, color, text) {
    var overlayClass = classNames(styles$N.Overlay, newDesignLanguage && styles$N.newDesignLanguage);
    return /*#__PURE__*/React__default.createElement("div", {
      className: overlayClass
    }, /*#__PURE__*/React__default.createElement(Stack, {
      vertical: true,
      spacing: "tight"
    }, /*#__PURE__*/React__default.createElement(Icon, {
      source: icon,
      color: color
    }), size === 'extraLarge' && /*#__PURE__*/React__default.createElement(DisplayText, {
      size: "small",
      element: "p"
    }, text), (size === 'medium' || size === 'large') && /*#__PURE__*/React__default.createElement(Caption, null, text)));
  }

  function open() {
    var fileInputNode = node.current && node.current.querySelector("#".concat(id));
    fileInputNode && fileInputNode instanceof HTMLElement && fileInputNode.click();
  }

  function handleClick(event) {
    if (disabled) return;
    return onClick ? onClick(event) : open();
  }
};

function stopEvent(event) {
  event.preventDefault();
  event.stopPropagation();
}

DropZone.FileUpload = FileUpload; // Due to security reasons, browsers do not allow file inputs to be opened artificially.
// For example `useEffect(() => { ref.click() })`. Oddly enough react class-based components bi-pass this.

var DropZoneInput = /*#__PURE__*/function (_Component) {
  _inherits(DropZoneInput, _Component);

  var _super = _createSuper(DropZoneInput);

  function DropZoneInput() {
    var _this;

    _classCallCheck(this, DropZoneInput);

    _this = _super.apply(this, arguments);
    _this.fileInputNode = /*#__PURE__*/React__default.createRef();

    _this.triggerFileDialog = function () {
      _this.open();

      _this.props.onFileDialogClose && _this.props.onFileDialogClose();
    };

    _this.open = function () {
      if (!_this.fileInputNode.current) return;

      _this.fileInputNode.current.click();
    };

    return _this;
  }

  _createClass(DropZoneInput, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.openFileDialog && this.triggerFileDialog();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.props.openFileDialog && this.triggerFileDialog();
    }
  }, {
    key: "render",
    value: function render() {
      var _a = this.props,
          openFileDialog = _a.openFileDialog,
          onFileDialogClose = _a.onFileDialogClose,
          inputProps = __rest(_a, ["openFileDialog", "onFileDialogClose"]);

      return /*#__PURE__*/React__default.createElement("input", Object.assign({}, inputProps, {
        ref: this.fileInputNode,
        autoComplete: "off"
      }));
    }
  }]);

  return DropZoneInput;
}(Component);

var emptySearch = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNzggMTU4Ij48cGF0aCBkPSJNOS4xOSAxMjkuODRhNDAuMDI5IDQwLjAyOSAwIDAxLTQuOS03LjE0Qy0xMy45MSA4OC41OSA1OC4wOC00MS44OCAxMzUuODUgMTguNDNhMTA1Ljk0NiAxMDUuOTQ2IDAgMDE4LjM0IDcuMThjLjMyLjMuNjMuNi45NS45MSA4Ny40OSA4NS04Mi4zIDE2Ni4yOC0xMzUuOTUgMTAzLjMyeiIgZmlsbD0iI2Y0ZjZmOCIvPjxwYXRoIGQ9Ik0xMjIuNiAxMDAuODg1Yy0zLjM2NyA1LjQtNy44MzQgMTAuNzY1LTEzLjY0NiAxMy42MDUtNC4yODcgMi4xLTE0LjQ1MyA5Ljc1LTMxLjcwOSA3LjAzMy03LjU2LTE0LjUyMyA0MC40MzEtMTEuMzIzIDIzLjE0OS0zMi44Ny04LjA3Mi0xMC4wODEgMTMuMzI3LTE0LjEyIDEwLjc0Ny0yMy42MDctMS43NTYtNi40NTItMTIuNTktNy40MS02LjA5My0xOS4yMTYgNC4xNzQtNy41ODktNC45Ny04LjE5NC05LjgzOS0xMC45MTRhOC40MzkgOC40MzkgMCAwMS0yLjk2LTIuNzE0IDI1LjU0IDI1LjU0IDAgMDEyLjYyNC40NzJjNC42MDkgMS4xIDkuMzE3IDMuNjI0IDEzLjMyNSA2LjExOSAxMC44ODEgNi43ODcgMTQuODM2IDEzLjQxNCAxNy4yMjEgMTkuNDggNS43NzUgMTQuNzQ5IDUuNzA1IDI4Ljk1MS0yLjgxOSA0Mi42MTJ6IiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIuNCIvPjxwYXRoIGQ9Ik0xMTMuNyAyOC4yMDZjLS4xNTUuMTM2LS4zMTQuMjcyLS40NjkuNDEyLS40NDIuMzktLjg4NS43OS0xLjMzMSAxLjE4NGEyNC4xIDI0LjEgMCAwMS0zLjY0MiAyLjgxIDE5LjMzNSAxOS4zMzUgMCAwMS00LjU2OS45MzhjLTIuNDA1LTEuNTMyLTcuNzIzLTEuNC03LjQ2Ni00Ljg3OS4xNy0yLjI4OCAyLjMtNC44NTYgNC4xMzgtNi4zNDMuMTYzLS4xMzIuMzI1LS4yNTMuNDgtLjM2NyAzLjUzMi0yLjU0OSA4LjI2LTIuNDIxIDEyLjM0NS0xLjY2IDQuNTU5Ljg0NyAzLjYxNCA1LjIzOC41MTQgNy45MDV6IiBmaWxsPSIjYWZiYWRkIi8+PHBhdGggZD0iTTExMy45NjQgMjguNTA4Yy0uODIzLjcyMS0xLjcyIDEuMzc1LTIuNDg4IDIuMTc5LS45NTUuNTkxLTEuNyAxLjQ0LTIuNjQ3IDIuMDc3bC0uMzU4LjI0OGEzLjEgMy4xIDAgMDEtLjQ2NS4yMTIgNC4xNTcgNC4xNTcgMCAwMS0uODM5LjE3OCA5Ljg4MSA5Ljg4MSAwIDAwLTEuNjI5LjQgOS4yMzggOS4yMzggMCAwMS0xLjcyNS4xNjIuODEzLjgxMyAwIDAxLS4yMjItLjAzNi40MDcuNDA3IDAgMDEtLjEzLS4wNjZsLS4wMzktLjAyNy0uMTU2LS4xMDlhNC40NzIgNC40NzIgMCAwMC0uMzQ0LS4xNzkgOC41NTIgOC41NTIgMCAwMC0uNzMzLS4zMDcgNy4wNTEgNy4wNTEgMCAwMS0xLjU2MS0uNDc4IDEuODcgMS44NyAwIDAwLS44LS4yMjFjLS4yNzEtLjA2OS0uNTMyLS4xNzItLjgtLjI2OGE3LjgyNSA3LjgyNSAwIDAxLTEuNTUyLS43NTIgMy40NDkgMy40NDkgMCAwMS0xLjI3Ni0xLjI4OCAzLjk2NyAzLjk2NyAwIDAxLS4xNjktMS43ODlBMy4yMzEgMy4yMzEgMCAwMTk2LjUgMjYuOGExNy45IDE3LjkgMCAwMTEuODU2LTIuOCAxMi44MjMgMTIuODIzIDAgMDEyLjQ5NC0yLjIyMSA5Ljg5MSA5Ljg5MSAwIDAxMi45NC0xLjY1OSAxMC4wNSAxMC4wNSAwIDAxMS42NDQtLjQyOGMuNTYxLS4wODMgMS4xMy0uMDYgMS42ODYtLjEyNXMxLjExOS0uMTEzIDEuNjgtLjEzNmE1LjgzNSA1LjgzNSAwIDAxMS42NzkuMDg5Yy41NTYuMDY3IDEuMTE3LjA3OCAxLjY3MS4xNThhMTUuNDM0IDE1LjQzNCAwIDAxMS42NDMuNDMyIDUuNyA1LjcgMCAwMS44MzcuMjc2IDMuMTggMy4xOCAwIDAxLjczOS41MDdjLjIxNS4yMS40NzIuMzc0LjY5MS42YTIuMTIyIDIuMTIyIDAgMDEuNDIyLjgyOSA0LjY3NCA0LjY3NCAwIDAxLjA1MSAxLjc4OCAzLjc4OCAzLjc4OCAwIDAxLS41MyAxLjY0OWMtLjMuNDg5LS41NjYuOTkyLS44ODQgMS40NzRhNy43MTQgNy43MTQgMCAwMS0xLjE1NSAxLjI3NXptLS41MjUtLjZhMTEuMjc3IDExLjI3NyAwIDAwMS4xMTYtMS4xMjEgMy42MDkgMy42MDkgMCAwMC44NjItMS4zMTNjLjEzOS0uNTA4LjM2Ni0uOTY0LjQ3Ni0xLjQ2YTIuMiAyLjIgMCAwMC0uMTg4LTEuNDJjLS4xLS4yMDktLjIyMi0uMzg5LS4zMTctLjZhMS4xMTQgMS4xMTQgMCAwMC0uNDIyLS41NzFjLS4yMTUtLjEyMy0uNDQ3LS4yLS42NjctLjMxNWE1LjQxMSA1LjQxMSAwIDAwLS42ODctLjMzMmMtLjQ4NC0uMTczLTEuMDcxLS4wODMtMS42LS4yMWExMy43NDcgMTMuNzQ3IDAgMDAtMS42MDgtLjI3MWMtMS4wODcuMDMxLTIuMTYxLS4yMDktMy4yNDctLjExMmE3LjggNy44IDAgMDAtMS41ODIuMzRjLS41MTkuMTIxLTEuMDQuMjI1LTEuNTQ1LjM4OWExMi4zNzEgMTIuMzcxIDAgMDAtMS41LjUxOSA4IDggMCAwMC0xLjQ2LjY3IDE2LjA2NCAxNi4wNjQgMCAwMC0yLjI2IDIuM2MtLjYzNC44MzktMS41NTMgMS41Ni0xLjc0MiAyLjY1YTUuMzE3IDUuMzE3IDAgMDEtLjQ0MiAxLjQ2OC44NzguODc4IDAgMDAtLjAxMS43MjVjLjEuMjI3LjI0My40LjMzMS41OTNhMi43MyAyLjczIDAgMDAuOTMzIDEuMDEgOC4yMiA4LjIyIDAgMDAxLjQxMS42NjRjLjI0OC4xLjUwOS4xNzQuNzYuMjhhMS42ODYgMS42ODYgMCAwMC43Ny4yOTIgNS40MzEgNS40MzEgMCAwMTEuNTc1LjU1OWMuMjYyLjEuNTIzLjIxNC43NzguMzQ0bC4zOC4yLjE4OS4xMDljLjExOS4wNi0uMDM1IDAgLjA2NC4wMTlhMTUuODQ4IDE1Ljg0OCAwIDAwMS41ODUtLjI0MyA3LjYyNiA3LjYyNiAwIDAwMS41OTQtLjM4MmMuMjU2LS4xLjUxMy0uMTkxLjc2Mi0uMjY2YTIuNzI2IDIuNzI2IDAgMDAuMzIzLS4xbC4zNDUtLjJBMTAuNTIzIDEwLjUyMyAwIDAwMTExIDMwLjE0Yy44NzgtLjY2NiAxLjYxMi0xLjQ5NiAyLjQzOS0yLjI0eiIgZmlsbD0iI2FmYmFkZCIvPjxnIG9wYWNpdHk9Ii40IiBmaWxsPSIjN2I4ZWQwIj48cGF0aCBkPSJNMTEzLjIzMyAyOC42MThjLS40NDIuMzktLjg4NS43OS0xLjMzMSAxLjE4NGEyNC4xIDI0LjEgMCAwMS0zLjY0MiAyLjgxIDE5LjMzNSAxOS4zMzUgMCAwMS00LjU2OS45MzhjLTIuNDA1LTEuNTMyLTcuNzIzLTEuNC03LjQ2Ni00Ljg3OS4xNy0yLjI4OCAyLjMtNC44NTYgNC4xMzgtNi4zNDNhMjIuNjY4IDIyLjY2OCAwIDAxMTIuODcgNi4yOXoiLz48cGF0aCBkPSJNMTEzLjYzMiAyOC42MzFhMTMuNjMxIDEzLjYzMSAwIDAxLTEuNSAxLjQxOGMtLjI0LjE3Ny0uMzkyLjQ1NC0uNjM3LjYyOC0uMjMuMTkxLS41MTUuMzE2LS43MzkuNTE1bC0xLjM1OCAxLjJhOC4zMTMgOC4zMTMgMCAwMS0uNzM4LjU0MiAxLjUxOCAxLjUxOCAwIDAxLS41LjIxNGwtLjQ2Ni4wOTFhNC42NzMgNC42NzMgMCAwMC0uODY3LjI3NCA0LjI1OSA0LjI1OSAwIDAxLS44ODMuMTc1Yy0uNi4wNzItMS4xOS4xMjMtMS44LjIwOGwtLjI0My4wMThoLS4xNDNjLS4wNDItLjAwNi0uMDU5IDAtLjEyMy0uMDEyYS41NDYuNTQ2IDAgMDEtLjEzNC0uMDUybC0uMDI0LS4wMWEzLjg3OCAzLjg3OCAwIDAwLS4zODMtLjE1NCAzIDMgMCAwMS0uNzQ1LS40MDhjLS41NjYtLjEyMy0xLjExMi0uMzI2LTEuNjc3LS41MDdsLTEuNy0uNTdjLS42LS4xNDQtMS4wMzMtLjY2Ni0xLjYxOC0uODgxYTIuMjY3IDIuMjY3IDAgMDEtMS4xMjUtMS40ODcgMy4xMzcgMy4xMzcgMCAwMS0uMDkzLTEuODQzIDYuMzczIDYuMzczIDAgMDEuNjY0LTEuNjljLjMxNy0uNTE0LjYyNS0xLjAyNS45MzMtMS41NDZhOS43IDkuNyAwIDAxMi40MDctMi43bC4wNTYtLjA0MWEuMjQyLjI0MiAwIDAxLjIxLS4wMzdjMS4xOTMuMzUyIDIuNDgzLjIyNyAzLjY0LjcyNi41NzUuMjI4IDEuMi4zMDYgMS43Ni41OWE5LjA0NiA5LjA0NiAwIDAwLjgwOC40NjZjLjI3OC4xMzEuNTc0LjIyNi44NDYuMzcxYTMuNzM3IDMuNzM3IDAgMDAuOC40NiAyLjQxNSAyLjQxNSAwIDAxLjgyNy40MTQgMTEuMyAxMS4zIDAgMDAxLjUyOSAxLjAzOGMuNTU3LjI4NC45MTguODI1IDEuNDY0IDEuMTI2LjI1MS4xNzkuNTE4LjM0NC43NTIuNTQ3YTQuMTQzIDQuMTQzIDAgMDEuOC45MTd6bS0uOC0uMDI2YTEuMjI3IDEuMjI3IDAgMDEtLjUyNi0uMzIzYy0uMjI4LS4xOTEtLjQxOS0uNDI1LS42MzUtLjYzNC0uNC0uNDU3LTEuMDM3LS42MTItMS40NjgtMS4wMjlhNC45NDEgNC45NDEgMCAwMC0xLjU0My0uOTA2IDEuODkxIDEuODkxIDAgMDEtLjc0LS41MDggMi40MDggMi40MDggMCAwMC0uODEzLS4zNzZjLS4yNzctLjExMS0uNTA1LS4zMjYtLjc3NC0uNDU4YTUuMTUzIDUuMTUzIDAgMDAtLjg1OS0uMjY3Yy0uNTctLjE3NC0xLjA4LS41MTgtMS42NjItLjY2Ni0xLjE2Ni0uMjE0LTIuMjctLjg0Ny0zLjUtLjY5bC4zMTItLjA5MWMtLjgyMS44LTEuNjUgMS41ODgtMi40NTIgMi40MjdhMy4yMzYgMy4yMzYgMCAwMC0uOTUyIDEuNDM0IDkuNDA3IDkuNDA3IDAgMDAtLjUgMS42IDMuNjc0IDMuNjc0IDAgMDAtLjA4NCAxLjU2M2MuMjExLjUyMS43OTMuNjA3IDEuMDc2IDEuMDg5YS44NTEuODUxIDAgMDAuNzE3LjQgMi4yODggMi4yODggMCAwMS44Mi4yMzIgMTEuMzQgMTEuMzQgMCAwMDEuNjQ0LjYgNy40NDQgNy40NDQgMCAwMTEuNjc3LjY3IDIuMDg1IDIuMDg1IDAgMDEuODY3LjMyN2MuMTMuMDkuMjU4LjE4Ny4zODIuMjg3LS4xLS4wMTctLjAyMy4wMDcuMDQzIDBsLjItLjAwOWExMS4yODEgMTEuMjgxIDAgMDAxLjcyOS0uMjc4IDE1LjI0OCAxNS4yNDggMCAwMDEuNzA5LS40MDhjLjEzNC0uMDU2LjI2OS0uMTEuMzkxLS4xNzRhMi41MzcgMi41MzcgMCAwMC4zMTctLjJjLjI0OS0uMTQ2LjUtLjI4OS43NDUtLjQ0Ny40ODktLjMxNC45NzMtLjY0NSAxLjQzNS0xLjAwNy4yMjktLjE4NS40LS40MzkuNjEzLS42MzlzLjQ4LS4zNDYuNjg1LS41NTlhNi45MTMgNi45MTMgMCAwMTEuMTQ3LS45NjV6Ii8+PC9nPjxwYXRoIGQ9Ik0xMTQuOCA2Mi43OTFjLjA2OSAyMS40NzgtMTIuMTgxIDE4Ljg0Mi0zMS41IDM1LjE4Ny0xMi44NzYgMTAuODkzLTIyLjcgNi40NzctMjQuMjQ2LS43MzhhOS42NDggOS42NDggMCAwMS0uMi0yLjUyNEM1OS4xMTQgODkuNDEgNjMuNiA4My40NDQgNzQgODAuOTI1IDg0LjgzNyA3OC4zIDgwLjggNTkuNyA5OS42NDUgNTEuNGMuNDQ2LS4yLjktLjM4NiAxLjM3NC0uNTcxLjIwNi0uMDgyLjQwOC0uMTU1LjYwNS0uMjI3IDkuMzM1LTMuMzcgMTMuMTQ2IDEuODM2IDEzLjE3NiAxMi4xODl6IiBmaWxsPSIjZmZiZjRkIi8+PHBhdGggZD0iTTExNSA2Mi43OWEzMy44NTMgMzMuODUzIDAgMDEtMS40NTQgMTAuNSAxNi45NTQgMTYuOTU0IDAgMDEtMi40NzkgNC43MWwtLjgyMSAxLjA1OWMtLjI4MS4zNDYtLjYyMS42MzgtLjkyOS45NnMtLjYyNy42MzQtLjk1Mi45MzlsLTEuMDM1Ljg0YTg2LjEzMiA4Ni4xMzIgMCAwMS04Ljg2MSA1LjgxN2MtMy4wMjUgMS44MDktNS45OSAzLjcwNi04Ljg1OCA1Ljc0NS0yLjg5MSAyLjAyMS01LjUzOSA0LjMxLTguMzcyIDYuNDU2YTI0LjY4NCAyNC42ODQgMCAwMS05LjU0IDQuNTQ0bC0xLjMxNS4yMzYtMS4zMzYuMDcyYTcuMjcgNy4yNyAwIDAxLTEuMzM2LS4wNDcgNi41IDYuNSAwIDAxLTEuMzI0LS4xODUgOS4zMjIgOS4zMjIgMCAwMS03LjItMTIuMjIxIDE0LjggMTQuOCAwIDAxNi41ODEtOC4wODYgMjYuMzE1IDI2LjMxNSAwIDAxNC43NzctMi4zMDhjMS42NDUtLjY1MSAzLjQ0MS0uOTIgNS4wMjItMS42YTkuNTc4IDkuNTc4IDAgMDAzLjg2MS0zLjQgMjguMzE1IDI4LjMxNSAwIDAwMi40ODQtNC42MjEgODIuMTI5IDgyLjEyOSAwIDAxNC41ODctOS41NDggMjcuNyAyNy43IDAgMDE3LjAyOS03LjkxNUEzMC43MDkgMzAuNzA5IDAgMDExMDMgNDkuOTkzYTEyLjA0MiAxMi4wNDIgMCAwMTUuMy0uNDA3IDYuNiA2LjYgMCAwMTQuMzg4IDIuOTE4IDEzLjUyNSAxMy41MjUgMCAwMTEuODcyIDQuOTg4IDM0LjAzNCAzNC4wMzQgMCAwMS40NCA1LjI5OHptLS40IDBhMzMuNjUxIDMzLjY1MSAwIDAwLS40MzYtNS4yMjggMTMuMTQxIDEzLjE0MSAwIDAwLTEuODA4LTQuODM4IDYuMiA2LjIgMCAwMC00LjEzNS0yLjc1MyAxMS41NDYgMTEuNTQ2IDAgMDAtNS4xMTUuNCAzMC43ODcgMzAuNzg3IDAgMDAtOS4zMzQgNC42ODEgMjcuMzcgMjcuMzcgMCAwMC02Ljk0MiA3Ljc5NSA4MS44NzUgODEuODc1IDAgMDAtNC41ODcgOS41IDI4LjY0NCAyOC42NDQgMCAwMS0yLjUyNiA0LjY4IDkuOTMxIDkuOTMxIDAgMDEtNC4wMDggMy41MDljLTEuNjgyLjcxNy0zLjQxNC45NTktNS4wNTEgMS42YTI1Ljk4NyAyNS45ODcgMCAwMC00LjcxNyAyLjI2OCAxNC40MDYgMTQuNDA2IDAgMDAtNi40NTEgNy45IDkuMjQyIDkuMjQyIDAgMDAyLjQxIDkuNDk2IDkuMTM1IDkuMTM1IDAgMDA0LjU2NyAyLjIzOCA2LjE3IDYuMTcgMCAwMDEuMjc4LjE3MSA3LjQ0MyA3LjQ0MyAwIDAwMS4yOTIuMDQ3bDEuMy0uMDY0IDEuMjgyLS4yMjVhMjQuMzEgMjQuMzEgMCAwMDkuNDA5LTQuNDM0YzIuNzg5LTIuMTE0IDUuNDQzLTQuNDkzIDguMzU2LTYuNDg1IDIuODgtMi4wNDQgNS44NjQtMy45MzggOC44ODgtNS43NTFhOTAuMDA3IDkwLjAwNyAwIDAwOC43OTUtNS44MjFsMS4wMjEtLjgyNy45MzMtLjkyYy4zLS4zMTUuNjM3LS42LjkxMi0uOTM5bC44LTEuMDM0YTE2LjU0MSAxNi41NDEgMCAwMDIuNDI5LTQuNiAzMy40NzEgMzMuNDcxIDAgMDAxLjQzOC0xMC4zNjV6TTU5LjMxMyA4Ny41YTMuMjE2IDMuMjE2IDAgMDEuNzY4LTEuMDgybC4xMjUtLjExMWMuMDU2LS4wMjUuMTMtLjAzNC4xNTYtLjA4NGwuMjMzLS4yMzRjLjE0OC0uMTYzLjM5MS0uMjM0LjU0NC0uMzg4bC44MzctMS4wMjNhMS4yNjIgMS4yNjIgMCAwMS41MzMtLjM4OCAzLjkzMiAzLjkzMiAwIDAwLjQ3OC0uNDU2bC40OC42NGMtLjE1Ni4xNDItLjMuMy0uNDYuNDMzcy0uNC4xNzYtLjUyNi4zNTFjLS4zMDkuMjg0LS42MTMuNTczLS44OTIuODg1LS4xMjguMTY4LS4xOS4zOTQtLjM3OS41LS4wOTMuMDU2LS4yMTcuMDg1LS4zMDcuMTQ2LS4wNjUuMDEzLS4wNjguMDgtLjA5LjEyOWwtLjEzMy4wOTNhLjkyOC45MjggMCAwMC0uMjQ5LjJjLS4wNTcuMDg5LS4wNDQuMjMyLS4xMTcuMzA4LS4xMTcuMTc0LS4yMDguMzY1LS4zMzguNTI4eiIgZmlsbD0iI2ZmYmY0ZCIvPjxwYXRoIGQ9Ik02Ni40IDgxLjY1NWEyOS43NjggMjkuNzY4IDAgMDE1LjcyMy0yLjE1NSA5LjA1NSA5LjA1NSAwIDAwNC45MTItMi44MDggMTIuNTY2IDEyLjU2NiAwIDAwLjkxNi0xLjEzNSA5LjQ1NyA5LjQ1NyAwIDAwLjg0Ni0xLjIxMSAzMy42NyAzMy42NyAwIDAwMS4zNzYtMi42NDlsMi41NzItNS40NTlhMzUuMTI0IDM1LjEyNCAwIDAxNi41Mi0xMC4yMDggMjIuMjg0IDIyLjI4NCAwIDAxNC43ODItMy43OSAzNS4zMzUgMzUuMzM1IDAgMDE1LjQwOS0yLjgxM2wuMjk0Ljc0NGEzMi41MTQgMzIuNTE0IDAgMDAtNS4yNzUgMi43NDIgMjQuNzMyIDI0LjczMiAwIDAwLTQuNjY0IDMuNjU3IDMzLjM1OSAzMy4zNTkgMCAwMC02LjQ5IDkuOTM0Yy0uODE1IDEuODI4LTEuNDkgMy43MjMtMi40MDggNS41MzZhMjkuNTc3IDI5LjU3NyAwIDAxLTEuNSAyLjY2NWMtLjMuNDItLjUyNy44NzctLjgxOCAxLjNhMTEuNzExIDExLjcxMSAwIDAxLS45ODUgMS4yIDEwLjAyMyAxMC4wMjMgMCAwMS0yLjQyNiAxLjkzIDEwLjcgMTAuNyAwIDAxLTEuMzg3LjcxNSAxMy40OTEgMTMuNDkxIDAgMDEtMS40NzEuNDYxIDI4Ljk0MyAyOC45NDMgMCAwMC01LjU3NyAyLjA2MnoiIGZpbGw9IiNmZmJmNGQiLz48cGF0aCBkPSJNMTE0LjggNjIuNzkxYy4wNjkgMjEuNDc4LTEyLjE4MSAxOC44NDItMzEuNSAzNS4xODctMTIuODc2IDEwLjg5My0yMi43IDYuNDc3LTI0LjI0Ni0uNzM4YTkuNjQ4IDkuNjQ4IDAgMDEtLjItMi41MjQgMTkuNTEzIDE5LjUxMyAwIDAxOC40NjQtMy45ODNjNC4zODItLjYgOC45NzUtLjI1OCAxMy4zNzgtMS4xNDIgOC4zODctMS42ODIgMTkuMDg3LTEwLjM2NSAxNy4zMTQtMTkuOTM3LS44NzEtNC43LTIuNDEyLTguNjc0LS43LTEzLjQ1MWEyMy4wMDkgMjMuMDA5IDAgMDEyLjMzNS00LjhjLjQ0Ni0uMi45LS4zODYgMS4zNzQtLjU3MS4yMDYtLjA4Mi40MDgtLjE1NS42MDUtLjIyNyA5LjMzNS0zLjM3MyAxMy4xNDYgMS44MzMgMTMuMTc2IDEyLjE4NnoiIGZpbGw9IiNmZmFhMTAiIHN0cm9rZT0iI2ZmYWExMCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIuNSIvPjxwYXRoIGQ9Ik0zOC4xMTMgODQuNjU5YTE3LjI2NSAxNy4yNjUgMCAwMS0zLjIwNyAzLjYxNiAyOS4zIDI5LjMgMCAwMS0zLjY3MiAyLjcwOCAxMi4xNzIgMTIuMTcyIDAgMDEtMS41MTMuODEzYy0zLjU4OSAxLjY0NS03LjczOCAxLjc4NS0xMS4wOTMgMy45OS0yLjY1MSAxLjc0NC00LjU3MyA1LjE3OC04LjE4MSA0Ljg5LTMuNTU1LS4yODQtNS4yNzYtMy40MjMtNC4yNTUtNi42NTMgMS4zOTItNC40MjUgNy40NzctMy45MTUgMTAuNjItNi41MjhhNDEuODIxIDQxLjgyMSAwIDAwNC41LTQuODcxYy4zMTgtLjM3NC42NTEtLjc0NS45OC0xLjFhMTMuNjczIDEzLjY3MyAwIDAxNC41MjctMy40OCA4LjAzNiA4LjAzNiAwIDAxMS42OTQtLjUzYzQuMTU0LS44MTQgMTMuNTY0Ljk3NiA5LjYgNy4xNDV6IiBmaWxsPSIjYWZiYWRkIi8+PHBhdGggZD0iTTM4LjQ0OSA4NC44NzVhMjEuMjE4IDIxLjIxOCAwIDAxLTMuNzEgNC4wMjkgNDIuNDg5IDQyLjQ4OSAwIDAxLTQuNSAzLjExMiA5Ljk3NSA5Ljk3NSAwIDAxLTIuNTYgMS4wMDhjLS44ODguMjEtMS43MzYuNTI2LTIuNi43NzdhMjUuMzkxIDI1LjM5MSAwIDAwLTUuMDUgMS41ODcgOS4zMTYgOS4zMTYgMCAwMC0yLjEyOSAxLjQ3N3EtLjUzLjM4OC0xLjA1NS44MDhjLS4zNDcuMjgzLS41OTEuNjc5LS45NDkuOTYyYTEyLjU0MiAxMi41NDIgMCAwMS0yLjIyOCAxLjY0MiA1Ljc2OCA1Ljc2OCAwIDAxLTIuNzMuNzQyIDQuOSA0LjkgMCAwMS0yLjcxOS0uNzA5IDYuNTYyIDYuNTYyIDAgMDEtMS4xLS44NzcgNC41NzkgNC41NzkgMCAwMS0uODk1LTEuMDk1IDQuOTkxIDQuOTkxIDAgMDEtLjQ3OS0yLjczOCA2Ljg2MSA2Ljg2MSAwIDAxLjcyNS0yLjY1QTUuMDUzIDUuMDUzIDAgMDE4LjQwOCA5MWExMS43IDExLjcgMCAwMTIuNDktMS4xIDIyLjk3MiAyMi45NzIgMCAwMDQuOS0yLjA2NyAxMC40IDEwLjQgMCAwMDEuOTU4LTEuNzExYy41ODUtLjY1OSAxLjIzOS0xLjI2NSAxLjgyOC0xLjkzOSAxLjItMS4zMjEgMi4xODUtMi44NTkgMy41NDItNC4xMDdhMjUuNjQ5IDI1LjY0OSAwIDAxMi4xNzQtMS43MjIgNi44OCA2Ljg4IDAgMDEyLjU5My0xLjA0MyA5LjIwOCA5LjIwOCAwIDAxMi43NTEtLjMgMjIuNiAyMi42IDAgMDEyLjczOC4xOSAxNi41NTUgMTYuNTU1IDAgMDEyLjYyOC44MjEgNS41MTggNS41MTggMCAwMTIuMzYyIDEuNDg5IDMuOTg2IDMuOTg2IDAgMDExLjAyMSAyLjY3NyA1LjU4NyA1LjU4NyAwIDAxLS45NDQgMi42ODd6bS0uNjczLS40MzNhNS41ODUgNS41ODUgMCAwMC45MDUtMi4zIDIuNzA5IDIuNzA5IDAgMDAtLjExLTEuMTgyIDIuNjU0IDIuNjU0IDAgMDAtLjY5LS45ODIgOC43NjkgOC43NjkgMCAwMC0yLjEwOC0xLjM2MyAxMC41NDkgMTAuNTQ5IDAgMDAtMi41MzQtLjU3MyAxMi4yNTggMTIuMjU4IDAgMDAtNS4xNjYtLjA1MSAxNS42MSAxNS42MSAwIDAwLTIuMzE5IDEuMSA4LjQ4MyA4LjQ4MyAwIDAwLTIuMDYzIDEuNTg4IDQzLjg1NiA0My44NTYgMCAwMC0zLjYxMyAzLjkyMSAxNC45NTggMTQuOTU4IDAgMDEtMS43MjIgMi4xMTEgOS44MTMgOS44MTMgMCAwMS0yLjE3MyAxLjc2MWMtMS42MzYgMS4wMDctMy41MTYgMS4wODktNS4xMzggMS44MzZDOS40MjYgOTEgNy44MTEgOTEuOCA2Ljk3IDkzLjIzOGE0LjQwOSA0LjQwOSAwIDAwLS43MzkgMi4zODUgNS4yMjMgNS4yMjMgMCAwMC42ODYgMi4zNDcgNC45MzYgNC45MzYgMCAwMC41ODMgMS4wNzcgMi40MTEgMi40MTEgMCAwMDEuMDQxLjY1NiA4LjkgOC45IDAgMDAyLjM4NS40OTRjMS42NjYuMDg4IDMuMTI0LTEuMDA1IDQuNDMtMi4xNTguMzEtLjMxNS43MzMtLjUxOSAxLjA1MS0uODM4cy42MzctLjY0NS45NzEtLjk2YTEyLjI4NSAxMi4yODUgMCAwMTIuMzc0LTEuNDE1YzMuMzA5LTEuNTkgNy4wMjYtMS44NTggMTAuMTQ1LTMuNTFsMS4xNjktLjU5NXEuNTcyLS4zNDUgMS4xMzEtLjcwOWExMi42NTIgMTIuNjUyIDAgMDAyLjA5MS0xLjY0NSAxOSAxOSAwIDAwMS45MjItMS44MiAxNy42ODQgMTcuNjg0IDAgMDAxLjU2Ni0yLjEwNXoiIGZpbGw9IiNhZmJhZGQiLz48ZyBvcGFjaXR5PSIuNCIgZmlsbD0iIzdiOGVkMCI+PHBhdGggZD0iTTM4LjExMyA4NC42NTlhMTcuMjY1IDE3LjI2NSAwIDAxLTMuMjA3IDMuNjE2IDI5LjMgMjkuMyAwIDAxLTMuNjcyIDIuNzA4IDEyLjE3MiAxMi4xNzIgMCAwMS0xLjUxMy44MTNjLS4yMTktMy4yODMuMzYzLTYuMzg4LS45MTUtOS43NjZhMjcuMDE4IDI3LjAxOCAwIDAwLTEuOTgyLTMuOTkgOC4wMzYgOC4wMzYgMCAwMTEuNjk0LS41M2M0LjE0OS0uODEgMTMuNTU5Ljk4IDkuNTk1IDcuMTQ5eiIvPjxwYXRoIGQ9Ik0zOC40NDkgODQuODc1QTkuNzU0IDkuNzU0IDAgMDEzNy41NzUgODZjLS4zNDkuMzI0LS41MjYuOC0uOTE1IDEuMDg4LS43NjguNTY5LTEuMjkyIDEuMzc3LTIuMDA1IDIuMDA1YTUuODI2IDUuODI2IDAgMDEtMS4xNTMuODIyYy0uNC4yNTItLjcuNjQ0LTEuMTExLjg3My0uNzkxLjUtMS43Ljg0Ni0yLjUyNCAxLjMyNWEuMzI5LjMyOSAwIDAxLS40OTItLjI0MWwtLjAwNy0uMDU3YTYuODYxIDYuODYxIDAgMDEtLjExNy0uOTA1IDQuOSA0LjkgMCAwMC4wNzgtLjkwNiAzLjAxIDMuMDEgMCAwMS0uMDQ0LS45bC4wMjctLjg5NGExNi44MzIgMTYuODMyIDAgMDAtLjAwNy0xLjc3NGMtLjA5MS0uNTc5LjE0Ni0xLjE5NC0uMDU2LTEuNzY0YTExLjExNCAxMS4xMTQgMCAwMS0uMzEyLTEuNzM2IDkuMDY3IDkuMDY3IDAgMDAtLjY0OC0xLjY0NSAyNi45OTIgMjYuOTkyIDAgMDAtLjc1NC0xLjYwOCA3LjUyOCA3LjUyOCAwIDAwLS44OTMtMS41NDMuMTg3LjE4NyAwIDAxLjAzNy0uMjYybC4wMi0uMDEzLjA0LS4wMjJhNi44NjcgNi44NjcgMCAwMTQuMzQtLjgwOCAxNi4zNDEgMTYuMzQxIDAgMDEyLjIyMS4wNjVjLjcuMjY0IDEuNDc3LjIzMiAyLjE3Mi41NDdhOC41MjYgOC41MjYgMCAwMDEuMDA3LjUxN2MuMTc0LjA3My4zNDUuMTUyLjUxNi4yMzVhNC4zMDggNC4zMDggMCAwMS40NTMuMzQ5Yy4yNzUuMjU3LjcuMzQ5LjkzNC42ODFhMy44MTYgMy44MTYgMCAwMS42MDYgMS4wMTIgNC41NTggNC41NTggMCAwMS4zNzQgMS4xMjUgMy4yNzQgMy4yNzQgMCAwMS0uMTMyIDEuMTY0IDYuNjYgNi42NiAwIDAxLS4yNjYgMS4xMjQgOC45OTIgOC45OTIgMCAwMS0uNTE1IDEuMDIxem0tLjY3My0uNDMzYTguMjIzIDguMjIzIDAgMDAuNS0uOSAzLjMgMy4zIDAgMDAuMzkxLS45MzEgNS4wMjQgNS4wMjQgMCAwMC0uMDM4LS45NzEgMS44MTIgMS44MTIgMCAwMC0uMjE3LS45MTIgMi43MTggMi43MTggMCAwMC0uNjUtLjdjLS4yNDctLjE4OS0uMzU5LS41ODItLjY4My0uNzIyYTIuOTU1IDIuOTU1IDAgMDEtLjg5NC0uNSAyLjQzMiAyLjQzMiAwIDAwLS45OTEtLjMyMiA3LjQ2NCA3LjQ2NCAwIDAwLTIuMDMxLS41MzEgMTMuMzUzIDEzLjM1MyAwIDAwLTIuMS0uMzA3IDUuNSA1LjUgMCAwMC0xLjA1NS4xNDljLS4zNDcuMDU5LS42OTMuMDY2LTEuMDMzLjExOWExNi40NzQgMTYuNDc0IDAgMDAtMi4wMTcuNDMxbC4xNTMtLjQ3YTUuNzE3IDUuNzE3IDAgMDAuODc1IDEuNTc5IDEyLjIxOSAxMi4yMTkgMCAwMS44NyAxLjZjLjI3LjU0OS4yOTQgMS4xOTQuNTQxIDEuNzU2LjIyNC41NjQuNjUyIDEuMTI0LjQ2OCAxLjc3OS0uMTI2LjYyOS4zODYgMS4xOTIuMjkyIDEuODE2LS4wMTcuNjEyLS4wNDUgMS4yMTUtLjA0MiAxLjgxNWwtLjAyMy45QTIuOTUyIDIuOTUyIDAgMDEzMCA5MGEzLjM0NSAzLjM0NSAwIDAwLjA3Ljg4NWMwIC4yOTUtLjAzOS41OS0uMDU2Ljg4N2wtLjQxMy0uMjQ3YTEzLjI0NyAxMy4yNDcgMCAwMDIuMzc4LTEuMzQ5IDExLjM1OSAxMS4zNTkgMCAwMDEuMTI5LS43OTMgOS4zMjQgOS4zMjQgMCAwMTEuMDMyLS45MTRjLjM2NC0uMjc2LjcyNS0uNTYzIDEuMDc0LS44NThhMy45ODMgMy45ODMgMCAwMC45NDUtLjk5M2MuMjQ1LS4zOTEuNjYxLS42MzIuODg2LTEuMDM3LjI0Ni0uMzgxLjUwNC0uNzUuNzMxLTEuMTM5eiIvPjwvZz48cGF0aCBkPSJNMTQ0LjE5IDI1LjYxYS4yNDkuMjQ5IDAgMDEtLjA3LjA0IDQwLjUyMSA0MC41MjEgMCAwMC01LjQ5IDMuMDdjLTMuMSAyLjMyLTMuOTggOC4wNS04LjM2IDguMzYtMy4yMS4yMi01LjcyLTIuMDYtNS4yLTUuNC41My0zLjM5IDQuMTItNC40IDYuMzItNi40NiAyLjAyLTEuOSAzLjEyLTQuNDIgNC40Ni02Ljc5YTEwNS45NDYgMTA1Ljk0NiAwIDAxOC4zNCA3LjE4eiIgZmlsbD0iI2FmYmFkZCIvPjxwYXRoIGQ9Ik0xMTcuODU1IDM3LjAzM2E1MC45MzYgNTAuOTM2IDAgMTA0LjI2NSA3MS45MDggNTAuNjcxIDUwLjY3MSAwIDAwLTQuMjY1LTcxLjkwOHptOS43IDQ5LjYzOGMtMi4xNzYgNi44OTItNS4xNzUgMTMuMjk1LTEwLjAxMiAxOC43NDItNC4yMjUgNC43NTMtOS41MzMgOS4zLTE1LjczOSAxMS4xMTktMy45NzggMS4xNy04LjAyIDIuOTY2LTEyLjEzNCAzLjYwN2E0NS4zMjggNDUuMzI4IDAgMDEtOC43OTMuMjEyIDQ0LjUxNiA0NC41MTYgMCAwMS0yNi45NjctMTEuMTY0Yy04LjctNy43MjktMTIuOTQzLTE3LjM3OS0xNC40NDYtMjguNjE2YTM3LjIgMzcuMiAwIDAxLS4xNzUtMTAuNTY0YzEuMjI1LTguNDkgNS4xNDYtMTguMDM2IDEwLjg0Ny0yNC40NTMgOS45LTExLjE1MiAyNy44MTctMTguNzM1IDQyLjY4Ni0xNC42MzlhNzAuNjc0IDcwLjY3NCAwIDAxOC44NCAyLjU5NGM0LjM2IDEuODYzIDguNTc3IDUuMTM4IDEyLjEwNyA4LjI3MWE0Ny45NDMgNDcuOTQzIDAgMDE5LjE4NyAxMC42MzYgMjguMTU1IDI4LjE1NSAwIDAxMi4wNjUgMy42MDggMzguNSAzOC41IDAgMDEyLjQ1MSA3Ljg1M2MxLjQ3MiA3LjA3NyAyLjI5NCAxNS43OTkuMDg3IDIyLjc5NHoiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNMTIzLjMgMTA5Ljk4NmE1MS41NTQgNTEuNTU0IDAgMDEtMTYuMzY2IDEyLjMwNmMtMS41NjYuNy0zLjIgMS4yMzEtNC43NjkgMS45MjJsLTQuODY1IDEuNjc4Yy0xLjY1Ny40NDEtMy4zMzcuODE0LTUuMDEzIDEuMjI4bC01LjEyNi43NDFhNDkuNTUzIDQ5LjU1MyAwIDAxLTIwLjQxNC0yLjg0MyA1My44IDUzLjggMCAwMS0xNy42NjctMTAuNTQ2bC0zLjY2My0zLjYzOWMtMS4xMjUtMS4zLTIuMi0yLjY0OS0zLjI5LTMuOTc3LS45OTUtMS40LTEuOS0yLjg3MS0yLjg0NC00LjMtLjg1NS0xLjQ4OC0xLjYtMy4wMzgtMi40MDYtNC41NTItLjctMS41NjMtMS4zLTMuMTc2LTEuOTQ2LTQuNzU5LS41MzYtMS42MjUtLjk3OC0zLjI4Mi0xLjQ2OC00LjkyLS4zNjgtMS42Ny0uNjM0LTMuMzYyLS45NDUtNS4wMzhsLS40NDMtNS4xYy4wMjktMS43LjAxMy0zLjQwNiAwLTUuMTA2LjE1My0xLjY5NC4yNTYtMy4zOTQuNDMzLTUuMDg1LjMtMS42NzUuNTg2LTMuMzU2Ljk2NC01LjAxMi40OTQtMS42MjguOTI0LTMuMjc3IDEuNDc0LTQuODg0LjY1Ni0xLjU2OSAxLjI1OS0zLjE2IDEuOTc2LTQuNy44MTUtMS40OSAxLjU1NS0zLjAyIDIuNDA5LTQuNDgyLjk1Ny0xLjQgMS44MjEtMi44NjEgMi43NzMtNC4yNjNsMy4xNDYtNGE1MS4zODQgNTEuMzg0IDAgMDExNi4xNzMtMTIuMTMzIDUzLjA0IDUzLjA0IDAgMDE0LjY4LTEuOTc3IDgxLjE5IDgxLjE5IDAgMDE0LjgtMS42ODkgNDYuNjA4IDQ2LjYwOCAwIDAxNC45NjEtMS4yMiA1Mi41MTIgNTIuNTEyIDAgMDE1LjA4Mi0uNiA1Mi40NjcgNTIuNDY3IDAgMDEzNy45ODUgMTIuNzcybDMuNjIxIDMuNjY5YzEuMTEzIDEuMzA3IDIuMTY1IDIuNjY2IDMuMjQ1IDQgLjk5MyAxLjQgMS44ODkgMi44NjIgMi44MzMgNC4yODkuODY1IDEuNDc1IDEuNjU2IDMgMi40ODUgNC41LjczNiAxLjU0NCAxLjM2IDMuMTQzIDIuMDQzIDQuNzE1LjU3MiAxLjYxMyAxLjA0NSAzLjI2MyAxLjU3IDQuOS40IDEuNjY2LjcyMyAzLjM1MSAxLjA4NCA1LjAyOC4yMzUgMS43LjM2MiAzLjQxMy41MDcgNS4xMThsLS4wNjEgNS4xMzYtLjU0OSA1LjFjLS4zMTEgMS42NzctLjU3MSAzLjM2OC0uOTI5IDUuMDM1LS40ODEgMS42MzgtLjg4IDMuMy0xLjM5MyA0LjkzMWE1Mi4zMjYgNTIuMzI2IDAgMDEtMTAuMDg3IDE3Ljc1N3ptLTIuMzU1LTIuMDkxYTQ5LjU4MSA0OS41ODEgMCAwMDkuNjM0LTE2LjY1NWMuNS0xLjUzMS44ODEtMy4xIDEuMzMxLTQuNjQ1LjMzNC0xLjU3NC41NzMtMy4xNy44NjktNC43NTEuMTUtMS42LjE4Ny0zLjIxNi4yOS00LjgxNmwtLjE2OS00LjgxYy0uMjItMS41OS0uNDE2LTMuMTc2LS41NjgtNC43Ny0uMzE4LTEuNTY3LS41OTUtMy4xNDYtLjkzOS00LjcxLS40NjgtMS41MzEtLjg5NC0zLjA3Ny0xLjM4Ny00LjYtLjYwOS0xLjQ4MS0xLjE1Ni0yLjk5NC0xLjgxMS00LjQ1OWE0OC4yNzIgNDguMjcyIDAgMDAtMTEuNDU1LTE1LjM5NCA0My45MiA0My45MiAwIDAwLTE2LjUwNy05LjkyMSA0OS45NTMgNDkuOTUzIDAgMDAtMTkuMTA2LTIuMzU1IDQ5LjE3IDQ5LjE3IDAgMDAtNC43ODkuNTg2Yy0xLjU5LjI0NS0zLjE3Mi41MjMtNC43NjguOGEzMC45MjggMzAuOTI4IDAgMDAtOS4xMzQgMy4yMTIgNTMuNDM0IDUzLjQzNCAwIDAwLTE0Ljk4NyAxMi4wMDZjLTEuMDE4IDEuMjM1LTIuMDgzIDIuNDM2LTMuMTIzIDMuNjY1YTc1LjMyOCA3NS4zMjggMCAwMC0yLjcxOSAzLjk4M2MtLjc4MyAxLjQtMS40NzggMi44NTctMi4yMDkgNC4yODgtLjY0MiAxLjQ3Mi0xLjE1NSAzLTEuNzU2IDQuNDg4LS41MDggMS41MjItLjkgMy4wODMtMS4zNjIgNC42MjEtLjM1IDEuNTY3LS41ODQgMy4xNTktLjkzNCA0LjczMS0uMjExIDEuNTkzLS4zNDcgMy4yLS41IDQuOC0uMDIuOCAwIDEuNjExIDAgMi40MTZsLjA4MyAyLjQxNC43MjIgNC43N2MuMzY4IDEuNTYzLjY4OSAzLjEzMSAxIDQuN2wuNjU5IDIuMzEzYy4yMTYuNzcyLjM4MSAxLjU2NS42MzggMi4zMjYuNTczIDEuNSAxLjA5MyAzLjAzIDEuNzE2IDQuNTIuNzI0IDEuNDM4IDEuMzcyIDIuOTMzIDIuMjIyIDQuMzA3LjkxOCAxLjMzMiAxLjc4NSAyLjcgMi43NCA0IDEuMDE0IDEuMjU4IDEuOTY2IDIuNTc0IDIuOTkzIDMuODM0bDMuMzU0IDMuNTUxYTQ0LjAyMyA0NC4wMjMgMCAwMDE2Ljc0OCA5Ljg3NSA1MS4xNTggNTEuMTU4IDAgMDAxOS4yNTEgMi4zMjZsNC44NDUtLjQ0NmMxLjU5Mi0uMzEgMy4yLS41ODEgNC43ODYtLjkxOCAxLjU1MS0uNDc5IDMuMTQ0LS44NDggNC42NjktMS40MTMgMS40ODEtLjY3OSAyLjk4Ny0xLjMgNC40MjktMi4wMzlhNTAuOTI5IDUwLjkyOSAwIDAwMTUuMjQyLTExLjgzem02Ljg4OSAzLjcwNWMyLjkgMi4zNDcgNS43NjQgNC43NCA4LjQ0IDcuMzQzIDEuMzQ2IDEuMjkyIDIuNiAyLjY4NCAzLjk3NSAzLjk0NyAxLjM1IDEuMjg4IDIuNzk1IDIuNDY5IDQuMjUxIDMuNjM3czIuOSAyLjM0NSA0LjI2NyAzLjYxOSAyLjcgMi41NzcgNC4wNDkgMy44NjRjLjY2Ny42NTMgMS40IDEuMjM3IDIuMDkzIDEuODU1bDIuMiAxLjczN2MuNzQyLjU2OCAxLjQxNyAxLjIxMyAyLjEyMSAxLjgyNHMxLjQgMS4yMzUgMi4wNjUgMS44ODdhMS44IDEuOCAwIDAxLTIuMzQ0IDIuNzMybC0uMDQ5LS4wMzdjLS43NDgtLjU2Mi0xLjQ3LTEuMTUyLTIuMTg3LTEuNzQ5cy0xLjQ1NC0xLjE3MS0yLjE0Mi0xLjhjLS43MDYtLjYwOS0xLjM4LTEuMjU0LTIuMDYyLTEuODlzLTEuMzE2LTEuMzI2LTIuMDIzLTEuOTM0Yy0yLjgwOS0yLjQ1Mi01LjYtNC45MjEtOC4yMzYtNy41NzItMS4zMjYtMS4zMTUtMi42NTUtMi42MjYtNC4wNjEtMy44NXMtMi44NTItMi40LTQuMjY0LTMuNjIyYy0xLjQ1MS0xLjE3My0yLjctMi41NzItNC4wODUtMy44MjRhNDEuMjQyIDQxLjI0MiAwIDAwLTQuNC0zLjQ3IDEuOCAxLjggMCAwMTItM3EuMDY4LjA0Ni4xMzEuMXoiIGZpbGw9IiMwODExNDAiLz48cGF0aCBkPSJNMTcwIDE0MS44MThhNi45NDMgNi45NDMgMCAwMS0xLjY3IDQuMzg1Yy0xLjEgMS40Ni0zLjI2OCA1LjA4My01LjA2IDUuNjIyLTIuNjkzLjgwOC02LjUtMi43NDYtOC4zMTctNC4xLTQuNjc1LTMuNDg0LTQuNDA2LTMuMDI0LTguNjc2LTYuOTgyLTQuMzEtNC04LjUyOS04LjA4OS0xMi43NzgtMTIuMTUtMi4zLTIuMTkzLTkuMjUzLTUuODgzLTcuMzE4LTEwLjEzNC45NzYtMi4xMSA0Ljg3My01LjEyOSA2LjctNi40OTMgNS44MzItNC4zNjEgMTcuMTQ1IDEwLjE4MyAyMC45ODYgMTMuNTkzIDQuNTU1IDQuMDQ0IDQuNTI4IDMuNjQ4IDkuMDgyIDcuNjkyIDIuODMxIDIuNTE4IDYuOTI5IDQuOTc1IDcuMDUxIDguNTY3eiIgZmlsbD0iIzA4MTE0MCIvPjxwYXRoIGQ9Ik0xNzAuMTk0IDE0MS44MTFhNi42MzkgNi42MzkgMCAwMS0xLjE3NiAzLjczNSAyMTQuMjUgMjE0LjI1IDAgMDEtMi4yMzcgMy4xNiAxNC4yMTIgMTQuMjEyIDAgMDEtMi42MzEgMi44OSAyLjkyIDIuOTIgMCAwMS0xLjk0OC41NjUgNS41NzggNS41NzggMCAwMS0xLjkzNi0uNWMtMi40MjktMS4wODItNC4yOTItMi45NDUtNi4zNjUtNC40MjVhNjQuNjM3IDY0LjYzNyAwIDAxLTYuMDc1LTQuNzg1Yy0zLjc3Ny0zLjUtNy40NDktNy4xLTExLjE2Ny0xMC42NjRhNTYuNTMzIDU2LjUzMyAwIDAwLTUuNzU5LTUuMTA2IDI5LjA5MSAyOS4wOTEgMCAwMS0yLjk0Mi0yLjUxNyA3LjYyNyA3LjYyNyAwIDAxLTIuMTA1LTMuMjUyIDMuNiAzLjYgMCAwMS4wMjQtMS45NjcgNS4wNTQgNS4wNTQgMCAwMS45NTQtMS43MTMgMjEuMzg0IDIxLjM4NCAwIDAxMi43MjktMi43NTFjLjk3My0uODQ4IDEuOTkzLTEuNjM2IDMuMDEyLTIuNDIzYTQuNDQgNC40NCAwIDAxMy43MTItLjk2OCAxMC44NDEgMTAuODQxIDAgMDEzLjYyMSAxLjQzMyAyNi4zNDggMjYuMzQ4IDAgMDEzLjE3MyAyLjIzNCA2Ny42MTEgNjcuNjExIDAgMDE1LjY2MiA1LjI2OWwyLjY3MyAyLjc4NmMuODg1LjkzMiAxLjc1MyAxLjg4MiAyLjcgMi43MyAxLjg5NCAxLjc0MyAzLjkxMSAzLjMyMiA1LjkxMSA0Ljk1MSAxIC44MTcgMS45NTggMS42NzYgMi45MTUgMi41MzdzMS45NjYgMS42NDUgMi45NiAyLjQ2N2ExOS4zNjQgMTkuMzY0IDAgMDEyLjc5IDIuNzA3IDYuMTg2IDYuMTg2IDAgMDExLjUwNSAzLjYwN3ptLS4zOTMuMDEzYTUuOCA1LjggMCAwMC0xLjQwNy0zLjM4NyAxOC43ODMgMTguNzgzIDAgMDAtMi43My0yLjY1NmMtLjk4NS0uODE5LTIuMDA3LTEuNjA2LTIuOTg1LTIuNDU3bC0yLjkzLTIuNWMtMS45OC0xLjYyNS0zLjk5LTMuMjYxLTUuOS00Ljk4Ny0xLjkxOC0xLjc2LTMuNTg4LTMuNzA5LTUuMzgzLTUuNTUxYTU5LjY2OCA1OS42NjggMCAwMC01LjYxOC01LjI1MyAyNS45ODUgMjUuOTg1IDAgMDAtMy4xMzEtMi4yIDEwLjQ4NCAxMC40ODQgMCAwMC0zLjQ5NC0xLjM4MSA0LjE0IDQuMTQgMCAwMC0zLjQ3Ni44MzMgNDQuMDAyIDQ0LjAwMiAwIDAwLTIuOTg2IDIuNDIxIDIxLjA3NSAyMS4wNzUgMCAwMC0yLjY1OSAyLjczMSAzLjc3OCAzLjc3OCAwIDAwLS45IDMuMzc4IDcuMTMzIDcuMTMzIDAgMDAxLjk5MiAzLjEwOCAyOC43NzkgMjguNzc5IDAgMDAyLjkyMyAyLjQ2OCAyOC40MjYgMjguNDI2IDAgMDEyLjk5NSAyLjQ2N2wyLjc4NSAyLjY3MWMzLjggMy40NjcgNy40IDcuMTU3IDExLjE4NCAxMC42MzIuOTQzLjg3MyAxLjkgMS43MiAyLjkyMyAyLjVzMi4wOCAxLjUxMSAzLjExNCAyLjI3N2MyLjEwNiAxLjQ4MSAzLjk4IDMuMzE2IDYuMzE0IDQuMzQxIDEuMTI2LjQ4OCAyLjUuNzg3IDMuNTE0LjAxNWExMS43NTIgMTEuNzUyIDAgMDAyLjU1Ni0yLjhsMi4yLTMuMTU3YTYuMjU5IDYuMjU5IDAgMDAxLjA5OC0zLjUxM3oiIGZpbGw9IiMwODExNDAiLz48cGF0aCBkPSJNMTQxLjc1MiAxMTQuMDYyYTM1LjU0IDM1LjU0IDAgMDEtMi43MjYgMy4xMjMgMjMuNzE0IDIzLjcxNCAwIDAwLTIuODQgMy4wMjMgMzAuMDY2IDMwLjA2NiAwIDAxLTIuNzkyIDMuMDY1IDE1LjU2NiAxNS41NjYgMCAwMC0xLjMyMSAxLjYgMjEuNzM3IDIxLjczNyAwIDAxLTEuMzgxIDEuNTQ2LjkuOSAwIDAxLTEuMzY5LTEuMTdsLjAwOC0uMDExYTI1LjY1MyAyNS42NTMgMCAwMTIuNzQxLTMuMTE5Yy45MTEtMS4wNDIgMS44MzEtMi4wNzYgMi44NDItMy4wM2EzMy40MzcgMzMuNDM3IDAgMDAyLjc5Mi0zLjA3NCAyMC4yMzEgMjAuMjMxIDAgMDAyLjctMy4xNTMuOS45IDAgMTExLjU1OS45MS45MTMuOTEzIDAgMDEtLjA2My4wOTR6bTE0Ljk4NyAzNS4xMTRhMzkuMjEyIDM5LjIxMiAwIDAxMi4yLTMuMzU5IDI2Ljg1NiAyNi44NTYgMCAwMDIuMzctMy4zIDE5LjE0MiAxOS4xNDIgMCAwMTIuNTA2LTMuMjM5Yy40NjctLjUuODcxLTEuMDYzIDEuMy0xLjYwOWExMy4yOCAxMy4yOCAwIDAxMS40NjktMS40NzYuOS45IDAgMDExLjI2MyAxLjI3OWwtLjAzNi4wNDFhOTQuODY4IDk0Ljg2OCAwIDAxLTIuNjQyIDIuODg0Yy0uODI1IDEuMDIyLTEuNjExIDIuMDgyLTIuNDc1IDMuMWEyNS42NDMgMjUuNjQzIDAgMDAtMi4yODUgMy4zIDIxLjA3MyAyMS4wNzMgMCAwMC0yLjE5MSAzLjQwNy45LjkgMCAxMS0xLjYxMS0uODA3eiIgZmlsbD0iI2ZmYzc1NyIvPjxwYXRoIGQ9Ik0zOC44MzQgNjcuNjkxYy40NC0yLjc3OSAxLjM4Ni01LjQwOSAxLjk0Mi04LjE3M2E0My44OSA0My44OSAwIDAxMy40MjQtNy42NzIgMzMuNSAzMy41IDAgMDEyLjIzNi0zLjU2M0EzMC45IDMwLjkgMCAwMTQ5LjA2MyA0NWMuOTMxLTEuMDQ4IDEuODQ0LTIuMSAyLjg2OS0zLjA1M2wzLjEyOS0yLjc2N2E0NC45NDkgNDQuOTQ5IDAgMDEzLjM2Mi0yLjQ2N2MxLjE4MS0uNzI4IDIuMi0xLjcyOCAzLjQxOS0yLjRsMS44LTEuMDYzIDEuODYyLS45NjFjMS4yNjQtLjU5IDIuNS0xLjI1OSAzLjgyMi0xLjczMS42NjktLjIxIDEuMzIzLS40NjEgMi0uNjI4czEuMzQ5LS4zNzEgMi4wMTMtLjU5M2EzMS45MjQgMzEuOTI0IDAgMDE0LjA4Ni0uOTYyYy42OTEtLjExOCAxLjM5My0uMTU4IDIuMDg5LS4yMjcuNjkyLS4xMDYgMS4zODQtLjIgMi4wODItLjI2MiAxLjM5Mi0uMTgxIDIuOC0uMjI5IDQuMi0uMjc3YS43ODcuNzg3IDAgMTEuMDUzIDEuNTcyaC0uMWMtMS4zNDkuMDItMi43LjAzNi00LjAzOS4xODVhMTkuMTM2IDE5LjEzNiAwIDAwLTMuOTguNzA1Yy0uNjUxLjE3Ny0xLjMyNi4yMzItMS45ODEuMzkzbC0xLjk3OC40MzNhNDAuMDMzIDQwLjAzMyAwIDAwLTMuODc1IDEuMiAyOC43NzkgMjguNzc5IDAgMDAtNy4zMjcgMy41IDEwLjYgMTAuNiAwIDAxLTEuNzcgMSA1IDUgMCAwMC0uOTIxLjQ1MWMtLjI3OC4yLS41NDQuNDA5LS44MTYuNjEyLTEuMDgzLjgyNi0yLjAyNCAxLjgyMi0zLjA4NyAyLjY0OC0uNTMxLjQxNS0xLjEwOS43OC0xLjYxOCAxLjIyNWwtMS40MjQgMS40MjdjLS41LjQ1NC0uOTI2Ljk3OS0xLjQyIDEuNDQxYTEwLjI1OCAxMC4yNTggMCAwMC0xLjM0NyAxLjUgMjUuMTIzIDI1LjEyMyAwIDAxLTIuNDM1IDMuMjI4IDExLjI0MyAxMS4yNDMgMCAwMC0xLjEyMiAxLjY5M2MtLjQuNTUyLS43NjUgMS4xMjYtMS4xNTMgMS42OWEzMi43MzYgMzIuNzM2IDAgMDAtMy4xMTIgNy41NDQgMTkuMjgzIDE5LjI4MyAwIDAwLTEuMjEgMy45IDcxLjMzMyA3MS4zMzMgMCAwMC0uNzQ5IDQgLjc4Ny43ODcgMCAwMS0xLjU1Ni0uMjM5em04Mi45MDUgMzQuMjZsLTEuODU0IDIuMzA5YTIxLjA5MSAyMS4wOTEgMCAwMS0xLjk0NiAyLjIxNWwtMS4wNTIgMS4wM2MtLjM0Ny4zNDctLjY2MS43MjctMSAxLjA4M3EtMSAxLjA4NC0yLjA3NyAyLjExNmEyOS4wODUgMjkuMDg1IDAgMDEtMTAuMzI0IDUuOTA3bC01LjU0MSAxLjcxNGE0Ni41IDQ2LjUgMCAwMS01LjY3OCAxLjUxNmMtLjk3MS4xNy0xLjk0Mi4zNzctMi45MjguNDg3YTI4LjUzMSAyOC41MzEgMCAwMS0yLjk0Ny4xNDljLS45OCAwLTEuOTU2LS4wMzItMi45My0uMDgzcy0xLjk0Mi0uMDQ1LTIuOTIzLS4xMTlhMzguODYyIDM4Ljg2MiAwIDAxLTUuOC0uODY3IDUxLjU0NyA1MS41NDcgMCAwMS01LjcwOS0xLjQgNDcgNDcgMCAwMS0xMC42LTUuMTE4Yy0xLjYxMy0xLjE0LTMuMS0yLjQzNi00LjYtMy43YTM2LjI1IDM2LjI1IDAgMDEtNC4xNzQtNC4xNzEgNTEuMjA1IDUxLjIwNSAwIDAxLTEuNzc3LTIuMzU5Yy0uNi0uNzgtMS4xNjEtMS41ODYtMS43MTktMi40YTQzLjMxOCA0My4zMTggMCAwMS0yLjk5LTUuMS43ODcuNzg3IDAgMTExLjQwNy0uNzA2di4wMDZsLjAxNi4wMzJhNDEuNTQ2IDQxLjU0NiAwIDAwMi44MTEgNC45NTMgMzguOSAzOC45IDAgMDAxLjY1MyAyLjMxNmMuNi43MzggMS4yNTIgMS40MjcgMS44ODkgMi4xMjYgMS4yODcgMS4zODUgMi41NjEgMi43ODcgMy45NTcgNC4wNzhhNDAuNDI3IDQwLjQyNyAwIDAwNC40NTQgMy41NDcgMzMuOCAzMy44IDAgMDAxMC4xNjIgNS4wODhjMS44NDEuNDUxIDMuNTM3IDEuNDY3IDUuNDU0IDEuNjcgMS44ODIuMzE5IDMuNzg4LjM5MSA1LjY2OS41MzUuOTMzLjExIDEuOS4yNDEgMi44NTYuMjY0czEuOTExLjAxIDIuODYtLjAyMWMuOTQ5LS4wMTEgMS44OS0uMDgyIDIuODIzLS4xNDdhMTIuMzI3IDEyLjMyNyAwIDAwMi43NjEtLjQ2N2MuOTA2LS4yNTkgMS43ODktLjYgMi43MTItLjgzNi45MTUtLjI2MyAxLjg1Ni0uNDczIDIuNzg3LS43MzguOTQ0LS4yMjYgMS44NDYtLjU4NiAyLjc3NS0uODg3LjkyNS0uMjczIDEuOTMxLS40NzQgMi44MjYtLjcyMiAzLjcwNi0uOTQ5IDYuODMzLTMuMzU3IDkuNy01LjgxNy43NDEtLjYgMS40NzMtMS4yMTMgMi4xOC0xLjg1OGExNS45NzYgMTUuOTc2IDAgMDAxLjk3OC0yLjA3NmMxLjI5Mi0xLjQyNSAyLjM3Ni0yLjk4NSAzLjU1OS00LjQ3MmwuMDUtLjA2M2EuNzg2Ljc4NiAwIDAxMS4yMzEuOTc5ek00MC4yMTggODcuNDE0YTQuNzEgNC43MSAwIDAxLS40NTQtMS41NTQgMy41NzMgMy41NzMgMCAwMC0uMjUxLTEuNiAzLjkyOCAzLjkyOCAwIDAxLS4yNzEtMS41OSAyLjQ4NiAyLjQ4NiAwIDAwLS4yMTktLjc4IDMuMTgyIDMuMTgyIDAgMDEtLjEzLS44LjkuOSAwIDAxMS43MzQtLjM4NGwuMDQ3LjExYTMuNzc5IDMuNzc5IDAgMDEuMjk1IDEuNTM5IDYuOTM3IDYuOTM3IDAgMDEuMiAxLjU1NiA0LjAyNSA0LjAyNSAwIDAwLjMxMiAxLjUzNiA0LjI1MSA0LjI1MSAwIDAxLjExNi43NzggMS42ODUgMS42ODUgMCAwMC4zNTYuNzE2LjkxLjkxIDAgMTEtMS41MS45ODF6IiBmaWxsPSIjMDgxMTQwIi8+PHBhdGggZD0iTTI1LjMgMTIzLjYyN2MtMS43MjMgMy41NTMtNS4xMTQgNC4yMzMtOC41OTIgNC42MTZhNzEuNjM3IDcxLjYzNyAwIDAwLTcuNTIxIDEuNiAzOS45MzEgMzkuOTMxIDAgMDEtNC44OTMtNy4xNDNjMS44NTUtLjUgMy44MjktMS4wODIgNC4zNjYtMS4zMDcgNC45NTMtMi4xIDcuNzM2LTYuODM3IDEyLjQ5Mi05LjExOCAxLjM3NS0uNjYzIDQuNDM3LTEuMTUgNS43NTUtLjA3NSAyLjA4MSAxLjctMS4zIDEwLjc4My0xLjYwNyAxMS40Mjd6IiBmaWxsPSIjYWZiYWRkIi8+PHBhdGggZD0iTTgwLjQ3NSA1OC45OTVjLS40LS44MzgtLjgzOC0xLjY2LTEuMjU4LTIuNWExNC42MzEgMTQuNjMxIDAgMDAtMS40MDctMi40MzZjLS41NTQtLjc2LTEuMDY3LTEuNTQ1LTEuNTktMi4zMjdhMTEuMDc5IDExLjA3OSAwIDAwLS44ODctMS4wOTVjLS4zMDctLjM1NS0uNTg4LS43My0uODkxLTEuMDg3YS40NS40NSAwIDAxLjY2Ny0uNmwuMDE4LjAxOWExNS44NjIgMTUuODYyIDAgMDExLjggMi4yNDUgMjIuMDIzIDIyLjAyMyAwIDAxMS42IDIuMzg4Yy40NzEuODM0Ljk3OSAxLjY0NCAxLjQ2OCAyLjQ3LjI0NC40MTQuNDI5Ljg1OS42MzkgMS4yOTFzLjQzLjg2LjY3NiAxLjI4MmEuNDUxLjQ1MSAwIDAxLS43NzkuNDU1bC0uMDE3LS4wMzJ6bS0zLjAwNyA0LjA2YTE5LjU0NyAxOS41NDcgMCAwMS03LjcyNS01LjU2NiAxMC4xMzMgMTAuMTMzIDAgMDEtMS4zMDctMi4wNzggMy41NSAzLjU1IDAgMDEtLjI5LTIuNTk0IDIuNjY1IDIuNjY1IDAgMDEuODExLTEuMTE3IDMuNDE2IDMuNDE2IDAgMDExLjItLjU3NyAzLjYzOSAzLjYzOSAwIDAxMi41ODEuMjQxIDEuOSAxLjkgMCAwMS41NzguNDU1IDIuNTY2IDIuNTY2IDAgMDEuMzc3LjU4IDIgMiAwIDAxLjE1MyAxLjQ0NSAzLjA0OSAzLjA0OSAwIDAxLTEuOTU1IDEuOCA4LjMxNyA4LjMxNyAwIDAxLTQuODg1LjA5NSA5LjY5MyA5LjY5MyAwIDAxLTQuMjMyLTIuMzg4IDkuOTIyIDkuOTIyIDAgMDEtMi40Ni00LjE4NS40NTEuNDUxIDAgMTEuODYtLjI3IDguODM1IDguODM1IDAgMDA2LjA1MiA1Ljk4OSA3LjQ0MyA3LjQ0MyAwIDAwNC4zMzMtLjExQTIuMjQ1IDIuMjQ1IDAgMDA3MyA1My41OTVhMS4xMjkgMS4xMjkgMCAwMC0uMDc4LS44MzMgMS43NCAxLjc0IDAgMDAtLjI1LS40MDYgMS4wOCAxLjA4IDAgMDAtLjMzNS0uMjdjLTEuMTIxLS42MTgtMy4wNDItLjI3LTMuNDQxIDFhMi43NTggMi43NTggMCAwMC4zIDEuOTY5IDkuMjc2IDkuMjc2IDAgMDAxLjIzNCAxLjg2NyAxOC4zMSAxOC4zMSAwIDAwMy4zMzcgMy4xMzEgMTguNTA5IDE4LjUwOSAwIDAwNC4wMzMgMi4xNjYuNDUxLjQ1MSAwIDAxLS4zMjQuODQxem0tLjg2OCAzLjUyNmMtMS4yMTItLjM0NS0yLjQ2OC0uNTk1LTMuNzIyLS45NTRhNDcuNzQgNDcuNzQgMCAwMS0xLjg2My0uNjEzIDE4LjUxNiAxOC41MTYgMCAwMC0xLjg0Ni0uNSAzMS41NTEgMzEuNTUxIDAgMDEtMy43NDYtMS4wNDZjLS42MTgtLjIxNS0xLjI0OC0uNC0xLjg3LS42MzhhOS44NDcgOS44NDcgMCAwMS0xLjc4NS0uOTM0LjQ1LjQ1IDAgMDEuNDcxLS43NjdsLjAyNy4wMTZhMjAuODY2IDIwLjg2NiAwIDAwMy40MjEgMS40ODZjMS4yMS4zODIgMi40Ni42NzQgMy43IDEuMDYzIDEuMjU0LjM2IDIuNDgyLjgwNiAzLjcxMyAxLjA4LjYyMy4xNDYgMS4yMzkuMzM2IDEuODY3LjVzMS4yNjMuMzA5IDEuOTEuNDUzYS40NTEuNDUxIDAgMDEtLjIuODhsLS4wMjUtLjAwNnoiIGZpbGw9IiMyMjI2NmQiLz48cGF0aCBkPSJNODAuNTI3IDU4Ljk3M2MtLjIxNC0uNDEyLS4yNzItLjktLjY1OC0xLjIzNC0uMjUyLS4zOTQtLjM4OC0uODQ5LS42MDgtMS4yNjRzLS40LS44NTEtLjU3OC0xLjI5M2MtLjEtLjIxNS0uMjUtLjQtLjM0OS0uNjE1YTIuNjk0IDIuNjk0IDAgMDAtLjM2NC0uNjA3Yy0uMTM2LS4xOTMtLjIzOC0uNDA4LS4zNy0uNi0uMDk0LS4yMjItLjM2Ny0uMzIxLS40ODEtLjUyOC0uMy0uMzY2LS41OTEtLjczNS0uOS0xLjA5MmE2Ljg5MyA2Ljg5MyAwIDAwLS44MTktMS4xNSAzLjg5MiAzLjg5MiAwIDAwLS45MTMtMS4wNzIuMzkyLjM5MiAwIDAxLjU2My0uNTQ2bC4wMzYuMDM2YTguNzI4IDguNzI4IDAgMDAxIDEuMDQ0Yy4zLjM3Mi41Mi44MS44MDUgMS4xOTRhMy45ODggMy45ODggMCAwMC44NTMgMS4xNTRjLjIwOC4xNDguMTI2LjQ5My4zNDIuNjM1YTMuNTA4IDMuNTA4IDAgMDEuNTA1LjUyNyAxNC44MjIgMTQuODIyIDAgMDExLjMgMi41NzEgNS45MjkgNS45MjkgMCAwMC43MyAxLjI0IDcuOTggNy45OCAwIDAwLjY0IDEuMy4zOTMuMzkzIDAgMDEtLjcxMy4zMjl6IiBmaWxsPSIjZmZjNjU3Ii8+PHBhdGggZD0iTTgwLjEyIDU5LjE2NGEyMy4zODEgMjMuMzgxIDAgMDAtMS41MDktMi44MzNBMjUuOTE4IDI1LjkxOCAwIDAwNzcgNTMuNjM4Yy0uMy0uNDQ2LS41ODctLjktLjg2Ny0xLjM2NC0uMjc0LS40NzYtLjYtLjg1LS44OTItMS4zLS4zMTEtLjQyNy0uNjgzLS44MjQtMS0xLjI1OGEuNjkxLjY5MSAwIDAxLjIyMy0xLjA0OC43Mi43MiAwIDAxLjU4LS4wMjcuNy43IDAgMDEuMjQuMTY0bC4xNDQuMTQzYTE1LjE4IDE1LjE4IDAgMDExLjAzNiAxLjI1NmMuMy40NjEuNzI2LjgwOSAxLjAwNiAxLjI3NC42MDUuODkgMS4zIDEuNzU2IDEuODQ0IDIuNjY3LjQ2NC45NjUgMS4wODYgMS44MzQgMS41MjggMi44NDRhOS4yNTQgOS4yNTQgMCAwMC43MDkgMS40MjIuODYxLjg2MSAwIDAxLjEzNS42MTUuOC44IDAgMDEtLjQuNTYxLjgyNC44MjQgMCAwMS0xLjAwNi0uMTcgMS4xNjcgMS4xNjcgMCAwMS0uMTYtLjI1M3ptLjcxMS0uMzM5Yy4wMzkuMDgxLjA0NS4wODIuMDQ1LjA4MmEuMDQzLjA0MyAwIDAwLjAyLjAxLjA0My4wNDMgMCAwMC4wNC0uMDA3LjAzNy4wMzcgMCAwMC4wMTctLjAzMi4wNTUuMDU1IDAgMDAwLS4wMTZsLS4wNDEtLjA3NC0uMzkzLS43MThjLS4xNC0uMjMxLS4zMDctLjQ2NS0uNDMtLjY4OS0uMjcyLS40NTItLjQxOS0uOTQ4LS43LTEuNDE4LS4yNDYtLjQ3OS0uNTI2LS45MzctLjc4Ny0xLjQwNkExNC44MjkgMTQuODI5IDAgMDA3Ni44NiA1MS45Yy0uMzc1LS4zODEtLjQ1My0uOTkxLS44NS0xLjMzOC0uMzU0LS4zODgtLjc1Mi0uNzMyLTEuMTEzLTEuMTA2LS4wNDYtLjA0Ny0uMDgxLS4xLS4xMjItLjE1NC0uMDIyLS4wMzEuMDA4LS4wMTMuMDA1LS4wMjRzMC0uMDMxIDAtLjAyMi4wMS4wMTUuMDExIDBjLjM1NC40LjYyNi44NTYgMSAxLjI1NWE0LjI1MSA0LjI1MSAwIDAxLjk4IDEuMzI2IDUuMDgzIDUuMDgzIDAgMDAuNDI3LjY3N2wuMzgzLjcwOWExMC42ODQgMTAuNjg0IDAgMDAuOSAxLjM1MSAxMiAxMiAwIDAxLjg3MiAxLjM5IDI3Ljc1OCAyNy43NTggMCAwMDEuNDc3IDIuODYxek03Ny40ODkgNjNhMzQuNDY2IDM0LjQ2NiAwIDAxLTQuMjA4LTIuMjcgMTcuMjYgMTcuMjYgMCAwMS0zLjQ5LTMuMjgxIDkuMzczIDkuMzczIDAgMDEtMS4yODQtMi4wNzIgMy4zOSAzLjM5IDAgMDEtLjIyNi0yLjUxNiAyLjY4OCAyLjY4OCAwIDAxLjc1OC0xLjA2MSAyLjk1OCAyLjk1OCAwIDAxMS4xNTQtLjU0MSAzLjgyNyAzLjgyNyAwIDAxMi40NTguMjYgMS45MTEgMS45MTEgMCAwMS44NTguOTY0IDEuNzc0IDEuNzc0IDAgMDEuMTE1IDEuMjkzIDIuOTY5IDIuOTY5IDAgMDEtMS43ODggMS43MjggOC4zMjkgOC4zMjkgMCAwMS00LjgyOC4yMjcgOS43ODUgOS43ODUgMCAwMS00LjE3Mi0yLjQ0IDEwLjIxNiAxMC4yMTYgMCAwMS0uNzU4LS45NTEgOS40OTUgOS40OTUgMCAwMS0uNjgyLTEgMTIuMjY1IDEyLjI2NSAwIDAxLTEuMDI3LTIuMTkuMzkzLjM5MyAwIDAxLjczNi0uMjc4di4wMDZsLjAxMy4wMzZhOC41NDMgOC41NDMgMCAwMDIuMzI1IDMuNzc0IDExLjM1NCAxMS4zNTQgMCAwMDEuNzI1IDEuMzc1IDcuNzI5IDcuNzI5IDAgMDAyLjA0NC44NjcgNi4zOTQgNi4zOTQgMCAwMDQuMzU2LS4xMjJjLjMzMS0uMTM5LjYxOC0uMzI1LjkyNi0uNDcxYTEuMDQxIDEuMDQxIDAgMDAuNTYxLS43MjkgMS40NjMgMS40NjMgMCAwMC0uNzU5LTEuNDUzIDIuMzkxIDIuMzkxIDAgMDAtMS45MjktLjIwNyAxLjgzIDEuODMgMCAwMC0xLjQxMSAxLjE1NSA0LjAyOSA0LjAyOSAwIDAwLjI0OCAxLjk0NyA0LjMyMyA0LjMyMyAwIDAwLjUzLjk3OWMuMTczLjMzNC40LjY0NS42MDUuOTY2YTEzLjcxMSAxMy43MTEgMCAwMDMuNDI1IDMuMDYxIDE0Ljc5MyAxNC43OTMgMCAwMDQuMDE2IDIuMjEyLjM5NC4zOTQgMCAwMS0uMjk0LjczeiIgZmlsbD0iI2ZmYzY1NyIvPjxwYXRoIGQ9Ik03Ny4zMjEgNjMuNDIxYTIxLjk4NyAyMS45ODcgMCAwMS04LjAyMS01LjczMyAxMC4xMzUgMTAuMTM1IDAgMDEtMS4zNDItMi4xNzIgMy45NDQgMy45NDQgMCAwMS0uMy0yLjY4NCAzLjEgMy4xIDAgMDExLjkxNS0xLjk3NyA0LjI2MyA0LjI2MyAwIDAxMi42NjYtLjE0MSAyLjk2OCAyLjk2OCAwIDAxMS4yNDIuNjY0IDIuODYgMi44NiAwIDAxLjQyMS41NjkgMi4xNTUgMi4xNTUgMCAwMS4zMTcuNjM2IDIuMzE2IDIuMzE2IDAgMDEtLjAxNyAxLjQ0NyAyLjgxNyAyLjgxNyAwIDAxLS43ODkgMS4xNDkgNC45ODIgNC45ODIgMCAwMS0yLjM3IDEuMDU0IDguMTgzIDguMTgzIDAgMDEtMi41MTcuMDY3IDEwLjAxIDEwLjAxIDAgMDEtNC42NDMtMS43MTggMTAuMTM0IDEwLjEzNCAwIDAxLTMuNjQ3LTQuOTI4IDIgMiAwIDAxLS4xNjUtLjY4NS42OC42OCAwIDAxMS4zMTgtLjE2M2wuMi41N2ExMC4xNjIgMTAuMTYyIDAgMDAuNDkzIDEuMDgyIDguNTIgOC41MiAwIDAwMy4yNzYgMy4zMjQgNy44NTkgNy44NTkgMCAwMDQuNDg4IDEgNS4xNzggNS4xNzggMCAwMDIuMTU4LS42MjMgMS4zODUgMS4zODUgMCAwMC42My0uNjcuODY1Ljg2NSAwIDAwLS4yMDgtLjc3OGMtLjY2Ny0uOTE5LTMuMTE1LS42NjUtMy4yMzMuN2EzLjU0IDMuNTQgMCAwMC42NTQgMi4wNTEgMTUuMzU0IDE1LjM1NCAwIDAwMS40MzMgMS44NzMgMTQuNjc2IDE0LjY3NiAwIDAwMy42MiAzLjA3MSAxNy4wMTkgMTcuMDE5IDAgMDAyLjEyIDEuMWwuNTUxLjIyOC4yNzguMTA3YS45NTIuOTUyIDAgMDEuNC4yNDcuODM0LjgzNCAwIDAxLjA2OCAxLjAzNi44NDQuODQ0IDAgMDEtLjk5Ni4yOTd6bS4yOTMtLjczMWEuMDU0LjA1NCAwIDAwLjA2NC0uMDg0Yy4wNi4wMTQtLjIyLS4wODctLjQtLjE2MWwtLjU3My0uMjQzYTE4Ljk2NSAxOC45NjUgMCAwMS0yLjItMS4xNTggMTYuNTY4IDE2LjU2OCAwIDAxLTIuMDI1LTEuNDUzIDE4LjE2NCAxOC4xNjQgMCAwMS0xLjg0Ny0xLjY3OEExMC43ODYgMTAuNzg2IDAgMDE2OS4xIDU1LjlhNC4yNjcgNC4yNjcgMCAwMS0uNzItMi42MDcgMi4xMTYgMi4xMTYgMCAwMS43NjEtMS4zMDkgMi44ODYgMi44ODYgMCAwMTEuMy0uNTcyIDMuMzQ3IDMuMzQ3IDAgMDExLjM4My4wMzEgMi43NDEgMi43NDEgMCAwMS42NjguMjQ2IDEuMzUgMS4zNSAwIDAxLjU4OS41MzIgMS42NSAxLjY1IDAgMDEuMjgxIDEuNTA5IDIuMTMzIDIuMTMzIDAgMDEtLjk5NCAxLjA2NCA2LjU5MiA2LjU5MiAwIDAxLTIuNDgzLjcgOC41NDcgOC41NDcgMCAwMS00LjkxOS0xLjA3NiA5LjYwNSA5LjYwNSAwIDAxLTMuNDIxLTMuNjg0IDEwLjc2NyAxMC43NjcgMCAwMS0uNTU1LTEuMTM0bC0uMjIyLS41NzZjLS4wMDgtLjAwOS0uMDI3LS4wMDctLjAyMyAwLS4xLS4zMTMuMzM3Ljg0Mi42MTUgMS40NjFhOC41MzEgOC41MzEgMCAwMDEuMTkxIDEuOTc3IDguNyA4LjcgMCAwMDEuNzI3IDEuNTI2IDkuMSA5LjEgMCAwMDQuMzExIDEuNTg5IDkuMyA5LjMgMCAwMDIuMjgxLS4xNSA0LjM3NCA0LjM3NCAwIDAwMi4wMTYtLjgyNCAxLjgxNyAxLjgxNyAwIDAwLjU4OS0uODI0IDEuNTQ3IDEuNTQ3IDAgMDAtLjAwNy0uOTYzIDEuNiAxLjYgMCAwMC0uMjItLjQ2MyAyLjI0MSAyLjI0MSAwIDAwLS4yODktLjQzOCAyLjE3MiAyLjE3MiAwIDAwLS45MTktLjUyYy0xLjM5Mi0uNDYyLTMuMzA1LjE3MS0zLjY3OCAxLjYzM2EzLjMxIDMuMzEgMCAwMC4zMjggMi4xNzEgOS4zOCA5LjM4IDAgMDAxLjI2IDEuOTczIDE3LjkyMyAxNy45MjMgMCAwMDcuNjY0IDUuNTE4em0tLjk5NyAzLjgzN2E2LjEyMyA2LjEyMyAwIDAwLTEuODU4LS40MzVjLS42MzMtLjEwNy0xLjIzOS0uMzQ4LTEuODY4LS41MTRhMTIuNDA5IDEyLjQwOSAwIDAxLTEuODM3LS42ODVjLS4yOTQtLjEyNC0uNjEyLS4xNzktLjkxLS4zYTQuNzE2IDQuNzE2IDAgMDAtLjkyNS0uMjY5Yy0uMzEzLS4wNzUtLjYxNy0uMTg2LS45My0uMjY1LS4zLS4xMjgtLjY1Ni0uMDQyLS45NjItLjE1Mi0uNjMxLS4xNDUtMS4yNy0uMjc1LTEuOS0uNDQ1LS41OTMtLjI4OS0xLjIzNS0uNDM3LTEuODM2LS43MTgtLjU1Ni0uMzcyLTEuMi0uNTQ4LTEuNzg4LS45YS4zOTMuMzkzIDAgMDEuMzk1LS42NzlsLjA0MS4wMjNhNi4xNzQgNi4xNzQgMCAwMDEuNjg4Ljc2N2MuNTc5LjIyNiAxLjE0MS41MyAxLjc0OS43MThhNi40NzUgNi40NzUgMCAwMDEuODQ1LjUxNWMuMzM1LS4wMTQuNTc5LjMyNi45MTYuMzA5YTYuMDkyIDYuMDkyIDAgMDEuOTcxLjExNSAzLjUgMy41IDAgMDAuOTMxLjI5M2MuMzIuMDczLjYxMy4yMzEuOTM2LjNhMS44MTEgMS44MTEgMCAwMS45LjMxMyAxLjcgMS43IDAgMDAuNDUyLjE1N2wuNDQxLjIwN2E5LjE5IDkuMTkgMCAwMDEuODkzLjQgMTguMjU4IDE4LjI1OCAwIDAwMS45LjQ5LjM5My4zOTMgMCAwMS0uMjIxLjc1NXoiIGZpbGw9IiNmZmM2NTciLz48cGF0aCBkPSJNNzYuNDkyIDY2Ljk2Yy0xLjM3NS0uMzM5LTIuNzA5LS43NzUtNC4xMjYtMS0xLjQtLjQ0LTIuNjQ3LS44NzItNC4wMjgtMS4yYTI3LjgxNCAyNy44MTQgMCAwMS00LjA0Ni0xLjM4M2MtLjMyOC0uMTQzLS42NjUtLjIyNy0xLjAwNS0uMzYyYTcuNjg0IDcuNjg0IDAgMDEtLjk3Mi0uNDlsLS40NTgtLjI4OS0uMjI3LS4xNTVhLjY3Ni42NzYgMCAwMS0uMjQtLjMxLjcuNyAwIDAxLjE0OC0uNzMxLjY4My42ODMgMCAwMS43MzktLjE1NCAxNi40OSAxNi40OSAwIDAwMS44OTMuOTQyIDE1Ljk3NiAxNS45NzYgMCAwMDIuMDA3LjYyMmw0LjA4OCAxLjA4MmMuNjczLjIyNCAxLjMyMi41IDIgLjY2OHMxLjM2LjMgMi4wMzguNTIyYy4zMzguMS42NzQuMjI5IDEuMDE0LjMxNWwxLjAzLjIyMi41MTUuMTExYS45NS45NSAwIDAxLjM3Mi4xMzcuODEyLjgxMiAwIDAxLjExOCAxLjI1Ljg2Mi44NjIgMCAwMS0uODYuMjAzem0uMjE2LS43NTdjLjE0Mi4wNDMuMTExLS4wMzEuMTExLS4wNTVhLjA1LjA1IDAgMDAtLjAxOC0uMDE4LjYuNiAwIDAwLS4xLS4wMjRsLS41MTktLjExN2MtLjY4OS0uMTY5LTEuMzkxLS4zLTIuMDc3LS40MzUtMS4zNDUtLjMzLTIuNzY3LS43OTQtNC4wOC0xLjIzM2EzNC42MzYgMzQuNjM2IDAgMDAtNC4wOC0xLjE2N2MtLjcyNS0uMS0xLjI4OS0uNjI2LTEuOTktLjc5MS0uMzM4LS4xMi0uNjg2LS4yMjUtMS4wMjItLjM2NWwtLjUwNi0uMjE0LS4yNTEtLjExNy0uMTItLjA2OGMtLjA0OC0uMDI5LS4wNzktLjA0Ni0uMDU5LS4wMzYuMDYyLS4wMS4wMDYtLjA2OS4wMS0uMDQxaC4wMDVsLjIxLjEyOS40NDQuMjQ3YTguMiA4LjIgMCAwMDEuODc5LjggOS44NDIgOS44NDIgMCAwMTEuOTcyLjcgNi43MDggNi43MDggMCAwMDEgLjMxOWwuOTk1LjM0YzEuMzQxLjQyNSAyLjguNjczIDQuMTA2IDEuMWEzOS4xNjQgMzkuMTY0IDAgMDA0LjA5IDEuMDQzeiIgZmlsbD0iI2ZmYzY1NyIvPjxwYXRoIGQ9Ik02OC4xIDQ0LjkwNmMuMDM2LS4yOTMtLjIzMy0uNTc2LS40NTEtLjQ3M2EuNTE1LjUxNSAwIDAwLS4wOS43MjdjLjE4Mi4xOTEuNS4wMzkuNTQxLS4yNTQiIGZpbGw9IiNmZmM3NTciLz48cGF0aCBkPSJNNjcuNzA3IDQ0Ljg1N2MtLjAzOC0uMDMyLS4xNTkuMDIzLS4wMjItLjAxNWEuMzEuMzEgMCAwMC4wNS0uMDE0Yy4wMjEtLjAyNy4wMy0uMDc2LjA0NS0uMDY4LjAyNy0uMDEzLjAzOC0uMDMyLjAzNS0uMDM4cy0uMTQ0LS4wMDgtLjE1NC4wNjVjMCAuMTU0LjIuMjE5LjEyLjA4Mi0uMDUtLjA3Ny0uMDc3LjAxOC0uMDI5LjAzOS4wMS0uMDA3IDAtLjA0MS0uMDQ1LS4wNTFhLjY1Ni42NTYgMCAxMS44MDktLjYyNWwtLjAxNS43MjRhLjc3Mi43NzIgMCAwMS0uMjI5LjU1MWMtLjE2Ni4xNjEtLjQyOS4xMjEtLjY1Ni4xMTNhLjcuNyAwIDAxLS41LS40MTUgMS4wODUgMS4wODUgMCAwMS0uMDgyLS41YzAtLjE1NS0uMDU0LS4zOTIuMTcyLS41NDdhLjc2Ni43NjYgMCAwMS40LS4wOTFjLjA2OS4wMjUuMTI0LS4wMjMuMTktLjAzMWEuNDUuNDUgMCAwMS4xNTkuMDc4IDIuNDEyIDIuNDEyIDAgMDEuMTkzLjJjLjA2My4wNDMuMTkxLjA1Mi4yMjMuMTM3YS43LjcgMCAwMS4xMzMuNTA2LjI5NC4yOTQgMCAwMS0uNDc3LjE3em00LjEgMS4zNDNjLjA2Ny0uNTUzLS41MDctMS4xLS45NjItLjkyMWEuOS45IDAgMDAtLjE2NyAxLjM3Mi42ODcuNjg3IDAgMDAxLjEyOS0uNDUxIiBmaWxsPSIjZmZjNzU3Ii8+PHBhdGggZD0iTTcxLjQxIDQ2LjE1NGMtLjAyMi0uMTg4LS4yNDItLjMyNC0uMzI1LS40NTVsLS4wMzgtLjAzNWMtLjAwOC0uMDI5LS4wMjctLjA3OC0uMDQxLS4wNjJhLjE3Mi4xNzIgMCAwMC0uMDkzLjAyNWMtLjA1NS4wNDItLjI0MS4xMjQtLjI2My4yOS0uMDEyLjMzLjI0NS41ODkuNC41MjMuMDcyLS4wNS4xNTMuMDA1LjI3My0uMDIyYS4yMzIuMjMyIDAgMDAuMDg2LS4yNjMuNDE2LjQxNiAwIDExLjgwNi0uMTI3bC0uMDExLjIyNGExLjEgMS4xIDAgMDEtLjQxNS44MDkgMS4yNTggMS4yNTggMCAwMS0uOS4xMyAxLjAzOSAxLjAzOSAwIDAxLS43MTItLjU1MiAxLjQ4IDEuNDggMCAwMS0uMTQ5LS44LjkxMi45MTIgMCAwMS4zMzgtLjgyOS45ODYuOTg2IDAgMDEuNTI4LS4xMTFjLjA4Ni4wMjYuMTYyLS4wMTYuMjQ1LS4wMjFhLjc2Mi43NjIgMCAwMS4yMTEuMDk0IDIuODg2IDIuODg2IDAgMDEuMzA5LjI1N2MuMS4wNjguMjU5LjEwNi4zMjMuMjI4YTEuMDkyIDEuMDkyIDAgMDEuMjI1LjguNC40IDAgMDEtLjc4NS0uMDE1eiIgZmlsbD0iI2ZmYzc1NyIvPjwvc3ZnPgo=';

var styles$O = {
  "Image": "Polaris-EmptySearchResult__Image"
};

function EmptySearchResult(_ref) {
  var title = _ref.title,
      description = _ref.description,
      withIllustration = _ref.withIllustration;
  var i18n = useI18n();
  var altText = i18n.translate('Polaris.EmptySearchResult.altText');
  var descriptionMarkup = description ? /*#__PURE__*/React__default.createElement("p", null, description) : null;
  var illustrationMarkup = withIllustration ? /*#__PURE__*/React__default.createElement(Image, {
    alt: altText,
    source: emptySearch,
    className: styles$O.Image,
    draggable: false
  }) : null;
  return /*#__PURE__*/React__default.createElement(Stack, {
    alignment: "center",
    vertical: true
  }, illustrationMarkup, /*#__PURE__*/React__default.createElement(DisplayText, {
    size: "small"
  }, title), /*#__PURE__*/React__default.createElement(TextStyle, {
    variation: "subdued"
  }, descriptionMarkup));
}

var styles$P = {
  "EmptyState": "Polaris-EmptyState",
  "Section": "Polaris-EmptyState__Section",
  "ImageContainer": "Polaris-EmptyState__ImageContainer",
  "DetailsContainer": "Polaris-EmptyState__DetailsContainer",
  "withinContentContainer": "Polaris-EmptyState--withinContentContainer",
  "Details": "Polaris-EmptyState__Details",
  "Image": "Polaris-EmptyState__Image",
  "Content": "Polaris-EmptyState__Content",
  "withinPage": "Polaris-EmptyState--withinPage",
  "imageContained": "Polaris-EmptyState--imageContained",
  "centeredLayout": "Polaris-EmptyState--centeredLayout",
  "fullWidth": "Polaris-EmptyState--fullWidth",
  "Actions": "Polaris-EmptyState__Actions",
  "FooterContent": "Polaris-EmptyState__FooterContent"
};

function EmptyState(_ref) {
  var children = _ref.children,
      heading = _ref.heading,
      image = _ref.image,
      largeImage = _ref.largeImage,
      imageContained = _ref.imageContained,
      _ref$centeredLayout = _ref.centeredLayout,
      centeredLayout = _ref$centeredLayout === void 0 ? false : _ref$centeredLayout,
      _ref$fullWidth = _ref.fullWidth,
      fullWidth = _ref$fullWidth === void 0 ? false : _ref$fullWidth,
      action = _ref.action,
      secondaryAction = _ref.secondaryAction,
      footerContent = _ref.footerContent;
  var withinContentContainer = useContext(WithinContentContext);

  var _useFeatures = useFeatures(),
      _useFeatures$newDesig = _useFeatures.newDesignLanguage,
      newDesignLanguage = _useFeatures$newDesig === void 0 ? false : _useFeatures$newDesig;

  var newLayout = centeredLayout || newDesignLanguage;
  var className = classNames(styles$P.EmptyState, fullWidth && styles$P.fullWidth, newLayout && styles$P.centeredLayout, imageContained && styles$P.imageContained, withinContentContainer ? styles$P.withinContentContainer : styles$P.withinPage);
  var imageMarkup = largeImage ? /*#__PURE__*/React__default.createElement(Image, {
    alt: "",
    role: "presentation",
    className: styles$P.Image,
    source: largeImage,
    sourceSet: [{
      source: image,
      descriptor: '568w'
    }, {
      source: largeImage,
      descriptor: '1136w'
    }],
    sizes: "(max-width: 568px) 60vw"
  }) : /*#__PURE__*/React__default.createElement(Image, {
    role: "presentation",
    alt: "",
    className: styles$P.Image,
    source: image
  });
  var secondaryActionMarkup = secondaryAction ? buttonFrom(secondaryAction, newLayout ? {} : {
    plain: true
  }) : null;
  var footerContentMarkup = footerContent ? /*#__PURE__*/React__default.createElement("div", {
    className: styles$P.FooterContent
  }, /*#__PURE__*/React__default.createElement(TextContainer, null, footerContent)) : null;
  var headingSize = withinContentContainer ? 'small' : 'medium';
  var primaryActionSize = withinContentContainer || newLayout ? 'medium' : 'large';
  var primaryActionMarkup = action ? buttonFrom(action, {
    primary: true,
    size: primaryActionSize
  }) : null;
  var headingMarkup = heading ? /*#__PURE__*/React__default.createElement(DisplayText, {
    size: headingSize
  }, heading) : null;
  var childrenMarkup = children ? /*#__PURE__*/React__default.createElement("div", {
    className: styles$P.Content
  }, children) : null;
  var textContentMarkup = headingMarkup || children ? /*#__PURE__*/React__default.createElement(TextContainer, {
    spacing: newLayout ? 'tight' : undefined
  }, headingMarkup, childrenMarkup) : null;
  var actionsMarkup = primaryActionMarkup || secondaryActionMarkup ? /*#__PURE__*/React__default.createElement("div", {
    className: styles$P.Actions
  }, /*#__PURE__*/React__default.createElement(Stack, {
    alignment: "center",
    distribution: newLayout ? 'center' : undefined,
    spacing: newLayout ? 'tight' : undefined
  }, primaryActionMarkup, secondaryActionMarkup)) : null;
  var detailsMarkup = textContentMarkup || actionsMarkup || footerContentMarkup ? /*#__PURE__*/React__default.createElement("div", {
    className: styles$P.DetailsContainer
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles$P.Details
  }, textContentMarkup, actionsMarkup, footerContentMarkup)) : /*#__PURE__*/React__default.createElement("div", {
    className: styles$P.DetailsContainer
  });
  return /*#__PURE__*/React__default.createElement("div", {
    className: className
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles$P.Section
  }, detailsMarkup, /*#__PURE__*/React__default.createElement("div", {
    className: styles$P.ImageContainer
  }, imageMarkup)));
}

var styles$Q = {
  "Truncate": "Polaris-Truncate"
};

function Truncate(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React__default.createElement("span", {
    className: styles$Q.Truncate
  }, children);
}

var styles$R = {
  "ExceptionList": "Polaris-ExceptionList",
  "Item": "Polaris-ExceptionList__Item",
  "Icon": "Polaris-ExceptionList__Icon",
  "statusWarning": "Polaris-ExceptionList--statusWarning",
  "statusCritical": "Polaris-ExceptionList--statusCritical",
  "Bullet": "Polaris-ExceptionList__Bullet",
  "Title": "Polaris-ExceptionList__Title",
  "Description": "Polaris-ExceptionList__Description"
};

function ExceptionList(_ref) {
  var itemsList = _ref.items;
  var items = itemsList.map(function (item, index) {
    var status = item.status,
        icon = item.icon,
        title = item.title,
        description = item.description,
        _item$truncate = item.truncate,
        truncate = _item$truncate === void 0 ? false : _item$truncate;
    var itemClasses = classNames(styles$R.Item, status && styles$R[variationName('status', status)]);
    var iconMarkup = icon ? /*#__PURE__*/React__default.createElement(Icon, {
      source: icon
    }) : /*#__PURE__*/React__default.createElement("span", {
      className: styles$R.Bullet
    });
    var titleMarkup = title && /*#__PURE__*/React__default.createElement("span", {
      className: styles$R.Title
    }, title);
    var descriptionMarkup = description && /*#__PURE__*/React__default.createElement("span", {
      className: styles$R.Description
    }, description);
    var Element = truncate ? Truncate : React__default.Fragment;
    return /*#__PURE__*/React__default.createElement("li", {
      className: itemClasses,
      key: index
    }, /*#__PURE__*/React__default.createElement("span", {
      className: styles$R.Icon
    }, iconMarkup), /*#__PURE__*/React__default.createElement(Element, null, titleMarkup, descriptionMarkup));
  });
  return /*#__PURE__*/React__default.createElement("ul", {
    className: styles$R.ExceptionList
  }, items);
}

var ResourceListContext = React__default.createContext({});

var SELECT_ALL_ITEMS = 'All';

var styles$S = {
  "Tag": "Polaris-Tag",
  "disabled": "Polaris-Tag--disabled",
  "removable": "Polaris-Tag--removable",
  "clickable": "Polaris-Tag--clickable",
  "newDesignLanguage": "Polaris-Tag--newDesignLanguage",
  "TagText": "Polaris-Tag__TagText",
  "Button": "Polaris-Tag__Button"
};

function Tag(_ref) {
  var children = _ref.children,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      onClick = _ref.onClick,
      onRemove = _ref.onRemove;
  var i18n = useI18n();

  var _useFeatures = useFeatures(),
      newDesignLanguage = _useFeatures.newDesignLanguage;

  var className = classNames(styles$S.Tag, disabled && styles$S.disabled, onClick && styles$S.clickable, onRemove && styles$S.removable, newDesignLanguage && styles$S.newDesignLanguage);
  var ariaLabel = i18n.translate('Polaris.Tag.ariaLabel', {
    children: children || ''
  });
  var buttonClassName = classNames(styles$S.Button, newDesignLanguage && styles$S.newDesignLanguage);
  var removeButton = onRemove ? /*#__PURE__*/React__default.createElement("button", {
    type: "button",
    "aria-label": ariaLabel,
    className: buttonClassName,
    onClick: onRemove,
    onMouseUp: handleMouseUpByBlurring,
    disabled: disabled
  }, /*#__PURE__*/React__default.createElement(Icon, {
    source: CancelSmallMinor
  })) : null;
  var tagMarkup = onClick ? /*#__PURE__*/React__default.createElement("button", {
    type: "button",
    disabled: disabled,
    className: className,
    onClick: onClick
  }, children) : /*#__PURE__*/React__default.createElement("span", {
    className: className
  }, /*#__PURE__*/React__default.createElement("span", {
    title: children,
    className: styles$S.TagText
  }, children), removeButton);
  return tagMarkup;
}

var Focus = /*#__PURE__*/memo(function Focus(_ref) {
  var children = _ref.children,
      disabled = _ref.disabled,
      root = _ref.root;
  useEffect(function () {
    if (disabled || !root) {
      return;
    }

    var node = isRef(root) ? root.current : root;

    if (!node || node.querySelector('[autofocus]')) {
      return;
    }

    focusFirstFocusableNode(node, false);
  }, [disabled, root]);
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, children);
});

function isRef(ref) {
  return ref.current !== undefined;
}

function TrapFocus(_ref) {
  var _ref$trapping = _ref.trapping,
      trapping = _ref$trapping === void 0 ? true : _ref$trapping,
      children = _ref.children;

  var _useState = useState(undefined),
      _useState2 = _slicedToArray(_useState, 2),
      shouldFocusSelf = _useState2[0],
      setFocusSelf = _useState2[1];

  var _useFocusManager = useFocusManager(),
      canSafelyFocus = _useFocusManager.canSafelyFocus;

  var focusTrapWrapper = useRef(null);
  useEffect(function () {
    setFocusSelf(!(canSafelyFocus && focusTrapWrapper.current && focusTrapWrapper.current.contains(document.activeElement)));
  }, [canSafelyFocus]);

  var shouldDisableFirstElementFocus = function shouldDisableFirstElementFocus() {
    if (shouldFocusSelf === undefined || !canSafelyFocus) {
      return true;
    }

    return shouldFocusSelf ? !trapping : !shouldFocusSelf;
  };

  var handleFocusIn = function handleFocusIn(event) {
    var containerContentsHaveFocus = focusTrapWrapper.current && focusTrapWrapper.current.contains(document.activeElement);

    if (trapping === false || !focusTrapWrapper.current || containerContentsHaveFocus) {
      return;
    }

    if (canSafelyFocus && event.target instanceof HTMLElement && focusTrapWrapper.current !== event.target && !focusTrapWrapper.current.contains(event.target)) {
      focusFirstFocusableNode(focusTrapWrapper.current);
    }
  };

  var handleTab = function handleTab(event) {
    if (trapping === false || !focusTrapWrapper.current) {
      return;
    }

    var firstFocusableNode = findFirstKeyboardFocusableNode(focusTrapWrapper.current);
    var lastFocusableNode = findLastKeyboardFocusableNode(focusTrapWrapper.current);

    if (event.target === lastFocusableNode && !event.shiftKey) {
      event.preventDefault();
      focusFirstKeyboardFocusableNode(focusTrapWrapper.current);
    }

    if (event.target === firstFocusableNode && event.shiftKey) {
      event.preventDefault();
      focusLastKeyboardFocusableNode(focusTrapWrapper.current);
    }
  };

  return /*#__PURE__*/React__default.createElement(Focus, {
    disabled: shouldDisableFirstElementFocus(),
    root: focusTrapWrapper.current
  }, /*#__PURE__*/React__default.createElement("div", {
    ref: focusTrapWrapper
  }, /*#__PURE__*/React__default.createElement(EventListener, {
    event: "focusin",
    handler: handleFocusIn
  }), /*#__PURE__*/React__default.createElement(KeypressListener, {
    keyCode: Key.Tab,
    keyEvent: "keydown",
    handler: handleTab
  }), children));
}

var styles$T = {
  "Sheet": "Polaris-Sheet",
  "Container": "Polaris-Sheet__Container",
  "Bottom": "Polaris-Sheet__Bottom",
  "enterBottom": "Polaris-Sheet--enterBottom",
  "enterBottomActive": "Polaris-Sheet--enterBottomActive",
  "exitBottom": "Polaris-Sheet--exitBottom",
  "exitBottomActive": "Polaris-Sheet--exitBottomActive",
  "Right": "Polaris-Sheet__Right",
  "enterRight": "Polaris-Sheet--enterRight",
  "enterRightActive": "Polaris-Sheet--enterRightActive",
  "exitRight": "Polaris-Sheet--exitRight",
  "exitRightActive": "Polaris-Sheet--exitRightActive"
};

var BOTTOM_CLASS_NAMES = {
  enter: classNames(styles$T.Bottom, styles$T.enterBottom),
  enterActive: classNames(styles$T.Bottom, styles$T.enterBottomActive),
  exit: classNames(styles$T.Bottom, styles$T.exitBottom),
  exitActive: classNames(styles$T.Bottom, styles$T.exitBottomActive)
};
var RIGHT_CLASS_NAMES = {
  enter: classNames(styles$T.Right, styles$T.enterRight),
  enterActive: classNames(styles$T.Right, styles$T.enterRightActive),
  exit: classNames(styles$T.Right, styles$T.exitRight),
  exitActive: classNames(styles$T.Right, styles$T.exitRightActive)
};
function Sheet(_ref) {
  var children = _ref.children,
      open = _ref.open,
      onClose = _ref.onClose,
      onEntered = _ref.onEntered,
      onExit = _ref.onExit;

  var _useMediaQuery = useMediaQuery(),
      isNavigationCollapsed = _useMediaQuery.isNavigationCollapsed;

  var container = useRef(null);
  var findDOMNode = useCallback(function () {
    return container.current;
  }, []);
  return /*#__PURE__*/React__default.createElement(Portal, {
    idPrefix: "sheet"
  }, /*#__PURE__*/React__default.createElement(CSSTransition, {
    findDOMNode: findDOMNode,
    classNames: isNavigationCollapsed ? BOTTOM_CLASS_NAMES : RIGHT_CLASS_NAMES,
    timeout: durationSlow,
    in: open,
    mountOnEnter: true,
    unmountOnExit: true,
    onEntered: onEntered,
    onExit: onExit
  }, /*#__PURE__*/React__default.createElement("div", Object.assign({
    className: styles$T.Container
  }, layer.props, overlay.props, {
    ref: container
  }), /*#__PURE__*/React__default.createElement(TrapFocus, {
    trapping: open
  }, /*#__PURE__*/React__default.createElement("div", {
    role: "dialog",
    tabIndex: -1,
    className: styles$T.Sheet
  }, children)))), /*#__PURE__*/React__default.createElement(KeypressListener, {
    keyCode: Key.Escape,
    handler: onClose
  }), open && /*#__PURE__*/React__default.createElement(Backdrop, {
    transparent: true,
    onClick: onClose
  }));
}

var styles$U = {
  "Item": "Polaris-Filters-ConnectedFilterControl__Item",
  "Item-focused": "Polaris-Filters-ConnectedFilterControl__Item--focused",
  "ProxyButtonContainer": "Polaris-Filters-ConnectedFilterControl__ProxyButtonContainer",
  "ConnectedFilterControl": "Polaris-Filters-ConnectedFilterControl",
  "CenterContainer": "Polaris-Filters-ConnectedFilterControl__CenterContainer",
  "right": "Polaris-Filters-ConnectedFilterControl--right",
  "newDesignLanguage": "Polaris-Filters-ConnectedFilterControl--newDesignLanguage",
  "RightContainer": "Polaris-Filters-ConnectedFilterControl__RightContainer",
  "RightContainerWithoutMoreFilters": "Polaris-Filters-ConnectedFilterControl__RightContainerWithoutMoreFilters",
  "MoreFiltersButtonContainer": "Polaris-Filters-ConnectedFilterControl__MoreFiltersButtonContainer",
  "onlyButtonVisible": "Polaris-Filters-ConnectedFilterControl--onlyButtonVisible",
  "Wrapper": "Polaris-Filters-ConnectedFilterControl__Wrapper",
  "AuxiliaryContainer": "Polaris-Filters-ConnectedFilterControl__AuxiliaryContainer"
};

var Item$4 = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Item, _React$PureComponent);

  var _super = _createSuper(Item);

  function Item() {
    var _this;

    _classCallCheck(this, Item);

    _this = _super.apply(this, arguments);
    _this.state = {
      focused: false
    };

    _this.handleBlur = function () {
      _this.setState({
        focused: false
      });
    };

    _this.handleFocus = function () {
      _this.setState({
        focused: true
      });
    };

    return _this;
  }

  _createClass(Item, [{
    key: "render",
    value: function render() {
      var focused = this.state.focused;
      var children = this.props.children;
      var className = classNames(styles$U.Item, focused && styles$U['Item-focused']);
      return /*#__PURE__*/React__default.createElement("div", {
        onBlur: this.handleBlur,
        onFocus: this.handleFocus,
        className: className
      }, children);
    }
  }]);

  return Item;
}(React__default.PureComponent);

var FILTER_FIELD_MIN_WIDTH = 150;
var ConnectedFilterControl = /*#__PURE__*/function (_React$Component) {
  _inherits(ConnectedFilterControl, _React$Component);

  var _super = _createSuper(ConnectedFilterControl);

  function ConnectedFilterControl() {
    var _this;

    _classCallCheck(this, ConnectedFilterControl);

    _this = _super.apply(this, arguments);
    _this.state = {
      availableWidth: 0,
      proxyButtonsWidth: {}
    };
    _this.container = /*#__PURE__*/React__default.createRef();
    _this.proxyButtonContainer = /*#__PURE__*/React__default.createRef();
    _this.moreFiltersButtonContainer = /*#__PURE__*/React__default.createRef();
    _this.handleResize = debounce(function () {
      _this.measureProxyButtons();

      _this.measureAvailableWidth();
    }, 40, {
      leading: true,
      trailing: true,
      maxWait: 40
    });
    return _this;
  }

  _createClass(ConnectedFilterControl, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.handleResize();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _ref = this.context || {},
          newDesignLanguage = _ref.newDesignLanguage;

      var _this$props = this.props,
          children = _this$props.children,
          rightPopoverableActions = _this$props.rightPopoverableActions,
          rightAction = _this$props.rightAction,
          auxiliary = _this$props.auxiliary,
          _this$props$forceShow = _this$props.forceShowMorefiltersButton,
          forceShowMorefiltersButton = _this$props$forceShow === void 0 ? true : _this$props$forceShow;
      var actionsToRender = rightPopoverableActions != null ? this.getActionsToRender(rightPopoverableActions) : [];
      var className = classNames(styles$U.ConnectedFilterControl, rightPopoverableActions && styles$U.right, newDesignLanguage && styles$U.newDesignLanguage);
      var shouldRenderMoreFiltersButton = forceShowMorefiltersButton || rightPopoverableActions && rightPopoverableActions.length !== actionsToRender.length;
      var RightContainerClassName = classNames(styles$U.RightContainer, !shouldRenderMoreFiltersButton && styles$U.RightContainerWithoutMoreFilters);
      var rightMarkup = actionsToRender.length > 0 ? /*#__PURE__*/React__default.createElement("div", {
        className: RightContainerClassName
      }, this.popoverFrom(actionsToRender)) : null;
      var moreFiltersButtonContainerClassname = classNames(styles$U.MoreFiltersButtonContainer, actionsToRender.length === 0 && newDesignLanguage && styles$U.onlyButtonVisible);
      var rightActionMarkup = rightAction ? /*#__PURE__*/React__default.createElement("div", {
        ref: this.moreFiltersButtonContainer,
        className: moreFiltersButtonContainerClassname
      }, shouldRenderMoreFiltersButton && /*#__PURE__*/React__default.createElement(Item$4, null, rightAction)) : null;
      var proxyButtonMarkup = rightPopoverableActions ? /*#__PURE__*/React__default.createElement("div", {
        className: styles$U.ProxyButtonContainer,
        ref: this.proxyButtonContainer,
        "aria-hidden": true
      }, rightPopoverableActions.map(function (action) {
        return /*#__PURE__*/React__default.createElement("div", {
          key: action.key,
          "data-key": action.key
        }, _this2.activatorButtonFrom(action));
      })) : null;
      var auxMarkup = auxiliary ? /*#__PURE__*/React__default.createElement("div", {
        className: styles$U.AuxiliaryContainer
      }, auxiliary) : null;
      return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, proxyButtonMarkup, /*#__PURE__*/React__default.createElement("div", {
        className: styles$U.Wrapper
      }, /*#__PURE__*/React__default.createElement("div", {
        className: className,
        ref: this.container
      }, /*#__PURE__*/React__default.createElement("div", {
        className: styles$U.CenterContainer
      }, /*#__PURE__*/React__default.createElement(Item$4, null, children)), rightMarkup, rightActionMarkup, /*#__PURE__*/React__default.createElement(EventListener, {
        event: "resize",
        handler: this.handleResize
      })), auxMarkup));
    }
  }, {
    key: "measureProxyButtons",
    value: function measureProxyButtons() {
      if (this.proxyButtonContainer.current) {
        var proxyButtonsWidth = {}; // this number is magical, but tweaking it solved the problem of items overlapping

        var tolerance = 78;

        if (this.proxyButtonContainer.current) {
          Array.from(this.proxyButtonContainer.current.children).forEach(function (element) {
            var buttonWidth = element.getBoundingClientRect().width + tolerance;
            var buttonKey = element instanceof HTMLElement && element.dataset.key;

            if (buttonKey) {
              proxyButtonsWidth[buttonKey] = buttonWidth;
            }
          });
        }

        this.setState({
          proxyButtonsWidth
        });
      }
    }
  }, {
    key: "measureAvailableWidth",
    value: function measureAvailableWidth() {
      if (this.container.current && this.moreFiltersButtonContainer.current) {
        var containerWidth = this.container.current.getBoundingClientRect().width;
        var moreFiltersButtonWidth = this.moreFiltersButtonContainer.current.getBoundingClientRect().width;
        var filtersActionWidth = 0;
        var availableWidth = containerWidth - FILTER_FIELD_MIN_WIDTH - moreFiltersButtonWidth - filtersActionWidth;
        this.setState({
          availableWidth
        });
      }
    }
  }, {
    key: "getActionsToRender",
    value: function getActionsToRender(actions) {
      var remainingWidth = this.state.availableWidth;
      var actionsToReturn = [];

      for (var i = 0; remainingWidth > 0 && i < actions.length; i++) {
        var action = actions[i];
        var actionWidth = this.state.proxyButtonsWidth[action.key];

        if (actionWidth <= remainingWidth) {
          actionsToReturn.push(action);
          remainingWidth -= actionWidth;
        } else {
          // When we can't fit an action, we break the loop.
          // The ones that didn't fit will be accessible through the "More filters" button
          break;
        }
      }

      return actionsToReturn;
    }
  }, {
    key: "activatorButtonFrom",
    value: function activatorButtonFrom(action) {
      return /*#__PURE__*/React__default.createElement(Button, {
        onClick: action.onAction,
        disclosure: true,
        disabled: this.props.disabled || action.disabled,
        id: "Activator-".concat(action.key)
      }, action.content);
    }
  }, {
    key: "popoverFrom",
    value: function popoverFrom(actions) {
      var _this3 = this;

      return actions.map(function (action) {
        return /*#__PURE__*/React__default.createElement(Item$4, {
          key: action.key
        }, /*#__PURE__*/React__default.createElement(Popover, {
          active: action.popoverOpen,
          activator: _this3.activatorButtonFrom(action),
          onClose: action.onAction,
          preferredAlignment: "left",
          sectioned: true
        }, action.popoverContent));
      });
    }
  }]);

  return ConnectedFilterControl;
}(React__default.Component);
ConnectedFilterControl.contextType = FeaturesContext;

var styles$V = {
  "Filters": "Polaris-Filters",
  "FiltersContainer": "Polaris-Filters__FiltersContainer",
  "FiltersContainerHeader": "Polaris-Filters__FiltersContainerHeader",
  "newDesignLanguage": "Polaris-Filters--newDesignLanguage",
  "FiltersDesktopContainerContent": "Polaris-Filters__FiltersDesktopContainerContent",
  "FiltersMobileContainerContent": "Polaris-Filters__FiltersMobileContainerContent",
  "FiltersContainerFooter": "Polaris-Filters__FiltersContainerFooter",
  "FiltersMobileContainerFooter": "Polaris-Filters__FiltersMobileContainerFooter",
  "EmptyFooterState": "Polaris-Filters__EmptyFooterState",
  "FilterTriggerContainer": "Polaris-Filters__FilterTriggerContainer",
  "FilterTrigger": "Polaris-Filters__FilterTrigger",
  "FilterTriggerTitle": "Polaris-Filters__FilterTriggerTitle",
  "AppliedFilterBadgeContainer": "Polaris-Filters__AppliedFilterBadgeContainer",
  "open": "Polaris-Filters--open",
  "FilterTriggerLabelContainer": "Polaris-Filters__FilterTriggerLabelContainer",
  "first": "Polaris-Filters--first",
  "last": "Polaris-Filters--last",
  "FilterNodeContainer": "Polaris-Filters__FilterNodeContainer",
  "SearchIcon": "Polaris-Filters__SearchIcon",
  "Backdrop": "Polaris-Filters__Backdrop",
  "HelpText": "Polaris-Filters__HelpText",
  "TagsContainer": "Polaris-Filters__TagsContainer"
};

var Suffix;

(function (Suffix) {
  Suffix["Filter"] = "Filter";
  Suffix["Shortcut"] = "Shortcut";
})(Suffix || (Suffix = {}));

var FiltersInner = /*#__PURE__*/function (_React$Component) {
  _inherits(FiltersInner, _React$Component);

  var _super = _createSuper(FiltersInner);

  function FiltersInner() {
    var _this;

    _classCallCheck(this, FiltersInner);

    _this = _super.apply(this, arguments);
    _this.state = {
      open: false,
      readyForFocus: false
    };
    _this.moreFiltersButtonContainer = /*#__PURE__*/createRef();
    _this.focusNode = /*#__PURE__*/createRef();

    _this.closeFilters = function () {
      _this.setState({
        open: false
      }, function () {
        if (_this.moreFiltersButtonContainer.current) {
          focusFirstFocusableNode(_this.moreFiltersButtonContainer.current, false);
        }
      });
    };

    _this.toggleFilters = function () {
      if (_this.state.open === true) {
        _this.closeFilters();
      } else {
        _this.openFilters();
      }
    };

    _this.setReadyForFocus = function (newState) {
      return function () {
        _this.setState({
          readyForFocus: newState
        });
      };
    };

    return _this;
  }

  _createClass(FiltersInner, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          filters = _this$props.filters,
          queryValue = _this$props.queryValue,
          onQueryBlur = _this$props.onQueryBlur,
          onQueryChange = _this$props.onQueryChange,
          onQueryFocus = _this$props.onQueryFocus,
          focused = _this$props.focused,
          onClearAll = _this$props.onClearAll,
          appliedFilters = _this$props.appliedFilters,
          _this$props$polaris = _this$props.polaris,
          intl = _this$props$polaris.intl,
          isNavigationCollapsed = _this$props$polaris.mediaQuery.isNavigationCollapsed,
          onQueryClear = _this$props.onQueryClear,
          queryPlaceholder = _this$props.queryPlaceholder,
          children = _this$props.children,
          _this$props$disabled = _this$props.disabled,
          disabled = _this$props$disabled === void 0 ? false : _this$props$disabled,
          helpText = _this$props.helpText,
          hideTags = _this$props.hideTags,
          newDesignLanguage = _this$props.newDesignLanguage;
      var resourceName = this.context.resourceName;
      var _this$state = this.state,
          open = _this$state.open,
          readyForFocus = _this$state.readyForFocus;
      var backdropMarkup = open ? /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(ScrollLock, null), /*#__PURE__*/React__default.createElement("div", {
        className: styles$V.Backdrop,
        onClick: this.closeFilters
      })) : null;
      var filtersContentMarkup = filters.map(function (filter, index) {
        var filterIsOpen = _this2.state["".concat(filter.key).concat(Suffix.Filter)] === true;
        var icon = filterIsOpen ? ChevronUpMinor : ChevronDownMinor;
        var className = classNames(styles$V.FilterTriggerContainer, filterIsOpen && styles$V.open, index === 0 && styles$V.first, filters.length !== 1 && index === filters.length - 1 && styles$V.last);

        var appliedFilterContent = _this2.getAppliedFilterContent(filter.key);

        var appliedFilterBadgeMarkup = appliedFilterContent ? /*#__PURE__*/React__default.createElement("div", {
          className: styles$V.AppliedFilterBadgeContainer
        }, /*#__PURE__*/React__default.createElement(Badge, {
          size: "small",
          status: "new"
        }, appliedFilterContent)) : null;
        var collapsibleID = "".concat(filter.key, "Collapsible");
        var buttonClassName = classNames(styles$V.FilterTrigger, newDesignLanguage && styles$V.newDesignLanguage);
        return /*#__PURE__*/React__default.createElement("div", {
          key: filter.key,
          className: className
        }, /*#__PURE__*/React__default.createElement("button", {
          onClick: function onClick() {
            return _this2.toggleFilter(filter.key);
          },
          className: buttonClassName,
          id: "".concat(filter.key, "ToggleButton"),
          type: "button",
          "aria-controls": collapsibleID,
          "aria-expanded": filterIsOpen
        }, /*#__PURE__*/React__default.createElement("div", {
          className: styles$V.FilterTriggerLabelContainer
        }, /*#__PURE__*/React__default.createElement("h2", {
          className: styles$V.FilterTriggerTitle
        }, /*#__PURE__*/React__default.createElement(TextStyle, {
          variation: _this2.props.disabled || filter.disabled ? 'subdued' : undefined
        }, filter.label)), /*#__PURE__*/React__default.createElement("span", {
          className: styles$V.FilterTriggerIcon
        }, /*#__PURE__*/React__default.createElement(Icon, {
          source: icon,
          color: "inkLightest"
        }))), appliedFilterBadgeMarkup), /*#__PURE__*/React__default.createElement(Collapsible, {
          id: collapsibleID,
          open: filterIsOpen
        }, /*#__PURE__*/React__default.createElement("div", {
          className: styles$V.FilterNodeContainer
        }, /*#__PURE__*/React__default.createElement(Focus, {
          disabled: !filterIsOpen || !readyForFocus || !open,
          root: _this2.focusNode
        }, _this2.generateFilterMarkup(filter)))));
      });
      var appliedFiltersCount = appliedFilters ? appliedFilters.length : 0;
      var moreFiltersLabel = hideTags && appliedFiltersCount > 0 ? intl.translate('Polaris.Filters.moreFiltersWithCount', {
        count: appliedFiltersCount
      }) : intl.translate('Polaris.Filters.moreFilters');
      var rightActionMarkup = /*#__PURE__*/React__default.createElement("div", {
        ref: this.moreFiltersButtonContainer
      }, /*#__PURE__*/React__default.createElement(Button, {
        onClick: this.toggleFilters,
        disabled: disabled
      }, moreFiltersLabel));
      var filterResourceName = resourceName || {
        singular: intl.translate('Polaris.ResourceList.defaultItemSingular'),
        plural: intl.translate('Polaris.ResourceList.defaultItemPlural')
      };
      var transformedFilters = this.transformFilters(filters);
      var filtersControlMarkup = /*#__PURE__*/React__default.createElement(ConnectedFilterControl, {
        rightPopoverableActions: transformedFilters,
        rightAction: rightActionMarkup,
        auxiliary: children,
        disabled: disabled,
        forceShowMorefiltersButton: filters.length > transformedFilters.length
      }, /*#__PURE__*/React__default.createElement(TextField, {
        placeholder: queryPlaceholder || intl.translate('Polaris.Filters.filter', {
          resourceName: filterResourceName.plural
        }),
        onChange: onQueryChange,
        onBlur: onQueryBlur,
        onFocus: onQueryFocus,
        value: queryValue,
        focused: focused,
        label: queryPlaceholder || intl.translate('Polaris.Filters.filter', {
          resourceName: filterResourceName.plural
        }),
        labelHidden: true,
        prefix: /*#__PURE__*/React__default.createElement("span", {
          className: styles$V.SearchIcon
        }, /*#__PURE__*/React__default.createElement(Icon, {
          source: SearchMinor
        })),
        clearButton: true,
        onClearButtonClick: onQueryClear,
        disabled: disabled
      }));
      var filtersContainerHeaderClassname = classNames(styles$V.FiltersContainerHeader, newDesignLanguage && styles$V.newDesignLanguage);
      var filtersDesktopHeaderMarkup = /*#__PURE__*/React__default.createElement("div", {
        className: filtersContainerHeaderClassname
      }, /*#__PURE__*/React__default.createElement(DisplayText, {
        size: "small"
      }, moreFiltersLabel), /*#__PURE__*/React__default.createElement(Button, {
        icon: CancelSmallMinor,
        plain: true,
        accessibilityLabel: intl.translate('Polaris.Filters.cancel'),
        onClick: this.closeFilters
      }));
      var filtersMobileHeaderMarkup = /*#__PURE__*/React__default.createElement("div", {
        className: filtersContainerHeaderClassname
      }, /*#__PURE__*/React__default.createElement(Button, {
        icon: CancelSmallMinor,
        plain: true,
        accessibilityLabel: intl.translate('Polaris.Filters.cancel'),
        onClick: this.closeFilters
      }), /*#__PURE__*/React__default.createElement(DisplayText, {
        size: "small"
      }, moreFiltersLabel), /*#__PURE__*/React__default.createElement(Button, {
        onClick: this.closeFilters,
        primary: true
      }, intl.translate('Polaris.Filters.done')));
      var filtersDesktopFooterClassname = classNames(styles$V.FiltersContainerFooter, newDesignLanguage && styles$V.newDesignLanguage);
      var filtersDesktopFooterMarkup = /*#__PURE__*/React__default.createElement("div", {
        className: filtersDesktopFooterClassname
      }, /*#__PURE__*/React__default.createElement(Button, {
        onClick: onClearAll,
        disabled: !this.hasAppliedFilters()
      }, intl.translate('Polaris.Filters.clearAllFilters')), /*#__PURE__*/React__default.createElement(Button, {
        onClick: this.closeFilters,
        primary: true
      }, intl.translate('Polaris.Filters.done')));
      var filtersMobileFooterMarkup = /*#__PURE__*/React__default.createElement("div", {
        className: styles$V.FiltersMobileContainerFooter
      }, this.hasAppliedFilters() ? /*#__PURE__*/React__default.createElement(Button, {
        onClick: onClearAll,
        fullWidth: true
      }, intl.translate('Polaris.Filters.clearAllFilters')) : /*#__PURE__*/React__default.createElement("div", {
        className: styles$V.EmptyFooterState
      }, /*#__PURE__*/React__default.createElement(TextStyle, {
        variation: "subdued"
      }, /*#__PURE__*/React__default.createElement("p", null, intl.translate('Polaris.Filters.noFiltersApplied')))));
      var tagsMarkup = !hideTags && appliedFilters && appliedFilters.length ? /*#__PURE__*/React__default.createElement("div", {
        className: styles$V.TagsContainer
      }, appliedFilters.map(function (filter) {
        return /*#__PURE__*/React__default.createElement(Tag, {
          key: filter.key,
          onRemove: function onRemove() {
            filter.onRemove(filter.key);
          },
          disabled: disabled
        }, filter.label);
      })) : null;
      var filtersMobileContainerContentClassName = classNames(styles$V.FiltersMobileContainerContent, newDesignLanguage && styles$V.newDesignLanguage);
      var filtersDesktopContainerContentClassName = classNames(styles$V.FiltersDesktopContainerContent, newDesignLanguage && styles$V.newDesignLanguage);
      var filtersContainerMarkup = isNavigationCollapsed ? /*#__PURE__*/React__default.createElement(Sheet, {
        open: open,
        onClose: this.closeFilters,
        onEntered: this.setReadyForFocus(true),
        onExit: this.setReadyForFocus(false)
      }, filtersMobileHeaderMarkup, /*#__PURE__*/React__default.createElement(Scrollable, {
        className: filtersMobileContainerContentClassName,
        shadow: true
      }, filtersContentMarkup, filtersMobileFooterMarkup)) : /*#__PURE__*/React__default.createElement(Sheet, {
        open: open,
        onClose: this.closeFilters,
        onEntered: this.setReadyForFocus(true),
        onExit: this.setReadyForFocus(false)
      }, /*#__PURE__*/React__default.createElement("div", {
        className: styles$V.FiltersContainer
      }, filtersDesktopHeaderMarkup, /*#__PURE__*/React__default.createElement(Scrollable, {
        className: filtersDesktopContainerContentClassName,
        shadow: true
      }, filtersContentMarkup), filtersDesktopFooterMarkup));
      var helpTextMarkup = helpText ? /*#__PURE__*/React__default.createElement("div", {
        id: "FiltersHelpText",
        className: styles$V.HelpText
      }, /*#__PURE__*/React__default.createElement(TextStyle, {
        variation: "subdued"
      }, helpText)) : null;
      return /*#__PURE__*/React__default.createElement("div", {
        className: styles$V.Filters
      }, filtersControlMarkup, filtersContainerMarkup, tagsMarkup, helpTextMarkup, backdropMarkup, /*#__PURE__*/React__default.createElement(KeypressListener, {
        keyCode: Key.Escape,
        handler: this.closeFilters
      }));
    }
  }, {
    key: "hasAppliedFilters",
    value: function hasAppliedFilters() {
      var _this$props2 = this.props,
          appliedFilters = _this$props2.appliedFilters,
          queryValue = _this$props2.queryValue;
      var filtersApplied = Boolean(appliedFilters && appliedFilters.length > 0);
      var queryApplied = Boolean(queryValue && queryValue !== '');
      return filtersApplied || queryApplied;
    }
  }, {
    key: "getAppliedFilterContent",
    value: function getAppliedFilterContent(key) {
      var appliedFilters = this.props.appliedFilters;

      if (!appliedFilters) {
        return undefined;
      }

      var filter = appliedFilters.find(function (filter) {
        return filter.key === key;
      });
      return filter == null ? undefined : filter.label;
    }
  }, {
    key: "getAppliedFilterRemoveHandler",
    value: function getAppliedFilterRemoveHandler(key) {
      var appliedFilters = this.props.appliedFilters;

      if (!appliedFilters) {
        return undefined;
      }

      var filter = appliedFilters.find(function (filter) {
        return filter.key === key;
      });
      return filter == null ? undefined : filter.onRemove;
    }
  }, {
    key: "openFilters",
    value: function openFilters() {
      this.setState({
        open: true
      });
    }
  }, {
    key: "openFilter",
    value: function openFilter(key) {
      this.setState({
        ["".concat(key).concat(Suffix.Filter)]: true
      });
    }
  }, {
    key: "closeFilter",
    value: function closeFilter(key) {
      this.setState({
        ["".concat(key).concat(Suffix.Filter)]: false
      });
    }
  }, {
    key: "toggleFilter",
    value: function toggleFilter(key) {
      if (this.state["".concat(key).concat(Suffix.Filter)] === true) {
        this.closeFilter(key);
      } else {
        this.openFilter(key);
      }
    }
  }, {
    key: "openFilterShortcut",
    value: function openFilterShortcut(key) {
      this.setState({
        ["".concat(key).concat(Suffix.Shortcut)]: true
      });
    }
  }, {
    key: "closeFilterShortcut",
    value: function closeFilterShortcut(key) {
      this.setState({
        ["".concat(key).concat(Suffix.Shortcut)]: false
      });
    }
  }, {
    key: "toggleFilterShortcut",
    value: function toggleFilterShortcut(key) {
      if (this.state["".concat(key).concat(Suffix.Shortcut)] === true) {
        this.closeFilterShortcut(key);
      } else {
        this.openFilterShortcut(key);
      }
    }
  }, {
    key: "transformFilters",
    value: function transformFilters(filters) {
      var _this3 = this;

      var transformedActions = [];
      getShortcutFilters(filters).forEach(function (filter) {
        var key = filter.key,
            label = filter.label,
            disabled = filter.disabled;
        transformedActions.push({
          popoverContent: _this3.generateFilterMarkup(filter),
          popoverOpen: Boolean(_this3.state["".concat(key).concat(Suffix.Shortcut)]),
          key,
          content: label,
          disabled,
          onAction: function onAction() {
            return _this3.toggleFilterShortcut(key);
          }
        });
      });
      return transformedActions;
    }
  }, {
    key: "generateFilterMarkup",
    value: function generateFilterMarkup(filter) {
      var intl = this.props.polaris.intl;
      var removeCallback = this.getAppliedFilterRemoveHandler(filter.key);
      var removeHandler = removeCallback == null ? undefined : function () {
        removeCallback(filter.key);
      };
      return /*#__PURE__*/React__default.createElement("div", {
        ref: this.focusNode
      }, /*#__PURE__*/React__default.createElement(Stack, {
        vertical: true,
        spacing: "tight"
      }, filter.filter, /*#__PURE__*/React__default.createElement(Button, {
        plain: true,
        disabled: removeHandler == null,
        onClick: removeHandler,
        accessibilityLabel: intl.translate('Polaris.Filters.clearLabel', {
          filterName: filter.label
        })
      }, intl.translate('Polaris.Filters.clear'))));
    }
  }]);

  return FiltersInner;
}(React__default.Component);

FiltersInner.contextType = ResourceListContext;

function getShortcutFilters(filters) {
  return filters.filter(function (filter) {
    return filter.shortcut === true;
  });
}

function FiltersInnerWrapper(props) {
  var _useFeatures = useFeatures(),
      newDesignLanguage = _useFeatures.newDesignLanguage;

  return /*#__PURE__*/React__default.createElement(FiltersInner, Object.assign({}, props, {
    newDesignLanguage: newDesignLanguage
  }));
}

var Filters = withAppProvider()(FiltersInnerWrapper);

var styles$W = {
  "FooterHelp": "Polaris-FooterHelp",
  "Content": "Polaris-FooterHelp__Content",
  "newDesignLanguage": "Polaris-FooterHelp--newDesignLanguage",
  "Icon": "Polaris-FooterHelp__Icon",
  "Text": "Polaris-FooterHelp__Text"
};

function FooterHelp(_ref) {
  var children = _ref.children;

  var _useFeatures = useFeatures(),
      newDesignLanguage = _useFeatures.newDesignLanguage;

  var className = classNames(styles$W.FooterHelp, newDesignLanguage && styles$W.newDesignLanguage);
  var iconProps = {
    source: newDesignLanguage ? InfoMinor : QuestionMarkMajorTwotone,
    color: newDesignLanguage ? 'highlight' : 'teal',
    backdrop: !newDesignLanguage
  };
  return /*#__PURE__*/React__default.createElement("div", {
    className: className
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles$W.Content
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles$W.Icon
  }, /*#__PURE__*/React__default.createElement(Icon, iconProps)), /*#__PURE__*/React__default.createElement("div", {
    className: styles$W.Text
  }, children)));
}

function Form(_ref) {
  var acceptCharset = _ref.acceptCharset,
      action = _ref.action,
      autoComplete = _ref.autoComplete,
      children = _ref.children,
      encType = _ref.encType,
      _ref$implicitSubmit = _ref.implicitSubmit,
      implicitSubmit = _ref$implicitSubmit === void 0 ? true : _ref$implicitSubmit,
      _ref$method = _ref.method,
      method = _ref$method === void 0 ? 'post' : _ref$method,
      name = _ref.name,
      noValidate = _ref.noValidate,
      _ref$preventDefault = _ref.preventDefault,
      preventDefault = _ref$preventDefault === void 0 ? true : _ref$preventDefault,
      target = _ref.target,
      onSubmit = _ref.onSubmit;
  var i18n = useI18n();
  var handleSubmit = useCallback(function (event) {
    if (!preventDefault) {
      return;
    }

    event.preventDefault();
    onSubmit(event);
  }, [onSubmit, preventDefault]);
  var autoCompleteInputs = normalizeAutoComplete$1(autoComplete);
  var submitMarkup = implicitSubmit ? /*#__PURE__*/React__default.createElement(VisuallyHidden, null, /*#__PURE__*/React__default.createElement("button", {
    type: "submit",
    "aria-hidden": "true",
    tabIndex: -1
  }, i18n.translate('Polaris.Common.submit'))) : null;
  return /*#__PURE__*/React__default.createElement("form", {
    acceptCharset: acceptCharset,
    action: action,
    autoComplete: autoCompleteInputs,
    encType: encType,
    method: method,
    name: name,
    noValidate: noValidate,
    target: target,
    onSubmit: handleSubmit
  }, children, submitMarkup);
}

function normalizeAutoComplete$1(autoComplete) {
  if (autoComplete == null) {
    return autoComplete;
  }

  return autoComplete ? 'on' : 'off';
}

var styles$X = {
  "FormLayout": "Polaris-FormLayout",
  "Title": "Polaris-FormLayout__Title",
  "Items": "Polaris-FormLayout__Items",
  "HelpText": "Polaris-FormLayout__HelpText",
  "Item": "Polaris-FormLayout__Item",
  "grouped": "Polaris-FormLayout--grouped",
  "condensed": "Polaris-FormLayout--condensed"
};

function Item$5(props) {
  return /*#__PURE__*/React__default.createElement("div", {
    className: styles$X.Item
  }, props.children);
}

function Group(_ref) {
  var children = _ref.children,
      condensed = _ref.condensed,
      title = _ref.title,
      helpText = _ref.helpText;
  var className = classNames(condensed ? styles$X.condensed : styles$X.grouped);
  var id = useUniqueId('FormLayoutGroup');
  var helpTextElement = null;
  var helpTextID;
  var titleElement = null;
  var titleID;

  if (helpText) {
    helpTextID = "".concat(id, "HelpText");
    helpTextElement = /*#__PURE__*/React__default.createElement("div", {
      id: helpTextID,
      className: styles$X.HelpText
    }, helpText);
  }

  if (title) {
    titleID = "".concat(id, "Title");
    titleElement = /*#__PURE__*/React__default.createElement("div", {
      id: titleID,
      className: styles$X.Title
    }, title);
  }

  var itemsMarkup = React__default.Children.map(children, function (child) {
    return wrapWithComponent(child, Item$5, {});
  });
  return /*#__PURE__*/React__default.createElement("div", {
    role: "group",
    className: className,
    "aria-labelledby": titleID,
    "aria-describedby": helpTextID
  }, titleElement, /*#__PURE__*/React__default.createElement("div", {
    className: styles$X.Items
  }, itemsMarkup), helpTextElement);
}

var FormLayout = /*#__PURE__*/memo(function FormLayout(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React__default.createElement("div", {
    className: styles$X.FormLayout
  }, React__default.Children.map(children, wrapChildren));
});
FormLayout.Group = Group;

function wrapChildren(child, index) {
  if (isElementOfType(child, Group)) {
    return child;
  }

  var props = {
    key: index
  };
  return wrapWithComponent(child, Item$5, props);
}

function setRootProperty(name, value, node) {
  if (document == null) {
    return;
  }

  var styleNode = node && node instanceof HTMLElement ? node : document.documentElement;
  styleNode && styleNode.style.setProperty(name, value);
}

var styles$Y = {
  "Toast": "Polaris-Frame-Toast",
  "Action": "Polaris-Frame-Toast__Action",
  "error": "Polaris-Frame-Toast--error",
  "CloseButton": "Polaris-Frame-Toast__CloseButton"
};

var DEFAULT_TOAST_DURATION = 5000;
var DEFAULT_TOAST_DURATION_WITH_ACTION = 10000;
function Toast(_ref) {
  var content = _ref.content,
      onDismiss = _ref.onDismiss,
      duration = _ref.duration,
      error = _ref.error,
      action = _ref.action;
  useEffect(function () {
    var timeoutDuration = duration || DEFAULT_TOAST_DURATION;

    if (action && !duration) {
      timeoutDuration = DEFAULT_TOAST_DURATION_WITH_ACTION;
    } else if (action && duration && duration < DEFAULT_TOAST_DURATION_WITH_ACTION) {
      // eslint-disable-next-line no-console
      console.log('Toast with action should persist for at least 10,000 milliseconds to give the merchant enough time to act on it.');
    }

    var timer = setTimeout(onDismiss, timeoutDuration);
    return function () {
      clearTimeout(timer);
    };
  }, [action, duration, onDismiss]);
  var dismissMarkup = /*#__PURE__*/React__default.createElement("button", {
    type: "button",
    className: styles$Y.CloseButton,
    onClick: onDismiss
  }, /*#__PURE__*/React__default.createElement(Icon, {
    source: MobileCancelMajorMonotone
  }));
  var actionMarkup = action ? /*#__PURE__*/React__default.createElement("div", {
    className: styles$Y.Action
  }, /*#__PURE__*/React__default.createElement(Button, {
    plain: true,
    monochrome: true,
    onClick: action.onAction
  }, action.content)) : null;
  var className = classNames(styles$Y.Toast, error && styles$Y.error);
  return /*#__PURE__*/React__default.createElement(ThemeProvider, {
    theme: {
      colorScheme: 'inverse'
    }
  }, /*#__PURE__*/React__default.createElement("div", {
    className: className
  }, /*#__PURE__*/React__default.createElement(KeypressListener, {
    keyCode: Key.Escape,
    handler: onDismiss
  }), content, actionMarkup, dismissMarkup));
}

/**
 * A replacement for React.useCallback that'll allow for custom and deep compares.
 * @see {@link https://reactjs.org/docs/hooks-reference.html#usecallback}
 * @param callback Accepts a callback that's forwarded to React.useCallback
 * @param dependencies A dependency array similar to React.useCallback however it utilizes a deep compare
 * @param customCompare Opportunity to provide a custom compare function
 * @returns A memoized callback
 * @example
 * const Child = memo(function Child({onClick}) {
 *   console.log('Child has rendered.');
 *   return <button onClick={onClick}>Click me</button>;
 * });
 *
 * function ComponentExample() {
 *   const [timesClicked, setTimesClicked] = useState(0);
 *
 *   const handleClick = useDeepCallback(() => {
 *     setTimesClicked((timesClicked) => timesClicked + 1);
 *     // New reference every render
 *   }, [{}]);
 *
 *   return (
 *     <Fragment>
 *       <div>Times clicked: {timesClicked}</div>
 *       <Child onClick={handleClick} />
 *     </Fragment>
 *   );
 * }
 */

function useDeepCallback(callback, dependencies, customCompare) {
  return useCallback(callback, useDeepCompareRef(dependencies, customCompare));
}

var styles$Z = {
  "ToastManager": "Polaris-Frame-ToastManager",
  "ToastWrapper": "Polaris-Frame-ToastManager__ToastWrapper",
  "ToastWrapper-enter": "Polaris-Frame-ToastManager__ToastWrapper--enter",
  "ToastWrapper-exit": "Polaris-Frame-ToastManager__ToastWrapper--exit",
  "ToastWrapper-enter-done": "Polaris-Frame-ToastManager--toastWrapperEnterDone"
};

var ToastManager = /*#__PURE__*/memo(function ToastManager(_ref) {
  var toastMessages = _ref.toastMessages;
  var toastNodes = [];
  var updateToasts = useDeepCallback(function () {
    var targetInPos = 0;
    toastMessages.forEach(function (_, index) {
      var currentToast = toastNodes[index];
      if (!currentToast.current) return;
      targetInPos += currentToast.current.clientHeight;
      currentToast.current.style.setProperty('--toast-translate-y-in', "-".concat(targetInPos, "px"));
      currentToast.current.style.setProperty('--toast-translate-y-out', "".concat(-targetInPos + 150, "px"));
    });
  }, [toastMessages, toastNodes]);
  useDeepEffect(function () {
    updateToasts();
  }, [toastMessages]);
  var toastsMarkup = toastMessages.map(function (toast, index) {
    var toastNode = /*#__PURE__*/createRef();
    toastNodes[index] = toastNode;
    return /*#__PURE__*/React__default.createElement(CSSTransition, {
      findDOMNode: findDOMNode(index),
      key: toast.id,
      timeout: {
        enter: 0,
        exit: 400
      },
      classNames: toastClasses
    }, /*#__PURE__*/React__default.createElement("div", {
      ref: toastNode
    }, /*#__PURE__*/React__default.createElement(Toast, toast)));
  });
  return /*#__PURE__*/React__default.createElement(Portal, {
    idPrefix: "toast-manager"
  }, /*#__PURE__*/React__default.createElement(EventListener, {
    event: "resize",
    handler: updateToasts
  }), /*#__PURE__*/React__default.createElement("div", {
    className: styles$Z.ToastManager,
    "aria-live": "polite"
  }, /*#__PURE__*/React__default.createElement(TransitionGroup, {
    component: null
  }, toastsMarkup)));

  function findDOMNode(index) {
    return function () {
      return toastNodes[index].current;
    };
  }
});
var toastClasses = {
  enter: classNames(styles$Z.ToastWrapper, styles$Z['ToastWrapper-enter']),
  enterDone: classNames(styles$Z.ToastWrapper, styles$Z['ToastWrapper-enter-done']),
  exit: classNames(styles$Z.ToastWrapper, styles$Z['ToastWrapper-exit'])
};

var styles$_ = {
  "Loading": "Polaris-Frame-Loading",
  "Level": "Polaris-Frame-Loading__Level"
};

var INITIAL_STEP = 10;
var STUCK_THRESHOLD = 99;
var Loading = /*#__PURE__*/function (_React$Component) {
  _inherits(Loading, _React$Component);

  var _super = _createSuper(Loading);

  function Loading() {
    var _this;

    _classCallCheck(this, Loading);

    _this = _super.apply(this, arguments);
    _this.state = {
      progress: 0,
      step: INITIAL_STEP,
      animation: null
    };
    _this.ariaValuenow = debounce(function () {
      var progress = _this.state.progress;
      return Math.floor(progress / 10) * 10;
    }, 15);
    return _this;
  }

  _createClass(Loading, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.increment();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var animation = this.state.animation;

      if (animation != null) {
        cancelAnimationFrame(animation);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var progress = this.state.progress;
      var customStyles = {
        transform: "scaleX(".concat(Math.floor(progress) / 100, ")")
      };
      var ariaValuenow = this.ariaValuenow();
      return /*#__PURE__*/React__default.createElement("div", {
        className: styles$_.Loading
      }, /*#__PURE__*/React__default.createElement("div", {
        className: styles$_.Level,
        style: customStyles,
        "aria-valuenow": ariaValuenow,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        role: "progressbar"
      }));
    }
  }, {
    key: "increment",
    value: function increment() {
      var _this2 = this;

      var _this$state = this.state,
          progress = _this$state.progress,
          step = _this$state.step;

      if (progress >= STUCK_THRESHOLD) {
        return;
      }

      var animation = requestAnimationFrame(function () {
        return _this2.increment();
      });
      this.setState({
        progress: Math.min(progress + step, 100),
        step: Math.pow(INITIAL_STEP, -(progress / 25)),
        animation
      });
    }
  }]);

  return Loading;
}(React__default.Component);

function isObject(value) {
  var type = typeof value;
  return value != null && (type === TypeOf.Object || type === TypeOf.Function);
}

function pluckDeep(obj, key) {
  if (!obj) {
    return null;
  }

  var keys = Object.keys(obj);

  for (var _i = 0, _keys = keys; _i < _keys.length; _i++) {
    var currKey = _keys[_i];

    if (currKey === key) {
      return obj[key];
    }

    if (isObject(obj[currKey])) {
      var plucked = pluckDeep(obj[currKey], key);

      if (plucked) {
        return plucked;
      }
    }
  }

  return null;
}

function getWidth() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var defaultWidth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'width';
  var width = typeof value === 'number' ? value : pluckDeep(value, key);
  return width ? "".concat(width, "px") : "".concat(defaultWidth, "px");
}

function generateRedirect(appBridge, url) {
  var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'APP';
  var external = arguments.length > 3 ? arguments[3] : undefined;

  if (url == null) {
    return undefined;
  }

  var redirect = Redirect.create(appBridge);
  var payload = external === true ? {
    url,
    newContext: true
  } : url;
  return function () {
    redirect.dispatch(redirectAction(target, external), payload);
  };
}

function redirectAction(target, external) {
  if (external === true) {
    return Redirect.Action.REMOTE;
  }

  return Redirect.Action[target];
}

function transformActions(appBridge, _ref) {
  var primaryAction = _ref.primaryAction,
      secondaryActions = _ref.secondaryActions,
      actionGroups = _ref.actionGroups;
  var primary = transformPrimaryAction(appBridge, primaryAction);
  var secondary = [].concat(_toConsumableArray(transformSecondaryActions(appBridge, secondaryActions)), _toConsumableArray(transformActionGroups(appBridge, actionGroups)));
  return {
    primary,
    secondary
  };
}

function transformAction(appBridge, action) {
  var style = action.destructive === true ? Button$1.Style.Danger : undefined;
  var button = Button$1.create(appBridge, {
    label: action.content || '',
    disabled: action.disabled,
    style
  });

  if (action.onAction) {
    button.subscribe(Button$1.Action.CLICK, action.onAction);
  }

  var redirect = generateRedirect(appBridge, action.url, action.target, action.external);

  if (redirect != null) {
    button.subscribe(Button$1.Action.CLICK, redirect);
  }

  return button;
}

function transformPrimaryAction(appBridge, primaryAction) {
  if (primaryAction == null) {
    return undefined;
  }

  var primary = transformAction(appBridge, primaryAction);
  return primary;
}

function transformSecondaryActions(appBridge) {
  var secondaryActions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var secondary = _toConsumableArray(secondaryActions.map(function (secondaryAction) {
    return transformAction(appBridge, secondaryAction);
  }));

  return secondary;
}

function transformActionGroups(appBridge) {
  var actionGroups = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var buttonGroups = _toConsumableArray(actionGroups.map(function (group) {
    var buttons = group.actions.map(function (groupAction) {
      return transformAction(appBridge, groupAction);
    });
    return ButtonGroup$1.create(appBridge, {
      label: group.title,
      buttons
    });
  }));

  return buttonGroups;
}

function pickValueAndLength(obj, key) {
  var keyPaths = key.split('.');
  var value = obj;

  var _iterator = _createForOfIteratorHelper(keyPaths),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _key = _step.value;

      if (!Object.prototype.hasOwnProperty.call(value, _key)) {
        return null;
      }

      value = value[_key];
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return {
    keyPaths,
    value
  };
}

function pick(obj) {
  var _ref;

  for (var _len = arguments.length, keyPaths = new Array(_len > 1 ? _len - 1 : 0), _key2 = 1; _key2 < _len; _key2++) {
    keyPaths[_key2 - 1] = arguments[_key2];
  }

  var flattenedKeypaths = (_ref = []).concat.apply(_ref, keyPaths);

  if (obj == null || flattenedKeypaths.length === 0) return {};
  return flattenedKeypaths.reduce(function (acc, key) {
    if (typeof key !== TypeOf.String || Object.prototype.hasOwnProperty.call(obj, key)) {
      return Object.assign(Object.assign({}, acc), {
        [key]: obj[key]
      });
    }

    var pickedValues = pickValueAndLength(obj, key);

    if (pickedValues === null) {
      return acc;
    }

    var keyPaths = pickedValues.keyPaths,
        value = pickedValues.value;
    var len = keyPaths.length;
    var innerObject = {
      [keyPaths[--len]]: value
    };

    while (len--) {
      innerObject = {
        [keyPaths[len]]: innerObject
      };
    }

    return Object.assign(Object.assign({}, acc), innerObject);
  }, {});
}

var styles$$ = {
  "Container": "Polaris-Modal-Dialog__Container",
  "Dialog": "Polaris-Modal-Dialog",
  "Modal": "Polaris-Modal-Dialog__Modal",
  "limitHeight": "Polaris-Modal-Dialog--limitHeight",
  "sizeLarge": "Polaris-Modal-Dialog--sizeLarge",
  "animateFadeUp": "Polaris-Modal-Dialog--animateFadeUp",
  "entering": "Polaris-Modal-Dialog--entering",
  "exiting": "Polaris-Modal-Dialog--exiting",
  "exited": "Polaris-Modal-Dialog--exited",
  "entered": "Polaris-Modal-Dialog--entered"
};

function Dialog(_a) {
  var instant = _a.instant,
      labelledBy = _a.labelledBy,
      children = _a.children,
      onClose = _a.onClose,
      onExited = _a.onExited,
      onEntered = _a.onEntered,
      large = _a.large,
      limitHeight = _a.limitHeight,
      props = __rest(_a, ["instant", "labelledBy", "children", "onClose", "onExited", "onEntered", "large", "limitHeight"]);

  var containerNode = useRef(null);
  var findDOMNode = useCallback(function () {
    return containerNode.current;
  }, []);
  var classes = classNames(styles$$.Modal, large && styles$$.sizeLarge, limitHeight && styles$$.limitHeight);
  var TransitionChild = instant ? Transition : FadeUp;
  useEffect(function () {
    containerNode.current && !containerNode.current.contains(document.activeElement) && focusFirstFocusableNode(containerNode.current);
  }, []);
  return /*#__PURE__*/React__default.createElement(TransitionChild, Object.assign({}, props, {
    findDOMNode: findDOMNode,
    mountOnEnter: true,
    unmountOnExit: true,
    timeout: durationBase,
    onEntered: onEntered,
    onExited: onExited
  }), /*#__PURE__*/React__default.createElement("div", {
    className: styles$$.Container,
    "data-polaris-layer": true,
    "data-polaris-overlay": true,
    ref: containerNode
  }, /*#__PURE__*/React__default.createElement(TrapFocus, null, /*#__PURE__*/React__default.createElement("div", {
    role: "dialog",
    "aria-labelledby": labelledBy,
    tabIndex: -1,
    className: styles$$.Dialog
  }, /*#__PURE__*/React__default.createElement("div", {
    className: classes
  }, /*#__PURE__*/React__default.createElement(KeypressListener, {
    keyCode: Key.Escape,
    handler: onClose
  }), children)))));
}
var fadeUpClasses = {
  appear: classNames(styles$$.animateFadeUp, styles$$.entering),
  appearActive: classNames(styles$$.animateFadeUp, styles$$.entered),
  enter: classNames(styles$$.animateFadeUp, styles$$.entering),
  enterActive: classNames(styles$$.animateFadeUp, styles$$.entered),
  exit: classNames(styles$$.animateFadeUp, styles$$.exiting),
  exitActive: classNames(styles$$.animateFadeUp, styles$$.exited)
};

function FadeUp(_a) {
  var children = _a.children,
      props = __rest(_a, ["children"]);

  return /*#__PURE__*/React__default.createElement(CSSTransition, Object.assign({}, props, {
    classNames: fadeUpClasses
  }), children);
}

var styles$10 = {
  "Footer": "Polaris-Modal-Footer",
  "FooterContent": "Polaris-Modal-Footer__FooterContent"
};

function Footer(_ref) {
  var primaryAction = _ref.primaryAction,
      secondaryActions = _ref.secondaryActions,
      children = _ref.children;
  var primaryActionButton = primaryAction && buttonsFrom(primaryAction, {
    primary: true
  }) || null;
  var secondaryActionButtons = secondaryActions && buttonsFrom(secondaryActions) || null;
  var actions = primaryActionButton || secondaryActionButtons ? /*#__PURE__*/React__default.createElement(ButtonGroup, null, secondaryActionButtons, primaryActionButton) : null;
  return /*#__PURE__*/React__default.createElement("div", {
    className: styles$10.Footer
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles$10.FooterContent
  }, /*#__PURE__*/React__default.createElement(Stack, {
    alignment: "center"
  }, /*#__PURE__*/React__default.createElement(Stack.Item, {
    fill: true
  }, children), actions)));
}

var styles$11 = {
  "CloseButton": "Polaris-Modal-CloseButton",
  "withoutTitle": "Polaris-Modal-CloseButton--withoutTitle"
};

function CloseButton(_ref) {
  var _ref$title = _ref.title,
      title = _ref$title === void 0 ? true : _ref$title,
      onClick = _ref.onClick;
  var i18n = useI18n();
  var className = classNames(styles$11.CloseButton, !title && styles$11.withoutTitle);
  return /*#__PURE__*/React__default.createElement("button", {
    onClick: onClick,
    className: className,
    "aria-label": i18n.translate('Polaris.Common.close')
  }, /*#__PURE__*/React__default.createElement(Icon, {
    source: MobileCancelMajorMonotone,
    color: "inkLighter"
  }));
}

var styles$12 = {
  "Header": "Polaris-Modal-Header",
  "Title": "Polaris-Modal-Header__Title"
};

function Header$1(_ref) {
  var id = _ref.id,
      children = _ref.children,
      onClose = _ref.onClose;
  return /*#__PURE__*/React__default.createElement("div", {
    className: styles$12.Header
  }, /*#__PURE__*/React__default.createElement("div", {
    id: id,
    className: styles$12.Title
  }, /*#__PURE__*/React__default.createElement(DisplayText, {
    element: "h2",
    size: "small"
  }, children)), /*#__PURE__*/React__default.createElement(CloseButton, {
    onClick: onClose
  }));
}

var styles$13 = {
  "Section": "Polaris-Modal-Section",
  "subdued": "Polaris-Modal-Section--subdued",
  "flush": "Polaris-Modal-Section--flush"
};

function Section$3(_ref) {
  var children = _ref.children,
      _ref$flush = _ref.flush,
      flush = _ref$flush === void 0 ? false : _ref$flush,
      _ref$subdued = _ref.subdued,
      subdued = _ref$subdued === void 0 ? false : _ref$subdued;
  var className = classNames(styles$13.Section, flush && styles$13.flush, subdued && styles$13.subdued);
  return /*#__PURE__*/React__default.createElement("section", {
    className: className
  }, children);
}

var styles$14 = {
  "BodyWrapper": "Polaris-Modal__BodyWrapper",
  "Body": "Polaris-Modal__Body",
  "IFrame": "Polaris-Modal__IFrame",
  "Spinner": "Polaris-Modal__Spinner"
};

var IFRAME_LOADING_HEIGHT = 200;
var DEFAULT_IFRAME_CONTENT_HEIGHT = 400;
var getUniqueID$1 = createUniqueIDFactory('modal-header');
var APP_BRIDGE_PROPS = ['title', 'size', 'message', 'src', 'primaryAction', 'secondaryActions'];

var ModalInner = /*#__PURE__*/function (_React$Component) {
  _inherits(ModalInner, _React$Component);

  var _super = _createSuper(ModalInner);

  function ModalInner() {
    var _this;

    _classCallCheck(this, ModalInner);

    _this = _super.apply(this, arguments);
    _this.focusReturnPointNode = null;
    _this.state = {
      iframeHeight: IFRAME_LOADING_HEIGHT
    };
    _this.headerId = getUniqueID$1();

    _this.handleEntered = function () {
      var onTransitionEnd = _this.props.onTransitionEnd;

      if (onTransitionEnd) {
        onTransitionEnd();
      }
    };

    _this.handleExited = function () {
      _this.setState({
        iframeHeight: IFRAME_LOADING_HEIGHT
      });

      _this.focusReturnPointNode && write(function () {
        return _this.focusReturnPointNode && _this.focusReturnPointNode instanceof HTMLElement && focusFirstFocusableNode(_this.focusReturnPointNode, false);
      });
    };

    _this.handleIFrameLoad = function (evt) {
      var iframe = evt.target;

      if (iframe && iframe.contentWindow) {
        try {
          _this.setState({
            iframeHeight: iframe.contentWindow.document.body.scrollHeight
          });
        } catch (_a) {
          _this.setState({
            iframeHeight: DEFAULT_IFRAME_CONTENT_HEIGHT
          });
        }
      }

      var onIFrameLoad = _this.props.onIFrameLoad;

      if (onIFrameLoad != null) {
        onIFrameLoad(evt);
      }
    };

    return _this;
  }

  _createClass(ModalInner, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.polaris.appBridge == null) {
        return;
      } // eslint-disable-next-line no-console


      console.warn('Deprecation: Using `Modal` in an embedded app is deprecated and will be removed in v5.0. Use `Modal` from `@shopify/app-bridge-react` instead: https://help.shopify.com/en/api/embedded-apps/app-bridge/react-components/modal');
      var transformProps = this.transformProps();

      if (transformProps) {
        this.appBridgeModal = Modal$1.create(this.props.polaris.appBridge, transformProps);
      }

      if (this.appBridgeModal) {
        this.appBridgeModal.subscribe(Modal$1.Action.CLOSE, this.props.onClose);
      }

      var open = this.props.open;

      if (open) {
        this.focusReturnPointNode = document.activeElement;
        this.appBridgeModal && this.appBridgeModal.dispatch(Modal$1.Action.OPEN);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.polaris.appBridge == null || this.appBridgeModal == null) {
        return;
      }

      var open = this.props.open;
      var wasOpen = prevProps.open;
      var transformedProps = this.transformProps();
      var prevAppBridgeProps = pick(prevProps, APP_BRIDGE_PROPS);
      var currentAppBridgeProps = pick(this.props, APP_BRIDGE_PROPS);

      if (!isEqual(prevAppBridgeProps, currentAppBridgeProps) && transformedProps) {
        this.appBridgeModal.set(transformedProps);
      }

      if (wasOpen !== open) {
        if (open) {
          this.appBridgeModal.dispatch(Modal$1.Action.OPEN);
        } else {
          this.appBridgeModal.dispatch(Modal$1.Action.CLOSE);
        }
      }

      if (!wasOpen && open) {
        this.focusReturnPointNode = document.activeElement;
      } else if (wasOpen && !open && this.focusReturnPointNode instanceof HTMLElement && document.contains(this.focusReturnPointNode)) {
        this.focusReturnPointNode.focus();
        this.focusReturnPointNode = null;
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.polaris.appBridge == null || this.appBridgeModal == null) {
        return;
      }

      this.appBridgeModal.unsubscribe();
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.polaris.appBridge != null) {
        return null;
      }

      var _this$props = this.props,
          children = _this$props.children,
          title = _this$props.title,
          src = _this$props.src,
          iFrameName = _this$props.iFrameName,
          open = _this$props.open,
          instant = _this$props.instant,
          sectioned = _this$props.sectioned,
          loading = _this$props.loading,
          large = _this$props.large,
          limitHeight = _this$props.limitHeight,
          onClose = _this$props.onClose,
          footer = _this$props.footer,
          primaryAction = _this$props.primaryAction,
          secondaryActions = _this$props.secondaryActions,
          intl = _this$props.polaris.intl,
          onScrolledToBottom = _this$props.onScrolledToBottom;
      var iframeHeight = this.state.iframeHeight;
      var iframeTitle = intl.translate('Polaris.Modal.iFrameTitle');
      var dialog;
      var backdrop;

      if (open) {
        var footerMarkup = !footer && !primaryAction && !secondaryActions ? null : /*#__PURE__*/React__default.createElement(Footer, {
          primaryAction: primaryAction,
          secondaryActions: secondaryActions
        }, footer);
        var content = sectioned ? wrapWithComponent(children, Section$3, {}) : children;
        var body = loading ? /*#__PURE__*/React__default.createElement("div", {
          className: styles$14.Spinner
        }, /*#__PURE__*/React__default.createElement(Spinner, null)) : content;
        var bodyMarkup = src ? /*#__PURE__*/React__default.createElement("iframe", {
          name: iFrameName,
          title: iframeTitle,
          src: src,
          className: styles$14.IFrame,
          onLoad: this.handleIFrameLoad,
          style: {
            height: "".concat(iframeHeight, "px")
          }
        }) : /*#__PURE__*/React__default.createElement(Scrollable, {
          shadow: true,
          className: styles$14.Body,
          onScrolledToBottom: onScrolledToBottom
        }, body);
        var headerMarkup = title ? /*#__PURE__*/React__default.createElement(Header$1, {
          id: this.headerId,
          onClose: onClose
        }, title) : /*#__PURE__*/React__default.createElement(CloseButton, {
          onClick: onClose,
          title: false
        });
        var labelledBy = title ? this.headerId : undefined;
        dialog = /*#__PURE__*/React__default.createElement(Dialog, {
          instant: instant,
          labelledBy: labelledBy,
          onClose: onClose,
          onEntered: this.handleEntered,
          onExited: this.handleExited,
          large: large,
          limitHeight: limitHeight
        }, headerMarkup, /*#__PURE__*/React__default.createElement("div", {
          className: styles$14.BodyWrapper
        }, bodyMarkup), footerMarkup);
        backdrop = /*#__PURE__*/React__default.createElement(Backdrop, null);
      }

      var animated = !instant;
      return /*#__PURE__*/React__default.createElement(WithinContentContext.Provider, {
        value: true
      }, /*#__PURE__*/React__default.createElement(Portal, {
        idPrefix: "modal"
      }, /*#__PURE__*/React__default.createElement(TransitionGroup, {
        appear: animated,
        enter: animated,
        exit: animated
      }, dialog), backdrop));
    }
  }, {
    key: "transformProps",
    value: function transformProps() {
      var _this$props2 = this.props,
          title = _this$props2.title,
          size = _this$props2.size,
          message = _this$props2.message,
          src = _this$props2.src,
          primaryAction = _this$props2.primaryAction,
          secondaryActions = _this$props2.secondaryActions,
          polaris = _this$props2.polaris;
      var appBridge = polaris.appBridge;
      if (!appBridge) return;
      var safeTitle = typeof title === 'string' ? title : undefined;
      var safeSize = size != null ? Modal$1.Size[size] : undefined;
      var srcPayload = {};

      if (src != null) {
        if (/^https?:\/\//.test(src)) {
          srcPayload.url = src;
        } else {
          srcPayload.path = src;
        }
      }

      return Object.assign(Object.assign({
        title: safeTitle,
        message,
        size: safeSize
      }, srcPayload), {
        footer: {
          buttons: transformActions(appBridge, {
            primaryAction,
            secondaryActions
          })
        }
      });
    }
  }]);

  return ModalInner;
}(React__default.Component);

ModalInner.Section = Section$3;
var Modal = withAppProvider()(ModalInner);

function DiscardConfirmationModal(_ref) {
  var open = _ref.open,
      onDiscard = _ref.onDiscard,
      onCancel = _ref.onCancel;
  var i18n = useI18n();
  return /*#__PURE__*/React__default.createElement(Modal, {
    title: i18n.translate('Polaris.DiscardConfirmationModal.title'),
    open: open,
    onClose: onCancel,
    primaryAction: {
      content: i18n.translate('Polaris.DiscardConfirmationModal.primaryAction'),
      destructive: true,
      onAction: onDiscard
    },
    secondaryActions: [{
      content: i18n.translate('Polaris.DiscardConfirmationModal.secondaryAction'),
      onAction: onCancel
    }],
    sectioned: true
  }, i18n.translate('Polaris.DiscardConfirmationModal.message'));
}

var styles$15 = {
  "ContextualSaveBar": "Polaris-Frame-ContextualSaveBar",
  "LogoContainer": "Polaris-Frame-ContextualSaveBar__LogoContainer",
  "Contents": "Polaris-Frame-ContextualSaveBar__Contents",
  "fullWidth": "Polaris-Frame-ContextualSaveBar--fullWidth",
  "Message": "Polaris-Frame-ContextualSaveBar__Message",
  "ActionContainer": "Polaris-Frame-ContextualSaveBar__ActionContainer",
  "Action": "Polaris-Frame-ContextualSaveBar__Action",
  "newDesignLanguage": "Polaris-Frame-ContextualSaveBar--newDesignLanguage"
};

function ContextualSaveBar$1(_ref) {
  var alignContentFlush = _ref.alignContentFlush,
      message = _ref.message,
      saveAction = _ref.saveAction,
      discardAction = _ref.discardAction,
      fullWidth = _ref.fullWidth;
  var i18n = useI18n();

  var _useTheme = useTheme(),
      logo = _useTheme.logo;

  var _useFeatures = useFeatures(),
      _useFeatures$newDesig = _useFeatures.newDesignLanguage,
      newDesignLanguage = _useFeatures$newDesig === void 0 ? false : _useFeatures$newDesig;

  var _useToggle = useToggle(false),
      discardConfirmationModalVisible = _useToggle.value,
      toggleDiscardConfirmationModal = _useToggle.toggle,
      closeDiscardConfirmationModal = _useToggle.setFalse;

  var handleDiscardAction = useCallback(function () {
    if (discardAction && discardAction.onAction) {
      discardAction.onAction();
    }

    closeDiscardConfirmationModal();
  }, [closeDiscardConfirmationModal, discardAction]);
  var discardActionContent = discardAction && discardAction.content ? discardAction.content : i18n.translate('Polaris.ContextualSaveBar.discard');
  var discardActionHandler;

  if (discardAction && discardAction.discardConfirmationModal) {
    discardActionHandler = toggleDiscardConfirmationModal;
  } else if (discardAction) {
    discardActionHandler = discardAction.onAction;
  }

  var discardConfirmationModalMarkup = discardAction && discardAction.onAction && discardAction.discardConfirmationModal && /*#__PURE__*/React__default.createElement(DiscardConfirmationModal, {
    open: discardConfirmationModalVisible,
    onCancel: toggleDiscardConfirmationModal,
    onDiscard: handleDiscardAction
  });
  var discardActionMarkup = discardAction && /*#__PURE__*/React__default.createElement(Button, {
    url: discardAction.url,
    onClick: discardActionHandler,
    loading: discardAction.loading,
    disabled: discardAction.disabled,
    accessibilityLabel: discardAction.content
  }, discardActionContent);
  var saveActionContent = saveAction && saveAction.content ? saveAction.content : i18n.translate('Polaris.ContextualSaveBar.save');
  var saveActionMarkup = saveAction && /*#__PURE__*/React__default.createElement(Button, {
    primary: true,
    url: saveAction.url,
    onClick: saveAction.onAction,
    loading: saveAction.loading,
    disabled: saveAction.disabled,
    accessibilityLabel: saveAction.content
  }, saveActionContent);
  var width = getWidth(logo, 104);
  var imageMarkup = logo && /*#__PURE__*/React__default.createElement(Image, {
    style: {
      width
    },
    source: logo.contextualSaveBarSource || '',
    alt: ""
  });
  var logoMarkup = alignContentFlush ? null : /*#__PURE__*/React__default.createElement("div", {
    className: styles$15.LogoContainer,
    style: {
      width
    }
  }, imageMarkup);
  var contexualSaveBarClassName = classNames(styles$15.ContextualSaveBar, newDesignLanguage && styles$15.newDesignLanguage);
  var contentsClassName = classNames(styles$15.Contents, fullWidth && styles$15.fullWidth);
  return /*#__PURE__*/React__default.createElement(ThemeProvider, {
    theme: {
      colorScheme: 'inverse'
    }
  }, /*#__PURE__*/React__default.createElement("div", {
    className: contexualSaveBarClassName
  }, logoMarkup, /*#__PURE__*/React__default.createElement("div", {
    className: contentsClassName
  }, /*#__PURE__*/React__default.createElement("h2", {
    className: styles$15.Message
  }, message), /*#__PURE__*/React__default.createElement("div", {
    className: styles$15.ActionContainer
  }, /*#__PURE__*/React__default.createElement(Stack, {
    spacing: "tight",
    wrap: false
  }, discardActionMarkup, saveActionMarkup)))), discardConfirmationModalMarkup);
}

var styles$16 = {
  "startFade": "Polaris-Frame-CSSAnimation--startFade",
  "endFade": "Polaris-Frame-CSSAnimation--endFade",
  "startFadeUp": "Polaris-Frame-CSSAnimation--startFadeUp",
  "endFadeUp": "Polaris-Frame-CSSAnimation--endFadeUp"
};

var TransitionStatus$1;

(function (TransitionStatus) {
  TransitionStatus["Entering"] = "entering";
  TransitionStatus["Entered"] = "entered";
  TransitionStatus["Exiting"] = "exiting";
  TransitionStatus["Exited"] = "exited";
})(TransitionStatus$1 || (TransitionStatus$1 = {}));

function CSSAnimation(_ref) {
  var inProp = _ref.in,
      className = _ref.className,
      type = _ref.type,
      children = _ref.children;

  var _useState = useState(inProp ? TransitionStatus$1.Entering : TransitionStatus$1.Exited),
      _useState2 = _slicedToArray(_useState, 2),
      transitionStatus = _useState2[0],
      setTransitionStatus = _useState2[1];

  var isMounted = useRef(false);
  var node = useRef(null);
  useEffect(function () {
    if (!isMounted.current) return;
    transitionStatus === TransitionStatus$1.Entering && changeTransitionStatus(TransitionStatus$1.Entered);
  }, [transitionStatus]);
  useEffect(function () {
    if (!isMounted.current) return;
    inProp && changeTransitionStatus(TransitionStatus$1.Entering);
    !inProp && changeTransitionStatus(TransitionStatus$1.Exiting);
  }, [inProp]);
  useEffect(function () {
    isMounted.current = true;
  }, []);
  var wrapperClassName = classNames(className, styles$16[variationName('start', type)], inProp && styles$16[variationName('end', type)]);
  var content = transitionStatus === TransitionStatus$1.Exited && !inProp ? null : children;
  return /*#__PURE__*/React__default.createElement("div", {
    className: wrapperClassName,
    ref: node,
    onTransitionEnd: handleTransitionEnd
  }, content);

  function handleTransitionEnd() {
    transitionStatus === TransitionStatus$1.Exiting && changeTransitionStatus(TransitionStatus$1.Exited);
  }

  function changeTransitionStatus(transitionStatus) {
    setTransitionStatus(transitionStatus); // Forcing a reflow to enable the animation

    if (transitionStatus === TransitionStatus$1.Entering) node.current && node.current.getBoundingClientRect();
  }
}

var styles$17 = {
  "Frame": "Polaris-Frame",
  "Navigation": "Polaris-Frame__Navigation",
  "hasTopBar": "Polaris-Frame--hasTopBar",
  "Navigation-newDesignLanguage": "Polaris-Frame__Navigation--newDesignLanguage",
  "Navigation-enter": "Polaris-Frame__Navigation--enter",
  "Navigation-enterActive": "Polaris-Frame__Navigation--enterActive",
  "Navigation-exit": "Polaris-Frame__Navigation--exit",
  "Navigation-exitActive": "Polaris-Frame__Navigation--exitActive",
  "NavigationDismiss": "Polaris-Frame__NavigationDismiss",
  "Navigation-visible": "Polaris-Frame__Navigation--visible",
  "TopBar": "Polaris-Frame__TopBar",
  "hasNav": "Polaris-Frame--hasNav",
  "TopBar-newDesignLanguage": "Polaris-Frame__TopBar--newDesignLanguage",
  "ContextualSaveBar": "Polaris-Frame__ContextualSaveBar",
  "ContextualSaveBar-newDesignLanguage": "Polaris-Frame__ContextualSaveBar--newDesignLanguage",
  "Main": "Polaris-Frame__Main",
  "Main-newDesignLanguage": "Polaris-Frame__Main--newDesignLanguage",
  "Content": "Polaris-Frame__Content",
  "GlobalRibbonContainer": "Polaris-Frame__GlobalRibbonContainer",
  "GlobalRibbonContainer-newDesignLanguage": "Polaris-Frame__GlobalRibbonContainer--newDesignLanguage",
  "LoadingBar": "Polaris-Frame__LoadingBar",
  "Skip": "Polaris-Frame__Skip",
  "focused": "Polaris-Frame--focused",
  "SkipAnchor": "Polaris-Frame__SkipAnchor",
  "newDesignLanguage": "Polaris-Frame--newDesignLanguage",
  "pressed": "Polaris-Frame--pressed"
};

var GLOBAL_RIBBON_CUSTOM_PROPERTY = '--global-ribbon-height';
var APP_FRAME_MAIN = 'AppFrameMain';
var APP_FRAME_MAIN_ANCHOR_TARGET = 'AppFrameMainContent';
var APP_FRAME_NAV = 'AppFrameNav';
var APP_FRAME_TOP_BAR = 'AppFrameTopBar';
var APP_FRAME_LOADING_BAR = 'AppFrameLoadingBar';

var FrameInner = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(FrameInner, _React$PureComponent);

  var _super = _createSuper(FrameInner);

  function FrameInner() {
    var _this;

    _classCallCheck(this, FrameInner);

    _this = _super.apply(this, arguments);
    _this.state = {
      skipFocused: false,
      globalRibbonHeight: 0,
      loadingStack: 0,
      toastMessages: [],
      showContextualSaveBar: false
    };
    _this.contextualSaveBar = null;
    _this.globalRibbonContainer = null;
    _this.navigationNode = /*#__PURE__*/createRef();
    _this.skipToMainContentTargetNode = _this.props.skipToContentTarget || /*#__PURE__*/React__default.createRef();

    _this.setGlobalRibbonHeight = function () {
      var _assertThisInitialize = _assertThisInitialized(_this),
          globalRibbonContainer = _assertThisInitialize.globalRibbonContainer;

      if (globalRibbonContainer) {
        _this.setState({
          globalRibbonHeight: globalRibbonContainer.offsetHeight
        }, _this.setGlobalRibbonRootProperty);
      }
    };

    _this.setGlobalRibbonRootProperty = function () {
      var globalRibbonHeight = _this.state.globalRibbonHeight;
      setRootProperty(GLOBAL_RIBBON_CUSTOM_PROPERTY, "".concat(globalRibbonHeight, "px"), null);
    };

    _this.showToast = function (toast) {
      _this.setState(function (_ref) {
        var toastMessages = _ref.toastMessages;
        var hasToastById = toastMessages.find(function (_ref2) {
          var id = _ref2.id;
          return id === toast.id;
        }) != null;
        return {
          toastMessages: hasToastById ? toastMessages : [].concat(_toConsumableArray(toastMessages), [toast])
        };
      });
    };

    _this.hideToast = function (_ref3) {
      var id = _ref3.id;

      _this.setState(function (_ref4) {
        var toastMessages = _ref4.toastMessages;
        return {
          toastMessages: toastMessages.filter(function (_ref5) {
            var toastId = _ref5.id;
            return id !== toastId;
          })
        };
      });
    };

    _this.setContextualSaveBar = function (props) {
      var showContextualSaveBar = _this.state.showContextualSaveBar;
      _this.contextualSaveBar = Object.assign({}, props);

      if (showContextualSaveBar === true) {
        _this.forceUpdate();
      } else {
        _this.setState({
          showContextualSaveBar: true
        });
      }
    };

    _this.removeContextualSaveBar = function () {
      _this.contextualSaveBar = null;

      _this.setState({
        showContextualSaveBar: false
      });
    };

    _this.startLoading = function () {
      _this.setState(function (_ref6) {
        var loadingStack = _ref6.loadingStack;
        return {
          loadingStack: loadingStack + 1
        };
      });
    };

    _this.stopLoading = function () {
      _this.setState(function (_ref7) {
        var loadingStack = _ref7.loadingStack;
        return {
          loadingStack: Math.max(0, loadingStack - 1)
        };
      });
    };

    _this.handleResize = function () {
      if (_this.props.globalRibbon) {
        _this.setGlobalRibbonHeight();
      }
    };

    _this.handleFocus = function () {
      _this.setState({
        skipFocused: true
      });
    };

    _this.handleBlur = function () {
      _this.setState({
        skipFocused: false
      });
    };

    _this.handleClick = function () {
      _this.skipToMainContentTargetNode.current && _this.skipToMainContentTargetNode.current.focus();
    };

    _this.handleNavigationDismiss = function () {
      var onNavigationDismiss = _this.props.onNavigationDismiss;

      if (onNavigationDismiss != null) {
        onNavigationDismiss();
      }
    };

    _this.setGlobalRibbonContainer = function (node) {
      _this.globalRibbonContainer = node;
    };

    _this.handleNavKeydown = function (event) {
      var key = event.key;
      var _this$props = _this.props,
          isNavigationCollapsed = _this$props.polaris.mediaQuery.isNavigationCollapsed,
          showMobileNavigation = _this$props.showMobileNavigation;
      var mobileNavShowing = isNavigationCollapsed && showMobileNavigation;

      if (mobileNavShowing && key === 'Escape') {
        _this.handleNavigationDismiss();
      }
    };

    _this.findNavigationNode = function () {
      return _this.navigationNode.current;
    };

    return _this;
  }

  _createClass(FrameInner, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.handleResize();

      if (this.props.globalRibbon) {
        return;
      }

      this.setGlobalRibbonRootProperty();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.globalRibbon !== prevProps.globalRibbon) {
        this.setGlobalRibbonHeight();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          skipFocused = _this$state.skipFocused,
          loadingStack = _this$state.loadingStack,
          toastMessages = _this$state.toastMessages,
          showContextualSaveBar = _this$state.showContextualSaveBar;
      var _this$props2 = this.props,
          children = _this$props2.children,
          navigation = _this$props2.navigation,
          topBar = _this$props2.topBar,
          globalRibbon = _this$props2.globalRibbon,
          _this$props2$showMobi = _this$props2.showMobileNavigation,
          showMobileNavigation = _this$props2$showMobi === void 0 ? false : _this$props2$showMobi,
          skipToContentTarget = _this$props2.skipToContentTarget,
          _this$props2$polaris = _this$props2.polaris,
          intl = _this$props2$polaris.intl,
          isNavigationCollapsed = _this$props2$polaris.mediaQuery.isNavigationCollapsed;

      var _ref8 = this.context || {},
          newDesignLanguage = _ref8.newDesignLanguage;

      var navClassName = classNames(styles$17.Navigation, showMobileNavigation && styles$17['Navigation-visible'], newDesignLanguage && styles$17['Navigation-newDesignLanguage']);
      var mobileNavHidden = isNavigationCollapsed && !showMobileNavigation;
      var mobileNavShowing = isNavigationCollapsed && showMobileNavigation;
      var tabIndex = mobileNavShowing ? 0 : -1;
      var navigationMarkup = navigation ? /*#__PURE__*/React__default.createElement(TrapFocus, {
        trapping: mobileNavShowing
      }, /*#__PURE__*/React__default.createElement(CSSTransition, {
        findDOMNode: this.findNavigationNode,
        appear: isNavigationCollapsed,
        exit: isNavigationCollapsed,
        in: showMobileNavigation,
        timeout: durationSlow,
        classNames: navTransitionClasses
      }, /*#__PURE__*/React__default.createElement("div", {
        ref: this.navigationNode,
        className: navClassName,
        onKeyDown: this.handleNavKeydown,
        id: APP_FRAME_NAV,
        key: "NavContent",
        hidden: mobileNavHidden
      }, navigation, /*#__PURE__*/React__default.createElement("button", {
        type: "button",
        className: styles$17.NavigationDismiss,
        onClick: this.handleNavigationDismiss,
        "aria-hidden": mobileNavHidden || !isNavigationCollapsed && !showMobileNavigation,
        "aria-label": intl.translate('Polaris.Frame.Navigation.closeMobileNavigationLabel'),
        tabIndex: tabIndex
      }, /*#__PURE__*/React__default.createElement(Icon, {
        source: MobileCancelMajorMonotone,
        color: "white"
      }))))) : null;
      var loadingMarkup = loadingStack > 0 ? /*#__PURE__*/React__default.createElement("div", {
        className: styles$17.LoadingBar,
        id: APP_FRAME_LOADING_BAR
      }, /*#__PURE__*/React__default.createElement(Loading, null)) : null;
      var contextualSaveBarClassName = classNames(styles$17.ContextualSaveBar, newDesignLanguage && styles$17['ContextualSaveBar-newDesignLanguage']);
      var contextualSaveBarMarkup = /*#__PURE__*/React__default.createElement(CSSAnimation, {
        in: showContextualSaveBar,
        className: contextualSaveBarClassName,
        type: newDesignLanguage ? 'fadeUp' : 'fade'
      }, /*#__PURE__*/React__default.createElement(ContextualSaveBar$1, this.contextualSaveBar));
      var topBarClassName = classNames(styles$17.TopBar, newDesignLanguage && styles$17['TopBar-newDesignLanguage']);
      var topBarMarkup = topBar ? /*#__PURE__*/React__default.createElement("div", Object.assign({
        className: topBarClassName
      }, layer.props, dataPolarisTopBar.props, {
        id: APP_FRAME_TOP_BAR
      }), topBar) : null;
      var globalRibbonClassName = classNames(styles$17.GlobalRibbonContainer, newDesignLanguage && styles$17['GlobalRibbonContainer-newDesignLanguage']);
      var globalRibbonMarkup = globalRibbon ? /*#__PURE__*/React__default.createElement("div", {
        className: globalRibbonClassName,
        ref: this.setGlobalRibbonContainer
      }, globalRibbon) : null;
      var skipClassName = classNames(styles$17.Skip, skipFocused && styles$17.focused);
      var skipTarget = skipToContentTarget ? skipToContentTarget.current && skipToContentTarget.current.id || '' : APP_FRAME_MAIN_ANCHOR_TARGET;
      var skipMarkup = /*#__PURE__*/React__default.createElement("div", {
        className: skipClassName
      }, /*#__PURE__*/React__default.createElement("a", {
        href: "#".concat(skipTarget),
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        onClick: this.handleClick,
        className: styles$17.SkipAnchor
      }, intl.translate('Polaris.Frame.skipToContent')));
      var navigationAttributes = navigation ? {
        'data-has-navigation': true
      } : {};
      var frameClassName = classNames(styles$17.Frame, navigation && styles$17.hasNav, topBar && styles$17.hasTopBar);
      var mainClassName = classNames(styles$17.Main, newDesignLanguage && styles$17['Main-newDesignLanguage']);
      var navigationOverlayMarkup = showMobileNavigation && isNavigationCollapsed ? /*#__PURE__*/React__default.createElement(Backdrop, {
        belowNavigation: true,
        onClick: this.handleNavigationDismiss,
        onTouchStart: this.handleNavigationDismiss
      }) : null;
      var skipToMainContentTarget = skipToContentTarget ? null :
      /*#__PURE__*/
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      React__default.createElement("a", {
        id: APP_FRAME_MAIN_ANCHOR_TARGET,
        ref: this.skipToMainContentTargetNode,
        tabIndex: -1
      });
      var context = {
        showToast: this.showToast,
        hideToast: this.hideToast,
        startLoading: this.startLoading,
        stopLoading: this.stopLoading,
        setContextualSaveBar: this.setContextualSaveBar,
        removeContextualSaveBar: this.removeContextualSaveBar
      };
      return /*#__PURE__*/React__default.createElement(FrameContext.Provider, {
        value: context
      }, /*#__PURE__*/React__default.createElement("div", Object.assign({
        className: frameClassName
      }, layer.props, navigationAttributes), skipMarkup, topBarMarkup, navigationMarkup, contextualSaveBarMarkup, loadingMarkup, navigationOverlayMarkup, /*#__PURE__*/React__default.createElement("main", {
        className: mainClassName,
        id: APP_FRAME_MAIN,
        "data-has-global-ribbon": Boolean(globalRibbon)
      }, skipToMainContentTarget, /*#__PURE__*/React__default.createElement("div", {
        className: styles$17.Content
      }, children)), /*#__PURE__*/React__default.createElement(ToastManager, {
        toastMessages: toastMessages
      }), globalRibbonMarkup, /*#__PURE__*/React__default.createElement(EventListener, {
        event: "resize",
        handler: this.handleResize
      })));
    }
  }]);

  return FrameInner;
}(React__default.PureComponent);

FrameInner.contextType = FeaturesContext;
var navTransitionClasses = {
  enter: classNames(styles$17['Navigation-enter']),
  enterActive: classNames(styles$17['Navigation-enterActive']),
  enterDone: classNames(styles$17['Navigation-enterActive']),
  exit: classNames(styles$17['Navigation-exit']),
  exitActive: classNames(styles$17['Navigation-exitActive'])
};
var Frame = withAppProvider()(FrameInner);

var styles$18 = {
  "Indicator": "Polaris-Indicator",
  "pulseIndicator": "Polaris-Indicator--pulseIndicator",
  "bounce": "Polaris-Indicator--bounce",
  "pulse": "Polaris-Indicator--pulse"
};

function Indicator(_ref) {
  var _ref$pulse = _ref.pulse,
      pulse = _ref$pulse === void 0 ? true : _ref$pulse;
  var className = classNames(styles$18.Indicator, pulse && styles$18.pulseIndicator);
  return /*#__PURE__*/React__default.createElement("span", {
    className: className
  });
}

var styles$19 = {
  "KeyboardKey": "Polaris-KeyboardKey"
};

function KeyboardKey(_ref) {
  var children = _ref.children;
  var key = children || '';
  key = key.length > 1 ? key.toLowerCase() : key.toUpperCase();
  return /*#__PURE__*/React__default.createElement("kbd", {
    className: styles$19.KeyboardKey
  }, key);
}

var KONAMI_CODE = [Key.UpArrow, Key.UpArrow, Key.DownArrow, Key.DownArrow, Key.LeftArrow, Key.RightArrow, Key.LeftArrow, Key.RightArrow, Key.KeyB, Key.KeyA];
function KonamiCode(_ref) {
  var handler = _ref.handler;
  var keyEvent = 'keydown';

  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      position = _useState2[0],
      setPosition = _useState2[1];

  var handleKeyEvent = function handleKeyEvent(event) {
    var key = event.keyCode;
    var requiredKey = KONAMI_CODE[position];

    if (key === requiredKey) {
      if (position === KONAMI_CODE.length - 1) {
        handler(event);
        setPosition(0);
      } else {
        setPosition(position + 1);
      }
    } else {
      setPosition(0);
    }
  };

  useEffect(function () {
    document.addEventListener(keyEvent, handleKeyEvent);
    return function () {
      document.removeEventListener(keyEvent, handleKeyEvent);
    };
  });
  return null;
}

var styles$1a = {
  "Layout": "Polaris-Layout",
  "Section": "Polaris-Layout__Section",
  "Section-secondary": "Polaris-Layout__Section--secondary",
  "Section-fullWidth": "Polaris-Layout__Section--fullWidth",
  "Section-oneHalf": "Polaris-Layout__Section--oneHalf",
  "Section-oneThird": "Polaris-Layout__Section--oneThird",
  "AnnotatedSection": "Polaris-Layout__AnnotatedSection",
  "AnnotationWrapper": "Polaris-Layout__AnnotationWrapper",
  "AnnotationContent": "Polaris-Layout__AnnotationContent",
  "Annotation": "Polaris-Layout__Annotation",
  "AnnotationDescription": "Polaris-Layout__AnnotationDescription"
};

function AnnotatedSection(props) {
  var children = props.children,
      title = props.title,
      description = props.description;
  var descriptionMarkup = typeof description === 'string' ? /*#__PURE__*/React__default.createElement("p", null, description) : description;
  return /*#__PURE__*/React__default.createElement("div", {
    className: styles$1a.AnnotatedSection
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles$1a.AnnotationWrapper
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles$1a.Annotation
  }, /*#__PURE__*/React__default.createElement(TextContainer, null, /*#__PURE__*/React__default.createElement(Heading, null, title), descriptionMarkup && /*#__PURE__*/React__default.createElement("div", {
    className: styles$1a.AnnotationDescription
  }, descriptionMarkup))), /*#__PURE__*/React__default.createElement("div", {
    className: styles$1a.AnnotationContent
  }, children)));
}

function Section$4(_ref) {
  var children = _ref.children,
      secondary = _ref.secondary,
      fullWidth = _ref.fullWidth,
      oneHalf = _ref.oneHalf,
      oneThird = _ref.oneThird;
  var className = classNames(styles$1a.Section, secondary && styles$1a['Section-secondary'], fullWidth && styles$1a['Section-fullWidth'], oneHalf && styles$1a['Section-oneHalf'], oneThird && styles$1a['Section-oneThird']);
  return /*#__PURE__*/React__default.createElement("div", {
    className: className
  }, children);
}

var Layout = function Layout(_ref) {
  var sectioned = _ref.sectioned,
      children = _ref.children;
  var content = sectioned ? /*#__PURE__*/React__default.createElement(Section$4, null, children) : children;
  return /*#__PURE__*/React__default.createElement("div", {
    className: styles$1a.Layout
  }, content);
};
Layout.AnnotatedSection = AnnotatedSection;
Layout.Section = Section$4;

var styles$1b = {
  "Link": "Polaris-Link",
  "newDesignLanguage": "Polaris-Link--newDesignLanguage",
  "IconLockup": "Polaris-Link__IconLockup",
  "IconLayout": "Polaris-Link__IconLayout",
  "monochrome": "Polaris-Link--monochrome"
};

function Link(_ref) {
  var url = _ref.url,
      children = _ref.children,
      onClick = _ref.onClick,
      external = _ref.external,
      id = _ref.id,
      monochrome = _ref.monochrome;
  var i18n = useI18n();
  var childrenMarkup = children;

  var _useFeatures = useFeatures(),
      newDesignLanguage = _useFeatures.newDesignLanguage;

  if (external && typeof children === 'string') {
    var iconLabel = i18n.translate('Polaris.Common.newWindowAccessibilityHint');
    childrenMarkup = /*#__PURE__*/React__default.createElement(React__default.Fragment, null, children, /*#__PURE__*/React__default.createElement("span", {
      className: styles$1b.IconLockup
    }, /*#__PURE__*/React__default.createElement("span", {
      className: styles$1b.IconLayout
    }, /*#__PURE__*/React__default.createElement(Icon, {
      accessibilityLabel: iconLabel,
      source: ExternalSmallMinor
    }))));
  }

  return /*#__PURE__*/React__default.createElement(BannerContext.Consumer, null, function (BannerContext) {
    var shouldBeMonochrome = monochrome || BannerContext;
    var className = classNames(styles$1b.Link, shouldBeMonochrome && styles$1b.monochrome, newDesignLanguage && styles$1b.newDesignLanguage);
    return url ? /*#__PURE__*/React__default.createElement(UnstyledLink, {
      onClick: onClick,
      className: className,
      url: url,
      external: external,
      id: id
    }, childrenMarkup) : /*#__PURE__*/React__default.createElement("button", {
      type: "button",
      onClick: onClick,
      className: className,
      id: id
    }, childrenMarkup);
  });
}

var styles$1c = {
  "List": "Polaris-List",
  "typeNumber": "Polaris-List--typeNumber",
  "Item": "Polaris-List__Item"
};

function Item$6(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React__default.createElement("li", {
    className: styles$1c.Item
  }, children);
}

var List = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(List, _React$PureComponent);

  var _super = _createSuper(List);

  function List() {
    _classCallCheck(this, List);

    return _super.apply(this, arguments);
  }

  _createClass(List, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          _this$props$type = _this$props.type,
          type = _this$props$type === void 0 ? 'bullet' : _this$props$type;
      var className = classNames(styles$1c.List, type && styles$1c[variationName('type', type)]);
      var ListElement = type === 'bullet' ? 'ul' : 'ol';
      return /*#__PURE__*/React__default.createElement(ListElement, {
        className: className
      }, children);
    }
  }]);

  return List;
}(React__default.PureComponent);
List.Item = Item$6;

var Loading$1 = /*#__PURE__*/React__default.memo(function Loading() {
  var appBridgeLoading = useRef();
  var appBridge = useAppBridge();

  var _useFrame = useFrame(),
      startLoading = _useFrame.startLoading,
      stopLoading = _useFrame.stopLoading;

  useEffect(function () {
    if (appBridge == null) {
      startLoading();
    } else {
      // eslint-disable-next-line no-console
      console.warn('Deprecation: Using `Loading` in an embedded app is deprecated and will be removed in v5.0. Use `Loading` from `@shopify/app-bridge-react` instead: https://help.shopify.com/en/api/embedded-apps/app-bridge/react-components/loading');
      appBridgeLoading.current = Loading$2.create(appBridge);
      appBridgeLoading.current.dispatch(Loading$2.Action.START);
    }

    return function () {
      if (appBridge == null) {
        stopLoading();
      } else {
        appBridgeLoading.current && appBridgeLoading.current.dispatch(Loading$2.Action.STOP);
      }
    };
  }, [appBridge, startLoading, stopLoading]);
  return null;
});

var styles$1d = {
  "MediaCard": "Polaris-MediaCard",
  "portrait": "Polaris-MediaCard--portrait",
  "MediaContainer": "Polaris-MediaCard__MediaContainer",
  "sizeSmall": "Polaris-MediaCard--sizeSmall",
  "InfoContainer": "Polaris-MediaCard__InfoContainer",
  "Popover": "Polaris-MediaCard__Popover",
  "Heading": "Polaris-MediaCard__Heading",
  "PrimaryAction": "Polaris-MediaCard__PrimaryAction",
  "SecondaryAction": "Polaris-MediaCard__SecondaryAction",
  "ActionContainer": "Polaris-MediaCard__ActionContainer"
};

function MediaCard(_ref) {
  var title = _ref.title,
      children = _ref.children,
      primaryAction = _ref.primaryAction,
      secondaryAction = _ref.secondaryAction,
      description = _ref.description,
      _ref$popoverActions = _ref.popoverActions,
      popoverActions = _ref$popoverActions === void 0 ? [] : _ref$popoverActions,
      _ref$portrait = _ref.portrait,
      portrait = _ref$portrait === void 0 ? false : _ref$portrait,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'medium' : _ref$size;
  var i18n = useI18n();

  var _useToggle = useToggle(false),
      popoverActive = _useToggle.value,
      togglePopoverActive = _useToggle.toggle;

  var popoverActivator = /*#__PURE__*/React__default.createElement(Button, {
    icon: HorizontalDotsMinor,
    onClick: togglePopoverActive,
    size: "slim",
    plain: true,
    accessibilityLabel: i18n.translate('Polaris.MediaCard.popoverButton')
  });
  var popoverActionsMarkup = popoverActions.length > 0 ? /*#__PURE__*/React__default.createElement("div", {
    className: styles$1d.Popover
  }, /*#__PURE__*/React__default.createElement(Popover, {
    active: popoverActive,
    activator: popoverActivator,
    onClose: togglePopoverActive,
    preferredAlignment: "left",
    preferredPosition: "below"
  }, /*#__PURE__*/React__default.createElement(ActionList, {
    items: popoverActions,
    onActionAnyItem: togglePopoverActive
  }))) : null;
  var primaryActionMarkup = /*#__PURE__*/React__default.createElement("div", {
    className: styles$1d.PrimaryAction
  }, buttonFrom(primaryAction));
  var secondaryActionMarkup = secondaryAction ? /*#__PURE__*/React__default.createElement("div", {
    className: styles$1d.SecondaryAction
  }, buttonFrom(secondaryAction, {
    plain: true
  })) : null;
  var actionClassName = classNames(styles$1d.ActionContainer, portrait && styles$1d.portrait);
  var actionMarkup = /*#__PURE__*/React__default.createElement("div", {
    className: actionClassName
  }, /*#__PURE__*/React__default.createElement(ButtonGroup, null, primaryActionMarkup, secondaryActionMarkup));
  var mediaCardClassName = classNames(styles$1d.MediaCard, portrait && styles$1d.portrait);
  var mediaContainerClassName = classNames(styles$1d.MediaContainer, portrait && styles$1d.portrait, size === 'small' && styles$1d.sizeSmall);
  var infoContainerClassName = classNames(styles$1d.InfoContainer, portrait && styles$1d.portrait, size === 'small' && styles$1d.sizeSmall);
  return /*#__PURE__*/React__default.createElement(Card, null, /*#__PURE__*/React__default.createElement("div", {
    className: mediaCardClassName
  }, /*#__PURE__*/React__default.createElement("div", {
    className: mediaContainerClassName
  }, children), /*#__PURE__*/React__default.createElement("div", {
    className: infoContainerClassName
  }, /*#__PURE__*/React__default.createElement(Card.Section, null, popoverActionsMarkup, /*#__PURE__*/React__default.createElement(Stack, {
    vertical: true,
    spacing: "tight"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles$1d.Heading
  }, /*#__PURE__*/React__default.createElement(Heading, null, title)), /*#__PURE__*/React__default.createElement("p", {
    className: styles$1d.Description
  }, description), actionMarkup)))));
}

var NavigationContext = React__default.createContext({
  location: ''
});

var styles$1e = {
  "Navigation": "Polaris-Navigation",
  "Navigation-newDesignLanguage": "Polaris-Navigation__Navigation--newDesignLanguage",
  "Navigation-noMedia": "Polaris-Navigation__Navigation--noMedia",
  "UserMenu": "Polaris-Navigation__UserMenu",
  "ContextControl": "Polaris-Navigation__ContextControl",
  "PrimaryNavigation": "Polaris-Navigation__PrimaryNavigation",
  "LogoContainer": "Polaris-Navigation__LogoContainer",
  "Logo": "Polaris-Navigation__Logo",
  "LogoLink": "Polaris-Navigation__LogoLink",
  "Item": "Polaris-Navigation__Item",
  "Icon": "Polaris-Navigation__Icon",
  "keyFocused": "Polaris-Navigation--keyFocused",
  "Item-selected": "Polaris-Navigation__Item--selected",
  "Item-disabled": "Polaris-Navigation__Item--disabled",
  "Badge": "Polaris-Navigation__Badge",
  "subNavigationActive": "Polaris-Navigation--subNavigationActive",
  "ListItem": "Polaris-Navigation__ListItem",
  "RollupSection": "Polaris-Navigation__RollupSection",
  "SecondaryNavigation": "Polaris-Navigation__SecondaryNavigation",
  "fade-in": "Polaris-Navigation__fade--in",
  "ListItem-hasAction": "Polaris-Navigation__ListItem--hasAction",
  "ItemWrapper": "Polaris-Navigation__ItemWrapper",
  "Text": "Polaris-Navigation__Text",
  "SecondaryAction": "Polaris-Navigation__SecondaryAction",
  "List": "Polaris-Navigation__List",
  "SecondaryNavigation-noIcon": "Polaris-Navigation__SecondaryNavigation--noIcon",
  "Section": "Polaris-Navigation__Section",
  "Section-fill": "Polaris-Navigation__Section--fill",
  "Section-withSeparator": "Polaris-Navigation__Section--withSeparator",
  "SectionHeading": "Polaris-Navigation__SectionHeading",
  "Action": "Polaris-Navigation__Action",
  "RollupToggle": "Polaris-Navigation__RollupToggle",
  "Indicator": "Polaris-Navigation__Indicator"
};

function Secondary(_ref) {
  var children = _ref.children,
      expanded = _ref.expanded;
  var id = useUniqueId('SecondaryNavigation');
  return /*#__PURE__*/React__default.createElement(Collapsible, {
    id: id,
    open: expanded
  }, /*#__PURE__*/React__default.createElement("ul", {
    className: styles$1e.List
  }, children));
}

var MatchState;

(function (MatchState) {
  MatchState[MatchState["MatchForced"] = 0] = "MatchForced";
  MatchState[MatchState["MatchUrl"] = 1] = "MatchUrl";
  MatchState[MatchState["MatchPaths"] = 2] = "MatchPaths";
  MatchState[MatchState["Excluded"] = 3] = "Excluded";
  MatchState[MatchState["NoMatch"] = 4] = "NoMatch";
})(MatchState || (MatchState = {}));

function Item$7(_ref) {
  var url = _ref.url,
      icon = _ref.icon,
      label = _ref.label,
      _ref$subNavigationIte = _ref.subNavigationItems,
      subNavigationItems = _ref$subNavigationIte === void 0 ? [] : _ref$subNavigationIte,
      secondaryAction = _ref.secondaryAction,
      disabled = _ref.disabled,
      onClick = _ref.onClick,
      accessibilityLabel = _ref.accessibilityLabel,
      selectedOverride = _ref.selected,
      badge = _ref.badge,
      isNew = _ref.new,
      matches = _ref.matches,
      exactMatch = _ref.exactMatch,
      matchPaths = _ref.matchPaths,
      excludePaths = _ref.excludePaths;
  var i18n = useI18n();

  var _useMediaQuery = useMediaQuery(),
      isNavigationCollapsed = _useMediaQuery.isNavigationCollapsed;

  var _useContext = useContext(NavigationContext),
      location = _useContext.location,
      onNavigationDismiss = _useContext.onNavigationDismiss;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      expanded = _useState2[0],
      setExpanded = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      keyFocused = _useState4[0],
      setKeyFocused = _useState4[1];

  useEffect(function () {
    if (!isNavigationCollapsed && expanded) {
      setExpanded(false);
    }
  }, [expanded, isNavigationCollapsed]);
  var handleKeyUp = useCallback(function (event) {
    if (event.keyCode === Key.Tab) {
      !keyFocused && setKeyFocused(true);
    }
  }, [keyFocused]);
  var handleBlur = useCallback(function () {
    keyFocused && setKeyFocused(false);
  }, [keyFocused]);
  var tabIndex = disabled ? -1 : 0;
  var hasNewChild = subNavigationItems.filter(function (subNavigationItem) {
    return subNavigationItem.new;
  }).length > 0;
  var indicatorMarkup = hasNewChild ? /*#__PURE__*/React__default.createElement("span", {
    className: styles$1e.Indicator
  }, /*#__PURE__*/React__default.createElement(Indicator, {
    pulse: true
  })) : null;
  var iconMarkup = icon ? /*#__PURE__*/React__default.createElement("div", {
    className: styles$1e.Icon
  }, /*#__PURE__*/React__default.createElement(Icon, {
    source: icon
  })) : null;
  var badgeMarkup = null;

  if (isNew) {
    badgeMarkup = /*#__PURE__*/React__default.createElement(Badge, {
      status: "new",
      size: "small"
    }, i18n.translate('Polaris.Badge.STATUS_LABELS.new'));
  } else if (typeof badge === 'string') {
    badgeMarkup = /*#__PURE__*/React__default.createElement(Badge, {
      status: "new",
      size: "small"
    }, badge);
  } else {
    badgeMarkup = badge;
  }

  var wrappedBadgeMarkup = badgeMarkup == null ? null : /*#__PURE__*/React__default.createElement("div", {
    className: styles$1e.Badge
  }, badgeMarkup);
  var itemContentMarkup = /*#__PURE__*/React__default.createElement(Fragment, null, iconMarkup, /*#__PURE__*/React__default.createElement("span", {
    className: styles$1e.Text
  }, label, indicatorMarkup), wrappedBadgeMarkup);

  if (url == null) {
    var _className = classNames(styles$1e.Item, disabled && styles$1e['Item-disabled'], keyFocused && styles$1e.keyFocused);

    return /*#__PURE__*/React__default.createElement("li", {
      className: styles$1e.ListItem
    }, /*#__PURE__*/React__default.createElement("button", {
      type: "button",
      className: _className,
      disabled: disabled,
      "aria-disabled": disabled,
      "aria-label": accessibilityLabel,
      onClick: getClickHandler(onClick),
      onKeyUp: handleKeyUp,
      onBlur: handleBlur
    }, itemContentMarkup));
  }

  var secondaryActionMarkup = secondaryAction && /*#__PURE__*/React__default.createElement(UnstyledLink, {
    external: true,
    url: secondaryAction.url,
    className: styles$1e.SecondaryAction,
    tabIndex: tabIndex,
    "aria-disabled": disabled,
    "aria-label": secondaryAction.accessibilityLabel
  }, /*#__PURE__*/React__default.createElement(Icon, {
    source: secondaryAction.icon
  }));
  var matchState = matchStateForItem({
    url,
    matches,
    exactMatch,
    matchPaths,
    excludePaths
  }, location);
  var matchingSubNavigationItems = subNavigationItems.filter(function (item) {
    var subMatchState = matchStateForItem(item, location);
    return subMatchState === MatchState.MatchForced || subMatchState === MatchState.MatchUrl || subMatchState === MatchState.MatchPaths;
  });
  var childIsActive = matchingSubNavigationItems.length > 0;
  var selected = selectedOverride == null ? matchState === MatchState.MatchForced || matchState === MatchState.MatchUrl || matchState === MatchState.MatchPaths : selectedOverride;
  var showExpanded = selected || expanded || childIsActive;
  var itemClassName = classNames(styles$1e.Item, disabled && styles$1e['Item-disabled'], selected && subNavigationItems.length === 0 && styles$1e['Item-selected'], showExpanded && styles$1e.subNavigationActive, keyFocused && styles$1e.keyFocused);
  var secondaryNavigationMarkup = null;

  if (subNavigationItems.length > 0 && showExpanded) {
    var longestMatch = matchingSubNavigationItems.sort(function (_ref2, _ref3) {
      var firstUrl = _ref2.url;
      var secondUrl = _ref3.url;
      return secondUrl.length - firstUrl.length;
    })[0];
    var SecondaryNavigationClassName = classNames(styles$1e.SecondaryNavigation, !icon && styles$1e['SecondaryNavigation-noIcon']);
    secondaryNavigationMarkup = /*#__PURE__*/React__default.createElement("div", {
      className: SecondaryNavigationClassName
    }, /*#__PURE__*/React__default.createElement(Secondary, {
      expanded: showExpanded
    }, subNavigationItems.map(function (item) {
      var label = item.label,
          rest = __rest(item, ["label"]);

      return /*#__PURE__*/React__default.createElement(Item$7, Object.assign({}, rest, {
        key: label,
        label: label,
        matches: item === longestMatch,
        onClick: onNavigationDismiss
      }));
    })));
  }

  var className = classNames(styles$1e.ListItem, secondaryAction && styles$1e['ListItem-hasAction']);
  return /*#__PURE__*/React__default.createElement("li", {
    className: className
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles$1e.ItemWrapper
  }, /*#__PURE__*/React__default.createElement(UnstyledLink, {
    url: url,
    className: itemClassName,
    tabIndex: tabIndex,
    "aria-disabled": disabled,
    "aria-label": accessibilityLabel,
    onClick: getClickHandler(onClick),
    onKeyUp: handleKeyUp,
    onBlur: handleBlur
  }, itemContentMarkup), secondaryActionMarkup), secondaryNavigationMarkup);

  function getClickHandler(onClick) {
    return function (event) {
      var currentTarget = event.currentTarget;

      if (currentTarget.getAttribute('href') === location) {
        event.preventDefault();
      }

      if (subNavigationItems && subNavigationItems.length > 0 && isNavigationCollapsed) {
        event.preventDefault();
        setExpanded(!expanded);
      } else if (onNavigationDismiss) {
        onNavigationDismiss();

        if (onClick && onClick !== onNavigationDismiss) {
          onClick();
        }

        return;
      }

      if (onClick) {
        onClick();
      }
    };
  }
}
function isNavigationItemActive(navigationItem, currentPath) {
  var matchState = matchStateForItem(navigationItem, currentPath);
  var matchingSubNavigationItems = navigationItem.subNavigationItems && navigationItem.subNavigationItems.filter(function (item) {
    var subMatchState = matchStateForItem(item, currentPath);
    return subMatchState === MatchState.MatchForced || subMatchState === MatchState.MatchUrl || subMatchState === MatchState.MatchPaths;
  });
  var childIsActive = matchingSubNavigationItems && matchingSubNavigationItems.length > 0;
  var selected = matchState === MatchState.MatchForced || matchState === MatchState.MatchUrl || matchState === MatchState.MatchPaths;
  return selected || childIsActive;
}

function normalizePathname(pathname) {
  var barePathname = pathname.split('?')[0].split('#')[0];
  return barePathname.endsWith('/') ? barePathname : "".concat(barePathname, "/");
}

function safeEqual(location, path) {
  return normalizePathname(location) === normalizePathname(path);
}

function safeStartsWith(location, path) {
  return normalizePathname(location).startsWith(normalizePathname(path));
}

function matchStateForItem(_ref4, location) {
  var url = _ref4.url,
      matches = _ref4.matches,
      exactMatch = _ref4.exactMatch,
      matchPaths = _ref4.matchPaths,
      excludePaths = _ref4.excludePaths;

  if (url == null) {
    return MatchState.NoMatch;
  }

  if (matches) {
    return MatchState.MatchForced;
  }

  if (matches === false || excludePaths && excludePaths.some(function (path) {
    return safeStartsWith(location, path);
  })) {
    return MatchState.Excluded;
  }

  if (matchPaths && matchPaths.some(function (path) {
    return safeStartsWith(location, path);
  })) {
    return MatchState.MatchPaths;
  }

  var matchesUrl = exactMatch ? safeEqual(location, url) : safeStartsWith(location, url);
  return matchesUrl ? MatchState.MatchUrl : MatchState.NoMatch;
}

function Section$5(_ref) {
  var title = _ref.title,
      fill = _ref.fill,
      action = _ref.action,
      items = _ref.items,
      rollup = _ref.rollup,
      separator = _ref.separator;

  var _useToggle = useToggle(false),
      expanded = _useToggle.value,
      toggleExpanded = _useToggle.toggle,
      setExpandedFalse = _useToggle.setFalse;

  var animationFrame = useRef(null);

  var handleClick = function handleClick(onClick, hasSubNavItems) {
    return function () {
      if (onClick) {
        onClick();
      }

      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }

      if (!hasSubNavItems || !navigationBarCollapsed().matches) {
        animationFrame.current = requestAnimationFrame(setExpandedFalse);
      }
    };
  };

  useEffect(function () {
    return function () {
      animationFrame.current && cancelAnimationFrame(animationFrame.current);
    };
  });
  var className = classNames(styles$1e.Section, separator && styles$1e['Section-withSeparator'], fill && styles$1e['Section-fill']);
  var actionMarkup = action && /*#__PURE__*/React__default.createElement("button", {
    type: "button",
    className: styles$1e.Action,
    "aria-label": action.accessibilityLabel,
    onClick: action.onClick
  }, /*#__PURE__*/React__default.createElement(Icon, {
    source: action.icon
  }));
  var sectionHeadingMarkup = title && /*#__PURE__*/React__default.createElement("li", {
    className: styles$1e.SectionHeading
  }, /*#__PURE__*/React__default.createElement("span", {
    className: styles$1e.Text
  }, title), actionMarkup);
  var itemsMarkup = items.map(function (item) {
    var onClick = item.onClick,
        label = item.label,
        subNavigationItems = item.subNavigationItems,
        rest = __rest(item, ["onClick", "label", "subNavigationItems"]);

    var hasSubNavItems = subNavigationItems != null && subNavigationItems.length > 0;
    return /*#__PURE__*/React__default.createElement(Item$7, Object.assign({}, rest, {
      key: label,
      label: label,
      subNavigationItems: subNavigationItems,
      onClick: handleClick(onClick, hasSubNavItems)
    }));
  });
  var toggleClassName = classNames(styles$1e.Item, styles$1e.RollupToggle);
  var ariaLabel = rollup && (expanded ? rollup.hide : rollup.view);
  var toggleRollup = rollup && items.length > rollup.after && /*#__PURE__*/React__default.createElement("div", {
    className: styles$1e.ListItem,
    key: "List Item"
  }, /*#__PURE__*/React__default.createElement("button", {
    type: "button",
    className: toggleClassName,
    onClick: toggleExpanded,
    "aria-label": ariaLabel
  }, /*#__PURE__*/React__default.createElement("span", {
    className: styles$1e.Icon
  }, /*#__PURE__*/React__default.createElement(Icon, {
    source: HorizontalDotsMinor
  }))));
  var activeItemIndex = items.findIndex(function (item) {
    if (!rollup) {
      return false;
    }

    return rollup.activePath === item.url || item.url && rollup.activePath.startsWith(item.url) || (item.subNavigationItems ? item.subNavigationItems.some(function (_ref2) {
      var itemUrl = _ref2.url;
      return rollup.activePath.startsWith(itemUrl);
    }) : false);
  });
  var sectionItems = rollup ? itemsMarkup.slice(0, rollup.after) : itemsMarkup;
  var additionalItems = rollup ? itemsMarkup.slice(rollup.after) : [];

  if (rollup && activeItemIndex !== -1 && activeItemIndex > rollup.after - 1) {
    sectionItems.push.apply(sectionItems, _toConsumableArray(additionalItems.splice(activeItemIndex - rollup.after, 1)));
  }

  var additionalItemsId = useUniqueId('AdditionalItems');
  var activeItemsMarkup = rollup && additionalItems.length > 0 && /*#__PURE__*/React__default.createElement("li", {
    className: styles$1e.RollupSection
  }, /*#__PURE__*/React__default.createElement(Collapsible, {
    id: additionalItemsId,
    open: expanded
  }, /*#__PURE__*/React__default.createElement("ul", {
    className: styles$1e.List
  }, additionalItems)), toggleRollup);
  return /*#__PURE__*/React__default.createElement("ul", {
    className: className
  }, sectionHeadingMarkup, sectionItems, activeItemsMarkup);
}

var Navigation$1 = function Navigation(_ref) {
  var children = _ref.children,
      contextControl = _ref.contextControl,
      location = _ref.location,
      onDismiss = _ref.onDismiss;

  var _useTheme = useTheme(),
      logo = _useTheme.logo;

  var _useFeatures = useFeatures(),
      newDesignLanguage = _useFeatures.newDesignLanguage;

  var width = getWidth(logo, 104);
  var logoMarkup = logo && newDesignLanguage ? /*#__PURE__*/React__default.createElement("div", {
    className: styles$1e.LogoContainer
  }, /*#__PURE__*/React__default.createElement(UnstyledLink, {
    url: logo.url || '',
    className: styles$1e.LogoLink,
    style: {
      width
    }
  }, /*#__PURE__*/React__default.createElement(Image, {
    source: logo.topBarSource || '',
    alt: logo.accessibilityLabel || '',
    className: styles$1e.Logo,
    style: {
      width
    }
  }))) : null;
  var mediaMarkup = contextControl ? /*#__PURE__*/React__default.createElement("div", {
    className: styles$1e.ContextControl
  }, contextControl) : logoMarkup;
  var className = classNames(styles$1e.Navigation, !mediaMarkup && newDesignLanguage && styles$1e['Navigation-noMedia'], newDesignLanguage && styles$1e['Navigation-newDesignLanguage']);
  var context = {
    location,
    onNavigationDismiss: onDismiss
  };
  return /*#__PURE__*/React__default.createElement(NavigationContext.Provider, {
    value: context
  }, /*#__PURE__*/React__default.createElement(WithinContentContext.Provider, {
    value: true
  }, /*#__PURE__*/React__default.createElement("nav", {
    className: className
  }, mediaMarkup, /*#__PURE__*/React__default.createElement(Scrollable, {
    className: styles$1e.PrimaryNavigation
  }, children))));
};
Navigation$1.Item = Item$7;
Navigation$1.Section = Section$5;

var EditableTarget;

(function (EditableTarget) {
  EditableTarget["Input"] = "INPUT";
  EditableTarget["Textarea"] = "TEXTAREA";
  EditableTarget["Select"] = "SELECT";
  EditableTarget["ContentEditable"] = "contenteditable";
})(EditableTarget || (EditableTarget = {}));

function isInputFocused() {
  if (document == null || document.activeElement == null) {
    return false;
  }

  var tagName = document.activeElement.tagName;
  return tagName === EditableTarget.Input || tagName === EditableTarget.Textarea || tagName === EditableTarget.Select || document.activeElement.hasAttribute(EditableTarget.ContentEditable);
}

var styles$1f = {
  "Tooltip": "Polaris-Tooltip",
  "measuring": "Polaris-Tooltip--measuring",
  "positionedAbove": "Polaris-Tooltip--positionedAbove",
  "light": "Polaris-Tooltip--light",
  "Wrapper": "Polaris-Tooltip__Wrapper",
  "Content": "Polaris-Tooltip__Content",
  "Label": "Polaris-Tooltip__Label"
};

var TooltipOverlay = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(TooltipOverlay, _React$PureComponent);

  var _super = _createSuper(TooltipOverlay);

  function TooltipOverlay() {
    var _this;

    _classCallCheck(this, TooltipOverlay);

    _this = _super.apply(this, arguments);

    _this.renderOverlay = function () {
      var _this$props = _this.props,
          active = _this$props.active,
          activator = _this$props.activator,
          _this$props$preferred = _this$props.preferredPosition,
          preferredPosition = _this$props$preferred === void 0 ? 'below' : _this$props$preferred;
      return /*#__PURE__*/React__default.createElement(PositionedOverlay, {
        active: active,
        activator: activator,
        preferredPosition: preferredPosition,
        render: _this.renderTooltip
      });
    };

    _this.renderTooltip = function (overlayDetails) {
      var measuring = overlayDetails.measuring,
          desiredHeight = overlayDetails.desiredHeight,
          positioning = overlayDetails.positioning;
      var _this$props2 = _this.props,
          id = _this$props2.id,
          children = _this$props2.children,
          light = _this$props2.light;
      var containerClassName = classNames(styles$1f.Tooltip, light && styles$1f.light, measuring && styles$1f.measuring, positioning === 'above' && styles$1f.positionedAbove);
      var contentStyles = measuring ? undefined : {
        minHeight: desiredHeight
      };
      return /*#__PURE__*/React__default.createElement("div", Object.assign({
        className: containerClassName
      }, layer.props), /*#__PURE__*/React__default.createElement("div", {
        className: styles$1f.Wrapper
      }, /*#__PURE__*/React__default.createElement("div", {
        id: id,
        role: "tooltip",
        className: styles$1f.Content,
        style: contentStyles
      }, children)));
    };

    return _this;
  }

  _createClass(TooltipOverlay, [{
    key: "render",
    value: function render() {
      var markup = this.props.active ? this.renderOverlay() : null;
      return markup;
    }
  }]);

  return TooltipOverlay;
}(React__default.PureComponent);

function Tooltip(_ref) {
  var children = _ref.children,
      content = _ref.content,
      light = _ref.light,
      originalActive = _ref.active,
      _ref$preferredPositio = _ref.preferredPosition,
      preferredPosition = _ref$preferredPositio === void 0 ? 'below' : _ref$preferredPositio,
      _ref$activatorWrapper = _ref.activatorWrapper,
      activatorWrapper = _ref$activatorWrapper === void 0 ? 'span' : _ref$activatorWrapper;
  var WrapperComponent = activatorWrapper;

  var _useToggle = useToggle(Boolean(originalActive)),
      active = _useToggle.value,
      handleFocus = _useToggle.setTrue,
      handleBlur = _useToggle.setFalse;

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      activatorNode = _useState2[0],
      setActivatorNode = _useState2[1];

  var id = useUniqueId('TooltipContent');
  var activatorContainer = useRef(null);
  var mouseEntered = useRef(false);
  useEffect(function () {
    var firstFocusable = activatorContainer.current ? findFirstFocusableNode$1(activatorContainer.current) : null;
    var accessibilityNode = firstFocusable || activatorContainer.current;
    if (!accessibilityNode) return;
    accessibilityNode.tabIndex = 0;
    accessibilityNode.setAttribute('aria-describedby', id);
  }, [id, children]);
  var portal = activatorNode ? /*#__PURE__*/React__default.createElement(Portal, {
    idPrefix: "tooltip"
  }, /*#__PURE__*/React__default.createElement(TooltipOverlay, {
    id: id,
    preferredPosition: preferredPosition,
    activator: activatorNode,
    active: active,
    onClose: noop$8,
    light: light
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles$1f.Label
  }, content))) : null;
  return /*#__PURE__*/React__default.createElement(WrapperComponent, {
    onFocus: handleFocus,
    onBlur: handleBlur,
    onMouseLeave: handleMouseLeave,
    onMouseOver: handleMouseEnterFix,
    ref: setActivator
  }, children, portal);

  function setActivator(node) {
    var activatorContainerRef = activatorContainer;

    if (node == null) {
      activatorContainerRef.current = null;
      setActivatorNode(null);
      return;
    }

    node.firstElementChild instanceof HTMLElement && setActivatorNode(node.firstElementChild);
    activatorContainerRef.current = node;
  }

  function handleMouseEnter() {
    mouseEntered.current = true;
    handleFocus();
  }

  function handleMouseLeave() {
    mouseEntered.current = false;
    handleBlur();
  } // https://github.com/facebook/react/issues/10109
  // Mouseenter event not triggered when cursor moves from disabled button


  function handleMouseEnterFix() {
    !mouseEntered.current && handleMouseEnter();
  }
}

function noop$8() {}

var styles$1g = {
  "Pagination": "Polaris-Pagination",
  "plain": "Polaris-Pagination--plain",
  "Button": "Polaris-Pagination__Button",
  "newDesignLanguage": "Polaris-Pagination--newDesignLanguage",
  "PreviousButton": "Polaris-Pagination__PreviousButton",
  "NextButton": "Polaris-Pagination__NextButton",
  "Label": "Polaris-Pagination__Label"
};

function Pagination(_ref) {
  var hasNext = _ref.hasNext,
      hasPrevious = _ref.hasPrevious,
      nextURL = _ref.nextURL,
      previousURL = _ref.previousURL,
      onNext = _ref.onNext,
      onPrevious = _ref.onPrevious,
      nextTooltip = _ref.nextTooltip,
      previousTooltip = _ref.previousTooltip,
      nextKeys = _ref.nextKeys,
      previousKeys = _ref.previousKeys,
      plain = _ref.plain,
      accessibilityLabel = _ref.accessibilityLabel,
      label = _ref.label;
  var i18n = useI18n();

  var _useFeatures = useFeatures(),
      newDesignLanguage = _useFeatures.newDesignLanguage;

  var node = /*#__PURE__*/React__default.createRef();
  var navLabel = accessibilityLabel || i18n.translate('Polaris.Pagination.pagination');
  var className = classNames(styles$1g.Pagination, plain && styles$1g.plain);
  var previousClassName = classNames(styles$1g.Button, !label && styles$1g.PreviousButton);
  var nextClassName = classNames(styles$1g.Button, !label && styles$1g.NextButton);
  var previousButton = previousURL ? /*#__PURE__*/React__default.createElement(UnstyledLink, {
    className: previousClassName,
    url: previousURL,
    onMouseUp: handleMouseUpByBlurring,
    "aria-label": i18n.translate('Polaris.Pagination.previous'),
    id: "previousURL"
  }, /*#__PURE__*/React__default.createElement(Icon, {
    source: ArrowLeftMinor
  })) : /*#__PURE__*/React__default.createElement("button", {
    onClick: onPrevious,
    type: "button",
    onMouseUp: handleMouseUpByBlurring,
    className: previousClassName,
    "aria-label": i18n.translate('Polaris.Pagination.previous'),
    disabled: !hasPrevious
  }, /*#__PURE__*/React__default.createElement(Icon, {
    source: ArrowLeftMinor
  }));
  var nextButton = nextURL ? /*#__PURE__*/React__default.createElement(UnstyledLink, {
    className: nextClassName,
    url: nextURL,
    onMouseUp: handleMouseUpByBlurring,
    "aria-label": i18n.translate('Polaris.Pagination.next'),
    id: "nextURL"
  }, /*#__PURE__*/React__default.createElement(Icon, {
    source: ArrowRightMinor
  })) : /*#__PURE__*/React__default.createElement("button", {
    onClick: onNext,
    type: "button",
    onMouseUp: handleMouseUpByBlurring,
    className: nextClassName,
    "aria-label": i18n.translate('Polaris.Pagination.next'),
    disabled: !hasNext
  }, /*#__PURE__*/React__default.createElement(Icon, {
    source: ArrowRightMinor
  }));
  var prev = newDesignLanguage ? /*#__PURE__*/React__default.createElement(Button, {
    icon: ChevronLeftMinor,
    accessibilityLabel: i18n.translate('Polaris.Pagination.previous'),
    url: previousURL,
    onClick: onPrevious,
    disabled: !hasPrevious
  }) : previousButton;
  var constructedPrevious = previousTooltip && hasPrevious ? /*#__PURE__*/React__default.createElement(Tooltip, {
    activatorWrapper: "span",
    content: previousTooltip
  }, prev) : prev;
  var next = newDesignLanguage ? /*#__PURE__*/React__default.createElement(Button, {
    icon: ChevronRightMinor,
    accessibilityLabel: i18n.translate('Polaris.Pagination.next'),
    url: nextURL,
    onClick: onNext,
    disabled: !hasNext
  }) : nextButton;
  var constructedNext = nextTooltip && hasNext ? /*#__PURE__*/React__default.createElement(Tooltip, {
    activatorWrapper: "span",
    content: nextTooltip
  }, next) : next;
  var previousHandler = onPrevious || noop$9;
  var previousButtonEvents = previousKeys && (previousURL || onPrevious) && hasPrevious && previousKeys.map(function (key) {
    return /*#__PURE__*/React__default.createElement(KeypressListener, {
      key: key,
      keyCode: key,
      handler: previousURL ? handleCallback(clickPaginationLink('previousURL', node)) : handleCallback(previousHandler)
    });
  });
  var nextHandler = onNext || noop$9;
  var nextButtonEvents = nextKeys && (nextURL || onNext) && hasNext && nextKeys.map(function (key) {
    return /*#__PURE__*/React__default.createElement(KeypressListener, {
      key: key,
      keyCode: key,
      handler: nextURL ? handleCallback(clickPaginationLink('nextURL', node)) : handleCallback(nextHandler)
    });
  });
  var labelTextMarkup = hasNext && hasPrevious ? /*#__PURE__*/React__default.createElement(TextStyle, null, label) : /*#__PURE__*/React__default.createElement(TextStyle, {
    variation: "subdued"
  }, label);
  var labelMarkup = label ? /*#__PURE__*/React__default.createElement("div", {
    className: newDesignLanguage ? undefined : styles$1g.Label,
    "aria-live": "polite"
  }, labelTextMarkup) : null;
  return /*#__PURE__*/React__default.createElement("nav", {
    className: newDesignLanguage ? undefined : className,
    "aria-label": navLabel,
    ref: node
  }, previousButtonEvents, nextButtonEvents, /*#__PURE__*/React__default.createElement(ConditionalWrapper, {
    condition: Boolean(newDesignLanguage),
    wrapper: function wrapper(children) {
      return /*#__PURE__*/React__default.createElement(ButtonGroup, {
        segmented: !label
      }, children);
    }
  }, constructedPrevious, labelMarkup, constructedNext));
}

function clickPaginationLink(id, node) {
  return function () {
    if (node.current == null) {
      return;
    }

    var link = node.current.querySelector("#".concat(id));

    if (link) {
      link.click();
    }
  };
}

function handleCallback(fn) {
  return function () {
    if (isInputFocused()) {
      return;
    }

    fn();
  };
}

function noop$9() {}

var styles$1h = {
  "Title": "Polaris-Header-Title",
  "SubTitle": "Polaris-Header-Title__SubTitle",
  "hasThumbnail": "Polaris-Header-Title--hasThumbnail",
  "TitleAndSubtitleWrapper": "Polaris-Header-Title__TitleAndSubtitleWrapper",
  "TitleWithMetadataWrapper": "Polaris-Header-Title__TitleWithMetadataWrapper",
  "TitleMetadata": "Polaris-Header-Title__TitleMetadata",
  "newDesignLanguage": "Polaris-Header-Title--newDesignLanguage"
};

function Title(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      titleMetadata = _ref.titleMetadata,
      thumbnail = _ref.thumbnail;

  var _useFeatures = useFeatures(),
      newDesignLanguage = _useFeatures.newDesignLanguage;

  var titleMarkup = title ? /*#__PURE__*/createElement("div", {
    className: styles$1h.Title
  }, /*#__PURE__*/createElement(DisplayText, {
    size: "large",
    element: "h1"
  }, title)) : null;
  var titleMetadataMarkup = titleMetadata ? /*#__PURE__*/createElement("div", {
    className: classNames(styles$1h.TitleMetadata, newDesignLanguage && styles$1h.newDesignLanguage)
  }, titleMetadata) : null;
  var wrappedTitleMarkup = titleMetadata ? /*#__PURE__*/createElement("div", {
    className: styles$1h.TitleWithMetadataWrapper
  }, titleMarkup, titleMetadataMarkup) : titleMarkup;
  var subtitleMarkup = subtitle ? /*#__PURE__*/createElement("div", {
    className: styles$1h.SubTitle
  }, /*#__PURE__*/createElement("p", null, subtitle)) : null;
  var thumbnailMarkup = thumbnail ? /*#__PURE__*/createElement("div", null, thumbnail) : null;
  var pageTitleClassName = thumbnail ? classNames(styles$1h.hasThumbnail) : undefined;
  return /*#__PURE__*/createElement("div", {
    className: pageTitleClassName
  }, thumbnailMarkup, /*#__PURE__*/createElement("div", {
    className: styles$1h.TitleAndSubtitleWrapper
  }, wrappedTitleMarkup, subtitleMarkup));
}

var styles$1i = {
  "Header": "Polaris-Page-Header",
  "newDesignLanguage": "Polaris-Page-Header--newDesignLanguage",
  "separator": "Polaris-Page-Header--separator",
  "titleHidden": "Polaris-Page-Header--titleHidden",
  "Navigation": "Polaris-Page-Header__Navigation",
  "hasActionMenu": "Polaris-Page-Header--hasActionMenu",
  "mobileView": "Polaris-Page-Header--mobileView",
  "BreadcrumbWrapper": "Polaris-Page-Header__BreadcrumbWrapper",
  "PaginationWrapper": "Polaris-Page-Header__PaginationWrapper",
  "AdditionalNavigationWrapper": "Polaris-Page-Header__AdditionalNavigationWrapper",
  "MainContent": "Polaris-Page-Header__MainContent",
  "TitleActionMenuWrapper": "Polaris-Page-Header__TitleActionMenuWrapper",
  "hasNavigation": "Polaris-Page-Header--hasNavigation",
  "PrimaryActionWrapper": "Polaris-Page-Header__PrimaryActionWrapper",
  "ActionMenuWrapper": "Polaris-Page-Header__ActionMenuWrapper",
  "Row": "Polaris-Page-Header__Row",
  "LeftAlign": "Polaris-Page-Header__LeftAlign",
  "RightAlign": "Polaris-Page-Header__RightAlign"
};

function isPrimaryAction(x) {
  return ! /*#__PURE__*/React__default.isValidElement(x) && x !== undefined;
}
function Header$2(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      titleMetadata = _ref.titleMetadata,
      thumbnail = _ref.thumbnail,
      _ref$titleHidden = _ref.titleHidden,
      titleHidden = _ref$titleHidden === void 0 ? false : _ref$titleHidden,
      separator = _ref.separator,
      primaryAction = _ref.primaryAction,
      pagination = _ref.pagination,
      additionalNavigation = _ref.additionalNavigation,
      _ref$breadcrumbs = _ref.breadcrumbs,
      breadcrumbs = _ref$breadcrumbs === void 0 ? [] : _ref$breadcrumbs,
      _ref$secondaryActions = _ref.secondaryActions,
      secondaryActions = _ref$secondaryActions === void 0 ? [] : _ref$secondaryActions,
      _ref$actionGroups = _ref.actionGroups,
      actionGroups = _ref$actionGroups === void 0 ? [] : _ref$actionGroups;

  var _useMediaQuery = useMediaQuery(),
      isNavigationCollapsed = _useMediaQuery.isNavigationCollapsed;

  var _useFeatures = useFeatures(),
      newDesignLanguage = _useFeatures.newDesignLanguage;

  var breadcrumbMarkup = breadcrumbs.length > 0 ? /*#__PURE__*/React__default.createElement("div", {
    className: classNames(styles$1i.BreadcrumbWrapper, newDesignLanguage && styles$1i.newDesignLanguage)
  }, /*#__PURE__*/React__default.createElement(Breadcrumbs, {
    breadcrumbs: breadcrumbs
  })) : null;
  var paginationMarkup = pagination && !isNavigationCollapsed ? /*#__PURE__*/React__default.createElement("div", {
    className: styles$1i.PaginationWrapper
  }, /*#__PURE__*/React__default.createElement(Pagination, Object.assign({}, pagination, {
    plain: true
  }))) : null;
  var additionalNavigationMarkup = additionalNavigation ? /*#__PURE__*/React__default.createElement("div", {
    className: styles$1i.AdditionalNavigationWrapper
  }, additionalNavigation) : null;
  var navigationMarkup = breadcrumbMarkup || paginationMarkup || additionalNavigationMarkup ? /*#__PURE__*/React__default.createElement("div", {
    className: styles$1i.Navigation
  }, breadcrumbMarkup, additionalNavigationMarkup, paginationMarkup) : null;
  var pageTitleMarkup = /*#__PURE__*/React__default.createElement(Title, {
    title: title,
    subtitle: subtitle,
    titleMetadata: titleMetadata,
    thumbnail: thumbnail
  });
  var primaryActionMarkup = primaryAction ? /*#__PURE__*/React__default.createElement(PrimaryActionMarkup, {
    primaryAction: primaryAction
  }) : null;
  var actionMenuMarkup = secondaryActions.length > 0 || hasGroupsWithActions(actionGroups) ? /*#__PURE__*/React__default.createElement(ConditionalWrapper, {
    condition: newDesignLanguage === false,
    wrapper: function wrapper(children) {
      return /*#__PURE__*/React__default.createElement("div", {
        className: styles$1i.ActionMenuWrapper
      }, children);
    }
  }, /*#__PURE__*/React__default.createElement(ActionMenu, {
    actions: secondaryActions,
    groups: actionGroups,
    rollup: isNavigationCollapsed
  })) : null;
  var headerClassNames = classNames(styles$1i.Header, titleHidden && styles$1i.titleHidden, separator && styles$1i.separator, navigationMarkup && styles$1i.hasNavigation, actionMenuMarkup && styles$1i.hasActionMenu, isNavigationCollapsed && styles$1i.mobileView, newDesignLanguage && styles$1i.newDesignLanguage);

  if (newDesignLanguage) {
    var _determineLayout = determineLayout({
      breadcrumbMarkup,
      pageTitleMarkup,
      paginationMarkup,
      actionMenuMarkup,
      primaryActionMarkup,
      title,
      isNavigationCollapsed
    }),
        slot1 = _determineLayout.slot1,
        slot2 = _determineLayout.slot2,
        slot3 = _determineLayout.slot3,
        slot4 = _determineLayout.slot4,
        slot5 = _determineLayout.slot5,
        slot6 = _determineLayout.slot6;

    return /*#__PURE__*/React__default.createElement("div", {
      className: headerClassNames
    }, /*#__PURE__*/React__default.createElement(ConditionalRender, {
      condition: [slot1, slot2, slot3, slot4].some(notNull)
    }, /*#__PURE__*/React__default.createElement("div", {
      className: styles$1i.Row
    }, /*#__PURE__*/React__default.createElement("div", {
      className: styles$1i.LeftAlign
    }, slot1, slot2), /*#__PURE__*/React__default.createElement(ConditionalRender, {
      condition: [slot3, slot4].some(notNull)
    }, /*#__PURE__*/React__default.createElement("div", {
      className: styles$1i.RightAlign
    }, /*#__PURE__*/React__default.createElement(ConditionalWrapper, {
      condition: [slot3, slot4].every(notNull),
      wrapper: function wrapper(children) {
        return /*#__PURE__*/React__default.createElement(ButtonGroup, null, children);
      }
    }, slot3, slot4))))), /*#__PURE__*/React__default.createElement(ConditionalRender, {
      condition: [slot5, slot6].some(notNull)
    }, /*#__PURE__*/React__default.createElement("div", {
      className: styles$1i.Row
    }, /*#__PURE__*/React__default.createElement("div", {
      className: styles$1i.LeftAlign
    }, slot5), /*#__PURE__*/React__default.createElement(ConditionalRender, {
      condition: slot6 != null
    }, /*#__PURE__*/React__default.createElement("div", {
      className: styles$1i.RightAlign
    }, slot6)))));
  }

  return /*#__PURE__*/React__default.createElement("div", {
    className: headerClassNames
  }, navigationMarkup, /*#__PURE__*/React__default.createElement("div", {
    className: styles$1i.MainContent
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles$1i.TitleActionMenuWrapper
  }, pageTitleMarkup, actionMenuMarkup), primaryActionMarkup));
}

function PrimaryActionMarkup(_ref2) {
  var primaryAction = _ref2.primaryAction;

  var _useMediaQuery2 = useMediaQuery(),
      isNavigationCollapsed = _useMediaQuery2.isNavigationCollapsed;

  var _useFeatures2 = useFeatures(),
      newDesignLanguage = _useFeatures2.newDesignLanguage;

  var content = primaryAction;

  if (isPrimaryAction(primaryAction)) {
    var primary = primaryAction.primary === undefined ? true : primaryAction.primary;
    content = buttonsFrom(shouldShowIconOnly(newDesignLanguage, isNavigationCollapsed, primaryAction), {
      primary
    });
  }

  return /*#__PURE__*/React__default.createElement(ConditionalWrapper, {
    condition: newDesignLanguage === false,
    wrapper: function wrapper(children) {
      return /*#__PURE__*/React__default.createElement("div", {
        className: styles$1i.PrimaryActionWrapper
      }, children);
    }
  }, content);
}

function shouldShowIconOnly(newDesignLanguage, isMobile, action) {
  var content = action.content,
      accessibilityLabel = action.accessibilityLabel,
      icon = action.icon;
  if (!newDesignLanguage || icon == null) return Object.assign(Object.assign({}, action), {
    icon: undefined
  });

  if (isMobile) {
    accessibilityLabel = accessibilityLabel || content;
    content = undefined;
  } else {
    icon = undefined;
  }

  return Object.assign(Object.assign({}, action), {
    content,
    accessibilityLabel,
    icon
  });
}

function notNull(value) {
  return value != null;
}

function determineLayout(_ref3) {
  var breadcrumbMarkup = _ref3.breadcrumbMarkup,
      pageTitleMarkup = _ref3.pageTitleMarkup,
      title = _ref3.title,
      paginationMarkup = _ref3.paginationMarkup,
      actionMenuMarkup = _ref3.actionMenuMarkup,
      primaryActionMarkup = _ref3.primaryActionMarkup,
      isNavigationCollapsed = _ref3.isNavigationCollapsed;
  var shortTitle = 20;
  var reallyShortTitle = 8; //    Header Layout
  // |----------------------------------------------------|
  // | slot1 | slot2 |                    | slot3 | slot4 |
  // |----------------------------------------------------|
  // | slot5 |                                    | slot6 |
  // |----------------------------------------------------|
  //

  var layouts = {
    mobileCompact: {
      slots: {
        slot1: null,
        slot2: pageTitleMarkup,
        slot3: actionMenuMarkup,
        slot4: primaryActionMarkup,
        slot5: null,
        slot6: null
      },
      condition: isNavigationCollapsed && breadcrumbMarkup == null && title != null && title.length <= reallyShortTitle
    },
    mobileDefault: {
      slots: {
        slot1: breadcrumbMarkup,
        slot2: null,
        slot3: actionMenuMarkup,
        slot4: primaryActionMarkup,
        slot5: pageTitleMarkup,
        slot6: null
      },
      condition: isNavigationCollapsed
    },
    desktopCompact: {
      slots: {
        slot1: breadcrumbMarkup,
        slot2: pageTitleMarkup,
        slot3: null,
        slot4: primaryActionMarkup,
        slot5: null,
        slot6: null
      },
      condition: !isNavigationCollapsed && paginationMarkup == null && actionMenuMarkup == null && title != null && title.length <= shortTitle
    },
    desktopDefault: {
      slots: {
        slot1: breadcrumbMarkup,
        slot2: pageTitleMarkup,
        slot3: null,
        slot4: paginationMarkup,
        slot5: actionMenuMarkup,
        slot6: primaryActionMarkup
      },
      condition: !isNavigationCollapsed
    }
  };
  var layout = Object.values(layouts).find(function (layout) {
    return layout.condition;
  }) || layouts.desktopDefault;
  return layout.slots;
}

var styles$1j = {
  "Page": "Polaris-Page",
  "fullWidth": "Polaris-Page--fullWidth",
  "narrowWidth": "Polaris-Page--narrowWidth",
  "Content": "Polaris-Page__Content"
};

var APP_BRIDGE_PROPS$1 = ['title', 'breadcrumbs', 'secondaryActions', 'actionGroups', 'primaryAction'];

var PageInner = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(PageInner, _React$PureComponent);

  var _super = _createSuper(PageInner);

  function PageInner() {
    _classCallCheck(this, PageInner);

    return _super.apply(this, arguments);
  }

  _createClass(PageInner, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.delegateToAppbridge() === false || !this.props.polaris.appBridge) {
        return;
      }

      var transformedProps = this.transformProps();
      if (!transformedProps) return; // eslint-disable-next-line no-console

      console.warn('Deprecation: Using `Page` to render an embedded app title bar is deprecated and will be removed in v5.0. Use `TitleBar` from `@shopify/app-bridge-react` instead: https://help.shopify.com/en/api/embedded-apps/app-bridge/react-components/titlebar');
      this.titlebar = TitleBar.create(this.props.polaris.appBridge, transformedProps);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.titlebar == null || this.delegateToAppbridge() === false) {
        return;
      }

      var prevAppBridgeProps = pick(prevProps, APP_BRIDGE_PROPS$1);
      var currentAppBridgeProps = pick(this.props, APP_BRIDGE_PROPS$1);

      if (!isEqual(prevAppBridgeProps, currentAppBridgeProps)) {
        var transformedProps = this.transformProps();
        if (!transformedProps) return;
        this.titlebar.unsubscribe();
        this.titlebar.set(transformedProps);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.titlebar == null || this.delegateToAppbridge() === false) {
        return;
      }

      this.titlebar.unsubscribe();
    }
  }, {
    key: "render",
    value: function render() {
      var _a = this.props,
          children = _a.children,
          fullWidth = _a.fullWidth,
          narrowWidth = _a.narrowWidth,
          singleColumn = _a.singleColumn,
          rest = __rest(_a, ["children", "fullWidth", "narrowWidth", "singleColumn"]);

      if (singleColumn) {
        // eslint-disable-next-line no-console
        console.warn('Deprecation: The singleColumn prop has been renamed to narrowWidth to better represents its use and will be removed in v5.0.');
      }

      var className = classNames(styles$1j.Page, fullWidth && styles$1j.fullWidth, (narrowWidth || singleColumn) && styles$1j.narrowWidth);
      var headerMarkup = this.delegateToAppbridge() || this.hasHeaderContent() === false ? null : /*#__PURE__*/React__default.createElement(Header$2, rest);
      return /*#__PURE__*/React__default.createElement("div", {
        className: className
      }, headerMarkup, /*#__PURE__*/React__default.createElement("div", {
        className: styles$1j.Content
      }, children));
    }
  }, {
    key: "delegateToAppbridge",
    value: function delegateToAppbridge() {
      var _this$props = this.props,
          appBridge = _this$props.polaris.appBridge,
          _this$props$forceRend = _this$props.forceRender,
          forceRender = _this$props$forceRend === void 0 ? false : _this$props$forceRend;
      return appBridge != null && forceRender === false;
    }
  }, {
    key: "hasHeaderContent",
    value: function hasHeaderContent() {
      var _this$props2 = this.props,
          title = _this$props2.title,
          primaryAction = _this$props2.primaryAction,
          secondaryActions = _this$props2.secondaryActions,
          actionGroups = _this$props2.actionGroups,
          breadcrumbs = _this$props2.breadcrumbs;
      return title != null && title !== '' || primaryAction != null || secondaryActions != null && secondaryActions.length > 0 || actionGroups != null && actionGroups.length > 0 || breadcrumbs != null && breadcrumbs.length > 0;
    }
  }, {
    key: "transformProps",
    value: function transformProps() {
      var appBridge = this.props.polaris.appBridge;
      if (!appBridge) return;
      var _this$props3 = this.props,
          title = _this$props3.title,
          primaryAction = _this$props3.primaryAction,
          secondaryActions = _this$props3.secondaryActions,
          actionGroups = _this$props3.actionGroups;
      return {
        title,
        buttons: transformActions(appBridge, Object.assign(Object.assign({}, isPrimaryAction(primaryAction) && {
          primaryAction
        }), {
          secondaryActions,
          actionGroups
        })),
        breadcrumbs: this.transformBreadcrumbs()
      };
    }
  }, {
    key: "transformBreadcrumbs",
    value: function transformBreadcrumbs() {
      var appBridge = this.props.polaris.appBridge;
      if (!appBridge) return;
      var breadcrumbs = this.props.breadcrumbs;

      if (breadcrumbs != null && breadcrumbs.length > 0) {
        var breadcrumb = breadcrumbs[breadcrumbs.length - 1];
        var button = Button$1.create(appBridge, {
          label: breadcrumb.content || ''
        });
        var callback = !('url' in breadcrumb) ? breadcrumb.onAction : generateRedirect(appBridge, breadcrumb.url, breadcrumb.target);

        if (callback != null) {
          button.subscribe(Button$1.Action.CLICK, callback);
        }

        return button;
      } else {
        return undefined;
      }
    }
  }]);

  return PageInner;
}(React__default.PureComponent);

var Page = withAppProvider()(PageInner);

var styles$1k = {
  "PageActions": "Polaris-PageActions"
};

function PageActions(_ref) {
  var primaryAction = _ref.primaryAction,
      secondaryActions = _ref.secondaryActions;
  var primaryActionMarkup = primaryAction ? buttonsFrom(primaryAction, {
    primary: true
  }) : null;
  var secondaryActionsMarkup = secondaryActions ? /*#__PURE__*/React__default.createElement(ButtonGroup, null, buttonsFrom(secondaryActions)) : null;
  var distribution = secondaryActionsMarkup ? 'equalSpacing' : 'trailing';
  return /*#__PURE__*/React__default.createElement("div", {
    className: styles$1k.PageActions
  }, /*#__PURE__*/React__default.createElement(Stack, {
    distribution: distribution,
    spacing: "tight"
  }, secondaryActionsMarkup, primaryActionMarkup));
}

var defaultMediaQuery = {
  isNavigationCollapsed: false
};
function PolarisTestProvider(_ref) {
  var strict = _ref.strict,
      children = _ref.children,
      i18n = _ref.i18n,
      appBridge = _ref.appBridge,
      link = _ref.link,
      _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? {} : _ref$theme,
      mediaQuery = _ref.mediaQuery,
      _ref$features = _ref.features,
      featuresProp = _ref$features === void 0 ? {} : _ref$features,
      frame = _ref.frame;
  var Wrapper = strict ? React__default.StrictMode : React__default.Fragment;
  var intl = new I18n(i18n || {});
  var scrollLockManager = new ScrollLockManager();
  var stickyManager = new StickyManager();
  var uniqueIdFactory = new UniqueIdFactory(globalIdGeneratorFactory); // This typing is odd, but as appBridge is deprecated and going away in v5
  // I'm not that worried about it

  var appBridgeApp = appBridge;
  var features = Object.assign({
    newDesignLanguage: false
  }, featuresProp);
  var customProperties = features.newDesignLanguage ? buildCustomProperties(Object.assign(Object.assign({}, theme), {
    colorScheme: 'light'
  }), features.newDesignLanguage) : undefined;
  var mergedTheme = buildThemeContext(theme, customProperties);
  var mergedFrame = createFrameContext(frame);
  var mergedMediaQuery = merge(defaultMediaQuery, mediaQuery);
  return /*#__PURE__*/React__default.createElement(Wrapper, null, /*#__PURE__*/React__default.createElement(FeaturesContext.Provider, {
    value: features
  }, /*#__PURE__*/React__default.createElement(I18nContext.Provider, {
    value: intl
  }, /*#__PURE__*/React__default.createElement(ScrollLockManagerContext.Provider, {
    value: scrollLockManager
  }, /*#__PURE__*/React__default.createElement(StickyManagerContext.Provider, {
    value: stickyManager
  }, /*#__PURE__*/React__default.createElement(UniqueIdFactoryContext.Provider, {
    value: uniqueIdFactory
  }, /*#__PURE__*/React__default.createElement(AppBridgeContext.Provider, {
    value: appBridgeApp
  }, /*#__PURE__*/React__default.createElement(LinkContext.Provider, {
    value: link
  }, /*#__PURE__*/React__default.createElement(ThemeContext.Provider, {
    value: mergedTheme
  }, /*#__PURE__*/React__default.createElement(MediaQueryContext.Provider, {
    value: mergedMediaQuery
  }, /*#__PURE__*/React__default.createElement(FocusManager, null, /*#__PURE__*/React__default.createElement(FrameContext.Provider, {
    value: mergedFrame
  }, children))))))))))));
}

function noop$a() {}

function createFrameContext() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref2$showToast = _ref2.showToast,
      showToast = _ref2$showToast === void 0 ? noop$a : _ref2$showToast,
      _ref2$hideToast = _ref2.hideToast,
      hideToast = _ref2$hideToast === void 0 ? noop$a : _ref2$hideToast,
      _ref2$setContextualSa = _ref2.setContextualSaveBar,
      setContextualSaveBar = _ref2$setContextualSa === void 0 ? noop$a : _ref2$setContextualSa,
      _ref2$removeContextua = _ref2.removeContextualSaveBar,
      removeContextualSaveBar = _ref2$removeContextua === void 0 ? noop$a : _ref2$removeContextua,
      _ref2$startLoading = _ref2.startLoading,
      startLoading = _ref2$startLoading === void 0 ? noop$a : _ref2$startLoading,
      _ref2$stopLoading = _ref2.stopLoading,
      stopLoading = _ref2$stopLoading === void 0 ? noop$a : _ref2$stopLoading;

  return {
    showToast,
    hideToast,
    setContextualSaveBar,
    removeContextualSaveBar,
    startLoading,
    stopLoading
  };
}

var styles$1l = {
  "ProgressBar": "Polaris-ProgressBar",
  "sizeSmall": "Polaris-ProgressBar--sizeSmall",
  "sizeMedium": "Polaris-ProgressBar--sizeMedium",
  "sizeLarge": "Polaris-ProgressBar--sizeLarge",
  "Indicator": "Polaris-ProgressBar__Indicator",
  "fillup": "Polaris-ProgressBar--fillup",
  "Progress": "Polaris-ProgressBar__Progress",
  "Label": "Polaris-ProgressBar__Label"
};

function ProgressBar(_ref) {
  var _ref$progress = _ref.progress,
      progress = _ref$progress === void 0 ? 0 : _ref$progress,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'medium' : _ref$size;
  var i18n = useI18n();
  var className = classNames(styles$1l.ProgressBar, size && styles$1l[variationName('size', size)]);
  var warningMessage = i18n.translate(progress < 0 ? 'Polaris.ProgressBar.negativeWarningMessage' : 'Polaris.ProgressBar.exceedWarningMessage', {
    progress
  });
  var parsedProgress = parseProgress(progress, warningMessage);
  return /*#__PURE__*/React__default.createElement("div", {
    className: className
  }, /*#__PURE__*/React__default.createElement("progress", {
    className: styles$1l.Progress,
    value: parsedProgress,
    max: "100"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: styles$1l.Indicator,
    style: {
      width: "".concat(parsedProgress, "%")
    }
  }, /*#__PURE__*/React__default.createElement("span", {
    className: styles$1l.Label
  }, parsedProgress, "%")));
}

function parseProgress(progress, warningMessage) {
  var progressWidth;

  if (progress < 0) {
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.warn(warningMessage);
    }

    progressWidth = 0;
  } else if (progress > 100) {
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.warn(warningMessage);
    }

    progressWidth = 100;
  } else {
    progressWidth = progress;
  }

  return progressWidth;
}

function invertNumber(number) {
  if (Math.sign(number) === 1) {
    return -Math.abs(number);
  } else if (Math.sign(number) === -1) {
    return Math.abs(number);
  } else {
    return 0;
  }
}

var CSS_VAR_PREFIX = '--Polaris-RangeSlider-';

var styles$1m = {
  "Wrapper": "Polaris-RangeSlider-DualThumb__Wrapper",
  "TrackWrapper": "Polaris-RangeSlider-DualThumb__TrackWrapper",
  "disabled": "Polaris-RangeSlider-DualThumb--disabled",
  "Track": "Polaris-RangeSlider-DualThumb__Track",
  "error": "Polaris-RangeSlider-DualThumb--error",
  "Track--dashed": "Polaris-RangeSlider-DualThumb--trackDashed",
  "Thumbs": "Polaris-RangeSlider-DualThumb__Thumbs",
  "Prefix": "Polaris-RangeSlider-DualThumb__Prefix",
  "Suffix": "Polaris-RangeSlider-DualThumb__Suffix",
  "Output": "Polaris-RangeSlider-DualThumb__Output",
  "OutputBubble": "Polaris-RangeSlider-DualThumb__OutputBubble",
  "OutputText": "Polaris-RangeSlider-DualThumb__OutputText"
};

var Control;

(function (Control) {
  Control[Control["Lower"] = 0] = "Lower";
  Control[Control["Upper"] = 1] = "Upper";
})(Control || (Control = {}));

var DualThumb = /*#__PURE__*/function (_React$Component) {
  _inherits(DualThumb, _React$Component);

  var _super = _createSuper(DualThumb);

  function DualThumb() {
    var _this;

    _classCallCheck(this, DualThumb);

    _this = _super.apply(this, arguments);
    _this.state = {
      value: sanitizeValue(_this.props.value, _this.props.min, _this.props.max, _this.props.step),
      trackWidth: 0,
      trackLeft: 0
    };
    _this.track = /*#__PURE__*/React__default.createRef();
    _this.trackWrapper = /*#__PURE__*/React__default.createRef();
    _this.thumbLower = /*#__PURE__*/React__default.createRef();
    _this.thumbUpper = /*#__PURE__*/React__default.createRef();
    _this.setTrackPosition = debounce(function () {
      if (_this.track.current) {
        var newDesignLanguage = _this.context && _this.context.newDesignLanguage;
        var thumbSize = newDesignLanguage ? 16 : 24;

        var _this$track$current$g = _this.track.current.getBoundingClientRect(),
            width = _this$track$current$g.width,
            left = _this$track$current$g.left;

        var adjustedTrackWidth = width - thumbSize;
        var adjustedTrackLeft = left + thumbSize / 2;

        _this.setState({
          trackWidth: adjustedTrackWidth,
          trackLeft: adjustedTrackLeft
        });
      }
    }, 40, {
      leading: true,
      trailing: true,
      maxWait: 40
    });

    _this.handleMouseDownThumbLower = function (event) {
      if (event.button !== 0 || _this.props.disabled) return;
      registerMouseMoveHandler(_this.handleMouseMoveThumbLower);
      event.stopPropagation();
    };

    _this.handleMouseMoveThumbLower = function (event) {
      var valueUpper = _this.state.value[1];

      _this.setValue([_this.actualXPosition(event.clientX), valueUpper], Control.Upper);
    };

    _this.handleTouchStartThumbLower = function (event) {
      if (_this.props.disabled) return;
      registerTouchMoveHandler(_this.handleTouchMoveThumbLower);
      event.stopPropagation();
    };

    _this.handleTouchMoveThumbLower = function (event) {
      event.preventDefault();
      var valueUpper = _this.state.value[1];

      _this.setValue([_this.actualXPosition(event.touches[0].clientX), valueUpper], Control.Upper);
    };

    _this.handleMouseDownThumbUpper = function (event) {
      if (event.button !== 0 || _this.props.disabled) return;
      registerMouseMoveHandler(_this.handleMouseMoveThumbUpper);
      event.stopPropagation();
    };

    _this.handleMouseMoveThumbUpper = function (event) {
      var valueLower = _this.state.value[0];

      _this.setValue([valueLower, _this.actualXPosition(event.clientX)], Control.Lower);
    };

    _this.handleTouchStartThumbUpper = function (event) {
      if (_this.props.disabled) return;
      registerTouchMoveHandler(_this.handleTouchMoveThumbUpper);
      event.stopPropagation();
    };

    _this.handleTouchMoveThumbUpper = function (event) {
      event.preventDefault();
      var valueLower = _this.state.value[0];

      _this.setValue([valueLower, _this.actualXPosition(event.touches[0].clientX)], Control.Lower);
    };

    _this.handleKeypressLower = function (event) {
      if (_this.props.disabled) return;

      var _assertThisInitialize = _assertThisInitialized(_this),
          incrementValueLower = _assertThisInitialize.incrementValueLower,
          decrementValueLower = _assertThisInitialize.decrementValueLower;

      var handlerMap = {
        [Key.UpArrow]: incrementValueLower,
        [Key.RightArrow]: incrementValueLower,
        [Key.DownArrow]: decrementValueLower,
        [Key.LeftArrow]: decrementValueLower
      };
      var handler = handlerMap[event.keyCode];

      if (handler != null) {
        event.preventDefault();
        event.stopPropagation();
        handler();
      }
    };

    _this.handleKeypressUpper = function (event) {
      if (_this.props.disabled) return;

      var _assertThisInitialize2 = _assertThisInitialized(_this),
          incrementValueUpper = _assertThisInitialize2.incrementValueUpper,
          decrementValueUpper = _assertThisInitialize2.decrementValueUpper;

      var handlerMap = {
        [Key.UpArrow]: incrementValueUpper,
        [Key.RightArrow]: incrementValueUpper,
        [Key.DownArrow]: decrementValueUpper,
        [Key.LeftArrow]: decrementValueUpper
      };
      var handler = handlerMap[event.keyCode];

      if (handler != null) {
        event.preventDefault();
        event.stopPropagation();
        handler();
      }
    };

    _this.incrementValueLower = function () {
      _this.setValue([_this.state.value[0] + _this.props.step, _this.state.value[1]], Control.Upper);
    };

    _this.decrementValueLower = function () {
      _this.setValue([_this.state.value[0] - _this.props.step, _this.state.value[1]], Control.Upper);
    };

    _this.incrementValueUpper = function () {
      _this.setValue([_this.state.value[0], _this.state.value[1] + _this.props.step], Control.Lower);
    };

    _this.decrementValueUpper = function () {
      _this.setValue([_this.state.value[0], _this.state.value[1] - _this.props.step], Control.Lower);
    };

    _this.dispatchValue = function () {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          id = _this$props.id;
      var value = _this.state.value;
      onChange(value, id);
    };

    _this.setValue = function (dirtyValue, control) {
      var _assertThisInitialize3 = _assertThisInitialized(_this),
          _assertThisInitialize4 = _assertThisInitialize3.props,
          min = _assertThisInitialize4.min,
          max = _assertThisInitialize4.max,
          step = _assertThisInitialize4.step,
          value = _assertThisInitialize3.state.value;

      var sanitizedValue = sanitizeValue(dirtyValue, min, max, step, control);

      if (isEqual(sanitizedValue, value) === false) {
        _this.setState({
          value: sanitizedValue
        }, _this.dispatchValue);
      }
    };

    _this.handleMouseDownTrack = function (event) {
      if (event.button !== 0 || _this.props.disabled) return;
      event.preventDefault();

      var clickXPosition = _this.actualXPosition(event.clientX);

      var value = _this.state.value;
      var distanceFromLowerThumb = Math.abs(value[0] - clickXPosition);
      var distanceFromUpperThumb = Math.abs(value[1] - clickXPosition);

      if (distanceFromLowerThumb <= distanceFromUpperThumb) {
        _this.setValue([clickXPosition, value[1]], Control.Upper);

        registerMouseMoveHandler(_this.handleMouseMoveThumbLower);

        if (_this.thumbLower.current != null) {
          _this.thumbLower.current.focus();
        }
      } else {
        _this.setValue([value[0], clickXPosition], Control.Lower);

        registerMouseMoveHandler(_this.handleMouseMoveThumbUpper);

        if (_this.thumbUpper.current != null) {
          _this.thumbUpper.current.focus();
        }
      }
    };

    _this.handleTouchStartTrack = function (event) {
      if (_this.props.disabled) return;
      event.preventDefault();

      var clickXPosition = _this.actualXPosition(event.touches[0].clientX);

      var value = _this.state.value;
      var distanceFromLowerThumb = Math.abs(value[0] - clickXPosition);
      var distanceFromUpperThumb = Math.abs(value[1] - clickXPosition);

      if (distanceFromLowerThumb <= distanceFromUpperThumb) {
        _this.setValue([clickXPosition, value[1]], Control.Upper);

        registerTouchMoveHandler(_this.handleTouchMoveThumbLower);

        if (_this.thumbLower.current != null) {
          _this.thumbLower.current.focus();
        }
      } else {
        _this.setValue([value[0], clickXPosition], Control.Lower);

        registerTouchMoveHandler(_this.handleTouchMoveThumbUpper);

        if (_this.thumbUpper.current != null) {
          _this.thumbUpper.current.focus();
        }
      }
    };

    _this.actualXPosition = function (dirtyXPosition) {
      if (_this.track.current) {
        var _this$props2 = _this.props,
            min = _this$props2.min,
            max = _this$props2.max;
        var _this$state = _this.state,
            trackLeft = _this$state.trackLeft,
            trackWidth = _this$state.trackWidth;
        var relativeX = dirtyXPosition - trackLeft;
        var percentageOfTrack = relativeX / trackWidth;
        return percentageOfTrack * (max - min);
      } else {
        return 0;
      }
    };

    return _this;
  }

  _createClass(DualThumb, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setTrackPosition();

      if (this.trackWrapper.current != null) {
        addEventListener(this.trackWrapper.current, 'touchstart', this.handleTouchStartTrack, {
          passive: false
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.trackWrapper.current != null) {
        removeEventListener(this.trackWrapper.current, 'touchstart', this.handleTouchStartTrack);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          id = _this$props3.id,
          min = _this$props3.min,
          max = _this$props3.max,
          prefix = _this$props3.prefix,
          suffix = _this$props3.suffix,
          disabled = _this$props3.disabled,
          output = _this$props3.output,
          error = _this$props3.error,
          onFocus = _this$props3.onFocus,
          onBlur = _this$props3.onBlur,
          label = _this$props3.label,
          labelAction = _this$props3.labelAction,
          labelHidden = _this$props3.labelHidden,
          helpText = _this$props3.helpText;
      var value = this.state.value;
      var idLower = id;
      var idUpper = "".concat(id, "Upper");
      var describedBy = [];

      if (error) {
        describedBy.push("".concat(id, "Error"));
      }

      var ariaDescribedBy = describedBy.length ? describedBy.join(' ') : undefined;
      var trackWrapperClassName = classNames(styles$1m.TrackWrapper, error && styles$1m.error, disabled && styles$1m.disabled);
      var thumbLowerClassName = classNames(styles$1m.Thumbs, styles$1m.ThumbLower, disabled && styles$1m.disabled);
      var thumbUpperClassName = classNames(styles$1m.Thumbs, styles$1m.ThumbUpper, disabled && styles$1m.disabled);
      var trackWidth = this.state.trackWidth;
      var range = max - min;
      var leftPositionThumbLower = value[0] / range * trackWidth;
      var leftPositionThumbUpper = value[1] / range * trackWidth;
      var outputLowerClassName = classNames(styles$1m.Output, styles$1m.OutputLower);
      var outputMarkupLower = !disabled && output ? /*#__PURE__*/React__default.createElement("output", {
        htmlFor: idLower,
        className: outputLowerClassName,
        style: {
          left: "".concat(leftPositionThumbLower, "px")
        }
      }, /*#__PURE__*/React__default.createElement("div", {
        className: styles$1m.OutputBubble
      }, /*#__PURE__*/React__default.createElement("span", {
        className: styles$1m.OutputText
      }, value[0]))) : null;
      var outputUpperClassName = classNames(styles$1m.Output, styles$1m.OutputUpper);
      var outputMarkupUpper = !disabled && output ? /*#__PURE__*/React__default.createElement("output", {
        htmlFor: idUpper,
        className: outputUpperClassName,
        style: {
          left: "".concat(leftPositionThumbUpper, "px")
        }
      }, /*#__PURE__*/React__default.createElement("div", {
        className: styles$1m.OutputBubble
      }, /*#__PURE__*/React__default.createElement("span", {
        className: styles$1m.OutputText
      }, value[1]))) : null;
      var cssVars = {
        ["".concat(CSS_VAR_PREFIX, "progress-lower")]: "".concat(leftPositionThumbLower, "px"),
        ["".concat(CSS_VAR_PREFIX, "progress-upper")]: "".concat(leftPositionThumbUpper, "px")
      };
      var prefixMarkup = prefix && /*#__PURE__*/React__default.createElement("div", {
        className: styles$1m.Prefix
      }, prefix);
      var suffixMarkup = suffix && /*#__PURE__*/React__default.createElement("div", {
        className: styles$1m.Suffix
      }, suffix);
      return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(Labelled, {
        id: id,
        label: label,
        error: error,
        action: labelAction,
        labelHidden: labelHidden,
        helpText: helpText
      }, /*#__PURE__*/React__default.createElement("div", {
        className: styles$1m.Wrapper
      }, prefixMarkup, /*#__PURE__*/React__default.createElement("div", {
        className: trackWrapperClassName,
        onMouseDown: this.handleMouseDownTrack,
        ref: this.trackWrapper
      }, /*#__PURE__*/React__default.createElement("div", {
        className: styles$1m.Track,
        style: cssVars,
        ref: this.track
      }), /*#__PURE__*/React__default.createElement("div", {
        className: styles$1m['Track--dashed']
      }), /*#__PURE__*/React__default.createElement("button", {
        id: idLower,
        className: thumbLowerClassName,
        style: {
          left: "".concat(leftPositionThumbLower, "px")
        },
        role: "slider",
        "aria-disabled": disabled,
        "aria-valuemin": min,
        "aria-valuemax": max,
        "aria-valuenow": value[0],
        "aria-invalid": Boolean(error),
        "aria-describedby": ariaDescribedBy,
        "aria-labelledby": labelID(id),
        onFocus: onFocus,
        onBlur: onBlur,
        onKeyDown: this.handleKeypressLower,
        onMouseDown: this.handleMouseDownThumbLower,
        onTouchStart: this.handleTouchStartThumbLower,
        ref: this.thumbLower,
        disabled: disabled
      }), outputMarkupLower, /*#__PURE__*/React__default.createElement("button", {
        id: idUpper,
        className: thumbUpperClassName,
        style: {
          left: "".concat(leftPositionThumbUpper, "px")
        },
        role: "slider",
        "aria-disabled": disabled,
        "aria-valuemin": min,
        "aria-valuemax": max,
        "aria-valuenow": value[1],
        "aria-invalid": Boolean(error),
        "aria-describedby": ariaDescribedBy,
        "aria-labelledby": labelID(id),
        onFocus: onFocus,
        onBlur: onBlur,
        onKeyDown: this.handleKeypressUpper,
        onMouseDown: this.handleMouseDownThumbUpper,
        onTouchStart: this.handleTouchStartThumbUpper,
        ref: this.thumbUpper,
        disabled: disabled
      }), outputMarkupUpper), suffixMarkup)), /*#__PURE__*/React__default.createElement(EventListener, {
        event: "resize",
        handler: this.setTrackPosition
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var min = props.min,
          step = props.step,
          max = props.max,
          value = props.value,
          onChange = props.onChange,
          id = props.id;
      var prevValue = state.prevValue;

      if (isEqual(prevValue, value)) {
        return null;
      }

      var sanitizedValue = sanitizeValue(value, min, max, step);

      if (!isEqual(value, sanitizedValue)) {
        onChange(sanitizedValue, id);
      }

      return {
        prevValue: value,
        value: sanitizedValue
      };
    }
  }]);

  return DualThumb;
}(React__default.Component);
DualThumb.contextType = FeaturesContext;

function registerMouseMoveHandler(handler) {
  addEventListener(document, 'mousemove', handler);
  addEventListener(document, 'mouseup', function () {
    removeEventListener(document, 'mousemove', handler);
  }, {
    once: true
  });
}

function registerTouchMoveHandler(handler) {
  var removeHandler = function removeHandler() {
    removeEventListener(document, 'touchmove', handler);
    removeEventListener(document, 'touchend', removeHandler);
    removeEventListener(document, 'touchcancel', removeHandler);
  };

  addEventListener(document, 'touchmove', handler, {
    passive: false
  });
  addEventListener(document, 'touchend', removeHandler, {
    once: true
  });
  addEventListener(document, 'touchcancel', removeHandler, {
    once: true
  });
}

function sanitizeValue(value, min, max, step) {
  var control = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : Control.Upper;
  var upperValue = inBoundsUpper(roundedToStep(value[1]));
  var lowerValue = inBoundsLower(roundedToStep(value[0]));
  var maxLowerValue = upperValue - step;
  var minUpperValue = lowerValue + step;

  if (control === Control.Upper && lowerValue > maxLowerValue) {
    lowerValue = maxLowerValue;
  } else if (control === Control.Lower && upperValue < minUpperValue) {
    upperValue = minUpperValue;
  }

  return [lowerValue, upperValue];

  function inBoundsUpper(value) {
    var lowerMin = min + step;

    if (value < lowerMin) {
      return lowerMin;
    } else if (value > max) {
      return max;
    } else {
      return value;
    }
  }

  function inBoundsLower(value) {
    var upperMax = max - step;

    if (value < min) {
      return min;
    } else if (value > upperMax) {
      return upperMax;
    } else {
      return value;
    }
  }

  function roundedToStep(value) {
    return Math.round(value / step) * step;
  }
}

function clamp(number, min, max) {
  if (number < min) return min;
  if (number > max) return max;
  return number;
}

var styles$1n = {
  "SingleThumb": "Polaris-RangeSlider-SingleThumb",
  "disabled": "Polaris-RangeSlider-SingleThumb--disabled",
  "InputWrapper": "Polaris-RangeSlider-SingleThumb__InputWrapper",
  "Prefix": "Polaris-RangeSlider-SingleThumb__Prefix",
  "Suffix": "Polaris-RangeSlider-SingleThumb__Suffix",
  "Input": "Polaris-RangeSlider-SingleThumb__Input",
  "error": "Polaris-RangeSlider-SingleThumb--error",
  "Output": "Polaris-RangeSlider-SingleThumb__Output",
  "OutputBubble": "Polaris-RangeSlider-SingleThumb__OutputBubble",
  "OutputText": "Polaris-RangeSlider-SingleThumb__OutputText"
};

function SingleThumb(props) {
  var id = props.id,
      error = props.error,
      helpText = props.helpText,
      value = props.value,
      min = props.min,
      max = props.max,
      disabled = props.disabled,
      output = props.output,
      prefix = props.prefix,
      suffix = props.suffix,
      label = props.label,
      labelAction = props.labelAction,
      labelHidden = props.labelHidden,
      step = props.step,
      onBlur = props.onBlur,
      onFocus = props.onFocus;
  var clampedValue = clamp(value, min, max);
  var describedBy = [];

  if (error) {
    describedBy.push("".concat(id, "Error"));
  }

  if (helpText) {
    describedBy.push(helpTextID(id));
  }

  var ariaDescribedBy = describedBy.length ? describedBy.join(' ') : undefined;
  var sliderProgress = (clampedValue - min) * 100 / (max - min);
  var outputFactor = invertNumber((sliderProgress - 50) / 100);
  var cssVars = {
    ["".concat(CSS_VAR_PREFIX, "min")]: min,
    ["".concat(CSS_VAR_PREFIX, "max")]: max,
    ["".concat(CSS_VAR_PREFIX, "current")]: clampedValue,
    ["".concat(CSS_VAR_PREFIX, "progress")]: "".concat(sliderProgress, "%"),
    ["".concat(CSS_VAR_PREFIX, "output-factor")]: "".concat(outputFactor)
  };
  var outputMarkup = !disabled && output && /*#__PURE__*/React__default.createElement("output", {
    htmlFor: id,
    className: styles$1n.Output
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles$1n.OutputBubble
  }, /*#__PURE__*/React__default.createElement("span", {
    className: styles$1n.OutputText
  }, clampedValue)));
  var prefixMarkup = prefix && /*#__PURE__*/React__default.createElement("div", {
    className: styles$1n.Prefix
  }, prefix);
  var suffixMarkup = suffix && /*#__PURE__*/React__default.createElement("div", {
    className: styles$1n.Suffix
  }, suffix);
  var className = classNames(styles$1n.SingleThumb, error && styles$1n.error, disabled && styles$1n.disabled);
  return /*#__PURE__*/React__default.createElement(Labelled, {
    id: id,
    label: label,
    error: error,
    action: labelAction,
    labelHidden: labelHidden,
    helpText: helpText
  }, /*#__PURE__*/React__default.createElement("div", {
    className: className,
    style: cssVars
  }, prefixMarkup, /*#__PURE__*/React__default.createElement("div", {
    className: styles$1n.InputWrapper
  }, /*#__PURE__*/React__default.createElement("input", {
    type: "range",
    className: styles$1n.Input,
    id: id,
    name: id,
    min: min,
    max: max,
    step: step,
    value: clampedValue,
    disabled: disabled,
    onChange: handleChange,
    onFocus: onFocus,
    onBlur: onBlur,
    "aria-valuemin": min,
    "aria-valuemax": max,
    "aria-valuenow": clampedValue,
    "aria-invalid": Boolean(error),
    "aria-describedby": ariaDescribedBy
  }), outputMarkup), suffixMarkup));

  function handleChange(event) {
    var onChange = props.onChange;
    onChange && onChange(parseFloat(event.currentTarget.value), id);
  }
}

function RangeSlider(_a) {
  var _a$min = _a.min,
      min = _a$min === void 0 ? 0 : _a$min,
      _a$max = _a.max,
      max = _a$max === void 0 ? 100 : _a$max,
      _a$step = _a.step,
      step = _a$step === void 0 ? 1 : _a$step,
      value = _a.value,
      rest = __rest(_a, ["min", "max", "step", "value"]);

  var id = useUniqueId('RangeSlider');
  var sharedProps = Object.assign({
    id,
    min,
    max,
    step
  }, rest);
  return isDualThumb(value) ? /*#__PURE__*/React__default.createElement(DualThumb, Object.assign({
    value: value
  }, sharedProps)) : /*#__PURE__*/React__default.createElement(SingleThumb, Object.assign({
    value: value
  }, sharedProps));
}

function isDualThumb(value) {
  return Array.isArray(value);
}

var styles$1o = {
  "CheckboxWrapper": "Polaris-ResourceItem__CheckboxWrapper",
  "ResourceItem": "Polaris-ResourceItem",
  "persistActions": "Polaris-ResourceItem--persistActions",
  "Actions": "Polaris-ResourceItem__Actions",
  "newDesignLanguage": "Polaris-ResourceItem--newDesignLanguage",
  "selected": "Polaris-ResourceItem--selected",
  "focused": "Polaris-ResourceItem--focused",
  "focusedInner": "Polaris-ResourceItem--focusedInner",
  "Link": "Polaris-ResourceItem__Link",
  "Button": "Polaris-ResourceItem__Button",
  "Container": "Polaris-ResourceItem__Container",
  "alignmentLeading": "Polaris-ResourceItem--alignmentLeading",
  "alignmentTrailing": "Polaris-ResourceItem--alignmentTrailing",
  "alignmentCenter": "Polaris-ResourceItem--alignmentCenter",
  "alignmentFill": "Polaris-ResourceItem--alignmentFill",
  "alignmentBaseline": "Polaris-ResourceItem--alignmentBaseline",
  "Owned": "Polaris-ResourceItem__Owned",
  "Handle": "Polaris-ResourceItem__Handle",
  "selectMode": "Polaris-ResourceItem--selectMode",
  "selectable": "Polaris-ResourceItem--selectable",
  "Media": "Polaris-ResourceItem__Media",
  "Content": "Polaris-ResourceItem__Content",
  "Disclosure": "Polaris-ResourceItem__Disclosure"
};

var getUniqueCheckboxID = createUniqueIDFactory('ResourceListItemCheckbox');
var getUniqueOverlayID = createUniqueIDFactory('ResourceListItemOverlay');

var BaseResourceItem = /*#__PURE__*/function (_React$Component) {
  _inherits(BaseResourceItem, _React$Component);

  var _super = _createSuper(BaseResourceItem);

  function BaseResourceItem() {
    var _this;

    _classCallCheck(this, BaseResourceItem);

    _this = _super.apply(this, arguments);
    _this.state = {
      actionsMenuVisible: false,
      focused: false,
      focusedInner: false,
      selected: isSelected(_this.props.id, _this.props.context.selectedItems)
    };
    _this.node = null;
    _this.checkboxId = getUniqueCheckboxID();
    _this.overlayId = getUniqueOverlayID();
    _this.buttonOverlay = /*#__PURE__*/React__default.createRef();

    _this.setNode = function (node) {
      _this.node = node;
    };

    _this.handleFocus = function (event) {
      if (event.target === _this.buttonOverlay.current || _this.node && event.target === _this.node.querySelector("#".concat(_this.overlayId))) {
        _this.setState({
          focused: true,
          focusedInner: false
        });
      } else if (_this.node && _this.node.contains(event.target)) {
        _this.setState({
          focused: true,
          focusedInner: true
        });
      }
    };

    _this.handleBlur = function (_ref) {
      var relatedTarget = _ref.relatedTarget;

      if (_this.node && relatedTarget instanceof Element && _this.node.contains(relatedTarget)) {
        return;
      }

      _this.setState({
        focused: false,
        focusedInner: false
      });
    };

    _this.handleMouseOut = function () {
      _this.state.focused && _this.setState({
        focused: false,
        focusedInner: false
      });
    };

    _this.handleLargerSelectionArea = function (event) {
      stopPropagation$1(event);

      _this.handleSelection(!_this.state.selected, event.nativeEvent.shiftKey);
    };

    _this.handleSelection = function (value, shiftKey) {
      var _this$props = _this.props,
          id = _this$props.id,
          sortOrder = _this$props.sortOrder,
          onSelectionChange = _this$props.context.onSelectionChange;

      if (id == null || onSelectionChange == null) {
        return;
      }

      _this.setState({
        focused: value,
        focusedInner: value
      });

      onSelectionChange(value, id, sortOrder, shiftKey);
    };

    _this.handleClick = function (event) {
      stopPropagation$1(event);
      var _this$props2 = _this.props,
          id = _this$props2.id,
          onClick = _this$props2.onClick,
          url = _this$props2.url,
          selectMode = _this$props2.context.selectMode;
      var _event$nativeEvent = event.nativeEvent,
          ctrlKey = _event$nativeEvent.ctrlKey,
          metaKey = _event$nativeEvent.metaKey;

      var anchor = _this.node && _this.node.querySelector('a');

      if (selectMode) {
        _this.handleLargerSelectionArea(event);

        return;
      }

      if (anchor === event.target) {
        return;
      }

      if (onClick) {
        onClick(id);
      }

      if (url && (ctrlKey || metaKey)) {
        window.open(url, '_blank');
        return;
      }

      if (url && anchor) {
        anchor.click();
      }
    }; // This fires onClick when there is a URL on the item


    _this.handleKeyUp = function (event) {
      var _this$props3 = _this.props,
          _this$props3$onClick = _this$props3.onClick,
          onClick = _this$props3$onClick === void 0 ? noop$b : _this$props3$onClick,
          selectMode = _this$props3.context.selectMode;
      var key = event.key;

      if (key === 'Enter' && _this.props.url && !selectMode) {
        onClick();
      }
    };

    _this.handleActionsClick = function () {
      _this.setState(function (_ref2) {
        var actionsMenuVisible = _ref2.actionsMenuVisible;
        return {
          actionsMenuVisible: !actionsMenuVisible
        };
      });
    };

    _this.handleCloseRequest = function () {
      _this.setState({
        actionsMenuVisible: false
      });
    };

    return _this;
  }

  _createClass(BaseResourceItem, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      var nextChildren = nextProps.children,
          _a = nextProps.context,
          nextSelectedItems = _a.selectedItems,
          restNextContext = __rest(_a, ["selectedItems"]),
          restNextProps = __rest(nextProps, ["children", "context"]);

      var _b = this.props,
          children = _b.children,
          _c = _b.context,
          selectedItems = _c.selectedItems,
          restContext = __rest(_c, ["selectedItems"]),
          restProps = __rest(_b, ["children", "context"]);

      var nextSelectMode = nextProps.context.selectMode;
      return !isEqual(this.state, nextState) || this.props.context.selectMode !== nextSelectMode || !nextProps.context.selectMode && (!isEqual(restProps, restNextProps) || !isEqual(restContext, restNextContext));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          children = _this$props4.children,
          url = _this$props4.url,
          external = _this$props4.external,
          media = _this$props4.media,
          shortcutActions = _this$props4.shortcutActions,
          ariaControls = _this$props4.ariaControls,
          ariaExpanded = _this$props4.ariaExpanded,
          _this$props4$persistA = _this$props4.persistActions,
          persistActions = _this$props4$persistA === void 0 ? false : _this$props4$persistA,
          accessibilityLabel = _this$props4.accessibilityLabel,
          name = _this$props4.name,
          _this$props4$context = _this$props4.context,
          selectable = _this$props4$context.selectable,
          selectMode = _this$props4$context.selectMode,
          loading = _this$props4$context.loading,
          resourceName = _this$props4$context.resourceName,
          i18n = _this$props4.i18n,
          newDesignLanguage = _this$props4.features.newDesignLanguage,
          verticalAlignment = _this$props4.verticalAlignment;
      var _this$state = this.state,
          actionsMenuVisible = _this$state.actionsMenuVisible,
          focused = _this$state.focused,
          focusedInner = _this$state.focusedInner,
          selected = _this$state.selected;
      var ownedMarkup = null;
      var handleMarkup = null;
      var mediaMarkup = media ? /*#__PURE__*/React__default.createElement("div", {
        className: styles$1o.Media
      }, media) : null;

      if (selectable) {
        var checkboxAccessibilityLabel = name || accessibilityLabel || i18n.translate('Polaris.Common.checkbox');
        handleMarkup = /*#__PURE__*/React__default.createElement("div", {
          className: styles$1o.Handle,
          onClick: this.handleLargerSelectionArea
        }, /*#__PURE__*/React__default.createElement("div", {
          onClick: stopPropagation$1,
          className: styles$1o.CheckboxWrapper
        }, /*#__PURE__*/React__default.createElement("div", {
          onChange: this.handleLargerSelectionArea
        }, /*#__PURE__*/React__default.createElement(Checkbox$1, {
          id: this.checkboxId,
          label: checkboxAccessibilityLabel,
          labelHidden: true,
          checked: selected,
          disabled: loading
        }))));
      }

      if (media || selectable) {
        ownedMarkup = /*#__PURE__*/React__default.createElement("div", {
          className: styles$1o.Owned
        }, handleMarkup, mediaMarkup);
      }

      var className = classNames(styles$1o.ResourceItem, newDesignLanguage && styles$1o.newDesignLanguage, focused && styles$1o.focused, selectable && styles$1o.selectable, selected && styles$1o.selected, selectMode && styles$1o.selectMode, persistActions && styles$1o.persistActions, focusedInner && styles$1o.focusedInner);
      var actionsMarkup = null;
      var disclosureMarkup = null;

      if (shortcutActions && !loading) {
        if (persistActions) {
          actionsMarkup = /*#__PURE__*/React__default.createElement("div", {
            className: styles$1o.Actions,
            onClick: stopPropagation$1
          }, /*#__PURE__*/React__default.createElement(ButtonGroup, null, buttonsFrom(shortcutActions, {
            plain: true
          })));
          var disclosureAccessibilityLabel = name ? i18n.translate('Polaris.ResourceList.Item.actionsDropdownLabel', {
            accessibilityLabel: name
          }) : i18n.translate('Polaris.ResourceList.Item.actionsDropdown');
          disclosureMarkup = /*#__PURE__*/React__default.createElement("div", {
            className: styles$1o.Disclosure,
            onClick: stopPropagation$1
          }, /*#__PURE__*/React__default.createElement(Popover, {
            activator: /*#__PURE__*/React__default.createElement(Button, {
              accessibilityLabel: disclosureAccessibilityLabel,
              onClick: this.handleActionsClick,
              plain: true,
              icon: HorizontalDotsMinor
            }),
            onClose: this.handleCloseRequest,
            active: actionsMenuVisible
          }, /*#__PURE__*/React__default.createElement(ActionList, {
            items: shortcutActions
          })));
        } else {
          actionsMarkup = /*#__PURE__*/React__default.createElement("div", {
            className: styles$1o.Actions,
            onClick: stopPropagation$1
          }, /*#__PURE__*/React__default.createElement(ButtonGroup, {
            segmented: true
          }, buttonsFrom(shortcutActions, {
            size: 'slim'
          })));
        }
      }

      var content = children ? /*#__PURE__*/React__default.createElement("div", {
        className: styles$1o.Content
      }, children) : null;
      var containerClassName = classNames(styles$1o.Container, verticalAlignment && styles$1o[variationName('alignment', verticalAlignment)]);
      var containerMarkup = /*#__PURE__*/React__default.createElement("div", {
        className: containerClassName,
        id: this.props.id
      }, ownedMarkup, content, actionsMarkup, disclosureMarkup);
      var tabIndex = loading ? -1 : 0;
      var ariaLabel = accessibilityLabel || i18n.translate('Polaris.ResourceList.Item.viewItem', {
        itemName: name || resourceName && resourceName.singular || ''
      });
      var accessibleMarkup = url ? /*#__PURE__*/React__default.createElement(UnstyledLink, {
        "aria-describedby": this.props.id,
        "aria-label": ariaLabel,
        className: styles$1o.Link,
        url: url,
        external: external,
        tabIndex: tabIndex,
        id: this.overlayId
      }) : /*#__PURE__*/React__default.createElement("button", {
        className: styles$1o.Button,
        "aria-label": ariaLabel,
        "aria-controls": ariaControls,
        "aria-expanded": ariaExpanded,
        onClick: this.handleClick,
        tabIndex: tabIndex,
        ref: this.buttonOverlay
      });
      return /*#__PURE__*/React__default.createElement("div", {
        ref: this.setNode,
        className: className,
        onClick: this.handleClick,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        onKeyUp: this.handleKeyUp,
        onMouseOut: this.handleMouseOut,
        "data-href": url
      }, accessibleMarkup, containerMarkup);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var selected = isSelected(nextProps.id, nextProps.context.selectedItems);

      if (prevState.selected === selected) {
        return null;
      }

      return {
        selected
      };
    }
  }]);

  return BaseResourceItem;
}(React__default.Component);

function noop$b() {}

function stopPropagation$1(event) {
  event.stopPropagation();
}

function isSelected(id, selectedItems) {
  return Boolean(selectedItems && (Array.isArray(selectedItems) && selectedItems.includes(id) || selectedItems === SELECT_ALL_ITEMS));
}

function ResourceItem(props) {
  return /*#__PURE__*/React__default.createElement(BaseResourceItem, Object.assign({}, props, {
    context: useContext(ResourceListContext),
    features: useFeatures(),
    i18n: useI18n()
  }));
}

var StickyInner = /*#__PURE__*/function (_React$Component) {
  _inherits(StickyInner, _React$Component);

  var _super = _createSuper(StickyInner);

  function StickyInner() {
    var _this;

    _classCallCheck(this, StickyInner);

    _this = _super.apply(this, arguments);
    _this.state = {
      isSticky: false,
      style: {}
    };
    _this.placeHolderNode = null;
    _this.stickyNode = null;

    _this.setPlaceHolderNode = function (node) {
      _this.placeHolderNode = node;
    };

    _this.setStickyNode = function (node) {
      _this.stickyNode = node;
    };

    _this.handlePositioning = function (stick) {
      var top = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var left = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var width = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var isSticky = _this.state.isSticky;

      if (stick && !isSticky || !stick && isSticky) {
        _this.adjustPlaceHolderNode(stick);

        _this.setState({
          isSticky: !isSticky
        });
      }

      var style = stick ? {
        position: 'fixed',
        top,
        left,
        width
      } : {};

      _this.setState({
        style
      });
    };

    _this.adjustPlaceHolderNode = function (add) {
      if (_this.placeHolderNode && _this.stickyNode) {
        _this.placeHolderNode.style.paddingBottom = add ? "".concat(getRectForNode(_this.stickyNode).height, "px") : '0px';
      }
    };

    return _this;
  }

  _createClass(StickyInner, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          boundingElement = _this$props.boundingElement,
          _this$props$offset = _this$props.offset,
          offset = _this$props$offset === void 0 ? false : _this$props$offset,
          _this$props$disableWh = _this$props.disableWhenStacked,
          disableWhenStacked = _this$props$disableWh === void 0 ? false : _this$props$disableWh,
          stickyManager = _this$props.polaris.stickyManager;
      if (!this.stickyNode || !this.placeHolderNode) return;
      stickyManager.registerStickyItem({
        stickyNode: this.stickyNode,
        placeHolderNode: this.placeHolderNode,
        handlePositioning: this.handlePositioning,
        offset,
        boundingElement,
        disableWhenStacked
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var stickyManager = this.props.polaris.stickyManager;
      if (!this.stickyNode) return;
      stickyManager.unregisterStickyItem(this.stickyNode);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          style = _this$state.style,
          isSticky = _this$state.isSticky;
      var children = this.props.children;
      var childrenContent = isFunction(children) ? children(isSticky) : children;
      return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("div", {
        ref: this.setPlaceHolderNode
      }), /*#__PURE__*/React__default.createElement("div", {
        ref: this.setStickyNode,
        style: style
      }, childrenContent));
    }
  }]);

  return StickyInner;
}(React__default.Component);

function isFunction(arg) {
  return typeof arg === 'function';
}

var Sticky = withAppProvider()(StickyInner);

var styles$1p = {
  "Select": "Polaris-Select",
  "disabled": "Polaris-Select--disabled",
  "Content": "Polaris-Select__Content",
  "InlineLabel": "Polaris-Select__InlineLabel",
  "Icon": "Polaris-Select__Icon",
  "newDesignLanguage": "Polaris-Select--newDesignLanguage",
  "Backdrop": "Polaris-Select__Backdrop",
  "placeholder": "Polaris-Select--placeholder",
  "error": "Polaris-Select--error",
  "Input": "Polaris-Select__Input",
  "SelectedOption": "Polaris-Select__SelectedOption",
  "hover": "Polaris-Select--hover"
};

var PLACEHOLDER_VALUE = '';
function Select(_ref) {
  var optionsProp = _ref.options,
      label = _ref.label,
      labelAction = _ref.labelAction,
      labelHiddenProp = _ref.labelHidden,
      labelInline = _ref.labelInline,
      disabled = _ref.disabled,
      helpText = _ref.helpText,
      placeholder = _ref.placeholder,
      idProp = _ref.id,
      name = _ref.name,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? PLACEHOLDER_VALUE : _ref$value,
      error = _ref.error,
      onChange = _ref.onChange,
      onFocus = _ref.onFocus,
      onBlur = _ref.onBlur;
  var id = useUniqueId('Select', idProp);
  var labelHidden = labelInline ? true : labelHiddenProp;

  var _useFeatures = useFeatures(),
      newDesignLanguage = _useFeatures.newDesignLanguage;

  var className = classNames(styles$1p.Select, error && styles$1p.error, disabled && styles$1p.disabled, newDesignLanguage && styles$1p.newDesignLanguage);
  var handleChange = onChange ? function (event) {
    return onChange(event.currentTarget.value, id);
  } : undefined;
  var describedBy = [];

  if (helpText) {
    describedBy.push(helpTextID(id));
  }

  if (error) {
    describedBy.push("".concat(id, "Error"));
  }

  var options = optionsProp || [];
  var normalizedOptions = options.map(normalizeOption);

  if (placeholder) {
    normalizedOptions = [{
      label: placeholder,
      value: PLACEHOLDER_VALUE,
      disabled: true
    }].concat(_toConsumableArray(normalizedOptions));
  }

  var inlineLabelMarkup = labelInline && /*#__PURE__*/React__default.createElement("span", {
    className: styles$1p.InlineLabel
  }, label);
  var selectedOption = getSelectedOption(normalizedOptions, value);
  var contentMarkup = /*#__PURE__*/React__default.createElement("div", {
    className: styles$1p.Content,
    "aria-hidden": true,
    "aria-disabled": disabled
  }, inlineLabelMarkup, /*#__PURE__*/React__default.createElement("span", {
    className: styles$1p.SelectedOption
  }, selectedOption), /*#__PURE__*/React__default.createElement("span", {
    className: styles$1p.Icon
  }, /*#__PURE__*/React__default.createElement(Icon, {
    source: ArrowUpDownMinor
  })));
  var optionsMarkup = normalizedOptions.map(renderOption);
  return /*#__PURE__*/React__default.createElement(Labelled, {
    id: id,
    label: label,
    error: error,
    action: labelAction,
    labelHidden: labelHidden,
    helpText: helpText
  }, /*#__PURE__*/React__default.createElement("div", {
    className: className
  }, /*#__PURE__*/React__default.createElement("select", {
    id: id,
    name: name,
    value: value,
    className: styles$1p.Input,
    disabled: disabled,
    onFocus: onFocus,
    onBlur: onBlur,
    onChange: handleChange,
    "aria-invalid": Boolean(error),
    "aria-describedby": describedBy.length ? describedBy.join(' ') : undefined
  }, optionsMarkup), contentMarkup, /*#__PURE__*/React__default.createElement("div", {
    className: styles$1p.Backdrop
  })));
}

function isString(option) {
  return typeof option === 'string';
}

function isGroup(option) {
  return typeof option === 'object' && 'options' in option && option.options != null;
}

function normalizeStringOption(option) {
  return {
    label: option,
    value: option
  };
}
/**
 * Converts a string option (and each string option in a Group) into
 * an Option object.
 */


function normalizeOption(option) {
  if (isString(option)) {
    return normalizeStringOption(option);
  } else if (isGroup(option)) {
    var title = option.title,
        options = option.options;
    return {
      title,
      options: options.map(function (option) {
        return isString(option) ? normalizeStringOption(option) : option;
      })
    };
  }

  return option;
}
/**
 * Gets the text to display in the UI, for the currently selected option
 */


function getSelectedOption(options, value) {
  var flatOptions = flattenOptions(options);
  var selectedOption = flatOptions.find(function (option) {
    return value === option.value;
  });

  if (selectedOption === undefined) {
    // Get the first visible option (not the hidden placeholder)
    selectedOption = flatOptions.find(function (option) {
      return !option.hidden;
    });
  }

  return selectedOption ? selectedOption.label : '';
}
/**
 * Ungroups an options array
 */


function flattenOptions(options) {
  var flatOptions = [];
  options.forEach(function (optionOrGroup) {
    if (isGroup(optionOrGroup)) {
      flatOptions = flatOptions.concat(optionOrGroup.options);
    } else {
      flatOptions.push(optionOrGroup);
    }
  });
  return flatOptions;
}

function renderSingleOption(option) {
  var value = option.value,
      label = option.label,
      rest = __rest(option, ["value", "label"]);

  return /*#__PURE__*/React__default.createElement("option", Object.assign({
    key: value,
    value: value
  }, rest), label);
}

function renderOption(optionOrGroup) {
  if (isGroup(optionOrGroup)) {
    var title = optionOrGroup.title,
        options = optionOrGroup.options;
    return /*#__PURE__*/React__default.createElement("optgroup", {
      label: title,
      key: title
    }, options.map(renderSingleOption));
  }

  return renderSingleOption(optionOrGroup);
}

var styles$1q = {
  "CheckableButton": "Polaris-ResourceList-CheckableButton",
  "newDesignLanguage": "Polaris-ResourceList-CheckableButton--newDesignLanguage",
  "CheckableButton-selectMode": "Polaris-ResourceList-CheckableButton__CheckableButton--selectMode",
  "CheckableButton-measuring": "Polaris-ResourceList-CheckableButton__CheckableButton--measuring",
  "CheckableButton-plain": "Polaris-ResourceList-CheckableButton__CheckableButton--plain",
  "CheckableButton-selected": "Polaris-ResourceList-CheckableButton__CheckableButton--selected",
  "Checkbox": "Polaris-ResourceList-CheckableButton__Checkbox",
  "Label": "Polaris-ResourceList-CheckableButton__Label"
};

function CheckableButton(_ref) {
  var accessibilityLabel = _ref.accessibilityLabel,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? '' : _ref$label,
      onToggleAll = _ref.onToggleAll,
      selected = _ref.selected,
      selectMode = _ref.selectMode,
      plain = _ref.plain,
      measuring = _ref.measuring,
      disabled = _ref.disabled,
      smallScreen = _ref.smallScreen;
  var checkBoxRef = useRef(null);

  var _useFeatures = useFeatures(),
      newDesignLanguage = _useFeatures.newDesignLanguage;

  var _React$useContext = React__default.useContext(ResourceListContext),
      registerCheckableButtons = _React$useContext.registerCheckableButtons;

  var currentKey = 'bulkLg';

  if (plain) {
    currentKey = 'plain';
  } else if (smallScreen) {
    currentKey = 'bulkSm';
  }

  useEffect(function () {
    if (checkBoxRef.current && registerCheckableButtons) {
      registerCheckableButtons(currentKey, checkBoxRef.current);
    }
  }, [currentKey, registerCheckableButtons]);
  var className = plain ? classNames(styles$1q.CheckableButton, styles$1q['CheckableButton-plain'], newDesignLanguage && styles$1q.newDesignLanguage) : classNames(styles$1q.CheckableButton, newDesignLanguage && styles$1q.newDesignLanguage, selectMode && styles$1q['CheckableButton-selectMode'], selected && styles$1q['CheckableButton-selected'], measuring && styles$1q['CheckableButton-measuring']);
  return /*#__PURE__*/React__default.createElement("div", {
    className: className,
    onClick: onToggleAll
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles$1q.Checkbox
  }, /*#__PURE__*/React__default.createElement(Checkbox$1, {
    label: accessibilityLabel,
    labelHidden: true,
    checked: selected,
    disabled: disabled,
    onChange: onToggleAll,
    ref: checkBoxRef
  })), /*#__PURE__*/React__default.createElement("span", {
    className: styles$1q.Label
  }, label));
}

var styles$1r = {
  "Group": "Polaris-ResourceList-BulkActions__Group",
  "Group-measuring": "Polaris-ResourceList-BulkActions__Group--measuring",
  "Group-entering": "Polaris-ResourceList-BulkActions__Group--entering",
  "Group-exiting": "Polaris-ResourceList-BulkActions__Group--exiting",
  "Group-entered": "Polaris-ResourceList-BulkActions__Group--entered",
  "Group-exited": "Polaris-ResourceList-BulkActions__Group--exited",
  "Group-smallScreen": "Polaris-ResourceList-BulkActions__Group--smallScreen",
  "Group-largeScreen": "Polaris-ResourceList-BulkActions__Group--largeScreen",
  "ButtonGroupWrapper": "Polaris-ResourceList-BulkActions__ButtonGroupWrapper",
  "BulkActionButton": "Polaris-ResourceList-BulkActions__BulkActionButton",
  "CheckableContainer": "Polaris-ResourceList-BulkActions__CheckableContainer",
  "disabled": "Polaris-ResourceList-BulkActions--disabled",
  "newDesignLanguage": "Polaris-ResourceList-BulkActions--newDesignLanguage",
  "PaginatedSelectAll": "Polaris-ResourceList-BulkActions__PaginatedSelectAll",
  "Slide": "Polaris-ResourceList-BulkActions__Slide",
  "Slide-appear": "Polaris-ResourceList-BulkActions__Slide--appear",
  "Slide-enter": "Polaris-ResourceList-BulkActions__Slide--enter",
  "Slide-exit": "Polaris-ResourceList-BulkActions__Slide--exit",
  "Slide-appearing": "Polaris-ResourceList-BulkActions__Slide--appearing",
  "Slide-entering": "Polaris-ResourceList-BulkActions__Slide--entering"
};

function BulkActionButton(_ref) {
  var handleMeasurement = _ref.handleMeasurement,
      url = _ref.url,
      external = _ref.external,
      onAction = _ref.onAction,
      content = _ref.content,
      disclosure = _ref.disclosure,
      accessibilityLabel = _ref.accessibilityLabel,
      disabled = _ref.disabled;
  var bulkActionButton = useRef(null);
  useComponentDidMount(function () {
    if (handleMeasurement && bulkActionButton.current) {
      var width = bulkActionButton.current.getBoundingClientRect().width;
      handleMeasurement(width);
    }
  });
  return /*#__PURE__*/React__default.createElement("div", {
    className: styles$1r.BulkActionButton,
    ref: bulkActionButton
  }, /*#__PURE__*/React__default.createElement(Button, {
    external: external,
    url: url,
    "aria-label": accessibilityLabel,
    onClick: onAction,
    disabled: disabled,
    disclosure: disclosure
  }, content));
}

var MAX_PROMOTED_ACTIONS = 2;
var slideClasses = {
  appear: classNames(styles$1r.Slide, styles$1r['Slide-appear']),
  appearActive: classNames(styles$1r.Slide, styles$1r['Slide-appearing']),
  enter: classNames(styles$1r.Slide, styles$1r['Slide-enter']),
  enterActive: classNames(styles$1r.Slide, styles$1r['Slide-entering']),
  exit: classNames(styles$1r.Slide, styles$1r['Slide-exit'])
};

var BulkActionsInner = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(BulkActionsInner, _React$PureComponent);

  var _super = _createSuper(BulkActionsInner);

  function BulkActionsInner() {
    var _this;

    _classCallCheck(this, BulkActionsInner);

    _this = _super.apply(this, arguments);
    _this.state = {
      smallScreenPopoverVisible: false,
      largeScreenPopoverVisible: false,
      containerWidth: 0,
      measuring: true
    };
    _this.containerNode = null;
    _this.largeScreenButtonsNode = null;
    _this.moreActionsNode = null;
    _this.checkableWrapperNode = /*#__PURE__*/createRef();
    _this.largeScreenGroupNode = /*#__PURE__*/createRef();
    _this.smallScreenGroupNode = /*#__PURE__*/createRef();
    _this.promotedActionsWidths = [];
    _this.bulkActionsWidth = 0;
    _this.addedMoreActionsWidthForMeasuring = 0;
    _this.handleResize = debounce(function () {
      var _this$state = _this.state,
          smallScreenPopoverVisible = _this$state.smallScreenPopoverVisible,
          largeScreenPopoverVisible = _this$state.largeScreenPopoverVisible;

      if (_this.containerNode) {
        var containerWidth = _this.containerNode.getBoundingClientRect().width;

        if (containerWidth > 0) {
          _this.setState({
            containerWidth
          });
        }
      }

      if (smallScreenPopoverVisible || largeScreenPopoverVisible) {
        _this.setState({
          smallScreenPopoverVisible: false,
          largeScreenPopoverVisible: false
        });
      }
    }, 50, {
      trailing: true
    });

    _this.setLargeScreenButtonsNode = function (node) {
      _this.largeScreenButtonsNode = node;
    };

    _this.setContainerNode = function (node) {
      _this.containerNode = node;
    };

    _this.setMoreActionsNode = function (node) {
      _this.moreActionsNode = node;
    };

    _this.setSelectMode = function (val) {
      var onSelectModeToggle = _this.props.onSelectModeToggle;

      if (onSelectModeToggle) {
        onSelectModeToggle(val);
      }
    };

    _this.toggleSmallScreenPopover = function () {
      _this.setState(function (_ref) {
        var smallScreenPopoverVisible = _ref.smallScreenPopoverVisible;
        return {
          smallScreenPopoverVisible: !smallScreenPopoverVisible
        };
      });
    };

    _this.toggleLargeScreenPopover = function () {
      _this.setState(function (_ref2) {
        var largeScreenPopoverVisible = _ref2.largeScreenPopoverVisible;
        return {
          largeScreenPopoverVisible: !largeScreenPopoverVisible
        };
      });
    };

    _this.handleMeasurement = function (width) {
      var measuring = _this.state.measuring;

      if (measuring) {
        _this.promotedActionsWidths.push(width);
      }
    };

    _this.findLargeScreenGroupNode = function () {
      return _this.largeScreenGroupNode.current;
    };

    _this.findCheckableWrapperNode = function () {
      return _this.checkableWrapperNode.current;
    };

    _this.findSmallScreenGroupNode = function () {
      return _this.smallScreenGroupNode.current;
    };

    return _this;
  }

  _createClass(BulkActionsInner, [{
    key: "numberOfPromotedActionsToRender",
    value: function numberOfPromotedActionsToRender() {
      var promotedActions = this.props.promotedActions;
      var _this$state2 = this.state,
          containerWidth = _this$state2.containerWidth,
          measuring = _this$state2.measuring;

      if (!promotedActions) {
        return 0;
      }

      if (containerWidth >= this.bulkActionsWidth || measuring) {
        return promotedActions.length;
      }

      var sufficientSpace = false;
      var counter = promotedActions.length - 1;
      var totalWidth = 0;

      while (!sufficientSpace && counter >= 0) {
        totalWidth += this.promotedActionsWidths[counter];
        var widthWithRemovedAction = this.bulkActionsWidth - totalWidth + this.addedMoreActionsWidthForMeasuring;

        if (containerWidth >= widthWithRemovedAction) {
          sufficientSpace = true;
        } else {
          counter--;
        }
      }

      return counter;
    }
  }, {
    key: "hasActions",
    value: function hasActions() {
      var _this$props = this.props,
          promotedActions = _this$props.promotedActions,
          actions = _this$props.actions;
      return Boolean(promotedActions && promotedActions.length > 0 || actions && actions.length > 0);
    }
  }, {
    key: "actionSections",
    value: function actionSections() {
      var actions = this.props.actions;

      if (!actions || actions.length === 0) {
        return;
      }

      if (instanceOfBulkActionListSectionArray(actions)) {
        return actions;
      }

      if (instanceOfBulkActionArray(actions)) {
        return [{
          items: actions
        }];
      }
    } // eslint-disable-next-line @typescript-eslint/member-ordering

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props2 = this.props,
          actions = _this$props2.actions,
          promotedActions = _this$props2.promotedActions;

      if (promotedActions && !actions && this.moreActionsNode) {
        this.addedMoreActionsWidthForMeasuring = this.moreActionsNode.getBoundingClientRect().width;
      }

      this.bulkActionsWidth = this.largeScreenButtonsNode ? this.largeScreenButtonsNode.getBoundingClientRect().width - this.addedMoreActionsWidthForMeasuring : 0;

      if (this.containerNode) {
        this.setState({
          containerWidth: this.containerNode.getBoundingClientRect().width,
          measuring: false
        });
      }
    } // eslint-disable-next-line @typescript-eslint/member-ordering

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          selectMode = _this$props3.selectMode,
          accessibilityLabel = _this$props3.accessibilityLabel,
          _this$props3$label = _this$props3.label,
          label = _this$props3$label === void 0 ? '' : _this$props3$label,
          onToggleAll = _this$props3.onToggleAll,
          selected = _this$props3.selected,
          smallScreen = _this$props3.smallScreen,
          disabled = _this$props3.disabled,
          promotedActions = _this$props3.promotedActions,
          _this$props3$paginate = _this$props3.paginatedSelectAllText,
          paginatedSelectAllText = _this$props3$paginate === void 0 ? null : _this$props3$paginate,
          paginatedSelectAllAction = _this$props3.paginatedSelectAllAction,
          intl = _this$props3.polaris.intl;
      var actionSections = this.actionSections();

      if (promotedActions && promotedActions.length > MAX_PROMOTED_ACTIONS) {
        // eslint-disable-next-line no-console
        console.warn(intl.translate('Polaris.ResourceList.BulkActions.warningMessage', {
          maxPromotedActions: MAX_PROMOTED_ACTIONS
        }));
      }

      var _this$state3 = this.state,
          smallScreenPopoverVisible = _this$state3.smallScreenPopoverVisible,
          largeScreenPopoverVisible = _this$state3.largeScreenPopoverVisible,
          measuring = _this$state3.measuring;
      var paginatedSelectAllActionMarkup = paginatedSelectAllAction ? /*#__PURE__*/React__default.createElement(Button, {
        onClick: paginatedSelectAllAction.onAction,
        plain: true,
        disabled: disabled
      }, paginatedSelectAllAction.content) : null;
      var paginatedSelectAllTextMarkup = paginatedSelectAllText && paginatedSelectAllAction ? /*#__PURE__*/React__default.createElement("span", {
        "aria-live": "polite"
      }, paginatedSelectAllText) : paginatedSelectAllText;
      var paginatedSelectAllMarkup = paginatedSelectAllActionMarkup || paginatedSelectAllTextMarkup ? /*#__PURE__*/React__default.createElement("div", {
        className: styles$1r.PaginatedSelectAll
      }, paginatedSelectAllTextMarkup, " ", paginatedSelectAllActionMarkup) : null;
      var cancelButton = /*#__PURE__*/React__default.createElement(Button, {
        onClick: this.setSelectMode.bind(this, false),
        disabled: disabled
      }, intl.translate('Polaris.Common.cancel'));
      var numberOfPromotedActionsToRender = this.numberOfPromotedActionsToRender();
      var allActionsPopover = this.hasActions() ? /*#__PURE__*/React__default.createElement("div", {
        className: styles$1r.Popover,
        ref: this.setMoreActionsNode
      }, /*#__PURE__*/React__default.createElement(Popover, {
        active: smallScreenPopoverVisible,
        activator: /*#__PURE__*/React__default.createElement(BulkActionButton, {
          disclosure: true,
          onAction: this.toggleSmallScreenPopover,
          content: intl.translate('Polaris.ResourceList.BulkActions.actionsActivatorLabel'),
          disabled: disabled
        }),
        onClose: this.toggleSmallScreenPopover
      }, /*#__PURE__*/React__default.createElement(ActionList, {
        items: promotedActions,
        sections: actionSections,
        onActionAnyItem: this.toggleSmallScreenPopover
      }))) : null;
      var promotedActionsMarkup = promotedActions && numberOfPromotedActionsToRender > 0 ? _toConsumableArray(promotedActions).slice(0, numberOfPromotedActionsToRender).map(function (action, index) {
        return /*#__PURE__*/React__default.createElement(BulkActionButton, Object.assign({
          disabled: disabled
        }, action, {
          key: index,
          handleMeasurement: _this2.handleMeasurement
        }));
      }) : null;
      var rolledInPromotedActions = promotedActions && numberOfPromotedActionsToRender < promotedActions.length ? _toConsumableArray(promotedActions).slice(numberOfPromotedActionsToRender) : [];
      var activatorLabel = !promotedActions || promotedActions && numberOfPromotedActionsToRender === 0 && !measuring ? intl.translate('Polaris.ResourceList.BulkActions.actionsActivatorLabel') : intl.translate('Polaris.ResourceList.BulkActions.moreActionsActivatorLabel');
      var combinedActions = [];

      if (actionSections && rolledInPromotedActions.length > 0) {
        combinedActions = [{
          items: rolledInPromotedActions
        }].concat(_toConsumableArray(actionSections));
      } else if (actionSections) {
        combinedActions = actionSections;
      } else if (rolledInPromotedActions.length > 0) {
        combinedActions = [{
          items: rolledInPromotedActions
        }];
      }

      var actionsPopover = actionSections || rolledInPromotedActions.length > 0 || measuring ? /*#__PURE__*/React__default.createElement("div", {
        className: styles$1r.Popover,
        ref: this.setMoreActionsNode
      }, /*#__PURE__*/React__default.createElement(Popover, {
        active: largeScreenPopoverVisible,
        activator: /*#__PURE__*/React__default.createElement(BulkActionButton, {
          disclosure: true,
          onAction: this.toggleLargeScreenPopover,
          content: activatorLabel,
          disabled: disabled
        }),
        onClose: this.toggleLargeScreenPopover
      }, /*#__PURE__*/React__default.createElement(ActionList, {
        sections: combinedActions,
        onActionAnyItem: this.toggleLargeScreenPopover
      }))) : null;
      var checkableButtonProps = {
        accessibilityLabel,
        label,
        selected,
        selectMode,
        onToggleAll,
        measuring,
        disabled
      };
      var smallScreenGroup = smallScreen ? /*#__PURE__*/React__default.createElement(Transition, {
        timeout: 0,
        in: selectMode,
        key: "smallGroup",
        findDOMNode: this.findSmallScreenGroupNode
      }, function (status) {
        var smallScreenGroupClassName = classNames(styles$1r.Group, styles$1r['Group-smallScreen'], styles$1r["Group-".concat(status)]);
        return /*#__PURE__*/React__default.createElement("div", {
          className: smallScreenGroupClassName,
          ref: _this2.smallScreenGroupNode
        }, /*#__PURE__*/React__default.createElement("div", {
          className: styles$1r.ButtonGroupWrapper
        }, /*#__PURE__*/React__default.createElement(ButtonGroup, {
          segmented: true
        }, /*#__PURE__*/React__default.createElement(CSSTransition, {
          findDOMNode: _this2.findCheckableWrapperNode,
          in: selectMode,
          timeout: durationBase,
          classNames: slideClasses,
          appear: !selectMode
        }, /*#__PURE__*/React__default.createElement("div", {
          className: styles$1r.CheckableContainer,
          ref: _this2.checkableWrapperNode
        }, /*#__PURE__*/React__default.createElement(CheckableButton, Object.assign({}, checkableButtonProps, {
          smallScreen: true
        })))), allActionsPopover, cancelButton)), paginatedSelectAllMarkup);
      }) : null;
      var largeGroupContent = promotedActionsMarkup || actionsPopover ? /*#__PURE__*/React__default.createElement(ButtonGroup, {
        segmented: true
      }, /*#__PURE__*/React__default.createElement(CheckableButton, checkableButtonProps), promotedActionsMarkup, actionsPopover) : /*#__PURE__*/React__default.createElement(CheckableButton, checkableButtonProps);
      var largeScreenGroup = smallScreen ? null : /*#__PURE__*/React__default.createElement(Transition, {
        timeout: 0,
        in: selectMode,
        key: "largeGroup",
        findDOMNode: this.findLargeScreenGroupNode
      }, function (status) {
        var largeScreenGroupClassName = classNames(styles$1r.Group, styles$1r['Group-largeScreen'], !measuring && styles$1r["Group-".concat(status)], measuring && styles$1r['Group-measuring']);
        return /*#__PURE__*/React__default.createElement("div", {
          className: largeScreenGroupClassName,
          ref: _this2.largeScreenGroupNode
        }, /*#__PURE__*/React__default.createElement(EventListener, {
          event: "resize",
          handler: _this2.handleResize
        }), /*#__PURE__*/React__default.createElement("div", {
          className: styles$1r.ButtonGroupWrapper,
          ref: _this2.setLargeScreenButtonsNode
        }, largeGroupContent), paginatedSelectAllMarkup);
      });
      return /*#__PURE__*/React__default.createElement("div", {
        ref: this.setContainerNode
      }, smallScreenGroup, largeScreenGroup);
    }
  }]);

  return BulkActionsInner;
}(React__default.PureComponent);

function instanceOfBulkActionListSectionArray(actions) {
  var validList = actions.filter(function (action) {
    return action.items;
  });
  return actions.length === validList.length;
}

function instanceOfBulkActionArray(actions) {
  var validList = actions.filter(function (action) {
    return !action.items;
  });
  return actions.length === validList.length;
}

var BulkActions = withAppProvider()(BulkActionsInner);

var styles$1s = {
  "DateTextField": "Polaris-FilterControl-DateSelector__DateTextField",
  "DatePicker": "Polaris-FilterControl-DateSelector__DatePicker"
};

var VALID_DATE_REGEX = /^\d{4}-\d{1,2}-\d{1,2}$/;
var DateFilterOption;

(function (DateFilterOption) {
  DateFilterOption["PastWeek"] = "past_week";
  DateFilterOption["PastMonth"] = "past_month";
  DateFilterOption["PastQuarter"] = "past_quarter";
  DateFilterOption["PastYear"] = "past_year";
  DateFilterOption["ComingWeek"] = "coming_week";
  DateFilterOption["ComingMonth"] = "coming_month";
  DateFilterOption["ComingQuarter"] = "coming_quarter";
  DateFilterOption["ComingYear"] = "coming_year";
  DateFilterOption["OnOrBefore"] = "on_or_before";
  DateFilterOption["OnOrAfter"] = "on_or_after";
})(DateFilterOption || (DateFilterOption = {}));

var DateSelector = /*#__PURE__*/memo(function DateSelector(_ref) {
  var filterValue = _ref.filterValue,
      filterKey = _ref.filterKey,
      filterMinKey = _ref.filterMinKey,
      filterMaxKey = _ref.filterMaxKey,
      dateOptionType = _ref.dateOptionType,
      onFilterValueChange = _ref.onFilterValueChange,
      onFilterKeyChange = _ref.onFilterKeyChange;
  var now = new Date();
  var i18n = useI18n();
  var initialConsumerFilterKey = useRef(filterKey);

  var _useState = useState(now.getMonth()),
      _useState2 = _slicedToArray(_useState, 2),
      datePickerMonth = _useState2[0],
      setDatePickerMonth = _useState2[1];

  var _useState3 = useState(now.getFullYear()),
      _useState4 = _slicedToArray(_useState3, 2),
      datePickerYear = _useState4[0],
      setDatePickerYear = _useState4[1];

  var _useState5 = useState(),
      _useState6 = _slicedToArray(_useState5, 2),
      selectedDate = _useState6[0],
      setSelectedDate = _useState6[1];

  var _useState7 = useState(),
      _useState8 = _slicedToArray(_useState7, 2),
      userInputDate = _useState8[0],
      setUserInputDate = _useState8[1];

  var _useState9 = useState(),
      _useState10 = _slicedToArray(_useState9, 2),
      userInputDateError = _useState10[0],
      setUserInputDateError = _useState10[1];

  var dateTextFieldValue = getDateTextFieldValue();
  var handleDateFieldChange = useCallback(function (value) {
    if (value.length === 0) {
      setSelectedDate(undefined);
      onFilterValueChange(undefined);
    }

    if (userInputDateError && isValidDate(value)) {
      setUserInputDateError(undefined);
    }

    setUserInputDate(value);
  }, [onFilterValueChange, userInputDateError]);
  var handleDateChanged = useCallback(function (date) {
    if (!date) {
      return;
    }

    onFilterValueChange(stripTimeFromISOString(formatDateForLocalTimezone(date)));
  }, [onFilterValueChange]);
  var handleDateBlur = useCallback(function () {
    if (!dateTextFieldValue || !isValidDate(dateTextFieldValue)) {
      setSelectedDate(undefined);
      setUserInputDateError(i18n.translate('Polaris.ResourceList.DateSelector.dateValueError'));
      onFilterValueChange(undefined);
      return;
    }

    if (!userInputDate) {
      return;
    }

    var formattedDateForTimezone = new Date(formatDateForLocalTimezone(new Date(userInputDate)));
    setSelectedDate(formattedDateForTimezone);
    setDatePickerMonth(formattedDateForTimezone.getMonth());
    setDatePickerYear(formattedDateForTimezone.getFullYear());
    setUserInputDate(undefined);
    setUserInputDateError(undefined);
    handleDateChanged(formattedDateForTimezone);
  }, [dateTextFieldValue, handleDateChanged, i18n, onFilterValueChange, userInputDate]);
  var handleDateFilterOptionsChange = useCallback(function (newOption) {
    if (!initialConsumerFilterKey.current) {
      return;
    }

    if (newOption === DateFilterOption.OnOrBefore) {
      onFilterKeyChange(filterMaxKey);
      onFilterValueChange(selectedDate ? stripTimeFromISOString(formatDateForLocalTimezone(selectedDate)) : undefined);
      return;
    }

    if (newOption === DateFilterOption.OnOrAfter) {
      onFilterKeyChange(filterMinKey);
      onFilterValueChange(selectedDate ? stripTimeFromISOString(formatDateForLocalTimezone(selectedDate)) : undefined);
      return;
    }

    onFilterKeyChange(initialConsumerFilterKey.current);
    onFilterValueChange(newOption);
  }, [filterMaxKey, filterMinKey, initialConsumerFilterKey, onFilterKeyChange, onFilterValueChange, selectedDate]);
  var handleDatePickerChange = useCallback(function (_ref2) {
    var nextDate = _ref2.end;
    var date = new Date(nextDate);
    setSelectedDate(date);
    setUserInputDate(undefined);
    setUserInputDateError(undefined);
    handleDateChanged(date);
  }, [handleDateChanged]);
  var handleDatePickerMonthChange = useCallback(function (month, year) {
    setDatePickerMonth(month);
    setDatePickerYear(year);
  }, []);
  var dateFilterOption = getDateFilterOption(filterValue, filterKey, filterMinKey, filterMaxKey);
  var showDatePredicate = dateFilterOption === DateFilterOption.OnOrBefore || dateFilterOption === DateFilterOption.OnOrAfter;
  var datePredicateMarkup = showDatePredicate && /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
    className: styles$1s.DateTextField
  }, /*#__PURE__*/React__default.createElement(TextField, {
    label: i18n.translate('Polaris.ResourceList.DateSelector.dateValueLabel'),
    placeholder: i18n.translate('Polaris.ResourceList.DateSelector.dateValuePlaceholder'),
    value: dateTextFieldValue,
    error: userInputDateError,
    prefix: /*#__PURE__*/React__default.createElement(Icon, {
      source: CalendarMinor,
      color: "skyDark"
    }),
    autoComplete: false,
    onChange: handleDateFieldChange,
    onBlur: handleDateBlur
  })), /*#__PURE__*/React__default.createElement("div", {
    className: styles$1s.DatePicker
  }, /*#__PURE__*/React__default.createElement(DatePicker, {
    selected: selectedDate,
    month: datePickerMonth,
    year: datePickerYear,
    onChange: handleDatePickerChange,
    onMonthChange: handleDatePickerMonthChange
  })));
  var dateOptionTypes = {
    past: [].concat(_toConsumableArray(getDatePastOptions()), _toConsumableArray(getDateComparatorOptions())),
    future: [].concat(_toConsumableArray(getDateFutureOptions()), _toConsumableArray(getDateComparatorOptions())),
    full: [].concat(_toConsumableArray(getDatePastOptions()), _toConsumableArray(getDateFutureOptions()), _toConsumableArray(getDateComparatorOptions()))
  };
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(Select, {
    label: i18n.translate('Polaris.ResourceList.DateSelector.SelectOptions.dateFilterLabel'),
    labelHidden: true,
    options: dateOptionType ? dateOptionTypes[dateOptionType] : dateOptionTypes.full,
    placeholder: i18n.translate('Polaris.ResourceList.FilterValueSelector.selectFilterValuePlaceholder'),
    value: dateFilterOption,
    onChange: handleDateFilterOptionsChange
  }), datePredicateMarkup);

  function getDateComparatorOptions() {
    return [{
      value: DateFilterOption.OnOrBefore,
      label: i18n.translate('Polaris.ResourceList.DateSelector.SelectOptions.OnOrBefore')
    }, {
      value: DateFilterOption.OnOrAfter,
      label: i18n.translate('Polaris.ResourceList.DateSelector.SelectOptions.OnOrAfter')
    }];
  }

  function getDatePastOptions() {
    return [{
      value: DateFilterOption.PastWeek,
      label: i18n.translate('Polaris.ResourceList.DateSelector.SelectOptions.PastWeek')
    }, {
      value: DateFilterOption.PastMonth,
      label: i18n.translate('Polaris.ResourceList.DateSelector.SelectOptions.PastMonth')
    }, {
      value: DateFilterOption.PastQuarter,
      label: i18n.translate('Polaris.ResourceList.DateSelector.SelectOptions.PastQuarter')
    }, {
      value: DateFilterOption.PastYear,
      label: i18n.translate('Polaris.ResourceList.DateSelector.SelectOptions.PastYear')
    }];
  }

  function getDateFutureOptions() {
    return [{
      value: DateFilterOption.ComingWeek,
      label: i18n.translate('Polaris.ResourceList.DateSelector.SelectOptions.ComingWeek')
    }, {
      value: DateFilterOption.ComingMonth,
      label: i18n.translate('Polaris.ResourceList.DateSelector.SelectOptions.ComingMonth')
    }, {
      value: DateFilterOption.ComingQuarter,
      label: i18n.translate('Polaris.ResourceList.DateSelector.SelectOptions.ComingQuarter')
    }, {
      value: DateFilterOption.ComingYear,
      label: i18n.translate('Polaris.ResourceList.DateSelector.SelectOptions.ComingYear')
    }];
  }

  function getDateTextFieldValue() {
    if (!userInputDate && !selectedDate) {
      return undefined;
    }

    if (userInputDate !== undefined) {
      return userInputDate;
    }

    if (selectedDate) {
      return stripTimeFromISOString(formatDateForLocalTimezone(selectedDate));
    }
  }
});

function isValidDate(date) {
  if (!date) {
    return false;
  }

  return VALID_DATE_REGEX.test(date) && !isNaN(new Date(date).getTime());
}

function getDateFilterOption(filterValue, filterKey, filterMinKey, filterMaxKey) {
  if (filterKey === filterMaxKey) {
    return DateFilterOption.OnOrBefore;
  }

  if (filterKey === filterMinKey) {
    return DateFilterOption.OnOrAfter;
  }

  return filterValue;
}

function stripTimeFromISOString(ISOString) {
  return ISOString.slice(0, 10);
}

function formatDateForLocalTimezone(date) {
  var timezoneOffset = date.getTimezoneOffset();
  var timezoneOffsetMs = timezoneOffset * 60 * 1000;
  var isFringeTimezone = timezoneOffset === -720 || timezoneOffset === 720;
  var formattedDate = new Date();

  if (isFringeTimezone && date.getHours() !== 0) {
    return date.toISOString();
  }

  var newTime = timezoneOffset > -1 ? date.getTime() + timezoneOffsetMs : date.getTime() - timezoneOffsetMs;
  formattedDate.setTime(newTime);
  return formattedDate.toISOString();
}

var FilterType;

(function (FilterType) {
  FilterType[FilterType["Select"] = 0] = "Select";
  FilterType[FilterType["TextField"] = 1] = "TextField";
  FilterType[FilterType["DateSelector"] = 2] = "DateSelector";
})(FilterType || (FilterType = {}));

/**
 * Returns a MutatableRefObject containing a boolean value that
 * represents a components mounted status.
 * @returns MutableRefObject<boolean> The mounted status
 */

function useIsMountedRef() {
  var isMounted = useRef(false);
  useEffect(function () {
    isMounted.current = true;
    return function () {
      isMounted.current = false;
    };
  }, []);
  return isMounted;
}

function FilterValueSelector(_ref) {
  var filter = _ref.filter,
      filterKey = _ref.filterKey,
      value = _ref.value,
      onChange = _ref.onChange,
      onFilterKeyChange = _ref.onFilterKeyChange;
  var i18n = useI18n();
  var isMounted = useIsMountedRef();
  var operatorText = filter.operatorText,
      type = filter.type,
      label = filter.label;
  var showOperatorOptions = type !== FilterType.DateSelector && operatorText && typeof operatorText !== 'string';
  var handleOperatorOptionChange = useCallback(function (operatorKey) {
    onFilterKeyChange(operatorKey);

    if (!value) {
      return;
    }

    onChange(value);
  }, [onChange, onFilterKeyChange, value]);

  if (showOperatorOptions && operatorText.length !== 0 && !isMounted.current) {
    handleOperatorOptionChange(operatorText[0].key);
  }

  var operatorOptionsMarkup = showOperatorOptions ? /*#__PURE__*/React__default.createElement(Select, {
    label: label,
    labelHidden: true,
    options: buildOperatorOptions(operatorText),
    value: filterKey,
    onChange: handleOperatorOptionChange
  }) : null;
  var selectedFilterLabel = typeof operatorText === 'string' ? operatorText : '';

  switch (filter.type) {
    case FilterType.Select:
      return /*#__PURE__*/React__default.createElement(Stack, {
        vertical: true
      }, operatorOptionsMarkup, /*#__PURE__*/React__default.createElement(Select, {
        label: selectedFilterLabel,
        options: filter.options,
        placeholder: i18n.translate('Polaris.ResourceList.FilterValueSelector.selectFilterValuePlaceholder'),
        value: value,
        onChange: onChange
      }));

    case FilterType.TextField:
      return /*#__PURE__*/React__default.createElement(Stack, {
        vertical: true
      }, operatorOptionsMarkup, /*#__PURE__*/React__default.createElement(TextField, {
        label: selectedFilterLabel,
        value: value,
        type: filter.textFieldType,
        onChange: onChange
      }));

    case FilterType.DateSelector:
      return /*#__PURE__*/React__default.createElement(DateSelector, {
        dateOptionType: filter.dateOptionType,
        filterValue: value,
        filterKey: filterKey,
        filterMinKey: filter.minKey,
        filterMaxKey: filter.maxKey,
        onFilterValueChange: onChange,
        onFilterKeyChange: onFilterKeyChange
      });

    default:
      return null;
  }
}

function buildOperatorOptions(operatorText) {
  if (!operatorText || typeof operatorText === 'string') {
    return [];
  }

  return operatorText.map(function (_ref2) {
    var key = _ref2.key,
        optionLabel = _ref2.optionLabel;
    return {
      value: key,
      label: optionLabel
    };
  });
}

function FilterCreator(_ref) {
  var filters = _ref.filters,
      resourceName = _ref.resourceName,
      disabled = _ref.disabled,
      onAddFilter = _ref.onAddFilter;

  var _useToggle = useToggle(false),
      popoverActive = _useToggle.value,
      togglePopoverActive = _useToggle.toggle,
      setPopoverActiveFalse = _useToggle.setFalse;

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      selectedFilter = _useState2[0],
      setSelectedFilter = _useState2[1];

  var _useState3 = useState(),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedFilterKey = _useState4[0],
      setSelectedFilterKey = _useState4[1];

  var _useState5 = useState(),
      _useState6 = _slicedToArray(_useState5, 2),
      selectedFilterValue = _useState6[0],
      setSelectedFilterValue = _useState6[1];

  var i18n = useI18n();
  var node = useRef(null);
  var canAddFilter = Boolean(selectedFilter && selectedFilterKey && selectedFilterValue);
  var handleButtonFocus = useCallback(function () {
    var event = arguments.length <= 0 ? undefined : arguments[0];

    if (!node.current && event) {
      node.current = event.target;
    }
  }, []);
  var handleFilterKeyChange = useCallback(function (filterKey) {
    var foundFilter = filters.find(function (filter) {
      var minKey = filter.minKey,
          maxKey = filter.maxKey,
          operatorText = filter.operatorText;

      if (minKey || maxKey) {
        return filter.key === filterKey || minKey === filterKey || maxKey === filterKey;
      }

      if (operatorText && typeof operatorText !== 'string') {
        return filter.key === filterKey || operatorText.filter(function (_ref2) {
          var key = _ref2.key;
          return key === filterKey;
        }).length === 1;
      }

      return filter.key === filterKey;
    });

    if (!foundFilter) {
      return;
    }

    setSelectedFilter(foundFilter);
    setSelectedFilterKey(filterKey);
    setSelectedFilterValue(undefined);
  }, [filters]);
  var handleFilterValueChange = useCallback(function (value) {
    setSelectedFilterValue(value);
  }, []);
  var handleAddFilter = useCallback(function () {
    if (!onAddFilter || !canAddFilter || !selectedFilterKey) {
      return;
    }

    onAddFilter({
      key: selectedFilterKey,
      value: selectedFilterValue || ''
    });
    setPopoverActiveFalse();
    setSelectedFilter(undefined);
    setSelectedFilterValue(undefined);

    if (node.current != null) {
      node.current.focus();
    }
  }, [canAddFilter, onAddFilter, selectedFilterKey, selectedFilterValue, setPopoverActiveFalse]);
  var activator = /*#__PURE__*/React__default.createElement(Button, {
    onClick: togglePopoverActive,
    disclosure: true,
    disabled: disabled,
    onFocus: handleButtonFocus
  }, i18n.translate('Polaris.ResourceList.FilterCreator.filterButtonLabel'));
  var filterOptions = filters.map(function (_ref3) {
    var key = _ref3.key,
        label = _ref3.label;
    return {
      value: key,
      label
    };
  });
  var filterValueSelectionMarkup = selectedFilter ? /*#__PURE__*/React__default.createElement(FilterValueSelector, {
    filter: selectedFilter,
    filterKey: selectedFilterKey,
    value: selectedFilterValue,
    onFilterKeyChange: handleFilterKeyChange,
    onChange: handleFilterValueChange
  }) : null;
  var addFilterButtonMarkup = selectedFilter ? /*#__PURE__*/React__default.createElement(Button, {
    onClick: handleAddFilter,
    disabled: !canAddFilter
  }, i18n.translate('Polaris.ResourceList.FilterCreator.addFilterButtonLabel')) : null;
  return /*#__PURE__*/React__default.createElement(Popover, {
    active: popoverActive,
    activator: activator,
    onClose: togglePopoverActive,
    sectioned: true,
    fullHeight: true
  }, /*#__PURE__*/React__default.createElement(Form, {
    onSubmit: handleAddFilter
  }, /*#__PURE__*/React__default.createElement(FormLayout, null, /*#__PURE__*/React__default.createElement(Select, {
    label: i18n.translate('Polaris.ResourceList.FilterCreator.showAllWhere', {
      resourceNamePlural: resourceName.plural.toLocaleLowerCase()
    }),
    placeholder: i18n.translate('Polaris.ResourceList.FilterCreator.selectFilterKeyPlaceholder'),
    options: filterOptions,
    onChange: handleFilterKeyChange,
    value: selectedFilter && selectedFilter.key
  }), filterValueSelectionMarkup, addFilterButtonMarkup)));
}

var styles$1t = {
  "AppliedFilters": "Polaris-ResourceList-FilterControl__AppliedFilters",
  "AppliedFilter": "Polaris-ResourceList-FilterControl__AppliedFilter"
};

/** @deprecated Use <Filters /> instead. */

function FilterControl(_ref) {
  var searchValue = _ref.searchValue,
      _ref$appliedFilters = _ref.appliedFilters,
      appliedFilters = _ref$appliedFilters === void 0 ? [] : _ref$appliedFilters,
      additionalAction = _ref.additionalAction,
      _ref$focused = _ref.focused,
      focused = _ref$focused === void 0 ? false : _ref$focused,
      _ref$filters = _ref.filters,
      filters = _ref$filters === void 0 ? [] : _ref$filters,
      placeholder = _ref.placeholder,
      onSearchBlur = _ref.onSearchBlur,
      onSearchChange = _ref.onSearchChange,
      onFiltersChange = _ref.onFiltersChange;
  // eslint-disable-next-line no-console
  console.warn('Deprecation: <FilterControl /> is deprecated. Use <Filters /> instead.');
  var i18n = useI18n();

  var _React$useContext = React__default.useContext(ResourceListContext),
      selectMode = _React$useContext.selectMode,
      resourceName = _React$useContext.resourceName;

  var filterResourceName = resourceName || {
    singular: i18n.translate('Polaris.ResourceList.defaultItemSingular'),
    plural: i18n.translate('Polaris.ResourceList.defaultItemPlural')
  };
  var handleAddFilter = React__default.useCallback(function (newFilter) {
    if (!onFiltersChange) {
      return;
    }

    var foundFilter = appliedFilters.find(function (appliedFilter) {
      return idFromFilter(appliedFilter) === idFromFilter(newFilter);
    });

    if (foundFilter) {
      return;
    }

    var newAppliedFilters = [].concat(_toConsumableArray(appliedFilters), [newFilter]);
    onFiltersChange(newAppliedFilters);
  }, [onFiltersChange, appliedFilters]);
  var handleRemoveFilter = React__default.useCallback(function (filterId) {
    if (!onFiltersChange) {
      return;
    }

    var foundIndex = appliedFilters.findIndex(function (appliedFilter) {
      return idFromFilter(appliedFilter) === filterId;
    });
    var newAppliedFilters = foundIndex >= 0 ? [].concat(_toConsumableArray(appliedFilters.slice(0, foundIndex)), _toConsumableArray(appliedFilters.slice(foundIndex + 1, appliedFilters.length))) : _toConsumableArray(appliedFilters);
    onFiltersChange(newAppliedFilters);
  }, [appliedFilters, onFiltersChange]);
  var getRemoveFilterCallback = React__default.useCallback(function (filterId) {
    return function () {
      handleRemoveFilter(filterId);
    };
  }, [handleRemoveFilter]);
  var textFieldLabel = placeholder ? placeholder : i18n.translate('Polaris.ResourceList.FilterControl.textFieldLabel', {
    resourceNamePlural: filterResourceName.plural.toLocaleLowerCase()
  });

  if (additionalAction) {
    additionalAction.disabled = selectMode;
  }

  var additionalActionButton = additionalAction && buttonsFrom(additionalAction) || null;
  var filterCreatorMarkup = filters.length > 0 ? /*#__PURE__*/React__default.createElement(FilterCreator, {
    resourceName: filterResourceName,
    filters: filters,
    onAddFilter: handleAddFilter,
    disabled: selectMode
  }) : null;
  var appliedFiltersMarkup = appliedFilters.map(function (appliedFilter) {
    var activeFilterLabel = getFilterLabel(appliedFilter);
    var filterId = idFromFilter(appliedFilter);
    return /*#__PURE__*/React__default.createElement("li", {
      className: styles$1t.AppliedFilter,
      key: filterId
    }, /*#__PURE__*/React__default.createElement(Tag, {
      onRemove: getRemoveFilterCallback(filterId),
      disabled: selectMode
    }, activeFilterLabel));
  });
  var appliedFiltersWrapper = appliedFilters.length > 0 ? /*#__PURE__*/React__default.createElement("ul", {
    className: styles$1t.AppliedFilters
  }, appliedFiltersMarkup) : null;
  return /*#__PURE__*/React__default.createElement(FormLayout, null, /*#__PURE__*/React__default.createElement(TextField, {
    connectedLeft: filterCreatorMarkup,
    connectedRight: additionalActionButton,
    label: textFieldLabel,
    labelHidden: true,
    placeholder: textFieldLabel,
    prefix: /*#__PURE__*/React__default.createElement(Icon, {
      source: SearchMinor,
      color: "skyDark"
    }),
    value: searchValue,
    onChange: onSearchChange,
    onBlur: onSearchBlur,
    focused: focused,
    disabled: selectMode
  }), appliedFiltersWrapper);

  function getFilterLabel(appliedFilter) {
    var key = appliedFilter.key,
        value = appliedFilter.value,
        label = appliedFilter.label;

    if (label) {
      return label;
    }

    var filter = filters.find(function (filter) {
      var minKey = filter.minKey,
          maxKey = filter.maxKey,
          operatorText = filter.operatorText;

      if (minKey || maxKey) {
        return filter.key === key || minKey === key || maxKey === key;
      }

      if (operatorText && typeof operatorText !== 'string') {
        return filter.key === key || operatorText.filter(function (_ref2) {
          var operatorKey = _ref2.key;
          return operatorKey === key;
        }).length === 1;
      }

      return filter.key === key;
    });

    if (!filter) {
      return value;
    }

    var filterOperatorLabel = findOperatorLabel(filter, appliedFilter);
    var filterLabelByType = findFilterLabelByType(filter, appliedFilter);

    if (!filterOperatorLabel) {
      return "".concat(filter.label, " ").concat(filterLabelByType);
    }

    return "".concat(filter.label, " ").concat(filterOperatorLabel, " ").concat(filterLabelByType);
  }

  function findFilterLabelByType(filter, appliedFilter) {
    var appliedFilterValue = appliedFilter.value;

    if (filter.type === FilterType.Select) {
      var foundFilterOption = filter.options.find(function (option) {
        return typeof option === 'string' ? option === appliedFilterValue : option.value === appliedFilterValue;
      });

      if (foundFilterOption) {
        return typeof foundFilterOption === 'string' ? foundFilterOption : foundFilterOption.label;
      }
    }

    if (filter.type === FilterType.DateSelector) {
      if (filter.key === appliedFilter.key) {
        var filterLabelKey = "Polaris.ResourceList.DateSelector.FilterLabelForValue.".concat(appliedFilter.value);
        return i18n.translationKeyExists(filterLabelKey) ? i18n.translate(filterLabelKey) : appliedFilter.value;
      }

      if (appliedFilter.key === filter.maxKey) {
        return i18n.translate('Polaris.ResourceList.DateSelector.FilterLabelForValue.on_or_before', {
          date: formatDateForLabelDisplay(appliedFilter.value)
        });
      }

      if (appliedFilter.key === filter.minKey) {
        return i18n.translate('Polaris.ResourceList.DateSelector.FilterLabelForValue.on_or_after', {
          date: formatDateForLabelDisplay(appliedFilter.value)
        });
      }
    }

    return appliedFilterValue;
  }
}

function idFromFilter(appliedFilter) {
  return "".concat(appliedFilter.key, "-").concat(appliedFilter.value);
}

function formatDateForLabelDisplay(date) {
  if (isNaN(new Date(date).getTime())) {
    return date;
  }

  return new Date(date.replace(/-/g, '/')).toLocaleDateString();
}

function findOperatorLabel(filter, appliedFilter) {
  var operatorText = filter.operatorText;

  if (filter.type === FilterType.DateSelector && (appliedFilter.key === filter.minKey || appliedFilter.key === filter.maxKey)) {
    return '';
  }

  if (!operatorText || typeof operatorText === 'string') {
    return operatorText;
  }

  var appliedOperator = operatorText.find(function (operator) {
    return operator.key === appliedFilter.key;
  });

  if (appliedOperator) {
    return appliedOperator.filterLabel || appliedOperator.optionLabel;
  }
}

var styles$1u = {
  "FiltersWrapper": "Polaris-ResourceList__FiltersWrapper",
  "ResourceList": "Polaris-ResourceList",
  "HeaderOuterWrapper": "Polaris-ResourceList__HeaderOuterWrapper",
  "HeaderWrapper-disabled": "Polaris-ResourceList__HeaderWrapper--disabled",
  "HeaderWrapper-overlay": "Polaris-ResourceList__HeaderWrapper--overlay",
  "HeaderWrapper": "Polaris-ResourceList__HeaderWrapper",
  "HeaderWrapper-isSticky": "Polaris-ResourceList__HeaderWrapper--isSticky",
  "HeaderContentWrapper": "Polaris-ResourceList__HeaderContentWrapper",
  "HeaderWrapper-inSelectMode": "Polaris-ResourceList__HeaderWrapper--inSelectMode",
  "SortWrapper": "Polaris-ResourceList__SortWrapper",
  "AlternateToolWrapper": "Polaris-ResourceList__AlternateToolWrapper",
  "HeaderWrapper-hasSelect": "Polaris-ResourceList__HeaderWrapper--hasSelect",
  "HeaderWrapper-hasAlternateTool": "Polaris-ResourceList__HeaderWrapper--hasAlternateTool",
  "HeaderWrapper-hasSort": "Polaris-ResourceList__HeaderWrapper--hasSort",
  "HeaderTitleWrapper": "Polaris-ResourceList__HeaderTitleWrapper",
  "BulkActionsWrapper": "Polaris-ResourceList__BulkActionsWrapper",
  "CheckableButtonWrapper": "Polaris-ResourceList__CheckableButtonWrapper",
  "SelectButtonWrapper": "Polaris-ResourceList__SelectButtonWrapper",
  "EmptySearchResultWrapper": "Polaris-ResourceList__EmptySearchResultWrapper",
  "ResourceListWrapper": "Polaris-ResourceList__ResourceListWrapper",
  "ItemWrapper": "Polaris-ResourceList__ItemWrapper",
  "ItemWrapper-isLoading": "Polaris-ResourceList__ItemWrapper--isLoading",
  "SpinnerContainer": "Polaris-ResourceList__SpinnerContainer",
  "LoadingOverlay": "Polaris-ResourceList__LoadingOverlay",
  "DisabledPointerEvents": "Polaris-ResourceList__DisabledPointerEvents",
  "disableTextSelection": "Polaris-ResourceList--disableTextSelection"
};

var SMALL_SCREEN_WIDTH = 458;
var SMALL_SPINNER_HEIGHT = 28;
var LARGE_SPINNER_HEIGHT = 45;

var ResourceListInner = /*#__PURE__*/function (_React$Component) {
  _inherits(ResourceListInner, _React$Component);

  var _super = _createSuper(ResourceListInner);

  function ResourceListInner(props) {
    var _this;

    _classCallCheck(this, ResourceListInner);

    _this = _super.call(this, props);
    _this.listRef = /*#__PURE__*/React__default.createRef();
    _this.handleResize = debounce(function () {
      var selectedItems = _this.props.selectedItems;
      var _this$state = _this.state,
          selectMode = _this$state.selectMode,
          smallScreen = _this$state.smallScreen;
      var newSmallScreen = isSmallScreen();

      if (selectedItems && selectedItems.length === 0 && selectMode && !newSmallScreen) {
        _this.handleSelectMode(false);
      }

      if (smallScreen !== newSmallScreen) {
        _this.setState({
          smallScreen: newSmallScreen
        });
      }
    }, 50, {
      leading: true,
      trailing: true,
      maxWait: 50
    });

    _this.setLoadingPosition = function () {
      if (_this.listRef.current != null) {
        if (typeof window === 'undefined') {
          return;
        }

        var overlay = _this.listRef.current.getBoundingClientRect();

        var viewportHeight = Math.max(document.documentElement ? document.documentElement.clientHeight : 0, window.innerHeight || 0);
        var overflow = viewportHeight - overlay.height;
        var spinnerHeight = _this.props.items.length === 1 ? SMALL_SPINNER_HEIGHT : LARGE_SPINNER_HEIGHT;
        var spinnerPosition = overflow > 0 ? (overlay.height - spinnerHeight) / 2 : (viewportHeight - overlay.top - spinnerHeight) / 2;

        _this.setState({
          loadingPosition: spinnerPosition
        });
      }
    };

    _this.handleSelectAllItemsInStore = function () {
      var _this$props = _this.props,
          onSelectionChange = _this$props.onSelectionChange,
          selectedItems = _this$props.selectedItems,
          items = _this$props.items,
          _this$props$idForItem = _this$props.idForItem,
          idForItem = _this$props$idForItem === void 0 ? defaultIdForItem : _this$props$idForItem;
      var newlySelectedItems = selectedItems === SELECT_ALL_ITEMS ? getAllItemsOnPage(items, idForItem) : SELECT_ALL_ITEMS;

      if (onSelectionChange) {
        onSelectionChange(newlySelectedItems);
      }
    };

    _this.renderItem = function (item, index) {
      var _this$props2 = _this.props,
          renderItem = _this$props2.renderItem,
          _this$props2$idForIte = _this$props2.idForItem,
          idForItem = _this$props2$idForIte === void 0 ? defaultIdForItem : _this$props2$idForIte;
      var id = idForItem(item, index);
      return /*#__PURE__*/React__default.createElement("li", {
        key: id,
        className: styles$1u.ItemWrapper
      }, renderItem(item, id, index));
    };

    _this.handleMultiSelectionChange = function (lastSelected, currentSelected, resolveItemId) {
      var min = Math.min(lastSelected, currentSelected);
      var max = Math.max(lastSelected, currentSelected);
      return _this.props.items.slice(min, max + 1).map(resolveItemId);
    };

    _this.handleCheckableButtonRegistration = function (key, button) {
      _this.setState(function (_ref) {
        var checkableButtons = _ref.checkableButtons;
        return {
          checkableButtons: new Map(checkableButtons).set(key, button)
        };
      });
    };

    _this.handleSelectionChange = function (selected, id, sortOrder, shiftKey) {
      var _this$props3 = _this.props,
          onSelectionChange = _this$props3.onSelectionChange,
          selectedItems = _this$props3.selectedItems,
          items = _this$props3.items,
          _this$props3$idForIte = _this$props3.idForItem,
          idForItem = _this$props3$idForIte === void 0 ? defaultIdForItem : _this$props3$idForIte,
          resolveItemId = _this$props3.resolveItemId;
      var lastSelected = _this.state.lastSelected;

      if (selectedItems == null || onSelectionChange == null) {
        return;
      }

      var newlySelectedItems = selectedItems === SELECT_ALL_ITEMS ? getAllItemsOnPage(items, idForItem) : _toConsumableArray(selectedItems);

      if (sortOrder !== undefined) {
        _this.setState({
          lastSelected: sortOrder
        });
      }

      var selectedIds = [id];

      if (shiftKey && lastSelected != null && sortOrder !== undefined && resolveItemId) {
        selectedIds = _this.handleMultiSelectionChange(lastSelected, sortOrder, resolveItemId);
      }

      newlySelectedItems = _toConsumableArray(new Set([].concat(_toConsumableArray(newlySelectedItems), _toConsumableArray(selectedIds))));

      if (!selected) {
        var _iterator = _createForOfIteratorHelper(selectedIds),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var selectedId = _step.value;
            newlySelectedItems.splice(newlySelectedItems.indexOf(selectedId), 1);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      if (newlySelectedItems.length === 0 && !isSmallScreen()) {
        _this.handleSelectMode(false);
      } else if (newlySelectedItems.length > 0) {
        _this.handleSelectMode(true);
      }

      if (onSelectionChange) {
        onSelectionChange(newlySelectedItems);
      }
    };

    _this.handleSelectMode = function (selectMode) {
      var onSelectionChange = _this.props.onSelectionChange;

      _this.setState({
        selectMode
      });

      if (!selectMode && onSelectionChange) {
        onSelectionChange([]);
      }
    };

    _this.handleToggleAll = function () {
      var _this$props4 = _this.props,
          onSelectionChange = _this$props4.onSelectionChange,
          selectedItems = _this$props4.selectedItems,
          items = _this$props4.items,
          _this$props4$idForIte = _this$props4.idForItem,
          idForItem = _this$props4$idForIte === void 0 ? defaultIdForItem : _this$props4$idForIte;
      var checkableButtons = _this.state.checkableButtons;
      var newlySelectedItems = [];

      if (Array.isArray(selectedItems) && selectedItems.length === items.length || selectedItems === SELECT_ALL_ITEMS) {
        newlySelectedItems = [];
      } else {
        newlySelectedItems = items.map(function (item, index) {
          var id = idForItem(item, index);
          return id;
        });
      }

      if (newlySelectedItems.length === 0 && !isSmallScreen()) {
        _this.handleSelectMode(false);
      } else if (newlySelectedItems.length > 0) {
        _this.handleSelectMode(true);
      }

      var checkbox;

      if (isSmallScreen()) {
        checkbox = checkableButtons.get('bulkSm');
      } else if (newlySelectedItems.length === 0) {
        checkbox = checkableButtons.get('plain');
      } else {
        checkbox = checkableButtons.get('bulkLg');
      }

      if (onSelectionChange) {
        onSelectionChange(newlySelectedItems);
      } // setTimeout ensures execution after the Transition on BulkActions


      setTimeout(function () {
        checkbox && checkbox.focus();
      }, 0);
    };

    var selectedItems = props.selectedItems,
        intl = props.polaris.intl;
    _this.defaultResourceName = {
      singular: intl.translate('Polaris.ResourceList.defaultItemSingular'),
      plural: intl.translate('Polaris.ResourceList.defaultItemPlural')
    }; // eslint-disable-next-line react/state-in-constructor

    _this.state = {
      selectMode: Boolean(selectedItems && selectedItems.length > 0),
      loadingPosition: 0,
      lastSelected: null,
      smallScreen: isSmallScreen(),
      checkableButtons: new Map()
    };
    return _this;
  }

  _createClass(ResourceListInner, [{
    key: "selectable",
    value: function selectable() {
      var _this$props5 = this.props,
          promotedBulkActions = _this$props5.promotedBulkActions,
          bulkActions = _this$props5.bulkActions,
          selectable = _this$props5.selectable;
      return Boolean(promotedBulkActions && promotedBulkActions.length > 0 || bulkActions && bulkActions.length > 0 || selectable);
    }
  }, {
    key: "bulkSelectState",
    value: function bulkSelectState() {
      var _this$props6 = this.props,
          selectedItems = _this$props6.selectedItems,
          items = _this$props6.items;
      var selectState = 'indeterminate';

      if (!selectedItems || Array.isArray(selectedItems) && selectedItems.length === 0) {
        selectState = false;
      } else if (selectedItems === SELECT_ALL_ITEMS || Array.isArray(selectedItems) && selectedItems.length === items.length) {
        selectState = true;
      }

      return selectState;
    }
  }, {
    key: "headerTitle",
    value: function headerTitle() {
      var _this$props7 = this.props,
          _this$props7$resource = _this$props7.resourceName,
          resourceName = _this$props7$resource === void 0 ? this.defaultResourceName : _this$props7$resource,
          items = _this$props7.items,
          intl = _this$props7.polaris.intl,
          loading = _this$props7.loading,
          totalItemsCount = _this$props7.totalItemsCount;
      var itemsCount = items.length;
      var resource = !loading && (!totalItemsCount && itemsCount === 1 || totalItemsCount === 1) ? resourceName.singular : resourceName.plural;

      if (loading) {
        return intl.translate('Polaris.ResourceList.loading', {
          resource
        });
      } else if (totalItemsCount) {
        return intl.translate('Polaris.ResourceList.showingTotalCount', {
          itemsCount,
          totalItemsCount,
          resource
        });
      } else {
        return intl.translate('Polaris.ResourceList.showing', {
          itemsCount,
          resource
        });
      }
    }
  }, {
    key: "bulkActionsLabel",
    value: function bulkActionsLabel() {
      var _this$props8 = this.props,
          _this$props8$selected = _this$props8.selectedItems,
          selectedItems = _this$props8$selected === void 0 ? [] : _this$props8$selected,
          items = _this$props8.items,
          intl = _this$props8.polaris.intl;
      var selectedItemsCount = selectedItems === SELECT_ALL_ITEMS ? "".concat(items.length, "+") : selectedItems.length;
      return intl.translate('Polaris.ResourceList.selected', {
        selectedItemsCount
      });
    }
  }, {
    key: "bulkActionsAccessibilityLabel",
    value: function bulkActionsAccessibilityLabel() {
      var _this$props9 = this.props,
          _this$props9$resource = _this$props9.resourceName,
          resourceName = _this$props9$resource === void 0 ? this.defaultResourceName : _this$props9$resource,
          _this$props9$selected = _this$props9.selectedItems,
          selectedItems = _this$props9$selected === void 0 ? [] : _this$props9$selected,
          items = _this$props9.items,
          intl = _this$props9.polaris.intl;
      var selectedItemsCount = selectedItems.length;
      var totalItemsCount = items.length;
      var allSelected = selectedItemsCount === totalItemsCount;

      if (totalItemsCount === 1 && allSelected) {
        return intl.translate('Polaris.ResourceList.a11yCheckboxDeselectAllSingle', {
          resourceNameSingular: resourceName.singular
        });
      } else if (totalItemsCount === 1) {
        return intl.translate('Polaris.ResourceList.a11yCheckboxSelectAllSingle', {
          resourceNameSingular: resourceName.singular
        });
      } else if (allSelected) {
        return intl.translate('Polaris.ResourceList.a11yCheckboxDeselectAllMultiple', {
          itemsLength: items.length,
          resourceNamePlural: resourceName.plural
        });
      } else {
        return intl.translate('Polaris.ResourceList.a11yCheckboxSelectAllMultiple', {
          itemsLength: items.length,
          resourceNamePlural: resourceName.plural
        });
      }
    }
  }, {
    key: "paginatedSelectAllText",
    value: function paginatedSelectAllText() {
      var _this$props10 = this.props,
          hasMoreItems = _this$props10.hasMoreItems,
          selectedItems = _this$props10.selectedItems,
          items = _this$props10.items,
          _this$props10$resourc = _this$props10.resourceName,
          resourceName = _this$props10$resourc === void 0 ? this.defaultResourceName : _this$props10$resourc,
          intl = _this$props10.polaris.intl;

      if (!this.selectable() || !hasMoreItems) {
        return;
      }

      if (selectedItems === SELECT_ALL_ITEMS) {
        return intl.translate('Polaris.ResourceList.allItemsSelected', {
          itemsLength: items.length,
          resourceNamePlural: resourceName.plural
        });
      }
    }
  }, {
    key: "paginatedSelectAllAction",
    value: function paginatedSelectAllAction() {
      var _this$props11 = this.props,
          hasMoreItems = _this$props11.hasMoreItems,
          selectedItems = _this$props11.selectedItems,
          items = _this$props11.items,
          _this$props11$resourc = _this$props11.resourceName,
          resourceName = _this$props11$resourc === void 0 ? this.defaultResourceName : _this$props11$resourc,
          intl = _this$props11.polaris.intl;

      if (!this.selectable() || !hasMoreItems) {
        return;
      }

      var actionText = selectedItems === SELECT_ALL_ITEMS ? intl.translate('Polaris.Common.undo') : intl.translate('Polaris.ResourceList.selectAllItems', {
        itemsLength: items.length,
        resourceNamePlural: resourceName.plural
      });
      return {
        content: actionText,
        onAction: this.handleSelectAllItemsInStore
      };
    }
  }, {
    key: "emptySearchResultText",
    value: function emptySearchResultText() {
      var _this$props12 = this.props,
          intl = _this$props12.polaris.intl,
          _this$props12$resourc = _this$props12.resourceName,
          resourceName = _this$props12$resourc === void 0 ? this.defaultResourceName : _this$props12$resourc;
      return {
        title: intl.translate('Polaris.ResourceList.emptySearchResultTitle', {
          resourceNamePlural: resourceName.plural
        }),
        description: intl.translate('Polaris.ResourceList.emptySearchResultDescription')
      };
    } // eslint-disable-next-line @typescript-eslint/member-ordering

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.forceUpdate();

      if (this.props.loading) {
        this.setLoadingPosition();
      }
    } // eslint-disable-next-line @typescript-eslint/member-ordering

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_ref2) {
      var prevLoading = _ref2.loading,
          prevItems = _ref2.items,
          prevSelectedItems = _ref2.selectedItems;
      var _this$props13 = this.props,
          selectedItems = _this$props13.selectedItems,
          loading = _this$props13.loading;

      if (this.listRef.current && this.itemsExist() && !this.itemsExist(prevItems)) {
        this.forceUpdate();
      }

      if (loading && !prevLoading) {
        this.setLoadingPosition();
      }

      if (selectedItems && selectedItems.length > 0 && !this.state.selectMode) {
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({
          selectMode: true
        });
        return;
      }

      if (prevSelectedItems && prevSelectedItems.length > 0 && (!selectedItems || selectedItems.length === 0) && !isSmallScreen()) {
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({
          selectMode: false
        });
      }
    } // eslint-disable-next-line @typescript-eslint/member-ordering

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props14 = this.props,
          items = _this$props14.items,
          promotedBulkActions = _this$props14.promotedBulkActions,
          bulkActions = _this$props14.bulkActions,
          filterControl = _this$props14.filterControl,
          emptyState = _this$props14.emptyState,
          emptySearchState = _this$props14.emptySearchState,
          loading = _this$props14.loading,
          _this$props14$showHea = _this$props14.showHeader,
          showHeader = _this$props14$showHea === void 0 ? false : _this$props14$showHea,
          sortOptions = _this$props14.sortOptions,
          sortValue = _this$props14.sortValue,
          alternateTool = _this$props14.alternateTool,
          selectedItems = _this$props14.selectedItems,
          _this$props14$resourc = _this$props14.resourceName,
          resourceName = _this$props14$resourc === void 0 ? this.defaultResourceName : _this$props14$resourc,
          onSortChange = _this$props14.onSortChange,
          intl = _this$props14.polaris.intl;
      var _this$state2 = this.state,
          selectMode = _this$state2.selectMode,
          loadingPosition = _this$state2.loadingPosition,
          smallScreen = _this$state2.smallScreen;
      var filterControlMarkup = filterControl ? /*#__PURE__*/React__default.createElement("div", {
        className: styles$1u.FiltersWrapper
      }, filterControl) : null;
      var bulkActionsMarkup = this.selectable() ? /*#__PURE__*/React__default.createElement("div", {
        className: styles$1u.BulkActionsWrapper
      }, /*#__PURE__*/React__default.createElement(BulkActions, {
        label: this.bulkActionsLabel(),
        accessibilityLabel: this.bulkActionsAccessibilityLabel(),
        selected: this.bulkSelectState(),
        onToggleAll: this.handleToggleAll,
        selectMode: selectMode,
        onSelectModeToggle: this.handleSelectMode,
        promotedActions: promotedBulkActions,
        paginatedSelectAllAction: this.paginatedSelectAllAction(),
        paginatedSelectAllText: this.paginatedSelectAllText(),
        actions: bulkActions,
        disabled: loading,
        smallScreen: smallScreen
      })) : null;
      var sortingSelectMarkup = sortOptions && sortOptions.length > 0 && !alternateTool ? /*#__PURE__*/React__default.createElement("div", {
        className: styles$1u.SortWrapper
      }, /*#__PURE__*/React__default.createElement(Select, {
        label: intl.translate('Polaris.ResourceList.sortingLabel'),
        labelInline: !smallScreen,
        labelHidden: smallScreen,
        options: sortOptions,
        onChange: onSortChange,
        value: sortValue,
        disabled: selectMode
      })) : null;
      var alternateToolMarkup = alternateTool && !sortingSelectMarkup ? /*#__PURE__*/React__default.createElement("div", {
        className: styles$1u.AlternateToolWrapper
      }, alternateTool) : null;
      var headerTitleMarkup = /*#__PURE__*/React__default.createElement("div", {
        className: styles$1u.HeaderTitleWrapper
      }, this.headerTitle());
      var selectButtonMarkup = this.selectable() ? /*#__PURE__*/React__default.createElement("div", {
        className: styles$1u.SelectButtonWrapper
      }, /*#__PURE__*/React__default.createElement(Button, {
        disabled: selectMode,
        icon: EnableSelectionMinor,
        onClick: this.handleSelectMode.bind(this, true)
      }, intl.translate('Polaris.ResourceList.selectButtonText'))) : null;
      var checkableButtonMarkup = this.selectable() ? /*#__PURE__*/React__default.createElement("div", {
        className: styles$1u.CheckableButtonWrapper
      }, /*#__PURE__*/React__default.createElement(CheckableButton, {
        accessibilityLabel: this.bulkActionsAccessibilityLabel(),
        label: this.headerTitle(),
        onToggleAll: this.handleToggleAll,
        plain: true,
        disabled: loading
      })) : null;
      var needsHeader = this.selectable() || sortOptions && sortOptions.length > 0 || alternateTool;
      var headerWrapperOverlay = loading ? /*#__PURE__*/React__default.createElement("div", {
        className: styles$1u['HeaderWrapper-overlay']
      }) : null;
      var showEmptyState = emptyState && !this.itemsExist() && !loading;
      var showEmptySearchState = !showEmptyState && filterControl && !this.itemsExist() && !loading;
      var headerMarkup = !showEmptySearchState && !showEmptyState && (showHeader || needsHeader) && this.listRef.current ? /*#__PURE__*/React__default.createElement("div", {
        className: styles$1u.HeaderOuterWrapper
      }, /*#__PURE__*/React__default.createElement(Sticky, {
        boundingElement: this.listRef.current
      }, function (isSticky) {
        var headerClassName = classNames(styles$1u.HeaderWrapper, sortOptions && sortOptions.length > 0 && !alternateTool && styles$1u['HeaderWrapper-hasSort'], alternateTool && styles$1u['HeaderWrapper-hasAlternateTool'], _this2.selectable() && styles$1u['HeaderWrapper-hasSelect'], loading && styles$1u['HeaderWrapper-disabled'], _this2.selectable() && selectMode && styles$1u['HeaderWrapper-inSelectMode'], isSticky && styles$1u['HeaderWrapper-isSticky']);
        return /*#__PURE__*/React__default.createElement("div", {
          className: headerClassName
        }, /*#__PURE__*/React__default.createElement(EventListener, {
          event: "resize",
          handler: _this2.handleResize
        }), headerWrapperOverlay, /*#__PURE__*/React__default.createElement("div", {
          className: styles$1u.HeaderContentWrapper
        }, headerTitleMarkup, checkableButtonMarkup, alternateToolMarkup, sortingSelectMarkup, selectButtonMarkup), bulkActionsMarkup);
      })) : null;
      var emptySearchStateMarkup = showEmptySearchState ? emptySearchState || /*#__PURE__*/React__default.createElement("div", {
        className: styles$1u.EmptySearchResultWrapper
      }, /*#__PURE__*/React__default.createElement(EmptySearchResult, Object.assign({}, this.emptySearchResultText(), {
        withIllustration: true
      }))) : null;
      var emptyStateMarkup = showEmptyState ? emptyState : null;
      var defaultTopPadding = 8;
      var topPadding = loadingPosition > 0 ? loadingPosition : defaultTopPadding;
      var spinnerStyle = {
        paddingTop: "".concat(topPadding, "px")
      };
      var spinnerSize = items.length < 2 ? 'small' : 'large';
      var loadingOverlay = loading ? /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
        className: styles$1u.SpinnerContainer,
        style: spinnerStyle
      }, /*#__PURE__*/React__default.createElement(Spinner, {
        size: spinnerSize,
        accessibilityLabel: "Items are loading"
      })), /*#__PURE__*/React__default.createElement("div", {
        className: styles$1u.LoadingOverlay
      })) : null;
      var className = classNames(styles$1u.ItemWrapper, loading && styles$1u['ItemWrapper-isLoading']);
      var loadingWithoutItemsMarkup = loading && !this.itemsExist() ? /*#__PURE__*/React__default.createElement("div", {
        className: className,
        tabIndex: -1
      }, loadingOverlay) : null;
      var resourceListClassName = classNames(styles$1u.ResourceList, loading && styles$1u.disabledPointerEvents, selectMode && styles$1u.disableTextSelection);
      var listMarkup = this.itemsExist() && !emptySearchStateMarkup && !emptyStateMarkup ? /*#__PURE__*/React__default.createElement("ul", {
        className: resourceListClassName,
        ref: this.listRef,
        "aria-live": "polite",
        "aria-busy": loading
      }, loadingOverlay, items.map(this.renderItem)) : null;
      var context = {
        selectable: this.selectable(),
        selectedItems,
        selectMode,
        resourceName,
        loading,
        onSelectionChange: this.handleSelectionChange,
        registerCheckableButtons: this.handleCheckableButtonRegistration
      };
      return /*#__PURE__*/React__default.createElement(ResourceListContext.Provider, {
        value: context
      }, /*#__PURE__*/React__default.createElement("div", {
        className: styles$1u.ResourceListWrapper
      }, filterControlMarkup, headerMarkup, listMarkup, emptySearchStateMarkup, emptyStateMarkup, loadingWithoutItemsMarkup));
    }
  }, {
    key: "itemsExist",
    value: function itemsExist(items) {
      return (items || this.props.items).length > 0;
    }
  }]);

  return ResourceListInner;
}(React__default.Component);

ResourceListInner.Item = ResourceItem; // eslint-disable-next-line import/no-deprecated

ResourceListInner.FilterControl = FilterControl;

function getAllItemsOnPage(items, idForItem) {
  return items.map(function (item, index) {
    return idForItem(item, index);
  });
}

function defaultIdForItem(item, index) {
  return Object.prototype.hasOwnProperty.call(item, 'id') ? item.id : index.toString();
}

function isSmallScreen() {
  return typeof window === 'undefined' ? false : window.innerWidth < SMALL_SCREEN_WIDTH;
}

var ResourceList = withAppProvider()(ResourceListInner);

/** @deprecated Use `ResourcePicker` from `@shopify/app-bridge-react` instead. */

var ResourcePickerInner = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(ResourcePickerInner, _React$PureComponent);

  var _super = _createSuper(ResourcePickerInner);

  function ResourcePickerInner() {
    var _this;

    _classCallCheck(this, ResourcePickerInner);

    _this = _super.apply(this, arguments);
    _this.focusReturnPoint = null;
    return _this;
  }

  _createClass(ResourcePickerInner, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // eslint-disable-next-line no-console
      console.warn('Deprecation: `ResourcePicker` is deprecated and will be removed in v5.0. Use `ResourcePicker` from `@shopify/app-bridge-react` instead: https://help.shopify.com/en/api/embedded-apps/app-bridge/react-components/resourcepicker');

      if (this.props.polaris.appBridge == null) {
        return;
      }

      var _this$props = this.props,
          open = _this$props.open,
          resourceType = _this$props.resourceType,
          initialQuery = _this$props.initialQuery,
          _this$props$showHidde = _this$props.showHidden,
          showHidden = _this$props$showHidde === void 0 ? true : _this$props$showHidde,
          _this$props$allowMult = _this$props.allowMultiple,
          allowMultiple = _this$props$allowMult === void 0 ? true : _this$props$allowMult,
          _this$props$showVaria = _this$props.showVariants,
          showVariants = _this$props$showVaria === void 0 ? true : _this$props$showVaria,
          onSelection = _this$props.onSelection,
          onCancel = _this$props.onCancel;
      var appBridge = this.props.polaris.appBridge;
      this.appBridgeResourcePicker = ResourcePicker$1.create(appBridge, {
        resourceType: ResourcePicker$1.ResourceType[resourceType],
        options: {
          initialQuery,
          showHidden,
          selectMultiple: allowMultiple,
          showVariants
        }
      });

      if (onSelection != null) {
        this.appBridgeResourcePicker.subscribe(ResourcePicker$1.Action.SELECT, function (_ref) {
          var selection = _ref.selection;
          onSelection({
            selection
          });
        });
      }

      if (onCancel != null) {
        this.appBridgeResourcePicker.subscribe(ResourcePicker$1.Action.CANCEL, onCancel);
      }

      if (open) {
        this.focusReturnPoint = document.activeElement;
        this.appBridgeResourcePicker.dispatch(ResourcePicker$1.Action.OPEN);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.appBridgeResourcePicker == null) {
        return;
      }

      var _this$props2 = this.props,
          open = _this$props2.open,
          initialQuery = _this$props2.initialQuery,
          _this$props2$showHidd = _this$props2.showHidden,
          showHidden = _this$props2$showHidd === void 0 ? false : _this$props2$showHidd,
          _this$props2$allowMul = _this$props2.allowMultiple,
          allowMultiple = _this$props2$allowMul === void 0 ? true : _this$props2$allowMul,
          _this$props2$showVari = _this$props2.showVariants,
          showVariants = _this$props2$showVari === void 0 ? true : _this$props2$showVari,
          onSelection = _this$props2.onSelection,
          onCancel = _this$props2.onCancel;
      var wasOpen = prevProps.open;

      var prevAppBridge = prevProps.polaris.appBridge,
          prevResourcePickerProps = __rest(prevProps, ["polaris"]);

      var _a = this.props,
          appBridge = _a.polaris.appBridge,
          resourcePickerProps = __rest(_a, ["polaris"]);

      if (!isEqual(prevResourcePickerProps, resourcePickerProps) || !isEqual(prevAppBridge, appBridge)) {
        this.appBridgeResourcePicker.set({
          initialQuery,
          showHidden,
          selectMultiple: allowMultiple,
          showVariants
        });
      }

      this.appBridgeResourcePicker.unsubscribe();

      if (onSelection != null) {
        this.appBridgeResourcePicker.subscribe(ResourcePicker$1.Action.SELECT, function (_ref2) {
          var selection = _ref2.selection;
          onSelection({
            selection
          });
        });
      }

      if (onCancel != null) {
        this.appBridgeResourcePicker.subscribe(ResourcePicker$1.Action.CANCEL, onCancel);
      }

      if (wasOpen !== open) {
        if (open) {
          this.appBridgeResourcePicker.dispatch(ResourcePicker$1.Action.OPEN);
        } else {
          this.appBridgeResourcePicker.dispatch(ResourcePicker$1.Action.CLOSE);
        }
      }

      if (!wasOpen && open) {
        this.focusReturnPoint = document.activeElement;
      } else if (wasOpen && !open && this.focusReturnPoint instanceof HTMLElement && document.contains(this.focusReturnPoint)) {
        this.focusReturnPoint.focus();
        this.focusReturnPoint = null;
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.appBridgeResourcePicker == null) {
        return;
      }

      this.appBridgeResourcePicker.unsubscribe();
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return ResourcePickerInner;
}(React__default.PureComponent);

var ResourcePicker = withAppProvider()(ResourcePickerInner);

function SettingToggle(_ref) {
  var enabled = _ref.enabled,
      action = _ref.action,
      children = _ref.children;
  var actionMarkup = action ? buttonFrom(action, {
    primary: !enabled
  }) : null;
  return /*#__PURE__*/React__default.createElement(Card, {
    sectioned: true
  }, /*#__PURE__*/React__default.createElement(SettingAction, {
    action: actionMarkup
  }, children));
}

var styles$1v = {
  "SkeletonBodyTextContainer": "Polaris-SkeletonBodyText__SkeletonBodyTextContainer",
  "SkeletonBodyText": "Polaris-SkeletonBodyText"
};

function SkeletonBodyText(_ref) {
  var _ref$lines = _ref.lines,
      lines = _ref$lines === void 0 ? 3 : _ref$lines;
  var bodyTextLines = [];

  for (var i = 0; i < lines; i++) {
    bodyTextLines.push( /*#__PURE__*/React__default.createElement("div", {
      className: styles$1v.SkeletonBodyText,
      key: i
    }));
  }

  return /*#__PURE__*/React__default.createElement("div", {
    className: styles$1v.SkeletonBodyTextContainer
  }, bodyTextLines);
}

var styles$1w = {
  "DisplayText": "Polaris-SkeletonDisplayText__DisplayText",
  "sizeSmall": "Polaris-SkeletonDisplayText--sizeSmall",
  "sizeMedium": "Polaris-SkeletonDisplayText--sizeMedium",
  "sizeLarge": "Polaris-SkeletonDisplayText--sizeLarge",
  "sizeExtraLarge": "Polaris-SkeletonDisplayText--sizeExtraLarge"
};

function SkeletonDisplayText(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'medium' : _ref$size;
  var className = classNames(styles$1w.DisplayText, size && styles$1w[variationName('size', size)]);
  return /*#__PURE__*/React__default.createElement("div", {
    className: className
  });
}

var styles$1x = {
  "Page": "Polaris-SkeletonPage__Page",
  "fullWidth": "Polaris-SkeletonPage--fullWidth",
  "narrowWidth": "Polaris-SkeletonPage--narrowWidth",
  "Content": "Polaris-SkeletonPage__Content",
  "Header": "Polaris-SkeletonPage__Header",
  "newDesignLanguage": "Polaris-SkeletonPage--newDesignLanguage",
  "Header-hasSecondaryActions": "Polaris-SkeletonPage__Header--hasSecondaryActions",
  "BreadcrumbAction": "Polaris-SkeletonPage__BreadcrumbAction",
  "TitleAndPrimaryAction": "Polaris-SkeletonPage__TitleAndPrimaryAction",
  "Title": "Polaris-SkeletonPage__Title",
  "PrimaryAction": "Polaris-SkeletonPage__PrimaryAction",
  "Actions": "Polaris-SkeletonPage__Actions",
  "Action": "Polaris-SkeletonPage__Action"
};

function SkeletonPage(_ref) {
  var children = _ref.children,
      fullWidth = _ref.fullWidth,
      narrowWidth = _ref.narrowWidth,
      singleColumn = _ref.singleColumn,
      primaryAction = _ref.primaryAction,
      secondaryActions = _ref.secondaryActions,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? '' : _ref$title,
      breadcrumbs = _ref.breadcrumbs;

  if (singleColumn) {
    // eslint-disable-next-line no-console
    console.warn('Deprecation: The singleColumn prop has been renamed to narrowWidth to better represents its use and will be removed in v5.0.');
  }

  var i18n = useI18n();
  var appBridge = useAppBridge();
  var className = classNames(styles$1x.Page, fullWidth && styles$1x.fullWidth, (narrowWidth || singleColumn) && styles$1x.narrowWidth);
  var headerClassName = classNames(styles$1x.Header, breadcrumbs && styles$1x['Header-hasBreadcrumbs'], secondaryActions && styles$1x['Header-hasSecondaryActions']);
  var titleMarkup = title !== null ? renderTitle(title) : null;
  var primaryActionMarkup = primaryAction ? /*#__PURE__*/React__default.createElement("div", {
    className: styles$1x.PrimaryAction
  }, /*#__PURE__*/React__default.createElement(SkeletonDisplayText, {
    size: "large"
  })) : null;
  var secondaryActionsMarkup = secondaryActions ? renderSecondaryActions(secondaryActions) : null;
  var breadcrumbMarkup = breadcrumbs ? /*#__PURE__*/React__default.createElement("div", {
    className: styles$1x.BreadcrumbAction,
    style: {
      width: 60
    }
  }, /*#__PURE__*/React__default.createElement(SkeletonBodyText, {
    lines: 1
  })) : null;
  var headerMarkup = !appBridge ? /*#__PURE__*/React__default.createElement("div", {
    className: headerClassName
  }, breadcrumbMarkup, /*#__PURE__*/React__default.createElement("div", {
    className: styles$1x.TitleAndPrimaryAction
  }, titleMarkup, primaryActionMarkup), secondaryActionsMarkup) : null;
  return /*#__PURE__*/React__default.createElement("div", {
    className: className,
    role: "status",
    "aria-label": i18n.translate('Polaris.SkeletonPage.loadingLabel')
  }, headerMarkup, /*#__PURE__*/React__default.createElement("div", {
    className: styles$1x.Content
  }, children));
}

function renderSecondaryActions(actionCount) {
  var actions = [];

  for (var i = 0; i < actionCount; i++) {
    var width = Math.round(Math.random() * 40 + 60);
    actions.push( /*#__PURE__*/React__default.createElement("div", {
      className: styles$1x.Action,
      style: {
        width
      },
      key: i
    }, /*#__PURE__*/React__default.createElement(SkeletonBodyText, {
      lines: 1
    })));
  }

  return /*#__PURE__*/React__default.createElement("div", {
    className: styles$1x.Actions
  }, actions);
}

function renderTitle(title) {
  var titleContent = title === '' ? /*#__PURE__*/React__default.createElement(SkeletonDisplayText, {
    size: "large"
  }) : /*#__PURE__*/React__default.createElement(DisplayText, {
    size: "large",
    element: "h1"
  }, title);
  return /*#__PURE__*/React__default.createElement("div", {
    className: styles$1x.Title
  }, titleContent);
}

var styles$1y = {
  "SkeletonThumbnail": "Polaris-SkeletonThumbnail",
  "sizeSmall": "Polaris-SkeletonThumbnail--sizeSmall",
  "sizeMedium": "Polaris-SkeletonThumbnail--sizeMedium",
  "sizeLarge": "Polaris-SkeletonThumbnail--sizeLarge"
};

function SkeletonThumbnail(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'medium' : _ref$size;
  var className = classNames(styles$1y.SkeletonThumbnail, size && styles$1y[variationName('size', size)]);
  return /*#__PURE__*/React__default.createElement("div", {
    className: className
  });
}

function getVisibleAndHiddenTabIndices(tabs, selected, disclosureWidth, tabWidths, containerWidth) {
  var sumTabWidths = tabWidths.reduce(function (sum, width) {
    return sum + width;
  }, 0);
  var arrayOfTabIndices = tabs.map(function (_, index) {
    return index;
  });
  var visibleTabs = [];
  var hiddenTabs = [];

  if (containerWidth > sumTabWidths) {
    visibleTabs.push.apply(visibleTabs, _toConsumableArray(arrayOfTabIndices));
  } else {
    visibleTabs.push(selected);
    var tabListWidth = tabWidths[selected];
    arrayOfTabIndices.forEach(function (currentTabIndex) {
      if (currentTabIndex !== selected) {
        var currentTabWidth = tabWidths[currentTabIndex];

        if (tabListWidth + currentTabWidth > containerWidth - disclosureWidth) {
          hiddenTabs.push(currentTabIndex);
          return;
        }

        visibleTabs.push(currentTabIndex);
        tabListWidth += currentTabWidth;
      }
    });
  }

  return {
    visibleTabs,
    hiddenTabs
  };
}

var styles$1z = {
  "Tabs": "Polaris-Tabs",
  "Wrapper": "Polaris-Tabs__Wrapper",
  "newDesignLanguage": "Polaris-Tabs--newDesignLanguage",
  "fitted": "Polaris-Tabs--fitted",
  "TabContainer": "Polaris-Tabs__TabContainer",
  "Tab": "Polaris-Tabs__Tab",
  "Title": "Polaris-Tabs__Title",
  "fillSpace": "Polaris-Tabs--fillSpace",
  "Tab-selected": "Polaris-Tabs__Tab--selected",
  "Panel": "Polaris-Tabs__Panel",
  "Panel-hidden": "Polaris-Tabs__Panel--hidden",
  "List": "Polaris-Tabs__List",
  "Item": "Polaris-Tabs__Item",
  "DisclosureTab": "Polaris-Tabs__DisclosureTab",
  "DisclosureTab-visible": "Polaris-Tabs__DisclosureTab--visible",
  "DisclosureActivator": "Polaris-Tabs__DisclosureActivator",
  "TabMeasurer": "Polaris-Tabs__TabMeasurer"
};

var Item$8 = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Item, _React$PureComponent);

  var _super = _createSuper(Item);

  function Item() {
    var _this;

    _classCallCheck(this, Item);

    _this = _super.apply(this, arguments);
    _this.focusedNode = null;

    _this.setFocusedNode = function (node) {
      _this.focusedNode = node;
    };

    return _this;
  }

  _createClass(Item, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var focusedNode = this.focusedNode;
      var focused = this.props.focused;

      if (focusedNode && focusedNode instanceof HTMLElement && focused) {
        focusedNode.focus();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var focusedNode = this.focusedNode;
      var focused = this.props.focused;

      if (focusedNode && focusedNode instanceof HTMLElement && focused) {
        focusedNode.focus();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          panelID = _this$props.panelID,
          children = _this$props.children,
          url = _this$props.url,
          accessibilityLabel = _this$props.accessibilityLabel,
          _this$props$onClick = _this$props.onClick,
          onClick = _this$props$onClick === void 0 ? noop$c : _this$props$onClick;

      var _ref = this.context || {},
          newDesignLanguage = _ref.newDesignLanguage;

      var classname = classNames(styles$1z.Item, newDesignLanguage && styles$1z.newDesignLanguage);
      var sharedProps = {
        id,
        ref: this.setFocusedNode,
        onClick,
        className: classname,
        'aria-controls': panelID,
        'aria-selected': false,
        'aria-label': accessibilityLabel
      };
      var markup = url ? /*#__PURE__*/React__default.createElement(UnstyledLink, Object.assign({}, sharedProps, {
        url: url
      }), children) : /*#__PURE__*/React__default.createElement("button", Object.assign({}, sharedProps, {
        type: "button"
      }), children);
      return /*#__PURE__*/React__default.createElement("li", null, markup);
    }
  }]);

  return Item;
}(React__default.PureComponent);
Item$8.contextType = FeaturesContext;

function noop$c() {}

var List$1 = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(List, _React$PureComponent);

  var _super = _createSuper(List);

  function List() {
    var _this;

    _classCallCheck(this, List);

    _this = _super.apply(this, arguments);

    _this.handleKeypress = function (event) {
      var _this$props$onKeyPres = _this.props.onKeyPress,
          onKeyPress = _this$props$onKeyPres === void 0 ? noop$d : _this$props$onKeyPres;
      onKeyPress(event);
    };

    return _this;
  }

  _createClass(List, [{
    key: "render",
    value: function render() {
      var _ref = this.context || {},
          newDesignLanguage = _ref.newDesignLanguage;

      var _this$props = this.props,
          focusIndex = _this$props.focusIndex,
          disclosureTabs = _this$props.disclosureTabs,
          _this$props$onClick = _this$props.onClick,
          onClick = _this$props$onClick === void 0 ? noop$d : _this$props$onClick;
      var tabs = disclosureTabs.map(function (_a, index) {
        var id = _a.id,
            content = _a.content,
            tabProps = __rest(_a, ["id", "content"]);

        return /*#__PURE__*/React__default.createElement(Item$8, Object.assign({}, tabProps, {
          key: id,
          id: id,
          focused: index === focusIndex,
          onClick: onClick.bind(null, id)
        }), content);
      });
      var classname = classNames(styles$1z.List, newDesignLanguage && styles$1z.newDesignLanguage);
      return /*#__PURE__*/React__default.createElement("ul", {
        className: classname,
        onKeyDown: handleKeyDown$1,
        onKeyUp: this.handleKeypress
      }, tabs);
    }
  }]);

  return List;
}(React__default.PureComponent);
List$1.contextType = FeaturesContext;

function noop$d() {}

function handleKeyDown$1(event) {
  var key = event.key;

  if (key === 'ArrowUp' || key === 'ArrowDown' || key === 'ArrowLeft' || key === 'ArrowRight') {
    event.preventDefault();
    event.stopPropagation();
  }
}

function Panel(_ref) {
  var hidden = _ref.hidden,
      id = _ref.id,
      tabID = _ref.tabID,
      children = _ref.children;
  var className = classNames(styles$1z.Panel, hidden && styles$1z['Panel-hidden']);
  return /*#__PURE__*/React__default.createElement("div", {
    className: className,
    id: id,
    role: "tabpanel",
    "aria-labelledby": tabID,
    tabIndex: -1
  }, children);
}

function Tab(_ref) {
  var id = _ref.id,
      focused = _ref.focused,
      siblingTabHasFocus = _ref.siblingTabHasFocus,
      children = _ref.children,
      onClick = _ref.onClick,
      selected = _ref.selected,
      url = _ref.url,
      panelID = _ref.panelID,
      measuring = _ref.measuring,
      accessibilityLabel = _ref.accessibilityLabel;
  var wasSelected = useRef(selected);
  var panelFocused = useRef(false);
  var node = useRef(null);

  var _useFeatures = useFeatures(),
      newDesignLanguage = _useFeatures.newDesignLanguage; // A tab can start selected when it is moved from the disclosure dropdown
  // into the main list, so we need to send focus from the tab to the panel
  // on mount and update


  useEffect(function () {
    if (measuring) {
      return;
    } // Because of timing issues with the render, we may still have the old,
    // in-disclosure version of the tab that has focus. Check for this
    // as a second indicator of focus


    var itemHadFocus = focused || document.activeElement && document.activeElement.id === id; // If we just check for selected, the panel for the active tab will
    // be focused on page load, which we don’t want

    if (itemHadFocus && selected && panelID != null && !panelFocused.current) {
      focusPanelID(panelID);
      panelFocused.current = true;
    }

    if (selected && !wasSelected.current && panelID != null) {
      focusPanelID(panelID);
    } else if (focused && node.current != null) {
      focusFirstFocusableNode(node.current);
    }

    wasSelected.current = selected;
  }, [focused, id, measuring, panelID, selected]);
  var handleClick = onClick && onClick.bind(null, id);
  var className = classNames(styles$1z.Tab, selected && styles$1z['Tab-selected']);
  var tabIndex;

  if (selected && !siblingTabHasFocus && !measuring) {
    tabIndex = 0;
  } else if (focused && !measuring) {
    tabIndex = 0;
  } else {
    tabIndex = -1;
  }

  var tabContainerClassNames = classNames(styles$1z.TabContainer, selected && styles$1z.Underline, newDesignLanguage && styles$1z.newDesignLanguage);
  var tabTitleClassNames = classNames(styles$1z.Title, newDesignLanguage && styles$1z.newDesignLanguage);
  var markup = url ? /*#__PURE__*/React__default.createElement(UnstyledLink, {
    id: id,
    url: url,
    role: "tab",
    tabIndex: tabIndex,
    onClick: handleClick,
    className: className,
    "aria-selected": selected,
    "aria-controls": panelID,
    "aria-label": accessibilityLabel,
    onMouseUp: handleMouseUpByBlurring
  }, /*#__PURE__*/React__default.createElement("span", {
    className: tabTitleClassNames
  }, children)) : /*#__PURE__*/React__default.createElement("button", {
    id: id,
    role: "tab",
    type: "button",
    tabIndex: tabIndex,
    className: className,
    onClick: handleClick,
    "aria-selected": selected,
    "aria-controls": panelID,
    "aria-label": accessibilityLabel,
    onMouseUp: handleMouseUpByBlurring
  }, /*#__PURE__*/React__default.createElement("span", {
    className: tabTitleClassNames
  }, children));
  return /*#__PURE__*/React__default.createElement("li", {
    className: tabContainerClassNames,
    ref: node
  }, markup);
}

function focusPanelID(panelID) {
  var panel = document.getElementById(panelID);

  if (panel) {
    panel.focus({
      preventScroll: true
    });
  }
}

var TabMeasurer = /*#__PURE__*/memo(function TabMeasurer(_ref) {
  var selected = _ref.selected,
      tabs = _ref.tabs,
      activator = _ref.activator,
      tabToFocus = _ref.tabToFocus,
      siblingTabHasFocus = _ref.siblingTabHasFocus,
      handleMeasurementProp = _ref.handleMeasurement;
  var containerNode = useRef(null);
  var animationFrame = useRef(null);
  var handleMeasurement = useCallback(function () {
    if (animationFrame.current) {
      cancelAnimationFrame(animationFrame.current);
    }

    animationFrame.current = requestAnimationFrame(function () {
      if (!containerNode.current) {
        return;
      }

      var containerWidth = containerNode.current.offsetWidth;
      var hiddenTabNodes = containerNode.current.children;
      var hiddenTabNodesArray = Array.from(hiddenTabNodes);
      var hiddenTabWidths = hiddenTabNodesArray.map(function (node) {
        return node.getBoundingClientRect().width;
      });
      var disclosureWidth = hiddenTabWidths.pop() || 0;
      handleMeasurementProp({
        containerWidth,
        disclosureWidth,
        hiddenTabWidths
      });
    });
  }, [handleMeasurementProp]);
  useEffect(function () {
    handleMeasurement();
  }, [handleMeasurement, tabs]);
  useComponentDidMount(function () {
    if (process.env.NODE_ENV === 'development') {
      setTimeout(handleMeasurement, 0);
    }
  });
  var tabsMarkup = tabs.map(function (tab, index) {
    return /*#__PURE__*/React__default.createElement(Tab, {
      measuring: true,
      key: "".concat(index).concat(tab.id, "Hidden"),
      id: "".concat(tab.id, "Measurer"),
      siblingTabHasFocus: siblingTabHasFocus,
      focused: index === tabToFocus,
      selected: index === selected,
      onClick: noop$e,
      url: tab.url
    }, tab.content);
  });
  var classname = classNames(styles$1z.Tabs, styles$1z.TabMeasurer);
  return /*#__PURE__*/React__default.createElement("div", {
    className: classname,
    ref: containerNode
  }, /*#__PURE__*/React__default.createElement(EventListener, {
    event: "resize",
    handler: handleMeasurement
  }), tabsMarkup, activator);
});

function noop$e() {}

var TabsInner = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(TabsInner, _React$PureComponent);

  var _super = _createSuper(TabsInner);

  function TabsInner() {
    var _this;

    _classCallCheck(this, TabsInner);

    _this = _super.apply(this, arguments);
    _this.state = {
      disclosureWidth: 0,
      containerWidth: Infinity,
      tabWidths: [],
      visibleTabs: [],
      hiddenTabs: [],
      showDisclosure: false,
      tabToFocus: -1
    };

    _this.handleKeyPress = function (event) {
      var _this$state = _this.state,
          tabToFocus = _this$state.tabToFocus,
          visibleTabs = _this$state.visibleTabs,
          hiddenTabs = _this$state.hiddenTabs,
          showDisclosure = _this$state.showDisclosure;
      var key = event.key;
      var tabsArrayInOrder = showDisclosure ? visibleTabs.concat(hiddenTabs) : _toConsumableArray(visibleTabs);
      var newFocus = tabsArrayInOrder.indexOf(tabToFocus);

      if (key === 'ArrowRight' || key === 'ArrowDown') {
        newFocus += 1;

        if (newFocus === tabsArrayInOrder.length) {
          newFocus = 0;
        }
      }

      if (key === 'ArrowLeft' || key === 'ArrowUp') {
        if (newFocus === -1 || newFocus === 0) {
          newFocus = tabsArrayInOrder.length - 1;
        } else {
          newFocus -= 1;
        }
      }

      _this.setState({
        tabToFocus: tabsArrayInOrder[newFocus]
      });
    };

    _this.renderTabMarkup = function (tab, index) {
      var selected = _this.props.selected;
      var tabToFocus = _this.state.tabToFocus;
      return /*#__PURE__*/React__default.createElement(Tab, {
        key: "".concat(index, "-").concat(tab.id),
        id: tab.id,
        siblingTabHasFocus: tabToFocus > -1,
        focused: index === tabToFocus,
        selected: index === selected,
        onClick: _this.handleTabClick,
        panelID: tab.panelID || "".concat(tab.id, "-panel"),
        accessibilityLabel: tab.accessibilityLabel,
        url: tab.url
      }, tab.content);
    };

    _this.handleFocus = function (event) {
      var _this$props = _this.props,
          selected = _this$props.selected,
          tabs = _this$props.tabs; // If we are explicitly focusing a non-selected tab, this focuses it

      var target = event.target;

      if (target.classList.contains(styles$1z.Tab) || target.classList.contains(styles$1z.Item)) {
        var tabToFocus = -1;
        tabs.every(function (tab, index) {
          if (tab.id === target.id) {
            tabToFocus = index;
            return false;
          }

          return true;
        });

        _this.setState({
          tabToFocus
        });

        return;
      }

      if (target.classList.contains(styles$1z.DisclosureActivator)) {
        return;
      } // If we are coming in from somewhere other than another tab, focus the
      // selected tab, and the focus (click) is not on the disclosure activator,
      // focus the selected tab


      if (!event.relatedTarget) {
        _this.setState({
          tabToFocus: selected
        });

        return;
      }

      var relatedTarget = event.relatedTarget;

      if (relatedTarget instanceof HTMLElement && !relatedTarget.classList.contains(styles$1z.Tab) && !relatedTarget.classList.contains(styles$1z.Item) && !relatedTarget.classList.contains(styles$1z.DisclosureActivator)) {
        _this.setState({
          tabToFocus: selected
        });
      }
    };

    _this.handleBlur = function (event) {
      // If we blur and the target is not another tab, forget the focus position
      if (event.relatedTarget == null) {
        _this.setState({
          tabToFocus: -1
        });

        return;
      }

      var target = event.relatedTarget; // If we are going to anywhere other than another tab, lose the last focused tab

      if (target instanceof HTMLElement && !target.classList.contains(styles$1z.Tab) && !target.classList.contains(styles$1z.Item)) {
        _this.setState({
          tabToFocus: -1
        });
      }
    };

    _this.handleDisclosureActivatorClick = function () {
      _this.setState(function (_ref) {
        var showDisclosure = _ref.showDisclosure;
        return {
          showDisclosure: !showDisclosure
        };
      });
    };

    _this.handleClose = function () {
      _this.setState({
        showDisclosure: false
      });
    };

    _this.handleMeasurement = function (measurements) {
      var _this$props2 = _this.props,
          tabs = _this$props2.tabs,
          selected = _this$props2.selected;
      var tabToFocus = _this.state.tabToFocus;
      var tabWidths = measurements.hiddenTabWidths,
          containerWidth = measurements.containerWidth,
          disclosureWidth = measurements.disclosureWidth;

      var _getVisibleAndHiddenT = getVisibleAndHiddenTabIndices(tabs, selected, disclosureWidth, tabWidths, containerWidth),
          visibleTabs = _getVisibleAndHiddenT.visibleTabs,
          hiddenTabs = _getVisibleAndHiddenT.hiddenTabs;

      _this.setState({
        tabToFocus: tabToFocus === -1 ? -1 : selected,
        visibleTabs,
        hiddenTabs,
        disclosureWidth,
        containerWidth,
        tabWidths
      });
    };

    _this.handleTabClick = function (id) {
      var _this$props3 = _this.props,
          tabs = _this$props3.tabs,
          _this$props3$onSelect = _this$props3.onSelect,
          onSelect = _this$props3$onSelect === void 0 ? noop$f : _this$props3$onSelect;
      var tab = tabs.find(function (aTab) {
        return aTab.id === id;
      });

      if (tab == null) {
        return;
      }

      var selectedIndex = tabs.indexOf(tab);
      onSelect(selectedIndex);
    };

    return _this;
  }

  _createClass(TabsInner, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props4 = this.props,
          tabs = _this$props4.tabs,
          selected = _this$props4.selected,
          fitted = _this$props4.fitted,
          children = _this$props4.children,
          intl = _this$props4.polaris.intl;
      var _this$state2 = this.state,
          tabToFocus = _this$state2.tabToFocus,
          visibleTabs = _this$state2.visibleTabs,
          hiddenTabs = _this$state2.hiddenTabs,
          showDisclosure = _this$state2.showDisclosure;
      var disclosureTabs = hiddenTabs.map(function (tabIndex) {
        return tabs[tabIndex];
      });

      var _ref2 = this.context || {},
          newDesignLanguage = _ref2.newDesignLanguage;

      var panelMarkup = children ? tabs.map(function (_tab, index) {
        return selected === index ? /*#__PURE__*/React__default.createElement(Panel, {
          id: tabs[index].panelID || "".concat(tabs[index].id, "-panel"),
          tabID: tabs[index].id,
          key: tabs[index].id
        }, children) : /*#__PURE__*/React__default.createElement(Panel, {
          id: tabs[index].panelID || "".concat(tabs[index].id, "-panel"),
          tabID: tabs[index].id,
          key: tabs[index].id,
          hidden: true
        });
      }) : null;
      var tabsMarkup = visibleTabs.sort(function (tabA, tabB) {
        return tabA - tabB;
      }).map(function (tabIndex) {
        return _this2.renderTabMarkup(tabs[tabIndex], tabIndex);
      });
      var disclosureActivatorVisible = visibleTabs.length < tabs.length;
      var classname = classNames(styles$1z.Tabs, fitted && styles$1z.fitted, disclosureActivatorVisible && styles$1z.fillSpace, newDesignLanguage && styles$1z.newDesignLanguage);
      var wrapperClassName = classNames(styles$1z.Wrapper, newDesignLanguage && styles$1z.newDesignLanguage);
      var disclosureTabClassName = classNames(styles$1z.DisclosureTab, disclosureActivatorVisible && styles$1z['DisclosureTab-visible']);
      var activator = /*#__PURE__*/React__default.createElement("button", {
        type: "button",
        className: styles$1z.DisclosureActivator,
        onClick: this.handleDisclosureActivatorClick,
        "aria-label": intl.translate('Polaris.Tabs.toggleTabsLabel')
      }, /*#__PURE__*/React__default.createElement("span", {
        className: styles$1z.Title
      }, /*#__PURE__*/React__default.createElement(Icon, {
        source: HorizontalDotsMinor
      })));
      return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("div", {
        className: wrapperClassName
      }, /*#__PURE__*/React__default.createElement("ul", {
        role: "tablist",
        className: classname,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        onKeyDown: handleKeyDown$2,
        onKeyUp: this.handleKeyPress
      }, tabsMarkup, /*#__PURE__*/React__default.createElement("li", {
        className: disclosureTabClassName
      }, /*#__PURE__*/React__default.createElement(Popover, {
        preferredPosition: "below",
        activator: activator,
        active: disclosureActivatorVisible && showDisclosure,
        onClose: this.handleClose
      }, /*#__PURE__*/React__default.createElement(List$1, {
        focusIndex: hiddenTabs.indexOf(tabToFocus),
        disclosureTabs: disclosureTabs,
        onClick: this.handleTabClick,
        onKeyPress: this.handleKeyPress
      })))), /*#__PURE__*/React__default.createElement(TabMeasurer, {
        tabToFocus: tabToFocus,
        activator: activator,
        selected: selected,
        tabs: tabs,
        siblingTabHasFocus: tabToFocus > -1,
        handleMeasurement: this.handleMeasurement
      })), panelMarkup);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var disclosureWidth = prevState.disclosureWidth,
          tabWidths = prevState.tabWidths,
          containerWidth = prevState.containerWidth;

      var _getVisibleAndHiddenT2 = getVisibleAndHiddenTabIndices(nextProps.tabs, nextProps.selected, disclosureWidth, tabWidths, containerWidth),
          visibleTabs = _getVisibleAndHiddenT2.visibleTabs,
          hiddenTabs = _getVisibleAndHiddenT2.hiddenTabs;

      return {
        visibleTabs,
        hiddenTabs,
        selected: nextProps.selected
      };
    }
  }]);

  return TabsInner;
}(React__default.PureComponent);

TabsInner.contextType = FeaturesContext;

function noop$f() {}

function handleKeyDown$2(event) {
  var key = event.key;

  if (key === 'ArrowUp' || key === 'ArrowDown' || key === 'ArrowLeft' || key === 'ArrowRight') {
    event.preventDefault();
    event.stopPropagation();
  }
}

var Tabs = withAppProvider()(TabsInner);

var styles$1A = {
  "Thumbnail": "Polaris-Thumbnail",
  "sizeSmall": "Polaris-Thumbnail--sizeSmall",
  "sizeMedium": "Polaris-Thumbnail--sizeMedium",
  "sizeLarge": "Polaris-Thumbnail--sizeLarge",
  "Image": "Polaris-Thumbnail__Image"
};

function Thumbnail(_ref) {
  var source = _ref.source,
      alt = _ref.alt,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'medium' : _ref$size;
  var className = classNames(styles$1A.Thumbnail, size && styles$1A[variationName('size', size)]);
  return /*#__PURE__*/React__default.createElement("span", {
    className: className
  }, /*#__PURE__*/React__default.createElement(Image, {
    alt: alt,
    source: source,
    className: styles$1A.Image
  }));
}

var Toast$1 = /*#__PURE__*/React__default.memo(function Toast(props) {
  var id = useUniqueId('Toast');
  var appBridgeToast = useRef();

  var _useFrame = useFrame(),
      showToast = _useFrame.showToast,
      hideToast = _useFrame.hideToast;

  var appBridge = useAppBridge();
  useDeepEffect(function () {
    var error = props.error,
        content = props.content,
        _props$duration = props.duration,
        duration = _props$duration === void 0 ? DEFAULT_TOAST_DURATION : _props$duration,
        onDismiss = props.onDismiss;

    if (appBridge == null) {
      showToast(Object.assign({
        id
      }, props));
    } else {
      // eslint-disable-next-line no-console
      console.warn('Deprecation: Using `Toast` in an embedded app is deprecated and will be removed in v5.0. Use `Toast` from `@shopify/app-bridge-react` instead: https://help.shopify.com/en/api/embedded-apps/app-bridge/react-components/toast');
      appBridgeToast.current = Toast$2.create(appBridge, {
        message: content,
        duration,
        isError: error
      });
      appBridgeToast.current.subscribe(Toast$2.Action.CLEAR, onDismiss);
      appBridgeToast.current.dispatch(Toast$2.Action.SHOW);
    }

    return function () {
      if (appBridge == null) {
        hideToast({
          id
        });
      } else if (appBridgeToast.current != null) {
        appBridgeToast.current.unsubscribe();
      }
    };
  }, [appBridge, props]);
  return null;
});

var styles$1B = {
  "SearchDismissOverlay": "Polaris-TopBar-SearchDismissOverlay",
  "visible": "Polaris-TopBar-SearchDismissOverlay--visible",
  "fade-in": "Polaris-TopBar-SearchDismissOverlay__fade--in"
};

function SearchDismissOverlay(_ref) {
  var onDismiss = _ref.onDismiss,
      visible = _ref.visible;
  var node = useRef(null);
  var handleDismiss = useCallback(function (_ref2) {
    var target = _ref2.target;

    if (target === node.current && onDismiss != null) {
      onDismiss();
    }
  }, [onDismiss]);
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, visible ? /*#__PURE__*/React__default.createElement(ScrollLock, null) : null, /*#__PURE__*/React__default.createElement("div", {
    ref: node,
    className: classNames(styles$1B.SearchDismissOverlay, visible && styles$1B.visible),
    onClick: handleDismiss
  }));
}

var styles$1C = {
  "Search": "Polaris-TopBar-Search",
  "visible": "Polaris-TopBar-Search--visible",
  "Results": "Polaris-TopBar-Search__Results"
};

function Search(_ref) {
  var visible = _ref.visible,
      children = _ref.children,
      onDismiss = _ref.onDismiss,
      _ref$overlayVisible = _ref.overlayVisible,
      overlayVisible = _ref$overlayVisible === void 0 ? false : _ref$overlayVisible;

  if (children == null) {
    return null;
  }

  var overlayMarkup = visible ? /*#__PURE__*/React__default.createElement(SearchDismissOverlay, {
    onDismiss: onDismiss,
    visible: overlayVisible
  }) : null;
  return /*#__PURE__*/React__default.createElement("div", {
    className: classNames(styles$1C.Search, visible && styles$1C.visible)
  }, overlayMarkup, /*#__PURE__*/React__default.createElement("div", {
    className: styles$1C.Results
  }, children));
}

var styles$1D = {
  "SearchField": "Polaris-TopBar-SearchField",
  "SearchField-newDesignLanguage": "Polaris-TopBar-SearchField__SearchField--newDesignLanguage",
  "Backdrop": "Polaris-TopBar-SearchField__Backdrop",
  "Input": "Polaris-TopBar-SearchField__Input",
  "focused": "Polaris-TopBar-SearchField--focused",
  "BackdropShowFocusBorder": "Polaris-TopBar-SearchField__BackdropShowFocusBorder",
  "Icon": "Polaris-TopBar-SearchField__Icon",
  "Clear": "Polaris-TopBar-SearchField__Clear",
  "toLightBackground": "Polaris-TopBar-SearchField--toLightBackground"
};

function SearchField(_ref) {
  var value = _ref.value,
      focused = _ref.focused,
      active = _ref.active,
      placeholder = _ref.placeholder,
      onChange = _ref.onChange,
      onFocus = _ref.onFocus,
      onBlur = _ref.onBlur,
      onCancel = _ref.onCancel,
      showFocusBorder = _ref.showFocusBorder;
  var i18n = useI18n();

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      forceActive = _useState2[0],
      setForceActive = _useState2[1];

  var _useFeatures = useFeatures(),
      newDesignLanguage = _useFeatures.newDesignLanguage;

  var input = useRef(null);
  var searchId = useUniqueId('SearchField');
  var handleChange = useCallback(function (_ref2) {
    var currentTarget = _ref2.currentTarget;
    onChange(currentTarget.value);
  }, [onChange]);
  var handleFocus = useCallback(function () {
    return onFocus && onFocus();
  }, [onFocus]);
  var handleBlur = useCallback(function () {
    return onBlur && onBlur();
  }, [onBlur]);
  var handleClear = useCallback(function () {
    onCancel && onCancel();

    if (!input.current) {
      return;
    }

    input.current.value = '';
    onChange('');
    input.current.focus();
  }, [onCancel, onChange]);
  useEffect(function () {
    if (!input.current) {
      return;
    }

    if (focused) {
      input.current.focus();
    } else {
      input.current.blur();
    }
  }, [focused]);
  var clearMarkup = value !== '' && /*#__PURE__*/React__default.createElement("button", {
    type: "button",
    "aria-label": i18n.translate('Polaris.TopBar.SearchField.clearButtonLabel'),
    className: styles$1D.Clear,
    onClick: handleClear,
    onBlur: function onBlur() {
      setForceActive(false);
      handleClear();
    },
    onFocus: function onFocus() {
      handleFocus();
      setForceActive(true);
    }
  }, /*#__PURE__*/React__default.createElement(Icon, {
    source: CircleCancelMinor
  }));
  var className = classNames(styles$1D.SearchField, (focused || active || forceActive) && styles$1D.focused, newDesignLanguage && styles$1D['SearchField-newDesignLanguage']);
  return /*#__PURE__*/React__default.createElement("div", {
    className: className,
    onFocus: handleFocus,
    onBlur: handleBlur
  }, /*#__PURE__*/React__default.createElement(VisuallyHidden, null, /*#__PURE__*/React__default.createElement("label", {
    htmlFor: searchId
  }, i18n.translate('Polaris.TopBar.SearchField.search'))), /*#__PURE__*/React__default.createElement("input", {
    id: searchId,
    className: styles$1D.Input,
    placeholder: placeholder,
    type: "search",
    autoCapitalize: "off",
    autoComplete: "off",
    autoCorrect: "off",
    ref: input,
    value: value,
    onChange: handleChange,
    onKeyDown: preventDefault
  }), /*#__PURE__*/React__default.createElement("span", {
    className: styles$1D.Icon
  }, /*#__PURE__*/React__default.createElement(Icon, {
    source: SearchMinor
  })), clearMarkup, /*#__PURE__*/React__default.createElement("div", {
    className: classNames(styles$1D.Backdrop, showFocusBorder && styles$1D.BackdropShowFocusBorder)
  }));
}

function preventDefault(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
  }
}

var styles$1E = {
  "MessageIndicatorWrapper": "Polaris-MessageIndicator__MessageIndicatorWrapper",
  "MessageIndicator": "Polaris-MessageIndicator"
};

function MessageIndicator(_ref) {
  var children = _ref.children,
      active = _ref.active;
  var indicatorMarkup = active && /*#__PURE__*/React__default.createElement("div", {
    className: styles$1E.MessageIndicator
  });
  return /*#__PURE__*/React__default.createElement("div", {
    className: styles$1E.MessageIndicatorWrapper
  }, indicatorMarkup, children);
}

var styles$1F = {
  "Section": "Polaris-Menu-Message__Section"
};

function Message(_ref) {
  var title = _ref.title,
      description = _ref.description,
      action = _ref.action,
      link = _ref.link,
      badge = _ref.badge;
  var badgeMarkup = badge && /*#__PURE__*/React__default.createElement(Badge, {
    status: badge.status
  }, badge.content);
  var to = link.to,
      linkContent = link.content;
  var onClick = action.onClick,
      actionContent = action.content;
  return /*#__PURE__*/React__default.createElement("div", {
    className: styles$1F.Section
  }, /*#__PURE__*/React__default.createElement(Popover.Section, null, /*#__PURE__*/React__default.createElement(Stack, {
    vertical: true,
    spacing: "tight"
  }, /*#__PURE__*/React__default.createElement(TextContainer, null, /*#__PURE__*/React__default.createElement(Heading, null, title, badgeMarkup), /*#__PURE__*/React__default.createElement("p", null, description)), /*#__PURE__*/React__default.createElement(Link, {
    url: to
  }, linkContent), /*#__PURE__*/React__default.createElement(Button, {
    plain: true,
    onClick: onClick
  }, actionContent))));
}

var styles$1G = {
  "ActivatorWrapper": "Polaris-TopBar-Menu__ActivatorWrapper",
  "Activator": "Polaris-TopBar-Menu__Activator",
  "Section": "Polaris-TopBar-Menu__Section"
};

function Menu(props) {
  var actions = props.actions,
      onOpen = props.onOpen,
      onClose = props.onClose,
      open = props.open,
      activatorContent = props.activatorContent,
      message = props.message;
  var badgeProps = message && message.badge && {
    content: message.badge.content,
    status: message.badge.status
  };
  var messageMarkup = message && /*#__PURE__*/React__default.createElement(Message, {
    title: message.title,
    description: message.description,
    action: {
      onClick: message.action.onClick,
      content: message.action.content
    },
    link: {
      to: message.link.to,
      content: message.link.content
    },
    badge: badgeProps
  });
  var isFullHeight = Boolean(message);
  return /*#__PURE__*/React__default.createElement(Popover, {
    activator: /*#__PURE__*/React__default.createElement("div", {
      className: styles$1G.ActivatorWrapper
    }, /*#__PURE__*/React__default.createElement("button", {
      type: "button",
      className: styles$1G.Activator,
      onClick: onOpen
    }, activatorContent)),
    active: open,
    onClose: onClose,
    fixed: true,
    fullHeight: isFullHeight,
    preferredAlignment: "right"
  }, /*#__PURE__*/React__default.createElement(ActionList, {
    onActionAnyItem: onClose,
    sections: actions
  }), messageMarkup);
}

var styles$1H = {
  "Details": "Polaris-TopBar-UserMenu__Details",
  "Name": "Polaris-TopBar-UserMenu__Name",
  "Detail": "Polaris-TopBar-UserMenu__Detail"
};

function UserMenu(_ref) {
  var name = _ref.name,
      detail = _ref.detail,
      avatar = _ref.avatar,
      initials = _ref.initials,
      actions = _ref.actions,
      message = _ref.message,
      onToggle = _ref.onToggle,
      open = _ref.open;
  var showIndicator = Boolean(message);
  var activatorContentMarkup = /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(MessageIndicator, {
    active: showIndicator
  }, /*#__PURE__*/React__default.createElement(Avatar, {
    size: "small",
    source: avatar,
    initials: initials && initials.replace(' ', '')
  })), /*#__PURE__*/React__default.createElement("span", {
    className: styles$1H.Details
  }, /*#__PURE__*/React__default.createElement("p", {
    className: styles$1H.Name
  }, name), /*#__PURE__*/React__default.createElement("p", {
    className: styles$1H.Detail
  }, detail)));
  return /*#__PURE__*/React__default.createElement(Menu, {
    activatorContent: activatorContentMarkup,
    open: open,
    onOpen: onToggle,
    onClose: onToggle,
    actions: actions,
    message: message
  });
}

var styles$1I = {
  "TopBar": "Polaris-TopBar",
  "TopBar-newDesignLanguage": "Polaris-TopBar__TopBar--newDesignLanguage",
  "isScrolled": "Polaris-TopBar--isScrolled",
  "LogoContainer": "Polaris-TopBar__LogoContainer",
  "Logo": "Polaris-TopBar__Logo",
  "LogoLink": "Polaris-TopBar__LogoLink",
  "ContextControl": "Polaris-TopBar__ContextControl",
  "NavigationIcon": "Polaris-TopBar__NavigationIcon",
  "focused": "Polaris-TopBar--focused",
  "Contents": "Polaris-TopBar__Contents",
  "SearchField": "Polaris-TopBar__SearchField",
  "SecondaryMenu": "Polaris-TopBar__SecondaryMenu"
};

// subcomponents so explicitly state the subcomponents in the type definition.
// Letting this be implicit works in this project but fails in projects that use
// generated *.d.ts files.

var TopBar = function TopBar(_ref) {
  var showNavigationToggle = _ref.showNavigationToggle,
      userMenu = _ref.userMenu,
      searchResults = _ref.searchResults,
      searchField = _ref.searchField,
      secondaryMenu = _ref.secondaryMenu,
      searchResultsVisible = _ref.searchResultsVisible,
      _ref$searchResultsOve = _ref.searchResultsOverlayVisible,
      searchResultsOverlayVisible = _ref$searchResultsOve === void 0 ? false : _ref$searchResultsOve,
      onNavigationToggle = _ref.onNavigationToggle,
      onSearchResultsDismiss = _ref.onSearchResultsDismiss,
      contextControl = _ref.contextControl;
  var i18n = useI18n();

  var _useTheme = useTheme(),
      logo = _useTheme.logo;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      scrolled = _useState2[0],
      setScrolled = _useState2[1];

  var _useFeatures = useFeatures(),
      newDesignLanguage = _useFeatures.newDesignLanguage;

  var _useToggle = useToggle(false),
      focused = _useToggle.value,
      forceTrueFocused = _useToggle.setTrue,
      forceFalseFocused = _useToggle.setFalse;

  var handleScroll = useCallback(debounce(function () {
    var scrollDistance = window.scrollY;
    var isScrolled = scrollDistance >= 1;

    if (scrolled && isScrolled) {
      return;
    }

    window.requestAnimationFrame(function () {
      return setScrolled(Boolean(isScrolled));
    });
  }, 20), []);
  var iconClassName = classNames(styles$1I.NavigationIcon, focused && styles$1I.focused);
  var navigationButtonMarkup = showNavigationToggle ? /*#__PURE__*/React__default.createElement("button", {
    type: "button",
    className: iconClassName,
    onClick: onNavigationToggle,
    onFocus: forceTrueFocused,
    onBlur: forceFalseFocused,
    "aria-label": i18n.translate('Polaris.TopBar.toggleMenuLabel')
  }, /*#__PURE__*/React__default.createElement(Icon, {
    source: MobileHamburgerMajorMonotone
  })) : null;
  var width = getWidth(logo, 104);
  var contextMarkup;

  if (contextControl && !newDesignLanguage) {
    contextMarkup = /*#__PURE__*/React__default.createElement("div", {
      className: styles$1I.ContextControl
    }, contextControl);
  } else if (logo && !newDesignLanguage) {
    contextMarkup = /*#__PURE__*/React__default.createElement("div", {
      className: styles$1I.LogoContainer
    }, /*#__PURE__*/React__default.createElement(UnstyledLink, {
      url: logo.url || '',
      className: styles$1I.LogoLink,
      style: {
        width
      }
    }, /*#__PURE__*/React__default.createElement(Image, {
      source: logo.topBarSource || '',
      alt: logo.accessibilityLabel || '',
      className: styles$1I.Logo,
      style: {
        width
      }
    })));
  }

  var searchMarkup = searchField ? /*#__PURE__*/React__default.createElement(React__default.Fragment, null, searchField, /*#__PURE__*/React__default.createElement(Search, {
    visible: searchResultsVisible,
    onDismiss: onSearchResultsDismiss,
    overlayVisible: searchResultsOverlayVisible
  }, searchResults)) : null;
  var scrollListenerMarkup = newDesignLanguage ? /*#__PURE__*/React__default.createElement(EventListener, {
    event: "scroll",
    handler: handleScroll,
    passive: true
  }) : null;
  var className = classNames(styles$1I.TopBar, newDesignLanguage && styles$1I['TopBar-newDesignLanguage'], scrolled && styles$1I.isScrolled);
  return /*#__PURE__*/React__default.createElement("div", {
    className: className
  }, navigationButtonMarkup, contextMarkup, /*#__PURE__*/React__default.createElement("div", {
    className: styles$1I.Contents
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles$1I.SearchField
  }, searchMarkup), /*#__PURE__*/React__default.createElement("div", {
    className: styles$1I.SecondaryMenu
  }, secondaryMenu), userMenu), scrollListenerMarkup);
};
TopBar.Menu = Menu;
TopBar.SearchField = SearchField;
TopBar.UserMenu = UserMenu;

var MINUTE = 60;
var HOUR = MINUTE * 60;
function ensureTwoDigits(num) {
  return num > 9 ? String(num) : "0".concat(num);
}
function secondsToTimeComponents(seconds) {
  return {
    hours: Math.floor(seconds / HOUR),
    minutes: Math.floor(seconds % HOUR / MINUTE),
    seconds: seconds % MINUTE
  };
}
function secondsToTimestamp(numSeconds) {
  var _secondsToTimeCompone = secondsToTimeComponents(numSeconds),
      hours = _secondsToTimeCompone.hours,
      minutes = _secondsToTimeCompone.minutes,
      seconds = _secondsToTimeCompone.seconds;

  var hasHours = numSeconds > HOUR;
  var hoursText = hasHours ? "".concat(hours, ":") : '';
  var minutesText = "".concat(hasHours ? ensureTwoDigits(minutes) : minutes, ":");
  var secondsText = "".concat(ensureTwoDigits(seconds));
  return "".concat(hoursText).concat(minutesText).concat(secondsText);
}
function secondsToDurationTranslationKey(numSeconds) {
  var _secondsToTimeCompone2 = secondsToTimeComponents(numSeconds),
      hours = _secondsToTimeCompone2.hours,
      minutes = _secondsToTimeCompone2.minutes,
      seconds = _secondsToTimeCompone2.seconds;

  var durationKey = 'Polaris.VideoThumbnail.playButtonA11yLabel.duration';

  if (hours) {
    durationKey += ".hours.".concat(hours > 1 ? 'other' : 'one');

    if (seconds) {
      if (minutes > 1) {
        durationKey += "".concat(seconds > 1 ? '.minutesAndSeconds' : '.minutesAndSecond');
      } else if (minutes === 1) {
        durationKey += "".concat(seconds > 1 ? '.minuteAndSeconds' : '.minuteAndSecond');
      } else {
        durationKey += "".concat(seconds > 1 ? '.andSeconds' : '.andSecond');
      }
    } else if (minutes) {
      durationKey += "".concat(minutes > 1 ? '.andMinutes' : '.andMinute');
    } else {
      durationKey += '.only';
    }
  } else if (minutes) {
    durationKey += ".minutes.".concat(minutes > 1 ? 'other' : 'one');

    if (seconds) {
      durationKey += "".concat(seconds > 1 ? '.andSeconds' : '.andSecond');
    } else {
      durationKey += '.only';
    }
  } else if (seconds) {
    durationKey += seconds > 1 ? '.seconds.other' : '.seconds.one';
  }

  return durationKey;
}

var PlayIcon = 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzggMzgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xOSAxQzkuMDYgMSAxIDkuMDU3IDEgMTljMCA5Ljk0IDguMDU3IDE4IDE4IDE4IDkuOTQgMCAxOC04LjA1NyAxOC0xOCAwLTkuOTQtOC4wNTctMTgtMTgtMTh6IiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTE5IDFDOS4wNiAxIDEgOS4wNTcgMSAxOWMwIDkuOTQgOC4wNTcgMTggMTggMTggOS45NCAwIDE4LTguMDU3IDE4LTE4IDAtOS45NC04LjA1Ny0xOC0xOC0xOHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2I1YjViNSIvPjxwYXRoIGQ9Ik0xNSAxMS43MjNjMC0uNjA1LjctLjk0MiAxLjE3My0uNTY0bDEwLjkzIDcuMjE1YS43Mi43MiAwIDAxMCAxLjEyOGwtMTAuOTMgNy4yMTZBLjcyMy43MjMgMCAwMTE1IDI2LjE1M3YtMTQuNDN6IiBmaWxsLW9wYWNpdHk9Ii41NTciLz48L3N2Zz4K';

var styles$1J = {
  "Thumbnail": "Polaris-VideoThumbnail__Thumbnail",
  "WithPlayer": "Polaris-VideoThumbnail__WithPlayer",
  "PlayButton": "Polaris-VideoThumbnail__PlayButton",
  "PlayIcon": "Polaris-VideoThumbnail__PlayIcon",
  "Timestamp": "Polaris-VideoThumbnail__Timestamp"
};

function VideoThumbnail(_ref) {
  var thumbnailUrl = _ref.thumbnailUrl,
      videoLength = _ref.videoLength,
      accessibilityLabel = _ref.accessibilityLabel,
      onClick = _ref.onClick,
      onBeforeStartPlaying = _ref.onBeforeStartPlaying;
  var i18n = useI18n();
  var buttonLabel;

  if (accessibilityLabel) {
    buttonLabel = accessibilityLabel;
  } else if (videoLength) {
    var _secondsToTimeCompone = secondsToTimeComponents(videoLength),
        hours = _secondsToTimeCompone.hours,
        minutes = _secondsToTimeCompone.minutes,
        seconds = _secondsToTimeCompone.seconds;

    buttonLabel = i18n.translate('Polaris.VideoThumbnail.playButtonA11yLabel.defaultWithDuration', {
      duration: i18n.translate(secondsToDurationTranslationKey(videoLength), {
        hourCount: hours,
        minuteCount: minutes,
        secondCount: seconds
      })
    });
  } else {
    buttonLabel = i18n.translate('Polaris.VideoThumbnail.playButtonA11yLabel.default');
  }

  var timeStampMarkup = videoLength ? /*#__PURE__*/React__default.createElement("p", {
    className: styles$1J.Timestamp
  }, secondsToTimestamp(videoLength)) : null;
  return /*#__PURE__*/React__default.createElement("div", {
    className: styles$1J.Thumbnail,
    style: {
      backgroundImage: "url(".concat(thumbnailUrl, ")")
    }
  }, /*#__PURE__*/React__default.createElement("button", {
    type: "button",
    className: styles$1J.PlayButton,
    "aria-label": buttonLabel,
    onClick: onClick,
    onMouseEnter: onBeforeStartPlaying,
    onFocus: onBeforeStartPlaying,
    onTouchStart: onBeforeStartPlaying
  }, /*#__PURE__*/React__default.createElement("img", {
    className: styles$1J.PlayIcon,
    src: PlayIcon,
    alt: ""
  })), timeStampMarkup);
}

export { AccountConnection, ActionList, ActionMenu, AppBridgeContext, AppProvider, Autocomplete, Avatar, Backdrop, Badge, Banner, Breadcrumbs, Button, ButtonGroup, CalloutCard, Caption, Card, Checkbox$1 as Checkbox, ChoiceList, Collapsible, ColorPicker, Connected, ContextualSaveBar, DATA_ATTRIBUTE, DEFAULT_TOAST_DURATION, DEFAULT_TOAST_DURATION_WITH_ACTION, DataTable, DatePicker, DescriptionList, DisplayText, DropZone, EmptySearchResult, EmptyState, EventListener, ExceptionList, FilterType, Filters, Focus, FooterHelp, Form, FormLayout, Frame, Heading, Icon, Image, Indicator, InlineError, Key, KeyboardKey, KeypressListener, KonamiCode, Label, Labelled, Layout, Link, List, Loading$1 as Loading, MediaCard, Modal, Navigation$1 as Navigation, OptionList, Page, PageActions, Pagination, PolarisTestProvider, Popover, PopoverCloseSource, Portal, ProgressBar, RadioButton, RangeSlider, ResourceItem, ResourceList, ResourcePicker, ScrollLock, Scrollable, Select, SettingToggle, Sheet, SkeletonBodyText, SkeletonDisplayText, SkeletonPage, SkeletonThumbnail, Spinner, Stack, Sticky, Subheading, Tabs, Tag, TextContainer, TextField, TextStyle, ThemeProvider, Thumbnail, Toast$1 as Toast, Tooltip, TopBar, TrapFocus, Truncate, TypeOf, Tokens as UNSTABLE_Tokens, toCssCustomPropertySyntax as UNSTABLE_toCssCustomPropertySyntax, UnstyledLink, VideoThumbnail, VisuallyHidden, ScrollLockManagerContext as _SECRET_INTERNAL_SCROLL_LOCK_MANAGER_CONTEXT, WithinContentContext as _SECRET_INTERNAL_WITHIN_CONTENT_CONTEXT, buttonFrom, buttonsFrom, errorTextID, hsbToHex, hsbToRgb, hslToRgb, isNavigationItemActive, isNewDesignLanguageColor, rgbString, rgbToHex, rgbToHsb, rgbToHsl, rgbaString };