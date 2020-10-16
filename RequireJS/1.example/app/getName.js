define(function(require,exports,module){
    const names = require('./names')
    return function(){
        console.log('++ getName ++',names );
    }
})