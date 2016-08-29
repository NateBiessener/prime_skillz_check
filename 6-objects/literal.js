// 1 - Create an object literal
// named prime with the properties:
// - city
// - state
// - zip
// Assign the values based on Prime's
// address.
var prime = {
  city: 'Bloomington',
  state: 'MN',
  zip: '55421' //setting as a string since that is the most likely use-case
};
// 2 - Using dot notation, create a
// new property for prime. This property
// will be called address and will
// take the value of Prime's street
// address.
prime.address = '9401 James Ave S, Suite 152';
// 3 - Using dot notation, create a
// new method for prime. This method
// will console log out the complete
// address of prime. Call the new
// property/method print.
prime.print = function(){
  console.log(prime.address, '\n' + prime.city, prime.state, prime.zip);
};
prime.print();
