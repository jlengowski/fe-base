/**
 * Very simple and fast text templates
 *
 * base.text("My name is {0}", "Jan") // My name is Jan
 * base.text("My name is {name}", { name: "Jan" }) // My name is Jan          
 *
 * @author    Jan Lengowski <jlengowski@gmail.com>
 * @copyright Jan Lengowski 2017
 */
var plugin = () => {

  var base = this
    , args = arguments
    , text = args[0]
    , length = args.length
    , params = [].slice(1, args)
  
  if (length > 2 && typeof args[1] == "string")

    return text.replace(/({(\d{1,})})/g, 
      function (matches, index) { return args[index] }

  if (length == 2 && typeof args[1] == "object")

    return text.replace(/({(\w{1,})})/g, 
      function (matches, index) { return args[1][index] }

  return args[0] || ""
  
}

plugin.name = "text"

module.exports = plugin