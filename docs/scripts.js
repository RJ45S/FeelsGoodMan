var wordNode = document.getElementById("randomWord");
var defNode = document.getElementById("wordDefinition");
var lastWord = -1;

var wordList = {
	"adorable": "inspiring great affection; delightful; charming",
	"alluring": "highly attractive, tempting or enchanting",
	"amazing": "causing great surprise or wonder",
	"appealing": "attractive or interesting",
	"arresting": "very attractive in a way that attracts a lot of attention",
	"astonishing": "extremely surprising or impressive; amazing",
	"attractive": "pleasing or appealing to look at",
	"awesome": "extremely impressive; inspiring great admiration,",
	"beautiful": "pleasing the senses or mind aesthetically",
	"bewitching": "enchanting or delightful",
	"breathtaking": "astonishing or awe-inspiring in quality, so as to take one's breath away",
	"captivating": "capable of attracting and holding interest; charming",
	"charming": "pleasant or attractive",
	"cute": "attractive in a pretty or endearing way",
	"dashing": "attractive, adventurous, and full of confidence",
	"dazzling": "extremely impressive; beautiful",
	"delightful": "causing delight; charming",
	"elegant": "pleasingly graceful and stylish in appearance",
	"enchanting": "delightfully charming or attractive",
	"enrapture": "give intense pleasure or joy to",
	"enthralling": "keeping someone's interest and attention completely",
	"exceptional": "unusually good; outstanding",
	"exhilarating": "making you feel very excited and happy",
	"extraordinary": "exceptional to a very marked extent",
	"fabulous": "amazingly good; wonderful",
	"fascinating": "extremely interesting",
	"fetching": "attractive, beautiful, catches people's interest",
	"gorgeous": "beautiful; very attractive",
	"heavenly": "very pleasing; wonderful",
	"incredible": "amazingly good or beautiful; impossible to believe",
	"lovely": "exquisitely beautiful",
	"magical": "beautiful or delightful in such a way as to seem removed from everyday life",
	"magnificent": "impressively beautiful, elaborate, or extravagant",
	"marvelous": "causing great wonder; extremely good or pleasing",
	"outstanding": "exceptionally good",
	"phenomenal": "very remarkable; extraordinary",
	"pretty": "attractive in a delicate way",
	"prodigious": "causing amazement or wonder",
	"radiant": "clearly emanating great joy, love, or health",
	"ravishing": "delightful; entrancing",
	"regal": "resembling, or fit for a monarch, especially in being magnificent or dignified",
	"remarkable": "worthy of attention; striking",
	"rousing": "giving rise to excitement",
	"sensational": "very good indeed; very impressive or attractive",
	"smashing": "excellent; wonderful",
	"splendid": "magnificent; very impressive",
	"striking": "attractive; impressive",
	"stunning": "extremely impressive or attractive",
	"sublime": "beauty as to inspire great admiration or awe",
	"swanky": "stylishly luxurious and expensive",
	"tempting": "appealing to or attracting someone, even if wrong or inadvisable",
	"terrific": "extremely good; excellent",
	"wonderful": "inspiring delight, pleasure, or admiration",
	"wondrous": "inspiring a feeling of wonder or delight; marvelous"
};

var generating = false;
var keys = Object.keys(wordList);
function generateWord() {
	// Only generate 1 word at a time
	if (generating)
		return;
	generating = true;
	
	var word = lastWord;
	// Avoid same word twice in a row
	while (word == lastWord) {
		word = Math.floor(Math.random() * keys.length);
	}
	
	if (document.getElementById("animCheck").checked) {
		wordNode.innerHTML = keys[word];
		defNode.innerHTML = wordList[keys[word]];
		generating = false;
		defNode.style.visibility = "visible";
		return;
	}
	
	defNode.style.visibility = "hidden";
	var randomFunc = setInterval(randomString, 70);
	
    setTimeout(function () {
		wordNode.innerHTML = keys[word];
		defNode.innerHTML = wordList[keys[word]];
		generating = false;
		clearInterval(randomFunc);
		defNode.style.visibility = "visible";
    }, 2000);
	lastWord = word;
}

function randomString() {
	var word = Math.floor(Math.random() * keys.length);
	wordNode.innerHTML = wordNode.innerHTML = keys[word];
}

generateWord();