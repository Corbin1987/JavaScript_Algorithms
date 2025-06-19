var sortArrayAscending = function(arrayToSort) {

	if (!Array.isArray(arrayToSort)) {
		throw new TypeError('Input is not an array.');
	}

	var arrayToSortLength = arrayToSort.length;

	if (arrayToSortLength == 0) {
		throw new Error('Input contains no data.');
	}

	for (var i = 0; i < arrayToSortLength; i ++) {

		if (isNaN(arrayToSort[i])) {
			throw new Error('Array parameter must contain only integer values.');
		}

		for (var j = 0; j < arrayToSortLength; j ++) {

			if (arrayToSort[i] < arrayToSort[j]) {
				var ii = arrayToSort[i];
				var jj = arrayToSort[j]
				arrayToSort[i] = jj;
				arrayToSort[j] = ii;
			}

		}

	}

	return arrayToSort;

};