import PropTypes from 'prop-types';

function Title({ text }) {
	return (
		<div className="home-section-title">
			<h4>{text}</h4>
		</div>
	);
}

Title.propTypes = {
	text: PropTypes.string.isRequired,
}

export default Title;