$(function(){
  $("#form-one").submit(function(event){
    event.preventDefault();
    var original = $("#input").val();
    outputAnswer(translatePigLatin(original));
  });
});

//Front End
function outputAnswer(tempString)
{
  $("#output").text(tempString);
}

//Back End
function translatePigLatin(original)
{
  var originWords = original.split(" ");
  for(var index = 0; index < originWords.length; index++)
  {
    originWords[index] = stepVowel(originWords[index]);
  }
  var output = originWords.join(" ");
  return output;
}

function stepConsonant(word)
{
  //var boolIsY = isY(word.charAt(0));
}

function stepVowel(word)
{
  if(isVowel(word.charAt(0)))
  {
    return (word += "way");
  }
  else
  {
    return word;
  }
}

function isVowel(character)
{
  var vowels = ["a","e","i","o","u"];
  character = character.toLowerCase();
  var boolIsVowel = false;
  vowels.forEach(function(vowel){
    if(character === vowel)
    {
      boolIsVowel = true;
    }
  });
  return boolIsVowel;
}

function isY(character)
{
  character = character.toLowerCase();
  return (character === "y");
}

function isConsonant(character)
{
  return (!isVowel(character));
}
