function countAllFromTown(regNos, locIndicator){
    var regNosList = regNos.split(',');
    var allFromTownList = [];
    
    for(var i = 0; i < regNosList.length; i++){
      
      if(regNosList[i].trim().startsWith(locIndicator)){
        allFromTownList.push(regNosList[i].trim());
      }
    }return allFromTownList.length; 
}
