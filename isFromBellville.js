function isFromBellville(vrnumber) {
  // Check if vrnumber is a string
  if (typeof vrnumber !== "string") {
    return false;
  }

  // Convert vrnumber to uppercase to handle input of varying case
  vrnumber = vrnumber.toUpperCase();

  // Check if vrnumber starts with 'CY'
  return vrnumber.startsWith("CY");
}
