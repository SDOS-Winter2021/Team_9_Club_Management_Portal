"use strict";

exports.__esModule = true;
exports.others = void 0;

var _utils = require("@chakra-ui/utils");

var floatTransform = function floatTransform(value, theme) {
  var map = {
    left: "right",
    right: "left"
  };
  return theme.direction === "rtl" ? map[value] : value;
};

var srOnly = {
  border: "0px",
  clip: "rect(0, 0, 0, 0)",
  width: "1px",
  height: "1px",
  margin: "-1px",
  padding: "0px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
};
var srFocusable = {
  position: "static",
  width: "auto",
  height: "auto",
  clip: "auto",
  padding: "0",
  margin: "0",
  overflow: "visible",
  whiteSpace: "normal"
};
var others = {
  animation: true,
  appearance: true,
  visibility: true,
  userSelect: true,
  pointerEvents: true,
  cursor: true,
  resize: true,
  objectFit: true,
  objectPosition: true,
  "float": {
    property: "float",
    transform: floatTransform
  },
  willChange: true,
  filter: true,
  clipPath: true,
  srOnly: {
    transform: function transform(value) {
      if (value === true) return srOnly;
      if (value === "focusable") return srFocusable;
      return {};
    }
  },
  layerStyle: {
    processResult: true,
    transform: function transform(value, theme) {
      return (0, _utils.memoizedGet)(theme, "layerStyles." + value, {});
    }
  },
  textStyle: {
    processResult: true,
    transform: function transform(value, theme) {
      return (0, _utils.memoizedGet)(theme, "textStyles." + value, {});
    }
  },
  apply: {
    processResult: true,
    transform: function transform(value, theme) {
      return (0, _utils.memoizedGet)(theme, value, {});
    }
  }
};
exports.others = others;
//# sourceMappingURL=others.js.map