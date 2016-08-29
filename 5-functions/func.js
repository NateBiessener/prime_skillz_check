// 1 - Write a function declaration
// that takes no arguments and
// returns the value 4
function firstFunc(){
  return 4;
}
// 2 - Write a function declaration
// that takes two arguments and
// returns the value of the result
// of the multiplication of both
// arguments
function secondFunc(firstArg, secondArg){
  return firstArg * secondArg;
}
// 3 - Write a function expression
// that takes one argument and
// console logs that value.
var thirdFunc = function(onlyArg){
  console.log(onlyArg);
};
// 4 - Write a function declaration
// that takes a number and divides it
// by two.
function fourthFunc(onlyArg){
  //making the assumption that this should return the halved value, otherwise this would be a worthless function
  return onlyArg/2;
}
// 5 - Call the function from 4 and
// pass it into the function from 2 called with        //-- pass into it? must be...
// the arguments 10, 20. Console log the result.
fourthFunc(secondFunc(10,20));
