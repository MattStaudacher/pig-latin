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

    // console.log("Character: "+firstCharacter);
    if(isVowel(firstCharacter))
    {
      //Beginning character of word is a vowel run function stepVowel
      // console.log("Vowel Branch: " + word);
      word = stepVowel(word);
    }
    else if(isConsonent(firstCharacter)||isY(firstCharacter))
    {
      //Beginning character of word is a consonant run function stepConsonant
      // console.log("Consonant Branch: " + word);
      word = stepConsonant(word);
    }
    else {

    }
    originWords[index] = word;
  }
  var output = originWords.join(" ");
  return output;
}

function stepConsonant(word)
{
  var compareWord = word.toLowerCase();
  var specialFound = false;
  var savedChar = "";
  var savedLoc = 0;

  if(compareWord.charAt(0)==="q" &&  compareWord.charAt(1)==="u")
  {
    specialFound = true;
    word = replaceAt(word,1,"b");
    savedChar = "u";
    savedLoc = 1;
  }
  else if(compareWord.charAt(0)==="y")
  {
    specialFound = true;
    word = replaceAt(word,0,"b");
    savedChar = "y";
    savedLoc = 0;
  }



  var vowel = findSeperationVowel(word);
  var modifiedWords = word.split(vowel);

  var shiftCharacters = modifiedWords.shift();
  //replace the b with a u if saveChar is not blank
  if(specialFound)
  {
    shiftCharacters = replaceAt(shiftCharacters,savedLoc,savedChar);
  }

  modifiedWords.unshift(" ");
  var tempString = modifiedWords.pop();
  tempString += (shiftCharacters + "ay");
  modifiedWords.push(tempString);
  var modifiedWord = modifiedWords.join(vowel);
  return modifiedWord;
}

function replaceAt(word,point,replaceWith)
{
  var tempWords = word.split("");
  //replace u with a character that isn't a vowel
  tempWords[point] = replaceWith;
  return (tempWords.join(""));
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

function isConsonent(character)
{
  var consonents = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x"];
  character = character.toLowerCase();
  var boolIsConsonent = false;
  consonents.forEach(function(consonent){
    if(character === consonent)
    {
      boolIsConsonent = true;
    }
  });
  return boolIsConsonent;
}

function isY(character)
{
  character = character.toLowerCase();
  return (character==="y");
}
