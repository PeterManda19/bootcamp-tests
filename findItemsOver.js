function findItemsOver(objectList, threshold){
    var itemsOverThreshold = [];
    
    for(var i = 0; i < objectList.length; i++){
      if(objectList[i].qty > threshold){
        itemsOverThreshold.push(objectList[i]);
      }
    }
    return itemsOverThreshold;
}
