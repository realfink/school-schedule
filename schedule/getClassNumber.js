function getClassNumber(cell) {
  MATCH_REGEX = /מערכת שעות (?:עבור|לכיתה) ([ג-ח])[\s-]*([1-5])/
  var classNumber = MATCH_REGEX.exec(cell);
  if (!classNumber) {
    classNumber = /מערכת שעות עבור ([ג-ח]) ?- ?([1-5])/.exec(cell);
    return null;
  }
  return classNumber[1] + classNumber[2];
}
