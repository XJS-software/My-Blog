const str = 'some string'

class Person {
    constructor(name, age){
        this.name = name 
        this.age = age 
    }

    say(){
        console.log('++ hello ++', this.name);
    }
}

const p = new Person('Bobe', 12) 

export {
    p,
    str
}