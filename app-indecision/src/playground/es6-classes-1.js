
class Person{
   
    constructor(name='Anonymous'){
        this.name=name;
    }

    getGretting(){
        return `Hi . I am ${this.name}`
    }
}

const obj = new Person('Harish Lahane');
console.log(obj.getGretting());

const other = new Person();
console.log(other.getGretting());