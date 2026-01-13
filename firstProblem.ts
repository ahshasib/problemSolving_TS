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
