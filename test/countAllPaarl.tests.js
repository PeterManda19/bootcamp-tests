describe('countAllPaarl', () => {
  it('should return 3 for "CJ 123, CJ 456, CJ 789"', () => {
    const result = countAllPaarl('CJ 123, CJ 456, CJ 789');
    assert.equal(result, 3);
  });

  it('should return 1 for "CJ 555"', () => {
    const result = countAllPaarl('CJ 555');
    assert.equal(result, 1);
  });

  it('should return 0 for "CA 123, CY 789"', () => {
    const result = countAllPaarl('CA 123, CY 789');
    assert.equal(result, 0);
  });

  it('should return 0 for an empty string', () => {
    const result = countAllPaarl('');
    assert.equal(result, 0);
  });
});
