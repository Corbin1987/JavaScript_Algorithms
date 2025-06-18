var calculateMinMaxMean = function (arrayToAnalyze) {

	if (!Array.isArray(arrayToAnalyze)) {
		throw new TypeError('Input is not an array.');
	}

	var arrayToAnalyzeLength = arrayToAnalyze.length;

	if (arrayToAnalyzeLength == 0) {
		throw new Error('Input contains no data.');
	}

	var calculations = {};
	calculations.minimum = arrayToAnalyze[0];
	calculations.maximum = arrayToAnalyze[0];
	calculations.mean = 0;

	for (var i = 0; i < arrayToAnalyzeLength; i ++) {

		if (isNaN(arrayToAnalyze[i])) {
			throw new Error('Array parameter must contain only integer values.');
		}

		if (arrayToAnalyze[i] < calculations.minimum) {
			calculations.minimum = arrayToAnalyze[i];
		}

		if (arrayToAnalyze[i] > calculations.maximum) {
			calculations.maximum = arrayToAnalyze[i];
		}

		calculations.mean += arrayToAnalyze[i];

	}

	calculations.mode /= arrayToAnalyzeLength;

	return calculations;

};