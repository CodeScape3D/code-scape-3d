import { useTranslation } from "react-i18next";
import { swap, newTrace, moveInHistoryRecord, lastSorted, createKey } from "./helpers";

export const SelectionSort = (nums) => {
	const stepHistory = newTrace(nums);

	for (let i = 0; i < nums.length - 1; i++) {
		let minIndex = i;
		moveInHistoryRecord(stepHistory, nums, lastSorted(stepHistory), [], [], [], [], 0);

		for (let j = i + 1; j < nums.length; j++) {
			moveInHistoryRecord(stepHistory, nums, lastSorted(stepHistory), [minIndex, j], [], [], [], 1);

			if (nums[j] < nums[minIndex]) {
				moveInHistoryRecord(stepHistory, nums, lastSorted(stepHistory), [minIndex], [j], [], [], 2);
				minIndex = j;
				moveInHistoryRecord(stepHistory, nums, lastSorted(stepHistory), [minIndex], [j], [], [], 2);
			}
		}

		moveInHistoryRecord(stepHistory, nums, lastSorted(stepHistory), [], [i, minIndex], [], [], 3);

		swap(nums, i, minIndex);

		moveInHistoryRecord(stepHistory, nums, [...lastSorted(stepHistory), i], [], [], [], [], 3);
	}

	moveInHistoryRecord(stepHistory, nums, [...lastSorted(stepHistory), nums.length - 1]);

	return stepHistory;
};

export const SelectionSortLegend = createKey("Comparing", "Swapping");

/*


	  

		  

	swap minimum with first unsorted position
*/

export const SelectionSortCode = ({ codeRef }) => {
	return (
		<code ref={codeRef}>
			<pre>{`repeat (numOfElements - 1) times
	set the first unsorted element as the minimum
	for each of the unsorted elements`}</pre>
			<pre>{`		if element < currentMinimum`}</pre>
			<pre>{`			set element as new minimum`}</pre>
			<pre>{`	swap minimum with first unsorted position`}</pre>
		</code>
	)
}

export const SelectionSortInfo = () => {

	const { t } = useTranslation()

	return (
		<ul className="list-disc list-inside text-sm">
			<li className="mb-2">
				<span className="font-semibold">{ t("howWorks") }:</span> { t("selectionSortLogic") }
			</li>
			<li className="mb-2">
				<span className="font-semibold">{ t("advantages") }:</span> { t("selectionSortAdvantages") } 
			</li>
			<li className="mb-2">
				<span className="font-semibold">{ t("disadvantages") }:</span> { t("selectionSortDisadvantages") }
			</li>
			<li className='mb-2'>
				<span className="font-semibold">{ t("complexity") }:</span> { t("selectionSortComplexity") }

			</li>
		</ul>
	)
}

