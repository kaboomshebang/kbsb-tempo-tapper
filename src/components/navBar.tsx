import { useState } from 'react';
import { NavMenu } from './navMenu';
import { ExternalLink } from './externalLink';

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
					<ExternalLink url="https://www.kaboomshebang.com">
						<img src={logoKaboom.toString()} alt="Kaboom" />
					</ExternalLink>
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
