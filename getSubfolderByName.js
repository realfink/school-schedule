function getSubfolderByName(parentFolder, targetName) {
  const folderMatches = parentFolder.getFoldersByName(targetName);
  
  if (folderMatches.hasNext()) {
    const targetFolder = folderMatches.next();
    Logger.log('Found folder ID: ' + targetFolder.getId());
    return targetFolder;
  } else {
    Logger.log('No subdirectory found with that name.');
    return null;
  }
}
