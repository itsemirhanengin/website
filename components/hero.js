function Hero() {
	return (
		<section className="home-hero">
			<div className="container">
				<div className="row">
					<div className="col-lg-5">
						<div className="home-hero-small-title">Hi! I'm Emirhan Engin</div>
						<div className="home-hero-title">I work at <a href="https://basework.studio" target="_blank">Basework Studio</a> and I'm a Front-End Developer</div>
						<div className="home-hero-technologies">
							<div className="home-hero-technologies-item">
								<a href="https://developer.mozilla.org/tr/docs/Web/JavaScript" target="_blank">
									<i>
										<img src="/javascript.svg" alt="javascript" />
									</i>
								</a>
							</div>
							<div className="home-hero-technologies-item">
								<a href="https://graphql.org" target="_blank">
									<i>
										<img src="/graphql.svg" alt="graphql" />
									</i>
								</a>
							</div>
							<div className="home-hero-technologies-item">
								<a href="https://reactjs.org/" target="_blank">
									<i>
										<img src="/react.svg" alt="react" />
									</i>
								</a>
							</div>
						</div>
					</div>
					<div className="col-lg-4 ml-auto">
						<div className="home-hero-wallpaper" style={{backgroundImage: 'url("/wallpaper.png")'}}></div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;