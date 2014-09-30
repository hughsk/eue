# eue [![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

A standalone, [d3](http://github.com/mbostock/d3)-like implementation of the
enter/exit/update pattern. Useful for implementing SVG visualisations without
depending on all of d3, but could also be used to take the same approach to
other rendering contexts.

*Note: unlike d3, this package ignores the DOM, expects unique values and*
*doesn't pass indicies to its update functions. You should use objects in your*
*arrays, and create DOM elements and indices as needed.*

## Usage

[![NPM](https://nodei.co/npm/eue.png)](https://nodei.co/npm/eue/)

### `setData = eue(options)`

* `enter(d, i)`: called when a new object is added to the data.
* `exit(d, i)`: called when a new object is removed from the data.
* `update(d, i)`: called for every datum when the data is updated.

Where `d` is the relevant datum, and `i` is the index of this datum within its
*group*, i.e. it's the `ith` datum that's had `enter` called on it during this
update.

### `setData(data)`

Give the `data` array of objects, updates the data and calls `enter(d)`,
`exit(d)` and `update(d)` as required, where the argument `d` is a single datum.

## See Also

* [Thinking with Joins](http://bost.ocks.org/mike/join/)

## License

MIT. See [LICENSE.md](http://github.com/hughsk/eue/blob/master/LICENSE.md) for details.
