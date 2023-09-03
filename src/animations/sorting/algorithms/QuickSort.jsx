import { swap, newTrace, moveInHistoryRecord, lastSorted, createRange, createKey } from "./helpers";

export const QuickSort = (nums) => {
	const stepHistory = newTrace(nums);

	function choosePivot(array, start, end) {
		return Math.floor(Math.random() * (end - start)) + start;
	}

	function partition(array, start, end) {
		let i = start + 1;
		let j = start + 1;

		moveInHistoryRecord(stepHistory, array, lastSorted(stepHistory), [start]);

		while (j <= end) {
			if (array[j] < array[start]) {
				moveInHistoryRecord(
					stepHistory,
					array,
					lastSorted(stepHistory),
					[start],
					[j],
					[],
					createRange(start + 1, i)
				);

				swap(array, i, j);

				moveInHistoryRecord(
					stepHistory,
					array,
					lastSorted(stepHistory),
					[start],
					[i],
					[],
					createRange(start + 1, i)
				);
				i += 1;
			}
			j += 1;
		}

		moveInHistoryRecord(
			stepHistory,
			array,
			lastSorted(stepHistory),
			[i - 1],
			[],
			[],
			createRange(start, i - 1)
		);
		swap(array, start, i - 1);

		moveInHistoryRecord(
			stepHistory,
			array,
			lastSorted(stepHistory),
			[i - 1],
			[],
			[],
			createRange(start, i - 1)
		);
		return i - 1;
	}

	function recursiveQuickSort(array, start, end) {
		if (start >= end) {
			if (start === end) {
				moveInHistoryRecord(stepHistory, array, [...lastSorted(stepHistory), start]);
			}
			return null;
		}

		let pivot = choosePivot(array, start, end);

		moveInHistoryRecord(stepHistory, array, lastSorted(stepHistory), [pivot]);

		swap(array, start, pivot);

		moveInHistoryRecord(stepHistory, array, lastSorted(stepHistory), [pivot]);

		pivot = partition(array, start, end);

		moveInHistoryRecord(stepHistory, array, [...lastSorted(stepHistory), pivot]);

		recursiveQuickSort(array, start, pivot - 1);
		recursiveQuickSort(array, pivot + 1, end);
	}

	recursiveQuickSort(nums, 0, nums.length - 1);

	return stepHistory;
};

export const QuickSortLegend = createKey("Comparing", "Swapping", null, "Strictly less than Pivot");

export const QuickSortCode = ({ codeRef }) => {
	return (
		<code ref={codeRef}>
			<pre>{`for each (unsorted) partition
set random element as pivot
	storeIndex = pivotIndex+1`}</pre>
			<pre>{`	for i = pivotIndex+1 to rightmostIndex
		if (a[i] < a[pivot])`}</pre>
			<pre>{`			swap(i, storeIndex); storeIndex++`}</pre>
			<pre>{`	swap(pivot, storeIndex-1)`}</pre>
		</code>
	)
}

export const QuickSortInfo = () => {
	return (
		<ul className="list-disc list-inside text-sm">
			<li className="mb-2">
				<span className="font-semibold">Cómo funciona:</span> Divide la lista en subconjuntos más pequeños y luego los ordena recursivamente.
			</li>
			<li className="mb-2">
				<span className="font-semibold">Ventajas:</span> Eficiente en la mayoría de los casos, in situ (no requiere memoria adicional).
			</li>
			<li className="mb-2">
				<span className="font-semibold">Desventajas:</span> No es estable, puede ser lento en listas casi ordenadas.
			</li>
			<li className='mb-2'>
				<span className="font-semibold">Complejidad:</span>
				<ul className="list-disc list-inside ml-4">
					<li className="mb-1">
						<span className="font-semibold">Peor caso:</span>  (raro, pero posible si se elige un pivote desfavorable): O(n^2)
					</li>
					<li className="mb-1">
						<span className="font-semibold">Mejor caso y promedio:</span> (en la mayoría de los casos): O(n log n)
					</li>
				</ul>
			</li>
		</ul>
	)
}
