"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var actions = _interopRequireWildcard(require("./movieAction"));

var types = _interopRequireWildcard(require("./types"));

var _data = _interopRequireDefault(require("../data.json"));

var _expect = _interopRequireDefault(require("expect"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe('Fetching movie actions', function () {
  var ds = _data["default"];
  var youtube_data = ds.filter(function (item) {
    return item.youtube !== "";
  });
  var new_match = [{
    "name": "Loot",
    "image": "https://image.tmdb.org/t/p/w220_and_h330_face/d9pQHVVf2FbfY6ayPM7qseVLc5K.jpg",
    "year": "2012",
    "length": "2h 1m",
    "youtube": "",
    "genre": ["action", "comedy"],
    "rating": "PG-13",
    "actor": [{
      "name": "Reecha Sharma",
      "image": "https://image.tmdb.org/t/p/original/1f8Y1jAxZdWPPEbfmlrK48iIqFl.jpg"
    }, {
      "name": "Keki Adhikari",
      "image": "https://image.tmdb.org/t/p/original/f0ZvIc6njIgBAqlfinM9obQCYow.jpg"
    }, {
      "name": "Bipin Karki",
      "image": "https://image.tmdb.org/t/p/original/f0ZvIc6njIgBAqlfinM9obQCYow.jpg"
    }, {
      "name": "Saugat Malla",
      "image": "https://image.tmdb.org/t/p/original/pbIOAtHytaDkd0nQGG9OPb5jUHN.jpg"
    }, {
      "name": "Dayahang Rai",
      "image": "https://image.tmdb.org/t/p/original/ySK3NIzPYA4aYsGhPd17me29TsJ.jpg"
    }, {
      "name": "Saugat Malla",
      "image": "https://image.tmdb.org/t/p/original/pbIOAtHytaDkd0nQGG9OPb5jUHN.jpg"
    }, {
      "name": "Dayahang Rai",
      "image": "https://image.tmdb.org/t/p/original/ySK3NIzPYA4aYsGhPd17me29TsJ.jpg"
    }],
    "streaming": [{
      "prime": "https://is3-ssl.mzstatic.com/image/thumb/Purple114/v4/48/27/ad/4827ad2f-084b-2760-3d6d-5b26238decc0/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png"
    }, {
      "netflix": "https://is4-ssl.mzstatic.com/image/thumb/Purple114/v4/76/db/17/76db17fa-9ec6-86c4-4fc6-ec87bd7b01f0/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png"
    }],
    "songs": ["Dui Rupaiyaa", "Kutu Ma Kutu", "Talkyo Jawani"]
  }];
  it('fetchMovies should fetch all movie', function () {
    var expectedAction = {
      type: types.FETCH_MOVIES,
      payload: ds
    };
    (0, _expect["default"])(actions.fetchMovies('all')).toEqual(expectedAction);
  });
  it('fetchMovies should fetch all movie', function () {
    var expectedAction = {
      type: types.FETCH_MOVIES,
      payload: youtube_data
    };
    (0, _expect["default"])(actions.fetchMovies('Youtube')).toEqual(expectedAction);
  });
  it('fetchMovie should fetch a single movie', function () {
    var expectedAction = {
      type: types.FETCH_MOVIE,
      payload: new_match
    };
    (0, _expect["default"])(actions.fetchMovie('Loot')).toEqual(expectedAction);
  });
});