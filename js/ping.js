$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var entered=$("#input").val();
    var input= parseInt(entered);
    fax(input);
    output.forEach(function(input){
    $('#display').append("<li>"+input+"<li>");
});
  });
});
  var output=[];
  function fax(input){
  for (initial=1; initial<=input; initial++ ){
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
}
}
