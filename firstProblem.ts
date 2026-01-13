// -----------------Problem 1 ---------------

function formatValue(data : string | number | boolean): string | number | boolean {
if (typeof data === "string"){
    return data.toUpperCase();
}
else if (typeof data === "number"){
    return data * 10;
}
else if ( typeof data === "boolean"){
    return !data;
}

throw new Error("Invalid type");

}

// -----------------Problem 2 ---------------

function getLength (value: string | any[]) : number {
if (typeof value === "string"){
    return value.length;
}    
else if(Array.isArray(value)){
    return value.length
}
else{
    return 0
}
}


// -----------------Problem 3 ---------------
class Person {
    name : string
    age : number

    constructor(name : string, age : number){
        this.name = name;
        this.age = age;
    }
    getDetails(){
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

const person1 = new Person('John Doe', 30);
console.log(person1.getDetails());

const person2 = new Person('Alice', 25);
console.log(person2.getDetails());