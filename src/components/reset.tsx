export function Reset(props) {
	return (
		<div className="button-wrapper">
			<button
				onClick={() => {
					props.resetHandler([]);
					props.tapHandler(0);
					props.bpmIntervalsHandler([]);
				}}
			>
				Reset
			</button>
		</div>
	);
}
