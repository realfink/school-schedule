function processTable(table, classNumber, targetSheet) {
  for (var r = 1; r < table.getNumRows(); r++) {
    var row = table.getRow(r);
    if (row.getNumCells() > 0) {
      var cell = row.getCell(0).getText();
      const hour = getHour(row.getCell(0).getText());
      if (hour) {
        for (var c = 1; c < row.getNumCells(); c++) {
          var cell = row.getCell(c).getText();
          var subjects = getSubjects(cell);
          const combinedValue = classNumber + ":" + getDayName(c-1) + ":" + hour;
          const writerow = [classNumber, getDayName(c-1), hour, combinedValue, subjects];
          targetSheet.appendRow(writerow);
        }
      }
    }
  }
}

function processDocument(sourceDocument, targetSheet) {
  var body = sourceDocument.getBody();
  var numChildren = body.getNumChildren();
  var currentClassNumber = "";

  for (var i = 0; i < numChildren; i++) {
    var child = body.getChild(i);
    var type = child.getType();

    switch (type) {
      case DocumentApp.ElementType.PARAGRAPH:
        var text = child.asParagraph().getText();
        classNumber = getClassNumber(text);
        if (classNumber) {
          currentClassNumber = classNumber;
          Logger.log("Processing class: " + classNumber)
        }
        break;
      case DocumentApp.ElementType.TABLE:
        var table = child.asTable();
        processTable(table, currentClassNumber, targetSheet);
        break;
      default:
        break;
    }
  }
}
