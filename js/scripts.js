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
   $('#outputNumber').val(mrRobogersResponse);

    }else if
      ((userArray.includes("3") === false) && (userArray.includes("2") === true)){
      let mrRobogersResponse = "Boop!"
      console.log(mrRobogersResponse);
      return mrRobogersResponse;
      $('#outputNumber').val(mrRobogersResponse);

    }else if
    ((userArray.includes("3") === false) && (userArray.includes("2") === false) && (userArray.includes("1") === true)) {
    let mrRobogersResponse = "Beep!"
    console.log(mrRobogersResponse);
    return mrRobogersResponse;
  }
}
  }
  });
});