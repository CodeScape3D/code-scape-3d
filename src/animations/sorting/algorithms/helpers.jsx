export const newTrace = (array) => {
	return [
		{
			array: [...array],
			firstSet: [],
			secondSet: [],
			thirdSet: [],
			fourthSet: [],
			sortedSet: [],
			currentIndex: null
		}
	];
};

export const moveInHistoryRecord = (
	stepHistory,
	array,
	sortedSet = [],
	firstSet = [],
	secondSet = [],
	thirdSet = [],
	fourthSet = [],
	currentIndex = null
) => {
	stepHistory.push({
		array: [...array],
		firstSet: [...firstSet],
		secondSet: [...secondSet],
		thirdSet: [...thirdSet],
		fourthSet: [...fourthSet],
		sortedSet: [...sortedSet],
		currentIndex: currentIndex
	});
};

export const lastSorted = (stepHistory) => {
	return stepHistory[stepHistory.length - 1].sortedSet;
};

export const swap = (array, i, j) => {
	const tmp = array[i];
	array[i] = array[j];
	array[j] = tmp;
};

export const createRange = (start, end) => {
	return [...Array(end - start).keys()].map((elem) => elem + start);
};

export const createKey = (firstSet, secondSet, thirdSet, fourthSet) => {
	return { firstSet, secondSet, thirdSet, fourthSet };
};
