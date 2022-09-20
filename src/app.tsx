import { NavBar } from './components/navBar';
import { TapBox } from './components/tapBox';
import { Tempo } from './components/tempo';

export function App() {
	return (
		<>
			<NavBar />
			<main>
				<Tempo />
				<TapBox />
			</main>
		</>
	);
}
