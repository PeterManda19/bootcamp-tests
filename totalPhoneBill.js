function totalPhoneBill(callsNsms){
  var callsNsmsList = callsNsms.split(",");
  var callsCount = 0;
  var smsCount = 0;
  
  for(var i = 0; i < callsNsmsList.length; i++){
    if(callsNsmsList[i].trim().endsWith("l")){
      callsCount++;
   }
    else if(callsNsmsList[i].trim().endsWith("s")){
      smsCount++;
   }
  }
  
  var callsCost = callsCount * 2.75;
  var smsCost = smsCount * 0.65;
  var totalCost = callsCost + smsCost;
  
  return "R" + totalCost.toFixed(2);
}
