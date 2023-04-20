function transportFee(shift){
    let cost = "";
    
    switch (shift){
      case "morning":
            cost = "R20";
            break;
      case "afternoon":
            cost = "R10";
            break;      
      default:
            cost = "free";
            break;      
    }
    return cost;        
}
