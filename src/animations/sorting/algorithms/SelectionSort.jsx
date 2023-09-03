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
	return (
		<ul className="list-disc list-inside text-sm">
			<li className="mb-2">
				<span className="font-semibold">Cómo funciona:</span> Encuentra el elemento mínimo y lo coloca al principio, luego repite el proceso para el resto de la lista.
			</li>
			<li className="mb-2">
				<span className="font-semibold">Ventajas:</span> Simple y útil para listas pequeñas.
			</li>
			<li className="mb-2">
				<span className="font-semibold">Desventajas:</span> Ineficiente para listas grandes, no es estable, complejidad de tiempo cuadrática.
			</li>
			<li className='mb-2'>
				<span className="font-semibold">Complejidad:</span>
				<ul className="list-disc list-inside ml-4">
					<li className="mb-1">
						<span className="font-semibold">Todos los casos:</span> O(n^2), ya que siempre realiza el mismo número de comparaciones y movimientos de elementos, independientemente del estado inicial de la lista.
					</li>
				</ul>
			</li>
		</ul>
	)
}

