function getHour(cell) {
  PATTERN = /^(?:שעור )?([0-9]{1,2})/
  const hour = PATTERN.exec(cell);
  if (!hour)
    return null;
  return Number(hour[1]);
}
