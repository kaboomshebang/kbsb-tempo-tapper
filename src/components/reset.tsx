export const Reset = (props) => {
	return (
		<div id="reset-button">
			<button
				onClick={() => {
					props.resetHandler([]);
					props.tapHandler(0);
					props.bpmIntervalsHandler([]);
					props.bpmAveragesHandler([]);
				}}
			>
				Reset
			</button>
		</div>
	);
};
