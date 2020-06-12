$(document).ready(function() {
  $("form#numberInput").submit(function(event){
  event.preventDefault();
  const userNumber = ($("input#userNumber").val());
  
  $(".mrRobogersResponse").text(mrRobogersResponse(userNumber));
  
  
  function mrRobogersResponse(userNumberInput) {
  let userArray = userNumberInput.split('');
  console.log(userArray)
  console.log(userArray.includes("3"));

  for (i=0; i=userArray.length; i++){
    if (userArray.includes("3") === true){
    let mrRobogersResponse = "won't you be my neighbor?"
   console.log(mrRobogersResponse);
    return mrRobogersResponse;
   //$("#output").append("<li>" + mrRobogersResponse + "</li>");

    }else if
      ((userArray.includes("3") === false) && (userArray.includes("2") === true)){
      let mrRobogersResponse = "Boop!"
      console.log(mrRobogersResponse);
      return mrRobogersResponse;
      //$("#mrRobogersResponse").val(mrRobogersResponse);

    }else if
    ((userArray.includes("3") === false) && (userArray.includes("2") === false) && (userArray.includes("1") === true)) {
    let mrRobogersResponse = "Beep!"
    console.log(mrRobogersResponse);
    return mrRobogersResponse;

    }else if 
    ((userArray.includes("3") === false) && (userArray.includes("2") === false) && (userArray.includes("1") === false) && (userArray.includes("4") === true)) {
      let mrRobogersResponse = ["Beep!", "Boop!", "won't you be my neighbor?", 4];
      console.log(mrRobogersResponse);
      return mrRobogersResponse;

    }else if 
    ((userArray.includes("3") === false) && (userArray.includes("2") === false) && (userArray.includes("1") === false) && (userArray.includes("4") === false) && (userArray.includes("5") === true)) {
      let mrRobogersResponse = ["Beep!", "Boop!", "won't you be my neighbor?", 4, 5];
      console.log(mrRobogersResponse);
      return mrRobogersResponse;
    
    }else if 
    ((userArray.includes("3") === false) && (userArray.includes("2") === false) && (userArray.includes("1") === false) && (userArray.includes("4") === false) && (userArray.includes("5") === false) && (userArray.includes("6") === true)) {
      let mrRobogersResponse = ["Beep!", "Boop!", "won't you be my neighbor?", 4, 5, 6];
      console.log(mrRobogersResponse);
      return mrRobogersResponse;
    }else if 
    ((userArray.includes("3") === false) && (userArray.includes("2") === false) && (userArray.includes("1") === false) && (userArray.includes("4") === false) && (userArray.includes("5") === false) 
    && (userArray.includes("6") === false) && (userArray.includes("7") === true)) {
    let mrRobogersResponse = ["Beep!", "Boop!", "won't you be my neighbor?", 4, 5, 6, 7];
    console.log(mrRobogersResponse);
    return mrRobogersResponse;
    }else if 
    ((userArray.includes("3") === false) && (userArray.includes("2") === false) && (userArray.includes("1") === false) && (userArray.includes("4") === false) && (userArray.includes("5") === false) 
    && (userArray.includes("6") === false) && (userArray.includes("7") === false) && (userArray.includes("8") === true)) {
    let mrRobogersResponse = ["Beep!", "Boop!", "won't you be my neighbor?", 4, 5, 6, 7, 8];
    console.log(mrRobogersResponse);
    return mrRobogersResponse;
    }else if 
    ((userArray.includes("3") === false) && (userArray.includes("2") === false) && (userArray.includes("1") === false) && (userArray.includes("4") === false) && (userArray.includes("5") === false) 
    && (userArray.includes("6") === false) && (userArray.includes("7") === false) && (userArray.includes("8") === false) && (userArray.includes("9") === true)) {
    let mrRobogersResponse = ["Beep!", "Boop!", "won't you be my neighbor?", 4, 5, 6, 7, 8, 9];
    console.log(mrRobogersResponse);
    return mrRobogersResponse;
    }else if 
    ((userArray.includes("3") === false) && (userArray.includes("2") === false) && (userArray.includes("1") === false) && (userArray.includes("4") === false) && (userArray.includes("5") === false) 
    && (userArray.includes("6") === false) && (userArray.includes("7") === false) && (userArray.includes("8") === false) && (userArray.includes("9") === false) && (userArray.includes("10") === true)) {
    let mrRobogersResponse = ["Beep!", "Boop!", "won't you be my neighbor?", 4, 5, 6, 7, 8, 9, 10];
    console.log(mrRobogersResponse);
    return mrRobogersResponse;
    }



}
}   
});
});

//for let index= 0; index <= userFinalNumber.length; index ++