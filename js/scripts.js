$(document).ready(function() {
  $("form#numberInput").submit(function(event){
  event.preventDefault();
  const userNumber = parseInt($("input#userNumber").val());
  const result = mrRobogersResponse(userNumber); 
  $("#output").text(result);
  $("#output").append("<p>" + index + "</p>");
});
});


  function mrRobogersResponse(userNumber) {
  let countTo = [userNumber];
  let countBy = parseInt("1"); 
  let output = []; 
  for (let index = countBy; index <= countTo; index += countBy) {
    if (countTo.includes(3) === true) {
      output.push("Won't you be my neighbor?");  
    }else if (countTo.includes(2) === true) {
      output.push("Boop!");  
    }else if
    (countTo.includes(1) === true) {
      output.push("Beep!");  
    }else{
      output.push(index);
    }
    }
    return output
  }
