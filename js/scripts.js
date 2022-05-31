$(document).ready(function(){

  const sentenceInput = prompt("Enter a sentence: ")
  console.log(sentenceInput)

  function constructSentence(str, sentence) {
    return sentence + str;
  }

  function newSentence(sentence){
    firstLetter = sentence.slice(0,1).toUpperCase();
    lastLetter = sentence.slice(sentence.length - 1).toUpperCase();
    return firstLetter + lastLetter;
  }

  function counting(sentence){
    const long = sentence.length/2;
    return sentence.slice(long, long + 1);
  } 

  function reverseString1(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
  }

  function popUp(){
    const output = counting(sentenceInput) + constructSentence(newSentence(sentenceInput), sentenceInput)
    newOutput = reverseString1(output);
  }

  popUp()

  $("h1").click(function() {
    alert(sentenceInput);
  });

  $("img").click(function() {
    alert(newOutput);
  });
  
});
