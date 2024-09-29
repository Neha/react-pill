/* eslint-disable react/prop-types */
import React from "react";
import "./Pill.css";
var Pill = function Pill(_ref) {
  var onClose = _ref.onClose,
    data = _ref.data,
    rounded = _ref.rounded,
    onSelect = _ref.onSelect,
    pillClassName = _ref.pillClassName,
    containerClassName = _ref.containerClassName;
  var createPill = function createPill() {
    return data.map(function (value, index) {
      return /*#__PURE__*/React.createElement("button", {
        style: {
          backgroundColor: value.bgcolor ? value.bgcolor : "#eee"
        },
        key: index,
        className: "".concat(rounded ? "rounded" : "", " ").concat(pillClassName ? "pill" : "", " defaultPill"),
        onClick: function onClick(e) {
          e.preventDefault();
          e.stopPropagation();
          onSelect && onSelect(e, index);
        }
      }, value.icon && /*#__PURE__*/React.createElement("span", {
        className: "iconContainer"
      }, value.icon), /*#__PURE__*/React.createElement("span", null, value.label), onClose ? /*#__PURE__*/React.createElement("button", {
        className: "closeButton",
        "aria-label": "Close ".concat(value.label),
        onClick: function onClick(e) {
          e.stopPropagation();
          onClose && onClose(index);
        }
      }, "X") : "");
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: containerClassName
  }, createPill());
};
export default Pill;