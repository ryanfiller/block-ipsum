'use strict';

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var words = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WORDS = void 0;
var WORDS = ["ad", "adipisicing", "aliqua", "aliquip", "amet", "anim", "aute", "cillum", "commodo", "consectetur", "consequat", "culpa", "cupidatat", "deserunt", "do", "dolor", "dolore", "duis", "ea", "eiusmod", "elit", "enim", "esse", "est", "et", "eu", "ex", "excepteur", "exercitation", "fugiat", "id", "in", "incididunt", "ipsum", "irure", "labore", "laboris", "laborum", "Lorem", "magna", "minim", "mollit", "nisi", "non", "nostrud", "nulla", "occaecat", "officia", "pariatur", "proident", "qui", "quis", "reprehenderit", "sint", "sit", "sunt", "tempor", "ullamco", "ut", "velit", "veniam", "voluptate"];
exports.WORDS = WORDS;

});

unwrapExports(words);
words.WORDS;

var formats = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FORMATS = exports.FORMAT_PLAIN = exports.FORMAT_HTML = void 0;
var FORMAT_HTML = "html";
exports.FORMAT_HTML = FORMAT_HTML;
var FORMAT_PLAIN = "plain";
exports.FORMAT_PLAIN = FORMAT_PLAIN;
var FORMATS = [FORMAT_HTML, FORMAT_PLAIN];
exports.FORMATS = FORMATS;

});

unwrapExports(formats);
formats.FORMATS;
formats.FORMAT_PLAIN;
formats.FORMAT_HTML;

var lineEndings = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LINE_ENDINGS = void 0;
var LINE_ENDINGS = {
  POSIX: "\n",
  WIN32: "\r\n"
};
exports.LINE_ENDINGS = LINE_ENDINGS;

});

unwrapExports(lineEndings);
lineEndings.LINE_ENDINGS;

var capitalize_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @param str  A string that may or may not be capitalized.
 * @returns    A capitalized string.
 */
var capitalize = function capitalize(str) {
  var trimmed = str.trim();
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
};

var _default = capitalize;
exports.default = _default;

});

unwrapExports(capitalize_1);

var isNode_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @returns  True if the runtime is NodeJS.
 */
var isNode = function isNode() {
  return !!module.exports;
};

var _default = isNode;
exports.default = _default;

});

unwrapExports(isNode_1);

var isReactNative_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @returns  True if runtime is ReactNative.
 */
var isReactNative = function isReactNative() {
  return typeof navigator !== "undefined" && navigator.product === "ReactNative";
};

var _default = isReactNative;
exports.default = _default;

});

unwrapExports(isReactNative_1);

var platforms = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SUPPORTED_PLATFORMS = void 0;
var SUPPORTED_PLATFORMS = {
  DARWIN: "darwin",
  LINUX: "linux",
  WIN32: "win32"
};
exports.SUPPORTED_PLATFORMS = SUPPORTED_PLATFORMS;

});

unwrapExports(platforms);
platforms.SUPPORTED_PLATFORMS;

var isWindows_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;



/**
 * @returns True if process is windows.
 */
var isWindows = function isWindows() {
  return typeof process !== "undefined" && process.platform === platforms.SUPPORTED_PLATFORMS.WIN32;
};

var _default = isWindows;
exports.default = _default;

});

unwrapExports(isWindows_1);

var makeArrayOfLength_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @param length Length "x".
 * @returns      An array of indexes of length "x".
 */
var makeArrayOfLength = function makeArrayOfLength() {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return Array.apply(null, Array(length)).map(function (item, index) {
    return index;
  });
};

var _default = makeArrayOfLength;
exports.default = _default;

});

unwrapExports(makeArrayOfLength_1);

var makeArrayOfStrings_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;



/**
 * @param length  Length "x".
 * @returns       An array of strings of length "x".
 */
var makeArrayOfStrings = function makeArrayOfStrings(length, makeString) {
  var arr = (0, util.makeArrayOfLength)(length);
  return arr.map(function () {
    return makeString();
  });
};

var _default = makeArrayOfStrings;
exports.default = _default;

});

unwrapExports(makeArrayOfStrings_1);

var util = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "capitalize", {
  enumerable: true,
  get: function get() {
    return _capitalize.default;
  }
});
Object.defineProperty(exports, "isNode", {
  enumerable: true,
  get: function get() {
    return _isNode.default;
  }
});
Object.defineProperty(exports, "isReactNative", {
  enumerable: true,
  get: function get() {
    return _isReactNative.default;
  }
});
Object.defineProperty(exports, "isWindows", {
  enumerable: true,
  get: function get() {
    return _isWindows.default;
  }
});
Object.defineProperty(exports, "makeArrayOfLength", {
  enumerable: true,
  get: function get() {
    return _makeArrayOfLength.default;
  }
});
Object.defineProperty(exports, "makeArrayOfStrings", {
  enumerable: true,
  get: function get() {
    return _makeArrayOfStrings.default;
  }
});

