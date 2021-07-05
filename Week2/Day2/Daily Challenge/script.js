let sentence="The movie is not that bad, I like it";

let wordNot = sentence.indexOf("not");
let wordBad = sentence.indexOf("bad");


if(wordBad > wordNot && wordNot != -1){
  let a = sentence.substring(wordNot, wordBad + 3);
  let newSentence = sentence.replace(a, "good");
  console.log(newSentence);

}else{
  console.log(sentence)
}
