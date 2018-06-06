$(function(){
  $("#form-one").submit(function(event){
    event.preventDefault();
    var original = $("#input").val();
    outputAnswer(original);


  });
});

function outputAnswer(tempString)
{
  $("#output").text(tempString);
}
