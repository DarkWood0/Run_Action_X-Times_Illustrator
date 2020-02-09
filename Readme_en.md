# Run Action X Times for Adobe Illustrator

[![N|Solid](https://i.ibb.co/StfjjfN/dw-yt-bt-02.png)](https://www.youtube.com/channel/UCcNCvF0Hp54pje8v8AheDbQ)

This script allows you to run selected action the specified number of times. The scope is limited only by your imagination.

# Running script

Open file "Run_Action_X_Times.jsx". Click on the "Raw" button. A separate page with script source code opens. Save it in a convenient place. Copy downloaded file to the folder ```C:\Program Files\Adobe\Adobe Illustrator XX\Presets\en_US\Scripts```, where XX is version of program. After that, script can be launched with command File> Scripts> Run_Action_X_Times.

# How it works

After running script opens a dialog box with three text fields.

![N|Solid](https://i.ibb.co/mTtCrZL/2020-02-09-110846.png)

First write the full name of the action you want to execute. If it is not in the standard set, then in the second field, enter the name of the desired set of actions. By default, a standard set is specified here. And finally, in the third field, specify the number of action launches.

When all data is specified, press the "Run" button or just Enter on the keyboard. Selected action will be launched a specified number of times.

An example for a standard rotation action of a selected object:

![N|Solid](https://i.ibb.co/WpDVzG6/Run-Action-X-Times-Illustrator.gif)

If you often run actions not from the standard set, then change its name in the source code of script. To update the data, you will need to restart program if it was open at that moment.

The script was tested on versions of Illustrator CS6 (64 bit) and CC 2019 (23.0.1).

### Thanks

**Stephen_A_Marsh** for [a similar script for Adobe Photoshop](https://forums.adobe.com/thread/2649334), which prompted me to write this version for Illustrator.
**Joonas Pääkkö** for [Script UI Dialog Builder](https://scriptui.joonas.me/).