$(document).ready(function() {
  $("form#numberInput").submit(function(event){
  event.preventDefault();
  const userNumber = parseInt($("input#userNumber").val());
  const result = mrRobogersResponse(userNumber);
  
  $("#output").text(result);
});
});



  
  
  function mrRobogersResponse(userNumber) {
  let userInteger = [userNumber];
  console.log(userInteger)
  for (i=0; i=userInteger; i++){
    if (userInteger.includes(3) === true){
    let mrRobogersResponse = "Won't you be my neighbor?"
    console.log(mrRobogersResponse);

    }else if (userInteger.includes(2) === true) {
      let mrRobogersResponse = "Boop!"
    console.log(mrRobogersResponse);

    }else if
    (userInteger.includes(1) === true) {
    let mrRobogersResponse = "Beep!"
    console.log(mrRobogersResponse);

    }else{
      let counter = parseInt("1");
      for (i=0; i=userInteger; i = counter){
        console.log(userInteger)
        let mrRobogersResponse = [i];
        //return mrRobogersResponse
        
      }
    }

  }
  return mrRobogersResponse;
  }



