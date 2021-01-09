function Layout({ name, children, ...props }) {
	return (
		<main className={name} {...props}>
			{children}
		</main>
	);
}

export default Layout;
