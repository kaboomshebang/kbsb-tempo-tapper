import { useState, useEffect } from 'react';
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

	// prepare values for DOM rendering
	let tempo = 0;
	let tempoInt = '0';
	let tempoFloat = '0';

	// calculate the bpmIntervals in beats/minute
	const calcIntervals = () => {
		// difference between "the last array item" - "the one before"
		const interval = time[time.length - 1] - time[time.length - 2];
		// 1000ms / interval === Bps * 60 === Bpm
		const bpm = (1000 / interval) * 60;

		bpmIntervals.push(Math.floor(bpm * 10) / 10);
	};

	// calculate the bpm averages
	const calcAverageBpm = () => {
		// sum all the bpmIntervals
		const summedBpms = bpmIntervals.reduceRight((acc, curr) => acc + curr);
		const bpm = summedBpms / bpmIntervals.length;
		bpmAverages.push(Math.floor(bpm * 10) / 10);
	};

	// calculate the mean of the last 10 bpm averages
	const calcMeanLastX = (x) => {
		// sum all the bpmIntervals
		const last10 = bpmAverages.slice(x * -1);
		const summedLast10 = last10.reduceRight((acc, curr) => {
			// console.log(i, acc + curr);
			return acc + curr;
		});
		const bpm = summedLast10 / last10.length;
		// setTempo(Math.floor(bpm * 10) / 10);
		tempo = Math.floor(bpm * 10) / 10;
	};

	// calculate the tempo
	const executeCalculations = () => {
		if (taps > 1) {
			calcIntervals();
		}
		if (bpmIntervals.length > 1) {
			calcAverageBpm();
		}
		if (taps > 3) {
			taps < 10 && calcMeanLastX(2);
			taps >= 10 && calcMeanLastX(taps - Math.floor(taps * 0.5));

			// convert tempo to int and float for tempo component
			let digits = tempo.toFixed(0).toString().length;
			tempoInt = tempo.toString().slice(0, digits);
			tempoFloat = tempo.toFixed(1).slice(-1);
		}
	};
	executeCalculations();

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
					/>
				</Tempo>
				<TapBox tapHandler={setTaps} timeHandler={setTime} />
				<Stats taps={taps} />
			</main>
		</>
	);
};
