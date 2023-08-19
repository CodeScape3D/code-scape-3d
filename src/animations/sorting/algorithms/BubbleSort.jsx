import { swap, newTrace, moveInHistoryRecord, lastSorted, createKey } from "./helpers";

export const BubbleSort = (nums) => {
	const stepHistory = newTrace(nums);

	moveInHistoryRecord(stepHistory, nums, [], [], [], [], [], 1);
	for (let i = 0; i < nums.length; i++) {
		for (let j = 0; j < nums.length - i - 1; j++) {
			moveInHistoryRecord(stepHistory, nums, lastSorted(stepHistory), [j, j + 1], [], [], [], 2);
			if (nums[j] > nums[j + 1]) {
				swap(nums, j, j + 1);

				moveInHistoryRecord(stepHistory, nums, lastSorted(stepHistory), [], [j, j + 1], [], [], 3);
			}
		}

		moveInHistoryRecord(stepHistory, nums, [...lastSorted(stepHistory), nums.length - 1 - i], [], [], [], [], 4);
	}

	return stepHistory;
};

export const BubbleSortLegend = createKey("Comparing", "Swapping");

export const BubbleSortCode = ({ codeRef }) => {
	return (
		<code ref={codeRef}>
			<pre>{`do`}</pre>
			<pre>{`  swapped = falso
  for i = 1 to lastUnsortedIndex - 1`}</pre>
			<pre>{`    if left > right`}</pre>
			<pre>{`      swap(left, right)
      swapped = true; swapCounter++`}</pre>
			<pre>{`while swapped`}</pre>
		</code>
	)
}


