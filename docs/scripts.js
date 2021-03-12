var wordNode = document.getElementById("randomWord");
var defNode = document.getElementById("wordDefinition");
var lastWord = -1;

var wordList = {
	"adorable": "nspiring great affection; delightful; charming",
	"alluring": "highly attractive, tempting or enchanting",
	"amazing": "causing great surprise or wonder",
	"astonishing": "extremely surprising or impressive; amazing",
	"attractive": "pleasing or appealing to look at",
	"awesome": "extremely impressive; inspiring great admiration,",
	"beautiful": "pleasing the senses or mind aesthetically",
	"breathtaking": "astonishing or awe-inspiring in quality, so as to take one's breath away",
	"captivating": "capable of attracting and holding interest; charming",
	"charming": "pleasant or attractive",
	"cute": "attractive in a pretty or endearing way",
	"delightful": "causing delight; charming",
	"enchanting": "delightfully charming or attractive",
	"exceptional": "unusually good; outstanding",
	"fabulous": "amazingly good; wonderful",
	"fetching": "attractive, beautiful, catches people's interest",
	"gorgeous": "beautiful; very attractive",
	"heavenly": "very pleasing; wonderful",
	"incredible": "amazingly good or beautiful; impossible to believe",
	"lovely": "exquisitely beautiful",
	"magical": "beautiful or delightful in such a way as to seem removed from everyday life",
	"magnificent": "impressively beautiful, elaborate, or extravagant",
	"marvelous": "causing great wonder; extremely good or pleasing",
	"outstanding": "exceptionally good",
	"pretty": "attractive in a delicate way",
	"radiant": "clearly emanating great joy, love, or health",
	"ravishing": "delightful; entrancing",
	"sensational": "very good indeed; very impressive or attractive",
	"smashing": "excellent; wonderful",
	"splendid": "magnificent; very impressive",
	"stunning": "extremely impressive or attractive",
	"sublime": "beauty as to inspire great admiration or awe",
	"terrific": "extremely good; excellent",
	"wonderful": "inspiring delight, pleasure, or admiration"
};

function generateWord() {
	var keys = Object.keys(wordList);
	var word = lastWord;
	// Avoid same word twice in a row
	while (word == lastWord) {
		word = Math.floor(Math.random() * keys.length);
	}
	
	wordNode.innerHTML = keys[word];
	defNode.innerHTML = wordList[keys[word]];
	lastWord = word;
}
generateWord();