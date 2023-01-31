"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ReactCardSlider;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _md = require("react-icons/md");

var _bi = require("react-icons/bi");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function ReactCardSlider(_ref) {
  var slides = _ref.slides;

  var slideLeft = function slideLeft() {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  var slideRight = function slideRight() {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  return /*#__PURE__*/_react.default.createElement(SliderContainer, null, /*#__PURE__*/_react.default.createElement(_md.MdChevronLeft, {
    size: 40,
    className: "slider-icon left",
    onClick: slideLeft
  }), /*#__PURE__*/_react.default.createElement(Slider, {
    id: "slider"
  }, slides === null || slides === void 0 ? void 0 : slides.map(function (slide, index) {
    var _slide$categories;

    return /*#__PURE__*/_react.default.createElement(Slide, null, /*#__PURE__*/_react.default.createElement(CardImage, {
      image: slide.image
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "cat"
    }, (_slide$categories = slide.categories) === null || _slide$categories === void 0 ? void 0 : _slide$categories.map(function (cat) {
      return /*#__PURE__*/_react.default.createElement("span", {
        style: {
          background: cat.bg || '#1c4f64',
          color: cat.color || '#f9feff'
        }
      }, cat.title);
    }))), /*#__PURE__*/_react.default.createElement(CardInfo, null, /*#__PURE__*/_react.default.createElement("h4", {
      className: "title",
      style: {
        color: slide.title_color || 'inherit'
      }
    }, slide.title.substr(0, 25)), /*#__PURE__*/_react.default.createElement("div", {
      className: "info"
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "price",
      style: {
        color: slide.price_color || '#1c0953'
      }
    }, slide.price), /*#__PURE__*/_react.default.createElement("span", {
      style: {
        color: slide.btn_color || 'white',
        background: slide.btn_bg_color || '#1c0953'
      },
      className: "buy",
      onClick: slide.handleClick
    }, slide.btnText.substr(0, 15)))));
  })), /*#__PURE__*/_react.default.createElement(_md.MdChevronRight, {
    size: 40,
    className: "slider-icon right",
    onClick: slideRight
  }));
}

var SliderContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n   width : 90%;\n   height : 320px;\n   display: flex;\n   align-items: center;\n   position: relative;\n   box-sizing : border-box ;\n\n   .slider-icon{\n       background: white;\n       border-radius: 100%;\n       position: absolute;\n       opacity: 0.2;\n       box-shadow : 2px 2px 2px 2px rgb(0 0 0 / 12%); \n       cursor: pointer;\n\n       &:hover{\n        opacity: 1;\n       }\n   }\n\n\n   .left{\n       left : 0;\n   }\n\n   .right {\n       right : 0\n   }\n"])));

var Slider = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width : 100%;\n  height : 100% ;\n  white-space: nowrap;  // its behave like an flex-wrap . align all children in same alignment with scroallable.\n  overflow-x: scroll;\n  scrollbar-width: none;\n  scroll-behavior: smooth;\n  cursor: pointer;\n\n  &::-webkit-scrollbar{\n      display: none;\n  }\n"])));

var Slide = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    width : 320px;\n    height : 320px;\n    background: #f4eeec;\n    border-radius: 10px;\n    display: inline-block; // acquire all area into row.\n    margin: 0 0.5rem;\n    box-shadow : 2px 2px 2px 2px rgb(0 0 0 / 12%); \n    overflow : none ;\n"])));

var CardImage = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width : 100%;\n  height : 220px;\n  background: rgb(240 240 240 / 80%);\n  background-image: ", ";\n  background-size: cover;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n\n  .cat{\n      padding : 0.25rem ;\n      display: flex;\n      //color: #f9feff;\n\n      span{\n        padding: 0.25rem 0.75rem;\n        border: none;\n        border-radius: 1rem;\n        margin-right: 0.25rem;\n       // background: #1c4f64;\n        box-shadow: 2px 2px 2px 2px rgb(236 233 233 / 12%);\n        font-size: 0.7rem; \n      }\n    }\n"])), function (_ref2) {
  var image = _ref2.image;
  return image ? "url(".concat(image, ")") : 'none';
});

var CardInfo = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n\n    width : 100%;\n    padding: 0.25rem;\n    \n    .title {\n        font-size: 1.2rem;\n        margin : 0.25rem 0rem;\n        text-align: center;\n    }\n\n    .info{\n         margin-top: 0.5rem;\n         display: flex;\n         justify-content: space-between;\n         align-items: center;\n         padding: 0 0.65rem;\n\n        .price{\n            font-size: 1.4rem;\n            font-weight: 700;\n            //color: #1c0953;\n            border-radius: 1rem;\n            padding: 0.5rem 1rem ;\n            box-shadow: 2px 2px 2px 2px rgb(0 0 0 / 12%);\n        }\n\n        .buy{\n            padding: 0.5rem 1.25rem;\n            font-size: 1.2rem;\n            font-weight: 550;\n          //  color : white ;\n          //  background: #1c0953;\n            border: none;\n            border-radius : 1rem;\n            transition: 0.3s all ease-in-out;\n            cursor: pointer;\n\n            &:hover{\n                color : #1c0953 !important; \n                background: white !important;\n                font-weight: 650;\n                outline : none ; \n            }\n        }\n    }\n"])));