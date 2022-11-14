export const Reset = (props) => {
	return (
		<div id="reset-button">
			<button
				onClick={() => {
					props.timeHandler([]);
					props.tapHandler(0);
					props.resetHandler();
				}}
			>
				Reset
			</button>
		</div>
	);
};
