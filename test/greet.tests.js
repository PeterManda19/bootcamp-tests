// Import the assert module from Node.js
//import { strictEqual } from 'assert';

// Import the greet function
//import greet from './path/to/greet.js';

// Describe the tests for the greet function
describe('greet', function() {
  // Test case 1: should return a greeting with the given name
  it('should return a greeting with the given name', function() {
    const result = greet('Alice');
    assert.equal(result, 'Hello, Alice');
  });

  // Test case 2: should return a greeting with an empty string if no name is provided
  it('should return a greeting with an empty string if no name is provided', function() {
    const result = greet('');
    assert.equal(result, 'Hello, ');
  });

  // Test case 3: should return a greeting with the provided name, even if it contains leading or trailing whitespace
  it('should return a greeting with the provided name, even if it contains leading or trailing whitespace', function() {
    const result = greet('  Bob  ');
    assert.deepEqual(result, 'Hello,   Bob  ');
  });
});
