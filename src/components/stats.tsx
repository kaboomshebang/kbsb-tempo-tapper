export const Stats = (props) => {
	return (
		<div id="stats-wrapper" className={props.taps > 3 ? `show` : ``}>
			<div>T: {props.taps}</div>
			<div>(A+B+C) / T: {props.tempo1}</div>
			<div>(A-Z) / T: {props.tempo2}</div>
		</div>
	);
};
