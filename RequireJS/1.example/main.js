requirejs.config({
    baseUrl: 'lib',
    paths: {
        app: '../app'
    }
})

requirejs(['add','app/say'],function(add,say){
    console.log('add: ', add);
    console.log('say: ', say);
})

