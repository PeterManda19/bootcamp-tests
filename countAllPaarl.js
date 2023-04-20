function countAllPaarl(regNos){
    var regNosList = regNos.split(", ");
    var allPaarlList = [];
    
    for(var i = 0; i < regNosList.length; i++){
   
      if(regNosList[i].startsWith("CJ")){
        allPaarlList.push(regNosList[i]);
      }
    }
    return allPaarlList.length; 
}
