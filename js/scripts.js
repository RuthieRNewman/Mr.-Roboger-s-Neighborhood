$(document).ready(function() {
  $("form#userInput").submit(function(event){
  event.preventDefault();
  const userNumber = parseInt($("input#userNumber").val());
  const mrRobogersResponse = toMrRoboger(userNumber)
  
  function toMrRoboger(userNumber) {
    userNumberArray = userNumber.split("");
    console.log(userNumberArray)  
  } 
  


  });
});






















/*
form id="numberInput"
input id="userNumber"
div id="mrRobogersResponse"
*/