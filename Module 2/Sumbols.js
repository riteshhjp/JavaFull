let sym1 = Symbol();

let sym2 = Symbol('test'); // same description

let sym3 = Symbol('test');  // same description

console.log(sym2 === sym3);