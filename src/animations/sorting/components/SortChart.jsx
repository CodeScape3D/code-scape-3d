import Bar from "./Bar";
import { useSelector } from "react-redux";

export const SortChart = () => {

	const { array, firstSet, secondSet, thirdSet, fourthSet, sortedSet } = useSelector(state => state.sorts);

	const maxNum = Math.max(...array);

	return (
		<div style={{ transition: '0.75s ease-in-out' }} className="flex flex-row items-end sm:h-52 h-80 p-2 md:p-4 gap-1">
			{getListOfBars(
				array,
				maxNum,
				firstSet,
				secondSet,
				thirdSet,
				fourthSet,
				sortedSet)}
		</div>
	);
};

const getListOfBars = (numbers, maxNum, firstSet, secondSet, thirdSet, fourthSet, sortedSet) => {
	return numbers.map((num, i) => {
		let width = 100 / numbers.length;
		let height = (num / maxNum) * 100;
		let firstState = firstSet.includes(i);
		let secondState = secondSet.includes(i);
		let thirdState = thirdSet.includes(i);
		let fourthState = fourthSet.includes(i);
		let sortedState = sortedSet.includes(i);

		//let margin = i === numbers.length ? "0" : width > 3 ? "0.5rem" : "0.125rem";
		return (
			<Bar
				key={`${i}_${num}`}
				width={width}
				height={height}
				value={width > 4 ? num : null}
				firstState={firstState}
				secondState={secondState}
				thirdState={thirdState}
				fourthState={fourthState}
				sortedState={sortedState}
			//style={{ marginRight: `${margin}` }}
			/>
		);
	});
};

