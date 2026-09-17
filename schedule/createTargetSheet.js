const HEADER_ROW = [
  "מספר כיתה",
  "יום בשבוע",
  "שעה",
  "מספר כיתה:יום בשבוע:שעה",
  "נושא"
];

function createTargetSheet(targetSheetName) {
  const thisSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var targetSheet = thisSpreadsheet.getSheetByName(targetSheetName);
  if (targetSheet)
    thisSpreadsheet.deleteSheet(targetSheet);
  targetSheet = thisSpreadsheet.insertSheet(targetSheetName);
  targetSheet.setRightToLeft(true);
  targetSheet.appendRow(HEADER_ROW);
  targetSheet.setFrozenRows(1);
  return targetSheet;
}
