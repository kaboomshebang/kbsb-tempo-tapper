import { useEffect, useState } from 'react';
import { NavBar } from './components/navBar';
import { TapBox } from './components/tapBox';
import { Reset } from './components/reset';
import { Stats } from './components/stats';
import { Tempo } from './components/tempo';

export const App = () => {
	// tap timestamps; number of taps; time between taps in ms
	const [time, setTime] = useState([]);
	const [taps, setTaps] = useState(0);
	const [bpmIntervals, setBpmIntervals] = useState([]);
	const [bpmAverages, setBpmAverages] = useState([]);
	let [tempo1, setTempo1] = useState(undefined);
	let [tempo2, setTempo2] = useState(undefined);

	let tempo = 0;
	let tempoInt = '0';
	let tempoFloat = '0';

	// calculate the bpmIntervals in beats/minute
	const calcIntervals = () => {
		if (taps > 1) {
			// difference between "the last array item" - "the one before"
			const interval = time[time.length - 1] - time[time.length - 2];
			// 1000ms / interval === Bps * 60 === Bpm
			const bpm = (1000 / interval) * 60;
			bpmIntervals.push(Math.floor(bpm * 10) / 10);
		}
	};
	calcIntervals();

	// calculate the average bpm
	const calcAverageBpm = () => {
		if (bpmIntervals.length > 1) {
			// sum all the bpmIntervals
			const summedBpms = bpmIntervals.reduceRight((acc, curr) => {
				return acc + curr;
			});
			const bpm = summedBpms / bpmIntervals.length;
			bpmAverages.push(Math.floor(bpm * 10) / 10);
		}
	};
	calcAverageBpm();

	function calcAverageOverBPMs() {
		if (bpmAverages.length > 1) {
			// calculate the average of all the averages
			const sum = bpmAverages.reduce((acc, curr) => {
				return acc + curr;
			});
			return Math.floor((sum / bpmAverages.length) * 10) / 10;
		}
	}

	const calcAverageOverTotalTime = () => {
		if (taps > 3) {
			// for accuracy: skip the first two timestamp
			// difference between first timestamp and latest timestamp
			let totalDiff = time[time.length - 1] - time[2];
			// crosstable // 60000(ms) : bpm // time(ms) : taps
			let bps = totalDiff / (time.length - 3);
			let bpm = (1000 / bps) * 60;
			return Math.floor(bpm * 10) / 10;
		}
	};

	// combine the 2 different measurements
	const calcCombineMeasurements = () => {
		tempo1 = calcAverageOverTotalTime();
		tempo2 = calcAverageOverBPMs();

		if (taps > 3) {
			// the averageOverTotalTime weighs more
			tempo = (tempo1 * 4 + tempo2) / 5;
			// convert to int and float for tempo component
			let digits = tempo.toFixed(0).toString().length;
			tempoInt = tempo.toString().slice(0, digits);
			tempoFloat = tempo.toFixed(1).slice(-1);
			// slice digits for stats component
			tempo1 = tempo1.toFixed(1);
			tempo2 = tempo2.toFixed(1);
		}
	};
	calcCombineMeasurements();

	useEffect(() => {
		console.log('Update');
	}, [time, taps]);

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
};
