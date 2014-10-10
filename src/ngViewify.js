"use strict"
var fs = require('fs');
var htmlparser = require('htmlparser2');

function ngViewify() {
  if(process.argv.length > 2) {
    var parser = new htmlparser.Parser({
      onattribute: function (name, value){
        var startingText = name.substring(2,0);
        if(startingText === 'ng'){
          console.log(name);
        }
      },
      ontext: function(text){
         if(text.indexOf('{{') > 0 && text.indexOf('}}') > 0){
           console.log('found ng text: ' + text);
         }
      }
    });

    parser.write('<button ng-click="count = count + 1" ng-init="count=0" style="color:bold">Increment</button><span>count: {{count}}</span>');
  } else {
      console.log("Pass on a file name/path");
  }
}

exports.ngViewify = ngViewify;
