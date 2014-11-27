sorty
=====

Utility for sorting object arrays on multiple fields

## Install

```sh
$ npm install --save sorty
```

## Usage

```js
var sorty = require('sorty')

var arr = [
    {name: 'john', age: 20},
    {name: 'mary', age: 10},
    {name: 'bill', age: 40},
    {name: 'john', age: 100}
]

sorty([
    {name: 'name', dir: 'asc'},
    {name: 'age',  dir: 'desc', type: 'number'}
], arr)


//arr.should.eql(
[
    {name: 'bill', age: 40},
    {name: 'john', age: 100},
    {name: 'john', age: 20},
    {name: 'mary', age: 10}
]
//)
```

`sorty` returns the sorted array. Under the hoods, all it does is build a composed sort function, based on the given sort info, and call `array.sort` with that function.

You can specify a sort function in the sortInfo. **The sort function should always sort in ascending order!**. Actual sorting direction should be specified in the **dir** property.

### Sort info
Example of valid sort info:

```js
//an array
[
    //specify the type of values  - valid types: 'string' and 'number'
    { name: 'age', type: 'number'},
    { name: 'name', dir: 1 } //1 or asc (vs -1 or desc)
]

//an object - sort by only 1 property
{
    name: 'age'
}

//specify custom sort fn
[
    //since age may be string, but with numeric values, use a custom sort fn
    {name: 'age', fn: function(a, b){ return a * 1 - b * 1}, dir: 'desc' },
    {name: 'name', dir: 'asc'}
]
```

Valid sort types for now are:

 * 'string'
 * 'number'

The sort direction is specified in the **dir** property. Valid values are:

 * 1 (or 'asc')
 * -1 (or 'desc')

You can specify custom sort functions in the **fn** property. Those should always sort in ascending order!

## More examples

```js
var sorty = require('sorty')

var arr = [
    { age: '5', name: 'mary'},
    { age: '5', name: 'bob'},
    { age: '15', name: 'monica'},
    { age: '15', name: 'adam'}
]

sorty([
    {name: 'age', fn: function(a, b){ return a*1 - b * 1}, dir: 'desc' },
    {name: 'name', dir: 'asc'}
], arr)

arr.should.eql([
    { age: '15', name: 'adam'},
    { age: '15', name: 'monica'},
    { age: '5', name: 'bob'},
    { age: '5', name: 'mary'}
])
```

```js
var sorty = require('sorty')

var arr = [
    { age: '5', name: 'mary'},
    { age: '5', name: 'bob'},
    { age: '15', name: 'monica'},
    { age: '15', name: 'adam'}
]

sorty(
    {name: 'name', dir: 'asc'}
, arr)

arr.should.eql([
    { age: '15', name: 'adam'},
    { age: '5', name: 'bob'},
    { age: '5', name: 'mary'},
    { age: '15', name: 'monica'}
])
```