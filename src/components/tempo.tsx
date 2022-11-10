export const Tempo = (props) => {
	return (
		<div id="tempo">
			{props.children}
			<div className="tempo-wrapper">
				<div>
					<span className="int">{props.tempoInt}</span>
					<span className="float">.{props.tempoFloat}</span>
					<span className="bpm">BPM</span>
				</div>
			</div>
		</div>
	);
};
