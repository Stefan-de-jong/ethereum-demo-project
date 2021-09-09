const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); // Constructor instance, so capital W

// The new web3 instance needs a provider to communicate with a specific network
// This can be replaced by another provider when connection to another network (ganache is local test network)
const web3 = new Web3(ganache.provider());


// class Car {
//     park() {
//         return 'stopped';
//     }

//     drive() {
//         return 'vroom';
//     }
// }

// // The 'beforeEach' wil run before each 'it' statement
// // This way, we dont have to repeat the code of instantiating a new car
// let car;
// beforeEach(() => {
//     car = new Car();
// });

// // Describe is used to group together multiple 'it' statements
// // Each 'it' statement is a test, with an assertion
// describe('Car', () => {
//     it('can park', () => {        
//         assert.equal(car.park(), 'stopped');
//     });

//     it('can drive', () => {        
//         assert.equal(car.drive(), 'vroom');
//     });
// });