import React from 'react';
import './Home.css';

const Home = () => {
	return (
		<div className="home container-fluid text-bg-dark">
			<div className="fullscreen-bg"></div>
			<div className="home-text position-absolute bottom-50 start-50 translate-middle-x">
				<h1 className="display-1 fw-normal">
					Welcome to our React Router Giphy Lab!
				</h1>
			</div>
		</div>
	);
};

export default Home;
