const foo = ()=>{
    return 'foo'
}

async function bar(){
    const name = await foo()
    console.log(name);
}