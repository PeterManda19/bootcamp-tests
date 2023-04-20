describe('fromWhere', () => {
  it('should return Bellville when given a regNumber starting with CY', () => {
    const result = fromWhere('CY123456');
    assert.equal(result, 'Bellville');
  });

  it('should return Paarl when given a regNumber starting with CJ', () => {
    const result = fromWhere('CJ123456');
    assert.equal(result, 'Paarl');
  });

  it('should return Cape Town when given a regNumber starting with CA', () => {
    const result = fromWhere('CA123456');
    assert.equal(result, 'Cape Town');
  });

  it('should return Some other place! when given a regNumber that does not start with CY, CJ, or CA', () => {
    const result = fromWhere('AA123456');
    assert.equal(result, 'Some other place!');
  });
});
