describe('totalPhoneBill', () => {
  it('should return R3.40 for one call and one sms', () => {
    const result = totalPhoneBill('call,sms');
    assert.equal(result, 'R3.40');
  });

  it('should return R2.75 for one call and no sms', () => {
    const result = totalPhoneBill('call');
    assert.equal(result, 'R2.75');
  });

  it('should return R0.65 for one sms and no calls', () => {
    const result = totalPhoneBill('sms');
    assert.equal(result, 'R0.65');
  });

  it('should return R0 for an empty string', () => {
    const result = totalPhoneBill('');
    assert.equal(result, 'R0.00');
  });
});
