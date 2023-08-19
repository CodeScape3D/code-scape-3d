import { newTrace, moveInHistoryRecord, createKey } from "./helpers";

export const InsertionSort = (nums) => {
	const stepHistory = newTrace(nums);

	moveInHistoryRecord(stepHistory, nums, [], [0], [], [], [], 0)
	for (let i = 1; i < nums.length; i++) {
		let value = nums[i];
		let hole = i;

		moveInHistoryRecord(stepHistory, nums, [], [i], [], [], [], 1);
		while (hole > 0 && nums[hole - 1] > value) {
			moveInHistoryRecord(stepHistory, nums, [], [hole], [hole - 1], [], [], 2);
			nums[hole] = nums[hole - 1];
			hole -= 1;

			moveInHistoryRecord(stepHistory, nums, [], [], [hole, hole + 1], [], [], 3);
		}

		moveInHistoryRecord(stepHistory, nums, [], [], [], [hole], [], 2);
		nums[hole] = value;

		moveInHistoryRecord(stepHistory, nums, [], [], [], [hole], [], 4);
	}

	moveInHistoryRecord(stepHistory, nums, [...Array(nums.length).keys()], [], [], [], [], 4);
	return stepHistory;
};

export const InsertionSortLegend = createKey("Comparing", "Swapping", "Overwrite");

export const InsertionSortCode = ({ codeRef }) => {
	return (
		<code ref={codeRef}>
			<pre>{`mark first element as sorted`}</pre>
			<pre>{`for each unsorted element X
	 'extract' the element X`}</pre>
			<pre>{`	for j = lastSortedIndex down to 0`}</pre>
			<pre>{`		if current element j > X
			move sorted element 
			to the right by 1`}</pre>
			<pre>{`		break loop and insert X here`}</pre>
		</code>
	)
}

