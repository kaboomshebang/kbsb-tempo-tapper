export const Stats = (props) => {
	return (
		<div id="stats-wrapper" className={props.taps > 3 ? `show` : ``}>
			<div>T: {props.taps}</div>
		</div>
	);
};
