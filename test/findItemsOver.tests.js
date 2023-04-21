describe('findItemsOver' , function(){
  it('should return items over 20' , function(){
      assert.deepEqual(findItemsOver([
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 3},
      ], 20), [{name : 'pears', qty : 37}, {name : 'bananas', qty : 27}]);
  });
  
  it('should return items over 10' , function(){
      assert.deepEqual(findItemsOver([
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 5},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 3},
      ], 10), [{name : 'bananas', qty : 27}]);
  });
  
  it('should return an empty array when no items are over threshold' , function(){
      assert.deepEqual(findItemsOver([
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 5},
        {name : 'bananas', qty : 7},
        {name : 'apples', qty : 3},
      ], 20), []);
  });
});
