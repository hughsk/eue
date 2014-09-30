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

    var entered = 0
    var updated = 0
    var exited  = 0

    miss(data, _data, function(d) {
      return _exit(d, exited++)
    })

    miss(_data, data, function(d) {
      return enter(d, entered++)
    }, function(d) {
      return _update(d, updated++)
    })

    data = _data
  }

  function enter(d, i) {
    _enter(d, i)
    _update(d, i)
  }
}
