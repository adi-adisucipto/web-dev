// TRUTHY
console.log(Boolean("3"));
console.log(Boolean(50));
console.log(Boolean([]));

//FALSY
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

function greet(message){
    if(!message){
        return "Input tidak sesuai";
    } else {
        return message;
    }
    
}

console.log(greet())

// SHORT CIRCUITING && OPERATOR
console.log(false && "Operand Kanan jalan");

// SHORT CIRCUITING || OPERATOR
function showName(name) {
    const nama = name || "USER";
    return nama
}
console.log(showName("Budi"));