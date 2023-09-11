const Bar = ({
	width,
	height,
	value,
	firstState,
	secondState,
	thirdState,
	fourthState,
	sortedState,
	style,
}) => {
	const getBackgroundColor = () => {
		if (sortedState) return "bg-success";
		if (fourthState) return "bg-quaternary";
		if (thirdState) return "bg-danger";
		if (secondState) return "bg-primary";
		if (firstState) return "bg-secondary";
		return "bg-neutral-400";
	};

	const barStyling = {
		...style,
		width: `${width}%`,
		height: `${height}%`,
	};

	const barClassName = `rounded-md shadow-md text-text-color-dark flex flex-col-reverse items-center transition duration-150 ease-in-out ${getBackgroundColor()}`;

	return (
		<div style={barStyling} className={barClassName}>
			<span className="text-sm font-bold text-gray-900 mb-1">{value}</span>
		</div>
	);
};

export default Bar;
