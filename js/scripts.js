$(document).ready(function(){
  const sentenceInput = prompt("Enter a sentence: ")
  console.log(sentenceInput)
  function constructSentence(letter1, letter2, sentence) {
    return sentence + letter2 + letter1;
  }
  function newSentence(sentence){
    firstLetter = sentence.slice(0,1).toUpperCase();
    lastLetter = sentence.slice(sentence.length - 1).toUpperCase();
    return constructSentence(firstLetter, lastLetter, sentence);
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
    const output = counting(sentenceInput) + newSentence(sentenceInput)
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
