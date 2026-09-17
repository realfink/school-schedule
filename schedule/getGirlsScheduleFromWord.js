function getGirlsSchedule2() {
  const SOURCE_FOLDER_NAME = "מערכת בנות";
  const TARGET_SHEET_NAME = "מערכת בנות";
  iterateSourceDocuments(SOURCE_FOLDER_NAME, TARGET_SHEET_NAME, processDocument);
}