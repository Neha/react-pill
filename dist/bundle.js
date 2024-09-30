import { jsx, jsxs } from 'react/jsx-runtime';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".defaultPill{align-items:center;background-color:#eee;border:0;display:inline-flex;gap:4px;margin:2px;padding:4px 10px}.closeButton{background-color:transparent;border:0;color:currentColor;cursor:pointer;font-size:8px;padding:0}";
styleInject(css_248z);

var Pill = function (_a) {
    var onClose = _a.onClose, data = _a.data, rounded = _a.rounded, onSelect = _a.onSelect, pillClassName = _a.pillClassName, containerClassName = _a.containerClassName;
    var createPill = function () {
        return data.map(function (value, index) {
            return (jsxs("button", { style: { backgroundColor: value.bgcolor ? value.bgcolor : "#eee" }, className: "".concat(rounded ? "rounded" : "", " ").concat(pillClassName ? "pill" : "", " defaultPill"), onClick: function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    onSelect && onSelect(e, index);
                }, children: [value.icon && jsx("span", { className: "iconContainer", children: value.icon }), jsx("span", { children: value.label }), onClose ? (jsx("button", { className: "closeButton", "aria-label": "Close ".concat(value.label), onClick: function (e) {
                            e.stopPropagation();
                            onClose && onClose(index);
                        }, children: "X" })) : ("")] }, index));
        });
    };
    return jsx("div", { className: containerClassName, children: createPill() });
};

export { Pill };
