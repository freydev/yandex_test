var smartReduce = function(array) {
    return array.reduceRight(function(prev, curr) {
        var obj = {}; obj[curr] = prev;
        return obj
    })
}

var source = 'a.b.c.d'
var result = smartReduce(source.split('.')) // {a: {b: {c: 'd'}}}
