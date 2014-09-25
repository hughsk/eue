var test = require('tape')
var eue  = require('./')

test('enter: basic', function(t) {
  var n = 0, setData = eue({
    enter: function(d) { n++ }
  })

  setData([1, 2, 3])
  t.equal(n, 3)

  setData([1, 2])
  t.equal(n, 3)

  setData([1, 2, 3])
  t.equal(n, 4)

  setData([3, 2, 1])
  t.equal(n, 4)

  setData([5, 1, 2, 3])
  t.equal(n, 5)

  t.end()
})

test('enter: elements', function(t) {
  var setData = eue({
    enter: function(d) {
      t.ok(_enter(d))
    }
  })

  var _enter = function(d) { return d >= 1 && d <= 3 }
  setData([1, 2, 3])

  var _enter = function(d) { return d === 4 }
  setData([1, 2, 4])

  var _enter = function(d) { return d === 10 || d === 6 }
  setData([10, 2, 1, 4, 6])

  t.end()
})

test('update: basic', function(t) {
  var n = 0, setData = eue({
    update: function(d) { n++ }
  })

  setData([1, 2, 3])
  t.equal(n, 3)

  setData([1, 2])
  t.equal(n, 5)

  setData([1, 2, 3])
  t.equal(n, 8)

  setData([3, 2, 1])
  t.equal(n, 11)

  setData([5, 1, 2, 3])
  t.equal(n, 15)

  t.end()
})

test('update: elements', function(t) {
  var arr
  var setData = eue({
    update: function(d) {
      t.ok(arr.indexOf(d) !== -1)
    }
  })

  setData(arr = [1, 2, 3])
  setData(arr = [1, 2, 4])
  setData(arr = [10, 2, 1, 4, 6])

  t.end()
})

test('exit: basic', function(t) {
  var n = 0, setData = eue({
    exit: function(d) { n++ }
  })

  setData([1, 2, 3])
  t.equal(n, 0)

  setData([1, 2])
  t.equal(n, 1)

  setData([1, 2, 3])
  t.equal(n, 1)

  setData([3, 2, 1])
  t.equal(n, 1)

  setData([5, 1, 2, 3])
  t.equal(n, 1)

  setData([5, 7, 2, 8])
  t.equal(n, 3)

  t.end()
})

test('exit: elements', function(t) {
  var setData = eue({
    exit: function(d) {
      t.ok(_exit(d))
    }
  })

  var _exit = function(d) { return false }
  setData([1, 2, 3])

  var _exit = function(d) { return d === 3 }
  setData([1, 2, 4])

  var _exit = function(d) { return false }
  setData([10, 2, 1, 4, 6])

  var _exit = function(d) { return d === 1 || d === 2 }
  setData([10, 5, 3, 4, 6])

  t.end()
})
