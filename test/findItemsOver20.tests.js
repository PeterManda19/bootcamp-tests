describe('findItemsOver20', function() {
  it('should return items with quantity greater than 20', function() {
    const itemList = [      {name: 'apples', qty: 10},      {name: 'pears', qty: 25},      {name: 'bananas', qty: 15},      {name: 'grapes', qty: 30}    ];

    const result = findItemsOver20(itemList);

    assert.equal(result.length, 2);
    assert.deepEqual(result, [
      {name: 'pears', qty: 25},
      {name: 'grapes', qty: 30}
    ]);
  });

  it('should return an empty array if there are no items with quantity greater than 20', function() {
    const itemList = [      {name: 'apples', qty: 10},      {name: 'pears', qty: 15},      {name: 'bananas', qty: 20}    ];

    const result = findItemsOver20(itemList);

    assert.equal(result.length, 0);
    assert.deepEqual(result, []);
  });

  it('should return an empty array if the input is an empty array', function() {
    const itemList = [];

    const result = findItemsOver20(itemList);

    assert.equal(result.length, 0);
    assert.deepEqual(result, []);
  });
});
