function myFunction() {
  const classes = "ג1|ג2";
  const dayname = "שלישי";
  const schedule = [
    ["ג1:שלישי:1", "אסור"],
    ["ג1:שלישי:2", "מותר"],
    ["ג1:שלישי:3", "אסור"],
    ["ג1:שלישי:4", "מותר"],
    ["ג1:שלישי:5", "מותר"],
    ["ג1:שלישי:6", "אסור"],
    ["ג1:שלישי:7", "אסור"],
  ];
  const prohibited_subjects = [
    ["אסור"]
  ];
  Logger.log("AVAILABLE_HOURS " + AVAILABLE_HOURS(classes, dayname, schedule, prohibited_subjects));
}
