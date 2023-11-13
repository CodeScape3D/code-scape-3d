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

export const ShellSortInfo = () => {
	return (
		<ul className="list-disc list-inside text-sm">
			<li className="mb-2">
				<span className="font-semibold">Cómo funciona:</span> consiste en dividir el arreglo (o la lista de elementos) en intervalos (o bloques) de varios elementos para organizarlos después por medio del ordenamiento de inserción directa.
			</li>
			<li className="mb-2">
				<span className="font-semibold">Ventajas:</span> Uno de los algoritmos mas rapidos, no requiere memoria adicional.
			</li>
			<li className="mb-2">
				<span className="font-semibold">Desventajas:</span> Poco estable ya que pierde orden relativo, no utiliza pivote.
			</li>
			<li className='mb-2'>
				<span className="font-semibold">Complejidad:</span> La complejidad de Shell Sort depende del tipo de secuencia de incrementos que se utilice. La complejidad en el peor caso generalmente se considera entre O(n log^2 n) y O(n^2), según la secuencia de incrementos utilizada. La elección de la secuencia de incrementos puede afectar significativamente el rendimiento del algoritmo.
			</li>
		</ul>
	)
}
