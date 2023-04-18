function isFromCapeTown(regNumber) {
    if (typeof regNumber !== "string") {
      // If the input is not a string, return false.  
      return false; 
    }
    // Convert input to uppercase and check if it starts with "CA".
    return regNumber.toUpperCase().startsWith("CA"); 
}
