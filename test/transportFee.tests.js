describe('transportFee', () => {
  it('should return R20 when given morning shift', () => {
    const result = transportFee('morning');
    assert.equal(result, 'R20');
  });

  it('should return R10 when given afternoon shift', () => {
    const result = transportFee('afternoon');
    assert.equal(result, 'R10');
  });

  it('should return free when given any other shift', () => {
    const result = transportFee('evening');
    assert.equal(result, 'free');
  });
});
