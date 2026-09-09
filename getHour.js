// This function is for boys schedule
function getHour(row) {
  const hour = /שעור ([1-9])/.exec(row[0]);
  if (!hour)
    return null;
  return Number(hour[1]);
}
