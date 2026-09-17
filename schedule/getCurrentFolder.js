function getCurrentFolder() {
  // 1. Get the ID of the active file (change SpreadsheetApp to DocumentApp/SlidesApp if needed)
  const fileId = SpreadsheetApp.getActiveSpreadsheet().getId();
  
  // 2. Access the file in Google Drive
  const file = DriveApp.getFileById(fileId);
  
  // 3. Get the parent folders iterator
  const parents = file.getParents();
  
  // 4. Retrieve the first parent folder
  if (parents.hasNext()) {
    const currentFolder = parents.next();
    Logger.log("Folder Name: " + currentFolder.getName());
    Logger.log("Folder ID: " + currentFolder.getId());
    return currentFolder;
  }
   // File is in root or has no parents
  return null;
}