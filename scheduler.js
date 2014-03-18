// вариант номер один, использовать биндинг
function Scheduler() {
    this._i = 0;

    this.tick = function() {
        this._i++
    }.bind(this)
}

var scheduler = new Scheduler;
setInterval(scheduler.tick, 1000);

// вариант номер два, не использовать this
function Scheduler() {
    self = this
    self._i = 0;
}

Scheduler.prototype = {
    tick: function() {
        self._i++
    }
}

var scheduler = new Scheduler;
setInterval(scheduler.tick, 1000);

// вариант номер три, вызвать метов из контекста объекта
function Scheduler() {
    this._i = 0;
}

Scheduler.prototype = {
    tick: function() {
        this._i++
    }
}

var scheduler = new Scheduler
setInterval(function() {
    scheduler.tick
}, 1000)