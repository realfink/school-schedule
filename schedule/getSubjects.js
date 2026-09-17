var subjectList = null;
const RANGE_NAME = "SUBJECTS";
 
function getSubjectList() {
  var namedRange = SpreadsheetApp.getActiveSpreadsheet().getRangeByName(RANGE_NAME);
  subjectList = namedRange.getValues().flat();
}

function getSubjects(day) {
  if (!subjectList)
    getSubjectList();
  if (!day || day == "") {
    return("חופשי");
  }
  else {
    var subjectarray = subjectList.filter(word => day.includes(word));
    if (!subjectarray.length) {
      Logger.log("MISSING " + day);
      return("MISSING");
    }
    // If day includes חינוך גופני, this will return both חינוך and חינוך גופני, so remove חינוך from the array
    if (subjectarray.find(x => x == 'חינוך') && subjectarray.find(x => x == 'חינוך גופני'))
      subjectarray.splice(subjectarray.indexOf('חינוך'), 1);
    return(subjectarray.join("|"));
  }
}
