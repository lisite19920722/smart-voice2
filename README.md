# smart-voice2
A smart app which can automatically recognize one's voice and tranfer it to written language.
Platform support android 6.1.2 and ios 4.3.1

## First Part
Ahead of all, run "npm install -g cordova ionic" and run "ionic start smart-voice2 --v2". Then, create a folder named 'www' in the project folder.

## Main Contents
1.Firstly, run "npm install" in the root directory of this project<br>
2.Afterwards, run "ionic platform add android" to obtain the capacity of android platform.<br>
&nbsp;run "ionic platform add ios" to obtain the capacity of ios platform<br>
3.At last, to add plugins, run "cordova plugin add cordova-plugin-tts", "cordova plugin add https://github.com/macdonst/SpeechRecognitionPlugin"
  and "cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-inappbrowser.git"<br>

## Last Part
Android:
By running "ionic build android --prod --release" and "ionic run android --prod", the app can be added to the mobile phone
iOS:
sudo chmod -R a+rwx /appfolder
By running "ionic build ios --prod" and "sudo ionic emulate ios --target="iPhone-7", the app can be emulated

### Notification
What's more, by configuring config.xml and run "ionic resources", the pictures named icon.png and splash.png in the "resources folder" can
produce more professional pictures in the resources/android folder.
The plugins folder should be copied to guarantee the splash runs correctly.
