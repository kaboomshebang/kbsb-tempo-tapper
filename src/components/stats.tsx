export const Stats = (props) => {
	return (
		<div id="stats-wrapper" className={props.taps > 3 && props.taps < 120 && `show`}>
			<div
				style={{
					left: `min(${props.taps < 90 ? props.taps : 90}%, calc(100% - 3rem) )`,
				}}
			>
				T: {props.taps}
			</div>
		</div>
	);
};
