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
    if (userArray.includes("3") === true)
   


  }

  }
});
});