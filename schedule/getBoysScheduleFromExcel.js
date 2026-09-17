function getBoysSchedule() {
  const SOURCE_FOLDER_NAME = "מערכת בנים";
  const TARGET_SHEET_NAME = "מערכת בנים";
  iterateSourceSheets(SOURCE_FOLDER_NAME, TARGET_SHEET_NAME, processBoysSheet);
}