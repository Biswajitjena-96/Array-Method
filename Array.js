// programming with Array helper methods
/*1-write a program using foreach()To find the sum of all the numbers in an array of numbers.*/

let sum = 0;
const numbers = [3,7,2, 8,9,23,45];
numbers.forEach(function addsum(value) {
    sum = sum + value ;
}) ;
document.write(sum); // op- 97

/*2-write a program using foreach() */

var cricketplayer = ["dhoni", "virat","Yubaraj","rania" ,"Bmura"];
cricketplayer.forEach(playername);
function playername(value,index) {
    document.write(value + "<br>");
}
/*1-using map() find square of a array */
let numbers = [1, 4, 9] ;
let roots = numbers.map((num) =>{
    return Math.sqrt(num) ; 
  }) ;
console.log(roots);
/*2-using map() find  creates a new array containing the newly reformatted objects. */
let kvArray = [{key: 1, value: 10}, 
    {key: 2, value: 20}, 
    {key: 3, value: 30}] ;

let reformattedArray = kvArray.map((obj) =>{
let rObj = {}
rObj[obj.key] = obj.value
return rObj ;
}) ;
console.log(reformattedArray);// programming with Array helper methods
/* 3-Array.prototype.filter() find candidate is eligible for voting or not ?*/
 function canVote(age) {
  return age >= 18
 }
function takekage()  {
var agelist = [ 23 , 15 ,74,13] ;
 agelist.filter(canVote);
 console.log(agelist);
}
takekage ();
/* 4-Array.prototype.filter() find the positive number in array ?*/
function isPositive(value) {
    return value > 0;
}

function func() {
    var filtered = [112, 52, 0, -1, 944].filter(isPositive);
    document.write(filtered);
}
func();
// programming with Array helper methods
/*1-Array.prototype.toString() */
function func()  { 
    // Original array 
    var language = ["java" ,"php","c#","c++"]; 
    // Creating a string 
    var str = language.toString(); 
    console.log(str); 
} 
func() ;
/*2-Array.prototype.toString() */
const array1 = [1, 2, 'a', '1a'];
console.log(array1.toString());

// Array.prototype.some()
let dark = [
    100,
    90,
    80,
  ];
  
  console.log(dark.some(x => x > 90));
// 1-Array.prototype.reverse()
function func()   { 
    var arr = ['Portal', 'Science',  
               'Computer', 'Arts']; 
    document.write(arr);   
    // Reversed array 
    var new_arr = arr.reverse(); 
    document.write("<br>"); 
    document.write(new_arr); 
} 
func();
// 2-Array.prototype.reverse()
function func() { 
  
    // Original Array 
    var arr = [34, 234, 567, 4]; 
    document.write(arr); 
  
    // Reversed array 
    var new_arr = arr.reverse(); 
    document.write("<br>"); 
    document.write(new_arr); 
} 
func(); 
// 1-Array.prototype.reduce()
let ename = ["c","h","i","k"];
let res = ename.reduce((a,b) => a+b);
console.log(res);

// 1-Array.prototype.reduceRight()
let ressult1 = [10,23,45,78];
let resnew1 = ressult1.reduceRight( (a,b) => {
    return a+b ;
}) ;
console.log(resnew1) ;


