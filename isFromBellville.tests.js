// Describe the tests for the isFromBellville function
describe("isFromBellville", function() {
    /**
     * Test whether the function returns true when given a string that starts with 'CY',
     * regardless of whether the characters after 'CY' include numbers, spaces, or hyphens.
     */
    it("should return true if given a string starting with 'CY'", function() {
      assert.equal(isFromBellville("CY123"), true);
      assert.equal(isFromBellville("CY 123"), true);
      assert.equal(isFromBellville("CY-123"), true);
    });
  
    /**
     * Test whether the function returns false when given a string that does not start with 'CY'.
     */
    it("should return false if given a string not starting with 'CY'", function() {
      assert.equal(isFromBellville("CA123"), false);
      assert.equal(isFromBellville("123CY"), false);
      assert.equal(isFromBellville("ZY123"), false);
    });
  
    /**
     * Test whether the function correctly handles input of varying case (i.e. uppercase, lowercase, and mixed case).
     */
    it("should handle input of varying case", function() {
      assert.equal(isFromBellville("cy123"), true);
      assert.equal(isFromBellville("cY-123"), true);
      assert.equal(isFromBellville("Cy123"), true);
      assert.equal(isFromBellville("C123"), false);
    });
  
    /**
     * Test whether the function returns false when given input that is not a string,
     * such as a number, array, object, or null.
     */
    it("should handle input that is not a string", function() {
      assert.equal(isFromBellville(123), false);
      assert.equal(isFromBellville(["CY123"]), false);
      assert.equal(isFromBellville({ number: "CY123" }), false);
      assert.equal(isFromBellville(null), false);
    });
  });
  