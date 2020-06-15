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

    }else {
      let userArrayJoined = userArray.join(); 
      
      console.log(userArrayJoined);
      let userInteger = parseInt(userArrayJoined);
      
      console.log(userInteger);
      return userInteger;

      function integerOutput(userInteger){
        const countUpToUserInteger = []; 
        for (const i=0; i=userInteger.length; i+=1) {
        
          countUpToUserInteger = (i++)
          console.log(countUpToUserInteger);


      }
    }
    }
  }
}