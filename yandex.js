var num = function(number){return function(obj){return obj ? obj.apply({number: number}) : number}}

var one = num(1); 
var two = num(2);
var three = num(3);
var four = num(4);
var five = num(5);
var six = num(6);
var seven = num(7);
var eight = num(8);
var nine = num(9);
var ten = num(10);

var times = function(val){return function helper() {return this.number * val}};
var plus = function(val){return function helper() {return this.number + val}};
var minus = function(val){return function helper() {return this.number - val}};
var divisionBy = function(val){return function helper() {return this.number / val}};

var test = {
   a: {
       b: {
           c: 'd'
       }
   }
}

var jpath = function(obj, path){
    path = path.split(',');
    var evalPath = ''i;
    path.forEach(function(v){evalPath += '["'+v+'"]'});
    return eval('obj'+evalPath)
}

jpath(test, 'a,b,c')
