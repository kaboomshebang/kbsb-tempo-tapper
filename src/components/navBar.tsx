import { useState } from 'react';
import { NavMenu } from './navMenu';

const logoKaboom = new URL('../assets/svg/logo-kaboom.svg', import.meta.url);
const iconBurger = new URL('../assets/svg/icon-burger.svg', import.meta.url);

export const NavBar = () => {
	const [menu, setMenu] = useState(false);

	const handleClick = () => {
		setMenu(!menu);
	};

	return (
		<div id="navbar">
			<div>
				<h1>
					<a
						href="https://www.kaboomshebang.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={logoKaboom.toString()} alt="Kaboom" />
					</a>
				</h1>
				<h2>
					BPM Tempo Tapper <span className="nav-url">bpm.kbsb.app</span>
				</h2>
			</div>
			<button onClick={handleClick}>
				<img src={iconBurger.toString()} alt="Menu" />
			</button>
			<NavMenu menuState={menu} menuHandler={setMenu} />
		</div>
	);
};
