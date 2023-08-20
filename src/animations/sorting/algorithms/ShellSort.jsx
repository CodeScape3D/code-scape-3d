import { swap, newTrace, moveInHistoryRecord, createRange, createKey } from "./helpers";

export const ShellSort = (nums) => {
	const stepHistory = newTrace(nums);

	moveInHistoryRecord(stepHistory, nums, [], [], [], [], [], 0)
	for (let gap = Math.floor(nums.length / 2); gap > 0; gap = Math.floor(gap / 2)) {
		for (let j = gap; j < nums.length; j++) {
			for (let i = j - gap; i >= 0; i -= gap) {
				moveInHistoryRecord(stepHistory, nums, [], [i, i + gap], [], [], [], 1);
				if (nums[i + gap] < nums[i]) {
					moveInHistoryRecord(stepHistory, nums, [], [], [i, i + gap], [], [], 2);
					swap(nums, i, i + gap);
					moveInHistoryRecord(stepHistory, nums, [], [], [i, i + gap], [], [], 2);
				} else {
					moveInHistoryRecord(stepHistory, nums, [], [], [], [], [], 3);
					break;
				}
			}
		}
	}

	moveInHistoryRecord(stepHistory, nums, createRange(0, nums.length));
	return stepHistory;
};

export const ShellSortLegend = createKey("Comparing", "Swapping");

export const ShellSortCode = ({ codeRef }) => {
	return (
		<code ref={codeRef}>
			<pre>{`for (i = num/2; i>0; i = i/2) {
	for (j = i; j < num; j++) {
    	for(k = j-i; k >= 0; k = k-i) {`}</pre>
			<pre>{`			if (arr[k+i] < arr[k])`}</pre>
			<pre>{`				tmp = arr[k];
                arr[k] = arr[k+i];
                arr[k+i] = tmp;`}</pre>
			<pre>{`			else {
                    break;
                }`}</pre>

		</code>
	)
}
