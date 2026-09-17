function checkHour(classarray, dayname, hour, schedule, prohibitedSubjects) {
  var prohibited = false;
  classarray.forEach(className => {
    const subject = scheduleLookup(schedule, className, dayname, hour);
    if (prohibitedSubjects.flat().includes(subject))
      prohibited = true;
  })
  return !prohibited;
}
