import { useTranslation } from "react-i18next";
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

export const BubbleSortInfo = () => {

	const { t } = useTranslation()

	return (
		<ul className="list-disc list-inside text-sm">
			<li className="mb-2">
				<span className="font-semibold">{ t("howWorks") }</span> { t("bubbleSortLogic") }
			</li>
			<li className="mb-2">
				<span className="font-semibold"> { t("advantages") } :</span> { t("bubbleSortAdvantages") }.
			</li>
			<li className="mb-2">
				<span className="font-semibold">{t("disadvantages")}:</span> { t("bubbleSortDisadvantages") }
			</li>
			<li className="mb-2">
				<span className="font-semibold">{ t("complexity") }:</span>
				<ul className="list-disc list-inside ml-4">
					<li className="mb-1">
						<span className="font-semibold">{ t("worstCase") }:</span> O(n^2)
					</li>
					<li className="mb-1">
						<span className="font-semibold"> { t("bestCase") } :</span> ({ t("bubbleSortBestCase") }): O(n)
					</li>
					<li className="mb-1">
						<span className="font-semibold">{ t("averageCase") }:</span> O(n^2)
					</li>
				</ul>
			</li>
		</ul>
	);
};



