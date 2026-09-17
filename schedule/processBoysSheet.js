function processBoysSheet(sourceSheet, targetSheet) {
  var data = sourceSheet.getDataRange().getValues();
  var currentClassNumber = null;

  data.forEach(row => {
    classNumber = getClassNumber(row);
    if (classNumber) {
      currentClassNumber = classNumber;
      Logger.log("Processing class: " + classNumber)
    }
    const hour = getHour(row);
    if (hour) {
      for (var i=1; i<=6; i++) {
        if (row[i]) {
          var subjects = getSubjects(row[i]);
          const combinedValue = currentClassNumber + ":" + getDayName(i-1) + ":" + hour;
          const writerow = [currentClassNumber, getDayName(i-1), hour, combinedValue, subjects];
          targetSheet.appendRow(writerow);
        }
      }
    }
  });

}