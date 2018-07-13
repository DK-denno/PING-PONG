$(document).ready(function(){

  $("form").submit(function(event){
    event.preventDefault();
    $('#display').empty();

  });
  for (var initial=1; initial<= No; initial++ ){
    if(initial % 15===0) {
      output.push("pingpong");
      }
      else if (initial % 5===0) {
      output.push("pong");
      }
       else if (initial % 3===0) {
      output.push("ping");
      }
      else{
      output.push(initial);
      }
      console.log(No);
      //return no;
    }

});
});
