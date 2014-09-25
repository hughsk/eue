var miss = require('array-missing')
var noop = (function(){})

module.exports = eue

function eue(params) {
  var data = []

  if (!params) throw new Error(
    'Please pass an object with enter/update/exit properties to eue'
  )

  var _exit = params.exit || noop
  var _enter = params.enter || noop
  var _update = params.update || noop

  return function(_data) {
    if (!arguments.length) return data

    miss(data, _data, _exit)
    miss(_data, data, enter, _update)

    data = _data
  }

  function enter(d) {
    _enter(d)
    _update(d)
  }
}
