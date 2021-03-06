import Link from 'next/link';

function Header() {
	return (
		<header>
			<Link href="/">
				<a>
					<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M60 30C60 46.5685 46.5685 60 30 60C13.4315 60 0 46.5685 0 30C0 13.4315 13.4315 0 30 0C46.5685 0 60 13.4315 60 30ZM4.5 30C4.5 44.0833 15.9167 55.5 30 55.5C44.0833 55.5 55.5 44.0833 55.5 30C55.5 15.9167 44.0833 4.5 30 4.5C15.9167 4.5 4.5 15.9167 4.5 30Z" fill="white"/>
					</svg>
				</a>
			</Link>
		</header>
	);
}

export default Header;
