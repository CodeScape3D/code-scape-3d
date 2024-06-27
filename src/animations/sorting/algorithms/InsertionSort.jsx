import { useTranslation } from "react-i18next";
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

export const InsertionSortInfo = () => {

	const { t } = useTranslation()

	return (
		<ul className="list-disc list-inside text-sm">
			<li className="mb-2">
				<span className="font-semibold">{ t("howWorks") }:</span> { t("insertionSortLogic") }
			</li>
			<li className="mb-2">
				<span className="font-semibold">{ t("advantages") }:</span> { t("insertionSortAdvantages") }
			</li>
			<li className="mb-2">
				<span className="font-semibold">{ t("disadvantages") }:</span> { t("insertionSortDisadvantages") }
			</li>
			<li className='mb-2'>
				<span className="font-semibold"> { t("complexity") } :</span>
				<ul className="list-disc list-inside ml-4">
					<li className="mb-1">
						<span className="font-semibold"> { t("worstCase") } :</span> { t("insertionSortWorstCase") }
					</li>
					<li className="mb-1">
						<span className="font-semibold"> { t("bestCase") } :</span> { t("insertionSortBestCase") }
					</li>
					<li className="mb-1">
						<span className="font-semibold"> { t("averageCase") } :</span> { t("insertionSortAverageCase") }
					</li>
				</ul>
			</li>
		</ul>
	)
}


