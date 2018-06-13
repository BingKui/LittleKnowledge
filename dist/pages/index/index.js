"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _ListItem = require("../../components/ListItem.js");

var _ListItem2 = _interopRequireDefault(_ListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import MockData from '../../../mock/datalist.json';

var MockData = [{
  "title": "图灵测试",
  "category": ["前端"],
  "image": "http://img.zcool.cn/community/010a1b554c01d1000001bf72a68b37.jpg@1280w_1l_2o_100sh.png"
}, {
  "title": "图灵测试",
  "category": ["前端", "小程序"],
  "image": "http://img.zcool.cn/community/010a1b554c01d1000001bf72a68b37.jpg@1280w_1l_2o_100sh.png"
}, {
  "title": "图灵测试",
  "category": ["前端"],
  "image": "http://img.zcool.cn/community/010a1b554c01d1000001bf72a68b37.jpg@1280w_1l_2o_100sh.png"
}, {
  "title": "图灵测试",
  "category": ["前端"],
  "image": "http://img.zcool.cn/community/010a1b554c01d1000001bf72a68b37.jpg@1280w_1l_2o_100sh.png"
}, {
  "title": "图灵测试",
  "category": ["前端"],
  "image": "http://img.zcool.cn/community/010a1b554c01d1000001bf72a68b37.jpg@1280w_1l_2o_100sh.png"
}, {
  "title": "图灵测试",
  "category": ["前端"],
  "image": "http://img.zcool.cn/community/010a1b554c01d1000001bf72a68b37.jpg@1280w_1l_2o_100sh.png"
}, {
  "title": "图灵测试",
  "category": ["前端"],
  "image": "http://img.zcool.cn/community/010a1b554c01d1000001bf72a68b37.jpg@1280w_1l_2o_100sh.png"
}, {
  "title": "图灵测试",
  "category": ["前端"],
  "image": "http://img.zcool.cn/community/010a1b554c01d1000001bf72a68b37.jpg@1280w_1l_2o_100sh.png"
}, {
  "title": "图灵测试",
  "category": ["前端"],
  "image": "http://img.zcool.cn/community/010a1b554c01d1000001bf72a68b37.jpg@1280w_1l_2o_100sh.png"
}, {
  "title": "图灵测试",
  "category": ["前端"],
  "image": "http://img.zcool.cn/community/010a1b554c01d1000001bf72a68b37.jpg@1280w_1l_2o_100sh.png"
}, {
  "title": "图灵测试",
  "category": ["前端"],
  "image": "http://img.zcool.cn/community/010a1b554c01d1000001bf72a68b37.jpg@1280w_1l_2o_100sh.png"
}, {
  "title": "图灵测试",
  "category": ["前端"],
  "image": "http://img.zcool.cn/community/010a1b554c01d1000001bf72a68b37.jpg@1280w_1l_2o_100sh.png"
}, {
  "title": "图灵测试",
  "category": ["前端"],
  "image": "http://img.zcool.cn/community/010a1b554c01d1000001bf72a68b37.jpg@1280w_1l_2o_100sh.png"
}, {
  "title": "图灵测试",
  "category": ["前端"],
  "image": "http://img.zcool.cn/community/010a1b554c01d1000001bf72a68b37.jpg@1280w_1l_2o_100sh.png"
}, {
  "title": "图灵测试",
  "category": ["前端"],
  "image": "http://img.zcool.cn/community/010a1b554c01d1000001bf72a68b37.jpg@1280w_1l_2o_100sh.png"
}];

var Index = function (_Component) {
  _inherits(Index, _Component);

  function Index(props) {
    _classCallCheck(this, Index);

    var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));

    _this.$usedState = ["MockData"];
    _this.$props = {};
    _this.$components = {
      ListItem: _ListItem2.default
    };
    _this.$dynamicComponents = {
      $3e2ee8dce4f147e2a9792ad36db385ea: function $3e2ee8dce4f147e2a9792ad36db385ea() {
        var nodes = [{
          name: "ListItem",
          path: _ListItem2.default,
          subscript: "",

          args: function args(__item, index) {
            return {
              key: __item.title,
              category: __item.category,
              title: __item.title,
              image: __item.image
            };
          }
        }];
        return {
          stateName: "MockData",
          loopComponents: (0, _index.internal_dynamic_recursive)(_this, nodes, (0, _index.internal_safe_get)(_this.state, "MockData"), "MockData")
        };
      }
    };

    _this.state = _this._createData();
    return _this;
  }

  _createClass(Index, [{
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentWillUnmout",
    value: function componentWillUnmout() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {}
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      {
        Object.assign(this.__state, {
          MockData: MockData
        });
        this.__state.__data = Object.assign({}, this.__state);
        return this.__state;
      }
      var __state = this.__state;
      delete this.__state;
      return __state;
    }
  }]);

  return Index;
}(_index.Component);

exports.default = Index;

Page(require('../../npm/@tarojs/taro-weapp/index.js').default.createPage(Index, {
  path: 'src/pages/index/index.js'
}));