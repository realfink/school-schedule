function processSheet(sourceSheet, targetSheet) {
  var data = sourceSheet.getDataRange().getValues();
  var classNumber = sourceSheet.getName();
  Logger.log("Processing class: " + classNumber)

  data.slice(3).forEach(row => {
    var daycount=0;
    row.slice(1).forEach(day => {
      const subjects = getSubjects(day );
      const dayName = data[2][daycount+1];
      const hour = row[0];
      const combinedValue = classNumber + ":" + dayName + ":" + hour;
      targetSheet.appendRow([classNumber, dayName, hour, combinedValue, subjects]);
      daycount++;
    });
  });
}
