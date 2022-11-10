export const TapBox = (props) => {
	const clickHandler = () => {
		props.tapHandler(props.taps + 1);
		props.timeHandler([...props.time, new Date().getTime()]);
	};

	return (
		<div id="tapbox">
			<button onClick={clickHandler}>
				<svg
					width="196"
					height="178"
					viewBox="0 0 196 178"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M195.789 132.111H144.337V176.895H195.789V132.111Z" fill="#fff" />
					<path d="M195.789 1.66211H144.337V110.529H195.789V1.66211Z" fill="#fff" />
					<path
						d="M68.8154 135.731H42.8539L39.2201 177.272H13.2579L16.8925 135.731H0.211548V104.577H19.618L22.798 68.2308H0.211548V37.0769H25.5234L28.7034 0.727722H54.665L51.485 37.0769H77.4464L80.6264 0.727722H106.588L103.408 37.0769H119.634V68.2308H100.683L97.5025 104.577H119.635V135.731H94.777L91.1426 177.272H65.181L68.8154 135.731ZM74.7209 68.2308H48.7594L45.5794 104.58H71.541L74.7209 68.2308Z"
						fill="#fff"
					/>
				</svg>
			</button>
		</div>
	);
};