var _capitalize = _interopRequireDefault(capitalize_1);

var _isNode = _interopRequireDefault(isNode_1);

var _isReactNative = _interopRequireDefault(isReactNative_1);

var _isWindows = _interopRequireDefault(isWindows_1);

var _makeArrayOfLength = _interopRequireDefault(makeArrayOfLength_1);

var _makeArrayOfStrings = _interopRequireDefault(makeArrayOfStrings_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

});

unwrapExports(util);

var generator = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;





function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Generator =
/*#__PURE__*/
function () {
  function Generator() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$sentencesPerPara = _ref.sentencesPerParagraph,
        sentencesPerParagraph = _ref$sentencesPerPara === void 0 ? {
      max: 7,
      min: 3
    } : _ref$sentencesPerPara,
        _ref$wordsPerSentence = _ref.wordsPerSentence,
        wordsPerSentence = _ref$wordsPerSentence === void 0 ? {
      max: 15,
      min: 5
    } : _ref$wordsPerSentence,
        random = _ref.random;
        _ref.seed;
        var _ref$words = _ref.words,
        words$1 = _ref$words === void 0 ? words.WORDS : _ref$words;

    _classCallCheck(this, Generator);

    _defineProperty(this, "sentencesPerParagraph", void 0);

    _defineProperty(this, "wordsPerSentence", void 0);

    _defineProperty(this, "random", void 0);

    _defineProperty(this, "words", void 0);

    if (sentencesPerParagraph.min > sentencesPerParagraph.max) {
      throw new Error("Minimum number of sentences per paragraph (".concat(sentencesPerParagraph.min, ") cannot exceed maximum (").concat(sentencesPerParagraph.max, ")."));
    }

    if (wordsPerSentence.min > wordsPerSentence.max) {
      throw new Error("Minimum number of words per sentence (".concat(wordsPerSentence.min, ") cannot exceed maximum (").concat(wordsPerSentence.max, ")."));
    }

    this.sentencesPerParagraph = sentencesPerParagraph;
    this.words = words$1;
    this.wordsPerSentence = wordsPerSentence;
    this.random = random || Math.random;
  }

  _createClass(Generator, [{
    key: "generateRandomInteger",
    value: function generateRandomInteger(min, max) {
      return Math.floor(this.random() * (max - min + 1) + min);
    }
  }, {
    key: "generateRandomWords",
    value: function generateRandomWords(num) {
      var _this = this;

      var _this$wordsPerSentenc = this.wordsPerSentence,
          min = _this$wordsPerSentenc.min,
          max = _this$wordsPerSentenc.max;
      var length = num || this.generateRandomInteger(min, max);
      return (0, util.makeArrayOfLength)(length).reduce(function (accumulator, index) {
        return "".concat(_this.pluckRandomWord(), " ").concat(accumulator);
      }, "").trim();
    }
  }, {
    key: "generateRandomSentence",
    value: function generateRandomSentence(num) {
      return "".concat((0, util.capitalize)(this.generateRandomWords(num)), ".");
    }
  }, {
    key: "generateRandomParagraph",
    value: function generateRandomParagraph(num) {
      var _this2 = this;

      var _this$sentencesPerPar = this.sentencesPerParagraph,
          min = _this$sentencesPerPar.min,
          max = _this$sentencesPerPar.max;
      var length = num || this.generateRandomInteger(min, max);
      return (0, util.makeArrayOfLength)(length).reduce(function (accumulator, index) {
        return "".concat(_this2.generateRandomSentence(), " ").concat(accumulator);
      }, "").trim();
    }
  }, {
    key: "pluckRandomWord",
    value: function pluckRandomWord() {
      var min = 0;
      var max = this.words.length - 1;
      var index = this.generateRandomInteger(min, max);
      return this.words[index];
    }
  }]);

  return Generator;
}();

var _default = Generator;
exports.default = _default;

});

unwrapExports(generator);

var LoremIpsum_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;





