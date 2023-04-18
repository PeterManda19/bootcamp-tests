// Describes the tests for the sFromCapeTown function

describe("isFromCapeTown", function() {
    /**
     * Test whether the function returns true when given a string that starts with 'CA',
     * regardless of whether the characters after 'CA' include numbers, spaces, or hyphens.
     */
    it("should return true if given a string starting with 'CA'", function() {
      assert.equal(isFromCapeTown("CA123"), true);
      assert.equal(isFromCapeTown("CA 123"), true);
      assert.equal(isFromCapeTown("CA-123"), true);
    });
  
    /**
     * Test whether the function returns false when given a string that does not start with 'CA'.
     */
    it("should return false if given a string not starting with 'CA'", function() {
      assert.equal(isFromCapeTown("CY123"), false);
      assert.equal(isFromCapeTown("GP123"), false);
      assert.equal(isFromCapeTown("ZY123"), false);
    });
  
    /**
     * Test whether the function correctly handles input of varying case (i.e. uppercase, lowercase, and mixed case).
     */
    it("should handle input of varying case", function() {
      assert.equal(isFromCapeTown("ca123"), true);
      assert.equal(isFromCapeTown("cA-123"), true);
      assert.equal(isFromCapeTown("Ca123"), true);
      assert.equal(isFromCapeTown("C123"), false);
    });
  
    /**
     * Test whether the function returns false when given input that is not a string,
     * such as a number, array, object, or null.
     */
    it("should handle input that is not a string", function() {
      assert.equal(isFromCapeTown(123), true);
      assert.equal(isFromCapeTown(["CA123"]), false);
      assert.equal(isFromCapeTown({ number: "CA123" }), false);
      assert.equal(isFromCapeTown(null), false);
    });
  });
  