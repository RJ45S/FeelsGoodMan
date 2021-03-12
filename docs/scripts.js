var textNode = document.getElementById("randomWord");

var wordList = [
	"alluring",
	"beautiful",
	"radiant"
];

function generateWord() {
	textNode.innerHTML = wordList[Math.floor(Math.random() * wordList.length)];
}
generateWord();