function log(value = 10) {  
  console.log(value);  
}  

log();         // 10 (default used)  
log(undefined); // 10 (default used)  
log(null);      // null (default NOT used)  
log(0);         // 0 (default NOT used)  


function multiply(a, b = a * 2) {  
  return a * b;  
}  

console.log(multiply(5)); // 5 * 10 = 50  