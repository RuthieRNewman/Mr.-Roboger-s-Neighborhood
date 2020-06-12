$(document).ready(function() {
  $("form#numberInput").submit(function(event){
  event.preventDefault();
  const userNumber = ($("input#userNumber").val());
  const result = mrRobogersResponse(userNumber);
  $("#output").text(result);
});
});


  
  function mrRobogersResponse(userNumberInput) {
  let userArray = userNumberInput.split('');
  

  for (i=0; i=userArray.length; i++){
    if (userArray.includes("3") === true){
    let mrRobogersResponse = "Won't you be my neighbor?"
    return mrRobogersResponse;

    }else if
      ((userArray.includes("3") === false) && (userArray.includes("2") === true)){
      let mrRobogersResponse = "Boop!"
      return mrRobogersResponse;

    }else if
    ((userArray.includes("3") === false) && (userArray.includes("2") === false) && (userArray.includes("1") === true)) {
    let mrRobogersResponse = "Beep!"
    return mrRobogersResponse;

    }else if 
    ((userArray.includes("3") === false) && (userArray.includes("2") === false) && (userArray.includes("1") === false) && (userArray.includes("4") === true)) {
      let mrRobogersResponse = ["Beep!" , "Boop!", "Won't you be my neighbor?", 4];
      mrRobogersResponseJoined = mrRobogersResponse.join(', ');
      return mrRobogersResponseJoined;

    }else if 
    ((userArray.includes("3") === false) && (userArray.includes("2") === false) && (userArray.includes("1") === false) && (userArray.includes("4") === false) && (userArray.includes("5") === true)) {
      let mrRobogersResponse = ["Beep!", "Boop!", "Won't you be my neighbor?", 4, 5];
      mrRobogersResponseJoined = mrRobogersResponse.join(', ');
      return mrRobogersResponseJoined;
    
    }else if 
    ((userArray.includes("3") === false) && (userArray.includes("2") === false) && (userArray.includes("1") === false) && (userArray.includes("4") === false) && (userArray.includes("5") === false) && (userArray.includes("6") === true)) {
      let mrRobogersResponse = ["Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6];
      return mrRobogersResponseJoined;
    
    }else if 
    ((userArray.includes("3") === false) && (userArray.includes("2") === false) && (userArray.includes("1") === false) && (userArray.includes("4") === false) && (userArray.includes("5") === false) 
    && (userArray.includes("6") === false) && (userArray.includes("7") === true)) {
    let mrRobogersResponse = ["Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7];
    mrRobogersResponseJoined = mrRobogersResponse.join(', ');
    return mrRobogersResponseJoined;
    
    }else if 
    ((userArray.includes("3") === false) && (userArray.includes("2") === false) && (userArray.includes("1") === false) && (userArray.includes("4") === false) && (userArray.includes("5") === false) 
    && (userArray.includes("6") === false) && (userArray.includes("7") === false) && (userArray.includes("8") === true)) {
    let mrRobogersResponse = ["Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8];
    mrRobogersResponseJoined = mrRobogersResponse.join(', ');
    return mrRobogersResponseJoined;

    }else if  
    ((userArray.includes("3") === false) && (userArray.includes("2") === false) && (userArray.includes("1") === false) && (userArray.includes("4") === false) && (userArray.includes("5") === false) 
    && (userArray.includes("6") === false) && (userArray.includes("7") === false) && (userArray.includes("8") === false) && (userArray.includes("9") === true)) {
    let mrRobogersResponse = ["Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9];
    mrRobogersResponseJoined = mrRobogersResponse.join(', ');
    return mrRobogersResponseJoined;
    
    }
  }   
  }   
