"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getWebsiteName = exports.getNav = void 0;

var _types = require("./types");

var _website = require("../website");

var nav = _website.navBar;
var web = _website.webSiteName;

var getNav = function getNav() {
  return {
    type: _types.NAV_BAR,
    payload: nav
  };
};

exports.getNav = getNav;

var getWebsiteName = function getWebsiteName() {
  return {
    type: _types.WEBSITE,
    payload: web
  };
};

exports.getWebsiteName = getWebsiteName;