var _generator = _interopRequireDefault(generator);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LoremIpsum =
/*#__PURE__*/
function () {
  function LoremIpsum() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : formats.FORMAT_PLAIN;
    var suffix = arguments.length > 2 ? arguments[2] : undefined;

    _classCallCheck(this, LoremIpsum);

    _defineProperty(this, "generator", void 0);

    _defineProperty(this, "format", void 0);

    _defineProperty(this, "suffix", void 0);

    if (formats.FORMATS.indexOf(format.toLowerCase()) === -1) {
      throw new Error("".concat(format, " is an invalid format. Please use ").concat(formats.FORMATS.join(" or "), "."));
    }

    this.format = format.toLowerCase();
    this.suffix = suffix;
    this.generator = new _generator.default(options);
  }

  _createClass(LoremIpsum, [{
    key: "getLineEnding",
    value: function getLineEnding() {
      if (this.suffix) {
        return this.suffix;
      }

      if (!(0, util.isReactNative)() && (0, util.isNode)() && (0, util.isWindows)()) {
        return lineEndings.LINE_ENDINGS.WIN32;
      }

      return lineEndings.LINE_ENDINGS.POSIX;
    }
  }, {
    key: "formatString",
    value: function formatString(str) {
      if (this.format === formats.FORMAT_HTML) {
        return "<p>".concat(str, "</p>");
      }

      return str;
    }
  }, {
    key: "formatStrings",
    value: function formatStrings(strings) {
      var _this = this;

      return strings.map(function (str) {
        return _this.formatString(str);
      });
    }
  }, {
    key: "generateWords",
    value: function generateWords(num) {
      return this.formatString(this.generator.generateRandomWords(num));
    }
  }, {
    key: "generateSentences",
    value: function generateSentences(num) {
      return this.formatString(this.generator.generateRandomParagraph(num));
    }
  }, {
    key: "generateParagraphs",
    value: function generateParagraphs(num) {
      var makeString = this.generator.generateRandomParagraph.bind(this.generator);
      return this.formatStrings((0, util.makeArrayOfStrings)(num, makeString)).join(this.getLineEnding());
    }
  }]);

  return LoremIpsum;
}();

var _default = LoremIpsum;
exports.default = _default;

});

unwrapExports(LoremIpsum_1);

var dist = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "LoremIpsum", {
  enumerable: true,
  get: function get() {
    return _LoremIpsum.default;
  }
});
exports.loremIpsum = void 0;



var _LoremIpsum = _interopRequireDefault(LoremIpsum_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loremIpsum = function loremIpsum() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$count = _ref.count,
      count = _ref$count === void 0 ? 1 : _ref$count,
      _ref$format = _ref.format,
      format = _ref$format === void 0 ? "plain" : _ref$format,
      _ref$paragraphLowerBo = _ref.paragraphLowerBound,
      paragraphLowerBound = _ref$paragraphLowerBo === void 0 ? 3 : _ref$paragraphLowerBo,
      _ref$paragraphUpperBo = _ref.paragraphUpperBound,
      paragraphUpperBound = _ref$paragraphUpperBo === void 0 ? 7 : _ref$paragraphUpperBo,
      random = _ref.random,
      _ref$sentenceLowerBou = _ref.sentenceLowerBound,
      sentenceLowerBound = _ref$sentenceLowerBou === void 0 ? 5 : _ref$sentenceLowerBou,
      _ref$sentenceUpperBou = _ref.sentenceUpperBound,
      sentenceUpperBound = _ref$sentenceUpperBou === void 0 ? 15 : _ref$sentenceUpperBou,
      _ref$units = _ref.units,
      units = _ref$units === void 0 ? "sentences" : _ref$units,
      _ref$words = _ref.words,
      words$1 = _ref$words === void 0 ? words.WORDS : _ref$words,
      _ref$suffix = _ref.suffix,
      suffix = _ref$suffix === void 0 ? "" : _ref$suffix;

  var options = {
    random: random,
    sentencesPerParagraph: {
      max: paragraphUpperBound,
      min: paragraphLowerBound
    },
    words: words$1,
    wordsPerSentence: {
      max: sentenceUpperBound,
      min: sentenceLowerBound
    }
  };
  var lorem = new _LoremIpsum.default(options, format, suffix);

  switch (units) {
    case "paragraphs":
    case "paragraph":
      return lorem.generateParagraphs(count);

    case "sentences":
    case "sentence":
      return lorem.generateSentences(count);

    case "words":
    case "word":
      return lorem.generateWords(count);

    default:
      return "";
  }
};

exports.loremIpsum = loremIpsum;

});

var LoremIpsum = unwrapExports(dist);
dist.loremIpsum;

const defaultOptions = {
  sentencesPerParagraph: { max: 8, min: 4 },
  wordsPerSentence: { max: 16, min: 4 }
};

function blockIpsum({
  length = 1,
  type = 'paragraph',
  character = '█',
  options = defaultOptions
}) {
  
  const lorem = new LoremIpsum(
    options
    ? {...options}
    : {
    sentencesPerParagraph: { max: 8, min: 4 },
    wordsPerSentence: { max: 16, min: 4 }
  });

  function replace(text) {
    return text.replace(/[^\s]/g, character.trim())
  }

  function generate() {
    switch (type.trim()) {
      case 'words':
        return lorem.generateWords(length)
      case 'sentences':
        return lorem.generateSentences(length)
      case 'paragraphs':
        return lorem.generateParagraphs(length)
    }
  }

  return replace(generate())
}

module.exports = blockIpsum;
