describe('test all', function(){

    var sorty = require('../index')

    it('should sort simple array', function(){
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

        arr.should.eql([
            {name: 'bill', age: 40},
            {name: 'john', age: 100},
            {name: 'john', age: 20},
            {name: 'mary', age: 10}
        ])
    })

    it('should sort with custom fn', function(){
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
    })

    it('should sort with sort info as object', function(){
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
    })


})