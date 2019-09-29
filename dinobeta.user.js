// ==UserScript==
// @name         Chrome Dino Plus
// @namespace    overhax.ml
// @version      0.1
// @description  Chrome dino hack
// @author       You
// @match        https://theguy3ds.github.io/CHROME-DINO-ONLINE-HACK/
// @match        chrome://dino
// @grant        none
// ==/UserScript==
// check boxes
document.getElementById("main-content").innerHTML ='<input type="checkbox" id="myCheck" name="Speedhack">Speedhack';
document.getElementById("main-content7").innerHTML ='<input type="checkbox" id="myCheck1" name="Godmode">Godmode';

//Speedhack
document.getElementById('myCheck').addEventListener('click', () => {
var checkBox = document.getElementById("myCheck");

  // Get checked state
  if (checkBox.checked == true){
      Runner.instance_.setSpeed(1000)
  } else {
      //Try to restore speed in game
      Runner.instance_.setSpeed(5)
  }
});
//Godmode
// Store orignal version
var original = Runner.prototype.gameOver
document.getElementById('myCheck1').addEventListener('click', () => {
var checkBox = document.getElementById("myCheck1");

  // Get checked state
  if (checkBox.checked == true){
      Runner.prototype.gameOver = function(){}
  } else {
      Runner.prototype.gameOver = original
  }
});

