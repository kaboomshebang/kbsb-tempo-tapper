export function Tempo() {
	return (
		<div id="tempo">
			<div className="button-wrapper">
				<button>Reset</button>
			</div>
			<div className="tempo-wrapper">
				<div>
					<span className="int">124</span>
					<span className="float">.5</span>
					<span className="bpm">BPM</span>
				</div>
			</div>
		</div>
	);
}
