var vowels = "AEIOUY"

var alphabet =("BCDFGHJKLMNPQRSTVWXYZ")



function chooseLetter1() {
  var letter1Pos = Math.floor(Math.random() * 21); var letter1 = alphabet.charAt(letter1Pos)
return letter1}

function chooseLetter2() {
  var letter2Pos = Math.floor(Math.random() * 6); var letter2 = vowels.charAt(letter2Pos)
return letter2}

function chooseLetter3() {
  var letter3Pos = Math.floor(Math.random() * 21); var letter3 = alphabet.charAt(letter3Pos)
return letter3}

function chooseLetter4() {
  var letter4Pos = Math.floor(Math.random() * 6); var letter4 = vowels.charAt(letter4Pos)
return letter4}

function generateWord() { document.getElementById("Wow").innerHTML = chooseLetter1() + chooseLetter2() + chooseLetter3() + chooseLetter4()}






function testWordThingy() {var Word = document.getElementsByTagName("P")[0].textContent;
 var Pie = document.createElement("LI"); var Waffle = document.createTextNode(Word);
                          Pie.appendChild(Waffle)
 document.getElementById("Deku").appendChild(Pie)}







