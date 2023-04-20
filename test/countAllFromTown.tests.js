describe('countAllFromTown', function() {

  it('should count all registration numbers from town CJ', function() {
    assert.equal(countAllFromTown('CJ 1234, CA 2345, CY 3456, CJ 4567', 'CJ'), 2);
  });

  it('should return 0 if there are no registration numbers from the specified town', function() {
    assert.equal(countAllFromTown('CA 1234, CY 2345, CJ 3456', 'GP'), 0);
  });

  it('should handle whitespace before and after registration numbers', function() {
    assert.equal(countAllFromTown('  CJ 1234,  CA 2345,  CJ 3456  ', 'CJ'), 2);
  });

  it('should handle mixed-case registration numbers', function() {
    assert.equal(countAllFromTown('CJ 1234, cA 2345, cy 3456, cJ 4567', 'cJ'), 2);
  });
  
});
