/**
 * Very simple and fast text templates
 *
 * base.text("My name is {0}", "Jan") // My name is Jan
 * base.text("My name is {name}", { name: "Jan" }) // My name is Jan          
 *
 * @author    Jan Lengowski <jlengowski@gmail.com>
 * @copyright Jan Lengowski 2017
 */
var plugin = function text () {

  var args   = arguments
    , length = args.length
    , params = [].slice.call(args, 1)

  if (length > 1 && typeof args[1] !== "object")

    return args[0].replace(/({(\d{1,})})/g, 
      function (a, b, index) { return params[index] })

  if (length == 2 && typeof args[1] == "object")

    return args[0].replace(/({(\w{1,})})/g, 
      function (a, b, name) { return params[0][name] })
  
  return args[0] || ""

} 

plugin.info = { name: "text", version: "1.0.0" }

module.exports = plugin