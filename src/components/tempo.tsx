export function Tempo(props) {
	return (
		<div id="tempo">
			{props.children}
			<div className="tempo-wrapper">
				<div>{props.tempo}</div>
				<div>
					<span className="int">124</span>
					<span className="float">.5</span>
					<span className="bpm">BPM</span>
				</div>
			</div>
		</div>
	);
}
