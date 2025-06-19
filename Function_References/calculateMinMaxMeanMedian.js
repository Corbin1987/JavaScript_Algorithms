var calculateMinMaxMeanMedian = function (arrayToAnalyze) {

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
	calculations.median = 0;

	for (var i = 0; i < arrayToAnalyzeLength; i ++) {

		if (arrayToAnalyze[i] < calculations.minimum) {
			calculations.minimum = arrayToAnalyze[i];
		}

		if (arrayToAnalyze[i] > calculations.maximum) {
			calculations.maximum = arrayToAnalyze[i];
		}

		calculations.mean += arrayToAnalyze[i];

		for (var j = 0; j < arrayToAnalyzeLength; j ++) {

			if (arrayToAnalyze[i] > arrayToAnalyze[j]) {
				var ii = arrayToSort[i];
				var jj = arrayToSort[j];
				arrayToAnalyze[i] = arrayToAnalyze[j];
				arrayToAnalyze[j] = arrayToAnalyze[i];
			}

		}

	}

	calculations.mode /= arrayToAnalyzeLength;

 	var middle = 0;

	if (arrayToAnalyzeLength % 2 = 0) {
		middle = (arrayToAnalyzeLength / 2);
		calculations.median = arrayToAnalyze[middle] - ((arrayToAnalyze[middle + 1] - arrayToAnalyze[middle]) / 2);
	} else if (arrayToAnalyzeLength % 2 != 0) {
		middle = (arrayToAnalyzeLength / 2) + 0.5;
		calculations.median = arrayToAnalyze[middle];
	}

	return calculations;
};