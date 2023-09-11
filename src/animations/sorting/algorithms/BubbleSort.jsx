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
	return (
		<ul className="list-disc list-inside text-sm">
			<li className="mb-2">
				<span className="font-semibold">Cómo funciona:</span> Compara y reordena elementos adyacentes hasta que la lista esté ordenada.
			</li>
			<li className="mb-2">
				<span className="font-semibold">Ventajas:</span> Fácil de entender y usar, útil para listas pequeñas, requiere poca memoria adicional.
			</li>
			<li className="mb-2">
				<span className="font-semibold">Desventajas:</span> Ineficiente para listas grandes, no es estable, complejidad de tiempo cuadrática.
			</li>
			<li className="mb-2">
				<span className="font-semibold">Complejidad:</span>
				<ul className="list-disc list-inside ml-4">
					<li className="mb-1">
						<span className="font-semibold">Peor caso:</span> O(n^2)
					</li>
					<li className="mb-1">
						<span className="font-semibold">Mejor caso:</span> (si se agrega una bandera para detectar que la lista ya está ordenada): O(n)
					</li>
					<li className="mb-1">
						<span className="font-semibold">Caso promedio:</span> O(n^2)
					</li>
				</ul>
			</li>
		</ul>
	);
};



