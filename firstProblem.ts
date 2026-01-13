// -----------------Problem 1 -----------------

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

// -----------------Problem 2 -----------------

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


// -----------------Problem 3 -----------------

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

// -----------------Problem 4 -----------------

type Item = {
title : string;
rating : number;
}

function filterByRating (items:Item[]){
return items.filter(item => item.rating >= 4);
}

// const books = [
//     { title: 'Book A', rating: 4.5 },
//     { title: 'Book B', rating: 3.2 },
//     { title: 'Book C', rating: 5.0 },
//   ];
  
//   console.log(filterByRating(books));



// -----------------Problem 5 -----------------

type Data = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}

function filterActiveUsers (allData: Data[]):Data[]{
    return allData.filter(data => data.isActive === true);
}

// const users = [
//     { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
//     { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
//     { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
//   ];
  
//   console.log(filterActiveUsers(users));


// -----------------Problem 6 -----------------

