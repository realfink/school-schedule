function iterateSourceDocuments(sourceFolderName, targetSheetName, processDocument) {
  const folder = getCurrentFolder();

  const targetSheet = createTargetSheet(targetSheetName);
  
  const sourceFolder = getSubfolderByName(folder, sourceFolderName);
  // Choose your file type (use MimeType.GOOGLE_SHEETS or MimeType.MICROSOFT_EXCEL)
  const sourceFiles = sourceFolder.getFilesByType(MimeType.MICROSOFT_WORD);
  while (sourceFiles.hasNext()) {
    const sourceFile = sourceFiles.next();
        
    var resource = {
      title: 'Temp_' + sourceFile.getName(),
      mimeType: MimeType.GOOGLE_DOCS
    };
    
    try {
      // Create a temporary converted copy using the Advanced Drive Service or Drive API
      // Alternatively, insert file content into DocumentApp via conversion:
      var tempFile = Drive.Files.copy(resource, sourceFile.getId());
      var sourceDocument = DocumentApp.openById(tempFile.id);
    } catch (e) {
      Logger.log("Error processing " + sourceFile.getName() + ": " + e.toString());
    }

    if (sourceDocument) {      
      processDocument(sourceDocument, targetSheet);
      
      // Clean up the temporary Google Doc so it doesn't clutter your Drive
      DriveApp.getFileById(tempFile.id).setTrashed(true);
    }
  }

  Logger.log("Finished processing schedule!");
}
