import PropTypes from 'prop-types';

function Hero({ image, smallTitle, technologies, title }) {
	return (
		<section className="home-hero">
			<div className="container">
				<div className="row">
					<div className="col-lg-5">
						<div className="home-hero-small-title">{smallTitle}</div>
						<div className="home-hero-title">{title}</div>
						{technologies && (
							<div className="home-hero-technologies">
								{technologies.map((item, i) => (
									<div className="home-hero-technologies-item" key={i}>
										<a href={item.link} target="_blank">
											<i>
												<img src={item.icon} alt="javascript" />
											</i>
										</a>
									</div>
								))}
							</div>
						)}
					</div>
					<div className="col-lg-4 ml-auto">
						<div className="home-hero-wallpaper" style={{backgroundImage: `url('${image}')`}}></div>
					</div>
				</div>
			</div>
		</section>
	);
}

Hero.propTypes = {
	image: PropTypes.string.isRequired,
	smallTitle: PropTypes.string.isRequired,
	technologies: PropTypes.arrayOf(PropTypes.shape({
		link: PropTypes.string.isRequired,
		icon: PropTypes.string.isRequired,
	})),
};

export default Hero;