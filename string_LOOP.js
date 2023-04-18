//Type Conversion
let a=23;
String(a);
let b=a.toString();
//a.toString() or String(a) create new string,a is int here
console.log(`value is ${typeof a}  ${typeof b} `);

let c='abcdse';
c=Number(c);
// same as for string 
console.log(c+typeof c);

// String
let s="HI I am Purushottam ";

// commom
console.log(s.indexOf("ind"));// -1 if Not else Fidx
console.log(s.lastIndexOf('m')); // -1 if Not else Lidx
console.log(s.charAt(-1).length); // it give nothing
console.log(s.endsWith("ttam ")); // bool check <- suffix
console.log(s.includes("am P")); // check in string

//special
// 1) substring
let des=s.substring(19,0);
des=s.substring(0,19);
// s.substring(x,y) ,it treat x<y always else swap
// [x,y)] return it
console.log(des);
console.log(s); // it proves string is immutable here


//2) slice
// not same as substring but begiiner same


// 3) split(x) 
// it split on basis of x as array and x won't be part of any list , list.length is Count(x)+1

console.log(s.split('am')); 


// 4) replace(x,y) x ko y se change
let k=s.replace('am','lofer'); // string is immutable again
console.log(k);
console.log(s);

// 5) s.length is length of string IMP () is not
// 6)  toLowerCase() , toUpperCase()


// 7) substr(x,y) -> start from x and read next y 

let d="abcd fredegnsjdsom;dsvmkjds vdskvmd";
let lof=d.substr(3,5);
console.log(lof);
console.log(d);

lof=d.substr(d.length-1,1);
console.log(lof);


//**************************************************** *//


console.log('12' !== 12);
// let ans=prompt("Type "); alert(ans) will alert on screen

let bfr=10;

switch(bfr){
  
    case 10 :
        console.log("Happy");
        // if remove break then will print all 
    case 20 :
        console.log("Sad");
       break;  // here it breaks
    default:
        console.log("JURD");
}
 
// Loops
for(let i=1;i<=44;i+=2){
    console.log(Math.random());
}

// do{

// }while(cond);







