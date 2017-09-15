var colors = require("colors"), base = {}

base.load_plugins = (dir) => {
  var plugin = require("./" + dir)
  if (this[plugin.name])
    return console.log("Plugin", plugin.name.green, "already loaded.")
  this[plugin.name] = () => plugin.apply(this, arguments)
}

base.plugin = {}
base.errors = []
base.result = false

module.exports = base