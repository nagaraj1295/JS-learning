// number data type
let pi = 3.14;
let prime = 345;
console.log(pi, prime);
console.log(typeof pi,typeof prime);

let infi = Infinity;
let ngo = -Infinity;
console.log(infi,ngo);
console.log(typeof infi,typeof ngo);

let temp = NaN;
console.log(temp);
console.log(typeof temp);

let sum = pi + prime;
console.log(sum);

// BigInt

// 2**53 -1 = 9007199254740991

let limit = 9007199254740991n;

console.log(limit+1n);
console.log(limit+2n);
console.log(limit+3n);


// task

let bignum = 12345678910n;
console.log(bignum+2024n);