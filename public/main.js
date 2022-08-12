let NUMBER_OF_CHAR = 5;
let NUMBER_OF_WORDS = 5;

let gameDiv = document.getElementById("game");

for (let i = 0; i < NUMBER_OF_WORDS; i++) {
  let wordDiv = document.createElement("div");
  wordDiv.className = "word";

  for (let j = 0; j < NUMBER_OF_WORDS; j++) {
    let charDiv = document.createElement("div");
    charDiv.className = "letter";
    wordDiv.appendChild(charDiv);
  }

  gameDiv.appendChild(wordDiv);
}

let curWord = 0;
let curChar = 0;

document.addEventListener("keydown", async function (event) {
  let wordDiv = gameDiv.children[curWord];

if(event.code=="Backspace"){
let charToDel = wordDiv.children[curChar-1]
charToDel.innerHTML=""
curChar--;
}

else if(event.code=="Enter"){
if(curChar == NUMBER_OF_CHAR){
  console.log("you pressed enter");
  getcurrentWord();
  curWord++;
  curChar=0;
}
  }
else if(curChar<NUMBER_OF_CHAR){
  let charArr = wordDiv.children[curChar];
  charArr.innerHTML = event.key;
  curChar++;
}

function getcurrentWord(){
  let word ="";
  let wordDiv = gameDiv.children[curWord]; //current word
  for(let i=0; i< NUMBER_OF_CHAR; i++){
    let charDiv = wordDiv.children[i]; // ""=> "a"=> "ap" => "app"...
    word = word + charDiv.innerHTML
  }
  console.log(word);
}

});