
class Person{
   
    constructor(name='Anonymous',age = 0){
        this.name=name;
        this.age=age;
    }

    getGreetting(){
        return `Hi . I am ${this.name}!`
    }

    getDiscription(name,age){
        return `${this.name} is ${this.age} year(s) old.`
     }
}

class Student extends Person{

    constructor(name, age, majer){
        super(name, age);
        this.majer=majer;
    }
    hasmajer(){
        return !!this.majer;
    }   
    getDiscription(){
        let description = super.getDiscription();

        if(this.hasmajer()){
            description +=` their major is ${this.majer}.`;
        }
        return description;
    }     
}

class Traveler extends Person{
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation=homeLocation;
    }

    getGreetting(){
        let greeting = super.getGreetting()

        if(this.homeLocation){
            greeting += `I am visiting from ${this.homeLocation}.`
        }

        return greeting;
    }
}

// const obj = new Person('Harish Lahane',28);
// console.log(obj.getDiscription());

// const other = new Person();
// console.log(other.getDiscription());

// const obj = new Student('Harish Lahane', 28, 'Computer Science');
// console.log(obj.getDiscription());

// const other = new Student();
// console.log(other.getDiscription());

const obj = new Traveler('Harish Lahane', 28, 'Maharashtra');
console.log(obj.getGreetting());

const other = new Traveler(undefined,undefined,'nowhere');
console.log(other.getGreetting());