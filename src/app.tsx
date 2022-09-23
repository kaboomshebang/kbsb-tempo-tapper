import { useState } from 'react';
import { NavBar } from './components/navBar';
import { TapBox } from './components/tapBox';
import { Reset } from './components/reset';
import { Stats } from './components/stats';
import { Tempo } from './components/tempo';

export function App() {
	// tap timestamps; number of taps; time between taps in ms
	const [time, setTime] = useState([]);
	const [taps, setTaps] = useState(0);
	const [bpmIntervals, setBpmIntervals] = useState([]);
	const [bpmAverages] = useState([]);

	let tempo;

	// calculate the bpmIntervals in beats/minute
	function calcIntervals() {
		if (taps > 1) {
			// difference between "the last array item" - "the one before"
			const interval = time[time.length - 1] - time[time.length - 2];
			// 1000ms / interval === Bps * 60 === Bpm
			bpmIntervals.push((1000 / interval) * 60);
		}
	}
	calcIntervals();

	// calculate the average bpm
	function calcAverageBpm() {
		if (bpmIntervals.length > 1) {
			// sum all the bpmIntervals
			const summedBpms = bpmIntervals.reduceRight((acc, curr, i, arr) => {
				return acc + curr;
			});
			bpmAverages.push(summedBpms / bpmIntervals.length);
		}
	}
	calcAverageBpm();

	function calcTempo() {
		if (bpmAverages.length > 1) {
			// calculate the average of all the averages
			const sum = bpmAverages.reduce((acc, curr) => {
				return acc + curr;
			});
			return sum / bpmAverages.length;
		}
	}

	tempo = calcTempo();

	return (
		<>
			<NavBar />
			<main>
				<Tempo taps={taps} tempoInt={tempoInt} tempoFloat={tempoFloat}>
					<Reset
						tapHandler={setTaps}
						resetHandler={setTime}
						bpmIntervalsHandler={setBpmIntervals}
						bpmAveragesHandler={setBpmAverages}
						tempoHandler1={setTempo1}
						tempoHandler2={setTempo2}
					/>
				</Tempo>
				<TapBox taps={taps} tapHandler={setTaps} time={time} timeHandler={setTime} />
				<Stats taps={taps} tempo1={tempo1} tempo2={tempo2} />
			</main>
		</>
	);
}
