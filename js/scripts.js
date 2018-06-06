$(function(){
  $("#form-one").submit(function(event){
    event.preventDefault();
    var original = $("#input").val();
    outputAnswer(translatePigLatin(original));
  });
});

function outputAnswer(tempString)
{
  $("#output").text(tempString);
}

function translatePigLatin(original)
{
  var originWordsArray = original.split(" ");
  originWordsArray.forEach(function(word){
    console.log(checkFirstLetter(word));
  });
}

function isVowel(character)
{
  character = character.toLowerCase();
  var bool = (compareTo(character,"a")  || compareTo(character,"e") || compareTo(character,"i") || compareTo(character,"o") || compareTo(character,"u"));
  return bool;

}

//Exists so there is no mistake with = sign makes sure your using three =.
function compareTo(one,two)
{
  return (one===two);
}

function checkFirstLetter(original)
{
  var originlength = original.length;
  //return original.charAt(0);
  if(isVowel(original.charAt(0)))
  {
    return "vowel";
  }
  else {
    return original;
  }
}
