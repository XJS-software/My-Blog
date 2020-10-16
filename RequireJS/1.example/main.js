requirejs.config({
    baseUrl: './lib',
    paths: {
        app: '../app'
    }
})

requirejs(['add','app/say'],function(add,say){
    console.log('add: ', add);
    console.log('say: ', say);
    typeof say === 'function' && say()
    say.names
    console.log('say.names: ', say.names);
    say.getName()
})

