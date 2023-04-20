describe('countRegNumber', () => {
  it('should return 1 when given a string with 1 registration number', () => {
    const regNumbers = 'CA12345';
    const result = countRegNumber(regNumbers);
    assert.equal(result, 1);
  });

  it('should return 2 when given a string with 2 registration numbers separated by a comma', () => {
    const regNumbers = 'CA12345,NY67890';
    const result = countRegNumber(regNumbers);
    assert.equal(result, 2);
  });

  it('should return 0 when given an empty string', () => {
    const regNumbers = '';
    const result = countRegNumber(regNumbers);
    assert.equal(result, 0);
  });

  it('should handle whitespace around the registration numbers', () => {
    const regNumbers = 'CA12345, NY67890 , TX24680';
    const result = countRegNumber(regNumbers);
    assert.equal(result, 3);
  });
});
