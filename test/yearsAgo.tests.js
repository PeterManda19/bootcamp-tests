describe('yearsAgo', () => {
  it('should return 0 when given the current year', () => {
    const currentYear = new Date().getFullYear();
    const result = yearsAgo(currentYear);
    assert.equal(result, 0);
  });

  it('should return 1 when given last year', () => {
    const lastYear = new Date().getFullYear() - 1;
    const result = yearsAgo(lastYear);
    assert.equal(result, 1);
  });

  it('should return the correct number of years ago', () => {
    const year = 1995;
    const result = yearsAgo(year);
    assert.equal(result, new Date().getFullYear() - year);
  });
});
