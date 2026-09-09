// This function is for boys schedule
function getClassNumber(row) {
  const classNumber = /מערכת שעות לכיתה ([ג-ח]) - ([1-5])/.exec(row[0]);
  if (!classNumber)
    return null;
  return classNumber[1] + classNumber[2];
}
