$(document).ready(function() {
  $("form#numberInput").submit(function(event){
  event.preventDefault();
  const userNumber = ($("input#userNumber").val());
  $(".mrRobogersResponse").text(mrRobogersResponse(userNumber));
  
  function mrRobogersResponse(userNumberInput) {
  let userArray = userNumberInput.split(" ");
  console.log(userArray)
  }
});
});