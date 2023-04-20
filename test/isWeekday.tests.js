describe('isWeekday', () => {
  it('should return true when given "Monday"', () => {
    const dayName = 'Monday';
    const result = isWeekday(dayName);
    assert.equal(result, true);
  });

  it('should return true when given "Tuesday"', () => {
    const dayName = 'Tuesday';
    const result = isWeekday(dayName);
    assert.equal(result, true);
  });

  it('should return true when given "Wednesday"', () => {
    const dayName = 'Wednesday';
    const result = isWeekday(dayName);
    assert.equal(result, true);
  });

  it('should return true when given "Thursday"', () => {
    const dayName = 'Thursday';
    const result = isWeekday(dayName);
    assert.equal(result, true);
  });

  it('should return true when given "Friday"', () => {
    const dayName = 'Friday';
    const result = isWeekday(dayName);
    assert.equal(result, true);
  });

  it('should return false when given "Saturday"', () => {
    const dayName = 'Saturday';
    const result = isWeekday(dayName);
    assert.equal(result, false);
  });

  it('should return false when given "Sunday"', () => {
    const dayName = 'Sunday';
    const result = isWeekday(dayName);
    assert.equal(result, false);
  });

  it('should be case-sensitive', () => {
    const dayName = 'monday';
    const result = isWeekday(dayName);
    assert.equal(result, false);
  });

  it('should handle whitespace around the day name', () => {
    const dayName = '  Monday  ';
    const result = isWeekday(dayName);
    assert.equal(result, true);
  });
});
