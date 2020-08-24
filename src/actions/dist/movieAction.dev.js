"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchMovie = exports.fetchMovies = void 0;

var _types = require("../actions/types");

var _data = _interopRequireDefault(require("../data.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ds = _data["default"];
var playing_filter = ds.filter(function (item) {
  return item.youtube !== "";
});

var fetchMovies = function fetchMovies(playing) {
  return {
    type: _types.FETCH_MOVIES,
    payload: playing === 'Youtube' ? playing_filter : ds
  };
};

exports.fetchMovies = fetchMovies;

var fetchMovie = function fetchMovie(name) {
  var new_ds = ds.filter(function (item) {
    return item.name === name;
  });
  return {
    type: _types.FETCH_MOVIE,
    payload: new_ds
  };
};

exports.fetchMovie = fetchMovie;