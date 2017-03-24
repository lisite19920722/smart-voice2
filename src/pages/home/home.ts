import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { Platform } from 'ionic-angular';

declare var SpeechRecognition: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {

  myIcon: string = "ios-mic";

  text: string;

  constructor(public platform: Platform, private tts: TextToSpeech, public navCtrl: NavController) {

  }

  sayText=function(){
    try {
      this.tts.speak(this.text);
      console.log("successfully spoke" + this.text);
    } catch(e) {
      console.log(e);
    }
  }

  recognition: any;

  recognizedText: string = "";

  SpeechToText=function (){
    alert(123);
  }

  open_win = function() {
    window.open("https://www.baidu.com/s?wd=" + this.recognizedText);
    alert(this.data.speechText);
  };

}



// .controller('AppCtrl', function($scope) {
//   //Text to Speech
//   $scope.data = {
//     speechText: ''
//   };
//   $scope.speakText = function() {
//     TTS.speak({
//            text: $scope.data.speechText,
//            locale: 'en-GB',
//            rate: 1.5
//        }, function () {
//            // Do Something after success
//        }, function (reason) {
//            // Handle the error case
//        });
//   };
//   //Speech to Text
//   $scope.recognizedText = '';
//   $scope.record = function() {
//     var recognition = new SpeechRecognition();
//     recognition.onresult = function(event) {
//         if (event.results.length > 0) {
//             $scope.recognizedText = event.results[0][0].transcript;
//             $scope.$apply()
//         }
//     };
//     recognition.start();
//   };

//   $scope.open_win = function() {
//       window.open("https://www.baidu.com/s?wd=" + $scope.recognizedText);
//   };
// });
