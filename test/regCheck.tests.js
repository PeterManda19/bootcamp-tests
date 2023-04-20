describe('regCheck', () => {
  it('should return true when the vehicle registration number ends with the location indicator', () => {
    const vrnumber = 'AB1234NY';
    const locIndicator = 'NY';
    const result = regCheck(vrnumber, locIndicator);
    assert.equal(result, true);
  });

  it('should return false when the vehicle registration number does not end with the location indicator', () => {
    const vrnumber = 'AB1234NY';
    const locIndicator = 'LA';
    const result = regCheck(vrnumber, locIndicator);
    assert.equal(result, false);
  });

  it('should be case sensitive when checking the location indicator', () => {
    const vrnumber = 'AB1234ny';
    const locIndicator = 'NY';
    const result = regCheck(vrnumber, locIndicator);
    assert.equal(result, false);
  });

  it('should work with different vehicle registration number formats', () => {
    const vrnumber = 'ABC-123';
    const locIndicator = '123';
    const result = regCheck(vrnumber, locIndicator);
    assert.equal(result, true);
  });
});
