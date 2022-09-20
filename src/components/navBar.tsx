import { NavMenu } from './navMenu';

const logoKaboom = new URL('../assets/svg/logo-kaboom.svg', import.meta.url);
const iconBurger = new URL('../assets/svg/icon-burger.svg', import.meta.url);

export function NavBar() {
	console.log(logoKaboom);
	return (
		<div id="navbar">
			<div>
				<h1>
					<img src={logoKaboom.toString()} alt="Kaboom" />
				</h1>
				<h2>BPM Tempo Tapper</h2>
			</div>
			<button
				onClick={() => {
					console.log('click');
				}}
			>
				<img src={iconBurger.toString()} alt="Menu" />
			</button>
			<NavMenu visible={false} />
		</div>
	);
}
