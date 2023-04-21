function isWeekday(dayName) {
    const trimmedDayName = dayName.trim();
    return trimmedDayName.endsWith("day") && trimmedDayName[0].toUpperCase() !== "S";
}
  