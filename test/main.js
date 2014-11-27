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


})