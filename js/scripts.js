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
    var word = originWords[index];
    var firstCharacter = word.charAt(0).toString();
    //console.log("Character: "+firstCharacter);
    if(!isNaN(parseInt(firstCharacter)))
    {
      //Must be a number
      //Don't Change anything
      // console.log("Number Branch: " + word);
    }
    else if(isVowel(firstCharacter))
    {
      //Beginning character of word is a vowel run function stepVowel
      // console.log("Vowel Branch: " + word);
      word = stepVowel(word);
    }
    else
    {
      //Beginning character of word is a consonant run function stepConsonant
      // console.log("Consonant Branch: " + word);
      word = stepConsonant(word);
    }
    originWords[index] = word;
  }
  var output = originWords.join(" ");
  return output;
}

function stepConsonant(word)
{
  //var boolIsY = isY(word.charAt(0));
  var vowel = findSeperationVowel(word);
  console.log(vowel)
  var modifiedWords = word.split(vowel);
  console.log(modifiedWords);
  return word;
}


function stepVowel(word)
{
  return (word += "way");
}

function findSeperationVowel(word)
{
  var vowels = ["a","e","i","o","u","y","A","E","I","O","U","Y"];
  //character = character.toLowerCase();
  var seperator = word.length;
  var charaterSeperator = "";
  vowels.forEach(function(vowel)
  {
    var index = word.indexOf(vowel);
    if(index <= seperator && (index != -1))
    {
      seperator = index;
      charaterSeperator = vowel;
    }
  });
  return charaterSeperator;
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
