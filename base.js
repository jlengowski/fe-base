var base = require("./base/main")

base.load_plugnis("base_plugins")

var msg = base.yaml("messages.yaml")
  , arg = base.args(process.argv)

module.export = base