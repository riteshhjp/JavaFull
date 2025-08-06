let n1 = Number.MAX_SAFE_INTEGER;

let n2 = Number.MAX_SAFE_INTEGER;

console.log(n1+1 === n1+2); //precision loss

console.log(n1);

let n3 = 9007199254740991n; // decleraing bigInt at the at the last of the number
console.log(n3 + 2n === n3 + 3n); // no precision loss