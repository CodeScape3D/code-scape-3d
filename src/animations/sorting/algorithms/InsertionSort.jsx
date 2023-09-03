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
	return (
		<ul className="list-disc list-inside text-sm">
			<li className="mb-2">
				<span className="font-semibold">Cómo funciona:</span> Construye una lista ordenada uno por uno insertando elementos no ordenados en su posición correcta.
			</li>
			<li className="mb-2">
				<span className="font-semibold">Ventajas:</span> Simple y eficiente para listas pequeñas o casi ordenadas.
			</li>
			<li className="mb-2">
				<span className="font-semibold">Desventajas:</span> Ineficiente para listas grandes, complejidad de tiempo cuadrática.
			</li>
			<li className='mb-2'>
				<span className="font-semibold">Complejidad:</span> O(n^2).
			</li>
		</ul>
	)
}


