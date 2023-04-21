function isWeekday(dayName){
    const trimmedDayName = dayName.trim().toLowerCase();
    return trimmedDayName.endsWith("day") && (!trimmedDayName.startsWith("s"));
}
