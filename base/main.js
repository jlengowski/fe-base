"use strict"

var fs = require("fs")
  , path = require("path")
  , load_plugins = require("require-dir")
  , base

var plugin_dir = __filename.replace(/base\/main\.js$/, "base_plugins")

base = load_plugins(plugin_dir)

module.exports = base