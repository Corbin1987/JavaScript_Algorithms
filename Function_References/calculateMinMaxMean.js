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


/*
This function takes an array as its parameter and returns a JavaScript object
that contains the data of the minimum value, the maximum value, and the mean (average) value
from the provided array. The provided array must contain integers only.
*/

var calculateMinMaxMeanAnnotated = function (arrayToAnalyze) {

	/* Check the input to ensure that it is an array; if not, return an error. */
	if (!Array.isArray(arrayToAnalyze)) {
		throw new TypeError('Input is not an array.');
	}

	/* Set variable for the array length so that it is calculated only once and not with each iteration of the loop. */
	var arrayToAnalyzeLength = arrayToAnalyze.length;

	/* Check the array length to ensure that it is not empty and return an error if so;
	this avoids a null assignment of any data values. */
	if (arrayToAnalyzeLength == 0) {
		throw new Error('Input contains no data.');
	}

	/* Create an object to store data from the array. */
	var calculations = {};
	/* Set initial data for minimum and maximum to the first value of the array. */
	calculations.minimum = arrayToAnalyze[0];
	calculations.maximum = arrayToAnalyze[0];
	/* Set data for mean to 0; this will then be calculated in the following loop. */
	calculations.mean = 0;

	/* Start a loop through the values of the array. */
	for (var i = 0; i < arrayToAnalyzeLength; i ++) {

		/* At each index of the array, check that the value is an integer.
		If any value of the array is not an integer, throw an error. */
		if (isNaN(arrayToAnalyze[i])) {
			throw new Error('Array parameter must contain only integer values.');
		}

		/* At each index of the array, check the current value and compare to the existing minimum.
		If the current value is lower, set this as the minimum. */
		if (arrayToAnalyze[i] < calculations.minimum) {
			calculations.minimum = arrayToAnalyze[i];
		}

		/* At each index of the array, check the current value and compare to the existing maximum.
		If the current value is lower, set this as the minimum. */
		if (arrayToAnalyze[i] > calculations.maximum) {
			calculations.maximum = arrayToAnalyze[i];
		}

		/* Add each value of the array to the mean. */
		calculations.mean += arrayToAnalyze[i];

	}

	/* After completion of the loop, calculate the mean value by dividing the accumulated values of the
	array by the length of the array. */
	calculations.mode /= arrayToAnalyzeLength;

	/* Return an object that contains the 3 calculated values from the array. */
	return calculations;

};