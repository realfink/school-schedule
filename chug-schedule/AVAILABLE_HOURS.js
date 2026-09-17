/**
 * Given a day, returns the hours that all the classes can leave for music tutoring.
 *
 * @param {string} classes The classes to be checked, separated by "|"
 * @param {string} dayname The name of the day in Hebrew, i.e. ראשון, שני
 * @param {array} schedule The weekly schedule of the entire school
 * @param {array} prohibitedSubjects An array of all the subjects where students cannot be taken out of class
 * @return {string} The school hours where students can be taken out of class.
 * @customfunction
 */
function AVAILABLE_HOURS(classes, dayname, schedule, prohibitedSubjects) {
  const classarray = classes.split('|');
  availableHours = [];
  for (var hour = 1; hour <=8; hour++) {
    if (checkHour(classarray, dayname, hour, schedule, prohibitedSubjects))
      availableHours.push(hour);
  }
  return availableHours.join(",");
}
