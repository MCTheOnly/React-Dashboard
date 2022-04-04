const Header = () => {
	return (
		<header className="header__wraper">
			<h2>Site Logo</h2>
			<nav className="header__nav">
				<a href="/">Home</a>
				<a href="/" style=
					{
						{
							color: 'red',
							textDecoration: 'none',
						}
					}
				>Contact Us</a>
			</nav>
		</header>
	);
}

export default Header;
