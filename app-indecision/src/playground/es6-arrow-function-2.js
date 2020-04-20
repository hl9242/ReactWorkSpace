//arguments object - no longer bound with arrow functions 

const add =  (a , b) => {
    //console.log(arguments);
    return a + b ;
};
console.log(add(55 ,1));

//this keyword - no longer bound

const user = {
    name: 'Harish',
    cities:['Akola', 'Nanded','Bhokar'],
    printPlacesLived(){
        return this.cities.map((city) => this.name +' has leave in ' +city + '!' );  
        // this.cities.forEach( (city) => {
        //     console.log(this.name + 'has lived in ' + city);
        // });
    //return cityMessages;
    }
};

//console.log(user.printPlacesLived());

const multiplier = {
    number: [10,20,30],
    multiplyBy: 3,
    multiply(){
        return this.number.map((num) => this.multiplyBy * num);
    }
};
console.log(multiplier.multiply());