$(document).ready(function(){
  $("form#play").click(function(event){
    event.preventDefault();
    $('#display').empty();
  }
}

var No=parseInt($("form#input").val());
var output=[];
for (var initial=1; initial<= No; initial++ );{
  if(index % 15===0) {
    output.push("pingpong");
    }
    else if (index % 5===0) {
    output.push("pong");
    }
     else if (index % 3===0) {
    output.push("ping");
    }
    else{
    output.push("index");
    }
