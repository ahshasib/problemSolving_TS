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




