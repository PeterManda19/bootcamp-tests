function isFromCapeTown(vrnumber){
    if (typeof vrnumber !== "string") {
        return false;
    }
    return vrnumber.startsWith("CA");
};
