function isWeekday(dayName){
    return dayName.endsWith("day") && (!dayName.startsWith("S"));
}
