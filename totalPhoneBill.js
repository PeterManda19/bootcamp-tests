function totalPhoneBill(callsNsms){
    var callsNsmsList = callsNsms.split(",");
    var callsList = [];
    var smsList = [];
    
    for(var i = 0; i < callsNsmsList.length; i++){
      if( callsNsmsList[i].endsWith("l") ){
        callsList.push(callsNsmsList[i]);
     }
      else if( callsNsmsList[i].endsWith("s") ){
        smsList.push(callsNsmsList[i]);
     }
    }
    return "R" + parseFloat( 
      (callsList.length * 2.75) + (smsList.length * 0.65) 
    ).toFixed(2);
}
