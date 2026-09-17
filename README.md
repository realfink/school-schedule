# school-schedule

These scripts are Google App Scripts to create a consolidated school schedule based on Microsoft Excel files. There is a script for the boys school (getBoysSchedule)
and for the girls school (getGirlsSchedule).

- The boys school script assumes that in the "מערכת בנים" subdirectory, there is a single Microsoft Excel file with the schedule for all the classes.
- The girls school script assumes that in the "מערכת בנות" subdirectory, there are multiple Microsoft Excel files with each file containing a single sheet with the schedule.
Each sheet name is the class name.

The script "iterateSourceSheets" sets up the target sheet in the spreadsheet that contains the scripts, and iterates over all the sheets in all the files the source directory.
One of the parameters is a function that actually pulls the data out.

The output is a sheet in the target spreadsheet that contains all the subjects for each hour of the week for each class. This table can easily be looked-up to find the subjects
being taught when a student wants to take a music course.

This script assumes that there is a named range ("SUBJECTS") in the target directory with the names of all the subjects in a single column.

When the scripts are run, if there is text in a hour's cell but none of the text matches the list of subjects, it will set the subject to "MISSING" and also log that as an error.
