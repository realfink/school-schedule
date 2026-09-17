function scheduleLookup(schedule, className, day, hour) {
  const element = schedule.find(element => element[0] === className + ":" + day + ":" + hour);
  if (element)
    return element[1];
  return "חופשי";
}
