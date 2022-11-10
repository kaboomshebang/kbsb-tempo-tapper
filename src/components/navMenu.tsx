// images
const iconLogo = new URL('../assets/svg/icon-shebang-bw-small-zoomed.svg', import.meta.url);
const iconCross = new URL('../assets/svg/icon-menu-cross.svg', import.meta.url);
const imgShebang = new URL('../assets/svg/image-shebang-3d.svg', import.meta.url);

// urls
const urlVanilla = new URL('../vanilla/index.html', import.meta.url);

export const NavMenu = (props) => {
	const currentYear = new Date().getFullYear();

	const clickHandler = () => {
		props.menuHandler(!props.menuState);
	};

	return (
		<>
			<div id="menu-bg-overlay" className={props.menuState ? 'show-menu' : 'hide-menu'}>
				{/* dark background overlay */}
			</div>
			<div id="menu" className={props.menuState ? 'show-menu' : 'hide-menu'}>
				<div className="bar">
					<a href={urlVanilla.toString()}>
						<img src={iconLogo.toString()} alt="Shebang" />
					</a>
					<button onClick={clickHandler}>
						<img src={iconCross.toString()} alt="Close menu" />
					</button>
				</div>
				{/* ------------------------------------------------- */}
				<div className="content-wrapper">
					<h3>About</h3>
					<p>
						The Kaboom BPM calculator: an application to calculate the tempo of a song.
					</p>
					<p>Instructions: tap in the rhythm to find the tempo of a piece of music.</p>
					<a
						href="https://github.com/kaboomshebang/kbsb-tempo-tapper/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Source code on: Github.com
					</a>

					<h4>Install on iOS home-screen</h4>
					<p>
						Click the on "square with arrow" icon. Scroll down. Select "Add to Home
						Screen".
					</p>
				</div>
				{/* ------------------------------------------------- */}
				<img className="shebang" src={imgShebang.toString()} alt="The Shebang in 3D" />
				<div className="menu-footer">
					<p>
						<span>Copyright &#169; {currentYear}</span>
						<a
							href="https://www.kaboomshebang.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							Kaboom Shebang
						</a>
					</p>
				</div>
			</div>
		</>
	);
};
