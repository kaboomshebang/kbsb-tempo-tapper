// add props for visibility

const iconLogo = new URL('../assets/svg/icon-shebang-bw-small-zoomed.svg', import.meta.url);
const iconCross = new URL('../assets/svg/icon-menu-cross.svg', import.meta.url);
const imgShebang = new URL('../assets/svg/image-shebang-3d.svg', import.meta.url);

export function NavMenu(props) {
	const currentYear = new Date().getFullYear();

	return (
		<div id="menu">
			<img src={iconLogo.toString()} alt="Shebang" />
			<img src={iconCross.toString()} alt="Cross" />
			<img src={imgShebang.toString()} alt="The Shebang in 3D" />
			App info
			{props.visible}
			<div>
				<p>
					Copyright &#169; {currentYear}
					<a href="https://www.kaboomshebang.com" target="_blank" rel="noopener noreferrer">
						Kaboom Shebang
					</a>
				</p>
			</div>
		</div>
	);
}
