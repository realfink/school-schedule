function iterateSourceSheets(sourceFolderName, targetSheetName, processSheet) {
  const folder = getCurrentFolder();

  const targetSheet = createTargetSheet(targetSheetName);
  
  const sourceFolder = getSubfolderByName(folder, sourceFolderName);
  // Choose your file type (use MimeType.GOOGLE_SHEETS or MimeType.MICROSOFT_EXCEL)
  const sourceFiles = sourceFolder.getFilesByType(MimeType.MICROSOFT_EXCEL);
  while (sourceFiles.hasNext()) {
    const sourceFile = sourceFiles.next();
        
    const sourceSpreadsheet = SpreadsheetApp.openById(sourceFile.getId());
    const sourceSheets = sourceSpreadsheet.getSheets();

    sourceSheets.forEach(sourceSheet => processSheet(sourceSheet, targetSheet));
  }

  Logger.log("Finished processing schedule!");
}
