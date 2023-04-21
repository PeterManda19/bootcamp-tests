describe('findItemsOver', function() {
  const itemList = [
    {name: 'apple', qty: 10},
    {name: 'pear', qty: 30},
    {name: 'banana', qty: 25},
    {name: 'orange', qty: 15}
  ];

  it('should return items over 20', function() {
    assert.equal(findItemsOver(itemList, 20), [{name: 'pear', qty: 30}, {name: 'banana', qty: 25}]);
  });

  it('should return items over 10', function() {
    assert.equal(findItemsOver(itemList, 10), [{name: 'apple', qty: 10}, {name: 'pear', qty: 30}, {name: 'banana', qty: 25}]);
  });

  it('should return an empty array when no items are over threshold', function() {
    assert.equal(findItemsOver(itemList, 50), []);
  });
});
