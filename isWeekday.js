function isWeekday(dayName){
    const trimmedDayName = dayName.trim();
    return trimmedDayName.endsWith("day") && (!trimmedDayName.startsWith("S")) && (!trimmedDayName[0].toLowerCase());
}
