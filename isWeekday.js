function isWeekday(dayName){
    const trimmedDayName = dayName.trim();
    const validDaysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    
    if (!validDaysOfWeek.includes(trimmedDayName)) {
        return false;
    }

    return trimmedDayName.endsWith("day") && (!trimmedDayName.startsWith("S")) && (!trimmedDayName[0].toLowerCase());
}
