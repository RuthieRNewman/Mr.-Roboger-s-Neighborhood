$(document).ready(function() {
  $("form#numberInput").submit(function(event){
  event.preventDefault();
  const userNumber = parseInt($("input#userNumber").val());
  const result = mrRobogersResponse(userNumber);
  
  $("#output").text(result);
});
});

  function mrRobogersResponse(userNumber) {
  let countTo = [userNumber];
  let countBy = parseInt("1");  

  console.log(countTo)
  for (index = countBy; index <= countTo; index += countBy) {
    if (countTo.includes(3) === true) {
     let mrRobogersResponse = "Wont you be my neighbor?"

    }else if (countTo.includes(2) === true) {
      let mrRobogersResponse = "Boop!"
    console.log(mrRobogersResponse);

    }else if
    (countTo.includes(1) === true) {
    let mrRobogersResponse = "Beep!"
    console.log(mrRobogersResponse);

    }else{
      console.log(index);
      $("#output").append("<p>" + index + "</p>");
     }
    }
  }





