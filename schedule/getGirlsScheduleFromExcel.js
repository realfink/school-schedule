function getGirlsSchedule() {
  const SOURCE_FOLDER_NAME = "מערכת בנות";
  const TARGET_SHEET_NAME = "מערכת בנות";
  iterateSourceSheets(SOURCE_FOLDER_NAME, TARGET_SHEET_NAME, processSheet);
}
