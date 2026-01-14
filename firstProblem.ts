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

interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

const myBook: Book = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publishedYear: 1925,
    isAvailable: true,
}

function printBookDetails (value:Book): void {
    const availability = value.isAvailable ? "Yes" : "No" ;
    console.log(`Title: ${value.title}, Author: ${value.author}, Published: ${value.publishedYear}, Available: ${availability}`)
}

printBookDetails(myBook);



// -----------------Problem 7 -----------------

function getUniqueValues(
    array1: (number | string)[],
    array2: (number | string)[]
  ): (number | string)[] {
  
    const result : (number | string)[] = [];

    function checkValue (value:number | string){
        for (let i = 0; i < result.length; i++){
            if(result[i] === value){
                return
            }
        }
        result.push(value);

    }

    for (let i = 0; i < array1.length; i++){
        checkValue(array1[i]);
    }
    
    for(let i = 0; i < array2.length; i++){
        checkValue(array2[i]);
    }

    return result;
}

// const array1 = [1, 2, 3, 4, 5];
// const array2 = [3, 4, 5, 6, 7];
// console.log(getUniqueValues(array1, array2));



// -----------------Problem 8 -----------------