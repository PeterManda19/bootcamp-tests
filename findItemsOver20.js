function findItemsOver20(objectList){
    var itemsOver20 = [];
    
    for(var i = 0; i < objectList.length; i++){
      if(objectList[i].qty > 20){
        itemsOver20.push(objectList[i]);
      }
    }
    return itemsOver20;
}
