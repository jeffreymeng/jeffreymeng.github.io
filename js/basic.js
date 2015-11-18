function hashWindow() { // if the following format is used: jeffreymeng.github.io/#O=soscrambler&END
	var hash1 = location.hash
	var links = {
		"soscrambler":"openso",
		"grindlessjs":"portfolioModal4"
	}
	var hash = hash1.substring(2, -4)
	if (hash.length > 7) {
		links[hash].click();


	}
}