var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SimpleForm = function (_React$Component) {
  _inherits(SimpleForm, _React$Component);

  function SimpleForm(props) {
    _classCallCheck(this, SimpleForm);

    var _this = _possibleConstructorReturn(this, (SimpleForm.__proto__ || Object.getPrototypeOf(SimpleForm)).call(this, props));

    _this.state = {
      name: ''
    };

    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(SimpleForm, [{
    key: "handleChange",
    value: function handleChange(event) {
      var _event$target = event.target,
          name = _event$target.name,
          value = _event$target.value;

      this.setState(_defineProperty({}, name, value));
    }
  }, {
    key: "render",
    value: function render() {
      var name = this.state.name;

      return React.createElement("input", { name: "name", value: name, onChange: this.handleChange });
    }
  }]);

  return SimpleForm;
}(React.Component);