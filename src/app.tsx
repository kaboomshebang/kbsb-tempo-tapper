import { NavBar } from './components/navBar';
import { TapBox } from './components/tapBox';
import { Reset } from './components/reset';
import { Tempo } from './components/tempo';

export function App() {
	return (
		<>
			<NavBar />
			<main>
				<Tempo tempo={tempo}>
					<Reset tapHandler={setTaps} resetHandler={setTime} bpmIntervalsHandler={setBpmIntervals} />
				</Tempo>
			</main>
		</>
	);
}
